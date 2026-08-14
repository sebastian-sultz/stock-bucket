import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { BUCKETS } from "@/lib/constants";
import { ServiceComparison } from "@/components/services/ServiceComparison";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Subscription & Pricing Overview | Stock Buckets Research",
  description:
    "Review Stock Buckets advisory subscription plans across Equity, Futures, Options, and Commodity research buckets. Transparent, fixed-fee terms with no profit-sharing.",
};

export default function PricingPage() {
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
            Straightforward, fixed-fee research packages. We never engage in profit-sharing, hidden commissions, or unverified fee escalations.
          </p>
        </div>
      </section>

      {/* Subscription Model Highlights */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mb-10 sm:mb-14">
            {BUCKETS.map((bucket) => (
              <div
                key={bucket.id}
                className="bg-cloud-white border border-border-gray rounded-xl p-4 sm:p-5 shadow-card flex flex-col justify-between"
              >
                <div>
                  <span className="badge-pill badge-pill-navy text-[10px] font-mono mb-2">
                    {bucket.badge}
                  </span>
                  <h3 className="text-lg font-bold text-ink-navy">{bucket.title}</h3>
                  <p className="text-xs text-steel mt-0.5 italic">&ldquo;{bucket.tagline}&rdquo;</p>
                  
                  <div className="mt-3 pt-3 border-t border-border-gray/70 space-y-1.5">
                    <span className="text-[10px] font-mono text-steel uppercase block font-semibold">
                      Packages:
                    </span>
                    {bucket.packages.map((pkg, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-ink-navy font-medium">
                        <Check className="w-3 h-3 text-sage-green" />
                        <span>{pkg}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-border-gray">
                  <Link
                    href={`/contact?service=${encodeURIComponent(bucket.title)}`}
                    className="btn-primary w-full py-2 rounded-lg text-xs justify-center"
                  >
                    <span>Inquire for Subscription</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Policy Box */}
          <div className="bg-mist-gray/60 border border-border-gray rounded-xl p-4 sm:p-6 mb-10 sm:mb-14 max-w-4xl mx-auto space-y-3">
            <h3 className="text-base font-bold text-ink-navy">
              Our Non-Negotiable Pricing & Subscription Policy:
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-steel leading-relaxed">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sage-green flex-shrink-0 mt-0.5" />
                <span><strong>Pure Fixed Fee:</strong> We charge solely for research delivery and analytical time. We do not demand any percentage of trading profits.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sage-green flex-shrink-0 mt-0.5" />
                <span><strong>Non-Refundable:</strong> All advisory service fees paid are strictly non-refundable once research delivery commences.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sage-green flex-shrink-0 mt-0.5" />
                <span><strong>Official Bank Channels Only:</strong> Payments must be made strictly to the official Stock Buckets Research Company accounts listed on our verified Payment page.</span>
              </li>
            </ul>
          </div>

          {/* Full Comparison Table */}
          <ServiceComparison />

          <div className="mt-12 max-w-4xl mx-auto">
            <RiskDisclaimer />
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
