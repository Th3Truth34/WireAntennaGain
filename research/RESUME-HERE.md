# Resume notes — paused 2026-08-14

Snapshot so work can pick up cleanly. **Branch:** `claude/unorthodox-trading-data-e24q5k` — all committed and pushed.

## Current state: the Edge Ledger

**`research/edge-ledger.md` — 135 entries** and growing. This is the live deliverable: underutilized data sources predictive of market or gambling outcomes, each with the exact source, how to collect it, the specific bet/trade, mechanism, counterparty, information lead, why it's still under-exploited, and a rough +EV with confidence.

Built by ~16 discovery batches (6–14 agents each, web-verified). Three entries were **dropped** for scope violations, and the ledger documents both rules:
1. **Watch institutions, not people** — dropped "The 3 A.M. Gamertag" (profiling named athletes' overnight gaming presence).
2. **Use the front door** — dropped "The Endcap Census" (residential proxies + anti-bot evasion + cart-endpoint side channel) and "The Ghost Rate Card" (pretextual NMLS registration to obtain credentials).

Embedding both rules in every agent prompt took the flag rate to ~zero.

### Strongest entries so far

| Entry | Why it stands out |
|---|---|
| **The 855R Census** | Privia's guided KPI ("Implemented Providers") has a *regulatory filing* as its atomic unit; CMS republishes the roster monthly at NPI granularity. Claims panels **cannot see a departure** — same doctors, same patients, same claims, only the billing affiliation breaks. ~7 years of point-in-time snapshots = backtestable. |
| **The Sætre Print** | Norway publishes establishment-level headcount monthly (pulled live: 277 at Chemring Nobel). Batch nitration scales by certified crews, so headcount is a *binding precondition*, not coincident. LinkedIn-based vendors are blind to unionised blue-collar Norwegian operators. |
| **The Silenced Curva** | Disciplinary dockets publish *which stadium sector* closes, weeks–months ahead. Effect is **acoustic not headcount** (a curva is ~6% of seats, ~60–80% of noise). COVID ghost games measured it: home fouls +26%, away +3%. UEFA sanctions carry to an undrawn fixture = 3–6 month lead. |
| **The Phantom Operating Day** | Attendance = operating days × attendance/day. The whole industry sells the *numerator* (crowd panels) badly; nobody reconstructs the *denominator* the company literally prints. Unbackfillable — calendars overwrite, so no vendor can sell history. |
| **The Roe Window** | Iceland's ITQ landing tape publishes tonnage **and processing form** within days; the same capelin tonne is ~$500 as meal vs ~$2,500 as roe, and the roe window is ~5 weeks. ~9-week lead on the print. |
| **The 240-Day Shell** | Investor-state arbitration is barred from national courts, so it appears in no docket product. ICSID's procedural log + Rule 58(1) converts an undated binary into a **computable award deadline** on nano-caps. |
| **The Plaintext Tail** | 2024–25 aircraft privacy rules blinded every commercial tracker, but ARINC-618 puts the real tail number in **plaintext** in ACARS. Edge *widens* as more owners enroll in privacy programs. |
| **The Spielbericht / Sixth Rubber** | Ranked pros play club-league matches absent from all official ATP/WTA records, so "days since last match" is simply wrong. The injury tape (named on a team sheet, then not fielded) leads tour withdrawal by 1–4 days. |

### Archetypes that keep producing

Rotate new batches through these — they have the highest hit rate:
1. **Off-record activity** official databases exclude by definition
2. **Structural exclusions** routing a sector's data outside the standard institutional tool (No-PACER, ICSID)
3. **Own-sensor capture** of waste/exhaust signals (Ad Council Minute, Embargoed Sounding, Plaintext Tail)
4. **Administrative dockets** that pre-announce a physical change (Silenced Curva, Beaching Ratio)
5. **Reconstruct the exact disclosed metric**, especially the ignored denominator
6. **Registries where joining *and leaving* are mandatory filings** — transaction panels can't see exits
7. **Compulsory foreign labor/social-insurance registries** as facility-level capacity panels

## In flight when paused

Two discovery workflows were running; their results are **not yet in the ledger**:
- `wj9c3pbxl` — blue-collar workforce, single-site chokepoints, binding preconditions, gone-dark detection, statutory subsidiary accounts, training pipelines, non-English official data, industrial utility contracts, insurance-as-capacity-gate, export-control flows
- `wfgxh7y2m` — affiliation registries, churn invisible in transaction data, KPI atomic units, panel blind spots, network rosters, licence transfers, regulated identifiers, mandatory directories, contract registries, negative-side signals

**To bank them if the notifications arrive:**
```bash
cd /tmp/claude-0/-home-user-WireAntennaGain/<session>/scratchpad
python3 append_batch.py ../tasks/<taskid>.output ""     # "" = nothing dropped
cd /home/user/WireAntennaGain && git add research/edge-ledger.md && git commit && git push
```
`append_batch.py` handles numbering, the ledger format, and the running ban list. If the container was reclaimed, just relaunch those domain sets — nothing is lost but time.

## To restart discovery

```
/loop discover 6 NEW underutilized data sources that are predictive of future market or gambling outcomes — in the spirit of jockey weights, satellite parking-lot counts, Google Trends, presidential tweets, weather vs commodities. Cover BOTH financial markets and betting markets. For each: name the exact data source and how to collect it, the specific bet or trade it implies, the causal mechanism, who's on the other side, and a rough +EV estimate with confidence. Append each to research/edge-ledger.md and NEVER repeat a source already in that ledger.
```
Run 2–4 workflows of 10–14 domains concurrently (domains partitioned so concurrent batches can't collide), append + commit + relaunch in one turn to keep the pipeline saturated.

## Prior work (all committed)

`edge-hunt-conclusion.md` (the ~760-candidate program that returned zero fundable strategies), `success-case-library.md` (60 documented winners), `candidates-100-screened.md`, `ftd-deep-dive.md`, `ftd-empirical-findings.md` (a real pattern worth ~3¢/share — inside the tick), and `data/ftd/` (the full 27.5M-row SEC fails-to-deliver archive with tooling).

**Note the contrast worth remembering:** the earlier program *validated* ideas to destruction and returned zero. The ledger *generates* and documents, and is at 135. Validation and discovery are different jobs — don't let the referee framework eat the generator.
