# Product Requirements Document
## Stock Buckets Research Company — Official Website
### Version 2.0 | Complete Revised Edition | August 2026

---

# ══════════════════════════════════
# PART ONE — NON-TECHNICAL GUIDE
# (For Founders, Stakeholders & Content Owners)
# ══════════════════════════════════

---

## 1. What Are We Building & Why

**Stock Buckets Research Company** needs a website that does one job above everything else: make a first-time visitor trust us within the first 10 seconds. The Indian market advisory space is cluttered with low-credibility operators. Our website must immediately signal that we are different — structured, research-driven, and professional.

This is a **fully static website** — meaning there is no login system, no database, no server. It's fast, secure, and cheap to host. A visitor fills a contact form and we get their details by email. That's it.

### What the site must feel like:
Imagine walking into a private bank or a premium brokerage office — clean, orderly, confident. Light-toned. Legible. Precise. Think **Zerodha's website** in clarity, **Morgan Stanley's** weight of trust, and **Groww's** warmth for approachability. Not cold. Not flashy. Trustworthy.

### What the site must NOT feel like:
- A stock tips SMS blasting service
- An "88% accuracy guaranteed" advisory scam
- An AI-generated template with generic blue gradients and stock handshake photos
- A 2015 WordPress site with green candle animations

---

## 2. Brand Identity

### Company Name
**Stock Buckets Research Company**
Tagline: *"Clarity Before Every Call."*

### Why Light Theme?
You are 100% right. For a financial advisory firm:
- Light = Transparency, trust, legibility — just like NSE/BSE portals, Zerodha, ET Markets
- Clients read our reports in office environments and on mobile screens under sunlight
- Dark themes can feel "trading desk" — but advisory firms are *research publishers*, not traders
- Light-on-white text with proper contrast reads as structured and authoritative

### Color System

| Name | Hex | Purpose |
|---|---|---|
| Ink Navy | `#0F1D3A` | Primary text, headers, logo, CTA buttons |
| Sage Green | `#1A7F5A` | Accent: CTAs hover state, active states, upward indicators |
| Soft Amber | `#D97706` | Secondary accent: badges, highlights, "new" tags |
| Cloud White | `#FAFBFD` | Page background — pure, not harsh |
| Mist Gray | `#F0F4F8` | Section alternating background, card backgrounds |
| Steel | `#64748B` | Body text, secondary copy |
| Border Gray | `#E2E8F0` | Dividers, card borders |
| Success Green | `#16A34A` | Positive market indicators |
| Alert Red | `#DC2626` | Risk disclaimers, negative indicators |

**The signature aesthetic:** Think of a premium financial research PDF — cream-white, strong dark headlines, structured columns, subtle rules and dividers. That same language, brought to the web.

### Typography

| Role | Font | Size/Weight | Usage |
|---|---|---|---|
| Display | **Playfair Display** | 48–72px, Bold | Hero headline only |
| Heading | **Inter** | 24–40px, SemiBold/Bold | All section titles |
| Body | **Inter** | 15–17px, Regular | Paragraphs, descriptions |
| Data/Stats | **IBM Plex Mono** | 28–48px, Bold | Numbers, metrics, call examples |
| Caption | **Inter** | 12–13px, Medium | Labels, tags, disclaimers |

**Why Playfair Display for hero only?** It's a serif editorial face — it reads like the headline on a Mint or Bloomberg article. Combined with Inter's clean structure everywhere else, it signals "serious research publication" without being stiff.

---

## 3. Signature Design Element

A thin horizontal **"market ticker strip"** — a single clean line running across the hero section showing static market segment labels (NIFTY 50 · BANKNIFTY · MCX GOLD · CRUDE OIL · USD/INR · MCX SILVER · NATURAL GAS · SENSEX) scrolling smoothly using pure CSS animation. This ticker is **visual decoration only** — not live data — but it immediately contextualizes the business domain and creates an authentic financial feel.

The other signature element is **"Bucket Cards"** — our service packages presented as literal named buckets (Equity Bucket, Futures Bucket, Options Bucket, Commodity Bucket), with clear icons and structured information. This plays off the company name visually and creates a memorable, own-able design motif.

---

## 4. Animation Philosophy

We are using **pure CSS animations only** — no JavaScript animation libraries. This gives us:
- ✅ Zero flicker or "pop-in" effect on page load
- ✅ Butter-smooth 60fps on all devices including low-end Android
- ✅ Much smaller bundle size (saves 60–80KB of JS)
- ✅ Animations respected by browser's reduced-motion settings
- ✅ No hydration mismatch issues in Next.js

**What animates:**
- Hero section: CSS `@keyframes fadeInUp` on headline, subtext, and CTA buttons (staggered with `animation-delay`)
- Stats: CSS `@keyframes countUp` — numbers count up when you first scroll to them (via `IntersectionObserver` triggering a CSS class, keeping it lightweight)
- Cards: CSS `transition` for hover states (scale, shadow, border color)
- Navbar: CSS `transition` for background blur on scroll
- Ticker: Continuous CSS `@keyframes translateX` loop
- Section reveals: CSS `@keyframes fadeInUp` triggered by an `IntersectionObserver` adding a class
- SVG illustrations: CSS `@keyframes` stroke-dashoffset drawing animations on the hero SVG

**SVG Illustrations instead of stock photos:** We will use hand-crafted SVG illustrations — a stock chart with a clean upward trend line, a pie chart for diversification, a candle chart — these are lightweight, infinitely scalable, and feel authentic to the domain.

---

## 5. Complete Page-by-Page Content Specification

---

### PAGE 1: HOME (`/`)

#### Section A — Navigation Bar

**Logo:** "Stock Buckets" in Ink Navy bold serif + a small SVG icon of three stacked buckets/circles
**Left:** Logo
**Center:** Nav links — Home | About | Services (dropdown) | Insights | Contact
**Right:** Phone number (clickable) + "Get Research Call" button (filled, navy blue)

**Services Dropdown:**
- Equity Research
- Futures Research
- Options Research
- Commodity Research

**Mobile Behavior:** Hamburger → slide-down panel with all links and CTA button
**Scroll Behavior:** On scroll > 60px, navbar adds `box-shadow` and `backdrop-filter: blur(8px)` with slightly reduced opacity background — pure CSS transition

---

#### Section B — Hero (Most Critical Section)

**This is our biggest investment in design. Here is the exact spec:**

**Desktop Layout (≥1024px):**
- Left column (55% width): Text content
- Right column (45% width): Animated SVG illustration

**Left Column Text Stack:**
```
[Ticker strip — scrolling horizontally, subtle, 1 line]

[Label badge]: "India's Market Research Platform"

[Display headline — Playfair Display 64px]:
"Research-Backed
Market Calls.
Zero Noise."

[Body copy — Inter 18px]:
"Stock Buckets delivers structured, risk-defined
research across equity, futures, options and
commodity markets — so you trade with clarity,
not guesswork."

[CTA Row]:
[Navy Button] "Explore Our Services"    [Ghost Button] "Talk to a Research Analyst"

[Trust proof bar]:
★ 14+ Years of Research Experience  |  5,000+ Calls Delivered  |  4 Market Segments
```

**Right Column SVG Animation:**
A composed SVG scene:
1. A clean stock chart (line chart going upward with small dots at data points) — stroke-draws itself in on load
2. Three stacked "bucket" circles below the chart — filled sequentially with color
3. A subtle grid of horizontal lines behind everything
4. A floating badge: "BUY NIFTY 21800 CE | Target: 22100 | SL: 21600" — styled like an actual call card, fades in last

This SVG animation plays once on load, then holds its final state. Pure CSS keyframes.

**Mobile Layout (<768px):**
- Single column
- Ticker strip still visible, slightly smaller
- Headline: 36px, 3 lines max
- SVG illustration: below the text, scaled to 80% width, centered
- CTA buttons: full width, stacked

**Key design decision:** The hero does NOT use a photo background. The white/mist background with the SVG chart illustration makes it look like a research report, not a random financial website.

---

#### Section C — Trust Metrics Strip

Full-width mist gray band, 4 metrics in a row:

| Stat | Label |
|---|---|
| `14+` | Years of Research Experience |
| `5,000+` | Research Calls Delivered |
| `4` | Market Segments Covered |
| `98%` | Client Retention Rate |

- Numbers displayed in IBM Plex Mono, 48px, Ink Navy
- Numbers count up via IntersectionObserver + CSS animation class
- Thin vertical dividers between each metric (visible on desktop, hidden on mobile → 2×2 grid instead)

---

#### Section D — About Summary (2-column)

**Left column:** Heading + tabs + content
**Right column:** A structured visual — NOT a photo. Instead: a vertical timeline of "Our Research Process" with 4 nodes connected by a line:
1. Market Scanning → 2. Technical Analysis → 3. Fundamental Overlay → 4. Risk Assessment → Call Delivery

**Heading:** "We Organize Market Intelligence Into Actionable Research"
**Subheading:** "Stock Buckets was built on a simple belief: every market call must come with context, a target, and a stop-loss. No exceptions."

**Tab 1 — Our Mission:**
"To deliver clear, structured market research across India's equity, derivatives, and commodity markets — giving traders and investors the context they need to make every decision with confidence."

**Tab 2 — Our Vision:**
"To become India's most trusted independent market research platform — known for analytical integrity, transparent methodology, and research that consistently helps clients stay ahead of the market."

**Tab 3 — Our Approach:**
"Every research call from Stock Buckets follows a consistent framework: we scan the markets, run technical analysis, layer in fundamental context, define the risk, and only then publish the recommendation. No calls without context. No tips without stop-losses."

---

#### Section E — Services Overview (Bucket Cards)

**Heading:** "Our Research Buckets"
**Subheading:** "Choose the market segment that fits your trading style and capital allocation."

4 cards in a 2×2 grid (desktop) / 1 column (mobile):

**Card 1 — Equity Research Bucket**
- Icon: SVG of a candlestick chart
- Badge: "Cash & Delivery"
- Title: "Equity Research"
- Tagline: "Great wealth begins with great businesses."
- Description: "Intraday and short-term delivery calls across NSE stocks. Includes Quantum Cash (midcap/smallcap intraday) and Blue Chip (NSE heavyweight stocks) packages."
- Packages listed: Quantum Cash · Blue Chip · Midcap Delivery
- Link: "See Equity Packages →"
- Card accent: left border in Sage Green

**Card 2 — Futures Research Bucket**
- Icon: SVG of a trending chart with arrows
- Badge: "F&O Segment"
- Title: "Futures Research"
- Tagline: "Ride the trend. Respect the risk."
- Description: "Stock futures and index futures calls on NSE and BSE. Defined entry zones, 3 targets, and a clear stop-loss for every call."
- Packages listed: Stock Futures · Index Futures · HNI Futures
- Link: "See Futures Packages →"
- Card accent: left border in Soft Amber

**Card 3 — Options Research Bucket**
- Icon: SVG of a theta/Greek letter style graphic
- Badge: "F&O Segment"
- Title: "Options Research"
- Tagline: "Strategy wins where prediction fails."
- Description: "Low-risk to high-risk options calls — from Option Mantra (structured, low risk) to HNI Options (short-term, higher return potential). All calls include strike, target, and stop-loss."
- Packages listed: Option Mantra · Index Options · HNI Options
- Link: "See Options Packages →"
- Card accent: left border in Ink Navy

**Card 4 — Commodity Research Bucket**
- Icon: SVG of gold bars / commodity goods
- Badge: "MCX Segment"
- Title: "Commodity Research"
- Tagline: "Global markets. Timely research."
- Description: "MCX commodity research covering bullion (Gold, Silver), energy (Crude Oil, Natural Gas), and base metals. Both standard and HNI packages available."
- Packages listed: MCX Standard · MCX HNI · Wealth Creation
- Link: "See Commodity Packages →"
- Card accent: left border in Soft Amber

**Card hover state:** Elevation shadow increase, left border brightens, subtle card lift (CSS transform: translateY(-4px))

---

#### Section F — How It Works (3-Step Process)

**Heading:** "How Our Research Reaches You"
Horizontal 3-step layout with numbered icons and connecting dashes:

1. **Subscribe to Your Bucket** — Select the market segment and package that matches your trading style and capital.
2. **Receive Structured Research Calls** — Calls are delivered via SMS and registered instant messengers with entry zone, 3 targets, and a stop-loss — every single time.
3. **Trade With Full Context** — Our team provides follow-ups, market updates, domestic and global position overviews, and real-time support during market hours.

---

#### Section G — Why Choose Stock Buckets

**Heading:** "What Sets Our Research Apart"

3 columns, each a small card:

1. **Defined Risk on Every Call** — We never publish a call without a stop-loss. Capital protection is the foundation of every recommendation.
2. **Multi-Layer Research Framework** — Every call is the result of technical analysis, fundamental review, and macro-economic context — not a shortcut or a rumor.
3. **All Segments, One Platform** — Equity, Futures, Options, and Commodities — managed under one research roof with consistent methodology.
4. **Real-Time Market Support** — Our research team is available during market hours for follow-ups, queries, and live tracking updates.
5. **No Telegram, No Ambiguity** — We do not operate any Telegram channels. All calls are delivered only via SMS and registered instant messengers.
6. **Transparent Track Record** — Call performance is tracked on a published sheet — updated regularly so clients can verify our research history.

---

#### Section H — Sample Research Call (Visual)

A full-width light section with a "sample call card" — rendered as a designed component, showing:

```
┌─────────────────────────────────────────────────┐
│  STOCK BUCKETS RESEARCH | SAMPLE CALL CARD      │
├─────────────────────────────────────────────────┤
│  Segment: EQUITY — QUANTUM CASH               │
│  Script: PREMIERPRI                           │
│  Action: BUY ABOVE ₹1,270                    │
│  Target 1: ₹1,282.7  Target 2: ₹1,295.4      │
│  Target 3: ₹1,308.1  Stop-Loss: ₹1,244.6     │
│  Delivery via: SMS + Instant Messenger         │
│  Risk Profile: Moderate                        │
└─────────────────────────────────────────────────┘
```
Below the card: *"This is a sample illustration only. Actual research calls are delivered only to active subscribers."*

This is a powerful trust signal — it shows our format is structured and professional.

---

#### Section I — FAQ

**Heading:** "Common Questions"
Accordion component — expand/collapse per question.

**Q1:** What services does Stock Buckets Research Company offer?
**A1:** We provide structured market research across four segments: Equity (intraday and delivery), Futures (stock and index), Options (structured and HNI), and Commodity (MCX — bullion, energy, base metals). All research calls include entry zone, targets, and stop-loss.

**Q2:** Do you guarantee returns or offer profit-sharing?
**A2:** No. We do not guarantee any returns, profits, or outcomes. We do not offer profit-sharing services. All investment and trading activities carry market risk, and our service fee covers research delivery only — not investment outcomes.

**Q3:** How are your research calls generated?
**A3:** Through a multi-layer process: technical analysis of chart patterns and indicators, fundamental review of the underlying company or commodity, and macro-economic context. Every call must pass our internal review before being published.

**Q4:** How will I receive research calls?
**A4:** All research calls are delivered via SMS and registered instant messengers. We do not operate any Telegram channels. We have no affiliation with any Telegram-based advisory group.

**Q5:** Are there free trials available?
**A5:** No. We do not offer free trials, demo accounts, or sample calls outside of what is shown on our website. We also do not offer refunds on advisory service fees.

**Q6:** What is your refund policy?
**A6:** Service fees paid for research packages are non-refundable. Our fees cover the research advisory service rendered, not investment outcomes. Please review our Terms & Conditions before subscribing.

**Q7:** How do I raise a complaint or grievance?
**A7:** You may contact us at our official email or phone number. Unresolved grievances can be escalated through our Grievance Mechanism page. Please do not make payments to any personal accounts or unofficial channels.

---

#### Section J — Market Insights (Blog Preview)

**Heading:** "Market Intelligence"
**Subheading:** "Research perspectives from our analyst team"

3 article cards in a row (desktop) / stacked (mobile):

**Article 1:**
- Category tag: EQUITY
- Title: "Understanding Intraday Volatility: Why Stop-Loss Discipline Defines Long-Term P&L"
- Excerpt: A research analyst's guide to why the stop-loss is not a concession — it's the most important number in any trade.
- Date + Read Time

**Article 2:**
- Category tag: OPTIONS
- Title: "Option Mantra: How Low-Risk Options Strategies Can Outperform in Sideways Markets"
- Excerpt: Not every market is trending. Here's why structured options positions earn their keep in range-bound conditions.
- Date + Read Time

**Article 3:**
- Category tag: COMMODITY
- Title: "Gold vs Crude Oil: Reading MCX Signals in a Volatile Global Environment"
- Excerpt: Two of India's most actively traded commodities — how macro events move their prices and what to watch for.
- Date + Read Time

---

#### Section K — CTA Banner

Full-width section, Ink Navy background, white text:

"Have a market question? Our research team is available."
"Call us during market hours or drop a message and we'll reach back within the trading day."
**Button:** "Contact Our Research Team" (white outlined, navy text)

---

#### Section L — Footer

**4 columns:**

**Column 1 — Brand**
- Stock Buckets logo + tagline
- Address (to be filled)
- Email
- Phone
- Social: LinkedIn · X · Instagram

**Column 2 — Quick Links**
- Home
- About
- Services
- Pricing
- Market Insights
- Contact

**Column 3 — Legal & Compliance**
- Terms & Conditions
- Do's & Don'ts
- Disclaimer
- Disclosure
- Grievance Mechanism
- Investor Charter

**Column 4 — Research Segments**
- Equity Research
- Futures Research
- Options Research
- Commodity Research

**Footer Bottom Bar:**
*"All investments in capital markets are subject to market risk. Past performance is not indicative of future results. Read all related documents carefully before subscribing. Stock Buckets Research Company does not provide guaranteed returns, profit-sharing services, or investment advice under SEBI's Investment Advisor category."*

© 2026 Stock Buckets Research Company. All Rights Reserved.

---

### PAGE 2: ABOUT (`/about`)

#### Hero
- Heading: "About Stock Buckets Research Company"
- Subheading: "Built on a single principle — research first, calls second."

#### Section: Our Story
- Year established
- Philosophy of structured, defined-risk research
- How the company grew across market segments
- 14+ years of research experience

#### Section: Our Research Philosophy
3 columns:
1. **Discipline Over Prediction** — We don't try to predict markets. We define the setup, the risk, and the reward — then let the market decide.
2. **Transparency in Every Call** — Every research call we deliver includes the reasoning, the targets, and the stop-loss. No ambiguity.
3. **Capital Protection First** — Before we talk about profits, we define the stop-loss. This is non-negotiable across all our research packages.

#### Section: Our Values
4 cards — Integrity · Transparency · Discipline · Independence

#### Section: Our Research Team (Optional — if client wants)
Placeholder profile cards with designation titles:
- Head of Equity Research
- Derivatives Research Analyst
- Commodity Research Analyst
- Client Relations Manager

#### Contact Info Band
Address, email, phone, working hours

---

### PAGE 3: SERVICES LANDING (`/services`)

#### Hero
- Heading: "Research Packages Across All Market Segments"
- Subheading: "Every bucket is a structured research service with defined calls, targets, stop-losses, and delivery via SMS."

#### 4 Bucket Overview Cards
(Same as homepage but more detail)

#### Comparison Table
A feature matrix showing what's included across all 4 buckets:

| Feature | Equity | Futures | Options | Commodity |
|---|---|---|---|---|
| Calls per day/week | Varies | Varies | Varies | Varies |
| Target levels | 3 | 3 | 3 | 3 |
| Stop-loss included | ✓ | ✓ | ✓ | ✓ |
| Market segment | NSE/BSE | NSE/BSE | NSE/BSE | MCX |
| Risk level | Moderate | Moderate–High | Low–High | Moderate |
| SMS delivery | ✓ | ✓ | ✓ | ✓ |
| Market hour support | ✓ | ✓ | ✓ | ✓ |

---

### PAGE 4: EQUITY RESEARCH (`/services/equity`)

#### Hero
- Heading: "Equity Research Bucket"
- Tagline: "Great wealth begins with great businesses."
- Description: Structured intraday and short-term delivery calls for NSE stocks

#### What is Equity Research?
Plain-English explanation: shares, NSE, BSE, intraday vs delivery

#### Our Equity Packages

**Package 1 — Quantum Cash**
- Designed for: Midcap and smallcap NSE intraday traders
- Risk Profile: Moderate
- Calls per day: 3–5
- Targets: 3 targets + 1 stop-loss per call
- Max open positions: 2 at a time
- Includes: Track sheet (updated daily) · Daily information sheet · Domestic & global market overview · Customer support during market hours · Market trend + support/resistance levels · Economic updates
- Delivery: SMS + Instant Messenger only
- Sample call: `BUY PRISM CEMENT BELOW 111.5 — T1: 110.5 | T2: 109.5 | T3: 108.5 | SL: 113.5`

**Package 2 — Blue Chip**
- Designed for: NSE heavyweight stock traders (NSE cash scripts also traded in F&O)
- Risk Profile: Low–Moderate
- Calls per day: 2–3
- Targets: 3 targets + 1 stop-loss
- Max open positions: 2 at a time
- Includes: Open target calls with strict stop-loss · Domestic & global market overview · Customer support during market hours · Economic data updates
- Delivery: SMS + Instant Messenger only
- Sample call: `BUY TVSMOTOR ABOVE 2525 — T1: OPEN | T2: OPEN | T3: OPEN | SL: 2499.8`

**Package 3 — Midcap Delivery**
- Designed for: Short-term delivery traders on NSE midcap stocks
- Risk Profile: Moderate
- Tailored for investors who want 2–5 day holding positions
- Entry + exit + stop-loss for every call

#### Risk Disclosure
All equity investments are subject to market risk. Past performance is not indicative of future results. Service fees are not refundable.

#### CTA
"Subscribe to Equity Bucket" + Contact link

---

### PAGE 5: FUTURES RESEARCH (`/services/futures`)

#### Hero
- Heading: "Futures Research Bucket"
- Tagline: "Ride the trend. Respect the risk."

#### What is Futures Trading?
Plain explanation: futures contracts, F&O segment, leverage, NSE/BSE

#### Our Futures Packages

**Package 1 — Stock Futures**
- Good-accuracy trading calls in the Futures segment
- Deep research and precise predictions
- 3 targets + stop-loss for each call
- Market hour support

**Package 2 — Index Futures**
- Trading recommendations for all Index Futures on NSE and BSE
- Nifty, BankNifty, and other index futures
- 3 targets + stop-loss

**Package 3 — HNI Futures**
- High-value, larger-lot futures calls
- Designed for traders with higher capital allocation
- Emphasis on high accuracy with strict risk controls

#### Risk Disclosure

---

### PAGE 6: OPTIONS RESEARCH (`/services/options`)

#### Hero
- Heading: "Options Research Bucket"
- Tagline: "Strategy wins where prediction fails."

#### What is Options Trading?
Plain explanation: calls, puts, strikes, expiry, F&O segment

#### Our Options Packages

**Package 1 — Option Mantra**
- Designed for: Low-risk options traders
- Calls per day: 2–3
- Targets: 3 targets + 1 stop-loss
- Max open positions: 2 at a time
- Analysts specialize in tracking F&O market, national and international events, major sectors
- All blended with technical analysis
- Track sheet updated daily · Follow-ups and news updates · Market hour support · Economic updates
- Delivery: SMS + Instant Messenger
- Sample call: `BUY NIFTY 9100 PUT ABOVE 240 — T1: 250 | T2: 260 | T3: 270 | SL: 220`

**Package 2 — Index Options**
- Exclusively for traders who focus on index options (NSE and BSE)
- Nifty and BankNifty options calls
- Structured approach with defined risk

**Package 3 — HNI Options**
- Designed for: Option traders seeking higher returns with higher risk tolerance
- 16–18 trading recommendations per month
- Calls based on short-term stock trend, technical + fundamental analysis
- 4–5 calls per week
- 3 targets + 1 stop-loss per call
- Max 2 open positions at a time
- Follow-ups and market news updates
- Complete support + direct mobile number access
- Domestic and global market position overview
- Delivery: SMS + Instant Messenger
- Sample call: `BUY POWERGRID 155 PUT ABOVE 4 — T1: 5 | T2: 6 | T3: 7 | SL: 3.5`

---

### PAGE 7: COMMODITY RESEARCH (`/services/commodity`)

#### Hero
- Heading: "Commodity Research Bucket"
- Tagline: "Global markets. Timely research."

#### What is MCX Commodity Trading?
Plain explanation: MCX exchange, bullion, energy, base metals, futures contracts

#### Our Commodity Packages

**Package 1 — MCX Standard**
- Trading tips, support, and guidance for all MCX commodity segments
- Covers: Gold, Silver, Crude Oil, Natural Gas, Copper, Zinc, Lead, Aluminium
- 3 targets + stop-loss for every call
- Market hour support

**Package 2 — MCX HNI**
- High-value calls across all MCX segments
- Higher accuracy focus with larger lot recommendations
- Domestic and global commodity position overview

**Package 3 — Wealth Creation Plan**
- Highly personalized research and advisory service
- Integrated financial solution across asset classes
- Designed for: Short-term and long-term financial goals
- Personalized to client's financial needs and risk profile
- Regular review and strategy adjustments

#### MCX Segments We Cover (Visual Grid)
- 🥇 Bullion: Gold (1kg / 100g), Silver
- ⚡ Energy: Crude Oil, Natural Gas
- 🔧 Base Metals: Copper, Zinc, Aluminium, Lead
- 🌾 Agricultural: Selected NCDEX segments (if applicable)

---

### PAGE 8: PAYMENT (`/payment`)

#### Heading: "Payment Instructions"

**Important Notice (highlighted box):**
"The payment information on this page is the only official, authorized payment channel of Stock Buckets Research Company. Please verify all payment details carefully before transacting."

**What to check before paying:**
- Verify the company name matches: Stock Buckets Research Company
- Verify the UPI ID / bank account name before confirming
- Do NOT make payments to personal accounts
- Do NOT make payments based on requests from unofficial channels or WhatsApp/Telegram

**Payment modes (to be filled by client):**
- Bank Transfer details
- UPI QR Code
- Other official modes

**Contact for Payment Queries:** [email] / [phone]

---

### PAGE 9: CONTACT (`/contact`)

**Left column:**
- Heading: "Get in Touch"
- Address (to be filled)
- Email
- Phone
- Working hours: Mon–Sat, 9:00 AM – 6:00 PM
- Social media icons

**Right column — Contact Form:**
- Full Name *
- Phone Number *
- Email Address *
- Service of Interest (dropdown): Equity Research | Futures Research | Options Research | Commodity Research | Payment Query | General Inquiry
- Message *
- Submit button

Form sends via Formspree. Shows success card on submission.

---

### PAGE 10: MARKET INSIGHTS / BLOG LANDING (`/insights`)

Grid of article cards — 3 columns desktop, 1 column mobile
Category filters: All · Equity · Futures · Options · Commodity

---

### PAGE 11: INDIVIDUAL INSIGHT PAGE (`/insights/[slug]`)

- Article title
- Category + Date + Read time
- Body content (static — written in MDX files)
- Risk disclaimer at end
- "Back to Insights" link

---

### LEGAL PAGES (All minimal, clean typography)

**Terms & Conditions** (`/terms`):
- Client must read, understand, and agree before subscribing
- No guarantee of profit or return
- No refund policy
- Only services listed on website are provided
- No profit-sharing, no guaranteed services
- No Telegram services

**Do's & Don'ts** (`/dos-and-donts`):
- Always deal with registered advisory firms
- Verify credentials before paying
- Read all documents before subscribing
- Don't fall for guaranteed return promises
- Don't pay to personal accounts
- Don't make decisions based on Telegram tips or unregistered sources
- Don't let greed drive decisions
- Don't respond to limited-period discount pressure
- Raise complaints via official grievance mechanism

**Disclaimer** (`/disclaimer`):
- Investments in securities markets are subject to market risk
- All research calls are for informational purposes
- Past performance is not indicative of future results
- No Telegram account operated by Stock Buckets

**Disclosure** (`/disclosure`):
- No guaranteed returns, no refund policy
- No profit-sharing services
- Services limited to what is listed on website
- No litigation against company since establishment

**Grievance Mechanism** (`/grievance`):
- How to raise a complaint
- Timeline for resolution (within 21 days)
- Escalation path

**Investor Charter** (`/investor-charter`):
- Rights of investors
- Responsibilities of investors
- Grievance redressal options

---

## 6. Responsive Behavior Summary

| Screen | Layout |
|---|---|
| Mobile 375–430px | Single column, hamburger nav, stacked sections |
| Tablet 768–1023px | 2-column max, some sections still single column |
| Desktop 1024–1440px | Full multi-column layout |
| Large 1441px+ | Max-width container (1280px), centered |

---

## 7. Contact Form — No Backend Needed

Form submits to **Formspree.io** (free tier: 50 submissions/month). Paid tier if needed.
No server, no database. Email arrives directly in inbox.

---

---

# ══════════════════════════════════
# PART TWO — TECHNICAL SPECIFICATION
# (For Developers)
# ══════════════════════════════════

---

## 1. Tech Stack (Latest as of August 2026)

| Layer | Choice | Version | Notes |
|---|---|---|---|
| Framework | **Next.js** | **16.3** (LTS) | App Router, React 19.2, Turbopack default |
| Styling | **Tailwind CSS** | **v4.1** | CSS-first config via `@theme`, no `tailwind.config.js` |
| Components | **shadcn/ui** | Latest | Radix UI primitives, compatible with Tailwind v4 |
| Animations | **Pure CSS only** | — | `@keyframes`, `transition`, `animation`, SVG animations |
| Icons | **Lucide React** | Latest | |
| Fonts | **next/font** | — | Inter + Playfair Display + IBM Plex Mono |
| Forms | **Formspree** | — | `@formspree/react` |
| Blog/Insights | **MDX** | — | `@next/mdx` for static markdown posts |
| Deployment | **Vercel** | — | Native Next.js 16 support |

---

## 2. Project Bootstrap

```bash
# Create Next.js 16 app
npx create-next-app@latest stock-buckets \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --turbopack

cd stock-buckets

# Upgrade Tailwind to v4 (create-next-app still installs v3 by default)
npx @tailwindcss/upgrade@latest

# Install shadcn/ui (Tailwind v4 compatible)
npx shadcn@latest init

# Install additional deps
npm install @formspree/react lucide-react clsx tailwind-merge
npm install @next/mdx gray-matter

# shadcn components
npx shadcn@latest add button card tabs accordion badge \
  navigation-menu sheet separator input textarea select label
```

---

## 3. Tailwind v4 Configuration (`src/app/globals.css`)

In Tailwind v4 there is NO `tailwind.config.js`. All config lives in CSS via `@theme`.

```css
@import "tailwindcss";

@theme {
  /* === BRAND COLORS === */
  --color-ink-navy:     #0F1D3A;
  --color-sage-green:   #1A7F5A;
  --color-soft-amber:   #D97706;
  --color-cloud-white:  #FAFBFD;
  --color-mist-gray:    #F0F4F8;
  --color-steel:        #64748B;
  --color-border-gray:  #E2E8F0;
  --color-success:      #16A34A;
  --color-alert:        #DC2626;

  /* === TYPOGRAPHY === */
  --font-family-display: "Playfair Display", serif;
  --font-family-sans:    "Inter", system-ui, sans-serif;
  --font-family-mono:    "IBM Plex Mono", "Courier New", monospace;

  /* === SPACING EXTENSIONS === */
  --spacing-18: 4.5rem;
  --spacing-22: 5.5rem;
  --spacing-88: 22rem;
  --spacing-128: 32rem;

  /* === BORDER RADIUS === */
  --radius-xl:  0.75rem;
  --radius-2xl: 1rem;

  /* === SHADOWS === */
  --shadow-card: 0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04);
  --shadow-card-hover: 0 8px 24px -4px rgb(15 29 58 / 0.12), 0 4px 8px -2px rgb(15 29 58 / 0.06);

  /* === ANIMATION DURATIONS === */
  --duration-fast:   150ms;
  --duration-base:   250ms;
  --duration-slow:   400ms;
  --duration-slower: 600ms;
}

/* === GLOBAL BASE === */
@layer base {
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-cloud-white);
    color: var(--color-ink-navy);
    font-family: var(--font-family-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-ink-navy);
    line-height: 1.2;
    font-weight: 700;
  }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: var(--color-mist-gray); }
  ::-webkit-scrollbar-thumb { background: var(--color-border-gray); border-radius: 9999px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--color-steel); }

  /* Reduced motion override */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}

/* === COMPONENT LAYER === */
@layer components {

  /* --- Bucket Card --- */
  .bucket-card {
    background: white;
    border: 1px solid var(--color-border-gray);
    border-left: 3px solid var(--color-sage-green);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-card);
    padding: 1.5rem;
    transition: transform var(--duration-base) ease,
                box-shadow var(--duration-base) ease,
                border-left-color var(--duration-base) ease;
  }

  .bucket-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-card-hover);
  }

  .bucket-card.amber { border-left-color: var(--color-soft-amber); }
  .bucket-card.navy  { border-left-color: var(--color-ink-navy); }

  /* --- Section Heading --- */
  .section-heading {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-ink-navy);
    letter-spacing: -0.02em;
  }

  .section-subheading {
    font-size: 1.0625rem;
    color: var(--color-steel);
    margin-top: 0.75rem;
    max-width: 560px;
  }

  /* --- Badge --- */
  .badge {
    display: inline-flex;
    align-items: center;
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.25rem 0.625rem;
    border-radius: 9999px;
    border: 1px solid currentColor;
  }

  .badge-green { color: var(--color-sage-green); background: #f0fdf4; }
  .badge-amber { color: var(--color-soft-amber); background: #fffbeb; }
  .badge-navy  { color: var(--color-ink-navy);   background: var(--color-mist-gray); }

  /* --- Call Sample Card --- */
  .call-card {
    background: var(--color-ink-navy);
    color: white;
    border-radius: var(--radius-xl);
    padding: 1.5rem;
    font-family: var(--font-family-mono);
    font-size: 0.875rem;
    line-height: 1.8;
    max-width: 460px;
    box-shadow: 0 20px 60px -12px rgb(15 29 58 / 0.35);
  }

  .call-card .call-label {
    font-size: 0.6875rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-sage-green);
    margin-bottom: 0.75rem;
  }

  /* --- Stat Number --- */
  .stat-number {
    font-family: var(--font-family-mono);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--color-ink-navy);
    letter-spacing: -0.03em;
  }

  /* --- Process Step --- */
  .process-step {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .process-step__number {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 9999px;
    background: var(--color-ink-navy);
    color: white;
    font-family: var(--font-family-mono);
    font-weight: 700;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* --- Nav Link --- */
  .nav-link {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--color-steel);
    transition: color var(--duration-fast) ease;
    position: relative;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1.5px;
    background: var(--color-ink-navy);
    transition: width var(--duration-base) ease;
  }

  .nav-link:hover { color: var(--color-ink-navy); }
  .nav-link:hover::after { width: 100%; }
  .nav-link.active { color: var(--color-ink-navy); }
  .nav-link.active::after { width: 100%; }
}

/* === ANIMATION KEYFRAMES === */
@layer utilities {

  /* Fade In Up — for hero + section reveals */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Fade In — for simple opacity transitions */
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Ticker scroll — continuous horizontal */
  @keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* Draw SVG path — for hero chart animation */
  @keyframes drawPath {
    from { stroke-dashoffset: 1000; }
    to   { stroke-dashoffset: 0; }
  }

  /* Scale In — for call card */
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.95); }
    to   { opacity: 1; transform: scale(1); }
  }

  /* Pulse dot — for live market indicator dots */
  @keyframes pulseDot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.5; transform: scale(0.8); }
  }

  /* --- Utility animation classes --- */
  .animate-fade-in-up {
    animation: fadeInUp var(--duration-slower) ease both;
  }
  .animate-fade-in {
    animation: fadeIn var(--duration-slower) ease both;
  }
  .animate-ticker {
    animation: ticker 35s linear infinite;
  }
  .animate-scale-in {
    animation: scaleIn var(--duration-slow) ease both;
  }

  /* Stagger delays for children */
  .stagger-1 { animation-delay: 100ms; }
  .stagger-2 { animation-delay: 200ms; }
  .stagger-3 { animation-delay: 300ms; }
  .stagger-4 { animation-delay: 400ms; }
  .stagger-5 { animation-delay: 500ms; }

  /* Reveal on scroll (IntersectionObserver adds .is-visible) */
  .reveal {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity var(--duration-slower) ease,
                transform var(--duration-slower) ease;
  }

  .reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Ticker container */
  .ticker-wrap {
    overflow: hidden;
    white-space: nowrap;
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 8%,
      black 92%,
      transparent 100%
    );
  }

  .ticker-content {
    display: inline-flex;
    gap: 3rem;
    animation: ticker 35s linear infinite;
  }

  .ticker-content:hover {
    animation-play-state: paused;
  }
}
```

---

## 4. Directory Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout: fonts, metadata
│   ├── page.tsx                      # Home
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx                  # Services landing
│   │   ├── equity/page.tsx
│   │   ├── futures/page.tsx
│   │   ├── options/page.tsx
│   │   └── commodity/page.tsx
│   ├── payment/page.tsx
│   ├── contact/page.tsx
│   ├── insights/
│   │   ├── page.tsx                  # Blog listing
│   │   └── [slug]/page.tsx           # Individual post
│   ├── terms/page.tsx
│   ├── disclaimer/page.tsx
│   ├── disclosure/page.tsx
│   ├── dos-and-donts/page.tsx
│   ├── grievance/page.tsx
│   ├── investor-charter/page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx           # Full hero including SVG + ticker
│   │   ├── TrustMetricsBar.tsx
│   │   ├── AboutSummary.tsx
│   │   ├── BucketCards.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── SampleCallCard.tsx
│   │   ├── FaqSection.tsx
│   │   ├── InsightsPreview.tsx
│   │   └── ContactCTA.tsx
│   ├── services/
│   │   ├── ServiceHero.tsx
│   │   ├── PackageCard.tsx
│   │   └── ServiceComparison.tsx
│   ├── shared/
│   │   ├── SectionHeading.tsx
│   │   ├── RiskDisclaimer.tsx
│   │   ├── ScrollReveal.tsx          # Lightweight IntersectionObserver wrapper
│   │   └── TickerStrip.tsx
│   ├── svg/
│   │   ├── HeroChartSVG.tsx          # Animated stock chart SVG
│   │   ├── BucketIconSVG.tsx
│   │   ├── EquityIconSVG.tsx
│   │   ├── FuturesIconSVG.tsx
│   │   ├── OptionsIconSVG.tsx
│   │   └── CommodityIconSVG.tsx
│   └── ui/                           # shadcn auto-generated
│
├── lib/
│   ├── utils.ts                      # cn() = clsx + twMerge
│   └── constants.ts                  # All static data
│
├── content/
│   └── insights/                     # MDX files for blog posts
│       ├── intraday-volatility.mdx
│       ├── option-mantra.mdx
│       └── gold-vs-crude.mdx
│
└── types/
    └── index.ts
```

---

## 5. Root Layout (`app/layout.tsx`)

```typescript
import type { Metadata } from "next";
import { Inter, Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Stock Buckets Research Company | Market Research Advisory",
    template: "%s | Stock Buckets Research",
  },
  description:
    "Structured market research across equity, futures, options, and commodity segments. Every call includes entry, target, and stop-loss. No noise. Just research.",
  keywords: [
    "stock market research",
    "equity tips",
    "intraday calls",
    "options research",
    "MCX commodity tips",
    "futures research",
    "market advisory India",
  ],
  openGraph: {
    type: "website",
    title: "Stock Buckets Research Company",
    description: "Clarity before every call — structured market research across all segments.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

## 6. Navbar — Scroll Behavior (Pure CSS + minimal JS)

```typescript
"use client";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent",
      ].join(" ")}
    >
      {/* nav content */}
    </header>
  );
}
```

---

## 7. Hero SVG — Animated Stock Chart

```typescript
// components/svg/HeroChartSVG.tsx
// Pure inline SVG with CSS keyframe animations on stroke-dashoffset

export function HeroChartSVG() {
  return (
    <svg
      viewBox="0 0 480 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-auto"
    >
      {/* Background grid */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" strokeWidth="0.5"/>
        </pattern>
        {/* Chart path gradient */}
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A7F5A" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#1A7F5A" stopOpacity="0"/>
        </linearGradient>
      </defs>

      {/* Grid background */}
      <rect width="480" height="300" fill="url(#grid)"/>

      {/* Chart area fill — fades in */}
      <path
        d="M 40 240 L 90 210 L 150 195 L 200 170 L 250 145 L 300 130 L 360 100 L 420 80 L 440 80 L 440 280 L 40 280 Z"
        fill="url(#chartGradient)"
        style={{ animation: "fadeIn 1.2s 0.8s ease both" }}
      />

      {/* Main chart line — draws itself */}
      <path
        d="M 40 240 L 90 210 L 150 195 L 200 170 L 250 145 L 300 130 L 360 100 L 420 80"
        stroke="#1A7F5A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{
          animation: "drawPath 1.8s 0.2s cubic-bezier(0.4,0,0.2,1) forwards"
        }}
      />

      {/* Data point dots — appear sequentially */}
      {[
        [40, 240], [90, 210], [150, 195], [200, 170],
        [250, 145], [300, 130], [360, 100], [420, 80]
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx} cy={cy} r="4"
          fill="white"
          stroke="#1A7F5A"
          strokeWidth="2"
          style={{
            opacity: 0,
            animation: `fadeIn 0.3s ${0.3 + i * 0.18}s ease forwards`
          }}
        />
      ))}

      {/* Call card floating badge */}
      <g style={{ animation: "scaleIn 0.5s 2s ease both", opacity: 0 }}>
        <rect x="280" y="28" width="185" height="70" rx="10" fill="#0F1D3A"/>
        <text x="296" y="50" fill="#1A7F5A" fontSize="9" fontFamily="'IBM Plex Mono'" fontWeight="600" letterSpacing="0.08em">EQUITY · QUANTUM CASH</text>
        <text x="296" y="67" fill="white" fontSize="11" fontFamily="'IBM Plex Mono'" fontWeight="600">BUY NIFTY 21800 CE</text>
        <text x="296" y="83" fill="#94A3B8" fontSize="9" fontFamily="'IBM Plex Mono'">TGT 22100 · SL 21600</text>
      </g>

      {/* Axis labels */}
      <text x="40" y="310" fill="#94A3B8" fontSize="10" fontFamily="Inter">Jan</text>
      <text x="145" y="310" fill="#94A3B8" fontSize="10" fontFamily="Inter">Feb</text>
      <text x="245" y="310" fill="#94A3B8" fontSize="10" fontFamily="Inter">Mar</text>
      <text x="345" y="310" fill="#94A3B8" fontSize="10" fontFamily="Inter">Apr</text>
    </svg>
  );
}
```

---

## 8. Scroll Reveal Utility (Lightweight — No Library)

```typescript
// components/shared/ScrollReveal.tsx
"use client";
import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;     // ms delay
  className?: string;
}

export function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("is-visible");
          observer.unobserve(el); // fire once only
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
```

Usage:
```tsx
<ScrollReveal delay={100}>
  <BucketCard ... />
</ScrollReveal>
```

---

## 9. Animated Stat Counter (IntersectionObserver + CSS)

```typescript
// components/shared/StatCounter.tsx
"use client";
import { useEffect, useRef, useState } from "react";

export function StatCounter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const observed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="stat-number">
      {count.toLocaleString("en-IN")}{suffix}
    </span>
  );
}
```

---

## 10. Ticker Strip Component

```typescript
// components/shared/TickerStrip.tsx
const TICKER_ITEMS = [
  "NIFTY 50", "BANKNIFTY", "SENSEX", "MCX GOLD", "MCX SILVER",
  "CRUDE OIL", "NATURAL GAS", "USD/INR", "COPPER", "ZINC",
  "NIFTY MIDCAP 100", "MCX ALUMINIUM",
];

export function TickerStrip() {
  // Duplicate items so the loop appears infinite
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker-wrap py-2 border-b border-border-gray bg-mist-gray">
      <div className="ticker-content">
        {items.map((item, i) => (
          <span key={i} className="text-xs font-mono font-medium text-steel tracking-wider">
            {item}
            <span className="ml-3 text-border-gray">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
```

---

## 11. Contact Form with Formspree

```typescript
// app/contact/page.tsx
"use client";
import { useState } from "react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID!;

export default function ContactPage() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setState("success"); form.reset(); }
      else setState("error");
    } catch {
      setState("error");
    }
  }

  if (state === "success") return <SuccessMessage />;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name, phone, email, service dropdown, message, submit */}
    </form>
  );
}
```

---

## 12. MDX Blog Setup (`next.config.ts`)

```typescript
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    // If hosting on Vercel, remove the `unoptimized` line
    formats: ["image/avif", "image/webp"],
  },
};

export default withMDX(nextConfig);
```

---

## 13. Static Data (`lib/constants.ts`)

```typescript
export const COMPANY = {
  name: "Stock Buckets Research Company",
  tagline: "Clarity Before Every Call.",
  email: "contact@stockbuckets.in",
  phone: "+91-XXXXXXXXXX",
  address: "[Full Address Here]",
  workingHours: "Monday – Saturday, 9:00 AM – 6:00 PM",
  socials: {
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
} as const;

export const TRUST_METRICS = [
  { value: 14, suffix: "+", label: "Years of Research Experience" },
  { value: 5000, suffix: "+", label: "Research Calls Delivered" },
  { value: 4, suffix: "", label: "Market Segments Covered" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
] as const;

export const HERO_TAGLINES = [
  "Research-Backed Market Calls. Zero Noise.",
  "Every Call Has a Target and a Stop-Loss.",
  "Clarity Before Every Trade.",
];

export const BUCKETS = [
  {
    id: "equity",
    title: "Equity Research",
    tagline: "Great wealth begins with great businesses.",
    description: "Structured intraday and delivery calls for NSE stocks.",
    packages: ["Quantum Cash", "Blue Chip", "Midcap Delivery"],
    risk: "Moderate",
    segment: "NSE/BSE Cash",
    accent: "green",
    href: "/services/equity",
  },
  // ... futures, options, commodity
];

export const FAQ_ITEMS = [
  {
    q: "What services does Stock Buckets Research Company offer?",
    a: "We provide structured market research across four segments: Equity (intraday and delivery), Futures (stock and index), Options (structured and HNI), and Commodity (MCX). All research calls include entry zone, targets, and stop-loss.",
  },
  // ... all FAQ items
];

export const PACKAGES = {
  equity: [
    {
      id: "quantum-cash",
      name: "Quantum Cash",
      segment: "Equity — Intraday",
      riskLevel: "Moderate",
      callsPerDay: "3–5",
      targets: 3,
      stopLoss: true,
      maxOpenPositions: 2,
      delivery: ["SMS", "Instant Messenger"],
      features: [
        "Daily track sheet updated on website",
        "Daily information sheet",
        "Domestic & global market overview",
        "Customer support during market hours",
        "Support & resistance levels",
        "Economic data updates",
      ],
      sampleCall: "BUY PRISM CEMENT BELOW 111.5 — T1: 110.5 | T2: 109.5 | T3: 108.5 | SL: 113.5",
    },
    // ... Blue Chip, Midcap Delivery
  ],
  // ... futures, options, commodity packages
};
```

---

## 14. Responsive Grid Patterns

```
Section              Desktop           Tablet          Mobile
─────────────────────────────────────────────────────────────
Navbar               flex row          flex row        hamburger
Hero                 55% + 45% grid    50% + 50%       single col
Trust Metrics        grid-cols-4       grid-cols-4     grid-cols-2
Bucket Cards         grid-cols-4       grid-cols-2     grid-cols-1
Why Choose (6 pts)   grid-cols-3       grid-cols-2     grid-cols-1
How It Works (3)     flex row          flex row        flex col
Blog Cards           grid-cols-3       grid-cols-2     grid-cols-1
Contact              2-col             2-col           single col
Footer               grid-cols-4       grid-cols-2     grid-cols-1
Packages (per page)  grid-cols-3       grid-cols-2     grid-cols-1
```

---

## 15. Performance Targets

| Metric | Target |
|---|---|
| Largest Contentful Paint | < 1.5s |
| Total Bundle (JS) | < 100KB gzipped |
| CSS Output (Tailwind v4) | < 12KB gzipped |
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 97+ |
| Lighthouse SEO | 100 |
| Core Web Vitals | All green |

**Optimization checklist:**
- [ ] Hero SVG is inline (no external image request)
- [ ] All fonts loaded via `next/font` (zero layout shift)
- [ ] No Framer Motion, no GSAP, no heavy animation library
- [ ] `IntersectionObserver` for scroll reveals (no scroll event listeners polling)
- [ ] Next.js `<Link>` for all internal navigation (prefetches on hover)
- [ ] MDX content statically generated at build time
- [ ] `next/image` for any raster images with `priority` on hero
- [ ] All shadcn components imported individually, never barrel-imported

---

## 16. Environment Variables

```bash
# .env.local
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
```

---

## 17. Deployment

```bash
# Development
npm run dev

# Build (checks TypeScript + creates optimized output)
npm run build

# Deploy to Vercel
npx vercel

# Or push to GitHub → connect to Vercel → auto-deploys on every push
```

Vercel is the recommended deployment platform for Next.js 16. Zero config needed.

---

## 18. Key Rules — Content Constraints

These are non-negotiable in the codebase and content:

```typescript
// constants.ts — Add this as a linting reminder
export const CONTENT_RULES = {
  NO_SEBI_MENTION: true,        // Never mention SEBI registration
  NO_ISI_MENTION: true,         // Never mention ISI certification
  NO_GUARANTEED_RETURNS: true,  // Never promise returns
  NO_TELEGRAM: true,            // Company has no Telegram
  NO_REFUND_POLICY: true,       // No refunds on service fees
  NO_FREE_TRIALS: true,         // No free trials
  NO_PROFIT_SHARING: true,      // No profit-sharing services
  RISK_DISCLAIMER_REQUIRED: ["services/*", "contact", "payment"],
};
```

---

*PRD Version 2.0 | Stock Buckets Research Company | August 2026*
*Framework: Next.js 16.3 (LTS) · Tailwind CSS v4.1 · shadcn/ui · Pure CSS Animations*
*This document supersedes Version 1.0 entirely.*
