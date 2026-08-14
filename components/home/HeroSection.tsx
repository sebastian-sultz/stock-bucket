import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, TrendingUp } from "lucide-react";
import { HeroChartSVG } from "@/components/svg/HeroChartSVG";
import { TickerStrip } from "@/components/shared/TickerStrip";

export function HeroSection() {
  return (
    <>
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (7 cols) - Editorial Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 animate-fade-in-up">
              {/* Clean Single-Line Pill Tag */}
              <div>
                <span className="badge-pill badge-pill-green">
                  Independent Financial Research Desk
                </span>
              </div>

              {/* Display Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-ink-navy leading-[1.12] tracking-tight">
                Research-Backed <br className="hidden sm:inline" />
                <span className="text-sage-green">Market Calls.</span> <br />
                Zero Noise.
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-steel leading-relaxed max-w-xl font-normal">
                Stock Buckets delivers structured, risk-defined research across Equity, Futures, Options, and MCX Commodity segments with defined entry zones, 3 profit targets, and mandatory stop-losses.
              </p>

              {/* Dual CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <Link
                  href="/services"
                  className="btn-primary text-xs sm:text-sm py-2.5 px-6 rounded-lg justify-center shadow-sm"
                >
                  <span>Explore 4 Research Buckets</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary text-xs sm:text-sm py-2.5 px-5 rounded-lg justify-center"
                >
                  <span>Speak With an Analyst</span>
                </Link>
              </div>

              {/* Clean Trust Proof Strip */}
              <div className="pt-3 border-t border-border-gray/80 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-steel-dark">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-sage-green flex-shrink-0" />
                  <span>14+ Yrs Track Record</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sage-green flex-shrink-0" />
                  <span>5,000+ Verified Setups</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-soft-amber flex-shrink-0" />
                  <span>Mandatory Stop-Loss</span>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols) - Visual Interactive Chart */}
            <div className="lg:col-span-5 w-full animate-fade-in stagger-2 relative">
              <HeroChartSVG />
            </div>
          </div>
        </div>
      </section>

      {/* Clean Ticker Strip Transition into next section */}
      <div className="border-y border-border-gray bg-white/90 backdrop-blur-md py-2 relative z-10 shadow-subtle">
        <div className="container-custom">
          <TickerStrip />
        </div>
      </div>
    </>
  );
}
