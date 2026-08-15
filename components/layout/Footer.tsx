"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ShieldAlert,
  ArrowUpRight,
  ChevronDown,
  MessageSquare,
} from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { COMPANY } from "@/lib/constants";

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (sec: string) => {
    setOpenSection((prev) => (prev === sec ? null : sec));
  };

  return (
    <footer className="bg-ink-navy text-white border-t border-white/10">
      {/* ========================================================================= */}
      {/* 📱 MOBILE-SPECIFIC FOOTER (Visible on small screens)                       */}
      {/* ========================================================================= */}
      <div className="block md:hidden px-4 py-8 space-y-6">
        {/* Brand Header & Tagline */}
        <div className="space-y-3">
          <Logo variant="dark" size="md" />

          <p className="text-xs text-steel-light leading-relaxed">
            Structured, risk-defined market research across Indian equity, derivatives & commodities.
          </p>

          {/* Quick Action Contact Pills */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={`tel:${COMPANY.phone}`}
              className="p-2 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center gap-1.5 text-xs text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sage-green" />
              <span>Call Desk</span>
            </a>
            <a
              href="https://wa.me/919793444881"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center gap-1.5 text-xs text-white hover:bg-white/10 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-sage-green" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Accordion Navigation Groups */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {/* Group 1: Research Buckets */}
          <div>
            <button
              type="button"
              onClick={() => toggleSection("buckets")}
              className="w-full py-3 flex items-center justify-between text-xs font-bold text-sage-green uppercase font-mono"
            >
              <span>Research Buckets</span>
              <ChevronDown
                className={`w-4 h-4 text-steel-light transition-transform ${
                  openSection === "buckets" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openSection === "buckets" && (
              <div className="pb-3 grid grid-cols-2 gap-2 text-xs text-steel-light">
                <Link href="/services/equity" className="p-1.5 hover:text-white flex items-center gap-1">
                  <span>• Equity (Cash)</span>
                </Link>
                <Link href="/services/futures" className="p-1.5 hover:text-white flex items-center gap-1">
                  <span>• Futures (F&O)</span>
                </Link>
                <Link href="/services/options" className="p-1.5 hover:text-white flex items-center gap-1">
                  <span>• Options (F&O)</span>
                </Link>
                <Link href="/services/commodity" className="p-1.5 hover:text-white flex items-center gap-1">
                  <span>• Commodity (MCX)</span>
                </Link>
              </div>
            )}
          </div>

          {/* Group 2: Quick Links */}
          <div>
            <button
              type="button"
              onClick={() => toggleSection("links")}
              className="w-full py-3 flex items-center justify-between text-xs font-bold text-sage-green uppercase font-mono"
            >
              <span>Navigation & Services</span>
              <ChevronDown
                className={`w-4 h-4 text-steel-light transition-transform ${
                  openSection === "links" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openSection === "links" && (
              <div className="pb-3 grid grid-cols-2 gap-2 text-xs text-steel-light">
                <Link href="/pricing" className="p-1.5 hover:text-white">
                  Pricing Plans
                </Link>
                <Link href="/rpm" className="p-1.5 text-sage-green font-semibold hover:text-white">
                  RPM Onboarding
                </Link>
                <Link href="/payment" className="p-1.5 hover:text-white">
                  Payment QR
                </Link>
                <Link href="/insights" className="p-1.5 hover:text-white">
                  Market Insights
                </Link>
                <Link href="/about" className="p-1.5 hover:text-white">
                  About Us
                </Link>
                <Link href="/contact" className="p-1.5 hover:text-white">
                  Contact Us
                </Link>
              </div>
            )}
          </div>

          {/* Group 3: Legal & Compliance */}
          <div>
            <button
              type="button"
              onClick={() => toggleSection("legal")}
              className="w-full py-3 flex items-center justify-between text-xs font-bold text-sage-green uppercase font-mono"
            >
              <span>Legal & Policies</span>
              <ChevronDown
                className={`w-4 h-4 text-steel-light transition-transform ${
                  openSection === "legal" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openSection === "legal" && (
              <div className="pb-3 grid grid-cols-2 gap-2 text-xs text-steel-light">
                <Link href="/terms" className="p-1.5 hover:text-white">
                  Terms & Conditions
                </Link>
                <Link href="/disclaimer" className="p-1.5 hover:text-white">
                  Risk Disclaimer
                </Link>
                <Link href="/disclosure" className="p-1.5 hover:text-white">
                  Disclosures
                </Link>
                <Link href="/dos-and-donts" className="p-1.5 hover:text-white">
                  Do&apos;s & Don&apos;ts
                </Link>
                <Link href="/grievance" className="p-1.5 hover:text-white">
                  Grievance Desk
                </Link>
                <Link href="/investor-charter" className="p-1.5 hover:text-white">
                  Investor Charter
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Compact Mobile Regulatory Risk Disclaimer */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-[11px] text-steel-light space-y-1.5">
          <div className="flex items-center gap-1.5 text-soft-amber font-bold text-xs">
            <ShieldAlert className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Advisory Notice & Disclaimers</span>
          </div>
          <p className="leading-snug">
            Securities trading is subject to market risks. We operate strictly on pure fixed advisory fees with no guaranteed returns or profit-sharing. Research calls delivered via Telephonic & WhatsApp channels only.
          </p>
        </div>

        {/* Mobile Bottom Row */}
        <div className="pt-2 text-center space-y-1 text-[11px] font-mono text-steel">
          <p>© {new Date().getFullYear()} {COMPANY.name}</p>
          <p className="text-[10px] text-steel-light">Prayagraj, Uttar Pradesh, India</p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🖥️ DESKTOP-SPECIFIC FOOTER (Visible on md+ screens)                        */}
      {/* ========================================================================= */}
      <div className="hidden md:block container-custom pt-16 pb-12">
        {/* 4 Column Main Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="lg" />

            <p className="text-sm text-steel-light leading-relaxed max-w-sm">
              Delivering structured, risk-defined market research across India&apos;s equity, derivatives, and commodity segments. Clarity before every call.
            </p>

            <div className="space-y-2.5 pt-2 text-xs font-mono text-steel-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sage-green flex-shrink-0 mt-0.5" />
                <span>{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sage-green flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sage-green flex-shrink-0" />
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-sage-green uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-steel-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Research Buckets
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing Overview
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Market Insights
                </Link>
              </li>
              <li>
                <Link href="/payment" className="hover:text-white transition-colors">
                  Payment Instructions
                </Link>
              </li>
              <li>
                <Link href="/rpm" className="hover:text-white transition-colors flex items-center gap-1.5 text-sage-green font-semibold">
                  <span>RPM Onboarding</span>
                  <span className="text-[10px] font-mono font-bold bg-white/10 text-white px-1.5 py-0.2 rounded">₹2,500</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Research Buckets (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-sage-green uppercase">
              Research Buckets
            </h4>
            <ul className="space-y-2 text-sm text-steel-light">
              <li>
                <Link
                  href="/services/equity"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Equity (Quantum & Blue Chip)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/futures"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Futures (Stock & Index F&O)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/options"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Options (Mantra & Strikes)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commodity"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Commodity (MCX Bullion & Energy)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-steel-light">
                <span className="font-semibold text-white block mb-1">
                  Verified Delivery Notice
                </span>
                Research calls are delivered strictly via official Telephonic and verified WhatsApp channels.
              </div>
            </div>
          </div>

          {/* Column 4: Legal & Compliance (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-sage-green uppercase">
              Legal & Compliance
            </h4>
            <ul className="space-y-2 text-sm text-steel-light">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Market Risk Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/disclosure" className="hover:text-white transition-colors">
                  Statutory Disclosures
                </Link>
              </li>
              <li>
                <Link href="/dos-and-donts" className="hover:text-white transition-colors">
                  Investor Do&apos;s & Don&apos;ts
                </Link>
              </li>
              <li>
                <Link href="/grievance" className="hover:text-white transition-colors">
                  Grievance Redressal
                </Link>
              </li>
              <li>
                <Link href="/investor-charter" className="hover:text-white transition-colors">
                  Investor Charter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Risk Disclaimer Strip */}
        <div className="py-6 border-b border-white/10 text-xs text-steel-light leading-relaxed space-y-2">
          <div className="flex items-start gap-2 text-soft-amber font-semibold">
            <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>Important Risk & Service Notice:</span>
          </div>
          <p>
            Investments and trading in securities and commodity markets are subject to market risks. Read all related documents and understand your capital risk profile carefully before subscribing. Stock Buckets Research Company operates purely as an independent research publisher and does not guarantee returns, assure minimum profits, or offer profit-sharing services.
          </p>
          <p>
            Advisory fees are non-refundable and charged exclusively for the analytical research service rendered. Clients must execute trades in their individual demat accounts based on personal discretion.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-steel">
          <div>
            © {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Hours: {COMPANY.workingHours}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
