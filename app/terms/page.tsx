import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Stock Buckets Research Company",
  description:
    "Official terms and conditions governing subscription, research delivery, and advisory services provided by Stock Buckets Research Company.",
};

export default function TermsPage() {
  return (
    <div>
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 border-b border-border-gray relative">
        <div className="container-custom max-w-4xl">
          <div className="mb-2.5 sm:mb-3">
            <span className="badge-pill badge-pill-navy">Legal Agreement</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-ink-navy leading-snug">
            Terms & Conditions
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-steel">
            Last Updated: August 2026 | Applicable to all active and prospective subscribers.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-14 bg-white">
        <div className="container-custom max-w-4xl space-y-8 text-sm sm:text-base text-steel leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink-navy">1. Acceptance of Terms</h2>
            <p>
              By accessing the website of <strong>{COMPANY.name}</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) or subscribing to any of our research buckets (Equity, Futures, Options, Commodity), you acknowledge that you have read, understood, and agreed to be legally bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our website or subscribe to our advisory services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink-navy">2. Nature of Advisory Service</h2>
            <p>
              The Company provides independent, structured market research and analytical opinions regarding publicly traded securities and commodity contracts. All calls, stop-losses, and target prices published are based on technical analysis, fundamental data, and macro market assessment.
            </p>
            <p>
              The service fee charged is solely for the intellectual property, analytical research work, and communications infrastructure rendered. We do not manage client funds or trade on behalf of clients.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink-navy">3. No Guaranteed Returns & No Profit Sharing</h2>
            <p>
              The Company <strong>does not guarantee returns, assure profits, or offer profit-sharing arrangements</strong> under any circumstances. Stock and commodity markets are subject to inherent market risk, macroeconomic volatility, and potential loss of capital. Any past performance displayed on our website or track sheets is strictly for illustrative purposes and does not guarantee future results.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink-navy">4. Non-Refundable Fee Policy</h2>
            <p>
              All service fees, subscription charges, and package payments made to {COMPANY.name} are <strong>strictly non-refundable</strong>. Once a subscription is activated and research delivery commences, no full or partial refunds, chargebacks, or fee transfers will be processed. Clients are advised to evaluate their risk appetite and review our sample calls before subscribing.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink-navy">5. Authorized Delivery & Communication Channels</h2>
            <p>
              All official research calls and customer support are dispatched strictly via official SMS routes and registered Instant Messaging channels directly to the client&apos;s verified mobile number. The Company <strong>does NOT operate, manage, or endorse any public or private Telegram channels or WhatsApp tip groups</strong>. We are not liable for any losses arising from interactions with unauthorized third-party channels impersonating our brand.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink-navy">6. Intellectual Property & Non-Redistribution</h2>
            <p>
              All research notes, target calculations, track sheets, and website content are the exclusive intellectual property of {COMPANY.name}. Subscribers are strictly prohibited from copying, forwarding, redistributing, or reselling our research calls to third parties without prior written consent.
            </p>
          </div>

          <div className="pt-6 border-t border-border-gray">
            <RiskDisclaimer />
          </div>
        </div>
      </section>
    </div>
  );
}
