"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  User,
  Receipt,
  Copy,
  Check,
  Mail,
  Phone,
  Calendar,
  MapPin,
} from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";

interface FormData {
  // Step 1: Personal KYC
  fullName: string;
  fatherName: string;
  dob: string;
  email: string;
  address: string;
  phone: string;
  alternatePhone: string;

  // Step 2: Financial
  occupation: string;
  annualIncome: string;
  emergencyFund: string;
  loanEmi: string;
  familyMembers: string;

  // Step 3: Trading & Risk
  segment: string;
  investmentCapital: string;
  profitExpectation: string;
  overallLossTolerance: string;
  goal: string;

  // Step 4: Terms
  acceptedTerms: boolean;
  acceptedRiskNotice: boolean;
}

const INITIAL_DATA: FormData = {
  fullName: "",
  fatherName: "",
  dob: "",
  email: "",
  address: "",
  phone: "",
  alternatePhone: "",
  occupation: "Salaried Professional",
  annualIncome: "₹5L – ₹10L",
  emergencyFund: "Yes, 3–6 Months Reserve",
  loanEmi: "Debt-Free (No EMI)",
  familyMembers: "1–2 Dependents",
  segment: "Equity Cash Delivery",
  investmentCapital: "₹1L – ₹3 Lakhs",
  profitExpectation: "18% – 30% Balanced Growth",
  overallLossTolerance: "Moderate (5% – 10%)",
  goal: "Positional Growth (2–5 Days)",
  acceptedTerms: false,
  acceptedRiskNotice: false,
};

export default function RPMPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedReceipt, setCopiedReceipt] = useState(false);
  const [refId, setRefId] = useState("SB-RPM-88421");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectOption = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Calculate dynamic risk score (0 to 100)
  const calculateRiskScore = () => {
    let score = 50;
    if (formData.segment.includes("Futures") || formData.segment.includes("Options")) score += 20;
    if (formData.segment.includes("MCX")) score += 15;
    if (formData.overallLossTolerance.includes("10%") || formData.overallLossTolerance.includes("20%")) score += 15;
    if (formData.emergencyFund.includes("No")) score -= 15;
    if (formData.loanEmi.includes("High") || formData.loanEmi.includes("Moderate")) score -= 10;
    return Math.min(Math.max(score, 20), 95);
  };

  const riskScore = calculateRiskScore();
  const riskProfileType =
    riskScore >= 75
      ? "High Conviction Growth"
      : riskScore >= 50
      ? "Balanced Alpha"
      : "Conservative Capital Guard";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptedTerms || !formData.acceptedRiskNotice) {
      alert("Please accept the mandatory terms and risk disclosure to activate your desk registration.");
      return;
    }
    setRefId(`SB-RPM-${Math.floor(100000 + Math.random() * 900000)}`);
    setIsSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `*STOCK BUCKETS — RPM CLIENT ONBOARDING*\n` +
      `--------------------------------------\n` +
      `*Ref No:* ${refId}\n` +
      `*Registration Charge:* ₹2,500 (Desk Setup)\n` +
      `--------------------------------------\n` +
      `*1. Client Name:* ${formData.fullName}\n` +
      `*2. Father's Name:* ${formData.fatherName}\n` +
      `*3. DOB:* ${formData.dob}\n` +
      `*4. Email:* ${formData.email}\n` +
      `*5. Phone:* ${formData.phone}\n` +
      `*6. Alternate Phone:* ${formData.alternatePhone || "N/A"}\n` +
      `*7. Address:* ${formData.address}\n` +
      `--------------------------------------\n` +
      `*8. Occupation:* ${formData.occupation}\n` +
      `*9. Annual Income:* ${formData.annualIncome}\n` +
      `*10. Emergency Fund:* ${formData.emergencyFund}\n` +
      `*11. Loan/EMI:* ${formData.loanEmi}\n` +
      `*12. Family Members:* ${formData.familyMembers}\n` +
      `--------------------------------------\n` +
      `*13. Target Segment:* ${formData.segment}\n` +
      `*14. Capital Allocation:* ${formData.investmentCapital}\n` +
      `*15. Profit Expectation:* ${formData.profitExpectation}\n` +
      `*16. Loss Tolerance:* ${formData.overallLossTolerance}\n` +
      `*17. Goal:* ${formData.goal}\n` +
      `--------------------------------------\n` +
      `*Risk Profile:* ${riskProfileType} (Score: ${riskScore}/100)`
    );
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `STOCK BUCKETS — RPM ONBOARDING RECEIPT\n` +
      `Ref ID: ${refId}\n` +
      `Client: ${formData.fullName}\n` +
      `Registration Fee: ₹2,500\n` +
      `Segment: ${formData.segment}\n` +
      `Risk Profile: ${riskProfileType} (${riskScore}/100)\n` +
      `Timestamp: ${new Date().toLocaleDateString()}`
    );
    setCopiedReceipt(true);
    setTimeout(() => setCopiedReceipt(false), 2000);
  };

  return (
    <div>
      {/* Header - Seamless from Top Navbar */}
      <section className="pt-24 sm:pt-32 pb-6 sm:pb-12 border-b border-border-gray relative">
        <div className="container-custom max-w-3xl text-center">
          <div className="mb-2 sm:mb-3">
            <span className="badge-pill badge-pill-green">Mandatory Client Onboarding</span>
          </div>
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold font-display text-ink-navy tracking-tight leading-snug">
            R.P.M — Risk Profile Management
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm lg:text-base text-steel leading-relaxed max-w-xl mx-auto">
            16-point financial suitability and risk calibration assessment. Required for all subscribers prior to research desk activation.
          </p>
        </div>
      </section>

      {/* Main Form & Onboarding Section */}
      <section className="py-6 sm:py-14 bg-white">
        <div className="container-custom max-w-2xl">
          {/* Registration Charge Alert Banner */}
          <div className="mb-5 p-3.5 sm:p-5 bg-mist-gray/80 border border-border-gray rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-subtle">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sage-green text-white flex items-center justify-center flex-shrink-0">
                <Receipt className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-steel">
                    Mandatory Account Fee
                  </span>
                  <span className="text-[9px] font-mono font-bold text-emerald-800 bg-emerald-100/90 px-1.5 py-0.2 rounded border border-emerald-200">
                    One-Time Charge
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-ink-navy">
                  Registration & Desk Setup Charge: <span className="font-sans font-extrabold text-emerald-800">₹2,500</span>
                </h3>
              </div>
            </div>

            <div className="text-left sm:text-right sm:border-l sm:border-border-gray sm:pl-4">
              <Link
                href="/payment"
                className="text-xs font-bold text-sage-green hover:underline inline-flex items-center gap-1"
              >
                <span>View Payment QR / Bank Details</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {!isSubmitted ? (
            <div className="bg-cloud-white border border-border-gray rounded-2xl shadow-card p-4 sm:p-8">
              {/* Sleek Mobile & Desktop Progress Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-bold text-ink-navy mb-2">
                  <span className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-sage-green text-white text-[11px] flex items-center justify-center font-mono">
                      {step}
                    </span>
                    <span>
                      {step === 1 && "Step 1: Personal & KYC Details"}
                      {step === 2 && "Step 2: Financial Background"}
                      {step === 3 && "Step 3: Risk & Trading Goals"}
                      {step === 4 && "Step 4: Review & Desk Activation"}
                    </span>
                  </span>
                  <span className="text-[11px] font-mono text-steel">
                    {step === 1 ? "25%" : step === 2 ? "50%" : step === 3 ? "75%" : "100%"} Done
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full bg-border-gray/70 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-sage-green h-full rounded-full transition-all duration-300"
                    style={{ width: `${(step / 4) * 100}%` }}
                  />
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* STEP 1: Personal & Identification */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs font-semibold text-ink-navy block mb-1">
                          1. Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-steel-light absolute left-3 top-3" />
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="e.g. Rahul Sharma"
                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-border-gray text-xs focus:ring-1 focus:ring-sage-green focus:outline-none bg-white font-medium"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-ink-navy block mb-1">
                          2. Father&apos;s Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-steel-light absolute left-3 top-3" />
                          <input
                            type="text"
                            name="fatherName"
                            required
                            value={formData.fatherName}
                            onChange={handleChange}
                            placeholder="e.g. Anand Sharma"
                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-border-gray text-xs focus:ring-1 focus:ring-sage-green focus:outline-none bg-white font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-semibold text-ink-navy block mb-1">
                            3. Date of Birth (DOB) *
                          </label>
                          <div className="relative">
                            <Calendar className="w-4 h-4 text-steel-light absolute left-3 top-3" />
                            <input
                              type="date"
                              name="dob"
                              required
                              value={formData.dob}
                              onChange={handleChange}
                              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-border-gray text-xs focus:ring-1 focus:ring-sage-green focus:outline-none bg-white font-medium"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-ink-navy block mb-1">
                            4. Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="w-4 h-4 text-steel-light absolute left-3 top-3" />
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="rahul@example.com"
                              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-border-gray text-xs focus:ring-1 focus:ring-sage-green focus:outline-none bg-white font-medium"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-semibold text-ink-navy block mb-1">
                            Registered Mobile (WhatsApp) *
                          </label>
                          <div className="relative">
                            <Phone className="w-4 h-4 text-steel-light absolute left-3 top-3" />
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
                              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-border-gray text-xs focus:ring-1 focus:ring-sage-green focus:outline-none bg-white font-medium"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-ink-navy block mb-1">
                            14. Alternate Contact Number
                          </label>
                          <div className="relative">
                            <Phone className="w-4 h-4 text-steel-light absolute left-3 top-3" />
                            <input
                              type="tel"
                              name="alternatePhone"
                              value={formData.alternatePhone}
                              onChange={handleChange}
                              placeholder="Secondary or family phone"
                              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-border-gray text-xs focus:ring-1 focus:ring-sage-green focus:outline-none bg-white font-medium"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-ink-navy block mb-1">
                          5. Complete Residential Address *
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 text-steel-light absolute left-3 top-3" />
                          <textarea
                            name="address"
                            required
                            rows={2}
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="House / Flat No, Street, City, State, PIN Code"
                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-border-gray text-xs focus:ring-1 focus:ring-sage-green focus:outline-none bg-white font-medium"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 flex justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          if (!formData.fullName || !formData.email || !formData.phone) {
                            alert("Please fill all required personal fields.");
                            return;
                          }
                          setStep(2);
                        }}
                        className="btn-primary w-full sm:w-auto py-2.5 px-6 text-xs rounded-xl justify-center"
                      >
                        <span>Next: Financial Background</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Financials & Liabilities */}
                {step === 2 && (
                  <div className="space-y-4">
                    {/* Occupation Interactive Pills */}
                    <div>
                      <label className="text-xs font-semibold text-ink-navy block mb-1.5">
                        9. Occupation / Profession *
                      </label>
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          "Salaried Professional",
                          "Business / Self-Employed",
                          "CA / Doctor / Lawyer",
                          "Full-Time Trader",
                          "Retired / Investor",
                        ].map((occ) => {
                          const isSelected = formData.occupation === occ;
                          return (
                            <button
                              key={occ}
                              type="button"
                              onClick={() => handleSelectOption("occupation", occ)}
                              className={`p-2 rounded-lg text-left text-xs font-medium border transition-all ${
                                isSelected
                                  ? "bg-emerald-50 border-sage-green text-emerald-900 font-bold shadow-sm"
                                  : "bg-white border-border-gray text-steel hover:text-ink-navy"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[11px]">{occ}</span>
                                {isSelected && <Check className="w-3 h-3 text-sage-green" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Annual Income Interactive Pills */}
                    <div>
                      <label className="text-xs font-semibold text-ink-navy block mb-1.5">
                        10. Annual Gross Income Bracket *
                      </label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {["< ₹5 Lakhs", "₹5L – ₹10L", "₹10L – ₹25L", "₹25L – ₹50L", "₹50L+ (HNI)"].map(
                          (inc) => {
                            const isSelected = formData.annualIncome === inc;
                            return (
                              <button
                                key={inc}
                                type="button"
                                onClick={() => handleSelectOption("annualIncome", inc)}
                                className={`p-2 rounded-lg text-center text-xs font-medium border transition-all ${
                                  isSelected
                                    ? "bg-emerald-50 border-sage-green text-emerald-900 font-bold shadow-sm"
                                    : "bg-white border-border-gray text-steel hover:text-ink-navy"
                                }`}
                              >
                                <span className="text-[11px]">{inc}</span>
                              </button>
                            );
                          }
                        )}
                      </div>
                    </div>

                    {/* Emergency Fund Options */}
                    <div>
                      <label className="text-xs font-semibold text-ink-navy block mb-1.5">
                        11. Emergency Safety Fund Status *
                      </label>
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          "Yes, 3–6 Months Reserve",
                          "Yes, > 6 Months Reserve",
                          "Partial (1–2 Months)",
                          "No Dedicated Buffer",
                        ].map((ef) => {
                          const isSelected = formData.emergencyFund === ef;
                          return (
                            <button
                              key={ef}
                              type="button"
                              onClick={() => handleSelectOption("emergencyFund", ef)}
                              className={`p-2 rounded-lg text-left text-xs font-medium border transition-all ${
                                isSelected
                                  ? "bg-emerald-50 border-sage-green text-emerald-900 font-bold shadow-sm"
                                  : "bg-white border-border-gray text-steel hover:text-ink-navy"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[11px]">{ef}</span>
                                {isSelected && <Check className="w-3 h-3 text-sage-green" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Loan / EMI Liabilities */}
                    <div>
                      <label className="text-xs font-semibold text-ink-navy block mb-1.5">
                        15. Active Loan / EMI Obligations *
                      </label>
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          "Debt-Free (No EMI)",
                          "Low EMI (< 20% Income)",
                          "Moderate (20–40%)",
                          "Significant (> 40%)",
                        ].map((l) => {
                          const isSelected = formData.loanEmi === l;
                          return (
                            <button
                              key={l}
                              type="button"
                              onClick={() => handleSelectOption("loanEmi", l)}
                              className={`p-2 rounded-lg text-left text-xs font-medium border transition-all ${
                                isSelected
                                  ? "bg-emerald-50 border-sage-green text-emerald-900 font-bold shadow-sm"
                                  : "bg-white border-border-gray text-steel hover:text-ink-navy"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[11px]">{l}</span>
                                {isSelected && <Check className="w-3 h-3 text-sage-green" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Dependents */}
                    <div>
                      <label className="text-xs font-semibold text-ink-navy block mb-1.5">
                        16. Dependent Family Members *
                      </label>
                      <div className="grid grid-cols-4 gap-1.5">
                        {["0 (None)", "1–2 Dependents", "3–4 Dependents", "5+ Dependents"].map((d) => {
                          const isSelected = formData.familyMembers === d;
                          return (
                            <button
                              key={d}
                              type="button"
                              onClick={() => handleSelectOption("familyMembers", d)}
                              className={`p-2 rounded-lg text-center text-xs font-medium border transition-all ${
                                isSelected
                                  ? "bg-emerald-50 border-sage-green text-emerald-900 font-bold shadow-sm"
                                  : "bg-white border-border-gray text-steel hover:text-ink-navy"
                              }`}
                            >
                              <span className="text-[10px] leading-tight block">{d}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-3 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="btn-secondary py-2.5 px-4 text-xs rounded-xl"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="btn-primary py-2.5 px-6 text-xs rounded-xl"
                      >
                        <span>Next: Risk Calibration</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Risk Calibration & Objectives */}
                {step === 3 && (
                  <div className="space-y-4">
                    {/* Selected Segment */}
                    <div>
                      <label className="text-xs font-semibold text-ink-navy block mb-1.5">
                        6. Selected Market Segment *
                      </label>
                      <div className="space-y-1.5">
                        {[
                          { id: "Equity Cash Delivery", label: "📈 Equity Cash (Quantum / Blue Chip / Midcap)" },
                          { id: "Futures Research (F&O)", label: "⚡ Futures Research (Stock / Index / HNI Futures)" },
                          { id: "Options Research (F&O)", label: "🎯 Options Research (Stock Option / Index / HNI)" },
                          { id: "Commodity Research (MCX)", label: "🪙 Commodity Research (MCX Standard / HNI)" },
                          { id: "Wealth Creation Plan", label: "👑 Wealth Creation (Multi-Segment Desk)" },
                        ].map((seg) => {
                          const isSelected = formData.segment === seg.id;
                          return (
                            <button
                              key={seg.id}
                              type="button"
                              onClick={() => handleSelectOption("segment", seg.id)}
                              className={`w-full p-2.5 rounded-xl text-left text-xs font-medium border transition-all ${
                                isSelected
                                  ? "bg-emerald-50 border-sage-green text-emerald-900 font-bold shadow-sm"
                                  : "bg-white border-border-gray text-steel hover:text-ink-navy"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[11px]">{seg.label}</span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-sage-green" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Dedicated Trading Capital */}
                    <div>
                      <label className="text-xs font-semibold text-ink-navy block mb-1.5">
                        7. Dedicated Trading Capital Allocation *
                      </label>
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          "₹50K – ₹1 Lakh",
                          "₹1L – ₹3 Lakhs",
                          "₹3L – ₹10 Lakhs",
                          "₹10L – ₹25 Lakhs",
                          "₹25L+ (HNI Desk)",
                        ].map((cap) => {
                          const isSelected = formData.investmentCapital === cap;
                          return (
                            <button
                              key={cap}
                              type="button"
                              onClick={() => handleSelectOption("investmentCapital", cap)}
                              className={`p-2 rounded-lg text-center text-xs font-medium border transition-all ${
                                isSelected
                                  ? "bg-emerald-50 border-sage-green text-emerald-900 font-bold shadow-sm"
                                  : "bg-white border-border-gray text-steel hover:text-ink-navy"
                              }`}
                            >
                              <span className="text-[11px]">{cap}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Drawdown Tolerance */}
                    <div>
                      <label className="text-xs font-semibold text-ink-navy block mb-1.5">
                        12. Maximum Capital Loss / Drawdown Tolerance *
                      </label>
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          "Strict (< 5% Drawdown)",
                          "Moderate (5% – 10%)",
                          "Derivative (10% – 20%)",
                          "High Risk (> 20%)",
                        ].map((dt) => {
                          const isSelected = formData.overallLossTolerance === dt;
                          return (
                            <button
                              key={dt}
                              type="button"
                              onClick={() => handleSelectOption("overallLossTolerance", dt)}
                              className={`p-2 rounded-lg text-left text-xs font-medium border transition-all ${
                                isSelected
                                  ? "bg-emerald-50 border-sage-green text-emerald-900 font-bold shadow-sm"
                                  : "bg-white border-border-gray text-steel hover:text-ink-navy"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[11px]">{dt}</span>
                                {isSelected && <Check className="w-3 h-3 text-sage-green" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Primary Trading Goal */}
                    <div>
                      <label className="text-xs font-semibold text-ink-navy block mb-1.5">
                        13. Primary Financial Goal *
                      </label>
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          "Positional Growth (2–5 Days)",
                          "Daily Intraday Income",
                          "Portfolio Beta Hedging",
                          "Wealth Creation",
                        ].map((g) => {
                          const isSelected = formData.goal === g;
                          return (
                            <button
                              key={g}
                              type="button"
                              onClick={() => handleSelectOption("goal", g)}
                              className={`p-2 rounded-lg text-left text-xs font-medium border transition-all ${
                                isSelected
                                  ? "bg-emerald-50 border-sage-green text-emerald-900 font-bold shadow-sm"
                                  : "bg-white border-border-gray text-steel hover:text-ink-navy"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[11px]">{g}</span>
                                {isSelected && <Check className="w-3 h-3 text-sage-green" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Dynamic Real-Time Calculated Risk Gauge */}
                    <div className="p-3.5 bg-mist-gray/70 border border-border-gray rounded-xl space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-steel font-bold">Calculated Risk Profile:</span>
                        <span className="font-extrabold text-ink-navy">{riskProfileType}</span>
                      </div>
                      <div className="w-full bg-border-gray h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-sage-green h-full rounded-full transition-all duration-300"
                          style={{ width: `${riskScore}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-steel">
                        <span>Conservative (Cash)</span>
                        <span>Score: {riskScore}/100</span>
                        <span>High-Growth (F&O)</span>
                      </div>
                    </div>

                    <div className="pt-3 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="btn-secondary py-2.5 px-4 text-xs rounded-xl"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(4)}
                        className="btn-primary py-2.5 px-6 text-xs rounded-xl"
                      >
                        <span>Next: Review & Activate</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: Review, Registration Fee & Activation */}
                {step === 4 && (
                  <div className="space-y-4">
                    <div className="border-b border-border-gray pb-2 mb-3">
                      <h3 className="text-base font-bold text-ink-navy flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-sage-green" />
                        <span>Step 4: Review & Desk Activation</span>
                      </h3>
                    </div>

                    {/* Summary Matrix */}
                    <div className="p-3.5 bg-white border border-border-gray rounded-xl space-y-2.5 text-xs">
                      <div className="grid grid-cols-2 gap-2 pb-2.5 border-b border-border-gray/70">
                        <div>
                          <span className="text-steel text-[10px] uppercase block">Client Name</span>
                          <strong className="text-ink-navy font-bold">{formData.fullName || "—"}</strong>
                        </div>
                        <div>
                          <span className="text-steel text-[10px] uppercase block">Mobile</span>
                          <strong className="text-ink-navy font-bold">{formData.phone || "—"}</strong>
                        </div>
                        <div>
                          <span className="text-steel text-[10px] uppercase block">Target Segment</span>
                          <strong className="text-ink-navy font-bold">{formData.segment}</strong>
                        </div>
                        <div>
                          <span className="text-steel text-[10px] uppercase block">Risk Profile</span>
                          <strong className="text-sage-green font-bold">{riskProfileType}</strong>
                        </div>
                      </div>

                      {/* Registration Charge Receipt Item */}
                      <div className="flex items-center justify-between p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-xs">
                        <div>
                          <span className="font-bold text-emerald-900 block">Account Registration & Desk Activation</span>
                          <span className="text-[10px] text-emerald-700">One-time verified desk setup charge</span>
                        </div>
                        <span className="font-sans font-extrabold text-sm text-emerald-900">₹2,500</span>
                      </div>
                    </div>

                    {/* Mandatory Checkboxes */}
                    <div className="space-y-2.5 pt-1">
                      <label className="flex items-start gap-2 text-xs text-ink-navy cursor-pointer">
                        <input
                          type="checkbox"
                          name="acceptedTerms"
                          checked={formData.acceptedTerms}
                          onChange={handleChange}
                          required
                          className="mt-0.5 rounded border-border-gray text-sage-green focus:ring-sage-green"
                        />
                        <span className="leading-tight text-[11px]">
                          I confirm that the 16-point financial and risk details provided above are accurate. I understand research calls are delivered strictly via <strong>Telephonic & WhatsApp</strong> with mandatory stop-losses.
                        </span>
                      </label>

                      <label className="flex items-start gap-2 text-xs text-ink-navy cursor-pointer">
                        <input
                          type="checkbox"
                          name="acceptedRiskNotice"
                          checked={formData.acceptedRiskNotice}
                          onChange={handleChange}
                          required
                          className="mt-0.5 rounded border-border-gray text-sage-green focus:ring-sage-green"
                        />
                        <span className="leading-tight text-[11px]">
                          I acknowledge that Stock Buckets operates pure fixed advisory fees, operates <strong>strictly NO profit-sharing</strong>, and makes <strong>no guaranteed returns</strong>. Fees are non-refundable once activated.
                        </span>
                      </label>
                    </div>

                    <div className="pt-3 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="btn-secondary py-2.5 px-4 text-xs rounded-xl"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>
                      <button
                        type="submit"
                        disabled={!formData.acceptedTerms || !formData.acceptedRiskNotice}
                        className="btn-primary py-3 px-6 text-xs rounded-xl font-bold disabled:opacity-50"
                      >
                        <span>Activate My Desk</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          ) : (
            /* Submission Success Screen */
            <div className="bg-white border border-border-gray rounded-2xl p-5 sm:p-8 shadow-card text-center space-y-4">
              <div className="flex justify-center pb-1">
                <Logo size="sm" />
              </div>

              <div className="w-12 h-12 rounded-full bg-emerald-100 text-sage-green flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div>
                <span className="badge-pill badge-pill-green mb-1.5">Onboarding Completed</span>
                <h2 className="text-xl sm:text-2xl font-bold text-ink-navy">
                  RPM Profile Registered Successfully
                </h2>
                <p className="text-xs text-steel mt-1 max-w-md mx-auto">
                  Your 16-point risk calibration profile has been recorded. Reference ID: <strong className="text-ink-navy font-mono">{refId}</strong>.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-3.5 bg-mist-gray/60 border border-border-gray rounded-xl text-left max-w-md mx-auto space-y-1.5 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-border-gray/70">
                  <span className="text-steel">Subscriber:</span>
                  <strong className="text-ink-navy">{formData.fullName}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-border-gray/70">
                  <span className="text-steel">Registration Fee:</span>
                  <strong className="text-emerald-800">₹2,500 (One-Time)</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-border-gray/70">
                  <span className="text-steel">Target Segment:</span>
                  <strong className="text-ink-navy">{formData.segment}</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-steel">Risk Calibration:</span>
                  <strong className="text-sage-green font-bold">{riskProfileType}</strong>
                </div>
              </div>

              {/* Action Buttons: WhatsApp Dispatch & Copy Receipt */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2 max-w-md mx-auto">
                <a
                  href={`https://wa.me/919793444881?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-2.5 rounded-xl text-xs font-bold justify-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send to Desk on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="btn-secondary w-full py-2.5 rounded-xl text-xs font-bold justify-center"
                >
                  {copiedReceipt ? <Check className="w-4 h-4 text-sage-green" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedReceipt ? "Receipt Copied!" : "Copy RPM Receipt"}</span>
                </button>
              </div>

              <div className="pt-3 border-t border-border-gray flex items-center justify-center gap-3 text-xs text-steel">
                <Link href="/payment" className="hover:text-ink-navy hover:underline">
                  Payment Verification
                </Link>
                <span>·</span>
                <Link href="/pricing" className="hover:text-ink-navy hover:underline">
                  Pricing Plans
                </Link>
                <span>·</span>
                <Link href="/contact" className="hover:text-ink-navy hover:underline">
                  Contact Support
                </Link>
              </div>
            </div>
          )}

          <div className="mt-8 sm:mt-12">
            <RiskDisclaimer />
          </div>
        </div>
      </section>
    </div>
  );
}
