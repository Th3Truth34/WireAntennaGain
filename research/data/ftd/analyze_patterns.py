#!/usr/bin/env python3
"""Mine the SEC FTD panel for tradable structure; reproduces empirical_results.json.

The FTD file embeds a prior-day close on every row, so a per-name price series —
and forward returns — can be built from the data itself. This script:
  1. builds a feature panel (fail z-score, forward returns naive + lag-honest, events),
  2. tests the "obvious" signals (fail spike, collapse, new-entry) -> mostly null,
  3. isolates the surviving pattern: Chronic-Fail Decay (cheap + chronically failing),
  4. writes empirical_results.json (the figures used in the report and artifact).

Requires: duckdb (pip install duckdb). Input: parquet/ftd_all.parquet (see build_parquet.py).
Usage: python analyze_patterns.py
"""
import duckdb, json, os

HERE = os.path.dirname(os.path.abspath(__file__))
P = f"'{HERE}/parquet/ftd_all.parquet'"
d = duckdb.connect(); d.execute("PRAGMA threads=4")

ETF = ("(upper(description) LIKE '%ETF%' OR upper(description) LIKE '%SPDR%' OR upper(description) LIKE '%ISHARES%' "
       "OR upper(description) LIKE '%PROSHARES%' OR upper(description) LIKE '%ETN%' OR upper(description) LIKE '% FUND%' "
       "OR upper(description) LIKE '%VANGUARD%' OR upper(description) LIKE '%INDEX FD%')")

# 1. Feature panel: forward returns from embedded prices, fail z-score, chronic presence.
d.execute(f"""
CREATE TABLE panel AS
WITH base AS (
  SELECT symbol, settlement_date AS dt, fails, price, CASE WHEN {ETF} THEN 1 ELSE 0 END AS is_etf
  FROM {P} WHERE price>0 AND fails>0 AND symbol<>'' AND settlement_date>=DATE '2010-01-01'
),
w AS (
  SELECT *,
    LEAD(price,2) OVER pw AS p2, LEAD(dt,2) OVER pw AS d2,
    LEAD(price,4) OVER pw AS p4, LEAD(dt,4) OVER pw AS d4,
    LEAD(price,1) OVER pw AS p1, LEAD(dt,1) OVER pw AS d1,
    avg(ln(fails)) OVER tw AS mu, stddev_samp(ln(fails)) OVER tw AS sd,
    LAG(fails,1) OVER pw AS prevf, LAG(dt,1) OVER pw AS prevdt
  FROM base
  WINDOW pw AS (PARTITION BY symbol ORDER BY dt),
         tw AS (PARTITION BY symbol ORDER BY dt ROWS BETWEEN 8 PRECEDING AND 1 PRECEDING)
)
SELECT symbol, dt, is_etf, fails, price,
  CASE WHEN sd>0 THEN (ln(fails)-mu)/sd END AS z,
  CASE WHEN prevf IS NULL OR datediff('day',prevdt,dt)>75 THEN 1 ELSE 0 END AS is_new_entry,
  CASE WHEN prevf IS NOT NULL AND fails < 0.2*prevf THEN 1 ELSE 0 END AS is_collapse,
  CASE WHEN datediff('day',dt,d1) BETWEEN 7 AND 35 THEN p1/price-1 END AS r_np,
  CASE WHEN datediff('day',dt,d2) BETWEEN 20 AND 55 AND datediff('day',dt,d4) BETWEEN 45 AND 90 THEN p4/p2-1 END AS r_1m_lag,
  count(*) OVER (PARTITION BY symbol ORDER BY dt RANGE BETWEEN INTERVAL 180 DAY PRECEDING AND INTERVAL 1 DAY PRECEDING) AS p180
FROM w
""")

out = {}
# Baseline
r = d.execute("SELECT count(*),median(r_np),avg(CASE WHEN r_np>0 THEN 1.0 ELSE 0 END) FROM panel WHERE price>=1 AND r_np IS NOT NULL").fetchone()
out['baseline'] = {'n': r[0], 'median': r[1], 'hit': r[2]}
# Null: fail-spike z deciles, liquid single names
out['null_z_decile'] = [{'d': x[0], 'median': x[1], 'n': x[2]} for x in d.execute("""
  WITH q AS (SELECT z, r_np FROM panel WHERE is_etf=0 AND price>=5 AND z IS NOT NULL AND r_np IS NOT NULL),
  b AS (SELECT *, ntile(10) OVER (ORDER BY z) g FROM q)
  SELECT g, median(r_np), count(*) FROM b GROUP BY g ORDER BY g""").fetchall()]
# Chronic-Fail Decay: price-band gradient (chronic vs fresh), 2wk
out['price_gradient'] = []
for lo, hi in [(0.5,1),(1,2),(2,3),(3,5),(5,10),(10,20)]:
    rows = {x[0]: x for x in d.execute(f"""SELECT CASE WHEN p180>=80 THEN 1 WHEN p180<=20 THEN 0 END c, median(r_np), count(*)
      FROM panel WHERE is_etf=0 AND price>={lo} AND price<{hi} AND (p180>=80 OR p180<=20) AND r_np IS NOT NULL GROUP BY c""").fetchall()}
    if 0 in rows and 1 in rows:
        out['price_gradient'].append({'band': f'${lo}-{hi}', 'chronic': rows[1][1], 'fresh': rows[0][1], 'n_chr': rows[1][2]})
# By-year market-neutral spread
out['year_spread'] = [{'y': x[0], 'spread': x[1], 'chr': x[2], 'fresh': x[3], 'n': x[4]} for x in d.execute("""
  SELECT year(dt), median(CASE WHEN p180>=80 THEN r_np END)-median(CASE WHEN p180<=20 THEN r_np END),
    median(CASE WHEN p180>=80 THEN r_np END), median(CASE WHEN p180<=20 THEN r_np END),
    count(CASE WHEN p180>=80 AND r_np IS NOT NULL THEN 1 END)
  FROM panel WHERE is_etf=0 AND price>=0.5 AND price<5 GROUP BY 1 ORDER BY 1""").fetchall()]
# Distribution / tail of chronic low-price
r = d.execute("""SELECT count(*),avg(r_np),median(r_np),
   quantile_cont(r_np,0.05),quantile_cont(r_np,0.25),quantile_cont(r_np,0.75),quantile_cont(r_np,0.95),
   avg(CASE WHEN r_np<0 THEN 1.0 ELSE 0 END),avg(CASE WHEN r_np>0.25 THEN 1.0 ELSE 0 END)
  FROM panel WHERE is_etf=0 AND price>=0.5 AND price<5 AND p180>=80 AND r_np IS NOT NULL""").fetchone()
out['dist'] = {'n': r[0], 'mean': r[1], 'median': r[2], 'p05': r[3], 'p25': r[4], 'p75': r[5], 'p95': r[6], 'pct_down': r[7], 'pct_squeeze': r[8]}
# Lag-honest chronic vs fresh (low price)
lr = {x[0]: x for x in d.execute("""SELECT CASE WHEN p180>=80 THEN 1 WHEN p180<=20 THEN 0 END c,
   avg(greatest(-0.6,least(0.6,r_1m_lag))), median(r_1m_lag), avg(CASE WHEN r_1m_lag>0 THEN 1.0 ELSE 0 END), count(*)
  FROM panel WHERE is_etf=0 AND price>=0.5 AND price<5 AND (p180>=80 OR p180<=20) AND r_1m_lag IS NOT NULL GROUP BY c""").fetchall()}
out['lag_honest'] = {'chronic': {'wm': lr[1][1], 'md': lr[1][2], 'hit': lr[1][3], 'n': lr[1][4]},
                     'fresh':   {'wm': lr[0][1], 'md': lr[0][2], 'hit': lr[0][3], 'n': lr[0][4]}}


# Dose-response: fail-days in trailing 180d -> forward return (calibrated scale, 0..~126)
out['dose_response'] = []
for lo, hi, lab in [(0,21,'0-20'),(21,41,'21-40'),(41,61,'41-60'),(61,81,'61-80'),(81,101,'81-100'),(101,127,'101-126')]:
    x = d.execute(f"""SELECT count(*), median(r_np), avg(CASE WHEN r_np<0 THEN 1.0 ELSE 0 END)
      FROM panel WHERE is_etf=0 AND price>=0.5 AND price<5 AND p180>={lo} AND p180<{hi} AND r_np IS NOT NULL""").fetchone()
    if x[0] > 300:
        out['dose_response'].append({'bucket': lab, 'n': x[0], 'median': x[1], 'pct_down': x[2]})

json.dump(out, open(f"{HERE}/empirical_results.json", 'w'), indent=1)
print("wrote empirical_results.json")
print("price gradient (chronic median by band):", [(g['band'], round(g['chronic'],4)) for g in out['price_gradient']])
print("negative chronic-fresh years:", sum(1 for y in out['year_spread'] if (y['spread'] or 0)<0), "/", len(out['year_spread']))
