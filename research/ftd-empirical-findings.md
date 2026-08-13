# FTD Empirical Findings: What the 27M-Row Panel Actually Says

*A direct mining of the SEC fails-to-deliver archive ([data/ftd/](data/ftd/), 2004–2026) for tradable structure. The FTD file embeds a price on every row (prior-day close), so a per-name price series — and forward returns — can be built **from the data itself**, with no external feed. Empirical companion to the [FTD deep dive](ftd-deep-dive.md). Research notes, not investment advice; not a backtest of a live system.*

> **Revision note.** An earlier version of this file defined "chronic" as ≥11 fail-days in 180 days and "fresh" as ≤7. That threshold was mis-calibrated: a continuously-failing name records up to ~126 fail-days per 180 calendar days (median across the panel is 59), so "≥11" was a low bar met by ~94% of observations, and "≤7" selected a rare oddball tail. All figures below use the calibrated definition — **chronic = ≥80 fail-days**, **occasional = ≤20** — which makes the effect roughly twice as large and adds a clean dose-response. Conclusions are strengthened, not reversed.

---

## Headline

- **The obvious signals are empty.** Fail-*spike* size (z-score vs a name's own history), fail *collapses*, *new-entry* fails, and ETF fail spikes carry **no cross-sectional edge** in liquid names — every decile ≈ +0.1%/2wk. The "fail spike → squeeze" thesis is not in the data.
- **One robust pattern survives: _Chronic-Fail Decay_.** Cheap stocks that fail on *most trading days* for 6+ months subsequently bleed. The penalty is **monotonic in price** (-3.03% under \$1 → ~0 by \$10), shows a **monotonic dose-response** in fail-days, holds **16 of 17 years**, and — critically — **survives a within-name test** (-1.19% for the same name in chronic vs occasional spells; 60.6% of names worse when chronic).
- **But the tradeable edge is much thinner than the statistical one.** Gross annualized short gain is only **41%–55%** in the cheap bands — squarely inside the borrow-fee range for hard-to-borrow names. And the cohort's *mean* is -0.47% despite a -1.80% median, because 2.5% of observations squeeze >+25%. Equal-weight shorting **loses on the mean**.

---

## Method

- **Universe / period:** every FTD row 2010–2026 with positive price and fails (~21.9M observations). ETFs flagged by description keywords and analyzed separately.
- **Forward returns from embedded prices:** the next same-symbol price on the file gives `r_np` (~2 weeks). `r_1m_lag` enters ~1 month *after* the signal — i.e. only after the print is actually public — and holds ~1 month. Date-gap guards reject returns spanning long absences.
- **Chronic definition (calibrated):** `p180` = count of settlement dates the symbol appears on in the trailing 180 days (range 0–126, median 59). **chronic = p180 ≥ 80**; **occasional = p180 ≤ 20**.
- **Statistics:** median and hit-rate are primary; raw means are dominated by micro-cap tails and reported separately precisely because that gap is the trade-defining fact.
- **Known selection bias:** a forward return exists only if the name is still on the file later. The occasional-vs-chronic contrast, the market-neutral spread, and especially the **within-name test** are designed to difference this out.

---

## 1. What does NOT work

| Signal | Test | Result |
|---|---|---|
| Baseline (on the file at all) | median 2wk, price ≥ \$1 | +0.07%, hit 50.7% — flat |
| **Fail-spike z-score** | decile spread, liquid names | D10−D1 ≈ +0.01%/2wk — **no edge**, non-monotonic |
| **Fail collapse** (>80% drop) | event vs baseline | negligible |
| **New-entry** (>75d absent) | event vs baseline | small pop that **reverses** after the lag |
| **ETF fail spikes** | decile spread | flat — ETF fails are structurally benign |

**Do not trade raw fail levels or spikes.** Anyone selling an "FTD spike alert" as an entry signal is selling noise.

## 2. Chronic-Fail Decay

**Monotonic in price** (median forward 2-week return):

| Price band | Chronic (≥80 fail-days) | Occasional (≤20) | Difference | N |
|---|---|---|---|---|
| $0.5-1 | -3.03% | +0.00% | **-3.03%** | 5,004 |
| $1-2 | -1.98% | +0.00% | **-1.98%** | 6,859 |
| $2-3 | -1.72% | +0.00% | **-1.72%** | 4,618 |
| $3-5 | -1.11% | +0.00% | **-1.11%** | 6,722 |
| $5-10 | -0.30% | +0.10% | **-0.40%** | 13,298 |
| $10-20 | +0.00% | +0.19% | **-0.19%** | 25,785 |

**Monotonic dose-response** — more fail-days, worse returns (price \$0.5–5). This is the strongest evidence against coincidence:

| Fail-days in 180d | Median 2wk | % down | N |
|---|---|---|---|
| 0-20 | +0.00% | 48.9% | 53,831 |
| 21-40 | -0.70% | 52.1% | 82,017 |
| 41-60 | -1.23% | 54.8% | 79,389 |
| 61-80 | -1.56% | 56.6% | 49,609 |
| 81-100 | -1.80% | 58.3% | 18,442 |
| 101-126 | -1.82% | 58.0% | 3,113 |

**Survives a within-name test.** Restricting to the 401 names that experience *both* regimes and comparing each name to itself: median within-name difference **-1.19%**, with **60.6%** of names worse during their chronic spells (50% = no effect). This is the key result against "it's just which names become chronic."

**Stable across time.** Market-neutral chronic-minus-occasional median spread, negative in **16/17** years:

| Year | Chronic | Occasional | Spread | N |
|---|---|---|---|---|
| 2010 | +0.00% | +0.00% | +0.00% | 1,168 |
| 2011 | -1.37% | +0.00% | -1.37% | 2,235 |
| 2012 | -0.65% | +0.00% | -0.65% | 1,931 |
| 2013 | -0.78% | +0.00% | -0.78% | 1,871 |
| 2014 | -1.48% | +0.00% | -1.48% | 1,568 |
| 2015 | -1.78% | +0.00% | -1.78% | 1,286 |
| 2016 | -1.01% | +0.00% | -1.01% | 1,360 |
| 2017 | -1.11% | +0.00% | -1.11% | 859 |
| 2018 | -1.95% | -0.97% | -0.97% | 991 |
| 2019 | -1.81% | +0.00% | -1.81% | 1,192 |
| 2020 | -1.05% | +0.91% | -1.97% | 357 |
| 2021 | -3.27% | -0.81% | -2.47% | 1,533 |
| 2022 | -4.02% | -2.55% | -1.47% | 2,052 |
| 2023 | -2.52% | -1.50% | -1.02% | 1,700 |
| 2024 | -3.53% | -0.68% | -2.85% | 1,251 |
| 2025 | -3.88% | +0.00% | -3.88% | 1,288 |
| 2026 | -4.55% | -0.50% | -4.05% | 561 |

**Lag-honest** (enter ~1 month after the print is public): chronic median -1.79% vs occasional +0.00%. Weaker but intact — chronic status is sticky, which is exactly why this signal survives a lag that kills spike signals.

**It is not confined to untradeable dust.** Splitting by fail notional, the effect is essentially flat across size buckets:

| Fail notional | Median 2wk | % down | N |
|---|---|---|---|
| <$10k | -1.82% | 58.4% | 17,459 |
| $10-100k | -1.75% | 58.0% | 4,837 |
| $100k-1M | -1.79% | 58.3% | 834 |

## 3. Is there a *tradeable* edge? The cost hurdle

Converting the median 2-week decline into an annualized gross short gain gives the **borrow fee at which the edge disappears**:

| Price band | Median 2wk | Breakeven annualized borrow fee |
|---|---|---|
| $0.5-1 | -3.03% | **55%** |
| $1-2 | -1.98% | **41%** |
| $2-3 | -1.72% | **36%** |
| $3-5 | -1.11% | **25%** |
| $5-10 | -0.30% | **8%** |

This is the crux. Hard-to-borrow micro-caps — which is precisely what these names are — routinely carry borrow fees in the tens of percent. **The gross edge and the cost of harvesting it are the same order of magnitude**, so whether a real net edge exists is an empirical question about each name's actual borrow fee on the day, not something this dataset can settle.

**The distribution makes it worse for an outright short** (chronic, \$0.5–5, 2wk): N=23,203; 58.3% down; median -1.80%; **mean -0.47%**; p05 -20.8%, p95 +17.1%; 2.48% return >+25%.

## 4. Honest conclusions

1. **As a screening filter — high confidence, zero cost.** Do not go long a cheap stock that fails on most trading days. Negative median in every sub-\$5 band, 16/17 years, dose-responsive, survives within-name. Costs nothing to apply, so no friction can eat it.
2. **As an outright short — probably not.** Breakeven borrow of 25–55% sits inside the actual fee range for these names, and the fat positive tail means equal-weight shorting loses on the mean.
3. **As a defined-risk short — unresolved, and the only version worth testing.** Long puts / put spreads cap the squeeze tail, but these names carry very high implied volatility, so the option may already price the drift. Settling this requires options data (IV surfaces and realized-vs-implied comparisons) that is **not** in the FTD file.

## 5. Limitations

- **Persistence/selection bias:** returns exist only for names still on the file; ~half of chronic names stop printing within ~2 years. The within-name test mitigates but cannot fully eliminate this.
- **Frictions unmodeled:** no borrow fees, spreads, impact, or taxes in the return figures above.
- **Prices are prior-day closes** embedded in the file, not tradeable marks.
- **Not a backtest of a live system.** It identifies a pattern, stress-tests it four ways, and states honestly where the tradeable edge is doubtful.

---

*Reproduce: `python analyze_patterns.py` regenerates every figure from `parquet/ftd_all.parquet`. Companion: [ftd-deep-dive.md](ftd-deep-dive.md), dataset [data/ftd/](data/ftd/).*
