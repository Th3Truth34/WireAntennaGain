# FTD Empirical Findings: What the 27M-Row Panel Actually Says

*A direct mining of the SEC fails-to-deliver archive ([data/ftd/](data/ftd/), 2004–2026) for tradable structure. The FTD file embeds a price on every row (prior-day close), so a per-name price series — and forward returns — can be built **from the data itself**, with no external feed. This is the empirical companion to the [FTD deep dive](ftd-deep-dive.md); it tests that report's hypotheses on the actual data. Research notes, not investment advice; not a backtest of a live system.*

---

## Headline

- **The obvious signals are empty.** Fail-*spike* size (z-score vs a name's own history), fail *collapses*, fresh *new-entry* fails, and short-run persistence carry **no tradable cross-sectional edge** in liquid names (price ≥ \$5) — every decile returns ~+0.1%/2wk, flat. This empirically confirms the deep dive's skeptic case: the "fail spike → move" story is not in the data.
- **One robust, novel pattern survives: _Chronic-Fail Decay_.** Cheap stocks that fail on essentially *every* SEC print for 6+ months (chronic) subsequently **bleed** — and the penalty is cleanly **monotonic in price** and stable across **13 of 17 years**. Fresh/occasional failers at the same prices do not. Because it is a *chronic* (slow-moving) state, it survives the ~1-month publication lag that kills the fast signals.
- **But it's a short-tail minefield, not a free short.** The chronic cohort is down 53.9% of the time (median -1.08%), yet its *mean* is +1.56% because ~4.0% of observations squeeze >+25% (p95 = +21.8%). Equal-weight shorting therefore **loses on the mean**. It is a strong **avoid / do-not-own filter**, and only a *defined-risk* short (puts) can harvest the negative median without being run over by squeezes.

---

## Method

- **Universe / period:** every FTD row 2010–2026 with a positive price and positive fails (~21.9M observations after filtering; price is populated from 2007). ETFs flagged by description keywords and analyzed separately.
- **Forward returns from embedded prices:** for each (symbol, settlement date) the next same-symbol price on the file gives a return. `r_np` = next print (~2 weeks); `r_1m_lag` = **lag-honest** entry ~1 month *after* the signal (i.e., after the print would actually be public), held ~1 month. Date-gap guards reject returns computed across long absences.
- **Signal:** `z` = (ln fails − trailing mean ln fails) / trailing sd, over a name's prior 8 prints. `chronic` = on the file ≥11 of the last ~13 prints (trailing 180 days); `fresh` = ≤7.
- **Robustness:** returns winsorized to ±50–60% for means; **median and hit-rate** are the primary statistics because raw means are dominated by micro-cap tails.
- **Known selection bias (stated plainly):** a forward return only exists when a name is *still on the file* later, so results condition on persistence. The `fresh`-vs-`chronic` comparison and the market-neutral spread are designed to difference this out.

---

## 1. What does NOT work (the honest nulls)

| Signal | Test | Result |
|---|---|---|
| Baseline (on the file at all) | median 2wk return, price ≥ \$1 | +0.07%, hit 50.7% — flat |
| **Fail-spike z-score** | decile spread, liquid single names | D10−D1 median ≈ +0.01%/2wk — **no edge**, non-monotonic |
| **Fail collapse** (>80% drop) | event vs baseline | +0.02% to +0.07% — negligible |
| **New-entry** (>75d absent) | event vs baseline | +0.55% naive 2wk, but **reverses** after the lag (−0.13% median) |
| **Short-run persistence** | run length → return | no usable gradient |
| **ETF fail spikes** | decile spread | flat — ETF fails are structurally benign |

The takeaway is decision-relevant: **do not trade raw fail levels or spikes in liquid names.** Anyone selling an "FTD spike alert" as an entry signal is selling noise.

## 2. Chronic-Fail Decay (the pattern that survives)

**The effect is monotonic in price** — cheaper chronic failers bleed harder, while *fresh* failers at the same price are flat (2-week median forward return):

| Price band | Chronic (≥11/13 prints) | Fresh (≤7/13) | Chronic − Fresh | N (chronic) |
|---|---|---|---|---|
| $0.5-1 | -1.92% | +0.00% | **-1.92%** | 56,528 |
| $1-2 | -1.35% | +0.00% | **-1.35%** | 76,473 |
| $2-3 | -0.95% | +0.00% | **-0.95%** | 51,922 |
| $3-5 | -0.46% | +0.00% | **-0.46%** | 79,911 |
| $5-10 | +0.00% | +0.10% | **-0.10%** | 168,380 |
| $10-20 | +0.10% | +0.10% | **-0.00%** | 285,518 |

A clean monotonic gradient that vanishes by ~\$5 is hard to produce by chance and is exactly what a *borrow-cost-drag / hard-to-borrow-overvaluation* mechanism predicts: the names that fail on every print are the ones that are persistently expensive-to-borrow, heavily and informedly shorted, and often promoted micro-caps whose overvaluation slowly reverts.

**It is stable across 16 years.** Market-neutral chronic-minus-fresh median spread (differences out the low-price factor), negative in **13/17** years and strengthening lately:

| Year | Chronic | Fresh | Spread | N |
|---|---|---|---|---|
| 2010 | +0.00% | +0.00% | +0.00% | 15,322 |
| 2011 | -0.99% | +0.00% | -0.99% | 15,958 |
| 2012 | +0.00% | +0.00% | +0.00% | 14,811 |
| 2013 | +0.00% | +0.00% | +0.00% | 12,926 |
| 2014 | -0.75% | +0.00% | -0.75% | 12,523 |
| 2015 | -1.28% | +0.00% | -1.28% | 13,455 |
| 2016 | +0.00% | +0.76% | -0.76% | 14,571 |
| 2017 | -0.45% | +0.00% | -0.45% | 13,231 |
| 2018 | -1.49% | -1.31% | -0.18% | 13,393 |
| 2019 | -0.80% | -0.23% | -0.57% | 14,913 |
| 2020 | +0.00% | +0.88% | -0.88% | 11,221 |
| 2021 | -1.61% | -0.41% | -1.20% | 18,596 |
| 2022 | -2.77% | -3.15% | +0.39% | 20,350 |
| 2023 | -1.79% | -1.01% | -0.78% | 20,785 |
| 2024 | -1.75% | -0.35% | -1.41% | 21,353 |
| 2025 | -1.55% | +0.00% | -1.55% | 21,190 |
| 2026 | -2.10% | -0.10% | -2.00% | 10,236 |

**Lag-honest (enter ~1 month after the signal is public):** chronic median -0.21% (hit 45.0%) vs fresh +0.00% (hit 48.3%). The edge weakens with the lag but does not disappear — because chronic status is sticky.

**The distribution is the catch** (chronic low-price, 2wk):

| stat | value |
|---|---|
| observations | 264,834 |
| % down | 53.9% |
| median | -1.08% |
| mean | +1.56% (tail-dragged **positive**) |
| p05 / p25 / p75 / p95 | -21.6% / -7.3% / +4.7% / +21.8% |
| % squeezing >+25% | 3.96% |

## 3. How to (and how not to) express it

- **As a filter (strong, usable now):** *do not go long* a cheap stock that is a chronic FTD failer. It is down ~54% of two-week windows with a negative median, every price band under \$5, almost every year. This is the highest-confidence use.
- **As a short (hard):** the ~4% squeeze tail (p95 +21.8%) means a naive equal-weight short **loses on the mean** even though the median is negative. Only a **defined-risk** expression — long puts / put spreads where optionable, sized as a diversified basket — can harvest the negative median while capping the squeeze. And these names are hard/expensive to borrow *by construction* (that's why they fail), so the borrow fee must be beaten.
- **Horizon:** shorter is safer (the squeeze tail grows with holding time); the 2-week print-to-print cadence is the natural rebalance.

## 4. Limitations

- **Selection/persistence bias:** forward returns exist only for names that stay on the file; the fresh-vs-chronic and market-neutral spreads mitigate but do not fully eliminate this.
- **Micro-cap reality:** the tradeable-looking edge lives in \$0.5–\$5 names — thin, halt-prone, hard-to-borrow, and manipulation-prone. Frictions (borrow fees, spreads, impact) are large and not modeled here.
- **Prices are prior-day closes** embedded in the file, not intraday marks; returns are approximate.
- **This is not a backtest of a tradable system** — no transaction costs, borrow fees, or capacity. It identifies a statistical pattern and characterizes its risk honestly.

---

*Reproduce: the panel and every figure here rebuild from `parquet/ftd_all.parquet` via the DuckDB queries used to produce `empirical_results.json`. Companion: [ftd-deep-dive.md](ftd-deep-dive.md), dataset [data/ftd/](data/ftd/).*
