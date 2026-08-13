# FTD Empirical Findings — RETRACTED: the signal was an artifact of my own filter

> ## ⚠️ Retraction
>
> **An earlier version of this document reported a pattern called "Chronic-Fail Decay" — that cheap stocks
> failing on most trading days subsequently decline. That finding is withdrawn. It was an artifact of a
> selection bug in my analysis code, not a property of the market.**
>
> The bug was caught by an adversarial referee agent that reproduced my headline cell exactly
> (N=23,203, median −1.804%, mean −0.472%, 58.26% down) and then located its cause. I independently
> verified the diagnosis and confirmed it in full. Details and corrected numbers below.

---

## What went wrong

The forward return was defined as:

```sql
CASE WHEN datediff('day', dt, d1) BETWEEN 7 AND 35 THEN p1/price - 1 END AS r_np
```

where `d1` is the next row for the same symbol. The intent was "return to the next semi-monthly print,
about two weeks out." The SEC FTD file, however, has **one row per settlement date**, not one row per
publication. A chronically-failing stock therefore appears on the file nearly every trading day.

Gap to the next print, chronic cohort ($0.50–5, ≥80 fail-days in 180d, N=1,019,345):

| Gap to next print | Rows | Share |
|---|---|---|
| 1 day | 646,198 | **63.4%** |
| 2–3 days | 236,644 | 23.2% |
| 4–6 days | 112,709 | 11.1% |
| **7–35 days (the filter)** | **23,203** | **2.3%** |
| 36+ days | 587 | 0.1% |

Three separate failures follow:

1. **The measurement ran on 2.3% of the cohort.** And not a random 2.3% — precisely those observations
   where a name's daily fail streak *broke for 1–5 weeks and then resumed*. That conditions on a future
   event (reappearing on the file), and reappearance is itself driven by renewed short pressure.
2. **The control group was filtered differently.** Occasional names (≤20 fail-days) naturally have gaps
   longer than a week, so **15.3%** of their rows survived the same filter versus **2.3%** of chronic rows.
   The comparison was between two differently-selected populations — which is what manufactured the gap.
3. **The horizon label was wrong.** For 63% of chronic rows the "next print" is the next *day*, so the
   statistic I called a two-week return was mostly a one-day return.

## Corrected results — the effect vanishes

Using the actual next observation (gap 1–35 days, 99.9% of rows):

| Cell | N | Median | Mean | % down |
|---|---|---|---|---|
| **As reported (7–35d filter)** | 23,203 | −1.804% | −0.47% | 58.3% |
| **Corrected (1–35d, actual next print)** | 1,018,754 | **+0.000%** | +1.08% | **49.2%** |

**Price gradient — gone.** Chronic vs occasional, corrected:

| Price band | Chronic median | Occasional median | Difference | N |
|---|---|---|---|---|
| $0.5–1 | +0.000% | +0.000% | +0.000% | 174,723 |
| $1–2 | +0.000% | +0.000% | +0.000% | 293,536 |
| $2–3 | −0.348% | +0.000% | −0.348% | 219,865 |
| $3–5 | +0.000% | +0.000% | +0.000% | 330,630 |
| $5–10 | +0.000% | +0.000% | +0.000% | 636,088 |

**Dose-response — gone.** Every bucket returns a median of exactly zero, and the down-rate never reaches
50% (these names close *up* slightly more often than down at every dose level):

| Fail-days in 180d | N | Median | % down |
|---|---|---|---|
| 0–20 | 332,005 | +0.000% | 42.8% |
| 21–40 | 496,114 | +0.000% | 46.3% |
| 41–60 | 668,135 | +0.000% | 48.2% |
| 61–80 | 710,921 | +0.000% | 49.4% |
| 81–100 | 591,646 | +0.000% | 49.7% |
| 101–126 | 393,392 | +0.000% | 48.5% |

The within-name test, the year-by-year spread, and the notional split were all computed on the same
contaminated `r_np` and are withdrawn along with the headline.

## A second, independent problem with this dataset

Even with the filter fixed, **the mean is not sign-identifiable from this data.** The FTD file's price
column is an *unadjusted* prior-day close. Sub-$5 chronic failers reverse-split constantly, and an
unadjusted 1-for-10 reverse split reads as a +900% return. The extreme right tail (q0.999 = +615%,
max = +899,900%) is an inseparable mix of genuine squeezes — catastrophic for a short — and reverse
splits, which are neutral for a short who is adjusted. The referee showed the sign of the mean flips
on arbitrary trimming choices affecting under 0.6% of observations:

| Trim forward ratios above | Resulting mean | Short earns |
|---|---|---|
| 1.8× | −1.02% | +1.02% |
| 3× | −0.61% | +0.61% |
| 5× | −0.34% | +0.34% |
| 10× | +0.19% | −0.19% (loses) |
| 25× | +0.83% | −0.83% (loses) |

**Any strategy whose expectancy flips sign on a trimming parameter is not a strategy.** Settling this
requires split-adjusted prices from a real market-data source; the FTD file alone cannot do it.

## What still stands

The **null results** are unaffected — they were computed on liquid names (price ≥ $5) where the gap
filter is far less distorting, and they all say the same thing:

| Signal | Result |
|---|---|
| Fail-spike z-score deciles | D10−D1 ≈ +0.01%/2wk — no edge, non-monotonic |
| Fail collapse (>80% drop) | negligible |
| New-entry fails | small pop, reverses after the publication lag |
| ETF fail spikes | flat — ETF fails are structurally benign |
| Baseline (on the file at all) | flat |

So the conclusion of this study is now entirely negative, and stronger for it:

**Across 27.5 million rows spanning 2004–2026, I found no tradable signal in the SEC fails-to-deliver
data. The one apparent discovery was a bug in my own measurement.**

That is consistent with the independent verdicts from the strategy referees: all twelve FTD-derived
candidate strategies were graded NO-EDGE or LIKELY-ILLUSORY, and the specific mechanism they identified —
that FTD status is a stale, low-resolution proxy for borrow fee and short interest, both of which are
observable live and already priced by the securities-lending market — predicts exactly the null found here.

## Lessons worth keeping

1. **A filter that interacts with the treatment variable is a selection experiment.** My gap filter was
   correlated with chronic status by construction, which is precisely what produced the fake effect.
2. **Check what fraction of your data survives each filter, per group.** 2.3% versus 15.3% would have
   flagged this instantly.
3. **Verify the horizon your return actually spans**, rather than assuming it from the intended design.
4. **Unadjusted prices cannot support tail-sensitive statistics.** Means, Sharpe ratios, and anything
   else driven by extremes need split-adjusted data.
5. **Adversarial review earned its cost here.** The referee agent reproduced the number, then found the
   cause — which is exactly what the verification stage is for.

---

*Reproduce: `python analyze_patterns.py` (note: the `r_np` definition retains the documented bug for
reproducibility of the retraction; corrected figures come from `corrected_results.json`).
Dataset: [data/ftd/](data/ftd/). Companion: [ftd-deep-dive.md](ftd-deep-dive.md).*
