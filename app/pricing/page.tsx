"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  PhoneCall,
  MessageSquare,
  Shield,
  Layers,
  Sparkles,
  ChevronDown,
  TrendingUp,
  LineChart,
  PieChart,
  Flame,
} from "lucide-react";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";
import { ContactCTA } from "@/components/home/ContactCTA";

type SegmentKey = "equity" | "futures" | "options" | "commodity";

interface PricingPlan {
  id: string;
  segmentId: SegmentKey;
  segmentName: string;
  name: string;
  tier: string;
  price: string;
  tenure: string;
  tenureLabel: string;
  perMonthRate?: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const ALL_PLANS: PricingPlan[] = [
  // 1. Cash Delivery (Equity Research)
  {
    id: "equity-quantum",
    segmentId: "equity",
    segmentName: "Equity Cash",
    name: "Quantum Cash",
    tier: "Intraday Cash",
    price: "₹8,999",
    tenure: "1 Month",
    tenureLabel: "per month",
    description: "High-momentum midcap & smallcap intraday calls for active cash market traders.",
    features: [
      "3–5 Intraday Calls per day",
      "3 Defined Targets + Strict Stop-Loss",
      "Daily Technical Support Sheet",
    ],
  },
  {
    id: "equity-bluechip",
    segmentId: "equity",
    segmentName: "Equity Cash",
    name: "Blue Chip",
    tier: "Quarterly Delivery",
    price: "₹24,999",
    tenure: "3 Months",
    tenureLabel: "for 3 months",
    perMonthRate: "₹8,333 / month",
    popular: true,
    description: "Large-cap heavyweight cash setups with volume breakout and flow tracking.",
    features: [
      "2–3 High-Conviction Calls per day",
      "3 Defined Targets + Strict Stop-Loss",
      "Weekly Performance Track Sheet",
    ],
  },
  {
    id: "equity-midcap",
    segmentId: "equity",
    segmentName: "Equity Cash",
    name: "Midcap Delivery",
    tier: "Positional Holding",
    price: "₹49,999",
    tenure: "6 Months",
    tenureLabel: "for 6 months",
    perMonthRate: "₹8,333 / month",
    description: "Positional swing research with 2 to 5 days holding horizon on breakouts.",
    features: [
      "2–4 Positional Setups per week",
      "3 Defined Targets + Trailing Stop",
      "Direct Senior Analyst Consultation",
    ],
  },

  // 2. F&O Segment (Futures Research)
  {
    id: "futures-stock",
    segmentId: "futures",
    segmentName: "Futures Research",
    name: "Stock Futures",
    tier: "Basic F&O",
    price: "₹15,000",
    tenure: "1 Month",
    tenureLabel: "per month",
    description: "High-momentum stock futures recommendations with technical breakout setups.",
    features: [
      "2–3 Stock Futures Calls per day",
      "3 Defined Targets + Strict Stop-Loss",
      "Volume Spread & Rollover Tracking",
    ],
  },
  {
    id: "futures-index",
    segmentId: "futures",
    segmentName: "Futures Research",
    name: "Index Futures",
    tier: "Basic F&O",
    price: "₹15,000",
    tenure: "1 Month",
    tenureLabel: "per month",
    description: "Nifty, Bank Nifty & FinNifty trend-following futures calls with pivot alerts.",
    features: [
      "2–3 Index Futures Calls per day",
      "3 Defined Targets + Mandatory Stop-Loss",
      "Global Index & GIFT Nifty Correlations",
    ],
  },
  {
    id: "futures-hni",
    segmentId: "futures",
    segmentName: "Futures Research",
    name: "HNI Futures",
    tier: "HNI Premium",
    price: "₹1,00,000",
    tenure: "6 Months",
    tenureLabel: "for 6 months",
    perMonthRate: "25K / month (₹25,000/mo)",
    popular: true,
    description: "Bespoke high-conviction futures advisory for larger capital allocators.",
    features: [
      "1–2 High-Conviction Curated Setups",
      "3 Targets + Real-time Trailing Stop",
      "Priority Senior Analyst Direct Hotline",
    ],
  },

  // 3. F&O Derivatives (Options Research)
  {
    id: "options-mantra",
    segmentId: "options",
    segmentName: "Options Research",
    name: "Stock Option Mantra",
    tier: "Basic Options",
    price: "₹18,000",
    tenure: "1 Month",
    tenureLabel: "per month",
    description: "Greek-aligned structured stock option strategies for steady risk-to-reward setups.",
    features: [
      "2–3 Option Strategy Calls per day",
      "Delta, Theta & Gamma Risk Controlled",
      "Live Exit & Trailing Profit Alerts",
    ],
  },
  {
    id: "options-index",
    segmentId: "options",
    segmentName: "Options Research",
    name: "Index Options",
    tier: "Basic Options",
    price: "₹18,000",
    tenure: "1 Month",
    tenureLabel: "per month",
    description: "High-momentum Nifty and Bank Nifty weekly strike calls for active volatility traders.",
    features: [
      "3–4 Liquid Index Strike Calls per day",
      "Event & Expiry Day Volatility Setups",
      "Strict Stop-Loss against Premium Decay",
    ],
  },
  {
    id: "options-hni",
    segmentId: "options",
    segmentName: "Options Research",
    name: "HNI Options",
    tier: "HNI Premium",
    price: "₹1,50,000",
    tenure: "6 Months",
    tenureLabel: "for 6 months",
    perMonthRate: "30K / month (₹30,000/mo)",
    popular: true,
    description: "Institutional options research with short-term trend confirmation & capital risk rules.",
    features: [
      "16–18 Curated Monthly Recommendations",
      "Institutional Order Book & Flow Review",
      "Comprehensive Risk & Exit Management",
    ],
  },

  // 4. MCX Segment (Commodity Research)
  {
    id: "commodity-standard",
    segmentId: "commodity",
    segmentName: "Commodity (MCX)",
    name: "MCX Standard",
    tier: "Basic MCX",
    price: "₹18,000",
    tenure: "1 Month",
    tenureLabel: "per month",
    description: "Comprehensive research across Bullion (Gold, Silver), Energy (Crude, Gas) & Metals.",
    features: [
      "2–3 MCX Commodity Calls per day",
      "3 Defined Targets + Mandatory Stop-Loss",
      "Evening Session Support till 11:30 PM",
    ],
  },
  {
    id: "commodity-hni",
    segmentId: "commodity",
    segmentName: "Commodity (MCX)",
    name: "MCX HNI",
    tier: "HNI Desk",
    price: "₹25,000",
    tenure: "1 Month",
    tenureLabel: "per month",
    description: "High-volume commodity contracts aligned with global COMEX, NYMEX and LME price action.",
    features: [
      "1–2 High-Conviction Bullion & Energy Calls",
      "Global Market Cross-Asset Overlay",
      "Real-time Trailing Profit Protection",
    ],
  },
  {
    id: "commodity-wealth",
    segmentId: "commodity",
    segmentName: "Commodity (MCX)",
    name: "Wealth Creation Plan",
    tier: "Wealth Desk",
    price: "₹30,000",
    tenure: "1 Month",
    tenureLabel: "per month",
    popular: true,
    description: "Multi-segment integrated research advisory across Equity, Derivatives & MCX Commodities.",
    features: [
      "Customized Cross-Asset Portfolio Allocation",
      "Holistic Hedging & Macro Strategy",
      "Priority Senior Analyst Direct Consultation",
    ],
  },
];

const SEGMENTS = [
  {
    id: "equity" as const,
    title: "Equity Research",
    short: "Equity",
    badge: "Cash Delivery",
    icon: TrendingUp,
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
  {
    id: "futures" as const,
    title: "Futures Research",
    short: "Futures",
    badge: "F&O Segment",
    icon: LineChart,
    color: "text-amber-700 bg-amber-50 border-amber-200",
  },
  {
    id: "options" as const,
    title: "Options Research",
    short: "Options",
    badge: "F&O Derivatives",
    icon: PieChart,
    color: "text-indigo-700 bg-indigo-50 border-indigo-200",
  },
  {
    id: "commodity" as const,
    title: "Commodity Research",
    short: "MCX",
    badge: "MCX Segment",
    icon: Flame,
    color: "text-amber-800 bg-amber-50 border-amber-300",
  },
];

export default function PricingPage() {
  const [mobileSegment, setMobileSegment] = useState<SegmentKey>("equity");
  const [desktopTab, setDesktopTab] = useState<"all" | SegmentKey>("all");
  const [mobileCompareOpen, setMobileCompareOpen] = useState(false);

  const desktopFiltered =
    desktopTab === "all"
      ? ALL_PLANS
      : ALL_PLANS.filter((p) => p.segmentId === desktopTab);

  const mobileFiltered = ALL_PLANS.filter((p) => p.segmentId === mobileSegment);
  const currentMobileSegment = SEGMENTS.find((s) => s.id === mobileSegment)!;

  return (
    <div>
      {/* Header - Seamless from Top Navbar */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 border-b border-border-gray relative">
        <div className="container-custom max-w-3xl text-center">
          <div className="mb-2.5 sm:mb-3">
            <span className="badge-pill badge-pill-green">Transparent Pricing</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-ink-navy tracking-tight leading-snug">
            Research Advisory Subscriptions
          </h1>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-steel leading-relaxed max-w-xl mx-auto">
            Clear, fixed-fee subscription plans across Equity, Futures, Options, and MCX Commodities. Delivered strictly via verified Telephonic and WhatsApp channels.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 📱 MOBILE-SPECIFIC VIEW (Visible on < md screens)                         */}
      {/* ========================================================================= */}
      <section className="block md:hidden py-6 bg-white">
        <div className="container-custom">
          {/* Mobile 4-Segment Tab Switcher */}
          <div className="mb-3.5">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-steel mb-1.5 flex items-center justify-between">
              <span>Select Segment:</span>
              <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px] font-bold">
                {currentMobileSegment.badge}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-1 p-1 bg-mist-gray rounded-lg border border-border-gray">
              {SEGMENTS.map((seg) => {
                const Icon = seg.icon;
                const isActive = mobileSegment === seg.id;
                return (
                  <button
                    key={seg.id}
                    type="button"
                    onClick={() => setMobileSegment(seg.id)}
                    className={`flex flex-col items-center justify-center py-2 px-1 rounded-md text-xs font-bold transition-all ${
                      isActive
                        ? "bg-white text-ink-navy shadow-sm border border-border-gray"
                        : "text-steel hover:text-ink-navy"
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 mb-0.5 ${
                        isActive ? "text-sage-green" : "text-steel-light"
                      }`}
                    />
                    <span className="text-[11px] leading-none">{seg.short}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Segment Headline */}
          <div className="p-2.5 bg-mist-gray/40 border border-border-gray/70 rounded-lg mb-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-white flex items-center justify-center border border-border-gray shadow-subtle">
                <currentMobileSegment.icon className="w-3.5 h-3.5 text-sage-green" />
              </div>
              <span className="font-bold text-xs text-ink-navy">
                {currentMobileSegment.title}
              </span>
            </div>
            <span className="text-[10px] font-mono text-steel">
              3 Plans
            </span>
          </div>

          {/* Mobile Plan Cards Stack (Compact Height, fits on mobile viewport) */}
          <div className="space-y-3.5 mb-6">
            {mobileFiltered.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white border rounded-xl p-4 shadow-card relative overflow-hidden flex flex-col justify-between ${
                  plan.popular
                    ? "border-sage-green ring-1 ring-sage-green/40"
                    : "border-border-gray"
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-sage-green text-white text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-bl-lg shadow-sm flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>Popular</span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md uppercase tracking-wide">
                      {plan.tier}
                    </span>
                    <span className="text-xs text-steel">
                      Validity: <strong className="text-ink-navy font-semibold">{plan.tenure}</strong>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-ink-navy">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-steel mt-0.5 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Clean Sans-Serif Price Box */}
                  <div className="my-3 p-3.5 bg-mist-gray/60 border border-border-gray/70 rounded-xl">
                    {/* Primary Price Row (Single Line Guaranteed) */}
                    <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                      <span className="text-3xl font-extrabold text-ink-navy font-sans tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs font-semibold text-steel">
                        {plan.tenure === "1 Month"
                          ? "/ month"
                          : plan.tenure === "3 Months"
                          ? "/ 3 months"
                          : "/ 6 months"}
                      </span>
                    </div>

                    {/* Sub-row: Plan Cycle & Effective Rate */}
                    <div className="mt-2 pt-2 border-t border-border-gray/60 flex items-center justify-between text-[11px]">
                      <span className="text-steel font-medium">
                        {plan.tenure === "6 Months"
                          ? "6-Month Plan"
                          : plan.tenure === "3 Months"
                          ? "Quarterly Plan"
                          : "Monthly Plan"}
                      </span>

                      {plan.perMonthRate ? (
                        <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded border border-emerald-200 whitespace-nowrap">
                          Effective: {plan.perMonthRate}
                        </span>
                      ) : (
                        <span className="text-steel font-mono text-[10px]">
                          Fixed Advisory Fee
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bullet Inclusions (Compact 3 items) */}
                  <div className="space-y-1.5 mb-3 pt-1 border-t border-border-gray/60">
                    {plan.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-ink-navy">
                        <Check className="w-3.5 h-3.5 text-sage-green flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Delivery Note */}
                  <div className="mb-2.5 flex items-center justify-between text-xs text-steel bg-cloud-white p-2 rounded-lg border border-border-gray/70">
                    <div className="flex items-center gap-1.5 text-ink-navy font-medium text-xs">
                      <PhoneCall className="w-3.5 h-3.5 text-sage-green flex-shrink-0" />
                      <MessageSquare className="w-3.5 h-3.5 text-sage-green flex-shrink-0" />
                      <span>Telephonic & WhatsApp</span>
                    </div>
                    <span className="text-rose-600 font-bold text-[10px] whitespace-nowrap bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                      Strict SL
                    </span>
                  </div>

                  {/* Direct Action Button */}
                  <Link
                    href={`/contact?service=${encodeURIComponent(
                      `${plan.segmentName} — ${plan.name} (${plan.price} / ${plan.tenure})`
                    )}`}
                    className="btn-primary w-full py-2.5 rounded-xl text-xs font-semibold justify-center shadow-sm"
                  >
                    <span>Inquire for {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Collapsible Mobile Rate Card Drawer */}
          <div className="bg-white border border-border-gray rounded-xl overflow-hidden shadow-subtle mb-6">
            <button
              type="button"
              onClick={() => setMobileCompareOpen(!mobileCompareOpen)}
              className="w-full p-3 bg-cloud-white flex items-center justify-between text-left font-bold text-xs text-ink-navy"
            >
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-sage-green" />
                <span>View Full 12-Plan Pricing Matrix</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-steel transition-transform ${
                  mobileCompareOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileCompareOpen && (
              <div className="p-3 border-t border-border-gray space-y-2 divide-y divide-border-gray/60">
                {ALL_PLANS.map((p) => (
                  <div key={p.id} className="pt-2 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-ink-navy block">
                        {p.name}
                      </span>
                      <span className="text-[10px] font-mono text-steel">
                        {p.segmentName} · {p.tenure}
                      </span>
                    </div>
                    <div className="text-right">
                      <strong className="text-ink-navy font-sans font-extrabold text-sm block tracking-tight">
                        {p.price}
                      </strong>
                      <span className="text-[10px] font-mono text-sage-green">
                        {p.perMonthRate || `${p.price}/mo`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Pricing Terms Box */}
          <div className="bg-mist-gray/60 border border-border-gray rounded-xl p-3.5 space-y-1.5 mb-6 text-xs text-steel leading-relaxed">
            <div className="font-bold text-ink-navy flex items-center gap-1.5 mb-1 text-xs">
              <Shield className="w-3.5 h-3.5 text-sage-green" />
              <span>Subscription Terms & Policies:</span>
            </div>
            <p>• <strong>Pure Fixed Fee:</strong> No profit-sharing or performance cuts.</p>
            <p>• <strong>Strictly Non-Refundable:</strong> Fees are final once service starts.</p>
            <p>• <strong>Verified Delivery:</strong> Telephonic & WhatsApp channels only.</p>
          </div>

          <div className="text-xs">
            <RiskDisclaimer />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 🖥️ DESKTOP-SPECIFIC VIEW (Visible on md+ screens)                          */}
      {/* ========================================================================= */}
      <section className="hidden md:block py-12 lg:py-16 bg-white">
        <div className="container-custom">
          {/* Segment Filter Tab Bar */}
          <div className="flex items-center justify-center mb-10">
            <div className="inline-flex p-1 bg-mist-gray rounded-lg border border-border-gray/80 overflow-x-auto max-w-full">
              {(
                [
                  { key: "all", label: "All 12 Packages" },
                  { key: "equity", label: "1. Equity (Cash)" },
                  { key: "futures", label: "2. Futures (F&O)" },
                  { key: "options", label: "3. Options (F&O)" },
                  { key: "commodity", label: "4. Commodity (MCX)" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setDesktopTab(tab.key)}
                  className={`px-4 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                    desktopTab === tab.key
                      ? "bg-white text-ink-navy shadow-sm border border-border-gray/60 font-bold"
                      : "text-steel hover:text-ink-navy"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Pricing Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {desktopFiltered.map((plan) => {
              const seg = SEGMENTS.find((s) => s.id === plan.segmentId)!;

              return (
                <div
                  key={plan.id}
                  className={`bg-white border rounded-xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between relative shadow-card hover:shadow-card-hover ${
                    plan.popular
                      ? "border-sage-green ring-1 ring-sage-green/30"
                      : "border-border-gray"
                  }`}
                >
                  {/* Top Popular Indicator */}
                  {plan.popular && (
                    <div className="absolute -top-2.5 right-4 bg-sage-green text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div>
                    {/* Segment & Tier Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${seg.color}`}
                      >
                        {plan.segmentName}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-steel bg-mist-gray px-2 py-0.5 rounded">
                        {plan.tier}
                      </span>
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-xl font-bold text-ink-navy mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-steel leading-relaxed mb-4 min-h-[32px]">
                      {plan.description}
                    </p>

                    {/* Clean Sans-Serif Price Block */}
                    <div className="p-3.5 bg-mist-gray/60 border border-border-gray/80 rounded-xl mb-4">
                      <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                        <span className="text-3xl font-extrabold text-ink-navy font-sans tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-xs font-semibold text-steel">
                          {plan.tenure === "1 Month"
                            ? "/ month"
                            : plan.tenure === "3 Months"
                            ? "/ 3 months"
                            : "/ 6 months"}
                        </span>
                      </div>

                      {/* Tenure Duration & Breakdown */}
                      <div className="mt-2 pt-2 border-t border-border-gray/70 flex items-center justify-between text-[11px]">
                        <span className="text-steel font-medium">
                          {plan.tenure === "6 Months"
                            ? "6-Month Plan"
                            : plan.tenure === "3 Months"
                            ? "Quarterly Plan"
                            : "Monthly Plan"}
                        </span>
                        {plan.perMonthRate ? (
                          <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded border border-emerald-200 whitespace-nowrap">
                            Effective: {plan.perMonthRate}
                          </span>
                        ) : (
                          <span className="text-steel font-mono text-[10px]">
                            Fixed Advisory Fee
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-steel block">
                        Included in this Plan:
                      </span>
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-ink-navy">
                          <Check className="w-3.5 h-3.5 text-sage-green flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-border-gray">
                    <Link
                      href={`/contact?service=${encodeURIComponent(
                        `${plan.segmentName} — ${plan.name} (${plan.price} / ${plan.tenure})`
                      )}`}
                      className={`btn-primary w-full py-2.5 rounded-lg text-xs font-semibold justify-center shadow-sm ${
                        plan.popular ? "bg-sage-green hover:bg-sage-green-dark" : ""
                      }`}
                    >
                      <span>Inquire for {plan.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Master 12-Plan Pricing Matrix Table */}
          <div className="bg-white border border-border-gray rounded-xl overflow-hidden shadow-card mb-14">
            <div className="p-6 border-b border-border-gray bg-cloud-white flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-ink-navy flex items-center gap-2">
                  <Layers className="w-5 h-5 text-sage-green" />
                  <span>Master Subscription Schedule</span>
                </h3>
                <p className="text-xs sm:text-sm text-steel mt-0.5">
                  Complete overview of all 12 research packages, tenures, and fee schedules.
                </p>
              </div>

              <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-xs font-mono">
                Fixed Fee · No Profit Sharing
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-mist-gray border-b border-border-gray text-ink-navy font-mono font-bold uppercase text-[11px] tracking-wider">
                    <th className="py-3 px-6">Segment</th>
                    <th className="py-3 px-6">Package Name</th>
                    <th className="py-3 px-6">Tier</th>
                    <th className="py-3 px-6">Validity / Tenure</th>
                    <th className="py-3 px-6">Total Fee</th>
                    <th className="py-3 px-6">Monthly Rate</th>
                    <th className="py-3 px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-gray/70 text-ink-navy">
                  {ALL_PLANS.map((p) => (
                    <tr key={p.id} className="hover:bg-mist-gray/40 transition-colors">
                      <td className="py-3.5 px-6 font-mono text-[11px] text-steel font-semibold">
                        {p.segmentName}
                      </td>
                      <td className="py-3.5 px-6 font-bold text-ink-navy">
                        {p.name}
                      </td>
                      <td className="py-3.5 px-6">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-mist-gray border border-border-gray text-steel-dark font-semibold">
                          {p.tier}
                        </span>
                      </td>
                      <td className="py-3.5 px-6 font-mono font-semibold">
                        {p.tenure}
                      </td>
                      <td className="py-3.5 px-6 font-bold text-ink-navy font-sans font-extrabold text-base tracking-tight">
                        {p.price}
                      </td>
                      <td className="py-3.5 px-6 font-mono text-xs text-sage-green font-bold">
                        {p.perMonthRate ? p.perMonthRate : `${p.price} / mo`}
                      </td>
                      <td className="py-3.5 px-6 text-right">
                        <Link
                          href={`/contact?service=${encodeURIComponent(
                            `${p.segmentName} — ${p.name} (${p.price} / ${p.tenure})`
                          )}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-sage-green hover:text-sage-green-dark hover:underline"
                        >
                          <span>Inquire</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Desktop Pricing Policy Box */}
          <div className="bg-mist-gray/60 border border-border-gray rounded-xl p-6 mb-14 max-w-4xl mx-auto space-y-3">
            <h3 className="text-base font-bold text-ink-navy flex items-center gap-2">
              <Shield className="w-4 h-4 text-sage-green" />
              <span>Our Non-Negotiable Pricing & Subscription Terms:</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-steel leading-relaxed">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sage-green flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Pure Fixed Fee Model:</strong> We charge strictly for research publications and desk analytical work. We never demand profit-sharing, brokerage cuts, or performance percentages.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sage-green flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Strictly Non-Refundable:</strong> All advisory service subscription fees are final and non-refundable once research dispatch begins.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sage-green flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Official Payment Channels Only:</strong> Fee transactions must be routed strictly through the verified bank account and company QR code on our Payment Instructions page.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sage-green flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Authorized Channels:</strong> Recommendations are delivered strictly via verified Telephonic and registered WhatsApp channels.
                </span>
              </li>
            </ul>
          </div>

          <div className="max-w-4xl mx-auto">
            <RiskDisclaimer />
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
