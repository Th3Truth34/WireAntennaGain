# Resume notes — paused 2026-08-13

Status snapshot so work can pick up cleanly after a break.

## Where things stand

**Branch:** `claude/unorthodox-trading-data-e24q5k` — all work committed and pushed.

### Completed and committed

| Deliverable | What it is |
|---|---|
| `unorthodox-data-points.md` | Vol I — 108 documented alt-data sources, web-verified |
| `novel-trading-ideas.md` | Vol I — 225 brainstormed ideas, judge-scored |
| `unorthodox-data-points-vol2.md` | Vol II — 107 market-forensics sources (short interest, synthetic shares, filings) |
| `novel-trading-ideas-vol2.md` | Vol II — 218 ideas (8 removed for MNPI/embargo-bypass concerns) |
| `ftd-deep-dive.md` | FTD mechanics, evidence, 12 strategies, backtest design; every citation fact-checked |
| `ftd-empirical-findings.md` | **Empirical study of the 27.5M-row FTD panel** (recalibrated) |
| `data/ftd/` | Full SEC FTD archive 2004–2026 (425 files) + fetch/build/analyze scripts |
| `data/referee/` | Brainstorm-referee swarm raw results (this session) |

### Key empirical result (FTD)

**Chronic-Fail Decay** — cheap stocks failing on most trading days for 6+ months subsequently bleed.
Calibrated definition: `chronic = >=80 fail-days in trailing 180d`, `occasional = <=20`.

- Price gradient: −3.03% (<$1) → −1.98% ($1–2) → −1.11% ($3–5) → ~0 by $10, monotonic
- Dose-response monotonic: −0.70% (21–40 fail-days) → −1.82% (101–126)
- **Within-name test:** −1.19%, 60.6% of names worse during their own chronic spells
- Negative in 16/17 years; does NOT decay with fail notional
- **Cost hurdle:** breakeven annualized borrow fee only 25–55% — same order as actual HTB fees
- Distribution: 58% down, median −1.08%, but MEAN +1.56% (3.96% squeeze >+25%)

**Verdict:** high confidence as a zero-cost *screening filter* (don't go long cheap chronic failers);
probably not viable as an outright short (borrow eats it, fat tail kills equal-weight);
**unresolved** as a defined-risk put trade — needs options/IV data not in the FTD file.

### Brainstorm referee swarm — completed, result is decisive

Pointed 28 agents at the top 40 of the 443 brainstormed ideas (funnel: triage → referee → red team → playbook).

**Outcome: 38 of 40 killed at triage. Both survivors then failed the referee.**
- `Call Report Amendment Autopsy` → **NO-EDGE** (measured gross edge on the exact event ≈ 0.00%)
- `Dividend Clock Slip` → **LIKELY-ILLUSORY** (negative net for equities, decisively negative for options)

Representative kill reasoning (well-researched, not hand-waving):
- *Pawn Forfeiture Flow Meter* — online catalog is ~9% of EZCORP sales and growing 21% YoY on an
  e-commerce push, so the scraper reads digital buildout as consumer distress; redemption rate has
  been inert at 76–77% across regimes; forfeited gold goes to the smelter and never lists.
- *Screwworm Bulletin Watch* — APHIS press-releases Mexican confirmations itself and consumes the same
  SENASICA dashboard, so there is no Spanish-language lead; regime also inverted (ports reopening
  Aug 2026); and feeder cattle lock limit-up exactly when the headline matters, so the fill doesn't exist.
- *Lock Queue* — real data, but the convexity lives in barge freight and interior cash basis, which a
  small trader cannot trade; CBOT flat price barely moves because global S&D is unchanged.

Raw results: `data/referee/brainstorm-referee-results.json`; workflow: `brainstorm_referee_workflow.js`.

## In flight when paused

- **FTD edge/execution swarm** (task `wgzso4dno`, 26 agents: 12 referee → 8 execution → 4 red-team → playbook)
  was still running. Its output covers borrow-fee reality, options/IV execution on low-priced names,
  sizing for negative-skew books, venues, costs, compliance, and monitoring — the material needed to
  settle the open "defined-risk put" question above. **Check whether it finished; if the container was
  reclaimed it will need relaunching.**

## Suggested next steps

1. Recover or relaunch the FTD edge/execution swarm; integrate with the empirical numbers above.
2. Write the combined "what actually has an edge" report — the honest through-line is now:
   **hundreds of brainstormed ideas produced ~zero validated edges; the one surviving signal is a
   free screening filter, not a trade.** That is a genuinely useful conclusion.
3. Optional: settle the defined-risk put question with real options data (IV vs realized drift on
   chronic names) — the single highest-value open empirical test.
