import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { PackageCard } from "@/components/services/PackageCard";
import { PACKAGES } from "@/lib/constants";
import { ContactCTA } from "@/components/home/ContactCTA";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";

export const metadata: Metadata = {
  title: "Equity Research Bucket | Quantum Cash & Blue Chip",
  description:
    "Structured intraday and short-term delivery research calls on NSE & BSE cash segment stocks. Defined targets, strict stop-loss, and daily track sheets.",
  alternates: {
    canonical: "https://stockbucketresearchfirm.co/services/equity",
  },
};

export default function EquityServicePage() {
  return (
    <div>
      <ServiceHero
        badge="Cash & Delivery Segment"
        badgeColor="green"
        title="Equity Research Bucket"
        tagline="Great wealth begins with great businesses."
        description="Our Equity Research Desk specializes in high-momentum cash intraday breakouts and high-conviction short-term delivery recommendations across NSE and BSE listed stocks. Every call is formulated with multi-timeframe volume confirmation."
        segment="equity"
        highlights={[
          "Quantum Cash: 3–5 high-volatility intraday calls",
          "Blue Chip: High-liquidity large cap focus",
          "Midcap Delivery: 2–5 days swing holding horizons",
        ]}
      />

      {/* Packages Grid */}
      <section className="py-10 sm:py-16 bg-mist-gray/40">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-pill badge-pill-green mb-2">
              Available Packages
            </span>
            <h2 className="text-3xl font-bold text-ink-navy">
              Choose Your Equity Package
            </h2>
            <p className="text-sm text-steel mt-2">
              Select the package aligned with your trading capital, holding
              preference, and daily market availability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PACKAGES.equity.map((pkg) => (
              <PackageCard
                key={pkg.id}
                name={pkg.name}
                tagline={pkg.tagline}
                segment={pkg.segment}
                riskLevel={pkg.riskLevel}
                callsPerDay={pkg.callsPerDay}
                targets={pkg.targets}
                maxOpenPositions={pkg.maxOpenPositions}
                delivery={pkg.delivery}
                features={pkg.features}
                sampleCall={pkg.sampleCall}
                formattedPrice={pkg.formattedPrice}
                tenure={pkg.tenure}
                tenureShort={pkg.tenureShort}
                tier={pkg.tier}
                accentColor="green"
              />
            ))}
          </div>

          <div className="mt-14 max-w-4xl mx-auto">
            <RiskDisclaimer />
          </div>
        </div>
      </section>

      {/* What is Equity Research Section */}
      <section className="py-10 bg-white border-b border-border-gray">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold text-ink-navy mb-4">
            Understanding Our Equity Advisory Framework
          </h2>
          <div className="prose text-steel text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              In cash equity trading, capital preservation is achieved by
              avoiding illiquid penny stocks and focusing purely on
              institutional accumulation patterns. Our Equity Bucket is
              structured into three specialized tiers, matching active intraday
              scalpers as well as multi-day positional swing traders.
            </p>
            <p>
              Calls are dispatched strictly during active trading hours (09:15
              AM to 03:30 PM) directly via verified Telephonic and WhatsApp
              channels, complete with entry thresholds, three distinct profit
              realization targets, and an uncompromised system stop-loss.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
