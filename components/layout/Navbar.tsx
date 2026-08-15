"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  PhoneCall,
  TrendingUp,
  LineChart,
  PieChart,
  Flame,
  ArrowRight,
} from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { COMPANY } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const serviceLinks = [
    {
      name: "Equity Research",
      tag: "Cash & Delivery",
      desc: "Intraday momentum & short-term delivery setups",
      href: "/services/equity",
      icon: TrendingUp,
      color: "text-sage-green",
    },
    {
      name: "Futures Research",
      tag: "Index & Stock F&O",
      desc: "High-accuracy trend calls with defined targets",
      href: "/services/futures",
      icon: LineChart,
      color: "text-soft-amber",
    },
    {
      name: "Options Research",
      tag: "Greeks & Strategies",
      desc: "Option Mantra & high-conviction strike calls",
      href: "/services/options",
      icon: PieChart,
      color: "text-ink-navy",
    },
    {
      name: "Commodity Research",
      tag: "MCX Segment",
      desc: "Bullion, Energy & Base Metals global research",
      href: "/services/commodity",
      icon: Flame,
      color: "text-soft-amber",
    },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border-gray py-2 sm:py-2.5"
          : "bg-white/85 backdrop-blur-md border-b border-border-gray/60 py-2.5 sm:py-3.5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <Logo size="md" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          <Link
            href="/"
            className={`text-sm font-semibold transition-colors hover:text-sage-green ${
              pathname === "/" ? "text-sage-green" : "text-steel"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`text-sm font-semibold transition-colors hover:text-sage-green ${
              pathname === "/about" ? "text-sage-green" : "text-steel"
            }`}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-sage-green py-2 ${
                pathname.startsWith("/services") ? "text-sage-green" : "text-steel"
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-sage-green" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu Panel */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-96 bg-white border border-border-gray rounded-2xl shadow-card-hover p-3 animate-fade-in z-50">
                <div className="space-y-1">
                  {serviceLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-mist-gray transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-mist-gray group-hover:bg-white text-ink-navy transition-colors">
                          <Icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm text-ink-navy group-hover:text-sage-green transition-colors">
                              {item.name}
                            </span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-mist-gray text-steel">
                              {item.tag}
                            </span>
                          </div>
                          <p className="text-xs text-steel mt-0.5 line-clamp-1">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-2 pt-2 border-t border-border-gray/70 px-2 flex items-center justify-between">
                  <Link
                    href="/services"
                    className="text-xs font-semibold text-sage-green hover:underline flex items-center gap-1"
                  >
                    View All 4 Research Buckets
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            className={`text-sm font-semibold transition-colors hover:text-sage-green ${
              pathname === "/pricing" ? "text-sage-green" : "text-steel"
            }`}
          >
            Pricing
          </Link>

          <Link
            href="/insights"
            className={`text-sm font-semibold transition-colors hover:text-sage-green ${
              pathname.startsWith("/insights") ? "text-sage-green" : "text-steel"
            }`}
          >
            Insights
          </Link>

          <Link
            href="/payment"
            className={`text-sm font-semibold transition-colors hover:text-sage-green ${
              pathname === "/payment" ? "text-sage-green" : "text-steel"
            }`}
          >
            Payment
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-semibold transition-colors hover:text-sage-green ${
              pathname === "/contact" ? "text-sage-green" : "text-steel"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA / Hotline */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 text-xs font-mono font-semibold text-steel hover:text-ink-navy transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-sage-green" />
            <span>{COMPANY.phone}</span>
          </a>
          <Link
            href="/contact"
            className="btn-primary text-xs py-2.5 px-4 rounded-xl"
          >
            Get Research Call
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-ink-navy hover:bg-mist-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-green"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border-gray px-4 pt-2 pb-5 shadow-lg animate-fade-in max-h-[85vh] overflow-y-auto">
          <div className="space-y-2">
            <Link
              href="/"
              onClick={closeMenus}
              className={`block py-1.5 text-sm font-semibold border-b border-border-gray/50 ${
                pathname === "/" ? "text-sage-green" : "text-ink-navy"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMenus}
              className={`block py-1.5 text-sm font-semibold border-b border-border-gray/50 ${
                pathname === "/about" ? "text-sage-green" : "text-ink-navy"
              }`}
            >
              About
            </Link>

            {/* Mobile Services Accordion */}
            <div className="py-1.5 border-b border-border-gray/50">
              <span className="text-[11px] font-mono font-semibold uppercase text-steel tracking-wider block mb-1.5">
                Research Buckets
              </span>
              <div className="grid grid-cols-1 gap-1 pl-1">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenus}
                    className="flex items-center justify-between py-1 text-xs font-semibold text-ink-navy hover:text-sage-green"
                  >
                    <span>{item.name}</span>
                    <span className="text-[9px] font-mono text-steel bg-mist-gray px-1.5 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/pricing"
              onClick={closeMenus}
              className={`block py-1.5 text-sm font-semibold border-b border-border-gray/50 ${
                pathname === "/pricing" ? "text-sage-green" : "text-ink-navy"
              }`}
            >
              Pricing Overview
            </Link>

            <Link
              href="/insights"
              onClick={closeMenus}
              className={`block py-1.5 text-sm font-semibold border-b border-border-gray/50 ${
                pathname.startsWith("/insights") ? "text-sage-green" : "text-ink-navy"
              }`}
            >
              Market Insights
            </Link>

            <Link
              href="/payment"
              onClick={closeMenus}
              className={`block py-1.5 text-sm font-semibold border-b border-border-gray/50 ${
                pathname === "/payment" ? "text-sage-green" : "text-ink-navy"
              }`}
            >
              Payment Details
            </Link>

            <Link
              href="/contact"
              onClick={closeMenus}
              className={`block py-1.5 text-sm font-semibold border-b border-border-gray/50 ${
                pathname === "/contact" ? "text-sage-green" : "text-ink-navy"
              }`}
            >
              Contact Us
            </Link>

            <div className="pt-3 space-y-2">
              <a
                href={`tel:${COMPANY.phone}`}
                onClick={closeMenus}
                className="flex items-center justify-center gap-2 w-full py-2 text-xs font-mono font-semibold bg-mist-gray rounded-lg text-ink-navy"
              >
                <PhoneCall className="w-3.5 h-3.5 text-sage-green" />
                {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                onClick={closeMenus}
                className="btn-primary w-full py-2.5 rounded-lg text-xs justify-center"
              >
                Get Research Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
