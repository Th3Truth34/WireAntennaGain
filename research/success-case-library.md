# The Success-Case Library: 60 Documented Alt-Data Winners

Real, verifiable cases where an unorthodox data source produced a documented, profitable trading operation — the reference set for what actually works. Each entry captures not just *what* the signal was but *why it worked*: the processing/exclusivity moat, the time lead over the consensus or official number, the liquid instrument, and a concrete citation. Compiled and web-verified by a research swarm. Companion to [candidates-100-screened.md](candidates-100-screened.md) and [edge-hunt-conclusion.md](edge-hunt-conclusion.md).

> **Why this library matters.** These are the cases everyone cites — Benter's ~$1B horse-racing model, RS Metrics counting cars, Orbital Insight reading oil-tank shadows. Studying them closely reveals the DNA the winners shared, and — as the [conclusion](edge-hunt-conclusion.md) shows — why that DNA no longer transfers: the edge *was* being early to exclusive data, and that frontier is now commoditized.

## Contents

- [Geospatial & aerial (beyond parking lots and oil tanks)](#geospatial-aerial-beyond-parking-lots-and-oil-tanks) — 10 cases
- [Wagering & parimutuel model successes (the Benter lineage)](#wagering-parimutuel-model-successes-the-benter-lineage) — 10 cases
- [Consumer-transaction & receipt-panel successes](#consumer-transaction-receipt-panel-successes) — 10 cases
- [Web-scraping & pricing-intelligence successes](#web-scraping-pricing-intelligence-successes) — 10 cases
- [Flow, positioning & microstructure successes](#flow-positioning-microstructure-successes) — 10 cases
- [Exotic, cross-domain & sensor successes](#exotic-cross-domain-sensor-successes) — 10 cases


## Geospatial & aerial (beyond parking lots and oil tanks)

### 1. RS Metrics — car-counting retail parking lots
- **What:** Systematically counted vehicles in tens of thousands of big-box retail parking lots from high-resolution satellite imagery, then converted the car counts into a quarter-ahead foot-traffic/sales proxy (the TrafficSignals product) covering ~65,000 store locations and ~50 retail tickers, sold to equity hedge funds.
- **Who:** RS Metrics (founded ~2010, the first commercial satellite car-counting vendor); the alpha was independently documented by Katona, Painter, Patatoukas & Zeng of Berkeley Haas / Saint Louis U; buyers were quant and discretionary equity funds.
- **Instrument:** Large-cap retail equities and their listed options — Walmart, Target, Costco, Whole Foods, Best Buy, JC Penney and peers; deep, liquid names that absorb size and clear costs.
- **Why it worked:** The moat was in the WORK, not the data: buying raw imagery and building/operating computer-vision car-counting pipelines across 65,000 lots that nobody else parsed. Car counts accumulate over the whole quarter, so funds held the number weeks before comps/earnings printed, and the study shows prices did NOT embed it before disclosure. The other side of the trade was the sell-side consensus and retail crowd pricing off stale data. It fired every quarter across ~50 tickers — repeatable and scalable in mega-cap options.
- **The lead:** Whole-quarter car counts are complete weeks before the retailer's comps/earnings release; the JFQA study confirms stock prices did not incorporate the satellite signal prior to public disclosure.
- **The moat:** Capital- and engineering-intensive CV pipeline over 65,000 locations plus a paid imagery feed — only funds that bought and processed it had the signal; not a purchasable single number.
- **Evidence:** Katona, Painter, Patatoukas & Zeng, 'On the Capital Market Consequences of Alternative Data (Big Data): Evidence from Outer Space,' Journal of Financial and Quantitative Analysis 60(2), 2025, pp. 551-579 — documents ~4-5% abnormal returns in the 3 days around earnings for funds with the data, concentrated in shorting bad-news retailers; Berkeley Haas Newsroom coverage.

### 2. Orbital Insight — oil-tank floating-roof shadow inventory
- **What:** Computer vision measures the crescent-shaped shadow cast inside floating-roof crude tanks to compute roof height and thus barrels stored, across ~25,000 tanks and ~6 billion barrels of global capacity from 200+ satellites; the same method uncovered China's undisclosed strategic reserves (estimated ~3x the official Xinhua figure, a 500M+ barrel discrepancy).
- **Who:** Orbital Insight (Palo Alto; founder Jimi Crawford), which sold its global energy product to some of the world's largest systematic hedge funds.
- **Instrument:** Crude futures (WTI/Brent), the USO ETF, and energy equities — the deep global crude complex.
- **Why it worked:** Heavy CV/geometry processing moat across hundreds of satellites and 25,000 tanks. It reads global supply weeks before slow, inaccurate government inventory surveys, and it sees opaque geographies (China) that no official series covers. Large, liquid crude instruments; the read is repeatable on every fresh image pass.
- **The lead:** Fresh imagery yields supply estimates ahead of delayed/inaccurate government inventory surveys; the China stockpile work pre-empted official figures by revealing a 500M+ barrel discrepancy vs Xinhua.
- **The moat:** Proprietary shadow-geometry plus ML applied at scale; measuring China's hidden reserves required building the tank database from scratch (Orbital found ~2,100 reserve tanks vs ~500 in the industry-standard database).
- **Evidence:** Bloomberg, Newsweek ('China's Secret Oil Stockpiles Exposed In New Satellite Images'), and Rice/Baker Institute coverage of Orbital Insight's China crude-reserve findings (2016-2017); Harvard D3 case, 'This Startup Makes Money from Oil Tank Shadows.'

### 3. CargoMetrics — AIS vessel-flow systematic fund
- **What:** Fused satellite AIS vessel signals with cargo, port and historical trade data and machine learning to model real-time seaborne supply and demand, then traded on it through a systematic in-house hedge fund — a hybrid tech-and-fund firm.
- **Who:** CargoMetrics Technologies (Boston; founder Scott Borgerson, a US Coast Guard veteran); backed by Blackstone Alternative Asset Management, Jim Manzi, and later Founders Fund.
- **Instrument:** WTI/crude oil futures, currencies, and equity-index futures — highly liquid macro instruments.
- **Why it worked:** Years spent turning noisy global AIS into clean vessel/cargo supply-demand metrics — a processing moat, not just 'the data exists.' It produced a concrete lead over official releases, traded the deepest futures markets, and ran systematically so the signal repeated and scaled.
- **The lead:** In November 2015 CargoMetrics detected a shipping slowdown through the Strait of Malacca and shorted WTI; the US Department of Energy report confirmed the slowdown two days later — Borgerson called it 'our biggest return of the year.'
- **The moat:** Proprietary algorithms converting worldwide AIS into vessel/cargo metrics inside a combined technology-and-trading operation that competitors could not simply buy.
- **Evidence:** Institutional Investor, 'CargoMetrics Cracks the Code on Shipping Data' — documents the Nov 2015 WTI short ahead of the DOE report and the firm's three asset classes; Bloomberg profile of the firm.

### 4. SpaceKnow — China Satellite Manufacturing Index
- **What:** Analyzes billions of satellite snapshots across 6,000+ Chinese industrial sites over ~500,000 km² to build a PMI-style manufacturing index (50 = the expansion/contraction line) independent of Chinese official data, published every two weeks and distributed on the Bloomberg Terminal (the first alternative-data index carried there).
- **Who:** SpaceKnow (co-founders Pavel Machalek and Jerry Javornicky); the SMI is delivered to Bloomberg Terminal subscribers — macro funds and China-watchers.
- **Instrument:** China-exposed equity indices/ETFs (e.g., FXI), the offshore yuan (CNH), and industrial commodities used in top-down China macro trades.
- **Why it worked:** A massive imagery-processing moat (2.2bn+ snapshots) yields an independent read on China, where official numbers are widely distrusted. It leads or diverges from the official NBS PMI and feeds liquid macro instruments; the biweekly cadence makes it repeatable.
- **The lead:** Published biweekly from imagery, independent of and at times ahead of/contrary to the official NBS PMI — e.g., it flagged an October 2018 contraction in Chinese manufacturing output.
- **The moat:** 2.2 billion+ satellite snapshots over half a million km² processed with proprietary ML — impossible to replicate without the imagery pipeline; being first on the Bloomberg Terminal underscored its scarcity.
- **Evidence:** Bloomberg, 'Satellites Show China Manufacturing Output Contracted in October' (Oct 31, 2018); Via Satellite and Quartz profiles of the SMI and its Bloomberg Terminal listing.

### 5. Descartes Labs — satellite corn-yield model
- **What:** Runs neural networks on daily multispectral satellite imagery of essentially every US cornfield to produce in-season, county-level yield forecasts more accurate than the USDA survey (within ~1 bushel / ~1% of final production).
- **Who:** Descartes Labs (a Los Alamos National Lab spinout); it partnered with grain-trading giant Cargill in 2018 and stopped publishing its forecasts publicly thereafter.
- **Instrument:** CBOT corn futures and options (and, via the sister soy model, soybeans) — deep, liquid agricultural markets.
- **Why it worked:** A compute-and-CV moat: imaging every field every day at petabyte scale with neural nets built by ex-Los Alamos scientists. It leads the monthly USDA WASDE report, trades liquid ag futures, and repeats weekly through the growing season. Cargill paying to take it private is direct proof of the edge's commercial value.
- **The lead:** Weekly in-season yield updates versus the USDA's monthly report; in 2015 and 2016 the public forecasts landed within one bushel of the final USDA number.
- **The moat:** Petabyte-scale daily imagery plus proprietary neural nets; Cargill's exclusive partnership (after which public releases ceased) signals the value of keeping the signal scarce.
- **Evidence:** Descartes Labs, 'Advancing the science of corn forecasting' (Medium); Harvard/HBS RCTOM case, 'Descartes Labs: Predicting Farmer's Fortunes from Space'; reporting on the 2018 Cargill partnership.

### 6. Genscape — Cushing aerial infrared tank monitoring
- **What:** Flew aircraft carrying infrared cameras over the Cushing, Oklahoma crude hub to read oil levels inside storage tanks (the heat line shows the oil level), and placed electromagnetic sensors on the pipelines/power lines feeding the tank farms, producing tank-level Cushing inventory a full day or more ahead of the EIA.
- **Who:** Genscape (Louisville-based energy-intelligence firm; later part of Verisk, then DTN); its Cushing data was sold to banks, hedge funds and oil traders.
- **Instrument:** WTI crude futures and time spreads, plus the USO ETF — the most heavily traded crude market.
- **Why it worked:** A physical-access moat — chartered aircraft, infrared imaging, and on-the-ground EM sensors, not a data purchase. It delivers Cushing storage a day-plus ahead of the weekly EIA print, into the deep WTI complex, and repeats every week.
- **The lead:** Subscribers see Cushing storage a full day (or more) before the weekly EIA release; Genscape even published crude-stock data during the 2013 EIA government-shutdown furlough, when official numbers stopped.
- **The moat:** Required operating aircraft, infrared cameras, and physical electromagnetic monitors at the hub — an operational moat that could not be cloned by buying a feed.
- **Evidence:** StateImpact/NPR Oklahoma, 'Oil Espionage: Traders Spy on Oklahoma Hub With Satellites, Sensors and Infrared Cameras' (2012); Hart Energy, 'Genscape To Release Oil Stock Data During EIA Furlough.'

### 7. Earth-i SAVANT — copper-smelter thermal index
- **What:** Applies machine learning to satellite thermal imagery to detect whether up to ~90% of the world's copper smelters are active or idle, producing the SAVANT Global Copper Smelting Index — a near-real-time read on refined copper supply down to individual smelters.
- **Who:** Earth-i in partnership with commodity broker Marex Spectron (launched October 2019, with UK/European Space Agency funding); subscribers are copper producers, commodity traders and analysts.
- **Instrument:** LME and COMEX copper futures and options — a large, liquid base-metals market.
- **Why it worked:** A thermal-imagery processing moat resolving individual smelters' on/off state. It leads the lagging official ICSG/production statistics, feeds the liquid copper complex, and updates daily/weekly — repeatable and capacity-friendly.
- **The lead:** Daily smelter-activity reads versus monthly/quarterly official copper production statistics; the index flags supply disruptions before they appear in reported output.
- **The moat:** Proprietary ML on thermal Earth-observation imagery covering ~70-90% of global smelting capacity, developed with ESA co-funding — built processing, not a commodity dataset.
- **Evidence:** Marex, 'Satellite Copper Smelting Index to Revolutionise Copper Trading & Investor Insight' (2019); Earth-i SAVANT launch announcement; Reuters/Investing.com monthly SAVANT smelting reports.

### 8. Ursa Space Systems — SAR global oil inventories
- **What:** Uses synthetic-aperture radar (which images through clouds and darkness) to measure floating-roof crude tanks worldwide, fusing multi-source satellite data into weekly global oil-inventory estimates that are far more frequent than official monthly figures.
- **Who:** Ursa Space Systems (Ithaca, NY); its Global Oil Inventories product launched in 2016 and its customers include oil traders and macro funds adjusting physical balances.
- **Instrument:** Crude oil futures, refined-product/crack spreads, and energy macro positions.
- **Why it worked:** A SAR-processing moat distinct from optical-shadow methods — radar works in any weather, day or night, so coverage is not lost to clouds. It leads the official monthly inventory cadence with a weekly read, into the liquid crude complex, and repeats every week.
- **The lead:** Weekly global inventory estimates versus the EIA/IEA monthly cadence, letting traders adjust physical balances before official prints.
- **The moat:** Radar-image processing across multiple SAR constellations to gauge floating-roof levels regardless of weather or darkness — a technical moat that optical-only competitors lack.
- **Evidence:** Ursa Space, 'New Dataset: Oil Inventory Index' launch; Business Wire, 'Ursa Launches Expanded Global Oil Storage Monitoring' (June 2018); Via Satellite profile of Ursa's SAR oil-storage service.

### 9. Kayrros — satellite crude-storage tracker (2020 glut)
- **What:** Applies machine learning to satellite imagery (optical and SAR) to measure onshore crude tanks, floating storage, and crude-on-water globally; it quantified the 2020 storage glut in near real time, estimating a build of roughly 500 million barrels through late May 2020 as tankers became floating warehouses.
- **Who:** Kayrros (Paris; co-founders Antoine Rostand and chief analyst Antoine Halff, both ex-industry); data sold to commodity traders and macro funds and referenced by the IEA.
- **Instrument:** Brent and WTI crude futures and calendar spreads (contango/storage plays), plus the USO ETF.
- **Why it worked:** An imagery-processing moat over tanks, tankers and on-water crude produced a real-time read in the fastest-moving oil market on record. In 2020 the deep contango made storage levels directly tradeable via the futures curve; the deep liquid crude complex and repeatable updates gave capacity.
- **The lead:** Near-real-time global storage builds during 2020 versus delayed official inventory statistics — decisive when WTI briefly went negative and floating-storage economics drove the forward curve.
- **The moat:** Proprietary computer vision spanning tanks, tankers and on-water crude worldwide, including opaque floating storage that few other providers could measure.
- **Evidence:** Marketplace, 'Oil and big data: how to flatten the crude curve' (April 2020); World Oil coverage citing Kayrros's ~500M-barrel 2020 storage build; IEA references to Kayrros storage data.

### 10. Container-port congestion equity signal
- **What:** A U-Net computer-vision model trained on hand-labeled 2017 imagery counts containers stacked at 48 major world ports from Sentinel-2 satellite images; rising counts signal port congestion and slowing container trade, which the study shows predicts next-day national equity-index returns.
- **Who:** Documented by Honghai Yu, Xianfeng Hao, Liangyu Wu, Yuqi Zhao and Yudong Wang, 'Eye in outer space,' Humanities and Social Sciences Communications (Nature portfolio), December 2023.
- **Instrument:** National and world stock-index futures and ETFs — predictive in 27 of 33 countries at daily frequency.
- **Why it worked:** A CV-processing moat (hand-labeling plus a trained U-Net over 48 ports of Sentinel-2 data) turns raw imagery into a container-count series. Imagery captured within 24 hours before close leads official customs/trade and output statistics by weeks; the tradeable instruments are the most liquid equity indices; the signal fires daily and is documented to be profitable out of sample.
- **The lead:** Same-day imagery available within 24 hours before the close predicts the next business day's close-to-close index return, well ahead of official trade and output data that congestion anticipates.
- **The moat:** Requires training a container-detection CNN on hand-labeled satellite images and processing 48 ports of Sentinel-2 data — a build, not a purchasable index.
- **Evidence:** Yu, Hao, Wu, Zhao & Wang (2023), Humanities and Social Sciences Communications 10(1) — documents ~16% average annualized return and a Sharpe ratio of ~1.19 from the port-imagery strategy across 27 of 33 countries over 2019-2021.


## Wagering & parimutuel model successes (the Benter lineage)

### 11. Bill Benter — Hong Kong horse-racing syndicate
- **What:** From the mid-1980s Benter built a private computerized handicapping model for Hong Kong Jockey Club thoroughbred racing and bet it into the parimutuel win/exotic pools, ultimately winning on the order of ~US$1 billion over the operation's life — the archetype of the whole category.
- **Who:** Bill Benter (initially partnered with Australian gambler Alan Woods); operation run out of Hong Kong from 1984 onward.
- **Instrument:** The Hong Kong Jockey Club parimutuel pools — one of the largest, most liquid betting monopolies on earth (billions in annual turnover), so a probabilistic edge could absorb very large stakes into win, quinella, trifecta and other pools.
- **Why it worked:** The marginal price-setter was the unsophisticated betting crowd whose biases (favorite-longshot bias, sentimental bets) persisted race after race. Benter's breakthrough was a two-stage model: a multinomial-logit fundamental model on ~20 tuned inputs (form, sectional times, weather, jockey, track state), then a SECOND conditional-logit stage that folded the public's own implied win probability back in as a variable — so his final estimate strictly dominated both his raw model AND the crowd's consensus. Repeatable across thousands of races a season with huge capacity.
- **The lead:** His per-horse probability estimate was more accurate than the market-clearing tote consensus. He committed capital in the final minutes before post, reading the near-final pool, so his number led the price that actually locked in at post time — an analytical lead over the closing consensus, not a race against a newswire.
- **The moat:** The moat was years of unglamorous work: hand-building and tuning a multinomial-logit model on a green-screen PC, cleaning form data nobody else had digitized, and — critically — the innovation of integrating public odds into the model. The data (tote + form) was public; the edge was in the processing that took years to reach profitability (first profitable season 1987).
- **Evidence:** Bloomberg Businessweek, Kit Chellel, 'The Gambler Who Cracked the Horse-Racing Code' (2018-05-03); Benter's own paper 'Computer Based Horse Race Handicapping and Wagering Systems' building on Bolton & Chapman (1986), 'Searching for Positive Returns at the Track: A Multinomial Logit Model for Handicapping Horse Races,' Management Science 32(8):1040-1059; Guinness World Records profile (2025).

### 12. Alan Woods — post-split Hong Kong racing syndicate
- **What:** After dissolving his partnership with Benter in 1987, Australian gambler Alan Woods ran his own independent computer-model betting syndicate on Hong Kong racing for two decades, building a fortune estimated at ~US$670 million at his 2008 death.
- **Who:** Alan Woods; syndicate operated on HKJC pools with Woods often directing from Manila, employing teams of programmers and data staff.
- **Instrument:** HKJC parimutuel pools — same deep, liquid monopoly. Woods's syndicate turnover was estimated at roughly 2% of the entire Jockey Club's annual betting handle, demonstrating enormous capacity.
- **Why it worked:** Same structural edge as Benter (biased parimutuel crowd, favorite-longshot bias) exploited by an independently developed and continuously refined computer model. Woods proved the DNA was reproducible and durable: his bankroll actually accelerated AFTER the split (HK$3M in 1987-88, HK$7M the next season, compounding for years), showing the signal fired repeatably at scale over a very long horizon.
- **The lead:** Model-derived win probabilities beat the closing tote consensus; bets timed late into the pool so the syndicate's number led the price locked at post time.
- **The moat:** A separately built, separately maintained handicapping model and data operation — Woods rebuilt the processing pipeline himself rather than sharing Benter's code, and ran it as an industrialized operation with dedicated staff, proving the moat was the sustained modeling/data work, not one lucky codebase.
- **Evidence:** Alan Woods (gambler) Wikipedia; Cigar Aficionado profile ('The Hundred and Fifty Million Dollar Man'); multiple obituaries (2008) citing ~US$670M fortune and the Benter split in 1987; Bloomberg Businessweek Benter feature (2018) corroborates the partnership and split.

### 13. Zeljko Ranogajec & David Walsh — the 'Punters Club' / rebate syndicate
- **What:** A Tasmanian-founded syndicate that became the world's largest gambling operation, betting an estimated ~A$3 billion+ a year across horse racing and lotteries, engineered around parimutuel modeling PLUS negotiated turnover rebates. Walsh's share funded Hobart's MONA museum.
- **Who:** Zeljko Ranogajec ('The Joker') and mathematician David Walsh (later joined by others); operation spanned Australia and the US, indirectly employing ~300+ people.
- **Instrument:** Totalisator/parimutuel pools in Australia and the US (Tabcorp, Tote Tasmania, US racing pools), plus large lottery pools — extremely high-capacity, high-turnover instruments.
- **Why it worked:** Two stacked edges. (1) A modeling/arbitrage edge: teams of mathematicians and coders scanned pools in real time for mispricing (inflated jackpots, pool inefficiencies) and fired automated bets before odds adjusted. (2) A structural edge unique to whales: because the syndicate's billions in turnover fattened operators' commission, it negotiated rebates averaging ~13% on US losing bets — court documents show US$44M of a period's earnings came from rebates on losers vs only US$8M from picking winners. Guaranteed income on monstrous volume that no small bettor could access.
- **The lead:** Real-time pool-scanning algorithms detected and hit pricing anomalies before the tote's displayed odds re-equilibrated; the rebate income needed no lead at all — it was contractual on every dollar staked.
- **The moat:** Two moats: proprietary real-time pool-analysis software built over decades, and — uniquely — the SCALE itself. Only a syndicate turning over billions could extract double-digit rebates from totes and casinos, an edge structurally unavailable to anyone smaller. Tote Tasmania's 2011 collapse was attributed partly to rebate deals with this syndicate.
- **Evidence:** The Examiner/Illawarra Mercury, 'Meet the Joker: the Australian who is the biggest gambler in the world'; CalvinAyre (2012) on the move abroad costing bookies; court-document reporting on the 13% US rebate and $44M-vs-$8M split; David Walsh's 2014 autobiography 'A Bone of Fact' on funding MONA from the Punters Club.

### 14. Tony Bloom & Starlizard — football (soccer) betting consultancy
- **What:** Starlizard (founded 2006) is a London football-analytics firm that runs statistical models on global soccer matches and drives Bloom's professional betting syndicate; High Court filings alleged winnings around £600m/year (former staff estimate £20m–£100m/yr depending on the season).
- **Who:** Tony Bloom ('The Lizard'), also owner of Brighton & Hove Albion; Starlizard employs teams of analysts, mathematicians and programmers, operating 'more like a hedge fund' with syndicate 'stars' sharing profits.
- **Instrument:** Global football betting markets, principally Asian-handicap and totals lines at high-limit bookmakers and exchanges — deep, liquid, and available on thousands of matches worldwide, giving huge repeatability and capacity.
- **Why it worked:** The price-setters are bookmakers whose odds carry margin and lag behind true probabilities, plus recreational bettors whose money biases lines toward popular teams. Starlizard's proprietary models estimate match probabilities more accurately than opening/consensus bookmaker prices by ingesting granular data (form, lineups, in-house-scouted quality signals, even weather and morale), then the syndicate stakes where its number diverges from the market — a classic mispricing edge fired across a global fixture list many times a week.
- **The lead:** Its model prices a match before the bookmaker line reaches efficiency; the syndicate bets into soft opening numbers and moves them, capturing the gap before the market closes at fair value.
- **The moat:** A hard-to-replicate data-and-processing operation: bespoke data collection (including proprietary match assessment beyond public stats), a large in-house quant/analyst team, and a decade-plus of model tuning. The raw results exist publicly; the moat is the industrialized modeling that turns them into better-than-market probabilities.
- **Evidence:** Racing Post, 'High Court case alleges Tony Bloom's betting empire makes £600m a year' (on the Starlizard syndicate); TheJournal.ie, 'The inside story on Britain's greatest sports gambler'; Tony Bloom Wikipedia.

### 15. Matthew Benham & Smartodds / Matchbook — quantitative football betting
- **What:** Physics-trained ex-City trader Matthew Benham built statistical football models, launched Smartodds (~2004) to sell/act on them and later the Matchbook exchange, generating a betting fortune he then used to buy and run Brentford FC and FC Midtjylland on the same analytics.
- **Who:** Matthew Benham; Smartodds (a modeling/data firm) plus his personal syndicate.
- **Instrument:** Football betting markets (Asian handicaps, match odds) across many leagues and thousands of matches — high liquidity and repeatability.
- **Why it worked:** Benham adopted the Dixon-Coles / Poisson-goals academic framework (Dixon & Coles 1997, 'Modelling Association Football Scores and Inefficiencies in the Football Betting Market') and industrialized it: models on thousands of data points (team/player performance, referee tendencies, conditions) that produce match probabilities beating bookmaker lines carrying margin. The soft side of the market is recreational bettors and margin-laden books; the model's better estimate is staked repeatedly at scale. Later validated the edge by transferring it to xG-style club recruitment (Brentford's rise to the Premier League).
- **The lead:** Model probabilities lead the bookmakers' path to efficient prices; bets are placed into mispriced lines before the market corrects toward the model's fair value.
- **The moat:** Proprietary models built and tuned since ~2004 on a large in-house data operation, seeded by Benham's quant/derivatives background — the published academic method is public, but the productionized data pipeline and continuous calibration are the moat, evidenced by consistent multi-year profitability funding two football clubs.
- **Evidence:** Matthew Benham Wikipedia; MIT Sloan Sports Analytics Conference speaker profile; Dixon & Coles (1997) Applied Statistics 46(2):265-280 as the foundational method; multiple features on Smartodds and the Brentford/Midtjylland 'moneyball' operation.

### 16. Haralabos Voulgaris & the 'Ewing' model — NBA betting
- **What:** Professional bettor 'Bob' Voulgaris built (with a math collaborator, 'The Whiz') a machine-driven NBA simulation model nicknamed Ewing that projected scores and identified mispriced sides/totals; reported career betting profit exceeded ~US$100M over two decades, at peak wagering >US$1M on a single NBA day.
- **Who:** Haralabos Voulgaris; later hired 2018-2021 as Dallas Mavericks Director of Quantitative Research & Development, importing the same modeling into team strategy.
- **Instrument:** NBA betting markets — point spreads, totals and derivatives at Vegas/offshore sportsbooks — deep and liquid enough to place seven-figure daily action.
- **Why it worked:** Sportsbooks' NBA lines were shaded by public money on popular teams/overs and slow to price coaching tendencies and rotation effects. Ewing simulated games from those under-modeled factors and produced projections more accurate than the posted number, so Voulgaris bet the gap — reportedly a ~70% win-rate stretch — repeatedly across a long 82-game season, giving high frequency and real capacity.
- **The lead:** The model projected a game's true number before the book adjusted; he attacked openers and soft lines, betting before the market moved to efficiency (and before books priced in coaching/rotation edges he had modeled).
- **The moat:** A privately built simulation engine plus proprietary charting of coaching and rotation tendencies (data nobody was systematically capturing at the time), refined over years with a dedicated quant partner — the processing/data-collection moat, not merely access to box scores. Validated by Mark Cuban hiring him into the Mavericks front office.
- **Evidence:** ESPN The Magazine / ESPN profiles of Voulgaris and the 'Ewing' model; open-court-basketball and Sports History Network features; reporting on the 2018 Dallas Mavericks hiring as Director of Quantitative Research and Development.

### 17. Ed Thorp — blackjack card-counting → Princeton Newport Partners
- **What:** The mathematician who mathematically proved blackjack was beatable ('Beat the Dealer,' 1962) then carried the same expected-value / edge-and-bankroll discipline into securities, founding Princeton Newport Partners (1969), the first market-neutral quantitative derivatives hedge fund.
- **Who:** Edward O. Thorp (with partner Jay Regan on the trading side); earlier co-work with Sheen Kassouf on warrant hedging.
- **Instrument:** Convertible bonds, warrants and options — and the equities against which they were hedged — a large, liquid derivatives arena where small per-trade edges compound across thousands of positions.
- **Why it worked:** Thorp transferred the wagering DNA directly: identify a quantifiable edge, size bets by Kelly, and grind it at scale. In markets the mispricing was warrants/convertibles trading away from theoretical value (he was using option-pricing logic before Black-Scholes was published). The marginal price-setters were unsophisticated relative to his math. PNP compounded ~19% net for roughly two decades with no losing year — repeatable, high-capacity, cost-clearing.
- **The lead:** His delta-hedged theoretical values led the market's mispriced option/warrant quotes; he traded the convergence before the rest of the market repriced to fair value.
- **The moat:** Proprietary option-valuation math (pre-Black-Scholes) and hedging technique that essentially nobody else on the Street had — the ultimate hard-to-replicate processing edge, seeded and funded by his blackjack winnings and 'Beat the Market' (1967) research.
- **Evidence:** Edward O. Thorp, 'A Man for All Markets' (2017); 'Beat the Dealer' (1962) and 'Beat the Market' (with Kassouf, 1967); Princeton Newport Partners Wikipedia and the documented ~19.1%/yr, no-down-year record.

### 18. Jeff Yass & Susquehanna International Group — poker/racetrack pricing → options market making
- **What:** Yass and college friends turned professional poker and horse-race handicapping into the intellectual and financial seed capital for Susquehanna International Group (founded 1987), now one of the largest options market makers in the world; Yass's fortune is estimated around US$12B+.
- **Who:** Jeff Yass and SIG co-founders (Binghamton poker/racetrack crew); Yass authored an early paper, 'An Econometric Analysis of Horse Racing.'
- **Instrument:** Listed options and equities market making across dozens of global exchanges — enormous liquidity and capacity; SIG is a top options/ETF market maker.
- **Why it worked:** Yass explicitly built SIG on parimutuel/poker logic: think in probabilities and implied odds, size by edge, and never be the least-informed player at the table. Options market making is structurally the same game — quote two-sided prices around a better probabilistic estimate of fair value and capture the spread across millions of trades. The counterparties (retail and less-sophisticated flow) supply persistent edge; the signal fires constantly with vast capacity.
- **The lead:** SIG's model-derived fair values lead the quotes it posts; it captures mispricing versus incoming order flow continuously rather than racing any single news event.
- **The moat:** A proprietary options-pricing and risk framework, plus a decision-making culture drilled from betting-market probability theory, built over decades — a processing/culture moat that turned racetrack-and-poker pricing intuition into an industrial market-making engine.
- **Evidence:** Forbes, Antoine Gara, 'How Trader Jeff Yass Parlayed Poker And Horse Racing Bets Into A $12 Billion Fortune' (2021); Philadelphia Magazine, 'Beating the Odds'; Yass's 'An Econometric Analysis of Horse Racing' (Gambling Times); Susquehanna International Group corporate history.

### 19. Billy Walters & the Computer Group (Michael Kent) — computerized sports betting
- **What:** The first national computerized sports-betting syndicate: Michael Kent's power-rating software priced college football and NFL games; the group (organized ~1980, Walters joining 1983) bet hundreds of thousands per day and Kent's records show ~US$5M profit in 1983-84 alone (his tally acknowledged as incomplete). Walters went on to reportedly win hundreds of millions over decades.
- **Who:** Michael Kent (ex-Westinghouse mathematician who wrote the model), Dr. Ivan Mindlin, Glen Walker, and Billy Walters as the syndicate's betting operator.
- **Instrument:** Las Vegas / nationwide sports betting markets — college football and NFL point spreads and totals — high-limit, high-frequency, with a full season of games for repeatability.
- **Why it worked:** Kent built quantitative team power ratings that priced games more accurately than the opening Vegas lines, which were set partly by intuition and shaded by public bias toward popular teams. The group bet aggressively into soft early-week numbers, reportedly ~60% win rate — an edge fired across the entire football calendar with real capacity, and organized nationally to get bets down before books adjusted.
- **The lead:** The model produced a game's fair spread before Vegas moved to efficiency; the syndicate hammered early lines, and its own volume then moved the market — a genuine lead over the closing consensus number.
- **The moat:** A pioneering, privately written power-rating program (one of the first serious computerized sports models) plus a covert national network of runners/accounts to place size before lines corrected — a combined modeling-and-execution moat that predated any commercial equivalent.
- **Evidence:** Michael Kent (computer specialist) Wikipedia; Billy Walters memoir 'Gambler: Secrets from a Life at Risk' (2023); Las Vegas Review-Journal coverage of Kent's Sports Gambling Hall of Fame induction and the Computer Group; the 1985 federal investigation ('Computer Group' case) that documented the operation.

### 20. Blair Hull — blackjack card-counting → Hull Trading options market making
- **What:** A member of Al Francesco's 1970s blackjack team who turned card-counting bankroll and edge-discipline into Hull Trading Company (founded 1985), a pioneering electronic options market maker sold to Goldman Sachs in 1999 for ~US$531M.
- **Who:** Blair Hull (Blackjack Hall of Fame; original 'Big Player' on Francesco's team); Hull Trading grew to 250+ staff trading on 28 exchanges.
- **Instrument:** Listed options and their underlying equities/futures across global exchanges — deep, liquid, high-frequency market making with vast capacity.
- **Why it worked:** Hull transferred the blackjack framework — quantify the edge, manage variance, bet size to bankroll — into options. His firm computed theoretical option values faster and more accurately than floor competitors and quoted around them, systematically capturing the spread against less-sophisticated order flow. The edge repeated across millions of quotes and scaled into one of the world's largest options market makers.
- **The lead:** Hull Trading's model-driven fair values led the market's quotes; it repriced and hedged faster than floor traders, capturing mispricing before competitors adjusted.
- **The moat:** Early proprietary electronic/algorithmic options-pricing and risk systems (well ahead of the screen-trading curve) plus a probability-and-variance discipline drilled at the blackjack table — a processing/technology moat validated by the ~US$531M Goldman Sachs acquisition.
- **Evidence:** Hull Trading Company and Blair Hull Wikipedia; Blackjack Hall of Fame profile; Jack Schwager, 'The New Market Wizards' (Blair Hull interview); 1999 Goldman Sachs acquisition reporting (~$531M).


## Consumer-transaction & receipt-panel successes

### 21. Foursquare foot-traffic call on Chipotle (Q1 2016)
- **What:** Foursquare used its proprietary background-geolocation foot-traffic panel to forecast Chipotle's post-E.coli same-store sales and publicly predicted Q1 2016 comps would fall ~30% before the print; the underlying place-visit signal was sold to investors. Actual reported comps came in at -29.7%.
- **Who:** Foursquare (CEO Jeff Glueck and its data-science team); its Place Insights foot-traffic data was marketed to investors.
- **Instrument:** Chipotle Mexican Grill (CMG) common stock and options — an S&P 500 large-cap, deeply liquid.
- **Why it worked:** Foursquare had spent years calibrating visit-share from ~50M Foursquare/Swarm users against companies' actually-reported dollar comps, so it could translate a traffic collapse into a revenue number. The sell-side consensus and slow-moving retail flow (the marginal price-setters) had no comparable panel and underestimated how deep the E. coli hit went.
- **The lead:** Roughly 10-14 days ahead of Chipotle's late-April 2016 earnings release.
- **The moat:** A first-party panel of ~50M users' passive/background location plus a private visits-to-comps calibration model built over years — not scrapeable and not licensable from anyone else.
- **Evidence:** Jeff Glueck, 'Foursquare Predicts Chipotle's Q1 Sales Down Nearly 30%,' Foursquare/Medium (Apr 2016); Washington Post, 'How Foursquare knew before almost anyone how bad things were for Chipotle' (Apr 28, 2016); Slate/Business Insider coverage. Chipotle later reported comps -29.7%.

### 22. Thasos geolocation read on Tesla's Fremont ramp (2018)
- **What:** Thasos geofenced Tesla's Fremont factory and mined anonymized cell-phone location pings to detect that overnight/graveyard-shift worker presence rose ~30% from June to October 2018 — a direct read on the Model 3 production ramp — and sold the signal to hedge-fund clients who positioned ahead of Tesla's production/delivery release.
- **Who:** Thasos Group (founder Greg Skibiski); its QStreams product built for quantitative hedge funds; client funds took the trades.
- **Instrument:** Tesla (TSLA) common stock and options — one of the most liquid, most-traded single names, with large earnings/production catalysts.
- **Why it worked:** Worker foot traffic at a single plant is a near-direct proxy for output that Tesla only confirms weeks later. Turning raw GPS into a clean geofenced worker-shift count (separating employees from visitors, filtering noise) is hard processing, and the production print was a binary catalyst the crowd mispriced.
- **The lead:** Weeks before Tesla published its quarterly production and delivery numbers.
- **The moat:** Raw location feeds from hundreds of millions of phones plus proprietary geofencing of 400+ companies' venues and de-noising into worker-vs-visitor signals — infrastructure competitors and funds could not replicate off the shelf.
- **Evidence:** DataDrivenInvestor, 'Your Mobile Phone as a Gold Mine (for hedge funds)' (Oct 2018); Thasos QStreams launch (PR Newswire, 2019); WatersTechnology, 'Hedge Funds Hunt for Alpha Across 1 Billion Smartphones.'

### 23. App Annie app-usage estimates and the SEC alt-data case (2021)
- **What:** App Annie sold estimates of app downloads, daily active users and in-app revenue to trading firms. The SEC's 2021 order — its first-ever enforcement action against an alternative-data provider — documents that trading firms used these estimates to buy and sell securities and to 'trade ahead of upcoming earnings,' and that App Annie boosted accuracy using non-anonymized confidential Connect-SDK data to make estimates 'more valuable to trading firms.'
- **Who:** App Annie Inc. (now data.ai) and founder/CEO Bertrand Schmitt; U.S. SEC (Release 2021-176); the (unnamed) trading-firm subscribers.
- **Instrument:** Liquid mobile/consumer-tech equities whose revenue is app-driven, plus options.
- **Why it worked:** App downloads/DAU are a leading indicator of consumer-tech revenue, and App Annie's free Connect SDK gave it confidential first-party telemetry from app developers that no competitor had — which it secretly used to sharpen the model, letting funds trade ahead of prints.
- **The lead:** Ahead of quarterly earnings for app-driven issuers.
- **The moat:** Proprietary Connect-SDK telemetry from developers — a panel structurally impossible to reconstruct, and whose misuse is exactly what the SEC charged as fraud.
- **Evidence:** SEC Press Release 2021-176, 'SEC Charges App Annie and its Founder with Securities Fraud' (Sept 14, 2021); $10M company settlement + $300k against Schmitt; Gizmodo, 'App Annie Fined $10 Million in Case That Is the Future of Insider Trading.'

### 24. YipitData KPI prediction for consumer/internet names
- **What:** YipitData fuses web-scraped listings, e-receipt panels and card data into pre-release KPI estimates (revenue, GMV, subscribers) for consumer and internet companies; funds trade the gap between YipitData's number and street consensus. Reported sub-1.5% earnings-prediction error on tested retail universes and a documented 2025 call of a ~400bp surprise for a major e-commerce name.
- **Who:** YipitData (co-founders Vinicius Vacanti and Jim Moran); 450+ institutional clients including top hedge funds.
- **Instrument:** Consumer/internet large-caps and options — Uber, Lyft, Grubhub, Amazon, Wayfair, Chewy and peers.
- **Why it worked:** The edge is in the processing: large-scale scraping plus panel-cleaning and years of mapping messy raw data to companies' exact reported KPI definitions. Consensus updates slowly and retail order flow is naive, so the pre-print read persists and clears costs in liquid names.
- **The lead:** Weeks ahead of quarterly prints; captured ~12% of mid-to-large hedge funds' third-party alt-data spend by 2026.
- **The moat:** Proprietary scraping + panel infrastructure and a hard-won KPI-mapping layer — the raw data alone is worthless without the reconciliation engine.
- **Evidence:** TickerTrends, 'KPI Prediction Platforms for Hedge Funds: YipitData vs M Science vs TickerTrends'; YipitData disclosures of sub-1.5% error and the 400bp e-commerce surprise call; alternativedata.org / Institutional Investor profiles.

### 25. Second Measure card-panel read on Blue Apron
- **What:** Second Measure's de-duplicated panel of billions of U.S. credit/debit transactions (20M+ consumers) tracked Blue Apron's customer count and cohort retention deteriorating around its post-IPO prints — customers fell to ~943k at end-June 2017 (-9% QoQ) with weak one-year retention — flagging the collapse ahead of the market; shares fell 19% on the print.
- **Who:** Second Measure (co-founders Michael Babineau and Lillian Chou; now Bloomberg Second Measure); hedge-fund and asset-manager clients.
- **Instrument:** Blue Apron (APRN) and comparable consumer names plus options; 3,000+ companies covered.
- **Why it worked:** Card spend shows revenue trends 2-4 weeks before official comps, and Blue Apron's falling customer count and poor retention were visible in the panel before management confirmed them. Peer-reviewed work (MIT/ACM Sigmetrics 2019) shows a credit-card panel beats the full analyst consensus on 57% of earnings for 30+ firms, quantifying the edge behind the category.
- **The lead:** Typically 2-4 weeks ahead of official retailer/company sales reports.
- **The moat:** Aggregating and de-duplicating multiple messy, licensed raw card feeds into a clean per-company/per-brand panel is a large, ongoing processing task competitors can't cheaply copy.
- **Evidence:** Second Measure datapoints, 'Blue Apron: Inside the box' and meal-kit share reports; Crain's/Grocery Dive on Blue Apron's -24% customer count and -19% shares (Aug 2017); MIT News (Dec 2019), model beats Wall Street analysts 57% using credit-card data.

### 26. Edison Trends email-receipt panel
- **What:** Edison ran an email-receipt panel of 1M+ users harvested (with consent) from its own Edison Mail app, parsing order-level e-receipts — item, price, tax — and selling trend reads to investors, e.g., analyzing 1.5M+ Uber/Lyft transactions and tracking Amazon and meal-kit spend and share shifts.
- **Who:** Edison Software / Edison Trends (launched July 2017); investor and enterprise clients.
- **Instrument:** Consumer-internet large-caps and options — Amazon, Uber, Lyft and peers.
- **Why it worked:** Owning a first-party email client gave exclusive, item-level purchase visibility that a licensed feed can't match; receipts arrive in real time, far ahead of quarterly prints, and directly show head-to-head share (e.g., Uber vs Lyft) that consensus can only infer.
- **The lead:** Real-time receipts vs quarterly earnings prints (weeks of lead).
- **The moat:** First-party inbox access through the Edison Mail app — a wholly-owned panel, not a licensed data feed anyone else can buy.
- **Evidence:** Edison founder Medium posts (e.g., 'March Customer Spend on Uber and Lyft Up 317% YoY'); alternativedata.org and Datarade Edison Trends provider profiles describing the 1M+ user panel and investor use.

### 27. Envestnet | Yodlee bank-and-card aggregation panel
- **What:** Yodlee, the account-aggregation plumbing behind many banking and fintech apps, sold anonymized bank plus credit/debit transaction data of tens of millions of Americans to hedge funds and research firms to predict company performance — part of an estimated ~$400M transaction-data-sales business.
- **Who:** Envestnet | Yodlee; hedge-fund and research-firm clients. (FTC civil investigative demand 2020; a 2019 N.D. Cal. class action.)
- **Instrument:** Consumer and retail large-caps and options.
- **Why it worked:** Yodlee's position as the aggregation layer for thousands of banking apps gave it a uniquely broad, cross-institution view of real spending that no single card issuer or scraper could assemble, letting funds see revenue trends before prints. The FTC probe and class action confirm the data was sold specifically for this trading use.
- **The lead:** Weeks ahead of company earnings.
- **The moat:** Being the account-aggregation infrastructure for the banking/fintech ecosystem — a panel structurally impossible for competitors to replicate.
- **Evidence:** Forbes (Elena Botella, Dec 2020) 'Hedge Funds Buy Your Credit Card Transaction Data To Predict The Market'; Forbes (Peter Cohan, 2018) 'Mastercard, AmEx And Envestnet Profit From $400M Business Of Selling Transaction Data'; Vice/Motherboard, 'Leaked Document Shows How Big Companies Buy Credit Card Data on Millions of Americans'; FTC probe reporting.

### 28. Froot-Kang-Ozik-Sadka geolocation sales signal (MKT MediaStats)
- **What:** An academic-plus-commercial team built real-time corporate-sales proxies from ~50M mobile devices' geolocation (plus other behavioral channels). The within-quarter measure predicted quarterly sales growth, revenue surprises and earnings surprises, and generated average excess announcement returns of +3.4% — a documented, peer-reviewed event strategy. The authors commercialized it through MKT MediaStats, selling signals to funds.
- **Who:** Kenneth Froot (Harvard), Namho Kang, Gideon Ozik and Ronnie Sadka; MKT MediaStats LLC (which they co-founded to sell the signals to portfolio managers).
- **Instrument:** Large-cap retail/consumer stocks traded around their earnings announcements.
- **Why it worked:** Geolocation foot traffic captures sales occurring within the quarter and in the window between quarter-end and the announcement date — before the number is public. The moat is turning 50M noisy device tracks into per-company real-time sales, and the paper quantifies the resulting abnormal return.
- **The lead:** Within-quarter, before the earnings announcement date.
- **The moat:** A proprietary geolocation-processing pipeline (MKT MediaStats) plus a peer-reviewed methodology mapping device movement to reported sales.
- **Evidence:** Froot, Kang, Ozik & Sadka, 'What do measures of real-time corporate sales say about earnings surprises and post-announcement returns?', Journal of Financial Economics 125(1), 2017, pp. 143-162 (NBER WP 22366); reported +3.4% average excess announcement returns; MKT MediaStats corporate materials.

### 29. Slice Intelligence / Rakuten Intelligence e-receipt panel
- **What:** Slice's shopping app scanned users' inboxes to extract item-level e-receipts across all retailers, growing a panel from 2M to 5M shoppers. Rebranded Rakuten Intelligence, it acquired hedge-fund-focused distributor Aviso Partners specifically to market the e-receipt data to asset managers, supplying early reads on Amazon (including Prime Day) and broader e-commerce share.
- **Who:** Slice Technologies / Slice Intelligence, later Rakuten Intelligence; Aviso Partners (acquired for hedge-fund and alt-data distribution).
- **Instrument:** E-commerce and retail large-caps and options — Amazon and peers.
- **Why it worked:** First-party inbox scanning produced exclusive, cross-retailer, item-level purchase data in real time, giving funds early reads on Amazon and retail before quarterly prints. The Aviso acquisition existed precisely because Rakuten wanted hedge-fund reach for the data.
- **The lead:** Real-time receipts vs quarterly prints (weeks of lead).
- **The moat:** A proprietary consumer app plus item-level email-parsing — the panel is owned, not licensed, and captures line-item detail card panels can't see.
- **Evidence:** Forbes (Hollie Slade, 2014) 'How Slice Is Monetizing Over Two Million People's Every Online Receipt'; Integrity Research on Rakuten Intelligence acquiring Aviso Partners for hedge-fund/alt-data distribution; MrWeb Daily Research News, 'e-Receipt Specialist Slice Debuts Panel Business.'

### 30. Quandl alt-data marketplace (credit-card panels to hedge funds)
- **What:** Quandl sourced, scraped and licensed hard-to-get datasets — including anonymized credit-card transaction panels — and productized them for hedge funds to predict quarterly revenue and earnings ahead of prints. The operation itself was profitable enough that Nasdaq acquired it (2018), and it was used by 8 of the top 10 hedge funds.
- **Who:** Quandl (co-founder/CEO Tammer Kamel, a former quant/PM); Nasdaq (acquirer); the top hedge-fund clients.
- **Instrument:** Consumer/retail large-caps and options traded by the client funds.
- **Why it worked:** Quandl's edge was sourcing exclusive datasets and cleaning/normalizing them faster than funds could build DIY, then selling revenue reads that landed weeks before prints into a slow-moving consensus. Kamel was profiled by CNBC as the man who 'finds secret data sets and sells them to hedge funds.'
- **The lead:** Weeks ahead of quarterly earnings for the covered companies.
- **The moat:** Proprietary data-sourcing relationships plus a normalization/cleaning pipeline; being first to license and productize a dataset is the moat.
- **Evidence:** CNBC (Nov 28, 2017) 'Making millions from the data hidden in plain sight' / 'Quandl's Tammer Kamel Finds Secret Data Sets And Sells Them To Hedge Funds'; The Globe and Mail, 'The data game'; Nasdaq acquisition announcement (2018).


## Web-scraping & pricing-intelligence successes

### 31. PriceStats / Billion Prices Project (Cavallo & Rigobon) → State Street
- **What:** Web-scrapes ~15M+ online prices per day from 1,000+ retailers across 70+ countries and reconstructs them into daily inflation indices that move before official CPI. Commercialized as PriceStats LLC and distributed through State Street Associates; State Street acquired PriceStats outright in 2025.
- **Who:** Alberto Cavallo and Roberto Rigobon (MIT/HBS academics); PriceStats LLC; State Street Global Markets / State Street Associates.
- **Instrument:** TIPS and inflation-linked bonds, inflation swaps, rate futures, and EM FX/sovereign exposure (notably the Argentine peso and Argentine bonds during the INDEC manipulation years) — all deep, liquid macro markets.
- **Why it worked:** The edge was in the WORK, not the data existing: a multi-year pipeline that continuously scrapes, de-dupes, categorizes and quality-adjusts millions of noisy retailer pages into a clean, CPI-comparable index. It captured the sharp post-Lehman late-2008 deflation in near-real time before official CPI showed it, and exposed Argentina's understated inflation (government ~8% vs actual >20% for 2007-2011). Sophisticated macro desks are the buyers; the signal repeats every CPI cycle across many countries, absorbing large size in rates/FX.
- **The lead:** Daily index with roughly a 3-day lag versus a monthly CPI that prints weeks after the fact — a multi-week lead on the official number, every month, in many countries.
- **The moat:** A privately built, years-tuned scraping-and-classification engine plus exclusive commercial distribution via State Street; competitors cannot cheaply reconstruct the historical panel.
- **Evidence:** Cavallo & Rigobon, 'The Billion Prices Project: Using Online Prices for Measurement and Research,' Journal of Economic Perspectives 2016 (NBER w22111); Cavallo, 'Online and Official Price Indexes: Measuring Argentina's Inflation,' Journal of Monetary Economics 2013; State Street press release, 'State Street Acquires PriceStats' (2025).

### 32. Premise Data
- **What:** Blends web-scraped online e-commerce prices with a crowdsourced global street team (120+ countries) to build real-time price/inflation panels; documented ability to predict monthly inflation 4-6 weeks in advance in some economies. Sold to financial institutions and government agencies.
- **Who:** David Soloff and Joe Reisinger (co-founders, 2012); backed by Google Ventures, Andreessen Horowitz, Harrison Metal, Social+Capital.
- **Instrument:** Inflation-linked bonds, rates, and emerging-market FX/sovereigns — macro positions taken ahead of official CPI prints, especially in EM where official stats are slow or unreliable.
- **Why it worked:** Hybrid collection is the moat: pure scraping fails where online price coverage is thin (emerging markets), so Premise pairs scraping with paid on-the-ground contributors in 120+ countries — a data-supply chain rivals can't cheaply replicate. That coverage is exactly where the mispricing lives (weak/late official statistics), and the panel repeats monthly across many liquid rate/FX markets.
- **The lead:** Documented 4-6 week lead on official monthly inflation figures in covered economies.
- **The moat:** Proprietary global contributor network plus ML price-index construction; hard-to-replicate coverage in markets with poor web-price density.
- **Evidence:** CNN Money, 'Start-up firm Premise aims to capture real-time inflation data' (2013); MIT Technology Review, 'Crowdsourcing Mobile App Takes the Globe's Economic Pulse' (2013), which reports the 4-6 week inflation lead and sales to financial institutions.

### 33. LinkUp
- **What:** Scrapes millions of job listings directly from employer corporate websites (not job-board aggregators) to build a de-duplicated hiring panel used to forecast the BLS nonfarm-payrolls print and company-level hiring; powers the S&P 500 LinkUp Jobs Index.
- **Who:** LinkUp (Minneapolis); S&P Dow Jones Indices (index partner); University of Minnesota researchers (early validation).
- **Instrument:** FX and rate futures traded around the NFP release (among the most liquid moments in markets), plus single-name equities/options on company hiring signals.
- **Why it worked:** Pulling listings straight from the source removes the duplicate, recycled and stale postings that pollute aggregator feeds, yielding a cleaner read on true labor demand. Documented: LinkUp NFP forecasts beat consensus ~65% of the time over two years, and trading signals built on them averaged ~+10% one-day FX return across 25 NFP releases. The macro signal fires monthly into enormous liquidity; the single-name signal fires quarterly.
- **The lead:** Forecasts published before the BLS NFP print; company hiring inflections appear weeks before earnings.
- **The moat:** Direct-from-employer crawling plus de-duplication/classification across millions of company career pages — an operationally hard pipeline to rebuild.
- **Evidence:** LinkUp published NFP-forecast track record (beat consensus ~65%; ~+10% avg 1-day FX return over 25 releases); S&P DJI 'S&P 500 LinkUp Jobs Index' methodology document; University of Minnesota correlation study vs BLS.

### 34. Thinknum
- **What:** Continuously scrapes 35+ public-web datasets — job listings (4,600+ companies, ~10 years), store locations/counts, product assortments and pricing/discounts, out-of-stock, app ratings, LinkedIn headcount and social metrics — into structured corporate-activity time series.
- **Who:** Thinknum (co-founders Justin Zhen and Gregory Ugwi); distributed to hedge funds directly and via the Bloomberg Terminal.
- **Instrument:** Consumer, retail and tech large-cap equities and their options.
- **Why it worked:** The moat is persistent, structured, longitudinal capture: watching store openings/closings, product-count and out-of-stock changes, and hiring by role/geography lets a fund see operational inflection before it reaches comps or earnings. It is monetized enough that funds pay $100k-$800k/year and Bloomberg integrated it — evidence the processed panel clears real cost and repeats across thousands of firms.
- **The lead:** Store-count, product-assortment, out-of-stock and hiring changes visible weeks-to-quarters before earnings and analyst updates.
- **The moat:** Decade-deep structured panels across thousands of companies; expensive and slow to reconstruct from scratch.
- **Evidence:** Thinknum product documentation (35+ datasets; job-postings panel 4,600+ companies over ~10 years); reported institutional pricing of $100k-$800k/year and partial access via Bloomberg Terminal.

### 35. Revelio Labs
- **What:** Ingests billions of public job postings, professional profiles and headcount records and resolves them into standardized workforce time series (COSMOS: 5B+ postings, 1.1B+ individual profiles) covering hiring, attrition, seniority, skills and sentiment by company and sector.
- **Who:** Revelio Labs (New York); serves institutional investors and hedge funds; launched Revelio Public Labor Statistics (RPLS) as a timelier alternative to BLS.
- **Instrument:** Large-cap equities and sector-rotation baskets; macro labor-market positioning ahead of BLS releases.
- **Why it worked:** The hard part is entity resolution and standardization — turning messy, overlapping profiles and postings into clean company- and sector-level headcount/attrition/skills series. That processing (not the raw public data) is the moat, and it lets funds model hiring and anticipate sector rotations in real time, ahead of both BLS labor prints and company disclosures. The signal is continuous and scales across liquid large-caps.
- **The lead:** Real-time hiring/attrition reads ahead of monthly BLS labor statistics and quarterly company filings.
- **The moat:** 1.1B+ resolved individual profiles plus 5B+ postings, standardized into comparable panels — a pipeline that is very hard to replicate at scale.
- **Evidence:** Revelio Labs COSMOS launch (Aug 2024, 5B+ postings, 1.1B+ profiles); RPLS launch (Sep 2025); Integrity Research coverage of hedge-fund/investor usage.

### 36. YipitData
- **What:** Web-scrapes e-commerce, marketplace and app data (complemented by email-receipt and card panels) and reconciles it into company-level KPI and revenue estimates — accurate to within ~2% of reported figures — for 200+ public companies.
- **Who:** YipitData (New York); 450+ institutional clients and, as of early 2026, roughly 12% of mid-to-large hedge funds' third-party alt-data spend.
- **Instrument:** Consumer large-caps and their options — Uber, Lyft, DoorDash, Netflix, Amazon, Wayfair and peers.
- **Why it worked:** Scraping is commoditized; the moat is the analytics that reconcile noisy web signals into benchmarked revenue estimates repeatedly validated against reported results (~2% error). That accuracy is what funds pay for. The signal fires every earnings cycle across many deeply liquid large-caps with abundant options capacity — high repeatability and real size.
- **The lead:** KPI/revenue estimates delivered weeks before quarterly earnings.
- **The moat:** Proprietary scraping plus an estimate-reconciliation methodology across 200+ covered names, validated quarter after quarter against actuals.
- **Evidence:** Company and industry reporting: 450+ institutional clients, estimates within ~2% of company-reported metrics, ~12% of mid-to-large hedge-fund alt-data spend (AlternativeData.org / Institutional Investor coverage).

### 37. M Science / Majestic Research
- **What:** The first research firm built entirely around alternative data — proprietary online/web and commercial data panels (consumer, retail, telecom, media, tech metrics) turned into pre-earnings, data-driven company research for the buy side, covering 200+ names.
- **Who:** Founded 2002 as Majestic Research; acquired by Investment Technology Group (ITG) for $56M in 2010 (rebranded ITG Investment Research); later spun out and rebranded M Science, now owned by Jefferies Financial Group.
- **Instrument:** 200+ large-cap equities and options across consumer and TMT sectors.
- **Why it worked:** Majestic's specific edge was licensing large commercial/web datasets on an EXCLUSIVE basis and building panels no rival could simply buy — a textbook exclusivity-plus-processing moat. It was durable and monetized: a $56M acquisition validated the franchise, and the research fires every earnings cycle across liquid names. This is the pioneer case that predates the modern alt-data boom.
- **The lead:** Proprietary panel reads on sales/traffic before comps and earnings; institutional research delivered ahead of Street updates.
- **The moat:** Exclusive-licensed datasets and first-mover panels accumulated over roughly two decades — precisely what later imitators could not source.
- **Evidence:** Integrity Research and WatersTechnology coverage of Majestic Research → ITG Investment Research → M Science lineage ('first research firm to focus on alternative data,' exclusively licensed databases); ITG's $56M acquisition (2010).

### 38. Similarweb (Stock Intelligence)
- **What:** Operates website- and app-traffic/engagement measurement panels (1B+ websites, 4.7M+ apps) and packages them as an investor product ('Stock Intelligence') that forecasts internet and e-commerce companies' KPIs organized by ticker with multi-year history.
- **Who:** Similarweb (Israel; NYSE: SMWB); 'trusted by top hedge funds, asset managers, investment banks and PE firms'; named Hedgeweek 'Best Alternative Data Provider.'
- **Instrument:** Internet and e-commerce large-cap equities and their options.
- **Why it worked:** The moat is a global traffic-measurement panel plus modeling that converts raw clickstream/traffic into ticker-level, sector-normalized KPI forecasts — costly to build and maintain, and not something a fund can scrape ad hoc. It is monetized across the buy side (an award-winning, subscription business at an IPO'd company) and fires every quarter on highly liquid internet names.
- **The lead:** Web/app traffic and engagement trends are visible weeks before the company reports the quarter.
- **The moat:** Proprietary global traffic panel and estimation models spanning 1B+ sites and 4.7M+ apps.
- **Evidence:** Similarweb Stock Intelligence product materials and investor case studies; Hedgeweek 'Best Alternative Data Provider' award; Hedgeweek feature on trading with website-traffic data.

### 39. App Annie / data.ai
- **What:** Sold estimates of mobile-app downloads, usage and revenue to trading firms, which used them to select securities. The operation is uniquely well-documented because the SEC brought its first-ever alternative-data enforcement action over it in 2021.
- **Who:** App Annie Inc. (later data.ai; now part of Sensor Tower); founder/CEO Bertrand Schmitt; the SEC (enforcement).
- **Instrument:** App-driven large-caps — mobile gaming, social, streaming and e-commerce equities and options.
- **Why it worked:** The SEC order is direct documentary proof that the data drove real trades: trading firms subscribed and used App Annie's app-market estimates to buy and sell securities ahead of company disclosures. The processing edge was modeling market-wide app performance from confidential-plus-modeled data — funds paid for it precisely because it was hard to derive and led earnings. (The enforcement was about how the estimates were derived and represented, not that they lacked value.)
- **The lead:** App download/usage/revenue estimates delivered ahead of the covered companies' earnings reports.
- **The moat:** Proprietary panel and estimation of app-market share; the case itself turned on how uniquely (and improperly) the estimates were built — i.e., not replicable from public data alone.
- **Evidence:** SEC press release 2021-176, 'SEC Charges App Annie and its Founder with Securities Fraud' (Sept 14, 2021); $10M settlement plus $300k penalty for Schmitt; first SEC enforcement action against an alternative-data provider.

### 40. Prattle → Liquidnet
- **What:** NLP that scores the market impact and sentiment of central-bank communications (15 central banks) and ~3,000 public companies' earnings calls and press releases, producing quantitative, tradeable signals from unstructured public text.
- **Who:** Prattle (co-founders Evan Schnidman and Bill MacMillan, 2014); acquired by Liquidnet in 2019 to power its AI trade-and-investment analytics.
- **Instrument:** Rate futures, government bonds, FX and equity-index futures around central-bank events; single-name equities on earnings-call tone — the deepest, most liquid markets around scheduled catalysts.
- **Why it worked:** The moat is a proprietary per-institution lexicon and consistent quantitative scoring that reads Fed/ECB/central-bank language instantly and identically every time — replacing slow, inconsistent, biased human interpretation (the unsophisticated marginal reader) with a machine score. It was monetized via acquisition by a major electronic-trading firm, and the signal repeats at every scheduled meeting and print into enormous liquidity.
- **The lead:** Instant, consistent scoring of central-bank text versus the slower formation of human macro consensus after each statement.
- **The moat:** Years-built proprietary lexicons and trained ML for 15 central banks and ~3,000 companies; not reconstructable overnight.
- **Evidence:** Business Wire and Hedgeweek, 'Liquidnet Expands Its AI-Based Trade and Investment Analytics with Acquisition of NLP Leader Prattle' (June 2019); coverage detailing Prattle's 15-central-bank and ~3,000-company analytics.


## Flow, positioning & microstructure successes

### 41. S&P 500 index-inclusion front-running (the "index effect"); marquee: Tesla, Dec 2020
- **What:** Buy a stock after S&P Dow Jones announces it will be ADDED to the S&P 500 but before the effective date, then sell into the price-insensitive, tracking-error-minimizing demand of index funds forced to own it at the reconstitution close (short deletions symmetrically). Tesla's Dec 2020 inclusion was the largest single instance: index funds had to buy an estimated $50-90B; ~$60B of TSLA changed hands in the Dec 18, 2020 closing auction near $695, and active traders who bought at the mid-November price sold into that captive December demand.
- **Who:** Index-arbitrage desks and hedge funds as a class; the effect and its capturable premium were documented by Antti Petajisto and by Robin Greenwood & Marco Sammon. Tesla front-runners bought post-announcement (Nov 16) and delivered into forced buyers (Dec 18/21).
- **Instrument:** S&P 500 large-cap equities plus index futures/ETFs; TSLA specifically (deeply liquid, options-rich).
- **Why it worked:** Passive funds are an enormous, mechanical, price-insensitive marginal buyer that must trade at the reconstitution close to control tracking error, and the addition list is published days ahead. The historic addition premium ran +7-8% in the 1990s. Big liquid names, repeatable every quarterly reconstitution. CRITICAL LESSON: the edge decayed as arbitrageurs anticipated it — Greenwood & Sammon show the additions premium fell from ~7.4% (1990s) to a statistically insignificant ~0.8% by the 2010s even as indexed assets grew; Tesla worked because its sheer size (~1.7% weight) overwhelmed the crowd.
- **The lead:** ~5 trading days between S&P's announcement and the effective date (Tesla: Nov 16 announcement, Dec 18 rebalance auction, Dec 21 first trade in-index).
- **The moat:** Modeling which stock S&P's committee will add from the published methodology (ahead of, or immediately on, the official announcement), plus the capital and stomach to warehouse a concentrated, undiversified, high-tracking-error position through the event and size it to absorb the forced flow.
- **Evidence:** Antti Petajisto, "The Index Premium and Its Hidden Cost for Index Funds," Journal of Empirical Finance (2011); Robin Greenwood & Marco Sammon, "The Disappearing Index Effect," Journal of Finance (2025); Tesla Dec 2020 inclusion widely reported (Bloomberg, Fortune) incl. the ~$60B closing-auction print.

### 42. Russell reconstitution front-running (annual small-cap rebalance)
- **What:** From the late-May ranking day, forecast the June Russell 1000/2000 additions, deletions and float/band changes, then buy additions and short deletions ahead of the last-Friday-of-June reconstitution, supplying immediacy to index funds forced to trade that day and unwinding into their flow.
- **Who:** Liquidity-providing hedge funds and index-arb desks; the effect's profitability was documented by Ananth Madhavan ("supplying immediacy at this time can be highly profitable").
- **Instrument:** Russell 2000 small-cap equities and Russell index futures (liquid in aggregate; the point is the concentrated forced flow).
- **Why it worked:** Russell's rules are fully transparent and purely formulaic (rank by market cap on a set day), so the June revision can be forecast at end-May 'with a high degree of precision.' Index funds compress all their trading into one day to minimize tracking error, so the price-setter is a forced, price-insensitive buyer/seller. Additions to the Russell 1000 earned ~+10.9% cumulative excess return from 2 days before May 31 to June 30; stocks dropped from the Russell 2000 Growth lost ~-6.6%. Repeatable every single June.
- **The lead:** ~1 month between the late-May rank/lock day and the end-June effective date.
- **The moat:** Building the precise reconstitution-forecasting model (float adjustments, banding rules, IPO additions, style splits) AND the risk appetite to hold a large, undiversified, high-trading-cost book through the event, which most managers won't.
- **Evidence:** Ananth Madhavan, "The Russell Reconstitution Effect," Financial Analysts Journal, Vol. 59 No. 4 (2003).

### 43. Front-running the "Goldman roll" (S&P GSCI commodity-index roll)
- **What:** In the days before the S&P GSCI's fixed monthly roll window (the 5th-9th business day), buy the second-month futures the index must roll INTO and short the front month it must sell, then sell into the trackers' mechanical, calendar-driven roll.
- **Who:** CTAs, hedge funds and speculators; rigorously quantified by Yiqun Mou (Columbia). The 'victims' were passive commodity-index products (AIG/GSCI-linked notes, PIMCO CommodityRealReturn and similar).
- **Instrument:** Crude oil and other GSCI commodity futures — large, liquid contracts.
- **Why it worked:** Commodity-index investment swelled to hundreds of billions, all rolling on the same publicly known fixed calendar with zero price sensitivity. Mou's front-running strategies earned excess returns with Sharpe ratios up to 4.39 (2000-Mar 2010); index investors forwent ~3.6% annual return, and roughly $26B was transferred to front-runners over 2000-2009. The marginal price-setter is a mechanical passive roller. Fires every month.
- **The lead:** A few days ahead of the fixed 5th-9th business-day roll window — timing is fully known in advance from the index rules.
- **The moat:** Knowing the exact roll schedule and contract weights, plus futures execution capacity and capital; Mou shows profitability is inversely related to the amount of arbitrage capital deployed, so the edge compressed as more players crowded in — a repeatability-vs-capacity lesson.
- **Evidence:** Yiqun Mou, "Limits to Arbitrage and Commodity Index Investment: Front-Running the Goldman Roll," SSRN working paper (2010/2011); cited in a CFTC-hosted study.

### 44. Cum-ex dividend arbitrage (multiple tax reclaims around ex-date)
- **What:** Trade shares rapidly around a stock's ex-dividend date through a syndicate of banks and funds so that settlement lag made two+ parties each appear to own the stock 'cum dividend,' letting each file a withholding-tax refund on a dividend tax that was paid only once (or not at all). Repeated every dividend season across Germany, Denmark and Belgium.
- **Who:** Sanjay Shah / Solo Capital Partners (his Danish scheme accounted for ~three-quarters of the ~1.7B-euro SKAT claim; Shah sentenced to 12 years in Denmark, Dec 2024), plus German banks (HypoVereinsbank, M.M. Warburg) and numerous funds; Europe-wide losses estimated near 60B euros. NOTE: adjudicated as fraud, not a legal edge.
- **Instrument:** Blue-chip dividend-paying equities (large, liquid) and the associated tax-reclaim certificates.
- **Why it worked:** The mispriced counterparty was the tax authority: a genuine structural loophole between trade date and settlement date combined with a refund system that never reconciled reclaims to a single withholding. The 'signal' absorbed enormous size and repeated at every dividend. The moat was legal/operational engineering — the circular trades, custody chains and reclaim paperwork — not the data.
- **The lead:** Structural rather than temporal: the edge was in the settlement/reclaim mechanics, executed to each dividend's ex-date calendar.
- **The moat:** Choreographing the multi-party circular trades, short sales, custodian settlement and tax-reclaim machinery that only a sophisticated bank/fund syndicate could assemble — which is exactly why it eventually drew criminal prosecution.
- **Evidence:** Bloomberg and Courthouse News coverage of the Danish SKAT case and Shah's Dec 2024 conviction; the pan-European 'CumEx Files' investigations; Denmark's ~1.9B-USD London civil suit.

### 45. Merger (risk) arbitrage desk — Paulson & Co
- **What:** On a deal announcement, buy the target (and short the acquirer in stock-for-stock deals) to capture the spread between the market price and the deal terms, sized to an assessed probability of completion, run as a diversified book across dozens of simultaneous live deals.
- **Who:** John Paulson / Paulson & Co, which specialized in merger arbitrage from 1994 and produced roughly 12%+ annualized over decades; classic risk-arb desks (e.g., Goldman Sachs) ran the same playbook earlier.
- **Instrument:** Large-cap M&A targets and acquirers — liquid equities and their options.
- **Why it worked:** The deal spread is compensation for deal-break risk; the edge is superior handicapping of completion odds (antitrust, financing, shareholder vote, MAC clauses). Diversifying across many deals absorbs size and smooths idiosyncratic breaks. Paulson codified a seven-point checklist: definitive agreement, strategic rationale, no financing condition, no due-diligence condition, solid target, reasonable valuation, limited regulatory risk. The tail is real — concentrated breaks (Valeant, failed deals) cost his enhanced fund heavily in 2015-2018.
- **The lead:** An analytical rather than speed lead: reading regulatory/deal outcomes better and faster than the marginal holder.
- **The moat:** Deep legal, regulatory and deal-structure expertise plus a diversified portfolio engineered to survive individual breaks — capability, capital and process most investors lack.
- **Evidence:** Bloomberg reporting on Paulson's merger-arb funds; Hedge Fund Insight, "Spotlight on Merger Arbitrage at Paulson & Co"; Paulson's widely published merger-arbitrage checklist.

### 46. Short-volatility / VIX-futures roll (contango) harvest
- **What:** Systematically short front-month VIX futures — via inverse-VIX ETNs (XIV), by selling VIX futures, or selling S&P index vol — to earn the roll-down as contango-priced futures converge toward a lower spot VIX. A multi-year carry trade.
- **Who:** XIV (VelocityShares inverse-VIX ETN, issued by Credit Suisse) returned roughly +1,000% from 2010 to early 2018; LJM Partners' 'Preservation & Growth' fund posted positive returns in nearly every year from 2006. Retail and institutions crowded the same trade.
- **Instrument:** VIX futures, VIX ETPs (XIV/SVXY/VXX), and S&P 500 index options.
- **Why it worked:** VIX futures sit in contango roughly 80% of the time because of persistent institutional demand for downside/portfolio-insurance hedges — a structural variance-risk premium. Shorting it earns the roll-down as repeatable carry in a large, liquid complex. BUT the carry pays for catastrophic tail risk: the crowded short and the ETPs' own forced end-of-day rebalancing detonated on Feb 5, 2018 ('Volmageddon') — XIV fell ~93% in a day and was terminated; LJM lost ~$1B (~80% of assets). The lesson is 'picking up dimes in front of a steamroller.'
- **The lead:** Structural carry harvested continuously rather than a discrete information lead.
- **The moat:** Correctly pricing the variance-risk premium AND surviving the tail via sizing/hedging — those who ran it naked blew up, so the durable 'edge' was really the capacity to bear a risk most couldn't stomach.
- **Evidence:** BIS Quarterly Review (March 2018), "The role of exchange-traded volatility products"; CFTC/SEC complaint against LJM Partners (2019); Credit Suisse's termination of XIV (Feb 2018).

### 47. Leveraged & inverse ETF/ETN end-of-day rebalance flow
- **What:** Exploit the mandatory, same-direction hedge that daily-reset leveraged/inverse ETPs must execute near the close: on an up day a 3x long fund must BUY more exposure and inverse funds must also buy to cover — a predictable end-of-day imbalance/momentum. The extreme case: on Feb 5, 2018 the VIX ETPs (XIV, SVXY) had to buy the equivalent of 100,000-200,000 VIX futures (~$800M) at the 4:15pm settlement; being long VIX futures into that close captured the reflexive spike.
- **Who:** Systematic and volatility traders and dealers who anticipate the 'rebalance imbalance'; the mechanics were documented by Minder Cheng & Ananth Madhavan and by the BIS. ETPs involved: ProShares/Direxion (equity 3x) and XIV/SVXY (inverse VIX).
- **Instrument:** Index/sector 3x ETFs and their underlying futures; VIX futures — deeply liquid, though the rebalance clusters into a thin window.
- **Why it worked:** The rebalance is mechanical and its SIZE is computable from the day's return and the funds' known AUM and leverage, executed in a narrow end-of-day window regardless of price — a forced, price-insensitive flow. It repeats daily and scales with the leveraged-ETF complex (now tens of billions). The marginal price-setter is the funds' delta-one hedgers.
- **The lead:** Intraday — the required end-of-day rebalance size is calculable from the day's move well before the close.
- **The moat:** Modeling each product's AUM, leverage factor and reset rules to estimate the AGGREGATE end-of-day imbalance across the complex, then executing ahead of it — a data-plumbing and estimation moat, not public knowledge.
- **Evidence:** Cheng & Madhavan, "The Dynamics of Leveraged and Inverse ETFs" (2009); BIS Quarterly Review (March 2018) on exchange-traded volatility products and the Feb 5, 2018 close.

### 48. Dealer gamma / GEX positioning; marquee: GameStop, Jan 2021
- **What:** Reconstruct options market-makers' aggregate gamma exposure (GEX) from open interest to predict whether dealer delta-hedging will DAMPEN moves (dealers long gamma → sell rallies, buy dips) or AMPLIFY them (short gamma → chase). The extreme exploitation: deliberately force a gamma squeeze by concentrated call buying so dealers short those calls must buy stock as it rises, compounded by a short squeeze.
- **Who:** SqueezeMetrics coined and published 'Gamma Exposure (GEX)' in a March 2016 white paper; SpotGamma (2020) commercialized dealer-positioning levels. Marquee profitable operation: Keith Gill ('Roaring Kitty'/DeepF***ingValue) turned a ~$53,000 stake into hundreds of millions on GameStop, and the Reddit crowd's call buying forced dealer hedging plus short covering, driving GME up >1,500% in January 2021.
- **Instrument:** Single-name equities and index options (SPX/SPY); GameStop (GME) and its options specifically.
- **Why it worked:** Dealer hedging is a mechanical, positioning-determined flow. When dealers are short gamma near heavily-traded strikes, their hedging is self-reinforcing. GameStop layered a >100%-of-float short interest onto concentrated call buying, so forced dealer buying and short covering created a reflexive spiral in a liquid, option-rich name. Positioning imbalances recur, so GEX-conditioned strategies fire repeatedly.
- **The lead:** The GEX/positioning read is available before the move it predicts — option open interest telegraphs where hedging pressure will build.
- **The moat:** Inferring dealer positioning from options open interest requires assumptions about who is long/short each strike — the processing SqueezeMetrics/SpotGamma built; and, for GameStop, recognizing the rare >100%-float-short + gamma setup before the crowd priced it.
- **Evidence:** SqueezeMetrics GEX white paper (2016); a Cboe-hosted study relating dealer gamma to volatility; GameStop January 2021 documented in Keith Gill's Congressional testimony and the SEC staff report (Oct 2021).

### 49. Front-running a forced ETF/index roll; marquee: USO and negative WTI, April 2020
- **What:** Anticipate (and, per regulators, allegedly accelerate) the forced selling of the expiring May 2020 WTI contract by large passive longs — the United States Oil Fund (USO) and other index/ETP holders that had to roll out before expiry into a storage-constrained, illiquid market — and be short into the settlement, profiting as the front contract collapsed to -$37.63/bbl.
- **Who:** Nine independent traders affiliated with prop shop Vega Capital London (centered on former pit trader Paul Commins, trading from homes in Essex) made roughly $660M in a few hours on April 20, 2020; scrutinized by the CFTC and FCA, though no illegality has been proven. The forced seller was USO.
- **Instrument:** WTI crude-oil futures (May 2020, CL) — a large, liquid contract, momentarily one-sided.
- **Why it worked:** USO's roll schedule and size were public and mechanical, and with Cushing storage effectively full no buyer could take delivery — so the forced, price-insensitive selling had nowhere to go and being short the front month into the roll/settlement was hugely asymmetric. The marginal seller (a passive fund tracking front-month WTI) was maximally unsophisticated about delivery microstructure; the Trade-at-Settlement window concentrated the flow.
- **The lead:** Days — USO publicly telegraphed its roll timing and had already begun shifting out of the front month before expiry.
- **The moat:** Knowing exactly when and how much USO and peers had to sell, understanding the Cushing storage/deliverability constraint and the TAS mechanics, and having the nerve and capital to press a sub-zero outcome the market thought impossible.
- **Evidence:** Bloomberg / CTRM Center reporting and the Bayes Business School case "How Nine Traders Hit a Gusher with Negative Oil"; the CFTC/FCA investigation of Vega Capital London; the May 2020 WTI -$37.63 settlement on April 20, 2020.

### 50. Commitments of Traders (COT) positioning
- **What:** Use the CFTC's weekly Commitments of Traders report to read positioning extremes — chiefly commercial hedgers' net position ('smart money') versus over-extended speculators — then fade crowded speculative extremes and lean with commercials across commodity and FX futures.
- **Who:** Stephen Briese, the recognized COT authority (Bullish Review newsletter since 1988; author of "The Commitments of Traders Bible," Wiley 2008); many CTAs incorporate COT signals.
- **Instrument:** Commodity, FX and rate futures — large, liquid markets across dozens of contracts.
- **Why it worked:** The COT reveals who is positioned how: commercial hedgers are informed about the underlying cash business, while over-extended speculators are the sentiment-driven marginal price-setters whose crowded bets tend to mean-revert. Briese's backtest across 35-38 futures markets (2000-2007) generated ~3,502 trades and ~$1.7M total profit. It fires weekly across many markets, giving breadth and repeatability.
- **The lead:** A processing/interpretation lead rather than a speed lead — COT is public but released with a ~3-day lag; the edge is normalizing and thresholding positioning correctly, which most readers get wrong or ignore.
- **The moat:** Briese's normalization methodology (the COT Index across 63 commodities) and the interpretive framework built over decades — the processing, not the raw report; the moat lies in reading it correctly at scale.
- **Evidence:** Stephen Briese, "The Commitments of Traders Bible: How to Profit from Insider Market Intelligence" (Wiley, 2008); CSI Data's Briese COT Index; peer-reviewed COT-signal reversal studies.


## Exotic, cross-domain & sensor successes

### 51. Bill Benter's Hong Kong horse-racing model
- **What:** Built a computerized multinomial (conditional) logit prediction model for Hong Kong Jockey Club races and bet it into the parimutuel (tote) pools. Over his career the operation won an estimated ~US$1 billion; a single 2001 triple-trio ticket paid about HK$100M.
- **Who:** William 'Bill' Benter (blackjack-team alumnus), initially partnered with Australian gambler Alan Woods, operating in Hong Kong from 1984.
- **Instrument:** Parimutuel win/place/exotic pools at the Hong Kong Jockey Club, one of the deepest betting markets on earth (billions of HK$ wagered per season) — high capacity that absorbs large stakes without a fixed bookmaker to bar the bettor.
- **Why it worked:** The raw inputs (past-performance 'form' data plus live tote odds) were public, but the edge was years of proprietary work: a ~120-variable conditional-logit model whose key innovation was blending the MODEL's win-probability estimate WITH the public's odds, capturing information in both. The marginal price-setter was the unsophisticated betting public whose favorite-longshot bias persisted race after race, and the signal fired thousands of times per season — extreme repeatability and capacity.
- **The lead:** Not a newswire race but a model-quality/information lead over the crowd's consensus odds, recomputed live in the seconds before each off. The crowd's price was systematically mis-calibrated; his model wasn't.
- **The moat:** Pure processing moat: a private, painstakingly tuned statistical model on public data. It LOST money 1984-1987 before calibration turned it profitable — the multi-year tuning is what could not be copied, not the data.
- **Evidence:** Bloomberg Businessweek, Kit Chellel, 'The Gambler Who Cracked the Horse-Racing Code' (May 3, 2018); Benter's own paper 'Computer Based Horse Race Handicapping and Wagering Systems' (1994). Guinness World Records lists him among the most profitable gamblers.

### 52. RS Metrics satellite car-counting
- **What:** First firm to systematically count cars in retailers' parking lots from satellite imagery and sell the derived foot-traffic signal (TrafficSignals) to hedge funds ahead of quarterly comparable-store-sales and earnings prints.
- **Who:** RS Metrics (Remote Sensing Metrics LLC), founded ~2010 by Tom Diamond and Alex Diamond; later joined by peers like Orbital Insight and RS's UBS-study collaborators.
- **Instrument:** Large-cap US retailers and their listed options — Walmart, Target, Costco, Home Depot, Whole Foods, Best Buy, JCPenney — all deeply liquid, so signal-driven positions clear transaction costs.
- **Why it worked:** The imagery existed but nobody was buying and computer-vision-processing it at scale; RS Metrics had to license satellite imagery and build a car-detection pipeline across ~65,000 store locations. A UC Berkeley Haas study ('Stock Picks From Space') documented that traders using such counts earned roughly 4-5% abnormal returns around earnings, largely at the expense of retail investors taking the other side — an unsophisticated, persistent counterparty.
- **The lead:** Car counts accumulate through the whole quarter — a read on sales weeks before the company reports comps/earnings.
- **The moat:** First-mover processing moat (2010-2011): buy the imagery + build and operate the CV counting system nobody else was running across tens of thousands of lots.
- **Evidence:** CNBC 'Spying For Profits: The Satellite Image Indicator' (Aug 2010); UC Berkeley Haas 'Stock Picks From Space' (Katona, Painter, Patatoukas, Zdanowicz) and Haas Newsroom write-up; RS Metrics TrafficSignals product materials.

### 53. Genscape power-plant sensor network
- **What:** Deployed a proprietary field network of electromagnetic-field/monitoring sensors near transmission lines (and later infrared cameras) to measure real-time electricity generation, then sold the live output to power and energy traders before any official grid data existed.
- **Who:** Genscape, founded 1999/2000 in Louisville by Sterling Lapinski and Sean O'Leary, both former power traders frustrated by market opacity; acquired by Verisk for $364M in 2018.
- **Instrument:** Wholesale electricity and natural-gas markets, later crude/products via Cushing (Oklahoma) storage and pipeline monitoring — large, liquid energy futures and OTC markets.
- **Why it worked:** They physically installed and maintained hardware at plant and substation perimeters — real capex and field engineering no competitor had — turning a plant's magnetic signature and heat into a live megawatt estimate. Officials reported the same generation/flow data only with a lag. FERC becoming a customer legitimized the (initially 'feels like spying') data.
- **The lead:** Real-time (minutes to hours) reads on generation and, for oil, tank/pipeline activity — versus official releases that lagged by days.
- **The moat:** A physical, plant-by-plant sensor network plus infrared interpretation — arguably the hardest-to-replicate data moat of the set, requiring hardware deployment rather than just software.
- **Evidence:** Energy Risk 'Pioneers: power — Genscape'; StateImpact/NPR 'Oil Espionage: Traders Spy on Oklahoma Hub With Satellites, Sensors and Infrared Cameras' (2012); Verisk's $364M acquisition (2018).

### 54. Orbital Insight oil-tank shadow inventory
- **What:** Measured the crescent-shaped shadows cast by floating-roof lids inside crude-storage tanks in satellite imagery, converting shadow geometry to roof height to oil volume, and packaged it as a World Oil Storage Index sold to funds.
- **Who:** Orbital Insight, founded 2013 by James Crawford (ex-Google Books, ex-NASA); parallel players Ursa Space Systems (radar/SAR) and Kayrros. Index distributed on Bloomberg terminals.
- **Instrument:** Crude oil futures (WTI/Brent), the USO ETF, and energy equities — deep, liquid markets where an inventory surprise moves price enough to clear costs.
- **Why it worked:** Had to source fresh commercial imagery and build computer vision that reads shadow -> height -> barrels across ~20,000+ tanks worldwide, including in opaque economies (China, Iran) that publish no inventory data at all. During the 2020 storage glut this gave a multi-week lead on builds/draws.
- **The lead:** Weeks ahead of EIA/IEA official inventory reports, plus coverage of countries where there is no official number to wait for.
- **The moat:** Buying imagery + a proprietary shadow-to-volume CV pipeline that nobody else was parsing at global scale — a processing/data moat.
- **Evidence:** HBS Digital Initiative case 'This Startup Makes Money from Oil Tank Shadows'; Orbital Insight 'Bringing Transparency to Oil Supply in Closed Economies'; Bloomberg terminal World Oil Storage Index.

### 55. Descartes Labs satellite crop-yield forecasts
- **What:** Applied deep learning to multi-source satellite imagery to forecast US corn and soybean yields more accurately and earlier than the USDA — reportedly within ~1% of realized production.
- **Who:** Descartes Labs, spun out of Los Alamos National Laboratory in 2014 (founders including Mark Johnson and Steven Brumby); used Planet, Landsat and MODIS imagery. Cargill was a strategic investor.
- **Instrument:** CBOT corn and soybean futures and options — large, liquid agricultural commodity markets the whole grain trade prices off the USDA number.
- **Why it worked:** Processed roughly a petabyte of imagery across ~30,000 processors to estimate national yield ahead of the USDA's flagship August WASDE, the consensus figure the market trades around. Beating that number is a genuine compute/CV moat built by ex-national-lab scientists — not something a generalist desk could stand up.
- **The lead:** Forecasts released days before the USDA's monthly crop reports (e.g., its 2016 corn estimate on Aug 9 vs the USDA on Aug 12).
- **The moat:** Petabyte-scale imagery ingestion plus a custom ML yield model — hard to replicate in both data volume and modeling talent.
- **Evidence:** Descartes Labs 'Advancing the science of corn forecasting' (2016); Planet Stories 'Using Satellite Imagery & Deep Learning to Predict a $67B Corn Market'; AgFunderNews on Cargill's Series B investment.

### 56. SpaceKnow China Satellite Manufacturing Index
- **What:** Analyzed satellite imagery of 6,000+ Chinese industrial sites with machine learning to build an independent index of Chinese manufacturing activity, published on Bloomberg — the first alternative-data index to appear on the terminal.
- **Who:** SpaceKnow, founded ~2013 by Pavel Machalek and Jerry Javornicky; China Satellite Manufacturing Index (SMI) launched on Bloomberg terminals in 2016.
- **Instrument:** China-exposed macro instruments — offshore yuan (CNH), Chinese equity ETFs (e.g., FXI), and industrial commodities (copper, iron ore) — liquid enough for macro sizing.
- **Why it worked:** Official Chinese PMI/GDP data is widely distrusted and smoothed, so an independent, imagery-derived read on 6,000 sites has no clean substitute. The CV pipeline over thousands of industrial areas is a real processing moat; the index flagged the October 2018 contraction that Bloomberg reported.
- **The lead:** Published Monday/Wednesday/Friday, ahead of and independent of official Chinese statistics — and not subject to their manipulation.
- **The moat:** Proprietary ML over thousands of industrial sites; because the official numbers are distrusted, there is no cheaper alternative to bootstrap from.
- **Evidence:** Bloomberg 'Satellites Show China Manufacturing Output Contracted in October' (Oct 31, 2018); Quartz coverage of the China SMI; SpaceWatch.Global / Eagle Alpha writeups of the first alt-data index on Bloomberg.

### 57. Corporate-jet (ADS-B) M&A tracking
- **What:** Tracked private-jet tail numbers via ADS-B transponder data to detect executives converging for undisclosed merger or financing negotiations, positioning in the target/acquirer before the announcement.
- **Who:** Quandl 'Corporate Aviation Intelligence' dataset (26,000 jets tied to 1,300 public companies, ~70% of the S&P 500); Gordon Haskett Research's Don Bilson used jet-tracking in the April 2019 Occidental/Berkshire/Anadarko call; academic corroboration from Oxford's Matthew Smith et al.
- **Instrument:** Large-cap target and acquirer equities and options (e.g., Occidental, Anadarko) — liquid names where deal targets routinely jump 20-40% on announcement.
- **Why it worked:** Raw ADS-B is public, but resolving anonymized/blocked tail numbers to specific corporate owners and cross-referencing flight convergence is the processing moat — Quandl fused five sources, several licensed exclusively. A Gulfstream V owned by Occidental spotted at Omaha preceded Buffett's $10B Occidental commitment by two days.
- **The lead:** Days ahead of the public deal/financing announcement.
- **The moat:** Tail-number-to-owner resolution plus multi-source flight fusion (with exclusively-licensed feeds) — a defensible processing moat over freely-available ADS-B.
- **Evidence:** Bloomberg 'Hedge Funds Are Tracking Private Jets to Find the Next Megadeal' (2019); CNBC 'A corporate jet suggested Buffett's energy deal was in works days before it was announced' (Apr 30, 2019); WatersTechnology 'Quandl Launches Corporate Jet Dataset for Predicting M&A Activity.'

### 58. Congressional-trade replication
- **What:** Mirror the disclosed stock transactions of US members of Congress, who historically earned significant abnormal returns; now packaged as replication ETFs and copy-trading apps.
- **Who:** Academic foundation: Ziobrowski, Cheng, Boyd & Ziobrowski (JFQA 2004, Senate; Business & Politics 2011, House). Modern replication: Unusual Whales / Subversive NANC (Democratic) and KRUZ (Republican) ETFs, launched Feb 2023, and the Autopilot app.
- **Instrument:** US large-cap equities — the replication funds are dominated by Microsoft, Nvidia, Apple and Amazon — i.e., maximally liquid names.
- **Why it worked:** Ziobrowski found Senators' purchases beat the market by ~12%/yr (85 bps/month) and House members' by ~6%/yr, consistent with an informational advantage. The historical edge was aggregation: disclosures were buried and hard to compile, and the marginal retail investor ignored them. NANC has outpaced the S&P 500 by roughly 7 points since 2023.
- **The lead:** STOCK Act filings appear up to ~45 days after the trade, yet still ahead of the broad market recognizing the position; the durable edge was the parsing/aggregation lead over an inattentive public.
- **The moat:** Weakest moat of the set — the data is public filings, so the edge is disclosure-parsing speed/aggregation plus a persistently inattentive retail counterparty. Included for its documented record, with the honest caveat that post-STOCK-Act studies (e.g., Belmont et al.) dispute persistence and the edge has decayed.
- **Evidence:** Ziobrowski et al., 'Abnormal Returns from the Common Stock Investments of the U.S. Senate,' JFQA 2004; Morningstar and NPR (2024) coverage of NANC/KRUZ performance vs the S&P 500.

### 59. Polymarket 'Théo' neighbor-poll election bet
- **What:** A French trader commissioned proprietary 'neighbor-effect' polls — asking respondents who their neighbors would vote for, to strip out shy-Trump social-desirability bias — judged public polls skewed to Harris, and bet ~$30M+ on Trump across Polymarket, netting an estimated ~$85M.
- **Who:** 'Théo,' identified by the Wall Street Journal as a former French banker/trader; blockchain firm Chainalysis tied ~11 accounts to him and estimated the ~$85M haul.
- **Instrument:** Polymarket 2024 US election contracts (presidency, popular vote, blue-wall sweep) — the deepest prediction market ever, roughly $3.6B in volume, giving real capacity for eight-figure stakes.
- **Why it worked:** The exotic input was privately-commissioned neighbor-effect polling, an academically grounded method that corrects a systematic public-poll bias most bettors weren't running. Combined with a contrarian thesis, it beat a consensus (public polls, and a market priced near a coin flip) that was wrong. The marginal price-setters were poll-following bettors.
- **The lead:** His late-October proprietary poll results gave conviction to add size before the market repriced on election night.
- **The moat:** Self-funded proprietary polling with a specific bias-correction method — a genuine private-data moat versus bettors reading the same public poll averages.
- **Evidence:** Wall Street Journal profile of 'Théo'; Bloomberg 'Trump Whale's Polymarket Haul Boosted to $85 Million' (Nov 7, 2024, citing Chainalysis); CBS 60 Minutes. Caveat: a single high-conviction event rather than a repeatable factory, included for the documented exotic-data edge.

### 60. Enron weather-derivatives desk (Lynda Clemmons)
- **What:** Created the first standardized weather-derivatives trading desk, writing temperature (heating- and cooling-degree-day) contracts to hedge energy demand and trading the book against proprietary forecasts.
- **Who:** Lynda Clemmons at Enron, who launched the desk in 1997 at age 27; it did ~350 transactions and turned its first profit in 1998, writing ~$1B in weather hedges within two years. The market later institutionalized (CME weather futures; ~$25B notional by 2023) with players like Nephila in adjacent catastrophe risk.
- **Instrument:** OTC and (later) CME temperature/HDD-CDD weather derivatives tied to power and natural gas — the underlying power and gas markets are enormous and liquid.
- **Why it worked:** Weather is the exotic input; the moat was proprietary long-range meteorological forecasting plus being the market-making franchise that could price contracts counterparties couldn't. Energy-meteorology desks translate sub-seasonal and seasonal forecasts into an edge over the market-implied/consensus temperature expectation, which drives gas heating and power-cooling demand.
- **The lead:** A proprietary forecast lead over the market's consensus temperature outlook, from days to a full season ahead.
- **The moat:** Proprietary forecasting plus a first-mover market-making book — a real processing/franchise moat in a domain (meteorology) most trading desks had no capability in.
- **Evidence:** Washington Post 'A Hot (and Cold) New Investment Opportunity' (Jul 4, 1998); HBS case 'Enron Corporation's Weather Derivatives'; Insurance Journal 'Worsening Weather Igniting $25 Billion Weather Derivatives Market' (2024).
