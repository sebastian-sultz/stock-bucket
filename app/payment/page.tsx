import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, Building2, QrCode, PhoneCall, Mail, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";

export const metadata: Metadata = {
  title: "Official Payment Instructions & Security Verification",
  description:
    "Official bank transfer and payment verification details for Stock Buckets Research Company. Protect yourself from unauthorized accounts and fraud.",
};

export default function PaymentPage() {
  return (
    <div>
      {/* Header - Seamless from Top Navbar */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 border-b border-border-gray relative">
        <div className="container-custom max-w-3xl text-center">
          <div className="mb-2.5 sm:mb-3">
            <span className="badge-pill badge-pill-amber">Payment Security Notice</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-ink-navy tracking-tight leading-snug">
            Official Payment Instructions
          </h1>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-steel leading-relaxed max-w-xl mx-auto">
            Ensure that all subscription fee transactions are directed exclusively to the official, verified company bank details shown below.
          </p>
        </div>
      </section>

      {/* Critical Security Warning Box */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container-custom max-w-4xl space-y-6">
          <div className="bg-amber-50 border border-soft-amber/40 p-4 sm:p-6 rounded-xl space-y-2.5">
            <div className="flex items-center gap-2 text-soft-amber font-bold text-sm sm:text-base">
              <ShieldAlert className="w-5 h-5 flex-shrink-0" />
              <span>MANDATORY CLIENT VERIFICATION CHECKLIST BEFORE PAYING</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-ink-navy font-medium leading-relaxed pl-1">
              <li className="flex items-start gap-2">
                <span className="text-soft-amber font-bold">•</span>
                <span><strong>Beneficiary Name Match:</strong> Ensure the beneficiary name matches <strong>&ldquo;{COMPANY.name}&rdquo;</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-soft-amber font-bold">•</span>
                <span><strong>NO Personal Accounts:</strong> Never transfer funds to personal savings accounts of employees, agents, or third-party individuals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-soft-amber font-bold">•</span>
                <span><strong>NO Telegram / WhatsApp Payment Links:</strong> Stock Buckets operates NO Telegram channels. Any payment link sent over unverified channels is fraudulent.</span>
              </li>
            </ul>
          </div>

          {/* Official Bank Transfer Details Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Bank Card */}
            <div className="bg-cloud-white border border-border-gray rounded-xl p-4 sm:p-6 shadow-card space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-border-gray">
                <div className="w-8 h-8 rounded-lg bg-ink-navy text-white flex items-center justify-center">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-ink-navy">Bank Transfer / NEFT / RTGS</h3>
                  <span className="text-[11px] font-mono text-steel">Official Current Account</span>
                </div>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div>
                  <span className="text-steel text-[10px] uppercase block">Account Name</span>
                  <span className="font-bold text-ink-navy">{COMPANY.name}</span>
                </div>
                <div>
                  <span className="text-steel text-[10px] uppercase block">Bank Name</span>
                  <span className="font-bold text-ink-navy">HDFC Bank / ICICI Bank (To be verified)</span>
                </div>
                <div>
                  <span className="text-steel text-[10px] uppercase block">Account Number</span>
                  <span className="font-bold text-ink-navy">XXXXXXXXXXXXXX (Provided on invoice)</span>
                </div>
                <div>
                  <span className="text-steel text-[10px] uppercase block">IFSC Code</span>
                  <span className="font-bold text-ink-navy">HDFC000XXXX</span>
                </div>
                <div>
                  <span className="text-steel text-[10px] uppercase block">Account Type</span>
                  <span className="font-bold text-ink-navy">Current Account</span>
                </div>
              </div>
            </div>

            {/* UPI QR & Quick Verification Card */}
            <div className="bg-cloud-white border border-border-gray rounded-xl p-4 sm:p-6 shadow-card space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 pb-4 border-b border-border-gray">
                  <div className="w-10 h-10 rounded-xl bg-sage-green text-white flex items-center justify-center">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink-navy">Official UPI Verification</h3>
                    <span className="text-xs font-mono text-steel">Instant Digital Transfer</span>
                  </div>
                </div>

                <div className="mt-4 p-6 bg-white border border-border-gray rounded-xl flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-32 h-32 bg-mist-gray border-2 border-dashed border-border-gray rounded-lg flex items-center justify-center text-steel font-mono text-xs">
                    [Official QR Code]
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-steel uppercase block">Official UPI ID</span>
                    <span className="font-mono font-bold text-sm text-ink-navy">
                      stockbuckets@hdfcbank
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border-gray text-xs text-steel flex items-center justify-between">
                <span>Verification Assistance:</span>
                <a href={`tel:${COMPANY.phone}`} className="font-bold text-ink-navy hover:text-sage-green">
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Next Step Banner: Mandatory RPM Risk Profile Onboarding */}
          <div className="bg-emerald-50/80 border border-emerald-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-subtle">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded border border-emerald-300">
                  Next Step After Payment
                </span>
                <span className="text-[11px] font-mono text-steel">
                  Registration Fee: <strong>₹2,500</strong>
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-ink-navy">
                Complete Risk Profile Management (RPM) Onboarding
              </h3>
              <p className="text-xs text-steel max-w-xl">
                All subscribers must complete our 16-point financial suitability and risk calibration assessment before the research desk can activate telephonic & WhatsApp dispatch.
              </p>
            </div>

            <Link
              href="/rpm"
              className="btn-primary text-xs py-3 px-5 rounded-xl flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span>Complete RPM Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Payment Query Help Section */}
          <div className="bg-mist-gray/80 border border-border-gray p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-ink-navy text-sm">Need help verifying an invoice or transfer?</h4>
              <p className="text-xs text-steel mt-0.5">
                Contact our accounts desk directly to confirm banking authenticity before sending funds.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="btn-primary text-xs py-2.5 px-4 rounded-xl flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Desk</span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="btn-secondary text-xs py-2.5 px-4 rounded-xl flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Inquiries</span>
              </a>
            </div>
          </div>

          <RiskDisclaimer />
        </div>
      </section>
    </div>
  );
}
