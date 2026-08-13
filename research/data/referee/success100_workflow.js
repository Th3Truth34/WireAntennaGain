export const meta = {
  name: 'success-cases-and-100-candidates',
  description: 'Expand documented alt-data successes, brainstorm 100 new candidates, run the hardened framework',
  phases: [
    { title: 'Cases', detail: '6 agents document 60 verified success cases' },
    { title: 'Patterns', detail: 'distill the DNA of what worked' },
    { title: 'Brainstorm', detail: '10 agents generate 100 fresh candidates' },
    { title: 'Triage', detail: '10 agents apply the 7-filter screen' },
    { title: 'Referee', detail: 'edge + cost analysis on survivors' },
    { title: 'RedTeam', detail: 'adversarial attacks on the best' },
    { title: 'Synthesize', detail: 'final scored report' },
  ],
}

const FRAMEWORK = "THE HARDENED ANALYSIS FRAMEWORK (every filter here killed real ideas in prior rounds \u2014 apply all seven):\n1. DATA REALITY: Does the named source actually exist, is it publicly obtainable, and at what cadence and latency? Verify by searching; do not assume.\n2. INFORMATIONAL LEAD: Does the market learn the same thing via newswire, company PR, or ordinary news at the same time or sooner? If a wire beats you, there is no lead and the idea dies.\n3. THE DOLLAR TEST (the lesson that killed our best-looking finding): estimate the expected move in DOLLARS per share/contract, not just percent, and compare it to the $0.01 minimum tick (SEC Rule 612) plus the realistic bid-ask spread. A 2-4 cent edge cannot be harvested through a 1-cent-floor spread. A 'monotone percent gradient' across price bands is usually a constant cents-drift over a shrinking price \u2014 arithmetic, not economics.\n4. COST STACK: spread + commissions (per-share on penny stocks is catastrophic) + borrow fee (if short) + slippage + option IV. Does the GROSS move beat the full stack?\n5. NOT-A-KNOWN-PREMIUM: Is this just a documented risk premium already harvested (hard-to-borrow/shorting premium, size, value, lottery-demand, distress)? State who takes the other side and whether they are rational \u2014 if they are being paid for a real risk, it is not free money.\n6. PORTFOLIO MEAN, NOT POOLED MEDIAN: a book earns the cross-sectional MEAN each period and compounds periods. A negative median with a positive mean (fat right tail) loses money on a linear payoff. De-overlap: near-daily observations of the same name are not independent, so t-stats on pooled rows are fiction.\n7. EXECUTABLE + CAPACITY: liquid enough for a small trader, tradeable instrument exists (options present if the thesis needs defined risk), not foreign-only, and not already a crowded/commoditized trade.";
const DNA = "WHAT ACTUALLY SEPARATED THE REAL SUCCESSES (Benter's horse-racing model, satellite parking-lot counts, oil-tank-top imagery) FROM THE ~660 IDEAS THAT DIED:\n- GENUINE EXCLUSIVITY or hard-to-replicate PROCESSING. Benter built a private multinomial-logit model on public tote+form data that took years to tune; RS Metrics/Orbital Insight had to buy and computer-vision-process satellite imagery nobody else was parsing. The edge was in the WORK, not merely in 'the data exists'.\n- A REAL TIME LEAD over the official/consensus number \u2014 parking-lot counts weeks before the retailer's comps print; tank-top shadows before the EIA/official inventory release. Not a race against a newswire.\n- A LARGE, LIQUID tradeable instrument where the move clears costs \u2014 retail large-caps and their options, crude futures/USO \u2014 not a $1 microcap or an illiquid basis market.\n- Often an UNSOPHISTICATED marginal price-setter (the parimutuel betting crowd; retail order flow) whose bias persists.\n- REPEATABILITY and CAPACITY: the signal fires many times and absorbs real size.\nAim every new idea at this DNA. An idea that lacks exclusivity/processing-moat, or lacks a lead, or trades only a tiny illiquid instrument, should not be proposed.";
const BANLIST = "[\"10b5-1 plan adoptions and terminations as insider tells\", \"13E-3 Cash-Out Harvest\", \"13F cloning and filing-day reveals\", \"19(a) Coverage Countdown\", \"337 Target-Date Clock\", \"53rd-Week Mirage\", \"8-K revolver-drawdown disclosures (the corporate 'dash for cash' tripwire)\", \"811 Locate-Ticket Telco Capex Pulse\", \"AAR weekly rail carloads\", \"ABS-15G Repurchase Demand Tape\", \"ADIZ Tempo Gauge\", \"ADR pre-release and cross-listing parity forensics\", \"ADS-B-derived GNSS jamming and spoofing maps (GPSJam.org / Flightradar24 interference layer)\", \"AG War Chest Watch\", \"AGM Bunker Pivot\", \"AIS satellite ship-tracking (vessel positions and draft)\", \"ARA Guillotine Calendar\", \"ASR Borrow Shock\", \"ATM Absorption Gauge\", \"ATM Reload Diff\", \"ATS Requisition-ID Velocimeter\", \"Admin-Agent Dependency Map\", \"Aggregate Twitter mood indices (Bollen's 'calm' score)\", \"Aggregated bank-card transaction panels (Yodlee/Envestnet)\", \"Airbnb Panic-Discount Velocity\", \"Allocated Bourbon Premium Deflator\", \"Amateur optical photometry and community orbit-tracking of AST SpaceMobile's constellation\", \"Amazon Air Sortie Tracker\", \"Amazon Hourly-Wage and Sign-On Tape\", \"Amazon customer review rating velocity\", \"Amputation Tape\", \"Angel Drop Window\", \"App download and DAU trackers (Sensor Tower, Apptopia)\", \"Appraisal Docket Tell\", \"Army Corps of Engineers bid-opening abstracts (dredging low-bidder reveals)\", \"Assignment-Desk Tell\", \"Auditor-change 8-K feed (Item 4.01) and audit-fee jumps\", \"Author Elimination Engine\", \"Autocomplete Frontier\", \"BARDA / ASPR Strategic National Stockpile procurement orders\", \"BDC Cross-Mark Ledger\", \"Baby-Bond Call Latency\", \"Backstop Tell\", \"Baltic Dry Index (BDI)\", \"Bank deposit and CD rate scraping (funding-desperation census)\", \"Bankruptcy Rule 3001(e) claim-transfer notices (who is accumulating the estate)\", \"Beltway Midnight Index\", \"Bench-Question Handicap\", \"Beneish M-Score earnings-manipulation screen\", \"Benter-style Hong Kong parimutuel handicapping model\", \"Big-Toy Distress Meter\", \"Birkin Premium Barometer\", \"Blackout Re-Entry Clock\", \"Blast Census (Chilean mine-blast seismology)\", \"Blind RIF-Leak Detector\", \"Bond ETF premium/discount to NAV as a fire-sale and price-discovery gauge\", \"Boneyard Index (freighter-fleet ADS-B utilization)\", \"Bookmaker odds versus listed football-club shares\", \"Books-Closed Spread Clock\", \"Botox Slot-Slack Tracker\", \"Box-Spread Funding Thermometer\", \"Brazilian coffee-belt frost forecasts\", \"BrokerCheck Dispute Swarm\", \"Buttered Popcorn Index / weekend box office\", \"Bylaw Fortification Tell\", \"CAO Basis Bomb\", \"CBER Flu-Lot Release Ledger\", \"CCASS custody-movement forensics (Hong Kong)\", \"CDN and internet-outage telemetry (Downdetector, ThousandEyes, Cloudflare Radar)\", \"CEF Rights Dilution Fade\", \"CFD Crowd Fade\", \"CFPB Card Agreement Diff\", \"CFTC Commitments of Traders (Disaggregated / Traders in Financial Futures)\", \"CID Enforcement Tell\", \"CLO trustee-report constraints (CCC buckets and OC-test cushions) as a forced-selling map\", \"CMS program-integrity contract awards (RAC / audit contractor tape)\", \"COLA Shelf Radar\", \"Call Report Amendment Autopsy\", \"Cap Rule Cliff\", \"CapGains Exodus\", \"Capacity Auction Handicap\", \"Cardboard Box Index (containerboard shipments)\", \"Cargo-surveyor palm oil export estimates (ITS / AmSpec)\", \"Casino Bus Frequency Signal\", \"Cellar-and-Canvas Collateral Watch\", \"Central States Countdown\", \"Central bank communication linguistics (hawk/dove NLP scores)\", \"Certificate of Conformity Scout\", \"Chain Inspection Cluster Alarm\", \"Champagne Shipment Indicator\", \"Chancery Expedition Flag\", \"Chancery First-Filer Feed\", \"Channel Fog (LNG-channel met-ocean halts)\", \"Charger Occupancy Revenue Meter\", \"Chassis Street-Dwell Monitor\", \"China Satellite Manufacturing Index (SMI)\", \"Circular-Deal Seismograph\", \"Class-Cert Window Straddle\", \"Clickstream web-traffic panels (SimilarWeb)\", \"ClinicalTrials.gov Registry Diff Miner\", \"Closed-Hours Odds Gap\", \"Co-Defendant Shockwave\", \"Collar Footnote X-Ray\", \"Collateral-Field Mirror\", \"Commercial optical SSA telescope feeds (ExoAnalytic Solutions) for real-time GEO breakup and debris detection\", \"Conference Dial-In Scale & Type Tell\", \"Conference No-Show Sniffer\", \"Confidential DRS-to-Public S-1 Flip Stream\", \"Confirmation-Lag Alarm\", \"Congressional STOCK Act trade disclosures\", \"Connect Countdown\", \"Container spot freight rates (Freightos Baltic Index / Drewry WCI)\", \"Container-port congestion and ship queues from orbit\", \"Contract-termination / de-obligation tape (DOGE 'wall of receipts' and FPDS stop-work mods)\", \"Convertible bond new-issue delta-hedging pressure\", \"Cooling-Off Clock (NMB/FMCS Strike Countdown)\", \"Copycat Cascade\", \"Corner-Office Lien Siren\", \"Corporate lobbying intensity from LDA filings\", \"Corporate private-jet ADS-B tracking\", \"Counsel Nonpayment Withdrawal Alarm\", \"Covenant-loophole intelligence (Covenant Review 'trapdoor' flags)\", \"Cover-Ratio Carbon Fade\", \"Craft-Labor Dispatch Board Index\", \"Creation-Halt Premium Fade\", \"Credit-card ABS master-trust monthly reports (Form 10-D / monthly 8-K)\", \"Creditor-Matrix Shrapnel\", \"Crisis-Pay Travel Nurse Tape\", \"Cross-Ratio CCL Dispersion (Argentina)\", \"Cushing tank-farm infrared flyovers\", \"DART Gap Runner\", \"DOT Letting Tape Backlog Nowcast\", \"DR Fee Record-Date Drag\", \"DRAM spot prices (DRAMeXchange / TrendForce)\", \"DRIP Drumbeat\", \"DSCA 36(b) Notification Wire\", \"DTC Chill Tripwire\", \"DTC Chill Wire\", \"DTCC swap data repository real-time public dissemination tape\", \"DVP Specials-Tail Siren\", \"Daigou Spread Compression Signal\", \"Daily Treasury Statement cash balance and debt-ceiling X-date arithmetic\", \"DailyMed Label Diff\", \"Danger Area NOTAM Sniffer\", \"Data-Center Permit Ledger\", \"Deal-specific LDA lobbying registration surges\", \"Dealer gamma exposure (GEX) estimates from options open interest\", \"Decree Overhang Docket\", \"Deep-ITM buy-write / married-put 'reset transaction' detection\", \"Delivery-App Unit Ledger\", \"Depot Watch\", \"Dilution Ammo Gauge\", \"Direct-from-employer job postings (LinkUp)\", \"Discord Presence Census\", \"Dividend Clock Slip\", \"Divisor Day\", \"Douyin Factory-Floor Census\", \"Driver-Incentive Margin Nowcast\", \"Drop-Day Brick Ratio\", \"Drought Auction-Barn Liquidation Tape\", \"EBITDA Definition Creep\", \"EDGAR Filer-Agent Burst & Deal-Counsel/Printer Fingerprint\", \"EDIS Exclusion-Order Wire\", \"EMMA Hospital Vital Signs\", \"ENSO indices (Nino 3.4 SST, Southern Oscillation Index)\", \"ESG Trapdoor\", \"ESPP Flip Pressure\", \"ETA Strain Gauge\", \"ETF Custody Tape\", \"ETF daily shares-outstanding create/redeem tape\", \"ETF operational shorting (ETF short interest >100% plus ETF-concentrated FTDs)\", \"ETF operational-shorting tracker (ETF short interest >100% plus ETF FTD spikes)\", \"EU/UK public net short position disclosures (SSR registers)\", \"EWR Death-Claim Tape\", \"Early-Exercise Tell\", \"Election-Proration Handicap\", \"Election-night prediction-market odds as a futures-leading input\", \"Electronic truckload tender data (FreightWaves SONAR OTVI/OTRI)\", \"Eligible-Collateral Delisting Diff\", \"Email e-receipt panels (Slice/Rakuten Intelligence, Edison Trends)\", \"Embargo Clock\", \"Empty-Leg Glut Detector\", \"Empty-Seat Telemetry\", \"Escheatment Sale Window\", \"Escort-Ad Supply Influx Monitor\", \"Ethereum network hashrate as a GPU demand proxy\", \"European natural-gas prices as a fertilizer plant-outage tripwire\", \"European public net-short-position registers\", \"Evening-Sale Guarantee Ledger\", \"Eviction Docket Stress Gauge\", \"Ex-dividend 'dividend play' open-interest and volume spikes\", \"Exchange Symbol / CUSIP Reservation & When-Issued Watch\", \"Executive job-change tracking from LinkedIn and the open web\", \"Exit Fare Barometer\", \"Extension Epidemic Gauge\", \"Extension Seat Counter\", \"F-6 Shelf Headroom Gauge\", \"FAA Crane Filing Index\", \"FAA launch licenses, NOTAM/TFR windows and hazard-zone notices for timing rocket-stock catalysts\", \"FARA foreign-agent registration filings\", \"FCC IBFS/ELS satellite and experimental license filings as pre-announcement catalysts\", \"FCC spectrum-auction round-by-round proceeds (Auction 107 C-band playbook)\", \"FDA Import-Refusal Shock Detector\", \"FDA PDUFA decision calendar (pre-catalyst run-up)\", \"FDA Shortage-List Kill-Switch for Compounders\", \"FDD Item 19 AUV Leak\", \"FECM Export-Order Sniper\", \"FEMA disaster-response contract tape (emergency awards and amendments)\", \"FHLB advance and debt-issuance telemetry (the 'lender of next-to-last resort' gauge)\", \"FINRA bi-monthly short interest & days-to-cover\", \"FINRA daily short-sale volume and the SqueezeMetrics Dark Index (DIX)\", \"FOIA request logs and FOIA'd FDA inspection documents\", \"Family-Office Scaffolding Radar\", \"Fanfic Flow\", \"Far West Load (ERCOT miner-curtailment telemetry)\", \"Fed H.4.1 discount-window and 'other credit extensions' lines\", \"Fed H.4.1 discount-window and emergency-facility borrowing\", \"Fed H.8 weekly commercial-bank balance sheets (deposit-flight census)\", \"Federal contract award feeds (USAspending/FPDS and DoD daily announcements)\", \"Feedlot Heat-Kill Forecast Trade\", \"Fifty-State Loop Detector Gasoline Print\", \"Filed-Exhibit Document-Metadata Forensics\", \"Filing-Agent Fingerprint Switch\", \"Fintech Vintage X-Ray\", \"Fire-Sale Forecaster\", \"Fire-Weather Utility Liability Trigger\", \"First-Flag Regulator Sweep\", \"First-Generic Flash\", \"Fiscal Calendar Reset Flag\", \"Fleet Disposition Mark Gauge\", \"Floating-roof oil tank shadow measurement\", \"Florida freeze forecasts vs. frozen orange juice futures\", \"For-Sale Sign 5.02\", \"Forecaster Ledger Copy-Trade\", \"Foreign Room Tripwire\", \"Foreign-Room Fumes (Korea)\", \"Forge Basis Day-One\", \"Form 12b-25 late-filing (NT 10-K / NT 10-Q) notices\", \"Form 4 opportunistic insider cluster-buy signal\", \"Form 706 Countdown\", \"Fourth-Quarter Clincher\", \"Foxconn Referral-Bonus Thermometer\", \"Frac Fingerprint (TexNet microseismicity)\", \"Franchise Default Ledger\", \"Free-Share Bait Gauge\", \"Frozen Funds Klaxon\", \"Fungibility Headroom Ledger (India)\", \"GAO bid-protest docket (filings, CICA stays, and 100-day decisions)\", \"GFS/ECMWF model-run degree-day swings\", \"GLP-1 Dose-Level Stockout Scraper\", \"GMA Pallet Spot Tape\", \"GPU Lien-Ledger Tracker\", \"GPU Salvage-Auction Tape\", \"GRAT Window Tell\", \"Gain-Porn Ledger\", \"Gatekeeper Guillotine\", \"Genscape helicopter infrared flyovers of Cushing\", \"Genscape power-line EMF sensors\", \"Genset Permit Capex Leak\", \"German Tank Checkout\", \"Ghost Anchorage Census\", \"Ghost Board Meeting Detector\", \"Ghost Entry Census\", \"Gift card secondary-market resale discounts\", \"GitHub developer-activity datasets for open-source software stocks\", \"Glassdoor employee-review sentiment changes\", \"Golden Parachute Freshening\", \"Google Trends financial-search volume (the 'debt' strategy)\", \"Grantee Code Telltale\", \"Grey-Market Premium Transfer\", \"Guangdong Power-Auction Print\", \"H-2B Seasonal Demand Ledger\", \"HSR early-termination notice feed\", \"Hail-Roof Damage Nowcast\", \"Hail-Swath Solar Farm Damage Map\", \"Hail-to-Shingle Repair Pulse\", \"Handle-Migration Meter\", \"Hangar Lien Ledger\", \"Heat-Dome Miner Curtailment Credits\", \"Holiday Shadow Drop\", \"Hospital 8(g) Ten-Day Strike Notices\", \"Hotbox Telemetry Net (rail defect-detector radio)\", \"House-Margin Diff Tape\", \"Hsinchu Water Gauge\", \"Hurricane track/intensity forecast ensembles\", \"ICS Slot Stretch\", \"IIR Energy phone-verified refinery outage database\", \"IPR Truce Tape\", \"IR-Firm Fingerprint\", \"IR-Roster Churn Monitor\", \"Import Alert Ambush\", \"In-store shopper counters (ShopperTrak/Sensormatic)\", \"Index dividend futures as structured-product hedging exhaust\", \"Inference Queue-Depth Probes\", \"Insider pledged-share disclosures and margin-call cascades\", \"Intent-to-Use Tell\", \"Interactive Brokers stock-loan feed via iBorrowDesk\", \"International Halt-Request Tell (ASX / AIM / TSX-V)\", \"Investor Day Punt\", \"Item 20 X-Ray\", \"Ivory Coast cocoa port arrivals (weekly truck deliveries)\", \"JPMorgan Hedged Equity (JHEQX) quarterly collar roll\", \"JSF Premium-Charge Squeeze Scanner\", \"Jamming Halo Index\", \"KRX Designation Clock\", \"Kariba Water Level Copper Tax\", \"Keyword Domain Tape\", \"Korean autocallable issuance and knock-in barrier maps\", \"LTV Governance Countdown\", \"Laker Ledger (Soo Locks ore-boat counting)\", \"Laredo Pulse (border bridge wait-time exhaust)\", \"Laredo Truck-Queue Nowcast\", \"Last Supplier Standing\", \"Late Gavel\", \"Launch-Slip Arbitrage\", \"Lazy Prices 10-K/10-Q text-diff signal\", \"Lease-Rejection Cartography\", \"Lendable Float Ceiling\", \"Lessee Arrears Radar\", \"Leverage-Bracket Diff Bot\", \"Leveraged ETF end-of-day rebalance flow model\", \"Levered-Wrapper Tell\", \"Li Keqiang index (China electricity and rail-freight proxy)\", \"Lien Auction Delinquency Index\", \"Limiteds Ledger\", \"Lipstick Index\", \"Liquor License Pipeline\", \"Listing-Test Telemetry\", \"Live ER Wait-Time Utilization Index\", \"Lock Queue (Army Corps LPMS outage telemetry)\", \"Lock Queue Grain Chokepoint Monitor\", \"Lockup-to-Float Relay\", \"Loonie D&O Premium Tape\", \"Lunar-phase calendar tilt\", \"MA Enrollment Print\", \"MAUDE Mortality Cluster\", \"Macau Pawnshop Cash-Out Pulse\", \"Maintenance-Fee Mutiny\", \"Maoyan Minute-Zero\", \"Mechanic's Whisper Network\", \"Mechanic's-Lien Distress Radar\", \"Megasite Truck-Cam Counter\", \"Men's Underwear Index\", \"Merger-Odds Basis\", \"Merger-Sub Registry Trail\", \"Miner Curtailment Ledger\", \"Miner HODL Ledger\", \"Model-String Leak Scanner\", \"Month-end pension rebalancing flow estimates\", \"Munitions Plant Hiring Ramp\", \"NOAA geomagnetic-storm indices (Kp/Ap)\", \"NRC Spill Blotter\", \"NRC daily Power Reactor Status Report\", \"NSCC clearing-fund margin dynamics (VaR + Excess Capital Premium charges)\", \"NVDR Flow Tape (Thailand)\", \"NY Fed SOMA securities-lending auction results (per-CUSIP)\", \"NY Fed weekly custody holdings of foreign official accounts (plus monthly TIC)\", \"NYSE/Nasdaq closing auction imbalance feeds\", \"Newly-registered domains, WHOIS and certificate-transparency logs\", \"Newswire Downgrade Index\", \"Newswire Kill / Withdrawal / Advisory Feed\", \"Nodal Energization Detector\", \"Non-GAAP Definition Drift\", \"Nordic hydrological balance (snowpack and reservoir data)\", \"Nuclear Thermal-Derate Pre-Echo\", \"OFAC Tape Reader\", \"OIG Work-Plan Diff\", \"OIR Cat Data-Call Tape\", \"OIRA EO 12866 meeting logs on reginfo.gov\", \"Obituary Mortality Nowcast\", \"Odd-Lot Priority Census\", \"Off-Cycle Audit-Partner Swap\", \"Off-warrant metal stockpile measurement (MetalSignals)\", \"OnlyFans Discount-Intensity Gauge\", \"Open-Weights Shock Seismograph\", \"OpenRouter Share-of-Tokens Tape\", \"OpenTable seated-diner reservation data\", \"Opendoor Markdown Ledger\", \"Options-implied borrow cost from put-call parity\", \"Oracle Latency Carry\", \"Ordered Departure Monitor\", \"Orphaned-Client Contagion Basket\", \"Ortex intraday borrow, utilization and cost-to-borrow\", \"Outage Scheduler Congestion Radar\", \"Outage-Hour Generator Demand Index\", \"Overnight Retail Fade\", \"Own-Share Tape Collision\", \"Oyako Language Diff (Japan)\", \"PTAB inter partes review petition filings\", \"PUC Docket Load-Contract Sniffer\", \"Panama Canal Gatun Lake level and transit-slot auctions\", \"Panel Lottery Print\", \"Part 573 Fast Lane\", \"Partner-Book Fallout\", \"Patent Collateral Tape\", \"Patent grant announcements (USPTO issue-day reaction)\", \"Pawn Forfeiture Flow Meter\", \"Pay-Band Revision Nowcast\", \"Performance-Bond Spiral Forecaster\", \"Peruvian anchovy biomass surveys and quota decisions vs. feed-protein prices\", \"Phantom Float Census\", \"Pipeline Critical-Notice Siren\", \"Pipeline nomination flow data (Bentek-style EIA storage nowcasting)\", \"Plasma Donor Bonus Barometer\", \"Podcast Tour Detector\", \"Political Ad OPIF Ledger\", \"Political File Firehose\", \"Political-intelligence broker flash alerts (Height Securities channel)\", \"Politically connected board nomination announcements\", \"Pollen Load vs. Allergy Shelf\", \"Pollen-Load Antihistamine Nowcast\", \"Preorder Counter Arb\", \"Presidential tweets (Trump feed / JPMorgan 'Volfefe Index')\", \"Primary-dealer Treasury settlement fails (FR 2004 weekly data)\", \"Primary-dealer Treasury settlement fails-to-deliver (FR 2004 data)\", \"Pro Farmer Midwest Crop Tour (boots-in-the-field scouting)\", \"Pro-Aisle Depletion Panel\", \"Proxy over-voting and vote-reconciliation forensics\", \"Proxy-Solicitor Fee Siren\", \"Public-Inspection Desk Wire\", \"Quarter-end portfolio-pumping reversal (window-dressing fade)\", \"Queue-Jump Withdrawal Signal for IPP Scarcity\", \"Queue-to-Steel Conversion Tracker\", \"Quitclaim Shield Detector\", \"RWA Cash-Parking Gauge\", \"Railcam Unit-Train Census\", \"Railfan-Cam Carload Nowcast\", \"Ramadan Effect\", \"Ratings-Board Leak Index\", \"Real-time PACER docket scraping\", \"Real-time Twitter event detection (Dataminr breaking-news alerts)\", \"Real-time securities-lending feeds: cost-to-borrow, utilization and short-interest estimates (Ortex / S3 Partners / S&P Global Securities Finance)\", \"Reclassification Docket\", \"Reclassification Sniffer\", \"Record-Date Recall Wave\", \"Recorder's Office Mortgage Meter\", \"Recurring-Buy Minute\", \"Recusal Roulette\", \"Red-Zone Withdrawal Map\", \"Reddit r/WallStreetBets ticker-mention volume\", \"Redetermination Handicapper\", \"Refinery Strike Flash\", \"Refund Ramp\", \"Reg SHO Threshold Securities List\", \"Reg SHO fails-to-deliver file and daily threshold securities lists\", \"Reg SHO threshold securities lists\", \"Registry Diff Biopsy\", \"Related-Action Shadow\", \"Remittance-Band Flow Census\", \"Repo Severity Tape\", \"Retailer parking-lot car counts\", \"Reverse-Factoring Iceberg\", \"Reverse-Split Plumbing Pop\", \"Revolving-door regulator hire announcements\", \"Rezoning-to-Megawatts Tracker\", \"Rhine water level at the Kaub gauge\", \"Rig-Crew Hiring vs Friday Rig Count\", \"Rights Tail Bid\", \"River Pilot Grain Nowcast\", \"Robinhood holder counts (Robintrack)\", \"Roblox Live Census\", \"Rooftop Loan Rot\", \"Rooftop Permit Solar Nowcast\", \"Rooftop Solar Permit Pulse\", \"Rotor Count (Gulf of Mexico crew-helicopter ADS-B)\", \"Round-Up Rush\", \"Royalty Drip Nowcast\", \"Rulemaking-comment astroturf forensics\", \"Russell reconstitution preliminary add/delete lists\", \"SAVANT global copper smelter activity index\", \"SAVANT satellite copper-smelter index\", \"SDR Fleet Fever\", \"SEC CNS Fails-to-Deliver files\", \"SEC CNS Fails-to-Deliver files + Reg SHO Threshold List\", \"SEC EDGAR PDS feed latency (paying subscribers saw filings first)\", \"SEC Form N-MFP money-market fund security-level holdings\", \"SEC comment-letter releases (UPLOAD/CORRESP correspondence)\", \"SEC fails-to-deliver (FTD) file and T+35 close-out cycles\", \"SEC fails-to-deliver data and Reg SHO threshold lists\", \"SEC fails-to-deliver files and Reg SHO threshold lists\", \"SEC fails-to-deliver files and Reg SHO threshold lists (synthetic share supply)\", \"SERFF Climate Rate-Filing Scanner\", \"SERFF Exclusion-Form Prospector\", \"SERFF Margin Nowcast\", \"SERFF Rate-Filing Monitor\", \"SNB weekly sight deposits (FX-intervention tripwire)\", \"SOX-806 Docket Sniffer\", \"SPUT ATM Flywheel\", \"SaferProducts Siren\", \"Salvage Tape Nowcast\", \"Same-Loan Mark Dispersion X-Ray\", \"Satellite NDVI crop-yield nowcasts\", \"Satellite crop-yield models (Descartes Labs / EarthDaily)\", \"Saturday Gavel Macro\", \"Scanner-Feed Refinery Tripwire\", \"Schedule 13D activist stake reveal\", \"School Board Bus Docket\", \"Scrap-Yard Bid Sheet Index\", \"Screener Leak Siren\", \"Screwworm Frontline Bulletin Watch\", \"Sea-Lice Heatwave Salmon Signal\", \"Seal-Gap Census\", \"Second-Opinion Bump Detector\", \"Secondary-Spread Tape\", \"Secondary-market luxury watch price indices\", \"Secondhand Box Price Barometer\", \"Section 103(k) Coal Tripwire\", \"Section 301 tariff-exclusion grant lists with the PAC-donation tell\", \"Securities-lending borrow fees, utilization and recall data (Ortex/S3/Markit)\", \"Securities-lending borrow fees, utilization, and real-time short interest\", \"Securities-lending market data (Ortex/S3 Partners borrow fees and utilization)\", \"Seg-Fund Flight Monitor\", \"Self-Tender Float Vacuum\", \"Sellers.json Cartography\", \"Sentinel-5P TROPOMI methane-plume detection\", \"Seoul Ant Tape\", \"Service Difficulty Ledger\", \"Servicer Advance Squeeze Gauge\", \"Servicing-Strip Fire-Sale Wire\", \"Settlement Choreography Tape\", \"Sewershed Flu Nowcast vs. FluView Print\", \"Sewershed Sentinel (wastewater H5 influenza marker)\", \"Shared-Whale Fire-Sale Radar\", \"Sharp Wallet Shadowing\", \"Shell-LLC Campus Radar\", \"Ship-Mortgage Tripwire\", \"Short-Exempt Pulse\", \"Shuttle Diplomacy Tracker\", \"Silicon Data H100 GPU rental price index (SDH100RT)\", \"Single-Owner Consignment Tell\", \"Single-name CDS runs and curve inversion (1y/5y) as a bank-insider tell\", \"Skin Premium Compass\", \"Sloan accrual anomaly traded at subsequent earnings dates\", \"Slots-Stream Barometer\", \"Smartphone geolocation foot-traffic panels (Thasos, Foursquare, Placer.ai)\", \"Smoke-Dimmed Solar Arb\", \"Snow Stake Arb (resort snow-stake webcams + SNOTEL)\", \"Snowmaking Window Ski Nowcast\", \"Soundstage Pulse\", \"South Korea first-20-days semiconductor exports\", \"Space insurance premium rates and claims pipeline as an operator-stress tell\", \"Space-Track/CelesTrak TLE anomaly mining (drag decay, station-keeping lapses, GEO drift)\", \"Spec-Home Incentive Meter\", \"Special Rebalance Tripwire\", \"Special-Committee Counsel Sniffer\", \"Special-Dividend Short Tax\", \"Spectrum 'use-it-or-lose-it' buildout-milestone compliance and FCC enforcement letters\", \"Spectrum Round Telemetry\", \"Sphere Occupancy Cam\", \"Split-Then-Shelf Countdown\", \"Sponsor-Bank Cascade\", \"Sponsor-Read Ledger\", \"Sportsbook Promo-War Thermometer\", \"Spotify Music Sentiment (song valence index)\", \"Square-Money Hold Nowcast\", \"Stablecoin Stress Tripwire\", \"Stale-Mark Divergence\", \"Standby-Megawatt Permit Ledger\", \"Standing Repo Facility take-up and the SOFR-IORB spread\", \"State DOT monthly bid lettings\", \"State Medicaid managed-care RFP intent-to-award notices and protest dockets\", \"Stealth Price-Test Sniffer\", \"Stealth-Checkpoint Catalyst Calendar\", \"StockTwits intraday message sentiment\", \"Storage Street-Rate Tape\", \"Store-Leader Posting Geocoder\", \"Store-Level NLRB Petition Tape\", \"Strip Comp-Flood Index\", \"Stripper Index\", \"Stumpage Overbid Index\", \"Subprocessor-Page Diff Watch\", \"Substation Sleuthing\", \"Sudden stratospheric warming (polar vortex) indicators\", \"Sudden-death and obituary monitoring of key insiders\", \"Sunbelt CO Delivery Clock\", \"Sunbelt Domicile Clock\", \"Super Bowl advertiser-roster attention trade\", \"Superload Permit Capex Tracker\", \"Superyacht Gap-Week Distress Index\", \"Susquehanna semiconductor lead-time tracker\", \"TCEQ Upset-Filing Refinery Trigger\", \"TCEQ Upset-Report Cracker Tripwire\", \"TRACE institutional-size bond prints leading distressed equity\", \"TSA checkpoint throughput counts\", \"TSA daily checkpoint throughput\", \"Tail-Number Title Tape\", \"Taiwan MOPS monthly revenue disclosures (Apple/NVIDIA supply chain)\", \"Tanker Scramble (firefighting-aviation ADS-B)\", \"Tanker Track Tell\", \"Tanker spot fixtures and VLCC day-rates\", \"Tariff-Exclusion Docket Miner\", \"Tehran Street Rate\", \"Tenth Justice Tell\", \"Termination Clock\", \"Tesla factory lot and finished-vehicle inventory monitoring\", \"The Dog That Didn't Pre-Announce\", \"The Goldman Roll (GSCI/BCOM commodity index roll window)\", \"Thirty-Month Fuse\", \"TikTok virality metrics for consumer brands\", \"Token Price-War Diff Index\", \"Tokyo Daily Short Ledger\", \"Top-Mover Carousel\", \"Tourist Ratio\", \"Toxic Transfer-Agent Switch\", \"Transfer-agent / DRS share-count reconciliation (GameStop episode)\", \"Travel-Nurse Rate Tape\", \"Treasury-Wallet Tell\", \"Treaty Award Ticker\", \"Trophy-Rate Nowcast\", \"Trust Premium Pump\", \"Trustee Exit Tape\", \"UCC Tractor Tape\", \"UCC-1 Creditor Stampede\", \"UK Takeover Code Rule 8.3 dealing disclosures\", \"US customs bills of lading (Panjiva / ImportGenius)\", \"USDA APHIS avian-flu (HPAI) outbreak confirmations vs. egg producers\", \"USDA report-release microstructure ('fast money' around WASDE)\", \"USDC Float Nowcast\", \"Undeliverable Dividend Squeeze\", \"Undertaker's Appearance\", \"Underwriter Cohort Fade\", \"Upgrade-Wave Telemetry\", \"Upset Detector (TCEQ emission-event filings + PurpleAir)\", \"VA / DoD electronic-health-record mega-award and milestone tape\", \"VIIRS Nightfire satellite gas-flaring detection\", \"VIX ETP end-of-day rebalancing flow (Volmageddon mechanics)\", \"VIX settlement (SOQ) auction order imbalances\", \"VRDO Remarketing Stress Wire\", \"Vendor and customer trade-claims marketplace pricing (Claims Market / Xclaim)\", \"Vessel Sanitation Norovirus Fastwire\", \"Vet Clinic Slot-Scarcity Monitor\", \"WARN Act layoff notices scraped from state labor sites\", \"Wallet-Freeze Basis Trade\", \"War Risk Repricer\", \"Warehouse Amendment Wire\", \"Warrant Redemption Odometer\", \"Warranty Fine-Print Retreat\", \"Watchlist Tenant Leak\", \"Waterfowl Radar Overflight vs. Layer Hens\", \"Web-scraped online retail prices (PriceStats / Billion Prices Project)\", \"Weekend box-office grosses (Comscore/Box Office Mojo)\", \"Wet-Harvest Propane Draw\", \"When-Issued Stub Gap\", \"White House visitor logs\", \"White-Shoe Counsel Upgrade\", \"Wholesaler Internalization Census\", \"Wikipedia page-view counts on company and finance articles\", \"Win-Back Discount Sonar\", \"Wind/solar generation forecast errors vs actuals\", \"Wishlist Thermometer\", \"World Cup Elimination Effect (sports sentiment)\", \"World Cup elimination-loss sentiment signal\", \"XBRL custom-tag rate / accounting reporting complexity (ARC)\", \"Xianyu Embargo Premium\", \"Yellow-Iron Auction Tape\", \"Yellow-Iron Tote Board\", \"Yiwu Small-Commodity Tape\", \"Yunnan Dry-Season Aluminum Squeeze\"]";

const CASE_SCHEMA = {
 type:"object", required:["cases"],
 properties:{ cases:{ type:"array", items:{
   type:"object", required:["name","what","who","instrument","why_it_worked","lead","exclusivity","evidence"],
   properties:{
     name:{type:"string"}, what:{type:"string"}, who:{type:"string"}, instrument:{type:"string"},
     why_it_worked:{type:"string"}, lead:{type:"string"}, exclusivity:{type:"string"}, evidence:{type:"string"} } } } }
};
const PATTERNS_SCHEMA = { type:"object", required:["patterns"], properties:{ patterns:{ type:"array", items:{
   type:"object", required:["name","description","how_to_generate"], properties:{
     name:{type:"string"}, description:{type:"string"}, how_to_generate:{type:"string"} } } } } };
const IDEA_SCHEMA = { type:"object", required:["ideas"], properties:{ ideas:{ type:"array", items:{
   type:"object", required:["name","source","collection","instrument","mechanism","lead","exclusivity","why_clears_costs"],
   properties:{
     name:{type:"string"}, source:{type:"string"}, collection:{type:"string"}, instrument:{type:"string"},
     mechanism:{type:"string"}, lead:{type:"string"}, exclusivity:{type:"string"},
     why_clears_costs:{type:"string", description:"Explicit dollar-move vs tick/spread argument"} } } } } };
const TRIAGE_SCHEMA = { type:"object", required:["results"], properties:{ results:{ type:"array", items:{
   type:"object", required:["id","name","decision","fails_which_filter","data_exists","lead","dollar_test","reason"],
   properties:{
     id:{type:"integer"}, name:{type:"string"}, decision:{type:"string", description:"ADVANCE / KILL"},
     fails_which_filter:{type:"string", description:"Which of the 7 filters it fails, or NONE"},
     data_exists:{type:"string"}, lead:{type:"string"}, dollar_test:{type:"string", description:"Estimated dollar move vs tick+spread"},
     reason:{type:"string"} } } } } };
const EDGE_SCHEMA = { type:"object",
   required:["name","verdict","edge_case","against_case","who_is_on_other_side","dollar_move_vs_costs","event_frequency","capacity","net_edge_estimate","confidence"],
   properties:{
     name:{type:"string"}, verdict:{type:"string", description:"REAL-EDGE / MARGINAL / LIKELY-ILLUSORY / NO-EDGE"},
     edge_case:{type:"string"}, against_case:{type:"string"}, who_is_on_other_side:{type:"string"},
     dollar_move_vs_costs:{type:"string", description:"Concrete dollars-per-share/contract vs full cost stack"},
     event_frequency:{type:"string"}, capacity:{type:"string"}, net_edge_estimate:{type:"string"},
     data_pipeline:{type:"string"}, confidence:{type:"string"} } };
const RED_SCHEMA = { type:"object", required:["target","kill_shots","survives"], properties:{
   target:{type:"string"},
   kill_shots:{type:"array", items:{ type:"object", required:["attack","severity"], properties:{
     attack:{type:"string"}, severity:{type:"string"}, rebuttal_possible:{type:"string"} } } },
   survives:{type:"string"}, required_evidence:{type:"string"} } };
const FINAL_SCHEMA = { type:"object", required:["survivors","killed_summary","verdict"], properties:{
   survivors:{type:"array", items:{ type:"object", required:["name","verdict","why","first_test"], properties:{
     name:{type:"string"}, verdict:{type:"string"}, why:{type:"string"},
     expression:{type:"string"}, first_test:{type:"string"} } } },
   killed_summary:{type:"string", description:"How many killed at each stage and the dominant kill reasons"},
   verdict:{type:"string", description:"Honest overall conclusion"},
   patterns_that_survive:{type:"array", items:{type:"string"}} } };

const chunk = (arr, size) => { const o=[]; for (let i=0;i<arr.length;i+=size) o.push(arr.slice(i,i+size)); return o };
const norm = (s) => (s||'').toLowerCase().replace(/[^a-z0-9]/g,'');

// ---------- Phase 1: Documented success cases ----------
phase('Cases')
const CASE_CATS = [
  { key:'geospatial', title:'Geospatial & aerial (beyond parking lots and oil tanks)', hints:'ship/AIS tracking funds, night-lights GDP, crop-yield satellite models, retailer foot-traffic from imagery, mine/stockpile monitoring, construction and rig counts, thermal/industrial-activity imagery — name the funds/vendors (Orbital Insight, RS Metrics, SpaceKnow, Descartes Labs, Ursa) and documented trades' },
  { key:'wagering', title:'Wagering & parimutuel model successes (the Benter lineage)', hints:'Bill Benter and the Hong Kong syndicates, Zeljko Ranogajec, Tony Bloom/Starlizard sports betting, Haralabos Voulgaris NBA, Cortex/computer betting teams, blackjack/poker quant teams that crossed into markets, Pinnacle sharp lines — documented, with the exclusivity/model moat that made them work' },
  { key:'transactions', title:'Consumer-transaction & receipt-panel successes', hints:'credit-card panel funds, email-receipt panels (Earnest/Edison), app-download and DAU (Sensor Tower, App Annie) trades, geolocation foot-traffic funds, gift-card resale signals — named vendors and documented earnings-prediction track records' },
  { key:'web', title:'Web-scraping & pricing-intelligence successes', hints:'web-scraped price panels predicting margins/CPI (PriceStats/Billion Prices), job-postings data (LinkUp, Thinknum), inventory/out-of-stock scraping, review-velocity, website-traffic panels — funds and vendors that monetized these' },
  { key:'flows', title:'Flow, positioning & microstructure successes', hints:'index-reconstitution front-running, ETF-rebalance and leveraged-ETF flows, dealer-gamma/GEX trades, corporate-buyback blackout timing, COT positioning, dividend-arb, merger-arb desks — documented profitable exploitation with the structural reason it persisted' },
  { key:'exotic', title:'Exotic, cross-domain & sensor successes', hints:'weather-derivative desks, private-jet-tracking M&A trades, Genscape infrared power/pipeline monitoring, congressional-trade replication, FDA-calendar biotech trades, TRACE bond-leads-equity, prediction-market arbitrage — named, documented, with the moat' },
];
const caseRes = await parallel(CASE_CATS.map((c) => () =>
  agent(`You are a financial historian with web access (load WebSearch/WebFetch via ToolSearch "select:WebSearch,WebFetch"). Document exactly 10 REAL, verifiable cases in this category where an unorthodox data source led to a documented, profitable trading operation. This is the "success library" — think Bill Benter making ~$1B on a horse-racing model, or RS Metrics counting cars in parking lots to trade retailers.

CATEGORY: ${c.title}
HINTS: ${c.hints}

For each case, the point is to capture WHY IT WORKED with the specificity a strategist could learn from:
${DNA}

Verify each case with searches — name the fund/person/vendor and a concrete source (book, paper, news article, documented episode). Do not invent. If you cannot verify a case, replace it. Return exactly 10 via structured output.`,
    { label:`cases:${c.key}`, phase:'Cases', schema:CASE_SCHEMA })
    .then(r => r && r.cases.map(x => ({...x, category:c.title})))
));
const cases = caseRes.filter(Boolean).flat();
log(`Documented ${cases.length} success cases`);

// ---------- Phase 2: Patterns ----------
phase('Patterns')
const caseDigest = cases.map(c => `- ${c.name}: worked because ${c.why_it_worked} | lead: ${c.lead} | moat: ${c.exclusivity}`).join('\n');
const patRes = await agent(`Below are ${cases.length} documented cases where unorthodox data produced real trading profits. Distill 10-14 recurring SUCCESS PATTERNS — the structural reasons these worked — each crisp enough that a brainstormer could generate NEW ideas from it. Emphasize the DNA that separates winners from losers: exclusivity/processing-moat, a real lead over the consensus/official number, a liquid instrument that clears costs, and an unsophisticated counterparty. For each pattern give a name, a description, and a 'how_to_generate' instruction.

CASES:
${caseDigest}

Return via structured output.`, { label:'patterns', phase:'Patterns', schema:PATTERNS_SCHEMA });
const patterns = patRes ? patRes.patterns : [];
const patternText = patterns.map(p => `- ${p.name}: ${p.description} [generate: ${p.how_to_generate}]`).join('\n');
log(`Extracted ${patterns.length} success patterns`);

// ---------- Phase 3: Brainstorm 100 ----------
phase('Brainstorm')
const LENSES = [
 'Geospatial/sensor exhaust with a processing moat (imagery, RF/ADS-B, acoustic, thermal) that leads an official number',
 'Private model on public data (the Benter template): a market with an unsophisticated marginal price-setter you out-model',
 'Consumer-transaction/behavioral panels that lead a large-cap earnings or guidance print',
 'Web-scraped operational exhaust (pricing, inventory, hiring, capacity) that leads margins or revenue',
 'Flow/positioning/microstructure mechanics that force predictable, computable trades in liquid instruments',
 'Regulatory/scientific calendars and databases that lead a binary catalyst in a liquid single name or sector',
 'Cross-market/parallel-market pricing gaps where a freely-clearing market leads the primary security',
 'Physical-world telemetry (grid, logistics, industrial) that leads a commodity or a liquid equity',
 'Prediction-market / betting-market signals that lead correlated liquid equities or macro',
 'Novel exclusive-processing plays on audio/video/text streams that lead a liquid instrument',
];
const ideaRes = await parallel(LENSES.map((lens, li) => () =>
  agent(`You are inventing NOVEL trading-signal candidates that follow the DNA of documented winners. Generate exactly 10 ideas in this lens.

LENS: ${lens}

SUCCESS PATTERNS to build from:
${patternText}

${DNA}

HARD REQUIREMENTS (an idea that misses any of these is worthless — self-reject and replace):
- It must plausibly have EXCLUSIVITY or a real PROCESSING MOAT (not just 'the data is public').
- It must have a real TIME LEAD over the consensus/official number or the newswire.
- It must trade a LIQUID instrument (large-cap equity + options, liquid future/ETF) where the move is big enough in DOLLARS to clear a 1-cent tick and realistic spread.
- 'why_clears_costs' MUST give an explicit dollars-per-share/contract estimate versus the tick and spread.

Do NOT propose any of these already-generated names (or trivial variants): ${BANLIST}

Each idea needs: source, concrete collection method, the liquid instrument, the mechanism, the lead, the exclusivity/moat, and the why_clears_costs dollar argument. Return exactly 10 via structured output.`,
    { label:`brainstorm:${li+1}`, phase:'Brainstorm', schema:IDEA_SCHEMA })
    .then(r => r && r.ideas.map(x => ({...x, lens})))
));
let ideas = ideaRes.filter(Boolean).flat();
const banSet = new Set(JSON.parse(BANLIST).map(norm));
const seen = new Set();
ideas = ideas.filter(i => { const k=norm(i.name); if (!k||banSet.has(k)||seen.has(k)) return false; seen.add(k); return true; });
ideas = ideas.map((x,i)=>({...x, id:i+1}));
log(`Generated ${ideas.length} unique fresh candidates`);

// ---------- Phase 4: Triage ----------
phase('Triage')
const groups = chunk(ideas, 10);
const triRes = await parallel(groups.map((grp, gi) => () =>
  agent(`You are a skeptical trading-desk analyst applying a HARDENED screen. Web access — verify claims, do not assume. Every filter below has killed real, plausible-looking ideas in prior rounds.

${FRAMEWORK}

For EACH idea, decide ADVANCE or KILL and name which filter it fails (or NONE). Be strict — killing most is the expected and useful outcome. The 'dollar_test' field is mandatory: estimate the expected move in DOLLARS in the named instrument and compare to the minimum tick + realistic spread. ADVANCE only ideas that plausibly pass ALL SEVEN filters.

IDEAS:
${JSON.stringify(grp.map(g=>({id:g.id,name:g.name,source:g.source,collection:g.collection,instrument:g.instrument,mechanism:g.mechanism,lead:g.lead,exclusivity:g.exclusivity,why_clears_costs:g.why_clears_costs})), null, 1)}

Return one result per idea via structured output.`,
    { label:`triage:${gi+1}`, phase:'Triage', schema:TRIAGE_SCHEMA })
));
const allTri = triRes.filter(Boolean).flatMap(t => t.results || []);
const advanced = allTri.filter(r => /ADVANCE/i.test(r.decision||''));
log(`Triage: ${allTri.length} screened, ${advanced.length} advanced`);
const byId = {}; for (const i of ideas) byId[i.id]=i;
const survivors = advanced.map(a => ({...byId[a.id], triage:a})).filter(s=>s.name).slice(0,12);

// ---------- Phase 5: Referee ----------
phase('Referee')
const refRes = survivors.length ? await parallel(survivors.map((s) => () =>
  agent(`You are a hard-nosed buy-side risk officer determining whether a REAL, NET-OF-COST, EXPLOITABLE edge exists — not merely whether a pattern might exist. Web access; verify every number, flag the unverified, invent nothing.

${FRAMEWORK}

IDEA: ${s.name} (lens: ${s.lens})
SOURCE: ${s.source}
COLLECTION: ${s.collection}
INSTRUMENT: ${s.instrument}
MECHANISM: ${s.mechanism}
LEAD: ${s.lead}
EXCLUSIVITY: ${s.exclusivity}
COST ARGUMENT: ${s.why_clears_costs}
TRIAGE: ${s.triage.reason}

Do the work: confirm the data and its true latency vs the wire; estimate tradeable events/year; estimate the DOLLAR move in the instrument when it fires; build the full cost stack (spread, commissions, borrow, slippage, IV); state who takes the other side and why; estimate capacity; give an honest net-of-cost expectancy. Verdict NO-EDGE / LIKELY-ILLUSORY is a valuable answer. Return via structured output.`,
    { label:`referee:${(s.name||'').slice(0,20)}`, phase:'Referee', schema:EDGE_SCHEMA })
)) : [];
const goodRefs = refRes.filter(Boolean);
log(`Referee verdicts: ${goodRefs.map(r=>`${(r.name||'').slice(0,16)}=${r.verdict}`).join(', ')}`);

// ---------- Phase 6: Red team ----------
phase('RedTeam')
const rank = v => ({'REAL-EDGE':0,'MARGINAL':1,'LIKELY-ILLUSORY':2,'NO-EDGE':3}[(v||'').toUpperCase()] ?? 2);
const ranked = goodRefs.slice().sort((a,b)=>rank(a.verdict)-rank(b.verdict));
const targets = ranked.filter(r=>/REAL-EDGE|MARGINAL/i.test(r.verdict||'')).slice(0,3);
const redRes = targets.length ? await parallel(targets.map((t)=>()=>
  agent(`You are a red-team quant paid to DESTROY this strategy before capital is risked. Web tools available. Apply the hardened framework ruthlessly, especially: the DOLLAR-vs-tick test, portfolio-mean-not-median, overlapping-observations, and 'is this just a known risk premium the lender/market-maker already collects'.

${FRAMEWORK}

TARGET: ${t.name}
PROPONENT CASE: ${(t.edge_case||'').slice(0,1000)}
CLAIMED NET EDGE: ${(t.net_edge_estimate||'').slice(0,500)}
DOLLAR MOVE VS COSTS: ${(t.dollar_move_vs_costs||'').slice(0,500)}

Rate each attack fatal/serious/manageable and state honestly whether rebuttal is possible. Then state what MUST be true for it to work and the cheapest test that would settle it. Return via structured output.`,
    { label:`red:${(t.name||'').slice(0,18)}`, phase:'RedTeam', schema:RED_SCHEMA })
)) : [];
log(`Red team complete: ${redRes.filter(Boolean).length}`);

// ---------- Phase 7: Synthesize ----------
phase('Synthesize')
const refD = goodRefs.map(r=>`${r.name}: ${r.verdict} | net: ${(r.net_edge_estimate||'').slice(0,200)} | $ vs cost: ${(r.dollar_move_vs_costs||'').slice(0,160)}`).join('\n');
const redD = redRes.filter(Boolean).map(r=>`${r.target}: survives=${(r.survives||'').slice(0,200)} | attacks: ${(r.kill_shots||[]).map(k=>`[${k.severity}] ${(k.attack||'').slice(0,100)}`).join(' ; ')}`).join('\n');
const killD = allTri.filter(r=>!/ADVANCE/i.test(r.decision||'')).map(r=>`${r.name}: ${r.fails_which_filter} — ${(r.reason||'').slice(0,120)}`).join('\n');
const finalRes = await agent(`You are the portfolio manager giving the final, honest verdict on a batch of 100 brainstormed candidates that were built to follow the DNA of documented winners (Benter, parking lots) and then run through a hardened 7-filter framework.

Summarize the funnel and name only the candidates that genuinely deserve a forward test or capital, with a cheapest-first 'first_test' for each. If few or none survive, say so plainly and explain what that means. Note which SUCCESS PATTERNS still look most promising for future work even if specific candidates died. Be honest above all.

REFEREE VERDICTS:
${refD || '(none advanced to referee)'}

RED TEAM:
${redD || '(none)'}

TRIAGE KILLS (sample):
${killD.slice(0, 4000)}

Return via structured output.`, { label:'synthesize', phase:'Synthesize', schema:FINAL_SCHEMA });

return {
  cases, patterns, ideas,
  triage: allTri, advancedCount: advanced.length,
  referee: goodRefs, redteam: redRes.filter(Boolean),
  final: finalRes,
};
