import type { Metadata } from "next";
import { CheckCircle2, XCircle } from "lucide-react";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";

export const metadata: Metadata = {
  title: "Investor Do's & Don'ts | Stock Buckets Research Company",
  description:
    "Essential guidelines and protective measures for traders and investors to navigate financial markets responsibly and avoid fraud.",
};

export default function DosAndDontsPage() {
  const dos = [
    "Always trade with risk capital that you can afford to lose without impacting your lifestyle.",
    "Verify the beneficiary name matches 'Stock Buckets Research Company' before transferring subscription fees.",
    "Ensure system stop-losses are strictly set in your terminal immediately upon order entry.",
    "Diversify your position sizing across multiple trades rather than allocating entire capital to a single call.",
    "Keep records of all official invoices and transaction reference numbers.",
    "Raise queries or grievances through official company email and registered phone channels.",
  ];

  const donts = [
    "DO NOT fall for claims of guaranteed returns, 100% accuracy, or zero-risk advisory schemes.",
    "DO NOT make payments to any individual's personal savings account or unauthorized UPI IDs.",
    "DO NOT share your demat account password, trading PIN, or OTP with anyone, including advisory staff.",
    "DO NOT trade based on unverified Telegram tips, anonymous WhatsApp groups, or social media rumors.",
    "DO NOT over-leverage your futures or options positions beyond predefined capital risk limits.",
    "DO NOT yield to high-pressure sales tactics or limited-period discount extortion from unverified callers.",
  ];

  return (
    <div>
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 border-b border-border-gray relative">
        <div className="container-custom max-w-4xl text-center">
          <div className="mb-2.5 sm:mb-3">
            <span className="badge-pill badge-pill-green">Investor Education</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-ink-navy leading-snug">
            Investor Do&apos;s & Don&apos;ts
          </h1>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-steel leading-relaxed max-w-2xl mx-auto">
            Practical guidelines to safeguard your capital, practice disciplined risk management, and avoid financial scams.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* DO's Column */}
            <div className="bg-emerald-50/50 border border-sage-green/30 rounded-xl p-4 sm:p-6 shadow-card space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-sage-green/20">
                <div className="w-10 h-10 rounded-xl bg-sage-green text-white flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-ink-navy">The DO&apos;s</h2>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-ink-navy leading-relaxed">
                {dos.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sage-green flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DONT's Column */}
            <div className="bg-red-50/50 border border-alert/30 rounded-xl p-4 sm:p-6 shadow-card space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-alert/20">
                <div className="w-10 h-10 rounded-xl bg-alert text-white flex items-center justify-center">
                  <XCircle className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-ink-navy">The DON&apos;Ts</h2>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-ink-navy leading-relaxed">
                {donts.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-alert flex-shrink-0 mt-0.5" />
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
