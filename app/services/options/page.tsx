import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { PackageCard } from "@/components/services/PackageCard";
import { PACKAGES } from "@/lib/constants";
import { ContactCTA } from "@/components/home/ContactCTA";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";

export const metadata: Metadata = {
  title: "Options Research Bucket | Option Mantra & Index Calls",
  description:
    "Structured options advisory from low-risk Option Mantra strategies to high-conviction index strike calls. Greeks management and predefined risk on every trade.",
  alternates: {
    canonical: "https://stockbucketresearchfirm.co/services/options",
  },
};

export default function OptionsServicePage() {
  return (
    <div>
      <ServiceHero
        badge="F&O Options Desk"
        badgeColor="navy"
        title="Options Research Bucket"
        tagline="Strategy wins where prediction fails."
        description="Option premium pricing is heavily governed by Theta decay and Implied Volatility. Our Options Research Desk engineers risk-defined strike calls, designed to capture explosive momentum moves while capping downside risk through tight stop-losses."
        segment="options"
        highlights={[
          "Option Mantra: Structured, low-risk Greek alignment",
          "Index Options: High-momentum Nifty & BankNifty strikes",
          "HNI Options: Curated short-term trend setups",
        ]}
      />

      {/* What is Options Trading Section */}
      <section className="py-12 bg-white border-b border-border-gray">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold text-ink-navy mb-4">
            Greek-Managed Options Methodology
          </h2>
          <div className="prose text-steel text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              Unlike simple stock buying, options trading requires deep attention to Delta, Theta, and Gamma dynamics. Many retail traders lose capital due to holding depreciating out-of-the-money options. Our advisory methodology focuses on liquid near-the-money strikes with favorable asymmetric risk-to-reward setups.
            </p>
            <p>
              All recommendations state exact strike pricing, entry limits, three phased targets, and tight stop-losses to protect against overnight gap risk and mid-session volatility spikes.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-10 sm:py-16 bg-mist-gray/40">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-pill badge-pill-navy mb-2">Available Packages</span>
            <h2 className="text-3xl font-bold text-ink-navy">
              Choose Your Options Package
            </h2>
            <p className="text-sm text-steel mt-2">
              From conservative Option Mantra frameworks to high-momentum intraday index calls.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PACKAGES.options.map((pkg) => (
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
                accentColor="navy"
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
