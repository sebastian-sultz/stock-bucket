"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Activity,
  ShieldCheck,
  Layers,
  Target,
  Eye,
  SlidersHorizontal,
} from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function AboutSummary() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "approach">("mission");

  const tabContent = {
    mission: {
      badge: "Purpose & Mandate",
      title: "Empowering Traders With Structured Clarity",
      text: "Our mission is to simplify trading and short-term capital deployment across India's equity, derivatives, and commodity markets by offering disciplined, multi-layered research and actionable insights. We educate and guide subscribers through every market phase with pre-defined risk parameters.",
      points: [
        "Eliminating guesswork with mathematically defined stop-loss levels",
        "Protecting hard-earned capital through structured position sizing",
        "Demystifying complex derivatives with transparent Greek-aligned strategies",
      ],
      icon: Target,
    },
    vision: {
      badge: "Long-Term Aspiration",
      title: "Setting the Benchmark in Independent Advisory",
      text: "To become India's most respected independent research platform — celebrated for analytical integrity, transparent execution methodology, and research that consistently helps clients navigate market volatility with confidence.",
      points: [
        "Unbiased, independent research publishing without hidden broker kickbacks",
        "Creating sustainable long-term value across bull and bear market cycles",
        "Pioneering structured 'Bucket' frameworks for distinct capital appetites",
      ],
      icon: Eye,
    },
    approach: {
      badge: "Analytical Edge",
      title: "The 4-Pillar Analytical Framework",
      text: "Every research call published by Stock Buckets undergoes rigorous multi-timeframe validation: algorithmic market scans, technical volume-price confirmation, fundamental news overlay, and strict risk-to-reward ratio verification before reaching your device.",
      points: [
        "No calls without context — every setup includes precise technical rationale",
        "Minimum 1:2.5 risk-to-reward requirement for all recommendation entries",
        "Real-time market hours tracking and trailing stop-loss advisory",
      ],
      icon: SlidersHorizontal,
    },
  };

  const processSteps = [
    {
      step: "01",
      title: "Algorithmic & Market Scanning",
      desc: "Scanning 500+ NSE/BSE and MCX contracts for liquidity surges, volatility shifts, and price-volume breakouts.",
      icon: Search,
    },
    {
      step: "02",
      title: "Technical & Pattern Confirmation",
      desc: "Analyzing multi-timeframe candlestick patterns, support/resistance levels, and order book depth.",
      icon: Activity,
    },
    {
      step: "03",
      title: "Fundamental & Macro Overlay",
      desc: "Cross-referencing corporate updates, sector trends, domestic macro data, and global market signals.",
      icon: Layers,
    },
    {
      step: "04",
      title: "Risk Calibration & Call Delivery",
      desc: "Defining entry zone, 3 risk-adjusted targets, and mandatory stop-loss. Dispatched instantly via SMS & messaging.",
      icon: ShieldCheck,
    },
  ];

  const CurrentIcon = tabContent[activeTab].icon;

  return (
    <section className="py-10 sm:py-16 bg-white relative z-10 border-t border-border-gray">
      <div className="container-custom">
        <SectionHeading
          badge="Our Research DNA"
          badgeColor="green"
          title="We Organize Market Intelligence Into Actionable Research"
          subtitle="Stock Buckets was built on an uncompromising principle: every market call must come with complete context, three targets, and a non-negotiable stop-loss. No exceptions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
          {/* Left Column: Interactive Tab Card (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <ScrollReveal className="h-full flex flex-col">
              <div className="bg-white border border-border-gray p-4 sm:p-6 lg:p-7 rounded-xl shadow-card h-full flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover">
                {/* Card Top: Integrated Tab Selectors */}
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 p-1 bg-mist-gray rounded-lg border border-border-gray/80 w-full mb-4 shadow-subtle">
                    <button
                      type="button"
                      onClick={() => setActiveTab("mission")}
                      className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold transition-all duration-200 min-h-[38px] ${
                        activeTab === "mission"
                          ? "bg-white text-ink-navy shadow-sm border border-border-gray/70"
                          : "text-steel hover:text-ink-navy hover:bg-white/50"
                      }`}
                    >
                      <Target className={`w-3.5 h-3.5 ${activeTab === "mission" ? "text-sage-green" : "text-steel"}`} />
                      <span>Our Mission</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab("vision")}
                      className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold transition-all duration-200 min-h-[38px] ${
                        activeTab === "vision"
                          ? "bg-white text-ink-navy shadow-sm border border-border-gray/70"
                          : "text-steel hover:text-ink-navy hover:bg-white/50"
                      }`}
                    >
                      <Eye className={`w-3.5 h-3.5 ${activeTab === "vision" ? "text-soft-amber" : "text-steel"}`} />
                      <span>Our Vision</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab("approach")}
                      className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold transition-all duration-200 min-h-[38px] ${
                        activeTab === "approach"
                          ? "bg-white text-ink-navy shadow-sm border border-border-gray/70"
                          : "text-steel hover:text-ink-navy hover:bg-white/50"
                      }`}
                    >
                      <SlidersHorizontal className={`w-3.5 h-3.5 ${activeTab === "approach" ? "text-sage-green" : "text-steel"}`} />
                      <span>Our Approach</span>
                    </button>
                  </div>

                  {/* Dynamic Tab Body Content */}
                  <div key={activeTab} className="space-y-3 animate-fade-in">
                    <div className="flex items-center justify-between pb-2.5 border-b border-border-gray/60">
                      <span className="badge-pill badge-pill-green text-[10px] font-mono">
                        {tabContent[activeTab].badge}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-mist-gray flex items-center justify-center border border-border-gray/70">
                        <CurrentIcon className="w-4 h-4 text-sage-green" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-ink-navy leading-snug">
                      {tabContent[activeTab].title}
                    </h3>

                    <p className="text-xs sm:text-sm text-steel leading-relaxed">
                      {tabContent[activeTab].text}
                    </p>

                    {/* Key Points Checklist */}
                    <div className="space-y-2 pt-1">
                      {tabContent[activeTab].points.map((point, index) => (
                        <div key={index} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-sage-green flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-medium text-steel-dark leading-relaxed">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom Link */}
                <div className="pt-4 mt-4 border-t border-border-gray/80 flex items-center justify-between">
                  <Link
                    href="/about"
                    className="text-xs sm:text-sm font-bold text-sage-green hover:text-sage-green-dark flex items-center gap-1 group"
                  >
                    <span>Read Our Full Story & Philosophy</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Research Process Timeline (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <ScrollReveal className="h-full flex flex-col" delay={100}>
              <div className="bg-cloud-white border border-border-gray p-4 sm:p-6 lg:p-7 rounded-xl shadow-card h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-gray/80 min-h-[40px]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-navy">
                        How Every Call Is Engineered
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-sage-green-dark font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      4-STAGE PROTOCOL
                    </span>
                  </div>

                  {/* Connected Vertical Timeline Nodes */}
                  <div className="space-y-2.5 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-teal-500 before:to-amber-500 before:content-['']">
                    {processSteps.map((node, i) => {
                      const Icon = node.icon;
                      return (
                        <div key={i} className="relative flex items-start gap-3 group">
                          <div className="w-8 h-8 rounded-lg bg-white border border-border-gray text-ink-navy flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 z-10 shadow-sm group-hover:bg-sage-green group-hover:text-white group-hover:border-sage-green transition-all duration-200">
                            {node.step}
                          </div>
                          <div className="flex-1 bg-white p-3 sm:p-3.5 rounded-lg border border-border-gray/80 shadow-subtle group-hover:shadow-card group-hover:border-sage-green/40 transition-all duration-200">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <Icon className="w-3.5 h-3.5 text-sage-green" />
                              <h4 className="font-bold text-xs sm:text-sm text-ink-navy">
                                {node.title}
                              </h4>
                            </div>
                            <p className="text-[11px] sm:text-xs text-steel leading-relaxed">
                              {node.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
