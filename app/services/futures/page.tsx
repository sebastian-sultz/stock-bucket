import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { PackageCard } from "@/components/services/PackageCard";
import { PACKAGES } from "@/lib/constants";
import { ContactCTA } from "@/components/home/ContactCTA";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";

export const metadata: Metadata = {
  title: "Futures Research Bucket | Stock & Index F&O",
  description:
    "High-accuracy stock futures and index futures research calls across NSE and BSE derivatives segments. Multi-target setups with disciplined risk management.",
  alternates: {
    canonical: "https://stockbucketresearchfirm.co/services/futures",
  },
};

export default function FuturesServicePage() {
  return (
    <div>
      <ServiceHero
        badge="F&O Derivatives Segment"
        badgeColor="amber"
        title="Futures Research Bucket"
        tagline="Ride the trend. Respect the risk."
        description="Futures contracts offer leverage and bi-directional trading opportunities. Our Futures Research Desk leverages open interest accumulation, institutional rollover dynamics, and price action breakouts to deliver high-conviction futures setups."
        segment="futures"
        highlights={[
          "Stock Futures: Individual high-momentum F&O stocks",
          "Index Futures: Nifty, BankNifty & FinNifty pivots",
          "HNI Futures: Tailored large-capital lot recommendations",
        ]}
      />

      {/* What is Futures Trading Section */}
      <section className="py-12 bg-white border-b border-border-gray">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold text-ink-navy mb-4">
            Disciplined Futures Strategy Framework
          </h2>
          <div className="prose text-steel text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              Futures trading involves leveraged exposure where volatility can amplify both gains and drawdowns. For this reason, every futures call published by Stock Buckets includes a strict risk-to-reward ratio of at least 1:2.5, maximum 2 open positions at any time, and mandatory stop-loss adherence.
            </p>
            <p>
              We cover active contracts across NSE and BSE, updating subscribers with real-time rollover statistics, open interest shifts, and intraday trailing profit levels.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-10 sm:py-16 bg-mist-gray/40">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-pill badge-pill-amber mb-2">Available Packages</span>
            <h2 className="text-3xl font-bold text-ink-navy">
              Choose Your Futures Package
            </h2>
            <p className="text-sm text-steel mt-2">
              Select the futures tier aligned with your capital lot capacity and preferred derivatives timeframe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PACKAGES.futures.map((pkg) => (
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
                monthlyEquivalent={"monthlyEquivalent" in pkg ? pkg.monthlyEquivalent : undefined}
                accentColor="amber"
              />
            ))}
          </div>

          <div className="mt-14 max-w-4xl mx-auto">
            <RiskDisclaimer />
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
