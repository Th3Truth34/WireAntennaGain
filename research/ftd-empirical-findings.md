# FTD Empirical Findings: a real pattern that is not money

*Mining the SEC fails-to-deliver archive ([data/ftd/](data/ftd/), 2004–2026, 27.5M rows) for tradable
structure. This document went through two wrong versions before arriving here; both corrections are
recorded below rather than hidden, because the errors are the most instructive part. Research notes,
not investment advice.*

---

## The finding, stated correctly

**Cheap stocks that fail to deliver on most trading days do subsequently decline. The pattern is real,
persistent, and reproducible. It is also worth about three cents a share, which is smaller than the
spread you must cross to capture it — so it is not a trade.**

Measured on a calendar-matched ~17-day horizon (the honest way; see corrections below), for names with
≥80 fail-days in the trailing 180 days:

| Price band | Median % change | **Median $ change** | Median price | % implied by the cents |
|---|---|---|---|---|
| $0.5–1 | −3.16% | **−$0.02** | $0.73 | −2.74% |
| $1–2 | −1.97% | **−$0.03** | $1.44 | −2.08% |
| $2–3 | −1.63% | **−$0.04** | $2.46 | −1.63% |
| $3–5 | −1.00% | **−$0.04** | $3.92 | −1.02% |
| $5–10 | −0.16% | −$0.01 | $7.35 | −0.14% |
| $10–20 | +0.06% | +$0.01 | $14.60 | +0.07% |

The last column is the whole story. **The celebrated "monotone in price" gradient — which I presented as
the flagship evidence that this was an economic effect rather than noise — is arithmetic.** It is a
roughly constant few-cents drift divided by a shrinking denominator. Cents-over-price reproduces the
observed percentages to within a few basis points in every band.

Under SEC Rule 612 the minimum quoting increment is **$0.01** for stocks at or above $1.00. A median
move of two-to-four cents cannot be harvested across a spread whose *floor* is one cent and which in
this universe realistically runs two-to-five cents.

## Why it is not tradeable — five independent reasons

1. **The edge lives inside the tick.** Two-to-four cents of median drift against a one-cent minimum
   spread, before commissions (IB charges per *share*, catastrophic on penny-priced stock), slippage,
   and borrow.
2. **The portfolio-level mean is the wrong sign.** A book earns the cross-sectional mean each period and
   compounds those periods — not the pooled median. Aggregating per settlement date (3,887 periods,
   returns trimmed at 3× to be generous to the short): mean cross-sectional return **+0.139%**, so an
   equal-weight short **loses 0.139% per period gross**, with longs gaining in 50.0% of periods.
3. **N is inflated by roughly two orders of magnitude.** The file has one row per settlement date and a
   chronic failer appears nearly daily, so the ~1M "observations" are ~168 overlapping daily rows across
   only ~6,000 distinct symbols, spawning forward windows that overlap almost completely. De-overlapped,
   this is roughly 187 independent periods. Every implied t-statistic in the earlier drafts was fiction.
4. **The expectancy's sign is not identifiable from this data.** The FTD price column is an *unadjusted*
   prior-day close. Sub-$5 chronic failers reverse-split constantly — that is much of what a chronic
   failer *is* — and an unadjusted 1-for-10 reverse split reads as +900%. Max observed 2-week "return"
   is +899,900%. The mean's sign flips on a trimming parameter touching under 0.6% of observations.
5. **The mechanism is self-refuting.** The proposed cause is Miller (1977) overvaluation under *binding*
   short-sale constraints. But verified IB borrow rates (2026-08-12) show the tradeable names are not
   constrained — PLUG 0.52%/yr, SPCE 2.76%, VUZI 2.98% — so Miller predicts no overvaluation there.
   Where the constraint genuinely binds, the fee eats the edge: BYND 35.87%/yr, CGC 12.30%. The names
   sort by borrow cost, and **the lender collects the spread, not the shorter.**

## Two corrections, recorded

### Correction 1 — the original measurement was a selection artifact

Forward return was defined as `datediff('day', dt, d1) BETWEEN 7 AND 35`, where `d1` is the next row for
the symbol. But the file has one row per *settlement date*, not per publication, so chronic failers
appear nearly every trading day:

| Gap to next print (chronic) | Share |
|---|---|
| 1 day | 63.4% |
| 2–3 days | 23.2% |
| 4–6 days | 11.1% |
| **7–35 days (the filter)** | **2.3%** |

So the headline ran on 2.3% of the cohort — and not a random 2.3%, but exactly those cases where a daily
fail streak *broke for 1–5 weeks and then resumed*, conditioning on a future event. Meanwhile 15.3% of
the control group survived the same filter, so the comparison was between two differently-selected
populations.

### Correction 2 — the retraction was also wrong

The first correction replaced the filter with "the actual next print (gap 1–35 days)" and reported that
the effect vanished (median +0.000%, 49.2% down), and I retracted the finding outright. **That was also
an error, in the opposite direction:** for chronic names the actual next print is usually the *next day*,
so this measured one-day returns, and a one-day median on a sub-$5 stock is exactly $0.00 by tick
quantization. Both the "effect" and its "disappearance" were measurement artifacts.

The correct approach is a **calendar-matched horizon** — take the price nearest to ~17 days later within
a 10–24 day window — which is what the table at the top uses. On that basis the pattern reproduces
robustly, which is why the honest verdict is "real but not money" rather than either earlier answer.

A related trap, for completeness: the control group's "flat 0.00% in every band" was never a finding
either. The fresh cohort's median 2-week move is exactly $0.00 — tick quantization again — and its
forward price is available for only 71.7% of observations versus 98.9% for the chronic cohort, so the
control is itself contaminated toward the treatment.

## What still stands unchanged

The **null results** are unaffected, and they were right all along:

| Signal | Result |
|---|---|
| Fail-spike z-score deciles | D10−D1 ≈ +0.01%/2wk — no edge, non-monotonic |
| Fail collapse (>80% drop) | negligible |
| New-entry fails | small pop, reverses after the publication lag |
| ETF fail spikes | flat — ETF fails are structurally benign |

## The one surviving use

**A do-not-own screen**, which survived every referee and drew no red-team attack — because it is not a
trade and therefore has nothing to attack. Declining to own something is free: no borrow, no squeeze
exposure, no Rule 4210 margin charge, no buy-in risk, no fee paid to a lender, no unbounded left tail.
The two-to-four cent drift that cannot be harvested through a spread is perfectly real if you are simply
choosing *not* to buy. Present it as a risk control, never as alpha.

## The test that would settle it properly

A pooled cross-sectional regression of forward returns on chronic-FTD status **alongside** live borrow
fee, short interest as a percentage of float, price level, log market cap, share-count growth, and
momentum — with standard errors double-clustered by date and by name, on split-adjusted prices.

If chronic-FTD's marginal t-statistic falls below 2 after those controls, the signal is a redundant
lagged proxy for the borrow fee and the file is closed. That is one afternoon of work and it is the
correct next step for anyone tempted by this line of inquiry.

## Lessons

1. **A filter that interacts with your treatment variable is a selection experiment.** Check what
   fraction of each group survives every filter — 2.3% versus 15.3% would have flagged this instantly.
2. **Verify the horizon your return actually spans.** Both errors here were horizon errors.
3. **Measure the effect in dollars, not just percent.** Doing so immediately exposed that a "monotone
   economic gradient" was a constant cents drift over a shrinking price.
4. **Compare the edge to the minimum tick before anything else.** It is the cheapest possible sanity check.
5. **A portfolio earns the cross-sectional mean per period, not the pooled median.** Aggregate the way
   the book actually compounds.
6. **Overlapping windows are not independent observations.** De-overlap before believing any t-statistic.
7. **Unadjusted prices cannot support tail-sensitive statistics.**
8. **Adversarial review paid for itself twice** — once to find the original bug, once to catch the
   over-correction in the retraction.

---

*Dataset and tooling: [data/ftd/](data/ftd/). Referee and red-team transcripts: [data/referee/](data/referee/).
Companion: [ftd-deep-dive.md](ftd-deep-dive.md).*
