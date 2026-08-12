#!/usr/bin/env python3
"""Consolidate the SEC fails-to-deliver archive into one queryable Parquet file.

Reads every cnsfails*.zip / cnsp_sec_fails_*.zip produced by fetch_ftd.sh,
normalizes the six pipe-delimited columns, drops the per-file trailer rows,
and writes a single zstd-compressed Parquet plus a per-file manifest.csv.

Requires: duckdb, pyarrow  (pip install duckdb pyarrow)
Usage:    python build_parquet.py [RAW_DIR]   (default: ./raw)
"""
import duckdb, glob, os, sys, zipfile, csv

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, "raw")
EXTRACT = os.path.join(HERE, "extracted")
PARQUET_DIR = os.path.join(HERE, "parquet")
os.makedirs(EXTRACT, exist_ok=True)
os.makedirs(PARQUET_DIR, exist_ok=True)

# 1. Extract each zip to ONE txt named after the zip (some quarterly zips hold
#    several monthly txts; `unzip -p` concatenates them, so stream all members).
zips = sorted(glob.glob(os.path.join(RAW, "*.zip")))
print(f"Extracting {len(zips)} archives -> {EXTRACT}")
for zp in zips:
    out = os.path.join(EXTRACT, os.path.basename(zp).replace(".zip", ".txt"))
    with zipfile.ZipFile(zp) as z, open(out, "wb") as fh:
        for name in z.namelist():
            with z.open(name) as m:
                fh.write(m.read())

# 2. Load + normalize with DuckDB. Trailer rows ("Trailer record count ...")
#    and repeated headers are dropped by requiring an 8-digit settlement date.
d = duckdb.connect()
d.execute("PRAGMA threads=4")
glob_txt = os.path.join(EXTRACT, "*.txt")
d.execute(f"""
CREATE VIEW ftd AS
SELECT
  TRY_CAST(strptime("SETTLEMENT DATE", '%Y%m%d') AS DATE) AS settlement_date,
  "CUSIP"                                                 AS cusip,
  "SYMBOL"                                                AS symbol,
  TRY_CAST("QUANTITY (FAILS)" AS BIGINT)                  AS fails,
  "DESCRIPTION"                                           AS description,
  TRY_CAST(NULLIF("PRICE", '.') AS DOUBLE)               AS price
FROM read_csv('{glob_txt}', delim='|', header=true, all_varchar=true, ignore_errors=true)
WHERE "SETTLEMENT DATE" SIMILAR TO '[0-9]{{8}}'
""")

n = d.execute("SELECT count(*) FROM ftd").fetchone()[0]
out_parquet = os.path.join(PARQUET_DIR, "ftd_all.parquet")
d.execute(f"""
COPY (SELECT settlement_date, cusip, symbol, fails, description, price,
             CAST(year(settlement_date) AS SMALLINT) AS yr
      FROM ftd ORDER BY settlement_date, symbol)
TO '{out_parquet}' (FORMAT parquet, COMPRESSION zstd, ROW_GROUP_SIZE 1000000)
""")
print(f"Wrote {out_parquet}: {n:,} rows, {os.path.getsize(out_parquet)/1e6:.0f} MB")

# 3. Per-file manifest (coverage + counts) built one file at a time.
rows = []
for fp in sorted(glob.glob(glob_txt)):
    r = d.execute(
        'SELECT count(*), min("SETTLEMENT DATE"), max("SETTLEMENT DATE"), '
        'sum(TRY_CAST("QUANTITY (FAILS)" AS BIGINT)) '
        "FROM read_csv(?, delim='|', header=true, all_varchar=true, ignore_errors=true) "
        "WHERE \"SETTLEMENT DATE\" SIMILAR TO '[0-9]{8}'", [fp]).fetchone()
    rows.append((os.path.basename(fp).replace(".txt", ".zip"), r[0], r[1], r[2], r[3]))
rows.sort(key=lambda x: (x[2] or "", x[0]))
with open(os.path.join(HERE, "manifest.csv"), "w", newline="") as fh:
    w = csv.writer(fh)
    w.writerow(["file", "data_rows", "min_settlement", "max_settlement", "sum_fail_quantity"])
    w.writerows(rows)
print(f"Wrote manifest.csv: {len(rows)} files, {sum(x[1] for x in rows):,} total rows")
