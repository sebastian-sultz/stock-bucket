import type { Metadata } from "next";
import { ShieldCheck, Target, HeartHandshake, Eye, Award } from "lucide-react";
import { TrustMetricsBar } from "@/components/home/TrustMetricsBar";
import { ContactCTA } from "@/components/home/ContactCTA";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "About Stock Buckets Research Company | Our Story & Philosophy",
  description:
    "Learn about Stock Buckets Research Company, our 14+ years of market research experience, 3-pillar research philosophy, and core values.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Analytical Integrity",
      desc: "Every research recommendation is derived from verifiable technical setups and fundamental data — never rumors, sensational headlines, or speculative hype.",
      icon: ShieldCheck,
      color: "text-sage-green",
      bg: "bg-emerald-50",
    },
    {
      title: "Capital Protection First",
      desc: "We believe long-term trading longevity depends on drawdown management. Before we calculate target profit potential, we strictly define the maximum downside risk.",
      icon: Target,
      color: "text-soft-amber",
      bg: "bg-amber-50",
    },
    {
      title: "Absolute Transparency",
      desc: "No hidden charges, no unverified claims of 90%+ guaranteed accuracy, and no personal account transfers. All performance is recorded transparently on our daily track sheets.",
      icon: Eye,
      color: "text-ink-navy",
      bg: "bg-slate-100",
    },
    {
      title: "Independent Execution",
      desc: "We operate exclusively as a direct-to-subscriber research publisher. We have no broker affiliations, proprietary trading desk conflicts, or volume churn kickbacks.",
      icon: HeartHandshake,
      color: "text-sage-green",
      bg: "bg-emerald-50",
    },
  ];

  const team = [
    {
      role: "Head of Equity Research",
      desc: "12+ years analyzing midcap breakout patterns, institutional volume profiles, and NSE corporate earnings.",
    },
    {
      role: "Lead Derivatives Strategist",
      desc: "Specialist in Index Open Interest analysis, Greek volatility smiles, and non-directional Option Mantra frameworks.",
    },
    {
      role: "Commodity & Macro Analyst",
      desc: "Tracks international inter-market dynamics across COMEX Bullion, NYMEX Energy, and global currency pairs.",
    },
    {
      role: "Client Relations & Support Desk",
      desc: "Dedicated to rapid market hours query resolution, subscriber onboarding, and execution support.",
    },
  ];

  return (
    <div>
      {/* Hero - Seamless from Top Navbar */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 border-b border-border-gray relative">
        <div className="container-custom max-w-4xl text-center">
          <div className="mb-2.5 sm:mb-3">
            <span className="badge-pill badge-pill-green">Our Story & Identity</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-ink-navy tracking-tight leading-snug">
            Built on a Single Principle: <br />
            <span className="text-sage-green">Research First. Calls Second.</span>
          </h1>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-steel leading-relaxed max-w-2xl mx-auto">
            Stock Buckets was founded to bring private-banking level discipline and structured risk management to Indian market participants.
          </p>
        </div>
      </section>

      {/* Trust Metrics */}
      <TrustMetricsBar />

      {/* Story & Philosophy Section */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container-custom max-w-4xl space-y-8">
          <div>
            <SectionHeading
              badge="Our Genesis"
              badgeColor="green"
              title="Why Stock Buckets Was Created"
              subtitle="Tackling the credibility gap in the Indian financial advisory space."
              align="left"
            />
            <div className="prose text-steel text-xs sm:text-sm leading-relaxed space-y-3 font-normal">
              <p>
                The Indian retail advisory space has historically been dominated by high-pressure tips, exaggerated accuracy claims, and unhedged speculative calls distributed across unverified social channels. Traders and investors were frequently left without context, without position sizing guidance, and without realistic exit plans when markets turned volatile.
              </p>
              <p>
                Stock Buckets was established to pioneer an entirely different standard — treating market research as an editorial and analytical craft. We organized our research services into clear, modular <strong>&ldquo;Buckets&rdquo;</strong> (Equity, Futures, Options, Commodity) allowing subscribers to choose specific frameworks matching their exact capital capabilities and risk appetite.
              </p>
            </div>
          </div>

          {/* 3 Pillars of Philosophy */}
          <div className="bg-mist-gray/60 border border-border-gray rounded-xl p-4 sm:p-6 lg:p-7 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-ink-navy">
              Our 3-Pillar Research Philosophy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
              <div className="bg-white p-4 rounded-lg border border-border-gray/80 shadow-subtle space-y-1.5">
                <div className="text-[11px] font-mono font-bold text-sage-green uppercase">
                  Pillar 01
                </div>
                <h4 className="font-bold text-ink-navy text-sm sm:text-base">Discipline Over Prediction</h4>
                <p className="text-xs text-steel leading-relaxed">
                  We don&apos;t attempt to predict random market noise. We identify verified setups, define the risk-to-reward boundary, and let mathematical edge prevail.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-border-gray/80 shadow-subtle space-y-1.5">
                <div className="text-[11px] font-mono font-bold text-soft-amber uppercase">
                  Pillar 02
                </div>
                <h4 className="font-bold text-ink-navy text-sm sm:text-base">Capital Preservation First</h4>
                <p className="text-xs text-steel leading-relaxed">
                  Every call includes a mandatory stop-loss. Protecting capital against drawdown is our highest priority across all market cycles.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-border-gray/80 shadow-subtle space-y-1.5">
                <div className="text-[11px] font-mono font-bold text-ink-navy uppercase">
                  Pillar 03
                </div>
                <h4 className="font-bold text-ink-navy text-sm sm:text-base">Context on Every Call</h4>
                <p className="text-xs text-steel leading-relaxed">
                  No unexplained numbers. Subscribers receive entry zone parameters, 3 risk-adjusted targets, and live market hour follow-ups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-10 sm:py-16 bg-mist-gray/30 border-t border-border-gray">
        <div className="container-custom">
          <SectionHeading
            badge="Guiding Principles"
            badgeColor="navy"
            title="Our Core Institutional Values"
            subtitle="The fundamental commitments that guide our analyst team every single trading day."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white border border-border-gray p-4 sm:p-5 rounded-xl shadow-card flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-10 h-10 rounded-lg ${v.bg} ${v.color} flex items-center justify-center mb-3 border border-border-gray/50`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-ink-navy mb-1">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-steel leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Desk Roles */}
      <section className="py-10 sm:py-16 bg-white border-t border-border-gray">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            badge="Human Intelligence"
            badgeColor="green"
            title="Our Research Desk Structure"
            subtitle="Specialized domain analysts coordinating under a unified risk management framework."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-cloud-white border border-border-gray p-4 rounded-xl shadow-subtle space-y-1"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-sage-green" />
                  <h4 className="font-bold text-sm sm:text-base text-ink-navy">
                    {member.role}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-steel leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
