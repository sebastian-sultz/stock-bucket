"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  User,
  Layers,
  Lock,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceBucket: "Equity Research (Cash & Delivery)",
    message: "",
  });

  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 800));
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  return (
    <div>
      {/* Header - Seamless from Top Navbar */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 border-b border-border-gray relative">
        <div className="container-custom max-w-3xl text-center">
          <div className="mb-2.5 sm:mb-3">
            <span className="badge-pill badge-pill-green">Direct Research Access</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-ink-navy tracking-tight leading-snug">
            Connect With Our Research Desk
          </h1>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-steel leading-relaxed max-w-xl mx-auto">
            Have questions about our research buckets, advisory methodology, or subscription onboarding? Our team responds within the active trading day.
          </p>
        </div>
      </section>

      {/* Main Content: Form + Contact Info */}
      <section className="py-8 sm:py-14 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column: Contact Channels & Operating Hours (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-ink-navy mb-1">
                  Official Channels
                </h2>
                <p className="text-xs sm:text-sm text-steel leading-relaxed">
                  We maintain transparent, direct communication. Reach out during active market hours for priority assistance.
                </p>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-3 sm:p-3.5 bg-cloud-white border border-border-gray rounded-xl flex items-start gap-3 shadow-subtle hover:border-emerald-300 transition-colors">
                  <div className="p-2 rounded-lg bg-emerald-50 text-sage-green border border-emerald-200/60">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-steel uppercase block font-semibold tracking-wider">
                      Advisory Desk Hotline
                    </span>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="font-bold text-ink-navy hover:text-sage-green transition-colors text-xs sm:text-sm mt-0.5 block"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 bg-cloud-white border border-border-gray rounded-xl flex items-start gap-3 shadow-subtle hover:border-emerald-300 transition-colors">
                  <div className="p-2 rounded-lg bg-emerald-50 text-sage-green border border-emerald-200/60">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-steel uppercase block font-semibold tracking-wider">
                      Official Support Email
                    </span>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="font-bold text-ink-navy hover:text-sage-green transition-colors text-xs sm:text-sm mt-0.5 block"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 bg-cloud-white border border-border-gray rounded-xl flex items-start gap-3 shadow-subtle">
                  <div className="p-2 rounded-lg bg-emerald-50 text-sage-green border border-emerald-200/60">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-steel uppercase block font-semibold tracking-wider">
                      Operating Address
                    </span>
                    <span className="text-ink-navy font-medium text-[11px] sm:text-xs leading-relaxed block mt-0.5 font-sans">
                      {COMPANY.address}
                    </span>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 bg-cloud-white border border-border-gray rounded-xl flex items-start gap-3 shadow-subtle">
                  <div className="p-2 rounded-lg bg-emerald-50 text-sage-green border border-emerald-200/60">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-steel uppercase block font-semibold tracking-wider">
                      Market Support Windows
                    </span>
                    <span className="text-ink-navy font-medium text-[11px] sm:text-xs block mt-0.5 font-sans">
                      {COMPANY.workingHours}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-mist-gray/80 border border-border-gray rounded-xl text-xs text-steel space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-ink-navy">
                  <ShieldCheck className="w-3.5 h-3.5 text-sage-green" />
                  <span className="text-xs">Fraud Alert Notice</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Stock Buckets Research Company does NOT maintain any Telegram channel or ask for funds into personal accounts.
                </p>
              </div>
            </div>

            {/* Right Column: Lead Capture Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-border-gray rounded-xl p-4 sm:p-6 md:p-7 shadow-card">
                {/* Form Card Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-gray/80">
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-beacon" />
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-sage-green-dark">
                        PRIORITY ADVISORY DESK
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-ink-navy">
                      Request a Consultation
                    </h3>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-sage-green-dark font-bold">
                    <Sparkles className="w-3 h-3 text-sage-green" />
                    <span>Avg Response ~15m</span>
                  </div>
                </div>

                {formState === "success" ? (
                  <div className="p-6 bg-emerald-50 border border-sage-green/30 rounded-xl text-center space-y-3 animate-fade-in">
                    <div className="w-10 h-10 rounded-full bg-sage-green text-white flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-ink-navy">
                      Inquiry Received Successfully
                    </h4>
                    <p className="text-xs sm:text-sm text-steel max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. An analyst from our research team will contact you at <strong>{formData.phone}</strong> during the current trading session.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormState("idle")}
                      className="btn-secondary text-xs py-2 px-4 rounded-lg"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Full Name Field */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[11px] font-semibold text-ink-navy mb-1"
                      >
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-steel/60">
                          <User className="w-3.5 h-3.5" />
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder="e.g. Rahul Sharma"
                          className="w-full pl-9 pr-3 h-10.5 bg-mist-gray/40 focus:bg-white border border-border-gray rounded-lg text-xs sm:text-sm text-ink-navy placeholder:text-steel-light focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-sage-green transition-all"
                        />
                      </div>
                    </div>

                    {/* Mobile & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Mobile Field */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-[11px] font-semibold text-ink-navy mb-1"
                        >
                          Mobile Number <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative flex">
                          <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                            <span className="text-[10px] font-mono font-bold text-steel bg-mist-gray/80 px-1 py-0.5 rounded border border-border-gray">
                              +91
                            </span>
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            required
                            maxLength={10}
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="98765 43210"
                            className="w-full pl-12 pr-3 h-10.5 bg-mist-gray/40 focus:bg-white border border-border-gray rounded-lg text-xs sm:text-sm text-ink-navy placeholder:text-steel-light focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-sage-green transition-all font-mono"
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[11px] font-semibold text-ink-navy mb-1"
                        >
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-steel/60">
                            <Mail className="w-3.5 h-3.5" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="rahul@example.com"
                            className="w-full pl-9 pr-3 h-10.5 bg-mist-gray/40 focus:bg-white border border-border-gray rounded-lg text-xs sm:text-sm text-ink-navy placeholder:text-steel-light focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-sage-green transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Research Bucket Selector */}
                    <div>
                      <label
                        htmlFor="serviceBucket"
                        className="block text-[11px] font-semibold text-ink-navy mb-1"
                      >
                        Research Bucket of Interest
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-steel/60">
                          <Layers className="w-3.5 h-3.5" />
                        </div>
                        <select
                          id="serviceBucket"
                          value={formData.serviceBucket}
                          onChange={(e) =>
                            setFormData({ ...formData, serviceBucket: e.target.value })
                          }
                          className="w-full pl-9 pr-8 h-10.5 bg-mist-gray/40 focus:bg-white border border-border-gray rounded-lg text-xs sm:text-sm text-ink-navy focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-sage-green transition-all appearance-none cursor-pointer"
                        >
                          <option value="Equity Research (Cash & Delivery)">
                            Equity Research Bucket (Quantum & Blue Chip)
                          </option>
                          <option value="Futures Research (Stock & Index F&O)">
                            Futures Research Bucket (Stock & Index F&O)
                          </option>
                          <option value="Options Research (Mantra & Index Strikes)">
                            Options Research Bucket (Option Mantra & Strikes)
                          </option>
                          <option value="Commodity Research (MCX Bullion & Energy)">
                            Commodity Research Bucket (MCX Bullion & Energy)
                          </option>
                          <option value="General Advisory Inquiries">
                            General Subscription Inquiry
                          </option>
                          <option value="Payment / Verification Query">
                            Payment Verification
                          </option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-steel/60">
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    {/* Message / Profile Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[11px] font-semibold text-ink-navy mb-1"
                      >
                        Trading Profile & Capital Objective (Optional)
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          rows={2.5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          placeholder="Share your capital allocation, trading style, or specific segment questions..."
                          className="w-full p-2.5 bg-mist-gray/40 focus:bg-white border border-border-gray rounded-lg text-xs sm:text-sm text-ink-navy placeholder:text-steel-light focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-sage-green transition-all resize-y"
                        />
                      </div>
                    </div>

                    {formState === "error" && (
                      <div className="p-2.5 bg-red-50 border border-alert/30 rounded-lg text-xs text-alert flex items-center gap-2">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>There was an error sending your message. Please try again or call our hotline directly.</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formState === "loading"}
                      className="btn-primary w-full h-11 rounded-lg text-xs sm:text-sm font-semibold justify-center shadow-card hover:shadow-glow-green"
                    >
                      {formState === "loading" ? (
                        <span>Submitting Details...</span>
                      ) : (
                        <>
                          <span>Submit Research Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    {/* Privacy & Encryption Note */}
                    <div className="pt-1 flex items-center justify-center gap-1 text-[10px] font-mono text-steel text-center">
                      <Lock className="w-2.5 h-2.5 text-sage-green" />
                      <span>256-Bit Encrypted · Strictly Confidential · No Spam Guarantee</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <RiskDisclaimer />
          </div>
        </div>
      </section>
    </div>
  );
}
