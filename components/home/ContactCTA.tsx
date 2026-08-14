import Link from "next/link";
import { PhoneCall, ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ContactCTA() {
  return (
    <section className="py-10 sm:py-16 bg-cloud-white border-t border-border-gray relative overflow-hidden">
      {/* Decorative ambient light gradients */}
      <div
        className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -left-20 -bottom-20 w-96 h-96 bg-amber-400/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 bg-white p-5 sm:p-8 lg:p-10 rounded-xl border border-border-gray shadow-card">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[10px] sm:text-xs font-mono text-sage-green-dark font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-sage-green" />
              <span>DIRECT DESK ACCESS // ACTIVE MARKET HOURS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-ink-navy leading-tight">
              Have a Market Question? <br className="hidden sm:inline" />
              Our Research Team Is Available.
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-steel max-w-2xl mx-auto leading-relaxed">
              Connect with our senior research analysts during active trading hours for portfolio segment guidance, risk-allocation reviews, or advisory package onboarding.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="btn-primary text-xs sm:text-sm py-2.5 px-6 rounded-lg w-full sm:w-auto justify-center"
              >
                <span>Contact Our Research Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={`tel:${COMPANY.phone}`}
                className="btn-secondary text-xs sm:text-sm py-2.5 px-6 rounded-lg w-full sm:w-auto flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-sage-green" />
                <span>Call {COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
