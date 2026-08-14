import Link from "next/link";
import { Mail, Phone, MapPin, ShieldAlert, ArrowUpRight } from "lucide-react";
import { LogoBucketIcon } from "@/components/svg/BucketIcons";
import { COMPANY } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink-navy text-white pt-16 pb-12 border-t border-border-gray/20">
      <div className="container-custom">
        {/* 4 Column Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-sage-green flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform">
                <LogoBucketIcon className="w-6 h-6 text-sage-green" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl font-display tracking-tight text-white">
                  Stock Buckets
                </span>
                <span className="text-[10px] font-mono font-semibold tracking-wider text-sage-green uppercase">
                  Research Company
                </span>
              </div>
            </Link>

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
                Research calls are delivered strictly via official SMS and registered instant messengers. We operate no Telegram channels.
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
