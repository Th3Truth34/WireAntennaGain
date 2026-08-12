# 100+ Unorthodox Data Points for Short-Term Trading

Documented alternative data sources and indicators that have actually been used (or credibly studied) for short-horizon trading. Compiled by a multi-agent research swarm with web verification; every entry cites a named fund, vendor, paper, or market episode. Companion file: [novel-trading-ideas.md](novel-trading-ideas.md).

## Table of Contents

- [Satellite & aerial imagery](#satellite--aerial-imagery) — 9 entries (1–9)
- [Weather, climate & natural phenomena](#weather-climate--natural-phenomena) — 9 entries (10–18)
- [Social media, search & attention](#social-media-search--attention) — 9 entries (19–27)
- [Consumer transactions & foot traffic](#consumer-transactions--foot-traffic) — 9 entries (28–36)
- [Shipping, logistics & transportation tracking](#shipping-logistics--transportation-tracking) — 9 entries (37–45)
- [Corporate digital exhaust](#corporate-digital-exhaust) — 9 entries (46–54)
- [Government, political & regulatory signals](#government-political--regulatory-signals) — 9 entries (55–63)
- [Cultural & sociological indicators](#cultural--sociological-indicators) — 9 entries (64–72)
- [Energy & industrial telemetry](#energy--industrial-telemetry) — 9 entries (73–81)
- [Agriculture, food & commodities ground truth](#agriculture-food--commodities-ground-truth) — 9 entries (82–90)
- [Tech supply chain & internet infrastructure](#tech-supply-chain--internet-infrastructure) — 9 entries (91–99)
- [Exotic, fringe & cross-domain](#exotic-fringe--cross-domain) — 9 entries (100–108)

## Satellite & aerial imagery

### 1. Floating-roof oil tank shadow measurement
- **Signal:** High-resolution optical satellites image the crescent-shaped shadow cast on the inside wall of external floating-roof crude tanks; shadow geometry reveals roof height and thus fill level across roughly 20,000 tanks worldwide, aggregated into inventory estimates (Orbital Insight's World Oil Storage Index, plus SAR-based equivalents from Ursa Space and Kayrros).
- **Trade:** Long/short WTI and Brent crude futures (CME CL, ICE B), crude calendar spreads, and USO/energy ETF options in the days before weekly EIA inventory reports or monthly Chinese stock builds become consensus knowledge; multi-day to multi-week horizon.
- **Mechanism:** Physical inventory is the core driver of spot crude prices; satellite counts reveal stock builds/draws (especially in opaque countries like China, which under-reports storage) one to several weeks before official EIA/JODI data, so the holder of the imagery front-runs the statistical release.
- **Evidence:** Orbital Insight's World Oil Storage Index is published on the Bloomberg terminal and sold to hedge funds; its 2016 finding that China held far more crude than officially reported was widely covered, and satellite storage estimates gave funds a documented informational lead during the 2020 Saudi-Russia price war (Harvard D3 case study 'This Startup Makes Money from Oil Tank Shadows').
- **Access:** Institutional-only in practice: Orbital Insight/Ursa/Kayrros subscriptions run tens of thousands of dollars a year via Bloomberg or direct license; a determined individual can crudely replicate single-terminal shadow analysis with free Sentinel-2 imagery but not the global aggregate.

### 2. Genscape helicopter infrared flyovers of Cushing
- **Signal:** Genscape (now part of Wood Mackenzie) flies helicopters and fixed-wing aircraft with infrared cameras over the Cushing, Oklahoma tank farm twice weekly, measuring floating-roof positions visually and fixed-roof tank levels by thermal contrast, supplemented by electromagnetic sensors under inbound power lines to gauge pumping activity.
- **Trade:** WTI futures (CME CL) and WTI-Brent or Cushing calendar spreads, positioned in the one-to-three trading days between Genscape's Tuesday client release and the EIA's Wednesday 10:30am inventory report; intraday to weekly horizon.
- **Mechanism:** Cushing is the WTI delivery point, so its inventory level directly sets the marginal price and contango structure of the CL contract; subscribers get a private, physically measured preview of the market-moving EIA Cushing number roughly a day early and trade the gap between Genscape's figure and street expectations.
- **Evidence:** Extensively documented market practice: Reuters/IBTimes 'Firm brings choppers, spy cameras to oil data game' and NPR StateImpact Oklahoma (2012) 'Oil Espionage: Traders Spy on Oklahoma Hub' describe banks, hedge funds and oil traders buying the feed; Genscape numbers were regularly cited against EIA prints.
- **Access:** Institutional-only: Genscape/Wood Mackenzie oil storage subscriptions cost thousands of dollars per month and are sold to trading desks; there is no retail channel, though the EIA later partially validated Genscape's accuracy publicly.

### 3. Retailer parking-lot car counts
- **Signal:** Vendors such as RS Metrics and Orbital Insight count cars in the parking lots of thousands of individual big-box stores from sub-meter optical satellite imagery, producing year-over-year traffic growth estimates per chain (Walmart, Target, Costco, Whole Foods and about 40 other US retailers) weeks before earnings.
- **Trade:** Long/short individual retailer equities and short-dated options (straddles/directional plays) into quarterly earnings announcements; the documented edge is concentrated in the roughly 3-day window around the print, with positions built in the preceding weeks.
- **Mechanism:** Car counts are a direct physical proxy for store traffic and therefore same-store sales; funds holding the data predict the revenue surprise before the announcement and take the other side of uninformed retail flow when the number hits.
- **Evidence:** Katona, Painter, Patatoukas and Zeng (UC Berkeley Haas / Management Science, 'On the Capital Market Consequences of Big Data') studied RS Metrics data 2011-2017 and found the signal predicts quarterly sales surprises and yields 4-5% abnormal returns in the three days around earnings, with hedge funds documented as the main buyers.
- **Access:** Institutional: RS Metrics/Orbital Insight retail traffic feeds historically cost roughly $50k-$100k+ per year (some slices were resold via Quandl); free Sentinel imagery is too coarse to count cars, so individuals are effectively locked out.

### 4. Tesla factory lot and finished-vehicle inventory monitoring
- **Signal:** SpaceKnow sells daily satellite-derived indices measuring square meters of assembled vehicles in Tesla's outbound logistics lots plus employee-parking occupancy at Fremont, Shanghai, Austin, Berlin and Nevada, distinguishing production, inventory and staffing activity per plant (history back to 2017).
- **Trade:** TSLA stock and options (and EV peers Rivian/Lucid, which SpaceKnow also covers) positioned in the days-to-weeks before Tesla's quarterly production and delivery announcement, which routinely gaps the stock; also usable intraday around delivery-day leaks.
- **Mechanism:** Finished cars parked in outbound lots are unsold or undelivered inventory and employee-lot occupancy tracks shifts running; both lead the quarterly delivery number, so the imagery predicts whether Tesla beats or misses the delivery consensus that drives the stock's post-announcement move.
- **Evidence:** SpaceKnow's published product ('Monitoring Tesla's Inventories', SpaceKnow Satellite News Network #23; Satellite Electric Vehicle Dataset listed on Datarade) is explicitly marketed to hedge funds for alpha generation; media and analysts also used satellite/drone imagery of Fremont and the Shanghai Gigafactory build-out during 2018-2020 delivery controversies.
- **Access:** Institutional pricing via SpaceKnow/Datarade for the daily feed, but SpaceKnow periodically publishes free blog analyses of the Tesla indices, and hobbyists have partially replicated the idea with drone flyovers and free imagery.

### 5. Off-warrant metal stockpile measurement (MetalSignals)
- **Signal:** RS Metrics' MetalSignals measures the physical footprint of aluminum, copper and zinc ingots and concentrate stored outdoors at about 400 smelters, terminals and off-warrant storage yards worldwide via high-resolution satellite imagery — capturing the 'shadow inventory' that never appears in LME/SHFE warehouse statistics.
- **Trade:** Directional positions in LME/COMEX aluminum, copper and zinc futures and options on 2-to-4-week horizons, plus related trades in miner equities (FCX, AA) and metal ETFs when stockpile changes signal tightening or glut.
- **Mechanism:** Exchange warehouse data only shows registered inventory; when hidden off-warrant stocks build, apparent scarcity is illusory and prices mean-revert lower (and vice versa) — the satellite count front-runs the eventual migration of metal into visible warehouse statistics.
- **Evidence:** RS Metrics publishes hit-rate analyses claiming its aluminum signals were 70-80% predictive of LME price direction, and Nanalyze ('Using Satellites to Forecast Metals and Commodity Prices', 2019) documented the product's sale to commodity traders and funds.
- **Access:** Institutional-only subscription from RS Metrics; no free tier, though the firm publishes occasional public research notes on Medium showing sample signals.

### 6. SAVANT global copper smelter activity index
- **Signal:** Earth-i's SAVANT service (built with the European Space Agency and broker Marex Spectron) uses multispectral imagery from 20+ satellites plus machine learning to detect whether each of up to 90% of the world's copper smelters is hot/active, publishing a daily 0-1 global smelting-capacity-utilization index and plant-level status alerts.
- **Trade:** LME and COMEX copper futures (HG) and copper miner equities/ETFs (COPX, FCX) on horizons of days to a few weeks — especially trading unexpected smelter shutdowns or Chinese maintenance-season activity before monthly production statistics appear.
- **Mechanism:** Smelting activity determines refined copper supply; detecting a shutdown or an activity surge weeks before official production data or company disclosures lets the trader position for the ensuing supply-driven price move.
- **Evidence:** Launched October 2019 as a commercial product by Earth-i with Marex Spectron after a year of live trials (Marex press release 'Satellite Copper Smelting Index to Revolutionise Copper Trading'; ESA Space Solutions SAVANT project page); Reuters regularly cites SAVANT smelting data in copper market coverage.
- **Access:** Cheap-to-institutional: the full daily plant-level feed costs $10,000-$250,000 per year, but Earth-i publishes a free monthly global smelting index that an individual can follow at no cost.

### 7. Satellite NDVI crop-yield nowcasts
- **Signal:** Descartes Labs and TellusLabs ('Kernel' index, later Indigo Ag) built corn and soybean yield forecasts from daily MODIS/Landsat/Sentinel NDVI and thermal imagery across the entire US Corn Belt, updating in near-real time through the growing season rather than monthly.
- **Trade:** CBOT corn and soybean futures and options (ZC, ZS) in the days-to-weeks ahead of monthly USDA WASDE and crop-production reports, trading the gap between the satellite yield estimate and USDA/street consensus.
- **Mechanism:** Vegetation-index anomalies measure crop stress and biomass weeks before USDA's survey-based estimates update; when satellite models diverge from consensus yield, the WASDE print surprises in the satellite's direction and futures reprice sharply on release day.
- **Evidence:** Descartes Labs' public 2015-2016 corn forecasts landed within one bushel of the final USDA number, after which grain-trading giant Cargill bought exclusive access (partnership public in 2018); TellusLabs' equally accurate public forecasts ended when grain trader Indigo Ag acquired it — both takeovers by trading firms demonstrating the commercial trading value.
- **Access:** The polished feeds are institutional (EarthDaily, Gro Intelligence, Cargill-internal), but this is one of the most replicable signals: MODIS/Sentinel-2 NDVI and USDA VegScape data are completely free, and a capable individual can run county-level yield models at zero data cost.

### 8. China Satellite Manufacturing Index (SMI)
- **Signal:** SpaceKnow's SMI applies machine learning to billions of pixels of commercial satellite imagery covering more than 6,000 Chinese industrial facilities, scoring physical changes (buildings, stockyards, construction, vehicle activity) into a PMI-style diffusion index above/below 50, published three times a week.
- **Trade:** China-linked instruments ahead of official PMI and industrial-production releases: FXI/ASHR/MCHI ETFs and options, FTSE China A50 futures, plus industrial-metal futures (copper, iron ore) and AUD/USD as China-beta proxies; horizon of days to two weeks around data releases.
- **Mechanism:** Official Chinese activity statistics are delayed and widely distrusted; a physically measured, government-independent activity gauge lets traders anticipate PMI surprises and position in China-sensitive assets before the official print moves them.
- **Evidence:** The SMI went live on Bloomberg terminals in 2016 and made headlines when it flagged contraction ahead of official data (Bloomberg, 'Satellites Show China Manufacturing Output Contracted in October', 2018); covered by Quartz and The Diplomat as a hedge-fund tool for auditing Chinese statistics.
- **Access:** Institutional: distributed via Bloomberg terminal and SpaceKnow subscriptions; SpaceKnow has published free periodic commentary on the index, but the live feed is not retail-accessible.

### 9. Container-port congestion and ship queues from orbit
- **Signal:** Optical and SAR satellite imagery (Planet, Sentinel-1/2, Maxar) counts container ships at berth and anchored offshore plus container stack density in terminal yards, turning port congestion into a quantitative trade-flow indicator — famously the 50+ ship queue off Los Angeles/Long Beach in 2021.
- **Trade:** Container shipping equities (ZIM, Maersk, Matson, Hapag-Lloyd) and dry-bulk/freight exposure (BDRY ETF, FFA freight futures) long when queues build and rates spike, plus shorts in import-dependent retailers facing inventory delays; horizon of days to a few weeks as congestion data leads freight-rate prints and earnings guidance.
- **Mechanism:** Visible ship queues and yard saturation measure demand overwhelming port capacity, which mechanically drives spot container/freight rates (carrier revenue) higher and signals inventory shortfalls and margin pressure at importing retailers before either shows up in reported numbers.
- **Evidence:** Academic: 'Eye in outer space: satellite imageries of container ports can predict world stock returns' (Humanities and Social Sciences Communications, Nature Portfolio, 2023) shows port-imagery trade indicators predict equity returns before official trade data; the 2021 LA/Long Beach episode was tracked in near-real time via Planet satellite images (Washington Post, Sept 2021) while ZIM and freight rates repriced.
- **Access:** Free to cheap for individuals: Sentinel-1 SAR and Sentinel-2 imagery are free via Copernicus, free AIS trackers (MarineTraffic) corroborate queues, and Planet offers low-cost research access — one of the few institutional-grade signals a retail trader can genuinely replicate.

## Weather, climate & natural phenomena

### 10. GFS/ECMWF model-run degree-day swings
- **Signal:** Population-weighted heating/cooling degree days (HDD/CDD) computed from each new run of the GFS and ECMWF weather models (4x and 2x daily), tracking run-to-run changes in the 1-2 week US temperature outlook.
- **Trade:** NYMEX Henry Hub natural gas futures (NG) and options, or ETFs like UNG/BOIL, traded intraday around model-run releases and held days to two weeks as the forecast evolves.
- **Mechanism:** Temperature drives roughly half of US gas demand (heating and power-burn for air conditioning); a colder or hotter shift between model runs mechanically changes expected storage draws/injections, so gas futures reprice within minutes of each run.
- **Evidence:** Commodity Weather Group's degree-day forecasts are cited in nearly every Reuters/Barchart daily natural gas report as the proximate cause of price moves (e.g., 'CWG said forecasts shifted much hotter... nat-gas prices surged'); CME even lists HDD/CDD weather futures built on the same indices.
- **Access:** Cheap to free: NOAA CPC degree-day data and GFS output are free, ECMWF open data is now public, and retail-priced services (natgasweather.com, Celsius Energy) resell trader-oriented summaries; CWG itself is an institutional subscription.

### 11. Sudden stratospheric warming (polar vortex) indicators
- **Signal:** Stratospheric diagnostics — 10-hPa polar temperatures and zonal winds from ECMWF/GFS ensembles — that flag a collapsing polar vortex 2-6 weeks before cold air floods mid-latitudes, well beyond the horizon of surface forecasts.
- **Trade:** Long UK NBP / Dutch TTF gas futures (ICE) or NYMEX Henry Hub futures and calls with a 2-6 week horizon after an SSW is detected, exiting as the cold materializes.
- **Mechanism:** An SSW displaces or splits the polar vortex, and the cold outbreak reaches the surface weeks later, spiking heating demand when storage is seasonally low; traders positioned at the stratospheric signal front-run the surface-forecast repricing.
- **Evidence:** The February 2018 SSW produced the 'Beast from the East': UK NBP within-day gas hit an all-time record ~350p/therm on 1-2 March 2018 (highest ICIS trades since 1997), and day-ahead quadrupled to 207.5p; Met Office/Royal Meteorological Society documentation links the SSW to the cold outbreak, and energy-weather desks now monitor stratospheric charts as standard practice.
- **Access:** Free: NOAA CPC stratosphere monitoring pages, ECMWF open-data stratospheric fields, and academic sites (e.g., stratobserve.com) publish the diagnostics; interpretation services like Atmospheric G2 are paid.

### 12. Hurricane track/intensity forecast ensembles
- **Signal:** NHC advisory cones, ECMWF/GFS 'spaghetti' track ensembles, and commercial landfall-damage models capturing where a tropical cyclone will hit and how strong, updated every 6 hours.
- **Trade:** Options (long straddles/vol) on insurers and firms with establishments in the forecast cone, RBOB gasoline and Henry Hub futures when the Gulf refining/production corridor is threatened; horizon is the 3-10 days from formation to landfall.
- **Mechanism:** Landfall probability shifts move expected physical damage to refineries, gas platforms, and insured property, repricing gasoline cracks, gas supply, insurer book value, and single-name implied volatility with each track update.
- **Evidence:** Kruttli, Roth Tran & Watugala, 'Pricing Poseidon' (Journal of Finance 2025; Fed working paper) shows implied vols of firms in forecast landfall regions jump 5-10% and that the volatility risk premium was systematically mispriced pre-Sandy; Hurricane Harvey (Aug 2017) sent RBOB futures to two-year highs as ~25% of US refining capacity shut.
- **Access:** Free for the core data: NHC advisories and model tracks are public (nhc.noaa.gov, tropicaltidbits.com); commercial damage models (Kinetic Analysis, Reask, Moody's RMS) are institutional-only.

### 13. ENSO indices (Nino 3.4 SST, Southern Oscillation Index)
- **Signal:** Sea-surface temperature anomalies in the equatorial Pacific and the Darwin-Tahiti pressure differential, published weekly/monthly by NOAA and Australia's BOM, indicating El Nino or La Nina conditions that shift rainfall over key crop belts.
- **Trade:** ICE cocoa, coffee, and sugar futures and CBOT wheat/corn, positioned over days to a few weeks as ENSO updates and associated drought/rain news hit growing regions (e.g., West Africa, Brazil, Southeast Asia).
- **Mechanism:** El Nino brings drought to Asian palm/sugar regions and disrupts West African cocoa weather while La Nina parches Brazil, cutting expected crop supply; commodity prices reprice as ENSO probabilities and their crop effects update.
- **Evidence:** Brunner (Review of Economics and Statistics, 2002) found a one-standard-deviation ENSO surprise raises real commodity price inflation 3.5-4 points and explains ~20% of commodity price movements; the 2023 El Nino was central to cocoa's run to record highs and the ECB published a 2023 bulletin box on El Nino risks to food commodity prices.
- **Access:** Free: NOAA CPC ENSO diagnostics, weekly Nino 3.4 SST data, and BOM SOI values are public downloads.

### 14. Rhine water level at the Kaub gauge
- **Signal:** The German waterways authority's real-time gauge reading at Kaub — the shallowest chokepoint for Rhine barge traffic — where readings below ~40-78 cm progressively cut how much cargo each barge can load.
- **Trade:** Short German chemical/industrial equities (BASF, Covestro, Lanxess, Thyssenkrupp) or their listed options, and long ICE Low Sulphur Gasoil futures / ARA-Germany diesel barge differentials, over days to weeks as the gauge approaches critical levels in hot, dry summers.
- **Mechanism:** Low water forces barges to sail part-loaded, multiplying freight costs for chemicals, coal, and diesel moving up-river; production curtailments and landed-fuel premiums follow with a lag the gauge predicts almost mechanically.
- **Evidence:** Covestro's 2018 profit warning and BASF's ~EUR 250m earnings hit were explicitly blamed on the record-low Kaub reading (25 cm, Oct 2018); the 2022 repeat was covered daily by Bloomberg/Reuters as gasoil and chemical names repriced, and the 2018 episode cost Germany an estimated 0.4% of GDP.
- **Access:** Free: live Kaub readings and forecasts via Germany's PEGELONLINE/ELWIS public APIs and website; anyone can poll them hourly.

### 15. Panama Canal Gatun Lake level and transit-slot auctions
- **Signal:** Panama Canal Authority data on Gatun Lake elevation, daily transit quotas, queue lengths, and special-auction prices for transit slots — hydrological drought translated directly into shipping capacity.
- **Trade:** Container and gas-carrier shipping equities (ZIM, Maersk, Hafnia, Dorian LPG, Flex LNG), FFA freight derivatives, and US Gulf LPG/LNG arbitrage-linked futures, over one to several weeks as quotas tighten or ease.
- **Mechanism:** Falling lake levels force the ACP to cut daily transits (38 to 24 by Nov 2023) and draft limits; vessels reroute or bid up auction slots, spiking spot freight rates and widening US-Asia energy arbitrage spreads that flow into shipping earnings.
- **Evidence:** The 2023-24 El Nino drought took Gatun Lake to its lowest levels since 1965; EIA published analyses of the resulting record VLGC freight rates and delayed energy shipments, auction fees for single transits neared $4 million, and Carbon Brief/World Weather Attribution documented the episode.
- **Access:** Free to cheap: ACP publishes lake levels, transit restrictions and advisories publicly; queue/AIS analytics from project44, MarineTraffic or Kpler range from cheap dashboards to institutional feeds.

### 16. Brazilian coffee-belt frost forecasts
- **Signal:** Cold-outbreak and radiative-frost forecasts for Minas Gerais and Sao Paulo arabica zones from GFS/ECMWF runs and local meteorologists (Somar Meteorologia, Climatempo, Maxar), watched nightly in the June-August Southern Hemisphere winter.
- **Trade:** ICE Arabica coffee futures (KC) and call options, entered when frost risk enters the 5-10 day forecast window and held days to weeks through the event and damage assessment.
- **Mechanism:** A single freezing night kills coffee leaves and can destroy trees, impairing not just the current crop but the next one; because supply is concentrated in one region, a frost forecast repriced arabica futures before any physical damage is confirmed.
- **Evidence:** The 20 July 2021 frost — Brazil's worst in 27 years — drove arabica futures up ~30% in days to the highest since 2014, with Conab confirming 11% of arabica area affected; Barchart/Reuters market reports cited Maxar's cold-front forecasts as the trigger for successive rallies, echoing the famous 1994 and 1975 frost spikes.
- **Access:** Free for model output (GFS/ECMWF frost-point charts, tropicaltidbits.com); Somar, Climatempo and Maxar agricultural weather services are paid but within reach of a serious individual trader.

### 17. Nordic hydrological balance (snowpack and reservoir data)
- **Signal:** Snow water equivalent, groundwater, precipitation-energy forecasts and weekly reservoir-fill statistics for Norway/Sweden, aggregated into a 'hydrological balance' (TWh surplus/deficit vs normal) by vendors like Volue Insight (ex-Wattsight/SKM) and StormGeo, plus free NVE reservoir data.
- **Trade:** Nasdaq Commodities Nordic power futures (system price DS futures/EPADs) outright or as the Nordic-German spread, adjusted week to week as precipitation model runs shift the balance.
- **Mechanism:** Hydro supplies about half of Nordic generation, so a wetter or snowier forecast adds expected TWh of near-free supply and crushes forward power prices relative to thermal-driven German prices; each weather-model run updates the spread's fair value.
- **Evidence:** Norwegian trader Einar Aas — Norway's top taxpayer in 2016 — traded this exact weather-to-hydro signal for years until a sudden wet forecast plus rising carbon prices blew the Nordic-German spread to 17x its average in September 2018, costing him EUR 114m and breaching Nasdaq's clearing default fund; Volue Insight sells hydrological-balance feeds to Nordic power desks to this day.
- **Access:** Partially free: NVE publishes weekly Norwegian reservoir fill and SeNorge snow maps publicly; real-time hydrological-balance feeds (Volue, StormGeo) and Nasdaq power-market membership are effectively institutional.

### 18. Wind/solar generation forecast errors vs actuals
- **Signal:** The gap between TSO day-ahead wind/solar production forecasts and rolling intraday updates/actual feed-in (published on the ENTSO-E Transparency Platform and TSO sites), i.e., the megawatts the market must rebalance in the next hours.
- **Trade:** Continuous intraday power contracts on EPEX Spot / Nord Pool (hourly and 15-minute German products), traded minutes to hours ahead of delivery; equity proxy for outsiders is short-horizon trading in renewables-heavy utilities.
- **Mechanism:** When wind underdelivers versus the day-ahead forecast, short generators must buy power back in the intraday market, pushing prices up nonlinearly (and negative prices appear when wind overdelivers), so the forecast-error signal directly predicts intraday price direction.
- **Evidence:** Kiesel & Paraschiv (Energy Economics, 2017, 'Econometric analysis of 15-minute intraday electricity prices') document asymmetric, threshold-shaped intraday price responses to wind/PV forecast errors that market participants can bid on; a follow-on literature and commercial forecasters (Meteologica, ConWX, Volue) sell exactly this edge to trading desks.
- **Access:** Data is free (ENTSO-E Transparency Platform API, German TSO feeds), but executing requires EPEX/Nord Pool membership via a balance-responsible party — effectively institutional, though small prop shops and aggregators do participate.

## Social media, search & attention

### 19. Presidential tweets (Trump feed / JPMorgan 'Volfefe Index')
- **Signal:** Real-time monitoring of the U.S. president's social-media posts, parsed for market-sensitive keywords (company names, 'China', 'tariffs', 'billion') and timestamps. JPMorgan formalized this as the Volfefe Index, measuring the share of Treasury-yield volatility spikes occurring within minutes of a Trump tweet.
- **Trade:** Sell or buy 2-year and 5-year Treasury futures (ZT/ZF) and rates volatility within minutes of a macro-themed tweet; short the named single stock (e.g., Lockheed Martin, Boeing) intraday when a company is attacked by name.
- **Mechanism:** A president can directly change policy expectations (trade, defense procurement, Fed pressure), so algorithms that parse the post seconds after publication reprice rates and the named stock before slower human traders react; the initial algo wave then drags momentum followers in.
- **Evidence:** JPMorgan launched the Volfefe Index in September 2019 (covered by Bloomberg, CBS); Trump's Dec 2016 'F-35 cost out of control' tweet knocked ~2.5% off Lockheed Martin; ad agency T3's 'Trump & Dump' bot automatically shorted stocks Trump criticized (NPR, Washington Post, 2017).
- **Access:** Free — the raw feed is public on X/Truth Social and can be polled with free tools; the institutional edge is latency, via paid low-latency alerting services like Dataminr or Bloomberg's social velocity feeds.

### 20. Reddit r/WallStreetBets ticker-mention volume
- **Signal:** Scraping WSB posts and comments to count ticker mentions, upvotes, and sentiment per day or hour, flagging stocks with surging retail attention — the dataset Quiver Quantitative productized during the meme-stock era.
- **Trade:** Buy shares or short-dated calls in trending high-short-interest small/mid caps (GME, AMC-type names) on the first mention spike over a horizon of one day to two weeks; alternatively fade names at peak mention counts, since studies show maximum-hype entries earn negative average returns.
- **Mechanism:** Coordinated retail buying concentrated in low-float, heavily shorted stocks creates gamma squeezes and short squeezes; mention counts lead order flow by hours to days, so measuring the chatter measures imminent buying pressure — and shorts use the same data to avoid crowded positions.
- **Evidence:** The January 2021 GameStop squeeze is the canonical episode; Cheddar reported hedge funds buying Quiver Quantitative's real-time WSB API to screen their short books; academic audits (e.g., ACM Transactions on Social Computing, 2024, and an Oxford-published Review of Financial Studies study) document the attention-return dynamics.
- **Access:** Cheap — Quiver Quantitative sells retail subscriptions for roughly the price of a streaming service, and DIY scraping via the Reddit API is essentially free; institutional versions add real-time delivery.

### 21. Google Trends financial-search volume (the 'debt' strategy)
- **Signal:** Weekly Google search volume for finance-anxiety terms such as 'debt', 'recession', 'unemployment', measured as deviations from a trailing average — rising searches proxy household and investor concern before it shows in prices.
- **Trade:** The published rule: when search volume for 'debt' rises week-over-week, short the Dow via DIA ETF or E-mini Dow/S&P futures for the following week; when it falls, go long. Horizon is one week per rebalance.
- **Mechanism:** Investors gather information before selling; a surge in worried searches reveals the information-gathering phase that precedes risk-off order flow, so search data leads index-level selling by days.
- **Evidence:** Preis, Moat & Stanley, 'Quantifying Trading Behavior in Financial Markets Using Google Trends' (Scientific Reports, 2013): the 'debt' strategy returned 326% over 2004-2011 versus 16% buy-and-hold; Da, Engelberg & Gao's 'In Search of Attention' (Journal of Finance, 2011) independently validated search volume as an attention signal.
- **Access:** Free — Google Trends is public and pullable via the pytrends library; the main limitations are sampling noise and weekly granularity, not cost.

### 22. Wikipedia page-view counts on company and finance articles
- **Signal:** Daily view counts of Wikipedia articles about DJIA companies and general financial topics, with spikes in views (but not edits) flagging rising investor information-gathering about a stock or the market.
- **Trade:** Momentum/reversal rules on DIA or individual Dow constituents rebalanced weekly: rising views on financial-topic pages preceded market falls, so sell index ETFs or futures after view surges, buy after declines; single-name view spikes can time entries around news over days.
- **Mechanism:** Before committing capital, investors research; Wikipedia is a top research destination, so page views are a free, timestamped census of pre-trade due diligence — view surges on 'financial crisis'-type pages precede selling pressure.
- **Evidence:** Moat, Curme, Avakian, Kenett, Stanley & Preis, 'Quantifying Wikipedia Usage Patterns Before Stock Market Moves' (Scientific Reports, 2013) found view-based strategies on financial-topic pages significantly beat random trading over 2007-2012.
- **Access:** Free — the Wikimedia Pageviews REST API provides daily (and hourly) view counts per article with no key required; this is one of the few genuinely zero-cost alt-data feeds.

### 23. StockTwits intraday message sentiment
- **Signal:** Bullish/bearish classification of the firehose of StockTwits cashtag messages ($AAPL, $SPY, etc.), aggregated into half-hourly sentiment indices — commercialized by vendor Social Market Analytics (SMA) as S-Score feeds.
- **Trade:** Intraday SPY / E-mini S&P: Renault's result is that the change in sentiment in the first half-hour of trading predicts the last half-hour's return, so position in SPY near the close based on the morning sentiment shift; single-stock sentiment spikes trade over hours to days.
- **Mechanism:** StockTwits skews toward retail noise traders; a swing in their expressed mood foreshadows their correlated order flow later in the session, creating predictable intraday pressure that mean-reverts or momentum-extends at the close.
- **Evidence:** Thomas Renault, 'Intraday online investor sentiment and return patterns in the U.S. stock market' (Journal of Banking & Finance, 2017); Social Market Analytics sells StockTwits-derived sentiment to hedge funds and was named by Fortune alongside Dataminr as a signal source for funds.
- **Access:** Cheap — the StockTwits API and site sentiment tags are free at retail rate limits, and SMA-derived sentiment is available as a low-cost add-on on platforms like QuantConnect; full institutional S-Score feeds cost more.

### 24. Aggregate Twitter mood indices (Bollen's 'calm' score)
- **Signal:** Natural-language processing of the entire Twitter firehose into collective mood dimensions (e.g., GPOMS 'calm', OpinionFinder positivity) — a daily psychological barometer of the crowd rather than stock-specific chatter.
- **Trade:** Directional DJIA positions 3-4 days forward via DIA ETF or Dow/S&P futures: rising 'calm' predicted up moves, falling calm predicted declines; Derwent's fund traded these signals with multi-day holding periods.
- **Mechanism:** Investor risk appetite is an emotional state; if society-wide mood measurably deteriorates, discretionary buying dries up and selling follows with a lag of a few days, so mood leads index direction.
- **Evidence:** Bollen, Mao & Zeng, 'Twitter mood predicts the stock market' (Journal of Computational Science, 2011, claiming 87.6% directional accuracy); London hedge fund Derwent Capital Markets raised roughly $40M to trade it in 2011 (CNBC) — the fund closed by 2012, and Lachanski & Pav (Econ Journal Watch, 2017) failed to replicate, a cautionary half of the story.
- **Access:** Institutional-leaning — replicating it requires large-scale X data, and post-2023 API pricing runs from about $100-200/month (basic) to $42k+/month (enterprise firehose), pricing out most individuals.

### 25. Real-time Twitter event detection (Dataminr breaking-news alerts)
- **Signal:** Machine detection of anomalous keyword bursts and geolocated eyewitness clusters on Twitter/X (explosions, plant fires, CEO departures, geopolitical shocks), converting the platform into a sub-minute breaking-news wire distinct from any sentiment score.
- **Trade:** Intraday S&P E-mini futures and SPY on macro shocks; single-stock shares or options on company-specific events (refinery fires vs. energy names, recall news vs. autos), entered within seconds to minutes and held minutes to days.
- **Mechanism:** Eyewitness tweets beat newswires by minutes; whoever confirms an event first trades against stale prices, and algorithmic keyword triggers create the initial move that alert subscribers front-run or fade.
- **Evidence:** In the April 23, 2013 AP-hack flash crash a fake 'White House explosions' tweet erased ~$136B of S&P value in seconds as keyword algos sold; Dataminr alerted clients and flagged it as a hack four minutes before news outlets (The Week, CBC, Fortune 2015 on Dataminr's hedge-fund client base).
- **Access:** Institutional-only — Dataminr (and rivals like Bloomberg's TWTR-integrated feeds) sell enterprise subscriptions to funds and newsrooms; individuals can only approximate it with self-built X keyword streams at commercial API prices.

### 26. Robinhood holder counts (Robintrack)
- **Signal:** Hourly counts of how many Robinhood accounts held each stock, scraped from Robinhood's public popularity API by the free site Robintrack (2018-2020) — a direct census of retail crowding by ticker.
- **Trade:** Momentum entries in single stocks where holder counts inflect sharply upward (days-to-weeks horizon), and contrarian fades of hyper-crowded names — e.g., the bankrupt Hertz surge of June 2020 was visible in real time; airline names in COVID were classic Robintrack trades.
- **Mechanism:** Retail holder counts are realized order flow, not just chatter: a rising count means net retail buying is happening now, which both propels short-term momentum in small caps and marks unstable crowding that predicts reversals.
- **Evidence:** Fortune and Bloomberg reported hedge funds traded off Robintrack, and when Robinhood killed the API in August 2020, Point72 reportedly called other brokerage apps hunting for replacement data; creator Casey Primozic documented the shutdown publicly.
- **Access:** Free but historical-only — the full 2018-2020 dataset remains downloadable from Robintrack's archive for backtesting; live equivalents today are approximations (broker order-flow datasets from vendors like Vanda Research, institutional-priced).

### 27. TikTok virality metrics for consumer brands
- **Signal:** Hashtag view counts, video velocity, and creator engagement on TikTok for specific consumer products (#CELSIUS, e.l.f. cosmetics, #TikTokMadeMeBuyIt), tracked as a leading indicator of demand inflections — productized by alt-data vendors such as TickerTrends.
- **Trade:** Long shares or calls in the exposed consumer stock (CELH, ELF, and similar small/mid-cap consumer names) in the days-to-weeks window between virality spike and the next sales datapoint or earnings print; short when hashtag growth decelerates into a hyped print.
- **Mechanism:** TikTok virality precedes Google searches and point-of-sale data by days to weeks: viral product videos convert directly into store sellouts and revenue beats, so hashtag-view acceleration front-runs the fundamental data Wall Street models.
- **Evidence:** Celsius Holdings' 2020-2021 TikTok fitness-influencer wave preceded its sales explosion and multi-thousand-percent stock run, and e.l.f. Beauty repeatedly credited TikTok campaigns for revenue beats during its 2022-2024 run; vendor TickerTrends publishes hedge-fund-oriented case studies packaging exactly this social data.
- **Access:** Cheap — hashtag view counts and TikTok's Creative Center trend tools are free to inspect manually, and retail-priced aggregators (TickerTrends, AltIndex) sell structured feeds; institutional funds buy cleaner engagement panels.

## Consumer transactions & foot traffic

### 28. Aggregated bank-card transaction panels (Yodlee/Envestnet)
- **Signal:** Anonymized credit/debit card and bank-account transaction records from millions of consumers, aggregated by account-linking platforms like Yodlee, then mapped to specific public-company merchants to nowcast quarterly revenue before it is reported.
- **Trade:** Long/short single-name consumer discretionary and retail equities (or options) in the 2-6 weeks before an earnings print; e.g., positioning in SEAS (SeaWorld) or restaurant/retail names when panel spend diverges from consensus.
- **Mechanism:** Card spend is a near-real-time proxy for revenue; if the panel shows quarterly sales tracking above or below sell-side estimates, the stock predictably gaps on the earnings release, so early holders of the data front-run the surprise.
- **Evidence:** A 2015 Wall Street Journal investigation (Bradley Hope) documented that Yodlee sold card data to investment firms, with Point72 and Tiger Global reportedly paying over $2 million each per year; firms used it to track per-visitor spend at SeaWorld parks. The FTC later probed Yodlee's practices (Vice reporting).
- **Access:** Institutional-only in raw form — panels from Envestnet/Yodlee, Consumer Edge, Facteus, Earnest Analytics or M Science typically cost six figures annually; individuals occasionally get thin slices via Nasdaq Data Link or vendors' published brand-level charts.

### 29. Email e-receipt panels (Slice/Rakuten Intelligence, Edison Trends)
- **Signal:** Purchase receipts scraped from the inboxes of users of free email tools (Unroll.me, Edison Mail), parsed into item-level online transaction data covering Amazon, food delivery, ride-share and e-commerce brands.
- **Trade:** Long/short e-commerce and delivery names — AMZN, DASH, W, CHWY, HFG.DE (HelloFresh) — into quarterly earnings or around events like Prime Day, on a days-to-weeks horizon.
- **Mechanism:** E-receipts capture online revenue and market-share shifts (e.g., DoorDash vs. Uber Eats) faster than any official disclosure, so divergences from consensus revenue estimates predict earnings-day moves.
- **Evidence:** Slice Intelligence (owner of Unroll.me, later Rakuten Intelligence) famously sold parsed Lyft receipt data, and Edison Trends explicitly marketed hedge funds real-time e-receipt revenue tracking for 11,000+ brands; Vice and Neudata documented both firms' sale of inbox-derived data to investors.
- **Access:** Institutional feeds cost tens of thousands per year (Edison Trends, Measurable AI via Datarade), but both vendors publish free brand-level trend reports (Prime Day totals, food-delivery share) that individuals can trade off with a lag.

### 30. Smartphone geolocation foot-traffic panels (Thasos, Foursquare, Placer.ai)
- **Signal:** GPS pings and app check-ins from hundreds of millions of phones, geofenced to specific stores, restaurants and factories to count visitors — or workers — in near real time.
- **Trade:** Directional equity or options positions in single names over 1-6 weeks: TSLA into production/delivery reports, CMG and retailers into same-store-sales prints, mall REITs (SPG, MAC) on traffic trends.
- **Mechanism:** Visit counts lead reported sales and output: more phones inside a geofence means more customers (or factory shifts), so foot-traffic inflections predict the next official number before management discloses it.
- **Evidence:** Thasos geofenced Tesla's Fremont plant in 2018 and detected a 30% jump in overnight-shift phones, which hedge fund clients traded ahead of Tesla's production release; Foursquare publicly predicted Chipotle's Q1 2016 same-store sales would fall ~30% after the E. coli outbreak — the actual print was -29.7% (Washington Post, Slate coverage).
- **Access:** Institutional feeds (Thasos QStreams, Advan, SafeGraph) are expensive, but Placer.ai offers a free tier and free published analyses, making coarse chain-level traffic readable by individuals at no cost.

### 31. Gift card secondary-market resale discounts
- **Signal:** The discount to face value at which a retailer's gift cards trade on resale marketplaces like CardCash, Raise and (historically) Plastic Jungle — a crowd-sourced price on the retailer's unsecured IOUs.
- **Trade:** Short the equity or buy puts/CDS on distressed retailers when resale discounts widen abnormally versus peers, on a multi-week horizon into bankruptcy or guidance events; historically applicable to Sears (SHLD) and Bed Bath & Beyond (BBBY).
- **Mechanism:** Gift card holders are effectively unsecured creditors; when consumers fear a chain will liquidate, they dump cards at any price, so widening discounts embed real-time bankruptcy probability before rating agencies or earnings confirm it.
- **Evidence:** An academic study at Claremont McKenna College, 'The Secondary Market for Gift Cards and the Role of Corporate Bankruptcy Risk' (using Plastic Jungle data), found secondary-market gift card prices correlate with CDS prices, excess stock returns and bankruptcy risk; discounts on Sears and Bed Bath & Beyond cards visibly widened into their bankruptcies.
- **Access:** Free — anyone can scrape or manually monitor posted buy/sell discounts on CardCash, Raise and GiftCardWiki daily; no vendor subscription exists or is needed.

### 32. App download and DAU trackers (Sensor Tower, Apptopia)
- **Signal:** Daily estimates of app downloads, daily active users, session time and in-app revenue for every major mobile app, modeled from device panels and app-store rank data.
- **Trade:** Long/short app-economy stocks — SNAP, PINS, RBLX, MTCH, HOOD, COIN — into earnings on a 1-4 week horizon, or intraday momentum trades when download surges signal retail-trading manias (brokerage and crypto apps topping the App Store).
- **Mechanism:** Downloads and DAU lead reported user metrics (MAU/DAU) and bookings, which dominate earnings reactions for consumer-app companies; app-store rank spikes for Robinhood/Coinbase also proxy retail-flow intensity into the underlying traded assets.
- **Evidence:** Both vendors sell finance-specific products to hedge funds (Sensor Tower's investor solutions page; Apptopia markets 'models predicting key company KPIs ahead of earnings' for META, SNAP, PINS); Sensor Tower's documented count of 2M+ Robinhood downloads (+394% week-over-week) during the January 2021 GameStop episode was widely used as a retail-mania gauge (Fortune).
- **Access:** Full feeds are institutional (roughly $20k-100k+/yr), but free tiers, public app-store top-charts and both firms' free blog posts give individuals a usable coarse version at zero cost.

### 33. OpenTable seated-diner reservation data
- **Signal:** Daily year-over-year change in seated diners (reservations plus walk-ins) across tens of thousands of restaurants, published free in OpenTable's State of the Industry dashboard.
- **Trade:** Casual-dining and reopening-basket equities — EAT, CAKE, DRI, TXRH, plus travel/leisure ETFs like PEJ — on a days-to-weeks horizon around demand inflections (lockdowns, reopenings, Omicron).
- **Mechanism:** Seated-diner counts are a same-day census of restaurant demand, leading official retail-sales and company same-store-sales data by weeks; inflections in the series repriced the entire dining sector during 2020-2021.
- **Evidence:** During COVID the daily OpenTable series became a standard high-frequency indicator on Wall Street — CNBC documented investors using it to time the restaurant recovery in May 2020, and Restaurant Dive documented its real-time capture of the Omicron dining collapse in December 2021.
- **Access:** Free — OpenTable publishes the daily seated-diner dataset publicly on its State of the Industry page, downloadable by anyone.

### 34. TSA checkpoint throughput counts
- **Signal:** The exact number of travelers screened at U.S. airport security checkpoints, published daily (with a one-day lag) by TSA.gov — a physical foot-traffic census of air travel.
- **Trade:** Airline equities (AAL, DAL, UAL, LUV) and the JETS ETF, intraday to a few weeks, around demand inflections such as reopening milestones, holiday-travel records and shutdown disruptions.
- **Mechanism:** Passenger throughput maps directly to airline load factors and unit revenue; day-over-day and year-over-year throughput surprises predict revenue trends before monthly airline traffic releases, so traders reprice carriers on the daily print.
- **Evidence:** TSA throughput became the canonical high-frequency airline-demand indicator of the COVID era — Seeking Alpha and other market coverage documented traders tracking daily checkpoint figures against JETS positioning, and record Thanksgiving screening days are still cited as catalysts for airline stocks.
- **Access:** Free — TSA publishes the daily passenger volumes on tsa.gov, and the historical series is downloadable by anyone.

### 35. Weekend box-office grosses (Comscore/Box Office Mojo)
- **Signal:** Studio-reported theatrical ticket sales aggregated by Comscore, with Friday estimates and Sunday-morning weekend actuals published on Box Office Mojo and The Numbers — a direct read on cinema consumer transactions.
- **Trade:** Exhibitor and studio-adjacent equities and options — AMC, CNK, IMAX, MCS — intraday to a few days around major opening weekends, buying or shorting into the Monday open after grosses beat or miss tracking.
- **Mechanism:** Weekend admissions are the dominant revenue driver for exhibitors, and grosses are known 24-48 hours before markets react Monday; surprises versus pre-release 'tracking' estimates therefore produce predictable gap moves in theater stocks.
- **Evidence:** The July 2023 'Barbenheimer' weekend ($235M+ domestic) set AMC's best attendance since 2019 and IMAX records, and Barron's documented the resulting rally in AMC, IMAX and Cinemark shares; Deadline and Fast Company have repeatedly documented theater-stock moves off weekend grosses.
- **Access:** Free — Box Office Mojo and The Numbers publish daily and weekend grosses publicly; Comscore's granular real-time feed is a paid institutional product.

### 36. In-store shopper counters (ShopperTrak/Sensormatic)
- **Signal:** National retail foot-traffic counts from camera and infrared-beam people-counters physically installed in tens of thousands of U.S. stores and malls, aggregated by Sensormatic's ShopperTrak — hardware-counted visits, not phone pings.
- **Trade:** Mall-exposed retail equities and ETFs — XRT, M, JWN, BBY, mall REITs — in the days after Thanksgiving weekend and through December, positioning for holiday-quarter earnings on a days-to-weeks horizon.
- **Mechanism:** Holiday traffic drives the make-or-break quarter for brick-and-mortar retailers; ShopperTrak's Black Friday weekend report lands the Saturday/Sunday after Thanksgiving, giving a store-level demand read weeks before December sales data, and weak prints have repeatedly dented retail-sector sentiment.
- **Evidence:** ShopperTrak's Black Friday traffic reports are a decades-old market fixture covered by CNBC (e.g., the 2017 report of falling Thanksgiving/Black Friday traffic) and Business Wire/Morningstar each year; its holiday counts were central to the weak 2013 holiday season narrative that pressured department-store stocks.
- **Access:** Headline national numbers are free via press releases and media coverage each holiday season; the underlying store-level feed is institutional-only through Sensormatic/ShopperTrak Analytics.

## Shipping, logistics & transportation tracking

### 37. AIS satellite ship-tracking (vessel positions and draft)
- **Signal:** Automatic Identification System transponder pings from the global merchant fleet, captured by satellite and coastal receivers, reveal vessel positions, speed, draft (how deep a ship sits, proxying cargo load) and port calls — letting analysts estimate commodity flows days before official statistics.
- **Trade:** WTI and Brent crude futures, plus commodity-index and freight-linked positions, on a horizon of days — front-running weekly EIA/DOE inventory and trade releases.
- **Mechanism:** Fewer or slower laden tankers heading to a region implies weaker supply/demand than consensus; when the official inventory or trade report later confirms it, prices adjust — the AIS trader is positioned first.
- **Evidence:** CargoMetrics (Boston, backed by Paul Tudor Jones and Eric Schmidt) ran a hedge fund on this data; Institutional Investor documented its system shorting WTI futures on a shipping slowdown two days before the DOE report confirmed the move. Vendors Kpler and Vortexa now sell similar AIS-derived flow data to funds.
- **Access:** Raw AIS is cheap for individuals (MarineTraffic/VesselFinder from ~$0-100/month); the cleaned cargo-flow analytics that actually generate signals (Kpler, Vortexa, CargoMetrics on Bloomberg) are institutional-only at five-to-six-figure subscriptions.

### 38. Corporate private-jet ADS-B tracking
- **Signal:** ADS-B transponder broadcasts from corporate aircraft, logged by hobbyist receiver networks and commercial trackers, show which company's jet visited which city — flagging unannounced meetings between acquirers and targets.
- **Trade:** Shares or short-dated call options on the suspected M&A target (single-name equities), on a horizon of days to two weeks before deal announcement.
- **Mechanism:** Executives fly to negotiate deals in person; a target-company jet repeatedly appearing at an acquirer's headquarters city precedes the public announcement, after which the target's stock gaps up on the deal premium.
- **Evidence:** Gordon Haskett Research flagged Occidental Petroleum's jet in Omaha using Quandl (now Nasdaq Data Link) flight data on April 29, 2019 — two days before Buffett's $10B investment was announced (CNBC); Bloomberg's 2019 piece 'Hedge Funds Are Tracking Private Jets to Find the Next Megadeal' and a 2018 Oxford/Swiss federal-lab study (7 M&A events detected from 3 dozen companies' aircraft) document the practice.
- **Access:** Cheap-to-free for individuals: ADS-B Exchange and JetSpy show unfiltered flights (many jets block themselves from FlightAware via FAA LADD); the curated tail-number-to-ticker mapping from Quandl/Nasdaq is institutional.

### 39. Baltic Dry Index (BDI)
- **Signal:** The Baltic Exchange's daily composite of dry-bulk shipping rates (Capesize/Panamax/Supramax time-charter assessments from a shipbroker panel), a real-time price of moving iron ore, coal and grain by sea.
- **Trade:** Dry-bulk shipping equities (GOGL, SBLK, GNK), the BDRY freight-futures ETF, forward freight agreements (FFAs), and commodity-index futures, on a horizon of a few weeks.
- **Mechanism:** Freight rates are set by near-inelastic vessel supply meeting raw-materials demand, so BDI moves are a fast, unmanipulable read on global industrial demand that equity and commodity markets absorb with a lag.
- **Evidence:** Bakshi, Panayotov and Skoulakis, 'The Baltic Dry Index as a Predictor of Global Stock Returns, Commodity Returns, and Global Economic Activity' (SSRN 1747345, 2010/2011) documents significant out-of-sample predictability of stock and commodity index returns from BDI growth at monthly horizons.
- **Access:** Free with a lag — the daily headline number is carried by Trading Economics, Bloomberg news and shipping press; official real-time constituent data requires a Baltic Exchange subscription (institutional).

### 40. Tanker spot fixtures and VLCC day-rates
- **Signal:** Daily charter 'fixtures' (individual ship-hire deals reported by shipbrokers like Poten & Partners) and Baltic Exchange tanker route assessments (e.g., TD3C Middle East-China) show in near real time what oil companies are paying to hire supertankers.
- **Trade:** Crude-tanker equities (FRO, DHT, INSW, EURN/CMB.TECH) and tanker FFAs, on a horizon of days to a few weeks as rate spikes flow into quarterly earnings expectations.
- **Mechanism:** Tanker company earnings are almost pure spot-rate leverage; a jump in fixture rates mechanically raises cash flow forecasts, so equities re-rate within days of the rate move — before quarterly results.
- **Evidence:** Well-documented September-October 2019 episode: US sanctions on COSCO (Dalian) blacklisted ~50 VLCCs, spot rates spiked from ~$40k/day toward $300k/day, and DHT, INSW and Frontline shares each rose ~22% within two weeks (FreightWaves, Lloyd's List, Splash247 coverage).
- **Access:** Headline rates are effectively free via FreightWaves, gCaptain, TradeWinds and brokers' weekly PDF reports (Poten publishes free weekly opinions); full real-time fixture databases (Baltic Exchange, Clarksons SIN) are institutional.

### 41. AAR weekly rail carloads
- **Signal:** The Association of American Railroads compiles every major North American railroad's traffic into a Weekly Rail Traffic report (published Wednesdays): carloads across 20 commodity groups plus intermodal containers/trailers.
- **Trade:** Rail equities (UNP, CSX, NSC, CP, CNI), the IYT transportation ETF, and coal/grain-adjacent names, on a one-to-several-week horizon into railroad earnings.
- **Mechanism:** Weekly volumes are the direct physical driver of rail revenue; a run of weak or strong carload prints ahead of a quarter lets traders anticipate earnings beats/misses and guide-downs before the companies report.
- **Evidence:** Public, long-running dataset: AAR's Freight Rail Data Center publishes it weekly, FRED carries rail freight carload series, and sell-side transport analysts and outlets (Railway Age, IndexBox, AJOT) parse each Wednesday print as a market indicator; individual railroads' weekly performance reports feed it.
- **Access:** Free — weekly summary on aar.org and via FRED; the detailed commodity-level data feed is a modest AAR subscription, well within individual reach.

### 42. Electronic truckload tender data (FreightWaves SONAR OTVI/OTRI)
- **Signal:** FreightWaves SONAR captures actual electronic load tenders flowing from shippers to trucking carriers via EDI/API, producing the Outbound Tender Volume Index (demand) and Outbound Tender Reject Index (capacity tightness) daily, by lane.
- **Trade:** Truckload and brokerage equities (KNX, WERN, JBHT, ARCB, CHRW, XPO) and LTL names, on a horizon of one to six weeks ahead of quarterly earnings and guidance.
- **Mechanism:** Tender volumes and rejection rates lead spot and contract trucking rates, which drive carrier revenue and margins; a rising OTRI signals pricing power quarters before it appears in reported numbers, and inflections front-run guidance changes.
- **Evidence:** FreightWaves explicitly markets SONAR to equity investors ('Trading trucking company stocks' on its SONAR blog) and distributes OTVI via Bloomberg's terminal/data catalog; DAT's load-to-truck ratio and spot-rate data serve the same role and are cited across sell-side transport research.
- **Access:** Cheap-to-moderate: SONAR subscriptions run roughly hundreds of dollars per month (not institutional-only); DAT publishes free monthly trendline summaries, and FreightWaves' daily editorial coverage of the indices is free.

### 43. TSA daily checkpoint throughput
- **Signal:** The Transportation Security Administration publishes the exact number of passengers screened at US airport checkpoints every day (posted next morning on tsa.gov), with year-over-year comparisons — a same-day census of US air travel demand.
- **Trade:** Airline equities (AAL, DAL, UAL, LUV), the JETS ETF, and hotel/cruise reopening baskets, on an intraday-to-two-week horizon; heavily used around COVID-era demand inflections.
- **Mechanism:** Screened passengers map almost one-to-one to airline unit revenue; when daily throughput inflects versus expectations, revenue models reprice immediately and the stocks move the same session.
- **Evidence:** Documented market episode: CNBC, August 10, 2020 — 'Airline shares surge as TSA numbers hit pandemic high' — UAL +9%, DAL +8%, AAL +7% on a record post-March screening day; throughout 2020-21 sell-side desks and financial media tracked the daily print as the primary airline demand indicator.
- **Access:** Completely free — daily table at tsa.gov/travel/passenger-volumes, easily scraped; no vendor required.

### 44. US customs bills of lading (Panjiva / ImportGenius)
- **Signal:** US Customs and Border Protection releases shipment-level import manifests (bills of lading) naming consignee, shipper, product description and container counts; vendors clean and map them to stock tickers, revealing a listed company's seaborne import volumes and supplier changes.
- **Trade:** Single-name equities of import-dependent companies (consumer electronics, furniture, apparel, EV makers) ahead of quarterly earnings or product launches, on a two-to-six-week horizon.
- **Mechanism:** Container receipts precede reported revenue and inventory: a surge or collapse in a retailer's or manufacturer's inbound shipments foreshadows sales strength, inventory gluts, or supply-chain breaks before the company discloses them.
- **Evidence:** Panjiva (acquired by S&P Global Market Intelligence) sells ticker-mapped shipment data explicitly to hedge funds and asset managers; a 2021 Federal Reserve working paper (FEDS 2021-066) validates bill-of-lading data for measuring firm-level trade; ImportGenius shipment records have repeatedly surfaced pre-announcement moves (e.g., tracking Tesla and consumer-electronics shipments) in financial press.
- **Access:** Cheap for individuals: ImportGenius plans start around $149-199/month; Panjiva via S&P Global is institutional-priced. Covers ocean freight only — air cargo and Canada/Mexico truck imports are invisible.

### 45. Container spot freight rates (Freightos Baltic Index / Drewry WCI)
- **Signal:** Daily/weekly indices of what shippers actually pay to move a 40-foot container on major lanes (e.g., China-US West Coast), built from live booking data (Freightos FBX, administered by the Baltic Exchange) or carrier surveys (Drewry World Container Index).
- **Trade:** Container-liner equities (ZIM, Maersk, Hapag-Lloyd, Matson) and CME's FBX container-freight futures, on a horizon of one to several weeks; ZIM in 2021-22 traded almost tick-for-tick with spot-rate momentum.
- **Mechanism:** Liner profits are extremely leveraged to spot rates on top of fixed fleet costs; rate inflections (Red Sea diversions, port congestion, tariff pull-forwards) hit forward EPS estimates within days, moving the equities well before quarterly results.
- **Evidence:** CME Group launched cash-settled container freight futures on six FBX lanes in February 2022 (settling on Baltic Exchange-administered FBX prices — the only IOSCO-compliant container index), formal proof the indicator is directly traded; Freightos and Baltic Exchange market FBX data to financial traders.
- **Access:** Free at headline level — weekly FBX and Drewry WCI numbers are published openly and covered by FreightWaves/Loadstar; full daily lane-level data (Freightos Terminal) is a paid but non-institutional subscription, and CME FBX futures are accessible through any futures broker (thin liquidity).

## Corporate digital exhaust

### 46. Web-scraped online retail prices (PriceStats / Billion Prices Project)
- **Signal:** Daily inflation indices built by scraping millions of product prices from 1,500+ online retailers in 27 countries, published with only a ~3-day lag. Retailers adjust online prices first, so the series leads official CPI prints by weeks.
- **Trade:** Position in Treasury futures (ZN/ZB), TIPS breakevens (TIP vs. nominal Treasuries), CPI fixings/inflation swaps, or fed funds futures in the days ahead of a monthly CPI release when the nowcast diverges from consensus.
- **Mechanism:** Scraped prices capture price changes in near real time; a gap between the daily index and economist consensus for CPI predicts the surprise, which mechanically reprices rates, breakevens, and rate-sensitive equities on release day.
- **Evidence:** Grew out of MIT's Billion Prices Project (Cavallo and Rigobon); commercialized as State Street PriceStats and sold to institutional macro investors, who State Street explicitly markets it to for tracking inflation ahead of official statistics.
- **Access:** The full daily feed is institutional-only via State Street; individuals can read free monthly PriceStats commentary on State Street's site and the academic BPP papers/data, but not trade-grade daily updates.

### 47. Direct-from-employer job postings (LinkUp)
- **Signal:** Job openings scraped daily from the career pages of 80,000+ companies (not job boards), giving deduplicated counts of new, active, and removed postings per employer and in aggregate.
- **Trade:** Intraday macro trades in S&P 500 e-mini futures, Treasury futures, and fed funds futures around the monthly nonfarm payrolls release; single-name equity or options positions into earnings when a company's posting velocity collapses or surges.
- **Mechanism:** Hiring plans move before revenue and before official labor data: aggregate posting counts nowcast NFP, and firm-level posting drops flag cost cuts or demand weakness ahead of guidance changes.
- **Evidence:** LinkUp publishes an NFP forecast that it reports beat consensus about 65% of the time over two years; its data underlies the S&P 500 LinkUp Jobs Index with S&P DJI, is distributed to quant funds, and was profiled by Eagle Alpha for payroll prediction.
- **Access:** Core feed is a paid commercial subscription aimed at institutions; academics get it cheaply via Dewey Data, and LinkUp posts its monthly NFP forecast free on its website.

### 48. WARN Act layoff notices scraped from state labor sites
- **Signal:** US employers with 100+ workers must file Worker Adjustment and Retraining Notification notices 60 days before mass layoffs or plant closings; these appear on state labor department websites days or weeks before any press release or 8-K.
- **Trade:** Short the filing company's stock or buy short-dated puts within days of a large WARN filing hitting a state site, before national media pick it up; conversely fade overreactions once coverage peaks.
- **Mechanism:** A legally mandated disclosure leaks restructuring news through an obscure channel first; scraping 50 state websites daily front-runs the news cycle that later moves the stock.
- **Evidence:** Academic event studies use WARN filings directly (e.g., the 574-event downsizing study finding plant-closure firms outperformed by 7.9%, following Alexander and Spivey's 1997 WARN paper in ScienceDirect); the Cleveland Fed and Conference Board document WARN notices leading official job-loss data, and Layoffdata.com/openICPSR maintain compiled databases.
- **Access:** Free: every state publishes WARN notices publicly, and layoffdata.com aggregates them; the only cost is building or buying a scraper to catch filings quickly.

### 49. Glassdoor employee-review sentiment changes
- **Signal:** Crowdsourced employer ratings and review text from current employees, tracked as changes in a company's average rating over time rather than levels.
- **Trade:** Long-short baskets of single stocks — long firms with improving employee ratings, short deteriorating ones — held for the following weeks and concentrated into the next quarterly earnings announcement.
- **Mechanism:** Employees observe deteriorating sales, morale, and management before outsiders do; rating changes forecast sales growth, profitability, and one-quarter-ahead earnings surprises, so prices drift as the fundamentals are revealed.
- **Evidence:** Green, Huang, Wen, and Zhou, 'Crowdsourced Employer Reviews and Stock Returns,' Journal of Financial Economics 134 (2019): firms with rating improvements significantly outperform decliners, with the effect strongest for current-employee reviews.
- **Access:** Individual traders can read Glassdoor reviews free (bulk scraping violates ToS); cleaned historical panels are sold institutionally by vendors like Revelio Labs and Thinknum, with academic access via WRDS.

### 50. Amazon customer review rating velocity
- **Signal:** Abnormal changes in star ratings and review volume for a public company's products on Amazon.com, aggregated up to the firm level.
- **Trade:** Buy consumer-discretionary and CPG stocks (or calls) with abnormally high customer ratings and short those with abnormally low ratings, holding through the next earnings report over a few weeks.
- **Mechanism:** Customers experience product quality and demand before it shows up in reported revenue; abnormal ratings positively predict revenue and earnings surprises, and prices adjust when results print.
- **Evidence:** Jiekun Huang, 'The customer knows best: The investment value of consumer opinions,' Journal of Financial Economics 128 (2018), using 14.5 million Amazon reviews 2004-2015; a long-short spread earned roughly 56-73 bps per month with no reversal.
- **Access:** Public review pages are free to view and cheap to scrape (ToS-grey area); commercial firm-mapped review feeds come from alt-data vendors such as YipitData at institutional prices.

### 51. SEC EDGAR PDS feed latency (paying subscribers saw filings first)
- **Signal:** The SEC's Public Dissemination Service delivered Form 4 insider-trade and other filings to paying feed subscribers seconds before the same documents appeared on the public EDGAR website (mean posting lag ~40 seconds).
- **Trade:** Intraday, sub-minute single-stock trades: buy or sell the stock (or its options) within seconds of an informative Form 4 or 8-K hitting the PDS feed, ahead of the public-site posting.
- **Mechanism:** Pure information latency arbitrage on a government channel: prices, volumes, and spreads were shown to start moving roughly 30 seconds before public posting, meaning feed subscribers monetized the head start.
- **Evidence:** Rogers, Skinner, and Zechman, 'Run EDGAR Run: SEC Dissemination in a High-Frequency World,' Journal of Accounting Research (2017); the findings and accompanying WSJ coverage pushed the SEC to synchronize dissemination.
- **Access:** Historically anyone could buy the PDS feed for roughly $1,500/month through a redistributor; the specific edge is now closed, but EDGAR full-text and RSS remain free and fast-polling filing bots remain a retail-accessible strategy.

### 52. Executive job-change tracking from LinkedIn and the open web
- **Signal:** Continuous monitoring of tens of millions of professional profiles for title changes, quiet departures, and team rebuilds at public companies — often visible when an executive updates a profile before any official announcement.
- **Trade:** Event-driven single-stock positions or options on companies showing unannounced C-suite or key-division departures, held days to a few weeks until the 8-K or press release lands; also short candidates when senior talent exodus accelerates.
- **Mechanism:** Executives and engineers update public profiles ahead of corporate disclosure; abnormal departure clusters signal strategy shifts, failed projects, or coming restructurings before they are priced.
- **Evidence:** Live Data Technologies tracks job changes for 95M+ decision-makers and its data is used by the Wall Street Journal and PitchBook for executive-movement reporting; Revelio Labs sells workforce-intelligence feeds to investors and is distributed to researchers via WRDS.
- **Access:** Watching individual executives on LinkedIn is free but unscalable; systematic feeds from Live Data Technologies or Revelio Labs are institutional subscriptions.

### 53. Clickstream web-traffic panels (SimilarWeb)
- **Signal:** Estimated visits, unique users, conversion-funnel, and app-engagement metrics for company websites, built from device panels, ISP partnerships, and direct measurement, updated daily.
- **Trade:** Long or short internet-exposed equities (e-commerce, travel, marketplaces, fintech) and their options in the 2-4 weeks before earnings when quarter-to-date traffic diverges from street revenue expectations.
- **Mechanism:** For digital businesses, web/app traffic is a direct top-of-funnel proxy for revenue; mid-quarter traffic inflections predict revenue surprises before the print.
- **Evidence:** SimilarWeb sells a dedicated Investor Intelligence / Stock Intelligence product and documents hedge-fund earnings-prediction use cases; its feed is distributed on institutional platforms like Exabel, and Hedgeweek has profiled web-traffic-based investing.
- **Access:** A limited free tier and cheap self-serve plans exist for individuals; the granular daily investor-grade feed is an institutional subscription.

### 54. Patent grant announcements (USPTO issue-day reaction)
- **Signal:** Weekly USPTO patent issuances (published every Tuesday in the Official Gazette), scored for economic value by the size of the grant-day stock reaction and forward citations.
- **Trade:** Buy single stocks receiving unusually valuable patent grants on issue day and hold for the 2-5 day announcement window; systematic versions tilt toward high-innovation-value names for several weeks.
- **Mechanism:** A patent grant resolves uncertainty about the firm's property rights over an innovation; the market caps the news into the stock over a short window, and high-value grants predict firm growth and productivity, producing measurable drift.
- **Evidence:** Kogan, Papanikolaou, Seru, and Stoffman, 'Technological Innovation, Resource Allocation, and Growth,' Quarterly Journal of Economics 132 (2017), which measures each patent's value from the 2-3 day stock-market reaction around issuance for 1926-2010 and spawned a widely used dataset.
- **Access:** Free: USPTO bulk data, PatentsView, and the weekly Official Gazette are public, and the KPSS patent-value dataset is posted free online; the work is in mapping patents to tickers fast.

## Government, political & regulatory signals

### 55. Congressional STOCK Act trade disclosures
- **Signal:** Periodic Transaction Reports that members of Congress and their spouses must file within 45 days of any stock trade, scraped from the House Clerk and Senate eFD sites. Trackers parse filer, ticker, size band, and filing timestamp the moment a report posts.
- **Trade:** Copy-trade the disclosed single stocks (or buy calls) on the day the filing posts and hold days to a few weeks, riding the attention-driven pop that follows high-profile filers like Pelosi-linked trades; passive versions exist via the NANC and KRUZ ETFs.
- **Mechanism:** Legislators trade with informational advantages about pending legislation, contracts, and regulation; the disclosure itself is also a media catalyst, so retail order flow piles into the named ticker within hours of the filing hitting trackers.
- **Evidence:** Ziobrowski et al. (Journal of Financial and Quantitative Analysis, 2004) found Senate purchases beat the market by ~85 bps/month; Quiver Quantitative and Unusual Whales commercialized live trackers, and Subversive Capital launched the NANC/KRUZ ETFs in February 2023 to trade the disclosures systematically.
- **Access:** Free: raw filings on the House/Senate disclosure portals; Quiver Quantitative and Unusual Whales offer free dashboards with cheap (~$10-40/month) API tiers, and the ETFs are exchange-listed.

### 56. White House visitor logs
- **Signal:** Publicly released logs of who met whom at the White House, matched by name to corporate executives. Researchers code each visit by the executive's firm and the seniority of the official visited.
- **Trade:** Buy the visiting company's stock shortly after the log release and hold roughly two weeks to two months; hedge with sector ETFs to isolate the access premium. Also usable as an event overlay before contract or regulatory decisions.
- **Mechanism:** Face time with policymakers predicts favorable outcomes — more government contracts and softer regulatory treatment — so the market reprices the firm once the meeting becomes observable in the released logs.
- **Evidence:** Brown and Huang, 'All the President's Friends' (NBER w23356, published in the Journal of Financial Economics), documented ~0.5% abnormal returns over 12 days after visits using 2009-2015 logs, plus sharp underperformance of Obama-connected firms right after the 2016 election.
- **Access:** Free but lagged: logs are posted on WhiteHouse.gov (releases were suspended in some administrations and run ~90 days behind), so the tradable event is the batch release date rather than the visit itself.

### 57. FOIA request logs and FOIA'd FDA inspection documents
- **Signal:** Two layers: hedge funds file FOIA requests to the FDA for non-public material like Form 483 inspection reports, complete response letters, and adverse-event files; and the agencies' public FOIA request logs reveal which companies sophisticated investors are digging into.
- **Trade:** Trade the specific drugmaker's stock or options over days to weeks once documents arrive (e.g., short a manufacturer after an ugly Form 483), or piggyback by watching FOIA logs for clusters of fund requests about one ticker.
- **Mechanism:** FOIA responses contain material information that is technically public but not disseminated — plant inspection failures or adverse-event spikes foreshadow recalls, CRLs, and warning letters that later hit the tape.
- **Evidence:** Gargano, Rossi and Wermers, 'The FOIA and the Race Toward Information Acquisition' (Review of Financial Studies, 2017) showed institutional investors filing FDA FOIA requests earned abnormal returns trading the subject pharma stocks; WSJ reporting documented funds including SAC Capital using the technique.
- **Access:** Free but slow: anyone can file FOIA requests and read agency FOIA logs; vendors like FDAzilla/Redica sell cleaned 483 and inspection data cheaply, while the fastest document pipelines are institutional.

### 58. Central bank communication linguistics (hawk/dove NLP scores)
- **Signal:** Algorithmic text analysis of Fed, ECB and BOJ statements, minutes, and individual officials' speeches, distilled into a real-time hawkish/dovish score calibrated to each speaker's historical lexicon.
- **Trade:** Intraday to multi-day positions in fed funds and SOFR futures, 2y/10y Treasury futures, EUR/USD, and rate-sensitive ETFs (TLT) around FOMC releases and scheduled speeches, sized by the surprise between the score and market pricing.
- **Mechanism:** Policy-path expectations are set largely through language; a statement that scores more hawkish than the speaker's own baseline predicts upward repricing of the rate path before consensus human interpretation catches up.
- **Evidence:** Prattle (founded 2014 from Evan Schnidman's Harvard dissertation) sold exactly these scores to hedge funds and was acquired by Liquidnet in 2019; academic work such as Hansen and McMahon's studies of Fed 'Fedspeak' documents measurable market reactions to communication tone.
- **Access:** The polished feeds (Prattle/Liquidnet, RavenPack) are institutional, but the raw inputs — federalreserve.gov speeches and statements — are free, and open-source hawk/dove dictionaries make a DIY version cheap.

### 59. Corporate lobbying intensity from LDA filings
- **Signal:** Quarterly Lobbying Disclosure Act filings scraped from the Senate LDA database, converted into a 'lobbying intensity' metric — lobbying dollars scaled by market cap, revenue, and earnings — plus flags for new registrations on specific bills.
- **Trade:** Buy stocks whose lobbying intensity jumps at the quarterly filing release, or firms newly registering on live legislation (tax, defense, healthcare bills), holding weeks through the legislative catalyst; the SAGP ETF is the packaged version.
- **Mechanism:** Outsized lobbying relative to firm size predicts favorable policy outcomes — contracts, tax carve-outs, blocked regulation — that the market underprices because lobbying data is disclosed with a lag and rarely modeled.
- **Evidence:** Strategas' Policy Opportunity Portfolio, built on its Lobbying Intensity index, outperformed the S&P 500 by roughly 4-5 points a year since April 2009 (covered by CNBC) and is now tradable as the Strategas Global Policy Opportunities ETF (SAGP).
- **Access:** Free: the Senate LDA database and OpenSecrets publish all filings; Strategas' index itself is institutional research, but SAGP is exchange-listed and the raw data is replicable at no cost.

### 60. FDA PDUFA decision calendar (pre-catalyst run-up)
- **Signal:** The published Prescription Drug User Fee Act goal dates by which the FDA must rule on each drug application, compiled into catalyst calendars alongside advisory-committee meeting dates.
- **Trade:** Buy small/mid-cap biotech shares 4-8 weeks before the PDUFA date and exit before the binary decision to harvest the documented run-up, or buy straddles/strangles early to ride implied-volatility inflation into the event; XBI names are the usual universe.
- **Mechanism:** A known, dated binary catalyst attracts position-building by conviction buyers and short covering, producing a systematic pre-event drift of roughly 20-40% in the weeks before the decision, independent of the eventual outcome.
- **Evidence:** The run-up pattern is a documented biotech strategy covered by catalyst-calendar vendors BiopharmCatalyst, BiopharmaWatch, and RTTNews' FDA calendar, with quantitative work by firms such as Verdad on positioning signals around FDA decisions.
- **Access:** Free to cheap: PDUFA dates come from company press releases aggregated by BiopharmCatalyst and similar sites, with premium tiers around $30-50/month.

### 61. PTAB inter partes review petition filings
- **Signal:** New petitions on the USPTO Patent Trial and Appeal Board docket challenging the validity of a specific patent, plus subsequent institution decisions — public filings that directly threaten a drug or tech firm's key franchise.
- **Trade:** Short the patent holder's stock or buy puts the day a credible IPR petition or institution decision posts, holding days to weeks; single-product pharma names (e.g., Acorda-type stocks) show the largest single-day drops.
- **Mechanism:** An IPR is a cheap, fast administrative path to invalidating a patent; for a company whose cash flow depends on one protected drug, the filing itself materially raises the probability of generic entry and gets repriced immediately.
- **Evidence:** Kyle Bass's Hayman Capital ran this as a documented strategy in 2015 via the 'Coalition for Affordable Drugs,' filing 35 IPRs against 16 companies (Acorda, Celgene, Biogen, etc.) while shorting targets — covered by Institutional Investor, IAM, and legal commentators; target stocks fell sharply on petition days.
- **Access:** Free: all petitions and decisions are searchable in the USPTO PTAB open docket (Patent Trial and Appeal Case Tracking System); cheap alert layers exist via Docket Alarm and Juristat.

### 62. Federal contract award feeds (USAspending/FPDS and DoD daily announcements)
- **Signal:** New federal contract obligations scraped from USAspending.gov/FPDS, plus the Pentagon's daily batch announcement of all contracts over $7.5 million posted at defense.gov around 5 pm ET each business day.
- **Trade:** Buy the winning contractor on the announcement — most potent for small/mid-cap defense and government-IT names (KTOS, LDOS, BAH, PLTR-type stocks) where one award is material — holding intraday to a few weeks; fade the losers of recompetes.
- **Mechanism:** Contract awards are direct, quantifiable revenue news released in structured government feeds hours to days before most investors read them; smaller firms reprice as the award works through wire coverage and analyst notes.
- **Evidence:** Quiver Quantitative's US Government Contracts dataset (built from the USAspending API, 700+ equities, daily since 2019) is distributed for live algo trading on QuantConnect, and Quiver publishes automated contract-award trade alerts on names like Palantir and Raytheon.
- **Access:** Free: USAspending.gov, SAM.gov, and defense.gov contract announcements are public; Quiver's cleaned, ticker-mapped feed costs roughly $10-40/month.

### 63. Real-time PACER docket scraping
- **Signal:** Automated monitoring of federal court dockets (bankruptcy courts especially) so that surprise Chapter 11 petitions, judges' rulings, settlements, and key motions are flagged the minute they hit PACER, before wire-service coverage.
- **Trade:** Trade the litigant's equity, distressed bonds, or options within minutes to days of a docket event — e.g., short/sell on a surprise bankruptcy petition or adverse fraudulent-conveyance ruling, go long on a favorable settlement filing.
- **Mechanism:** Court outcomes are often filed electronically minutes to hours before journalists summarize them; whoever parses the PDF first trades against stale prices, and in distressed situations a single ruling can move an equity double digits.
- **Evidence:** Reorg Research was built on exactly this: founder Kent Collier hired programmers in 2012 to sift PACER dockets and sell real-time filing alerts to hedge fund subscribers (documented by Forbes, 2016, 'In or Out of Bankruptcy, Reorg Is Watching'); Docket Alarm and Bloomberg Law dockets serve the same demand.
- **Access:** PACER itself is nearly free (10 cents/page, fees waived under $30/quarter) and CourtListener/RECAP alerts are free, so a DIY scraper is feasible; curated speed layers like Reorg are institutional at tens of thousands of dollars per year.

## Cultural & sociological indicators

### 64. World Cup Elimination Effect (sports sentiment)
- **Signal:** National soccer results — especially elimination-stage losses in the World Cup — captured in real time from public match results and mapped to the losing country's equity market.
- **Trade:** Short the losing nation's index futures or US-listed country ETF (e.g., EWZ, EWU, EWG, or Bovespa/DAX/FTSE futures) at the next open after an elimination loss; cover within 1-3 days. The effect is strongest in small-cap-heavy exposure and high-stakes matches.
- **Mechanism:** A national-team loss depresses local investor mood, triggering sentiment-driven selling that produces about a -49 basis point next-day abnormal return in the loser's market, with no symmetric gain for winners.
- **Evidence:** Edmans, Garcia & Norli, "Sports Sentiment and Stock Returns," Journal of Finance 62(4), 2007 — a landmark peer-reviewed study covering 39 countries and also finding effects for cricket, rugby, and basketball losses.
- **Access:** Free — match results are public instantly; country ETFs and index futures are available to any retail brokerage account.

### 65. Spotify Music Sentiment (song valence index)
- **Signal:** The stream-weighted average "valence" (musical positivity) of each country's Spotify Top-200 chart, measured as a weekly change — a real-time national mood gauge based on what people actually choose to listen to.
- **Trade:** Fade sentiment over a one-week horizon: high music-sentiment weeks coincide with same-week index gains and predict next-week reversals, tradable via index ETFs/futures (SPY, EWJ, EWU) and, per the paper, government bond exposure moving the opposite way.
- **Mechanism:** Song choice reveals investor mood; optimistic mood inflates equity prices temporarily, and the mispricing reverses the following week — classic sentiment-induced overreaction.
- **Evidence:** Edmans, Fernandez-Perez, Garel & Indriawan, "Music Sentiment and Stock Returns Around the World," Journal of Financial Economics 145 (2022), pp. 234-254, using 2017-2020 Spotify data across 40 countries.
- **Access:** Free/cheap — Spotify publishes Top-200 charts and historically exposed track valence via its Web API; an individual can replicate the weekly index with basic scripting (historical audio-feature datasets circulate freely).

### 66. Buttered Popcorn Index / weekend box office
- **Signal:** Weekend movie-theater attendance and high-margin concession (popcorn) sales, captured via Comscore weekend box-office estimates released Sunday mornings with finals on Monday.
- **Trade:** Buy or short exhibitor stocks AMC, CNK (Cinemark), IMAX and studio parents (WBD, CMCSA) at Monday's open when weekend grosses beat or miss tracking estimates; hold days to two weeks into earnings.
- **Mechanism:** Weekend grosses flow almost directly into exhibitor admissions and concession revenue, so a surprise weekend re-rates the stocks immediately; separately, Odeon Cinemas CEO Rupert Gavin documented that popcorn sales (not tickets) tracked financial markets, since cinema is counter-cyclical cheap escapism.
- **Evidence:** The July 2023 "Barbenheimer" weekend ($235M+ domestic) lifted theater chains, with AMC announcing its best admissions-revenue week in its 103-year history; box-office beats/misses moving AMC/CNK/IMAX on Mondays is a recurring documented pattern.
- **Access:** Free — Box Office Mojo and The Numbers publish Sunday estimates; the underlying real-time Comscore/EntTelligence feeds are institutional.

### 67. Cardboard Box Index (containerboard shipments)
- **Signal:** US corrugated box shipments, containerboard operating rates and inventories from Fibre Box Association data services, plus monthly containerboard price surveys (Fastmarkets RISI Pulp & Paper Week, KeyBanc's containerboard channel checks).
- **Trade:** Trade packaging/containerboard stocks — International Paper (IP), Packaging Corp (PKG), Smurfit Westrock (SW) — over days to weeks around monthly survey and price-index releases, or use weak shipments as an early macro short signal via XLB/XLI.
- **Mechanism:** Nearly every physical good ships in a corrugated box, so box orders front-run manufacturing and retail activity — FBA-tracked shipments peaked 3-6 months before the 2001 and 2008 recessions — and announced price hikes or cuts pass straight into producers' margins and share prices.
- **Evidence:** Fibre Box Association shipment data is the canonical series; KeyBanc analyst containerboard surveys and downgrades have repeatedly moved IP/PKG/WestRock (documented on Seeking Alpha, 2019), and IP fell over 6% on reported containerboard price declines in Feb 2026.
- **Access:** FBA and RISI feeds are paid institutional subscriptions, but headline shipment figures, AF&PA releases, and survey-driven analyst notes hit free financial media quickly enough for an individual to trade the reaction.

### 68. Lipstick Index
- **Signal:** Sales of small affordable cosmetics (lipstick and color cosmetics), tracked through NPD Group/Circana beauty point-of-sale panels and beauty-company disclosures.
- **Trade:** Go long mass-beauty stocks (ELF, ULTA, COTY, EL) into quarterly earnings when Circana data shows color-cosmetics sales accelerating while broader discretionary weakens; a days-to-weeks pre/post-earnings horizon.
- **Mechanism:** In downturns consumers substitute small indulgences for big-ticket luxuries, so lipstick units rise as overall discretionary spending falls — creating a divergence that favors cheap-beauty names over other consumer discretionary.
- **Evidence:** Coined by Estée Lauder chairman Leonard Lauder after the 2001 downturn; NPD reported lipstick sales up 48% year-over-year in 2022, and e.l.f. Beauty's CFO has publicly credited the "lipstick index" dynamic during its earnings run.
- **Access:** Circana's full POS panel is institutional-only, but its press releases, NielsenIQ analyses, and company earnings commentary are free and timely.

### 69. Men's Underwear Index
- **Signal:** Unit sales of men's underwear from NPD/Circana apparel retail panels — a normally rock-stable staples purchase whose declines reveal deferred replacement.
- **Trade:** Use dips and recoveries as a timing overlay on basic-apparel makers Hanesbrands (HBI) and Gildan (GIL) and on consumer staples-vs-discretionary pairs (XLP/XLY), positioned in the weeks around panel data releases and earnings.
- **Mechanism:** Underwear is the least visible garment, so replacement is the first spending deferred under genuine wallet stress; a sales dip therefore flags consumer distress before broader retail data, and a rebound flags early-cycle recovery.
- **Evidence:** Famously used by Fed Chairman Alan Greenspan (recounted by NPR's Robert Krulwich); US men's underwear sales measurably fell during 2007-09 and rebounded in 2010 with the recovery, and CNN Business revisited the indicator in 2022.
- **Access:** Cheap/free — Circana headline numbers and media coverage are free; the full apparel panel is an institutional subscription.

### 70. Champagne Shipment Indicator
- **Signal:** Monthly and annual champagne shipments to the US published by the Comité Champagne (CIVC) trade body — a pure celebration-spending gauge.
- **Trade:** Trade luxury-drinks equities — LVMH (MC.PA / LVMUY ADR), Pernod Ricard, Rémy Cointreau — over a few weeks around shipment releases and the holiday sell-through window, or pair against staples beverage names.
- **Mechanism:** Champagne is bought almost exclusively to celebrate raises, deals, and promotions, so shipment swings lead household income and confidence; collapsing shipments also directly hit the champagne houses' revenue.
- **Evidence:** NPR Planet Money's champagne-indicator analysis found US champagne consumption predicted next-year average household income with roughly 90% accuracy, and Planet Money documented the 2009 champagne bust with prices down 50-90% during the recession.
- **Access:** Free — CIVC publishes shipment statistics publicly, and the relevant luxury stocks trade as ADRs accessible to retail investors.

### 71. Stripper Index
- **Signal:** Strip-club takings and dancers' tip income, observed in real time by club workers and formalized in the revenue reports of RCI Hospitality Holdings (RICK), the only major listed US strip-club operator.
- **Trade:** Position in RICK shares or options ahead of its quarterly reports (days-to-weeks horizon) when the anecdote flow turns, or use the signal as an early short on consumer-discretionary ETFs (XLY).
- **Mechanism:** Tips are among the most discretionary cash outlays of higher-income patrons, so club spending drops before official consumer-spending data softens — making dancers' earnings a grassroots leading indicator.
- **Evidence:** A May 2022 viral tweet by dancer @botticellibimbo ("the strip club is sadly a leading indicator... we r in a recession") drew 120,000+ likes and coverage from Fortune/Yahoo Finance and others, with analysts pointing to RCI Hospitality's slowing 2022 metrics as the tradable confirmation.
- **Access:** Free — the anecdotal flow is on social media and RICK's SEC filings, monthly club/restaurant sales updates, and earnings calls are public.

### 72. Ramadan Effect
- **Signal:** The Islamic holy month of Ramadan, a recurring cultural mood window across Muslim-majority equity markets whose dates are known years in advance.
- **Trade:** Go long Muslim-majority country exposure — US-listed ETFs such as TUR (Turkey), EIDO (Indonesia), KSA (Saudi Arabia), or regional MENA funds — for the roughly four-week Ramadan window and exit around Eid.
- **Mechanism:** Ramadan fosters solidarity, optimism, and social identity that lifts local investor sentiment: across 14 Muslim countries from 1989-2007, stock returns during Ramadan were significantly higher and less volatile than in the rest of the year, with no liquidity deterioration.
- **Evidence:** Bialkowski, Etebari & Wisniewski, "Fast Profits: Investor Sentiment and Stock Returns during Ramadan," Journal of Banking & Finance 36 (2012), pp. 835-845, plus follow-up studies revisiting the anomaly.
- **Access:** Free — Ramadan dates are public far in advance and the country ETFs trade on US exchanges through any retail broker.

## Energy & industrial telemetry

### 73. Genscape power-line EMF sensors
- **Signal:** A network of thousands of patented ground sensors placed near high-voltage transmission lines measures the electromagnetic field radiating off the wires, which mathematical models convert into real-time megawatt flow — revealing individual power plant output, outages, and grid congestion every five minutes, long before ISOs or companies disclose anything.
- **Trade:** Power futures and financial transmission rights in PJM, ERCOT, and MISO (plus Henry Hub natural gas futures when big coal/nuclear units trip and gas burn must fill the gap); horizon is intraday to a few days around unannounced plant outages.
- **Mechanism:** An unplanned generator trip or transmission derate tightens regional supply within minutes; a trader who sees the EMF signature of a unit going offline can buy day-ahead/real-time power or gas before the price spike is public knowledge.
- **Evidence:** Genscape, founded in 1999 by two power traders, built the patented EMF monitor network covering 1,500+ EHV lines and sold the feed to power trading desks; documented by Energy Risk ('Pioneers: Genscape'), the Lane Report, and StateImpact NPR, and the business was acquired into Wood Mackenzie in 2019.
- **Access:** Institutional-only: Wood Mackenzie/Genscape PowerRT subscriptions run tens of thousands of dollars per year; there is no retail channel, though ISO public outage feeds are a free, slower approximation.

### 74. Cushing tank-farm infrared flyovers
- **Signal:** Helicopter and fixed-wing flyovers of the Cushing, Oklahoma crude hub photograph floating-roof tank positions and take infrared scans of fixed-roof tanks (oil holds heat differently than air), while ground EMF monitors under tank-farm power lines measure pumping activity — together yielding a barrel count of stored crude twice a week.
- **Trade:** WTI (CL) futures and WTI calendar spreads on NYMEX, positioned in the days between the private report and the Wednesday EIA weekly inventory release; also WTI-Brent spread trades when Cushing fills or drains sharply.
- **Mechanism:** Cushing is the WTI delivery point, so its inventory level directly drives the front of the WTI curve; knowing the build/draw days before the official EIA number lets subscribers position ahead of the report-driven price move.
- **Evidence:** Documented in detail by StateImpact NPR ('Oil Espionage: Traders Spy on Oklahoma Hub', 2012) and IBTimes ('Firm brings choppers, spy cameras to oil data game'); the product survives today as the Wood Mackenzie/Genscape Cushing Crude Oil Storage Report sold to banks, hedge funds, and oil traders.
- **Access:** Institutional-only: the Wood Mackenzie Cushing report is a high-priced trader subscription; individuals only see it second-hand when newswires cite the numbers.

### 75. Pipeline nomination flow data (Bentek-style EIA storage nowcasting)
- **Signal:** Daily scheduled gas volumes ('nominations') scraped from the electronic bulletin boards of all US interstate natural gas pipelines — roughly 26,000 receipt and delivery points — aggregated to estimate production, demand, and injections/withdrawals at 400+ storage facilities in near real time.
- **Trade:** Henry Hub natural gas futures and options (NG on NYMEX) positioned ahead of the Thursday 10:30am ET EIA Weekly Natural Gas Storage Report; horizon is one day to one week around each release.
- **Mechanism:** The EIA number is a survey published with a five-day lag, but pipeline nominations are posted daily and largely determine it; a trader whose flow model says the storage build will beat or miss consensus fades or rides the release-second price jump.
- **Evidence:** Bentek Energy pioneered the method and marketed that it 'accurately predicts the storage balance and weekly change many days in advance of EIA's release'; Platts acquired Bentek in 2011 and the flow-model approach is now standard on gas desks (S&P Global Platts Analytics, Criterion, Wood Mackenzie), with CFTC filings citing Bentek flow data.
- **Access:** Cheap-to-institutional: polished feeds (Platts Analytics, Criterion Research) are institutional, but the underlying pipeline bulletin boards are public by FERC rule, and a determined individual can scrape major pipelines' nomination pages for free.

### 76. VIIRS Nightfire satellite gas-flaring detection
- **Signal:** The VIIRS sensor on NOAA polar-orbiting satellites detects the infrared signature of natural gas flares every night worldwide; the Earth Observation Group (Colorado School of Mines) converts radiant heat into estimated flared volumes per site, accurate to roughly 10% in aggregate.
- **Trade:** WTI crude futures, Waha-hub natural gas basis swaps, and Permian producer equities (e.g., FANG, OXY, EOG) or XOP options over one-to-several-week horizons as flaring trends confirm or contradict official production data.
- **Mechanism:** In takeaway-constrained shale basins, new wells must flare associated gas, so flaring intensity is a near-real-time proxy for completion activity and crude output weeks ahead of lagged EIA/state production reports — rising Permian flaring signals supply growth (bearish crude, bearish local gas basis).
- **Evidence:** EOG's VIIRS Nightfire dataset is the standard source, used by SkyTruth's Permian flaring tracker and by commercial analytics firms Kayrros and Enverus, which sell flaring-based E&P activity monitors explicitly aimed at oil and gas traders.
- **Access:** Free at the raw level: EOG publishes VIIRS Nightfire flaring data with a lag and SkyTruth publishes Permian visualizations; the cleaned, trader-ready versions (Kayrros OpsTracker, Enverus) are institutional.

### 77. Sentinel-5P TROPOMI methane-plume detection
- **Signal:** The TROPOMI spectrometer on ESA's free Sentinel-5P satellite maps atmospheric methane daily; firms like Kayrros and GHGSat run plume-detection algorithms on it to pinpoint super-emitter leaks from specific pipelines, wells, and LNG facilities within a day or two of the event.
- **Trade:** European TTF and US Henry Hub natural gas futures when a detected plume reveals an unannounced pipeline outage or maintenance event; also short-horizon shorts (or put options) on specific E&P/midstream equities exposed to regulatory and ESG fallout from a documented leak. Horizon: days to a few weeks.
- **Mechanism:** A large methane plume on a trunk pipeline usually means gas flow has been interrupted (venting during unplanned maintenance), so the satellite reveals supply disruptions before the operator announces them; leak attribution to a listed company also front-runs headline and regulatory risk in its stock.
- **Evidence:** Kayrros publicly documented recurring leaks on the Russian Yamal-Europe pipeline (one at 93 tonnes/hour) using TROPOMI in 2020-21, covered by NPR and Reuters; Kayrros sold methane and asset-observation analytics to energy traders and equity funds before being acquired by Energy Aspects in 2026.
- **Access:** Raw Sentinel-5P data is free from ESA's Copernicus program (heavy processing required); actionable plume alerts from Kayrros/GHGSat are institutional subscriptions.

### 78. NRC daily Power Reactor Status Report
- **Signal:** Every US nuclear reactor must report its operating power level (0-100%) to the Nuclear Regulatory Commission between 4-8am daily, and the NRC publishes the full table free each morning — the fastest public telemetry on roughly 95 GW of baseload generation.
- **Trade:** Henry Hub natural gas futures (NG) and regional power futures (PJM, ERCOT) bought intraday when a large reactor unexpectedly scrams or extends a refueling outage; horizon is intraday to two weeks while replacement gas-fired generation runs.
- **Mechanism:** A 1,000+ MW reactor going offline forces gas plants to pick up the load, adding roughly 150-200 MMcf/d of gas demand per unit, tightening the weekly storage balance and lifting both power and gas prices — the free 9am report often front-runs company press releases.
- **Evidence:** EIA built its 'Status of US Nuclear Outages' tool directly on this NRC feed and daily gas-market commentary from NGI and Platts routinely attributes price moves to reactor outages; retail-facing dashboards like NukeGryd exist specifically to pair NRC status data with gas prices for traders.
- **Access:** Completely free: nrc.gov posts the Power Reactor Status Report every morning and the EIA nuclear outage dashboard visualizes it — one of the few genuinely free real-time supply telemetry feeds an individual can trade on.

### 79. SAVANT satellite copper-smelter index
- **Signal:** Earth-i's SAVANT service tasks 20+ high-resolution satellites over roughly 90% of the world's copper smelters and uses machine vision on thermal and visual cues (stack plumes, activity signatures) to classify each smelter as active or shut down, publishing a 0-1 global activity index daily.
- **Trade:** LME and COMEX copper futures (HG) and copper miner equities/ETFs (FCX, COPX) on a days-to-weeks horizon, positioning when the index shows unannounced smelter shutdowns (bullish refined copper) or restarts (bearish).
- **Mechanism:** Smelter outages remove refined copper supply, but company disclosure is often delayed by days or absent entirely in China; satellite detection of a cold smelter gives subscribers the supply shock before the market prices it.
- **Evidence:** Launched October 2019 by Earth-i with commodities broker Marex Spectron and the European Space Agency explicitly to 'revolutionise copper trading'; monthly SAVANT readings were regularly reported by Reuters ('Global copper smelting surges, satellite data shows').
- **Access:** Institutional: full smelter-level daily data is a paid Earth-i/Marex subscription, but the headline monthly index was distributed free through press coverage, which an individual can trade on with a lag.

### 80. IIR Energy phone-verified refinery outage database
- **Signal:** Industrial Info Resources (IIR Energy) has phone-called refineries since 1983 to verify unit-level outages — FCCs, hydrocrackers, cokers — tracking 80,000+ offline events a year and publishing offline-capacity forecasts by trading region (e.g., the R180 report and IIR/DOE weekly comparison).
- **Trade:** RBOB gasoline and ULSD heating oil futures, gasoline crack spreads (RBOB vs Brent/WTI), and refiner equities (VLO, MPC, PBF) intraday to a few weeks around unplanned unit outages and turnaround-season surprises.
- **Mechanism:** An unplanned FCC outage cuts gasoline yield immediately while crude demand at the plant falls, widening product cracks within hours; knowing outage scope and expected duration before or as headlines hit lets traders position in cracks ahead of the supply response.
- **Evidence:** A GAO report (GAO-09-87) documented that refinery outages move petroleum product prices and that no federal outage-reporting requirement exists — making private trackers the market's information source; IIR markets its unit-level feed explicitly for 'energy traders monitoring crack spread drivers,' and its outage figures are cited constantly in Reuters and Bloomberg product-market coverage.
- **Access:** Institutional subscription for the live database; individuals get delayed fragments free via newswire stories quoting IIR and via EIA's semiannual refinery outage reports.

### 81. Li Keqiang index (China electricity and rail-freight proxy)
- **Signal:** A composite of Chinese electricity consumption (40%), rail freight volume (20%), and bank loan growth (40%) — the three physical indicators then-premier Li Keqiang privately told the US ambassador he trusted over 'man-made' provincial GDP figures; electricity output is the core industrial-activity telemetry, published monthly by China's NBS.
- **Trade:** COMEX/LME copper, SGX iron ore futures, AUD/USD, and China equity ETFs (FXI, KWEB) in the days-to-weeks window after monthly NBS electricity and rail-freight releases diverge from the official GDP narrative.
- **Mechanism:** Power generation and rail cargo are hard to fabricate and track heavy-industry activity in real time, so when they undershoot official GDP, commodity demand from China is weaker than headline data implies — a sell signal for industrial metals and the commodity-linked AUD before consensus forecasts adjust.
- **Evidence:** Created by The Economist in 2010 from a leaked 2007 State Department cable; its use by commodity and currency investors is documented by The Hedge Fund Journal ('China's Li Keqiang Index'), St. Louis Fed research on Chinese GDP proxies, and CSIS's Big Data China project.
- **Access:** Free: all three components are published monthly by China's National Bureau of Statistics and mirrored on free platforms like MacroMicro, so any individual can reconstruct the index.

## Agriculture, food & commodities ground truth

### 82. Satellite crop-yield models (Descartes Labs / EarthDaily)
- **Signal:** Machine-learning models process daily satellite imagery (NDVI/vegetation indices) plus weather data over the entire US Corn Belt to estimate corn and soybean yields weekly, weeks before official USDA numbers.
- **Trade:** Long/short CME corn (ZC) and soybean (ZS) futures and options positioned days-to-weeks ahead of monthly WASDE and Crop Production releases, betting on the gap between the satellite estimate and the consensus/USDA number.
- **Mechanism:** Yield drives new-crop supply; a satellite estimate that diverges from USDA's forecast predicts the direction of the report-day surprise, so holders of the private estimate front-run the repricing that occurs when USDA converges toward reality.
- **Evidence:** Descartes Labs published 2015-16 corn forecasts within about 1 bushel/acre of USDA's final number, then took the feed private after partnering with grain giant Cargill (which invested in its $30M Series B); its methodology is documented in Nature Scientific Reports (2020) county-scale maize work.
- **Access:** Institutional-only for the polished feeds (EarthDaily/Descartes, SatYield sell to funds and trading houses); individuals can crudely replicate with free NASA MODIS/Sentinel imagery and USDA NASS Crop Progress data.

### 83. Pro Farmer Midwest Crop Tour (boots-in-the-field scouting)
- **Signal:** Every August ~100 scouts physically measure ear counts, grain length, and soybean pod counts in thousands of fields across seven states covering ~70% of US corn/soy output, releasing state results each evening and a national yield estimate Friday.
- **Trade:** CME corn and soybean futures (and short-dated options) during tour week in late August; positions held intraday to about two weeks as the market digests each nightly leg result versus USDA's August yield.
- **Mechanism:** Ground-truth ear and pod counts that come in below USDA's estimate imply tighter supply, and futures reprice the next session; the 2024 tour's 182.7 bu/acre corn estimate, nearly 6 bu below USDA's August figure, helped push grains to higher weekly closes.
- **Evidence:** Run since 1993 by Pro Farmer; AgWeb and Reuters document tour results moving corn/soy futures, e.g. 'Will Pro Farmer's Lower Corn and Soybean Yield Estimates Further Boost Prices?' (AgWeb) and Pro Farmer's own market commentary attributing rallies to tour findings.
- **Access:** Cheap: a Pro Farmer membership costs a few hundred dollars a year, nightly leg results are reported free by AgWeb/Reuters within hours, and scouts live-post samples on X during the tour.

### 84. Florida freeze forecasts vs. frozen orange juice futures
- **Signal:** National Weather Service temperature forecasts and forecast errors for the central Florida citrus belt, where nearly all US orange production is concentrated; sub-freezing surprises destroy fruit.
- **Trade:** ICE frozen concentrated orange juice (FCOJ) futures and options, traded intraday to a few days around winter cold-front forecasts, with strongly nonlinear payoffs when forecasts approach 32°F.
- **Mechanism:** Because supply is geographically concentrated, an unexpected hard freeze wipes out a measurable share of the crop; futures reprice within hours of forecast revisions, and returns are predictable around freezing temperatures because damage is nonlinear below 32°F.
- **Evidence:** Richard Roll's classic 'Orange Juice and Weather' (American Economic Review, 1984) documented the FCOJ-forecast link, and Boudoukh, Richardson, Shen & Whitelaw (Journal of Financial Economics, 2007) showed FCOJ returns are strongly predictable from temperature at the freezing boundary.
- **Access:** Free: NWS/NOAA point forecasts and frost advisories for central Florida are public; FCOJ futures are tradable through any retail futures broker, though liquidity is thin.

### 85. Ivory Coast cocoa port arrivals (weekly truck deliveries)
- **Signal:** Weekly tallies of cocoa tonnage delivered by farmers to the ports of Abidjan and San Pedro, compiled by exporters and circulated every Monday, cumulated against the prior season's pace in the ~40%-of-world-supply origin.
- **Trade:** ICE New York (CC) and London cocoa futures and options, traded on the Monday release and held days-to-weeks as the cumulative deficit or surplus versus last season becomes clear.
- **Mechanism:** Arrivals are the closest thing to a real-time harvest meter for West Africa; arrivals running 25-35% behind the prior year in late 2023/early 2024 signaled a huge deficit and fed the rally that took cocoa from ~$4,200 to over $11,000/tonne, with individual weekly prints producing sharp single-day moves.
- **Evidence:** Barchart/Nasdaq market wraps repeatedly headline it ('Cocoa Prices Sharply Higher as Ivory Coast Cocoa Port Arrivals Slow'), and Reuters publishes the exporter-estimated arrivals figure weekly; the 2024 record rally was substantially narrated through this dataset.
- **Access:** Effectively free: the headline weekly number is carried by Reuters, Barchart and trade press within hours; the underlying exporter estimates circulate in subscriber notes but the tradable print is public.

### 86. USDA APHIS avian-flu (HPAI) outbreak confirmations vs. egg producers
- **Signal:** USDA APHIS publishes each confirmed highly pathogenic avian influenza detection in commercial flocks, including state, farm type, and bird count, effectively announcing how many millions of laying hens will be culled; paired with Urner Barry wholesale egg price quotes.
- **Trade:** Equities and options of egg/poultry names — Cal-Maine (CALM), Vital Farms (VITL), Tyson (TSN) — traded intraday to a few weeks after large layer-flock confirmations; direction depends on whether the affected farm belongs to the listed producer (supply-loss negative) or a competitor (price-spike positive).
- **Mechanism:** Each layer culling mechanically tightens national egg supply for the 6-9 months it takes to repopulate a flock, spiking Urner Barry wholesale prices; Cal-Maine's average selling price and revenue roughly doubled during the 2022-23 outbreak, while confirmations at its own or nearby facilities knocked the shares down.
- **Evidence:** Documented episodes: Cal-Maine shares fell in January 2023 amid outbreak headlines (The Poultry Site), its FY2023 revenue doubled on outbreak-driven egg prices (Agriculture Dive), and the 2022-25 epizootic destroyed over 100 million layers per USDA/CRS reporting.
- **Access:** Free: APHIS posts confirmations on its public website (scrapeable), and USDA AMS publishes egg market reports; the premium Urner Barry feed is a paid subscription but not required for the event trade.

### 87. European natural-gas prices as a fertilizer plant-outage tripwire
- **Signal:** TTF natural-gas futures plus company curtailment announcements: gas is 70-80% of the cash cost of ammonia, so spiking European gas prices predictably force nitrogen-fertilizer plant shutdowns, tracked plant-by-plant by price agencies like Argus and ICIS.
- **Trade:** Fertilizer equities and options — long low-cost US producers CF Industries (CF) and Nutrien (NTR), short/avoid gas-exposed Yara (YAR.OL) — plus CME Urea (Granular) FOB US Gulf futures, over days to a few weeks around curtailment news.
- **Mechanism:** When TTF spiked in September 2021, CF halted its Billingham and Ince UK plants within days, Yara followed with ammonia curtailments, and nitrogen prices roughly tripled (UK ammonium nitrate £281/t to £785/t within a year); US producers paying cheap Henry Hub gas captured windfall margins, lifting CF shares.
- **Evidence:** Well-documented September 2021 episode: CF Industries' September 15, 2021 UK shutdown announcement (World Fertilizer, company press releases) and Yara's subsequent curtailments (Bloomberg), with the gas-to-ammonia cost linkage documented by CF itself.
- **Access:** Free to cheap: TTF prices and company press releases are public in real time; the granular plant-outage trackers (Argus, CRU, ICIS/Green Markets) are institutional subscriptions, and the urea futures need a full-service futures broker.

### 88. USDA report-release microstructure ('fast money' around WASDE)
- **Signal:** The 12:00 ET release of WASDE/Crop Production reports, where machine-readable parsing speed and pre-report positioning are the edge; until August 2018, journalists in the USDA media lockup could transmit pre-written stories at the release instant, handing HFTs a microsecond head start.
- **Trade:** CME corn, soybean and wheat futures and short-dated options traded in the seconds-to-hours after release; a slower variant trades report-day volatility itself via straddles/strangles entered before the noon print.
- **Mechanism:** WASDE contains market-moving supply/demand revisions and grain futures fully reprice within seconds; whoever parses the surprise fastest (or holds positions matching leaked/anticipated revisions) captures the jump, which is why USDA killed the media lockup after concluding the microsecond advantage was a genuine market edge.
- **Evidence:** USDA's own August 1, 2018 policy change ending media lockup transmission cited microsecond trading advantages; Huang (2023, American Journal of Agricultural Economics, 'Fast money around Federal statistics releases') documents high-frequency trading behavior around these announcements.
- **Access:** The reports themselves are free to everyone simultaneously at usda.gov; competing on latency is institutional-only (colocation, machine-readable feeds), but report-day option-volatility trades are open to any retail futures-options account.

### 89. Cargo-surveyor palm oil export estimates (ITS / AmSpec)
- **Signal:** Independent cargo surveyors Intertek Testing Services and AmSpec physically inspect vessel loadings at Malaysian ports and publish estimated palm-oil export tonnage for the 1st-10th, 1st-15th, 1st-20th, 1st-25th and full month — a demand read published roughly every five days.
- **Trade:** Bursa Malaysia crude palm oil futures (FCPO) traded the same session the estimates drop (moves often hit at the midday break), or proxied via CME soybean oil (ZL) futures given tight veg-oil substitution; horizon intraday to two weeks.
- **Mechanism:** Export pace is the highest-frequency demand indicator for the world's second-largest palm producer; stronger-than-expected loadings imply faster stock drawdown ahead of the monthly MPOB report, and wire wraps routinely attribute 1-2% same-day FCPO moves to the ITS/AmSpec prints (e.g. +1.49% on strong export data).
- **Evidence:** Reuters, Bloomberg and Business Recorder daily palm-oil wraps explicitly cite ITS and AmSpec figures as the day's price driver; the two surveyors' occasional 100,000-tonne disagreements are themselves market events discussed in trade press.
- **Access:** Cheap: the surveyor headline numbers hit Reuters and free outlets like Business Recorder within hours of release; FCPO is tradable by individuals through international futures brokers, and ZL through any US retail futures account.

### 90. Peruvian anchovy biomass surveys and quota decisions vs. feed-protein prices
- **Signal:** IMARPE (Peru's marine institute) research-cruise biomass surveys and juvenile-fish counts that determine whether PRODUCE opens, delays, or cancels the anchovy season in the fishery supplying 20-30% of world fishmeal; the entire ~850-vessel fleet's AIS activity is also publicly trackable via Global Fishing Watch.
- **Trade:** CME soybean meal futures (ZM) long over one-to-several weeks when a season is delayed or canceled, plus equities of aquafeed-cost-exposed salmon farmers (Mowi, SalMar on Oslo) on the short side.
- **Mechanism:** A canceled or short anchovy season slashes fishmeal supply, and feed compounders substitute toward soybean meal, lifting ZM demand and prices while raising aquaculture feed costs; the 1972-73 El Niño anchoveta collapse famously helped drive soybean meal to record highs, establishing the linkage traders still monitor.
- **Evidence:** Documented episodes: IMARPE's recommendation led Peru to cancel the 2014 second season at a ~$1 billion industry cost (IntraFish), El Niño-driven 2023 cancellations again threatened global fishmeal supply (SeafoodSource), and Peru put its full fleet's satellite tracking data on Global Fishing Watch in October 2018.
- **Access:** Free: IMARPE/PRODUCE survey results and quota announcements are public (in Spanish, published in Peru's official gazette and trade press), and Global Fishing Watch AIS maps are free; premium fishmeal price assessments (Undercurrent, Expana) are paid but optional.

## Tech supply chain & internet infrastructure

### 91. Taiwan MOPS monthly revenue disclosures (Apple/NVIDIA supply chain)
- **Signal:** Taiwan-listed companies must file unaudited monthly revenue by the 10th of the following month on the TWSE's MOPS portal. Aggregating Hon Hai (Foxconn), Largan Precision, TSMC, Quanta and other suppliers gives a near-real-time read on Apple iPhone builds and NVIDIA AI-server assembly a quarter before US earnings.
- **Trade:** AAPL and TSM ADR shares/options, NVDA and ODM-exposed names, positioned in the days around each 10th-of-month release; horizon of days to two weeks.
- **Mechanism:** A large share of Apple's and NVIDIA's hardware bill-of-materials flows through Taiwanese suppliers, so supplier monthly sales mechanically lead the US customers' quarterly revenue; surprises (e.g., Largan lens sales collapsing or Hon Hai's cloud/networking segment jumping ~40% YoY) reprice the US names before guidance.
- **Evidence:** Bloomberg documented Hon Hai's share trading being halted ahead of its disclosures (July 2025), and its monthly record revenues are covered as AI-demand signals (Focus Taiwan, GuruFocus); MacroMicro publishes an 'Apple Taiwanese Suppliers' index built from these filings, and sell-side Apple checks lean on Largan's monthly numbers.
- **Access:** Free — every filing is public on mops.twse.com.tw (English mirror available) and on supplier IR pages; an individual can scrape or read them the evening they drop, no vendor needed.

### 92. DRAM spot prices (DRAMeXchange / TrendForce)
- **Signal:** Daily spot-market quotes for benchmark DRAM chips (e.g., DDR4 8Gb, DDR5 16Gb) and NAND wafers traded in the Asian gray market, published by TrendForce's DRAMeXchange, plus the spot-versus-contract price spread.
- **Trade:** MU stock and options (and SK Hynix/Samsung locally, SOXX for beta) accumulated over days to weeks ahead of Micron's fiscal-quarter earnings and mid-quarter updates.
- **Mechanism:** Spot prices turn before quarterly contract prices, which set Micron's realized ASPs and gross margin; a spot inflection (e.g., DDR4 8Gb hitting a record ~$20, +25% in a month, or spot up 52% since January) shows up in DRAMeXchange data weeks to months before it hits guidance.
- **Evidence:** Seeking Alpha's 'Micron: Spot DRAM Prices Are A Leading Indicator' formalized the relationship; DRAMeXchange prints are routinely the stated catalyst in MU coverage (24/7 Wall St., Investing.com earnings previews) and in the 2025-26 memory rally narrative.
- **Access:** Cheap-to-institutional — full DRAMeXchange/TrendForce feeds are paid subscriptions aimed at industry and funds, but daily headline spot moves are republished free by financial media and on TrendForce's site, so a retail trader can track the trend at no cost.

### 93. Susquehanna semiconductor lead-time tracker
- **Signal:** Monthly measurement of the gap between chip order and delivery across product categories (MCUs, power management, analog), compiled by Susquehanna Financial Group analyst Chris Rolland from distributor data.
- **Trade:** SMH/SOXX ETF and analog/MCU names (TXN, MCHP, ON, ADI) traded on the monthly release; days-to-weeks horizon, long when lead times stretch, defensive when they compress.
- **Mechanism:** Stretching lead times (e.g., to a record ~27 weeks in 2022, or the recent jump to 19.4 weeks) mean demand exceeds supply, implying pricing power and estimate revisions; shrinking lead times flag double-ordering unwinds and inventory corrections before they appear in company guidance.
- **Evidence:** Susquehanna's tracker is a named, widely covered product — Bloomberg, Taipei Times and Seeking Alpha report each month's reading ('lead times rose five days month-over-month to 19.4 weeks'), and semis regularly trade on the headline.
- **Access:** Institutional-only at source (Susquehanna research clients), but the headline number leaks into free press within hours each month, so individuals can trade the same datapoint with a small delay.

### 94. Silicon Data H100 GPU rental price index (SDH100RT)
- **Signal:** A daily benchmark of the spot price to rent an NVIDIA H100 for one GPU-hour, crunched from ~3.5 million observations across 30+ neo-clouds, hyperscalers and rental platforms, published by Silicon Data with Bloomberg ticker SDH100RT.
- **Trade:** NVDA and CoreWeave (CRWV) shares/options, and neo-cloud/AI-infrastructure baskets (SMCI, VRT), over one-to-several-week horizons; Polymarket even lists event contracts that settle directly on the index level.
- **Mechanism:** GPU rental spot rates are the real-time clearing price of AI compute: a sliding rate (H100s falling from ~$8 toward ~$2.50/hr) signals oversupply and margin pressure at GPU clouds and softer future accelerator orders, while a 10% monthly spike signals compute scarcity supporting NVDA pricing.
- **Evidence:** Silicon Data (founded by ex-Bloomberg quant Carmen Li) launched SDH100RT as the first daily GPU rental index explicitly for price discovery and trading; Carmen Li's 'A Correction in Compute' documented the H100 rental price decline, and Polymarket runs markets keyed to the index's thresholds.
- **Access:** Cheap/free for the signal — daily index levels are published on silicondata.com and quoted in press; the full granular feed and Bloomberg integration are institutional subscriptions.

### 95. South Korea first-20-days semiconductor exports
- **Signal:** The Korea Customs Service publishes export data for the first 20 days of every month (around the 21st), with a semiconductor line item — the earliest official hard datapoint anywhere on global memory-chip demand.
- **Trade:** KOSPI 200 futures, the EWY ETF, and US memory proxies (MU, and Samsung/SK Hynix locally) traded same-day to a few days after the release; US semis desks also use it as an overnight gap signal.
- **Mechanism:** Korea's chip exports (Samsung + SK Hynix shipments, >$20B in 20 days) lead the global memory cycle; an upside surprise reprices Korean chipmakers at the Seoul open, and the move propagates into US memory and AI names the same trading day.
- **Evidence:** Well-documented market episodes — on Aug 11, 2026 Korean stocks reversed losses and rallied on blockbuster early-August chip export data led by Samsung (+4%) and SK Hynix (BigGo Finance/TechTimes coverage); Atrani Capital's 'Why Seoul Has Become the Opening Bell for the Chip Trade' describes NY/London funds checking it pre-market, and CEIC carries the series.
- **Access:** Free — released publicly by Korea Customs Service and instantly wired by Reuters/Bloomberg and TradingEconomics; any individual can trade the print.

### 96. CDN and internet-outage telemetry (Downdetector, ThousandEyes, Cloudflare Radar)
- **Signal:** Real-time outage-attribution data: crowdsourced failure reports (Downdetector), BGP/traceroute monitoring (Cisco ThousandEyes) and traffic telemetry (Cloudflare Radar) that identify within minutes which CDN or cloud provider is behind a mass website outage and how fast it recovers.
- **Trade:** Intraday shares/options in the implicated infrastructure stock — FSLY, NET, AKAM — entered in the minutes after attribution and managed through the recovery; also short-dated puts on the vendor if recovery stalls.
- **Mechanism:** When Reddit, Amazon and gov.uk all go dark, the stock impact lands entirely on whichever provider is attributed; speed of recovery flips the sign — Fastly fixed its June 8, 2021 global outage in 49 minutes, and the episode revealed marquee unknown customers, so early attribution let traders buy the panic dip.
- **Evidence:** The Fastly June 8, 2021 outage is a canonical episode: FSLY dipped pre-market, then closed up ~11-13% and gained 26% that June as the fast recovery was parsed in real time (Nasdaq, Schaeffer's, Motley Fool); the same outage later caused a Q2 revenue miss, giving a second tradable leg.
- **Access:** Free — Downdetector, Cloudflare Radar and ThousandEyes' public outage feeds cost nothing; the edge is reaction speed, not data cost.

### 97. Ethereum network hashrate as a GPU demand proxy
- **Signal:** Public blockchain data on Ethereum's total hashrate and mining profitability, converted into an estimate of how many gaming GPUs miners were buying — a shadow demand channel Nvidia itself did not break out.
- **Trade:** NVDA and AMD stock and options over multi-week horizons around hashrate/crypto-price inflections (the playbook of 2017-18 and 2020-21: long as hashrate accelerated, short into mining collapses).
- **Mechanism:** Each increment of network hashrate maps to a known number of cards at a known hash-per-card, so hashrate growth times ASP yields mining GPU revenue vs. consensus; when mining economics broke (mid-2018, and again post-Merge), a channel glut of used GPUs crushed Nvidia's gaming segment.
- **Evidence:** RBC's Mitch Steves published hashrate-derived estimates — ~$2.75B of crypto-driven Nvidia revenue from April 2017 to July 2018 and $100M+ quarterly Ampere sales to miners (CoinDesk, Trustnodes, wccftech coverage); the SEC later fined Nvidia $5.5M in 2022 for inadequate disclosure of crypto-mining's contribution, confirming the hidden demand was material.
- **Access:** Free — Etherscan and mining-profitability calculators expose the raw data; the conversion arithmetic is public in Steves' widely reported notes. (The Ethereum channel died with the 2022 Merge, but the template now applies to other proof-of-work coins and GPU demand proxies.)

### 98. GitHub developer-activity datasets for open-source software stocks
- **Signal:** Commits, contributors, pull requests, forks and star velocity on the public repositories of listed open-source companies (MongoDB, Elastic, GitLab, Confluent) and of the frameworks that drive their adoption, harvested via the GitHub API and packaged by alt-data vendors.
- **Trade:** MDB, ESTC, GTLB, CFLT, DDOG stock and options positioned over the weeks into earnings, using developer-traction acceleration or deceleration as the lead on usage-based revenue.
- **Mechanism:** For open-source business models, public developer engagement precedes commercial conversion: star/contributor acceleration signals adoption that shows up in consumption revenue one to two quarters later, while stalling activity flags decelerating net-revenue retention before management admits it.
- **Evidence:** Thinknum sells a GitHub activity dataset (contributors, commits, PRs per company) to hedge funds at $20k-200k/yr; the signal has also been formally studied — Angara's 2025 SSRN paper 'Developer Activity as an Indicator' tested GitHub commit frequency against short-term stock moves in 15 tech firms (finding public-repo commits alone insufficient, a documented negative result), while investment-research shops like Paradox Intelligence document star-velocity screens used in 2023-25.
- **Access:** Free for do-it-yourself (GitHub API and GH Archive are open); cheap-to-institutional for the curated version via Thinknum and similar vendors.

### 99. Newly-registered domains, WHOIS and certificate-transparency logs
- **Signal:** Feeds of freshly registered domains and newly issued TLS certificates (crt.sh, ICANN WHOIS, DomainTools/Farsight DNSDB passive DNS with 300B+ records) that reveal unannounced products, partnerships and staging infrastructure — and, in reverse, expose fake announcements whose supporting domains are days old.
- **Trade:** Event-driven single-name trades: fade hoax-driven spikes in the affected asset within minutes (the Litecoin episode reversed inside an hour), or position short-dated options ahead of product events telegraphed by cert/subdomain leaks; intraday-to-days horizon.
- **Mechanism:** Companies must register domains and obtain certificates before launches, so CT logs leak internal project names pre-announcement (documented by ACM's 'When Certificate Transparency Is Too Transparent'); conversely, a press release citing a month-old, unresolving domain is machine-detectably fraudulent before the issuer denies it.
- **Evidence:** The Sept 13, 2021 Walmart-Litecoin hoax is the canonical episode: LTC spiked ~30% on a fake GlobeNewswire release, and the tell — 'walmart-corp.com' registered one month earlier with no website — was surfaced from domain-registration data as the spike was fading (CoinDesk, Newsweek, Bloomberg); DomainTools/Farsight commercializes exactly this passive-DNS/CT data.
- **Access:** Free for individuals via crt.sh, CertStream and WHOIS lookups; the institutional-grade historical passive-DNS database (Farsight DNSDB via DomainTools) is a paid enterprise product.

## Exotic, fringe & cross-domain

### 100. Benter-style Hong Kong parimutuel handicapping model
- **Signal:** A multinomial-logit model estimating each horse's true win probability from ~130 variables (past performances, jockey and trainer records, weight carried, track condition), compared in real time against the live tote-board odds to find horses the betting public has mispriced.
- **Trade:** Late bets into Hong Kong Jockey Club parimutuel win/place and exotic pools (e.g., the Triple Trio), placed minutes before post time — a pure intraday horizon; today the same edge is expressed on the Betfair exchange.
- **Mechanism:** Tote odds embed systematic crowd biases (favorite-longshot bias, overweighting recent form); when the model's probability exceeds the odds-implied probability, the bet has positive expected value, and betting seconds before close prevents the pool from moving against you.
- **Evidence:** Bill Benter, profiled in Bloomberg Businessweek's 2018 feature 'The Gambler Who Cracked the Horse-Racing Code' (Kit Chellel), made close to $1 billion this way; Benter published the methodology in his 1994 paper 'Computer Based Horse Race Handicapping and Wagering Systems: A Report'.
- **Access:** Free-to-cheap: HKJC publishes full race data and live odds on its website, and Betfair provides an API; the barrier is modeling skill and competing syndicates, not data cost.

### 101. Election-night prediction-market odds as a futures-leading input
- **Signal:** Real-time candidate win probabilities from Betfair, PredictIt, Polymarket and Kalshi during debates and vote counts, which update minutes-to-hours ahead of official results and media calls.
- **Trade:** E-mini S&P 500 futures, Mexican peso futures, VIX futures and country ETFs traded overnight during debates and election night — an intraday-to-overnight horizon.
- **Mechanism:** Election outcomes shift expected policy, so equity, FX and volatility markets reprice continuously as win probabilities move; the betting odds move first, letting a trader front-run the futures repricing (in 2016 a 6-point Clinton odds move during the first debate coincided with a 0.71% S&P futures rally).
- **Evidence:** Wolfers & Zitzewitz's 2016 Brookings paper 'What Do Financial Markets Think of the 2016 Election?' quantified the Betfair-odds-to-S&P-futures link; Bloomberg (Oct 2024) documented Wall Street desks, including JPMorgan analysts, building election 'game plans' around Polymarket odds.
- **Access:** Free: Polymarket, Kalshi, PredictIt and Betfair all publish live odds and public APIs; trading the odds venues themselves is now legal for US retail on Kalshi.

### 102. World Cup elimination-loss sentiment signal
- **Signal:** National soccer team results in World Cup and continental-championship elimination games, captured from free public match feeds the evening before the local market opens.
- **Trade:** Short the losing country's equity index next day via country ETFs (EWU, EWG, EWI, EWZ) or local index futures; a one-day horizon, closed by the following session.
- **Mechanism:** An elimination loss depresses national mood and investor risk appetite, producing an average -49 basis point next-day abnormal return on the loser's index; the effect is asymmetric (wins barely register) and stronger in small-cap and high-stakes games.
- **Evidence:** Edmans, García & Norli, 'Sports Sentiment and Stock Returns', Journal of Finance 2007, across 39 countries and 1,100+ matches, with parallel effects found for cricket, rugby and basketball losses.
- **Access:** Free: match schedules and results are public; the only requirement is access to the relevant country ETF or index future.

### 103. Bookmaker odds versus listed football-club shares
- **Signal:** Fixed betting odds posted by British bookmakers on upcoming matches of stock-exchange-listed clubs — odds that are statistically excellent predictors of match outcomes but are not impounded into the clubs' share prices before kickoff.
- **Trade:** Shares of listed clubs — Manchester United (NYSE: MANU), Borussia Dortmund (XETRA: BVB), Juventus and Ajax — positioned across the match weekend and unwound within days, including fading the post-win sentiment overreaction.
- **Mechanism:** Club stocks underreact to the ex-ante information in odds and then overreact to the realized result on sentiment-driven small-investor flow, so odds-implied expectations forecast the size and reversal of post-match abnormal returns and volume.
- **Evidence:** Palomino, Renneboog & Zhang, 'Information Salience, Investor Sentiment, and Stock Returns: The Case of British Soccer Betting', Journal of Corporate Finance 2009, documented the pattern on London-listed clubs.
- **Access:** Free: bookmaker and exchange odds are public on aggregator sites (OddsPortal, Betfair), and the club stocks trade on ordinary retail brokerage accounts.

### 104. Sudden-death and obituary monitoring of key insiders
- **Signal:** News-wire, obituary and 8-K scanning for unexpected deaths of CEOs, founders and controlling shareholders, scored against the executive's age, tenure and entrenchment.
- **Trade:** Single-name stock and short-dated options in the affected company, from the event day out to a few weeks; direction depends on the executive — short founder-led firms losing key talent, long firms shedding an entrenched or underperforming boss.
- **Mechanism:** The market instantly reprices the key-person premium or entrenchment discount: founder deaths draw negative abnormal returns while deaths of entrenched professional CEOs draw positive ones, and anticipated estate-driven share sales add a supply overhang to controlling-stake names.
- **Evidence:** Johnson, Magee, Nagarajan & Newman (Journal of Accounting & Economics, 1985) on 53 sudden executive deaths; Salas (Journal of Banking & Finance, 2010) on entrenchment and death reactions; Nguyen & Nielsen (JFE 2010) used director sudden deaths the same way; Quigley et al. (Strategic Management Journal, 2017) extended the sample to 1950-2009.
- **Access:** Free: obituaries, local news, company 8-Ks and wire services are public; speed is the edge, so some desks automate the scraping.

### 105. Super Bowl advertiser-roster attention trade
- **Signal:** The publicly announced roster of companies airing Super Bowl commercials, plus the broadcast itself — a scheduled, calendar-known mass-attention event hitting 100M+ viewers; a cousin of the famous (and spurious) Koppett 'Super Bowl Indicator' that maps the winning conference to the year's market direction.
- **Trade:** Long the publicly traded advertisers (historically Anheuser-Busch, PepsiCo, GM and similar) into and through game week via shares or short-dated calls, holding days around the broadcast.
- **Mechanism:** Barber-Odean-style attention effects: the ads put the tickers in front of tens of millions of households, generating measurable small-investor net buying pressure and positive abnormal returns in the days surrounding the game.
- **Evidence:** Fehle, Tsyplakov & Zdorovtsov, 'Can Companies Influence Investor Behaviour Through Advertising? Super Bowl Commercials and Stock Returns', European Financial Management 2005, found positive abnormal returns driven by small-trade buying; the annual-horizon Super Bowl Indicator itself was formally studied in Kester's 'What Happened to the Super Bowl Stock Market Predictor?', Journal of Investing 2010.
- **Access:** Free: ad rosters leak in the trade press (AdAge, Sports Business Journal) weeks before the game.

### 106. Lunar-phase calendar tilt
- **Signal:** The astronomical calendar of new-moon versus full-moon dates, split into 15-day windows around each phase.
- **Trade:** Tilt global equity index exposure (index futures, SPY/ACWI-type ETFs) long around new moons and flat or hedged around full moons — a rolling roughly two-week horizon matching the lunar cycle.
- **Mechanism:** Lunar phases are associated in psychology literature with mood and sleep disruption; depressed full-moon mood lowers risk appetite, and returns around full moons were measured 3-5% annualized lower than around new moons across 48 country markets.
- **Evidence:** Yuan, Zheng & Zhu, 'Are Investors Moonstruck? Lunar Phases and Stock Returns', Journal of Empirical Finance 2006 (48 countries); Dichev & Janes (2003) independently documented the same US/international pattern.
- **Access:** Free: the moon-phase calendar is public astronomical data — the cheapest alternative dataset in existence.

### 107. NOAA geomagnetic-storm indices (Kp/Ap)
- **Signal:** Planetary geomagnetic activity indices (Kp/Ap) published in real time by NOAA's Space Weather Prediction Center, flagging weeks of unusually intense solar-storm activity.
- **Trade:** Reduce or short broad equity index exposure (ES futures, SPY, and especially small-cap IWM/Russell futures) during the roughly six trading days following a major storm; a days-to-one-week horizon.
- **Mechanism:** Medical and psychological research links geomagnetic storms to worse mood and sleep; investors misattribute the bad mood to economic pessimism and sell, producing statistically and economically significant negative returns in the week after high-activity periods, concentrated in retail-heavy small caps.
- **Evidence:** Krivelyova & Robotti, 'Playing the Field: Geomagnetic Storms and the Stock Market', Federal Reserve Bank of Atlanta Working Paper 2003-5b, covering the US and eight other country markets.
- **Access:** Free: NOAA SWPC publishes Kp/Ap indices and storm forecasts in real time on a public website and API.

### 108. Secondary-market luxury watch price indices
- **Signal:** Transaction- and listing-based price indices for used Rolex, Patek Philippe and Audemars Piguet watches (e.g., the WatchCharts Rolex Market Index, Subdial's Bloomberg-listed watch index), scraped continuously from dealer and marketplace data.
- **Trade:** Richemont (SIX: CFR), Swatch Group (SIX: UHR) and Watches of Switzerland (LSE: WOSG) shares or options, positioned in the weeks around quarterly report releases and Swiss watch export data.
- **Mechanism:** Secondary prices are a real-time gauge of luxury demand and gray-market inventory: collapsing resale premia (as in 2022-24) signal channel stuffing and weakening primary demand before it shows up in the listed watchmakers' revenue and margins.
- **Evidence:** Morgan Stanley publishes quarterly joint reports with alt-data vendor WatchCharts and uses them directly in its Swiss watch equity coverage (covered by Forbes and WatchPro, 2024-25), including calls that Rolex/Patek secondary prices would keep falling on high supply.
- **Access:** Free-to-cheap: WatchCharts and Subdial publish headline indices free, with premium data subscriptions at consumer price points; the Morgan Stanley overlay reports circulate widely in the trade press.
