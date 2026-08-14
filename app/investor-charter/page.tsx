import type { Metadata } from "next";
import { UserCheck, Shield, CheckCircle } from "lucide-react";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";

export const metadata: Metadata = {
  title: "Investor Charter | Stock Buckets Research Company",
  description:
    "Investor Charter outlining rights, responsibilities, and advisory commitments for subscribers of Stock Buckets Research Company.",
};

export default function InvestorCharterPage() {
  const rights = [
    "Right to receive clear, structured research recommendations with defined entry, targets, and stop-loss.",
    "Right to transparent pricing information without hidden costs or post-facto profit-sharing demands.",
    "Right to privacy and protection of personal contact data (no selling of numbers to third parties).",
    "Right to prompt resolution of disputes and grievances within 21 calendar days.",
    "Right to fair and non-discriminatory service delivery across all market participants.",
  ];

  const responsibilities = [
    "Responsibility to evaluate personal financial risk tolerance and capital limitations before subscribing.",
    "Responsibility to place system stop-loss orders in personal trading terminals immediately on entry.",
    "Responsibility to make subscription payments only into official verified company bank accounts.",
    "Responsibility to safeguard demat account passwords, OTPs, and personal financial credentials.",
    "Responsibility to avoid circulating or re-publishing proprietary advisory calls without authorization.",
  ];

  return (
    <div>
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 border-b border-border-gray relative">
        <div className="container-custom max-w-4xl text-center">
          <div className="mb-2.5 sm:mb-3">
            <span className="badge-pill badge-pill-green">Investor Rights</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-ink-navy leading-snug">
            Investor Charter
          </h1>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-steel leading-relaxed max-w-2xl mx-auto">
            A comprehensive document outlining the rights, duties, and mutual responsibilities between subscribers and Stock Buckets Research Company.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="container-custom max-w-5xl space-y-8">
          {/* Vision & Mission Statement */}
          <div className="bg-mist-gray/70 border border-border-gray p-4 sm:p-6 rounded-xl space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-ink-navy">
              Charter Objective & Vision
            </h2>
            <p className="text-xs sm:text-sm text-steel leading-relaxed">
              To foster an equitable, transparent, and research-driven ecosystem where every market participant receives structured advisory calls with complete risk context, capital protection guidance, and responsive support.
            </p>
          </div>

          {/* 2-Column Rights & Responsibilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Rights */}
            <div className="bg-cloud-white border border-border-gray rounded-xl p-4 sm:p-6 shadow-card space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-border-gray">
                <div className="w-8 h-8 rounded-lg bg-sage-green text-white flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-ink-navy">
                  Rights of Subscribers
                </h3>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-ink-navy leading-relaxed">
                {rights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sage-green flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="bg-cloud-white border border-border-gray rounded-xl p-4 sm:p-6 shadow-card space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-border-gray">
                <div className="w-8 h-8 rounded-lg bg-ink-navy text-white flex items-center justify-center">
                  <UserCheck className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-ink-navy">
                  Responsibilities of Subscribers
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-navy leading-relaxed">
                {responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-soft-amber flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <RiskDisclaimer />
          </div>
        </div>
      </section>
    </div>
  );
}
