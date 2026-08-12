# SEC Fails-to-Deliver (FTD) Archive

The complete public history of the SEC's fails-to-deliver dataset, downloaded from
sec.gov, plus tooling to rebuild it and a consolidated Parquet for analysis.

A **fail-to-deliver (FTD)** occurs when one side of a trade does not deliver the
security (or cash) by the settlement date. The SEC publishes, for each settlement
date, the total number of shares of each security (by CUSIP) that remained failed
in the National Securities Clearing Corporation's Continuous Net Settlement (CNS)
system. It is one of the only public windows into settlement stress, naked
shorting pressure, and hard-to-borrow dynamics.

## Coverage

| | |
|---|---|
| Files | **425** (all SEC FTD files) |
| Rows | **27,551,798** |
| Date span | **2004-03-22 → 2026-07-14** |
| Distinct symbols | 71,277 |
| Distinct settlement dates | 5,512 |
| Raw download | ~591 MB (zips) |
| Consolidated Parquet | ~235 MB (zstd) |

Two eras, same six-column schema:
- **2004 Q1 – 2009 Q2** — quarterly FOIA back-set (`cnsp_sec_fails_YYYYqN.zip`, each holding ~3 monthly text files).
- **2009 Jul – present** — the regular semi-monthly files (`cnsfailsYYYYMM{a,b}.zip`; `a` = 1st–15th settlements, `b` = 16th–EOM), published on a ~1-month lag.

## What's in this directory

| Path | Committed? | What |
|---|---|---|
| `fetch_ftd.sh` | ✅ | Scrapes the SEC listing page and downloads all 425 zips. |
| `build_parquet.py` | ✅ | Extracts + normalizes everything into `parquet/ftd_all.parquet` and rebuilds `manifest.csv`. |
| `ftd_file_urls.txt` | ✅ | The 425 source URLs (snapshot; `fetch_ftd.sh` re-derives them live). |
| `manifest.csv` | ✅ | Per-file index: rows, settlement-date range, summed fail quantity. |
| `raw/` | ❌ (gitignored) | The 425 downloaded `.zip` files. |
| `extracted/` | ❌ (gitignored) | Intermediate `.txt` (one per zip). |
| `parquet/ftd_all.parquet` | ❌ (gitignored) | Consolidated, queryable dataset. |

The large binaries are **git-ignored on purpose**: GitHub rejects files >100 MB, and
committing ~600 MB of regenerable data bloats history permanently. Everything
rebuilds from the two scripts in a couple of minutes.

## Rebuild from scratch

```bash
# 1. set a descriptive User-Agent (SEC returns 403 without one)
export SEC_UA="YourName Research your.email@example.com"
./fetch_ftd.sh                 # -> raw/*.zip  (425 files)

# 2. consolidate (needs: pip install duckdb pyarrow)
python build_parquet.py        # -> parquet/ftd_all.parquet  + manifest.csv
```

## Schema (`parquet/ftd_all.parquet`)

| column | type | notes |
|---|---|---|
| `settlement_date` | DATE | the settlement day the fails were open |
| `cusip` | VARCHAR | primary key in the raw file; map to tickers via a CUSIP master |
| `symbol` | VARCHAR | as reported (can be stale/blank; not the join key) |
| `fails` | BIGINT | total shares failed in CNS on that date, **all participants aggregated** |
| `description` | VARCHAR | security description |
| `price` | DOUBLE | closing price on the prior day (`.`/null before ~2013) |
| `yr` | SMALLINT | `year(settlement_date)`, for partition pruning |

## Query examples (DuckDB)

```sql
-- GME fails through the Jan-2021 squeeze
SELECT settlement_date, fails, price
FROM 'parquet/ftd_all.parquet'
WHERE symbol = 'GME' AND settlement_date BETWEEN '2021-01-01' AND '2021-02-15'
ORDER BY settlement_date;

-- persistent offenders: names on the file the most days, last 3 years
SELECT symbol, count(*) days, avg(fails)::BIGINT avg_fails
FROM 'parquet/ftd_all.parquet'
WHERE settlement_date >= '2023-01-01' AND symbol <> ''
GROUP BY symbol HAVING days > 100 ORDER BY avg_fails DESC LIMIT 50;

-- a name's fails normalized against its own history (z-score of a spike)
SELECT settlement_date, fails,
       (fails - avg(fails) OVER w) / NULLIF(stddev_pop(fails) OVER w, 0) AS z
FROM 'parquet/ftd_all.parquet' WHERE symbol = 'XRT'
WINDOW w AS (ORDER BY settlement_date ROWS BETWEEN 26 PRECEDING AND 1 PRECEDING)
ORDER BY z DESC LIMIT 20;
```

## Read this before you trade on it

These pitfalls are why naive FTD strategies disappoint. They are baked into the
data, not fixable in the query:

1. **~1-month publication lag.** Files post about a month after the settlement
   dates they cover. Any backtest must lag the signal to when it was *actually
   knowable*, or it is look-ahead. This alone kills most intraday/short-horizon ideas.
2. **Snapshot, not flow.** Each row is *cumulative open* fails on that date, not
   new fails. A flat high number can be one stuck position or churn; you cannot
   tell from this file.
3. **Aggregated across all participants** and **gives no reason.** The file cannot
   separate abusive naked shorting from benign operational/long fails, market-maker
   activity, or settlement hiccups. "FTDs = naked shorting" is not supported by the data.
4. **ETFs dominate.** Creation/redemption lets authorized participants deliver
   late, so large ETF fails (e.g., IWM, XRT) are often structurally benign
   "operational shorting," not distress. Pool ETFs and single names separately.
5. **CUSIP is the key, not `symbol`.** Symbols are reused and go stale across
   corporate actions; join on CUSIP with point-in-time mapping.
6. **Micro-cap skew.** The largest fails are penny stocks (the all-time record is a
   ~2-billion-share fail in a sub-penny name). Screen by float/liquidity or the tail dominates.

## Source & terms

Public data from the U.S. SEC:
<https://www.sec.gov/data-research/sec-markets-data/fails-deliver-data>.
Automated access requires a descriptive `User-Agent`
(<https://www.sec.gov/os/webmaster-faq#developers>). Downloaded 2026-08-12.
