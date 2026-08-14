import type { Metadata } from "next";
import { BucketCards } from "@/components/home/BucketCards";
import { ServiceComparison } from "@/components/services/ServiceComparison";
import { ContactCTA } from "@/components/home/ContactCTA";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";

export const metadata: Metadata = {
  title: "Research Buckets & Services Overview",
  description:
    "Explore Stock Buckets research advisory across Equity, Futures, Options, and MCX Commodities. Structured setups with defined risk on every call.",
};

export default function ServicesPage() {
  return (
    <div>
      {/* Services Header - Seamless from Top Navbar */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 border-b border-border-gray relative">
        <div className="container-custom text-center max-w-3xl">
          <div className="mb-2.5 sm:mb-3">
            <span className="badge-pill badge-pill-green">Asset Class Architecture</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-ink-navy tracking-tight leading-snug">
            Research Packages Across All Market Segments
          </h1>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-steel leading-relaxed max-w-xl mx-auto">
            Every Stock Buckets service tier is a disciplined, standalone research framework. Each call comes complete with defined entry zones, 3 profit targets, and mandatory stop-losses.
          </p>
        </div>
      </section>

      {/* 4 Bucket Cards */}
      <BucketCards />

      {/* Feature Comparison Matrix */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container-custom">
          <ServiceComparison />

          <div className="mt-8">
            <RiskDisclaimer />
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
