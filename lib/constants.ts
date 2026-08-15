export const COMPANY = {
  name: "Stock Buckets Research Company",
  tagline: "Clarity Before Every Call.",
  subTagline:
    "Structured, risk-defined research across equity, derivatives, and commodities.",
  email: "stockbucketresearchfirm@gmail.com",
  phone: "+91-9793444881",
  whatsapp: "919793444881",
  address:
    "Lukar Road, Lukarganj, near Madnani Hospital, Prayagraj, Uttar Pradesh - 211001",
  workingHours: "Monday – Saturday, 9:00 AM – 6:00 PM IST",
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
} as const;

export const BANK_DETAILS = {
  accountName: "Jitesh Kumar Prajapati",
  accountNumber: "5849881148",
  ifscCode: "KKBK0000145",
  bankName: "Kotak Mahindra Bank",
  branch: "Rudrapur Branch",
  accountType: "Bank Account",
  qrImage: "/qr.jpeg",
} as const;

export const CONTENT_RULES = {
  NO_SEBI_MENTION: true,
  NO_ISI_MENTION: true,
  NO_GUARANTEED_RETURNS: true,
  NO_TELEGRAM: true,
  NO_REFUND_POLICY: true,
  NO_FREE_TRIALS: true,
  NO_PROFIT_SHARING: true,
  TELEPHONIC_WHATSAPP_ONLY: true,
} as const;

export const ONBOARDING_CONFIG = {
  registrationFee: 2500,
  formattedRegistrationFee: "₹2,500",
  title: "Risk Profile Management (RPM)",
  shortTitle: "RPM Onboarding",
  subtitle: "Mandatory Subscriber Onboarding & Risk Calibration Assessment",
  description:
    "A structured 16-point financial suitability and risk management framework to align your trading capital, segment preferences, and risk budgeting before desk activation.",
} as const;

export const TRUST_METRICS = [
  { value: 14, suffix: "+", label: "Years of Research Experience" },
  { value: 5000, suffix: "+", label: "Research Calls Delivered" },
  { value: 4, suffix: "", label: "Market Segments Covered" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
] as const;

export const BUCKETS = [
  {
    id: "equity",
    title: "Equity Research",
    tagline: "Great wealth begins with great businesses.",
    badge: "Cash & Delivery",
    description:
      "Structured intraday and short-term delivery research calls across NSE/BSE stocks with defined entry points, 3 targets, and strict stop-losses.",
    packages: ["Quantum Cash", "Blue Chip", "Midcap Delivery"],
    risk: "Moderate",
    segment: "NSE/BSE Cash",
    accent: "green" as const,
    accentColor: "#1A7F5A",
    href: "/services/equity",
  },
  {
    id: "futures",
    title: "Futures Research",
    tagline: "Ride the trend. Respect the risk.",
    badge: "F&O Segment",
    description:
      "High-momentum stock futures and index futures research on NSE & BSE. Clear entry zones, multiple risk-adjusted profit targets, and disciplined stop-loss levels.",
    packages: ["Stock Futures", "Index Futures", "HNI Futures"],
    risk: "Moderate – High",
    segment: "NSE/BSE Futures",
    accent: "amber" as const,
    accentColor: "#D97706",
    href: "/services/futures",
  },
  {
    id: "options",
    title: "Options Research",
    tagline: "Strategy wins where prediction fails.",
    badge: "F&O Derivatives",
    description:
      "Structured options research from conservative Option Mantra strategies to high-conviction index and stock options for calculated risk-to-reward setups.",
    packages: ["Stock Option Mantra", "Index Options", "HNI Options"],
    risk: "Low – High",
    segment: "NSE/BSE Options",
    accent: "navy" as const,
    accentColor: "#0F1D3A",
    href: "/services/options",
  },
  {
    id: "commodity",
    title: "Commodity Research",
    tagline: "Global markets. Timely research.",
    badge: "MCX Segment",
    description:
      "Multi-asset MCX commodity research covering Bullion (Gold, Silver), Energy (Crude Oil, Natural Gas), and Base Metals with international macro alignment.",
    packages: ["MCX Standard", "MCX HNI", "Wealth Creation Plan"],
    risk: "Moderate",
    segment: "MCX Bullion & Energy",
    accent: "amber" as const,
    accentColor: "#D97706",
    href: "/services/commodity",
  },
] as const;

export const PACKAGES = {
  equity: [
    {
      id: "quantum-cash",
      name: "Quantum Cash",
      tagline: "High-momentum midcap & smallcap intraday calls",
      segment: "Equity — Intraday",
      riskLevel: "Moderate",
      price: 8999,
      formattedPrice: "₹8,999",
      tenure: "1 Month (Monthly)",
      tenureShort: "/month",
      tier: "Basic / Intraday",
      callsPerDay: "3–5",
      targets: "3 Targets + Strict Stop-Loss",
      maxOpenPositions: "2 at a time",
      delivery: ["Telephonic", "WhatsApp"],
      features: [
        "Track sheet updated daily",
        "Daily technical support & resistance sheet",
        "Domestic & global market overview",
        "Dedicated analyst support during market hours",
        "Economic calendar & macro data updates",
      ],
      sampleCall:
        "BUY PRISM CEMENT BELOW ₹111.5 | T1: ₹110.5 | T2: ₹109.5 | T3: ₹108.5 | SL: ₹113.5",
    },
    {
      id: "blue-chip",
      name: "Blue Chip",
      tagline: "NSE heavyweight stocks traded in cash and F&O",
      segment: "Equity — Heavyweights",
      riskLevel: "Low – Moderate",
      price: 24999,
      formattedPrice: "₹24,999",
      tenure: "3 Months (Quarterly)",
      tenureShort: "/3 months",
      tier: "Quarterly Delivery",
      callsPerDay: "2–3",
      targets: "3 Targets + Strict Stop-Loss",
      maxOpenPositions: "2 at a time",
      delivery: ["Telephonic", "WhatsApp"],
      features: [
        "Institutional flow tracking & volume breakout analysis",
        "High-liquidity large cap focus",
        "Domestic & global position updates",
        "Real-time market hours query resolution",
        "Weekly performance summary report",
      ],
      sampleCall:
        "BUY TVSMOTOR ABOVE ₹2525 | T1: ₹2550 | T2: ₹2580 | T3: ₹2610 | SL: ₹2499.8",
    },
    {
      id: "midcap-delivery",
      name: "Midcap Delivery",
      tagline: "Short-term swing & positional holding (2–5 days)",
      segment: "Equity — Delivery",
      riskLevel: "Moderate",
      price: 49999,
      formattedPrice: "₹49,999",
      tenure: "6 Months (Half-Yearly)",
      tenureShort: "/6 months",
      tier: "Positional Delivery",
      callsPerDay: "2–4 per week",
      targets: "3 Targets + Strict Stop-Loss",
      maxOpenPositions: "3 at a time",
      delivery: ["Telephonic", "WhatsApp"],
      features: [
        "Positional setups based on fundamental catalyst & chart breakouts",
        "2 to 5 days calculated holding horizon",
        "Timely trailing stop-loss revisions",
        "In-depth company sector overview",
        "Direct analyst hotline support",
      ],
      sampleCall:
        "BUY TATASTEEL ABOVE ₹154 | T1: ₹158 | T2: ₹162 | T3: ₹168 | SL: ₹149.5",
    },
  ],
  futures: [
    {
      id: "stock-futures",
      name: "Stock Futures",
      tagline: "High-accuracy individual stock futures recommendations",
      segment: "Futures — Stock F&O",
      riskLevel: "Moderate – High",
      price: 15000,
      formattedPrice: "₹15,000",
      tenure: "1 Month (Monthly)",
      tenureShort: "/month",
      tier: "Basic",
      callsPerDay: "2–3",
      targets: "3 Targets + Strict Stop-Loss",
      maxOpenPositions: "2 at a time",
      delivery: ["Telephonic", "WhatsApp"],
      features: [
        "Rigorous technical breakout & volume spread analysis",
        "Strict capital protection with pre-defined stop-loss",
        "Real-time rollover data & open interest interpretation",
        "Support during all active trading hours",
      ],
      sampleCall:
        "BUY RELIANCE FUT ABOVE ₹2940 | T1: ₹2965 | T2: ₹2990 | T3: ₹3020 | SL: ₹2910",
    },
    {
      id: "index-futures",
      name: "Index Futures",
      tagline: "Nifty, Bank Nifty & FinNifty trend-following calls",
      segment: "Futures — Index F&O",
      riskLevel: "Moderate – High",
      price: 15000,
      formattedPrice: "₹15,000",
      tenure: "1 Month (Monthly)",
      tenureShort: "/month",
      tier: "Basic",
      callsPerDay: "2–3",
      targets: "3 Targets + Strict Stop-Loss",
      maxOpenPositions: "2 at a time",
      delivery: ["Telephonic", "WhatsApp"],
      features: [
        "Real-time index pivot & key level alerts",
        "Global index correlations & overnight gift nifty tracking",
        "Disciplined risk-reward ratio minimum 1:2",
        "Instant delivery via Telephonic & WhatsApp channels",
      ],
      sampleCall:
        "BUY NIFTY FUT ABOVE ₹24600 | T1: ₹24680 | T2: ₹24750 | T3: ₹24840 | SL: ₹24520",
    },
    {
      id: "hni-futures",
      name: "HNI Futures",
      tagline:
        "Bespoke high-conviction futures research for capital allocators",
      segment: "Futures — HNI Desk",
      riskLevel: "High Return Focus",
      price: 100000,
      formattedPrice: "₹1,00,000",
      monthlyEquivalent: "₹25,000 / month",
      tenure: "6 Months (Half-Yearly)",
      tenureShort: "/6 months",
      tier: "HNI Desk",
      callsPerDay: "1–2 high conviction",
      targets: "3 Targets + Strict Stop-Loss",
      maxOpenPositions: "2 at a time",
      delivery: ["Telephonic", "WhatsApp", "Direct Analyst Desk"],
      features: [
        "Priority senior analyst direct consultation",
        "Multi-timeframe confirmation before publishing",
        "Comprehensive domestic & global risk overview",
        "Real-time trailing stop adjustments",
      ],
      sampleCall:
        "BUY BANKNIFTY FUT ABOVE ₹51200 | T1: ₹51450 | T2: ₹51700 | T3: ₹52000 | SL: ₹50950",
    },
  ],
  options: [
    {
      id: "option-mantra",
      name: "Stock Option Mantra",
      tagline:
        "Low-risk structured options strategies for steady capital growth",
      segment: "Options — Stock Strikes",
      riskLevel: "Low – Moderate",
      price: 18000,
      formattedPrice: "₹18,000",
      tenure: "1 Month (Monthly)",
      tenureShort: "/month",
      tier: "Basic",
      callsPerDay: "2–3",
      targets: "3 Targets + Strict Stop-Loss",
      maxOpenPositions: "2 at a time",
      delivery: ["Telephonic", "WhatsApp"],
      features: [
        "Options Greeks tracking (Theta, Delta, Gamma risk control)",
        "Specialized in range-bound and trending market phases",
        "Daily updated track sheet",
        "Live market hour updates and exit alerts",
      ],
      sampleCall:
        "BUY NIFTY 24500 CE ABOVE ₹135 | T1: ₹155 | T2: ₹175 | T3: ₹205 | SL: ₹110",
    },
    {
      id: "index-options",
      name: "Index Options",
      tagline: "High-momentum Nifty & Bank Nifty strike calls",
      segment: "Options — Index Strikes",
      riskLevel: "Moderate",
      price: 18000,
      formattedPrice: "₹18,000",
      tenure: "1 Month (Monthly)",
      tenureShort: "/month",
      tier: "Basic",
      callsPerDay: "3–4",
      targets: "3 Targets + Strict Stop-Loss",
      maxOpenPositions: "2 at a time",
      delivery: ["Telephonic", "WhatsApp"],
      features: [
        "Precise strike selection with high liquidity",
        "Event-driven volatility & expiry day strategy calls",
        "Clear stop-loss to prevent premium decay erosion",
        "Instant execution alerts via Telephonic & WhatsApp",
      ],
      sampleCall:
        "BUY BANKNIFTY 51000 PE ABOVE ₹240 | T1: ₹275 | T2: ₹315 | T3: ₹360 | SL: ₹195",
    },
    {
      id: "hni-options",
      name: "HNI Options",
      tagline: "Aggressive return potential with short-term trend confirmation",
      segment: "Options — HNI Desk",
      riskLevel: "High",
      price: 150000,
      formattedPrice: "₹1,50,000",
      monthlyEquivalent: "₹30,000 / month",
      tenure: "6 Months (Half-Yearly)",
      tenureShort: "/6 months",
      tier: "HNI Desk",
      callsPerDay: "4–5 per week",
      targets: "3 Targets + Strict Stop-Loss",
      maxOpenPositions: "2 at a time",
      delivery: ["Telephonic", "WhatsApp", "Direct Analyst Desk"],
      features: [
        "16–18 curated trading recommendations per month",
        "Short-term stock trend + institutional order book review",
        "Direct analyst hotline access during market hours",
        "Complete global market overview & exit management",
      ],
      sampleCall:
        "BUY POWERGRID 310 CE ABOVE ₹8.5 | T1: ₹11.0 | T2: ₹13.5 | T3: ₹16.0 | SL: ₹6.0",
    },
  ],
  commodity: [
    {
      id: "mcx-standard",
      name: "MCX Standard",
      tagline: "Comprehensive research for all major MCX commodity contracts",
      segment: "Commodity — MCX",
      riskLevel: "Moderate",
      price: 18000,
      formattedPrice: "₹18,000",
      tenure: "1 Month (Monthly)",
      tenureShort: "/month",
      tier: "Basic",
      callsPerDay: "2–3",
      targets: "3 Targets + Strict Stop-Loss",
      maxOpenPositions: "2 at a time",
      delivery: ["Telephonic", "WhatsApp"],
      features: [
        "Covers Bullion (Gold, Silver) & Energy (Crude, Natural Gas)",
        "Base Metals (Copper, Zinc, Aluminium, Lead) setup alerts",
        "Evening market session support till 11:30 PM",
        "US macroeconomic data & EIA inventory report context",
      ],
      sampleCall:
        "BUY MCX CRUDE OIL ABOVE ₹6250 | T1: ₹6310 | T2: ₹6380 | T3: ₹6460 | SL: ₹6170",
    },
    {
      id: "mcx-hni",
      name: "MCX HNI",
      tagline:
        "High-value commodity contracts with international macro alignment",
      segment: "Commodity — HNI Desk",
      riskLevel: "High Conviction",
      price: 25000,
      formattedPrice: "₹25,000",
      tenure: "1 Month (Monthly)",
      tenureShort: "/month",
      tier: "HNI Desk",
      callsPerDay: "1–2 high conviction",
      targets: "3 Targets + Strict Stop-Loss",
      maxOpenPositions: "2 at a time",
      delivery: ["Telephonic", "WhatsApp", "Direct Support"],
      features: [
        "Focus on high-volume Bullion and Energy contracts",
        "Global COMEX, NYMEX, and LME correlation analysis",
        "Dedicated relationship manager during extended market hours",
        "Real-time trailing profit protection",
      ],
      sampleCall:
        "BUY MCX GOLD (1KG) ABOVE ₹72400 | T1: ₹72850 | T2: ₹73300 | T3: ₹73900 | SL: ₹71950",
    },
    {
      id: "wealth-creation",
      name: "Wealth Creation Plan",
      tagline: "Multi-segment integrated research advisory for serious traders",
      segment: "Cross-Asset Multi-Bucket",
      riskLevel: "Balanced",
      price: 30000,
      formattedPrice: "₹30,000",
      tenure: "1 Month (Monthly)",
      tenureShort: "/month",
      tier: "Wealth Creation",
      callsPerDay: "Customized according to capital",
      targets: "Defined Targets & Stop-Loss",
      maxOpenPositions: "Customized",
      delivery: ["Telephonic", "WhatsApp", "Priority Analyst Desk"],
      features: [
        "Customized asset allocation across Equity, Derivatives & MCX",
        "Holistic short-term and medium-term strategy framework",
        "Regular portfolio review and risk-budget calibration",
        "Priority senior analyst direct consultation",
      ],
      sampleCall: "MULTI-ASSET HEDGE: LONG BLUE CHIP CASH + MCX GOLD STRATEGY",
    },
  ],
} as const;

export const FAQ_ITEMS = [
  {
    q: "What services does Stock Buckets Research Company offer?",
    a: "Stock Buckets Research Company provides structured, independent market research across four key financial segments: Equity (Intraday and Delivery), Futures (Stock and Index), Options (Low-risk strategies and Index/HNI setups), and Commodities (MCX Bullion, Energy, and Base Metals). All recommendations include a precise entry level, three risk-adjusted targets, and a non-negotiable stop-loss.",
  },
  {
    q: "Do you guarantee returns or offer profit-sharing services?",
    a: "No. We strictly DO NOT guarantee returns, assure profits, or provide profit-sharing arrangements under any circumstances. All market trading involves financial risk. Our service fee is charged solely for analytical research delivery, not for investment outcomes.",
  },
  {
    q: "How are research calls generated and verified?",
    a: "Every research call follows our structured 4-stage framework: (1) Algorithmic and manual market scanning, (2) Technical chart pattern and volume spread analysis, (3) Fundamental context overlay, and (4) Strict risk-to-reward ratio assessment. Recommendations are only published when the risk setup meets our strict capital protection criteria.",
  },
  {
    q: "How will I receive research recommendations?",
    a: "All official research calls are delivered strictly via Telephonic and registered WhatsApp communication channels directly to your verified mobile number. We do NOT operate or distribute calls via any Telegram channels or unofficial groups.",
  },
  {
    q: "What is your refund policy?",
    a: "All subscription and advisory service fees paid to Stock Buckets Research Company are non-refundable. The fee covers the intellectual property, analytical research work, and communications infrastructure rendered. Please review our service packages and terms carefully before subscribing.",
  },
  {
    q: "Do you offer free trials or demo trading calls?",
    a: "No. We do not provide free trials, temporary demo accounts, or unsolicited tips. We maintain strict research integrity and deliver calls exclusively to verified, active subscribers.",
  },
  {
    q: "How can I contact customer support or raise a grievance?",
    a: "You can reach our dedicated support desk via phone (+91-532-6914710) or email (service@stockbuckets.in) during market hours. Any unresolved concerns can be formally submitted through our Grievance Redressal Mechanism page, which guarantees review within 21 working days.",
  },
] as const;

export const ARTICLES = [
  {
    slug: "understanding-intraday-volatility",
    title:
      "Understanding Intraday Volatility: Why Stop-Loss Discipline Defines Long-Term P&L",
    category: "Equity",
    categoryColor: "green",
    date: "August 12, 2026",
    readTime: "5 min read",
    excerpt:
      "A research analyst's perspective on why the stop-loss is not a sign of failure — it is the single most vital metric ensuring long-term capital preservation across volatile market cycles.",
    content: `
### The Mathematical Reality of Drawdown
In capital market trading, the most common trap is focusing purely on target accuracy rather than risk asymmetry. A series of small profitable trades can be completely wiped out by a single unhedged position where a trader refuses to acknowledge that the market setup has invalidated.

#### 1. The Asymmetry of Losses
When you incur a 10% loss on capital, you need an 11.1% gain to break even. But if you allow a loss to run to 50%, you need a staggering 100% gain just to return to your starting capital. This mathematical reality makes capital preservation the foundation of every professional research call.

#### 2. How Stock Buckets Formulates Stop-Loss Levels
Every stop-loss level provided in our Quantum Cash and Blue Chip buckets is derived from structural support/resistance invalidation, Average True Range (ATR) volatility bands, and volume-weighted average price (VWAP) zones. We never use arbitrary round numbers.

#### 3. Execution Discipline
- Always enter within the defined entry zone.
- Set your system stop-loss the moment the position is entered.
- Never move a stop-loss further away from your entry price.
- Lock in partial profits when Target 1 is reached and trail the stop-loss to cost.
    `,
  },
  {
    slug: "option-mantra-range-bound-markets",
    title:
      "Option Mantra: How Structured Strategies Protect Capital in Range-Bound Markets",
    category: "Options",
    categoryColor: "navy",
    date: "August 08, 2026",
    readTime: "6 min read",
    excerpt:
      "Markets spend approximately 70% of their trading days in consolidation. Learn how structured Greek-aligned options strategies capture value when direct directional momentum is absent.",
    content: `
### The Challenge of Time Decay (Theta)
Directional option buying in sideways markets is mathematically skewed against the trader due to continuous Theta decay. When an index or stock spends days inside a narrow range, out-of-the-money options lose value rapidly even if the underlying price remains relatively stable.

#### Understanding Greeks in Strategy Design
Our Option Mantra package is designed specifically to mitigate this vulnerability:
1. **Delta Alignment**: Ensuring the strike price has sufficient sensitivity to capture rapid intraday breakouts without excessive premium inflation.
2. **Theta Management**: Selecting strike expiries with optimal time-value preservation curves.
3. **Implied Volatility (IV) Monitoring**: Avoiding high-IV premium overpricing before major scheduled events.

#### Strategic Recommendations for Options Subscribers
- Never trade naked options without defined stop-loss limits.
- Limit overnight exposures during major macroeconomic rate decision announcements.
- Adhere strictly to the defined maximum open position limits (maximum 2 open setups at any given time).
    `,
  },
  {
    slug: "gold-vs-crude-oil-mcx-dynamics",
    title: "Gold vs. Crude Oil: Reading Inter-Market Macro Signals on MCX",
    category: "Commodity",
    categoryColor: "amber",
    date: "August 02, 2026",
    readTime: "7 min read",
    excerpt:
      "Gold and Crude Oil are two of India's most actively traded commodity contracts. Here is how international central bank policies, dollar index strength, and energy inventories dictate price action.",
  },
] as const;

export const TICKER_ITEMS = [
  "NIFTY 50",
  "BANKNIFTY",
  "SENSEX",
  "MCX GOLD",
  "MCX SILVER",
  "CRUDE OIL",
  "NATURAL GAS",
  "USD/INR",
  "COPPER",
  "ZINC",
  "NIFTY MIDCAP 100",
  "MCX ALUMINIUM",
  "FINNIFTY",
  "BRENT CRUDE",
] as const;
