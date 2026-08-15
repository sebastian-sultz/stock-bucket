"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldAlert,
  Building2,
  QrCode,
  PhoneCall,
  Mail,
  ArrowRight,
  Copy,
  Check,
  CheckCircle2,
} from "lucide-react";
import { COMPANY, BANK_DETAILS } from "@/lib/constants";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";

export default function PaymentPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyText = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div>
      {/* Header - Seamless from Top Navbar */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 border-b border-border-gray relative">
        <div className="container-custom max-w-3xl text-center">
          <div className="mb-2.5 sm:mb-3">
            <span className="badge-pill badge-pill-amber">Verified Banking Verification</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-ink-navy tracking-tight leading-snug">
            Official Payment Instructions
          </h1>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-steel leading-relaxed max-w-xl mx-auto">
            Ensure that all subscription fee transactions are directed exclusively to the official, verified bank details and QR code shown below.
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
                <span>
                  <strong>Beneficiary Name Match:</strong> Ensure the beneficiary name matches{" "}
                  <strong>&ldquo;{BANK_DETAILS.accountName}&rdquo;</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-soft-amber font-bold">•</span>
                <span>
                  <strong>NO Third-Party / Personal Agents:</strong> Never transfer funds to unlisted personal accounts or intermediaries.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-soft-amber font-bold">•</span>
                <span>
                  <strong>NO Telegram Channels:</strong> Stock Buckets operates NO Telegram channels. All official communication is strictly via verified Telephonic & WhatsApp channels.
                </span>
              </li>
            </ul>
          </div>

          {/* Official Bank Transfer & QR Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Bank Card */}
            <div className="bg-cloud-white border border-border-gray rounded-2xl p-5 sm:p-6 shadow-card space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 pb-3 border-b border-border-gray">
                  <div className="w-9 h-9 rounded-xl bg-ink-navy text-white flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ink-navy">Bank Transfer (NEFT / RTGS / IMPS)</h3>
                    <span className="text-[11px] font-mono text-steel">Official Account Details</span>
                  </div>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {/* Account Name */}
                  <div className="p-2.5 bg-white border border-border-gray rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-steel text-[10px] uppercase block">Account Holder Name</span>
                      <strong className="text-ink-navy font-sans text-sm block">{BANK_DETAILS.accountName}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyText(BANK_DETAILS.accountName, "name")}
                      className="p-1.5 hover:bg-mist-gray rounded text-steel hover:text-ink-navy transition-colors"
                      title="Copy Name"
                    >
                      {copiedField === "name" ? <Check className="w-4 h-4 text-sage-green" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Account Number */}
                  <div className="p-2.5 bg-white border border-border-gray rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-steel text-[10px] uppercase block">Account Number</span>
                      <strong className="text-ink-navy text-base tracking-wider block font-bold">{BANK_DETAILS.accountNumber}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyText(BANK_DETAILS.accountNumber, "acc")}
                      className="p-1.5 hover:bg-mist-gray rounded text-steel hover:text-ink-navy transition-colors"
                      title="Copy Account Number"
                    >
                      {copiedField === "acc" ? <Check className="w-4 h-4 text-sage-green" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* IFSC Code */}
                  <div className="p-2.5 bg-white border border-border-gray rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-steel text-[10px] uppercase block">IFSC Code</span>
                      <strong className="text-ink-navy text-sm font-bold block">{BANK_DETAILS.ifscCode}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyText(BANK_DETAILS.ifscCode, "ifsc")}
                      className="p-1.5 hover:bg-mist-gray rounded text-steel hover:text-ink-navy transition-colors"
                      title="Copy IFSC Code"
                    >
                      {copiedField === "ifsc" ? <Check className="w-4 h-4 text-sage-green" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Bank & Branch */}
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 bg-white/70 border border-border-gray/80 rounded-lg">
                      <span className="text-steel text-[10px] uppercase block">Bank Name</span>
                      <span className="font-bold text-ink-navy">{BANK_DETAILS.bankName}</span>
                    </div>
                    <div className="p-2 bg-white/70 border border-border-gray/80 rounded-lg">
                      <span className="text-steel text-[10px] uppercase block">Branch</span>
                      <span className="font-bold text-ink-navy">{BANK_DETAILS.branch}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border-gray text-[11px] text-steel flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sage-green flex-shrink-0" />
                <span>Instant IMPS & NEFT settlement supported</span>
              </div>
            </div>

            {/* UPI QR & Quick Verification Card */}
            <div className="bg-cloud-white border border-border-gray rounded-2xl p-5 sm:p-6 shadow-card space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-border-gray">
                  <div className="w-9 h-9 rounded-xl bg-sage-green text-white flex items-center justify-center flex-shrink-0">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ink-navy">Official UPI / QR Verification</h3>
                    <span className="text-[11px] font-mono text-steel">Google Pay, PhonePe, Paytm, BHIM</span>
                  </div>
                </div>

                <div className="mt-3 p-4 bg-white border border-border-gray rounded-2xl flex flex-col items-center justify-center text-center space-y-3">
                  {/* QR Image Box with generous white padding to prevent any edge clipping */}
                  <div className="bg-white p-3 rounded-2xl border border-border-gray/80 shadow-sm flex items-center justify-center">
                    <Image
                      src={BANK_DETAILS.qrImage}
                      alt={`Official UPI Payment QR Code for ${BANK_DETAILS.accountName}`}
                      width={260}
                      height={260}
                      className="w-48 h-48 sm:w-56 sm:h-56 object-contain rounded-lg block"
                      priority
                      quality={100}
                    />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-green block">
                      Google Pay · PhonePe · Paytm · BHIM
                    </span>
                    <span className="font-sans font-bold text-xs text-ink-navy block mt-0.5">
                      Verified Beneficiary: <strong>{BANK_DETAILS.accountName}</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border-gray text-xs text-steel flex items-center justify-between">
                <span>Helpline / Verification:</span>
                <a href={`tel:${COMPANY.phone}`} className="font-bold text-ink-navy hover:text-sage-green">
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Next Step Banner: Mandatory RPM Risk Profile Onboarding */}
          <div className="bg-emerald-50/90 border border-emerald-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-subtle">
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
          <div className="bg-mist-gray/80 border border-border-gray p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
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
