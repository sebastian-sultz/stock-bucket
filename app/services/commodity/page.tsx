import type { Metadata } from "next";
import { Coins, Zap, Wrench } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { PackageCard } from "@/components/services/PackageCard";
import { PACKAGES } from "@/lib/constants";
import { ContactCTA } from "@/components/home/ContactCTA";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";

export const metadata: Metadata = {
  title: "Commodity Research Bucket | MCX Bullion, Energy & Base Metals",
  description:
    "Specialized MCX commodity research across Gold, Silver, Crude Oil, and Natural Gas. International macro correlation with extended evening market session coverage.",
};

export default function CommodityServicePage() {
  const mcxSegments = [
    {
      title: "Bullion",
      items: ["Gold (1kg / 100g / Mini)", "Silver (30kg / Mini / Micro)"],
      desc: "US Fed interest rate cycles, inflation data, and dollar index tracking.",
      icon: Coins,
      color: "text-soft-amber",
      bg: "bg-amber-50",
    },
    {
      title: "Energy",
      items: ["Crude Oil (WTI & Brent correlations)", "Natural Gas (EIA inventory setups)"],
      desc: "OPEC output decisions, Middle East geopolitical updates, and weekly storage reports.",
      icon: Zap,
      color: "text-alert",
      bg: "bg-red-50",
    },
    {
      title: "Base Metals",
      items: ["Copper", "Zinc", "Aluminium", "Lead"],
      desc: "LME warehouse inventory, global manufacturing PMI indices, and industrial demand.",
      icon: Wrench,
      color: "text-steel",
      bg: "bg-slate-100",
    },
  ];

  return (
    <div>
      <ServiceHero
        badge="MCX Commodity Desk"
        badgeColor="amber"
        title="Commodity Research Bucket"
        tagline="Global macros. Real assets. Pure momentum."
        description="Commodity markets operate on international demand-supply macros and global geopolitical cycles. Our MCX Commodity Research Desk delivers high-conviction intraday and swing recommendations across precious metals, industrial base metals, and energy contracts."
        segment="commodity"
        highlights={[
          "Bullion: Gold (1KG/Mini) & Silver (30KG/Mini/Micro)",
          "Energy: Crude Oil & Natural Gas momentum calls",
          "Base Metals: Copper, Zinc, Aluminium & Lead contracts",
        ]}
      />

      {/* Visual MCX Segment Coverage Grid */}
      <section className="py-16 bg-white border-b border-border-gray">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-pill badge-pill-amber mb-2">Market Scope</span>
            <h2 className="text-3xl font-bold text-ink-navy">
              MCX Segments We Actively Track
            </h2>
            <p className="text-sm text-steel mt-2">
              Cross-asset analytical tracking aligned with global COMEX, NYMEX, and LME benchmark prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mcxSegments.map((seg, i) => {
              const Icon = seg.icon;
              return (
                <div
                  key={i}
                  className="bg-cloud-white border border-border-gray rounded-2xl p-6 sm:p-7 shadow-card space-y-4"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${seg.bg} ${seg.color} flex items-center justify-center border border-border-gray/50`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-navy">{seg.title}</h3>
                  <p className="text-xs sm:text-sm text-steel leading-relaxed">
                    {seg.desc}
                  </p>

                  <div className="pt-3 border-t border-border-gray/70 space-y-1.5 text-xs font-mono text-ink-navy font-semibold">
                    {seg.items.map((it, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage-green" />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 sm:py-24 bg-mist-gray/40">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-pill badge-pill-amber mb-2">Available Packages</span>
            <h2 className="text-3xl font-bold text-ink-navy">
              Choose Your Commodity Package
            </h2>
            <p className="text-sm text-steel mt-2">
              Select the package suited to your preferred commodity contracts and capital exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PACKAGES.commodity.map((pkg) => (
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
