import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Market Risk Disclaimer | Stock Buckets Research Company",
  description:
    "Statutory market risk disclaimers, capital loss warnings, and advisory boundaries for Stock Buckets Research Company.",
};

export default function DisclaimerPage() {
  return (
    <div>
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 border-b border-border-gray relative">
        <div className="container-custom max-w-4xl">
          <div className="mb-2.5 sm:mb-3">
            <span className="badge-pill badge-pill-amber">Statutory Notice</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-ink-navy leading-snug">
            Standard Market Disclaimer
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-steel">
            Mandatory disclosure regarding investment risks and research publication scope.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-14 bg-white">
        <div className="container-custom max-w-4xl space-y-8 text-sm sm:text-base text-steel leading-relaxed">
          <div className="p-6 bg-red-50 border-l-4 border-alert rounded-r-xl space-y-2 text-ink-navy">
            <h3 className="font-bold text-base text-alert uppercase tracking-wide flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              General Securities & Derivatives Risk Warning
            </h3>
            <p className="text-xs sm:text-sm text-steel leading-relaxed">
              Trading and investing in equities, derivatives (futures and options), and commodities involve substantial financial risk. The price of financial instruments can fluctuate widely, and market participants may lose a significant portion or all of their deposited capital.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink-navy">1. Educational & Analytical Purpose</h2>
            <p>
              All recommendations, research reports, market insights, and target calculations published by <strong>{COMPANY.name}</strong> are formulated strictly for educational, analytical, and informational purposes. While our research team employs rigorous technical analysis, candlestick pattern recognition, and volume spread methodologies, no technical indicator or predictive framework can guarantee market direction.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink-navy">2. Individual Investor Discretion</h2>
            <p>
              Subscribers are solely responsible for all trades and investment decisions executed in their individual demat/trading accounts with their respective brokers. {COMPANY.name} does not have access to client accounts, does not execute trades on behalf of clients, and is not responsible for any financial loss, slippage, margin call liquidation, or execution delays incurred.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink-navy">3. No Claims of Guaranteed Returns</h2>
            <p>
              {COMPANY.name} strictly distances itself from any entities promising guaranteed returns, fixed interest payouts, or assured profit multipliers. Any representative or third party claiming that our services offer guaranteed returns is doing so fraudulently and without our authorization.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink-navy">4. Telegram & Impersonation Disclaimer</h2>
            <p>
              The Company maintains <strong>NO presence on Telegram</strong> and does not operate any public tip channels. We advise all users to remain vigilant against fake Telegram channels, duplicate social media handles, or individuals soliciting funds in personal UPI IDs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
