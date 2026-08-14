import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";

export const metadata: Metadata = {
  title: "Statutory Disclosures & Policies | Stock Buckets Research",
  description:
    "Official corporate disclosures, operational scope, and conflict of interest policies for Stock Buckets Research Company.",
};

export default function DisclosurePage() {
  return (
    <div>
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 border-b border-border-gray relative">
        <div className="container-custom max-w-4xl">
          <div className="mb-2.5 sm:mb-3">
            <span className="badge-pill badge-pill-navy">Transparency & Compliance</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-ink-navy leading-snug">
            Statutory Disclosures & Policies
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-steel">
            Official operational disclosures outlining service boundaries, fee models, and business conduct.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-14 bg-white">
        <div className="container-custom max-w-4xl space-y-8 text-sm sm:text-base text-steel leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink-navy">1. Business Operations & Scope</h2>
            <p>
              <strong>{COMPANY.name}</strong> operates as an independent market research and advisory publisher providing structured technical and fundamental research reports across Equity, Futures, Options, and MCX Commodity segments.
            </p>
            <p>
              Our operations are confined exclusively to the research packages listed on this website. We do not offer portfolio management services (PMS), alternative investment funds (AIF), or collective investment schemes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink-navy">2. Conflict of Interest & Independence Policy</h2>
            <p>
              The Company maintains strict editorial and analytical independence:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-sm text-steel">
              <li>Our analysts do not trade ahead of published recommendations or front-run client research calls.</li>
              <li>We do not receive any compensation, brokerage rebates, or marketing kickbacks from publicly traded companies or stockbrokers for publishing positive or negative coverage.</li>
              <li>Our revenues are derived solely from transparent subscription fees paid by our verified clients.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink-navy">3. Disclosure of Past Litigation</h2>
            <p>
              There are no pending litigations, regulatory disciplinary actions, or legal proceedings against <strong>{COMPANY.name}</strong> or its principal management team as of the date of this publication.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink-navy">4. Service Boundary Disclosures</h2>
            <ul className="space-y-2 list-disc pl-5 text-sm text-steel">
              <li><strong>No Guaranteed Outcomes:</strong> All recommendations carry financial market risk.</li>
              <li><strong>No Discretionary Trading:</strong> We never hold client funds, demat login credentials, or power of attorney.</li>
              <li><strong>No Cash / Personal Account Payments:</strong> All fees are collected strictly via official current accounts.</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-border-gray">
            <RiskDisclaimer />
          </div>
        </div>
      </section>
    </div>
  );
}
