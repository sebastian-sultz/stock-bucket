import { ShieldCheck, MessageSquare, AlertCircle, Terminal } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function SampleCallCard() {
  return (
    <section className="py-10 sm:py-16 bg-white border-t border-border-gray relative z-10">
      <div className="container-custom">
        <SectionHeading
          badge="Advisory Format"
          badgeColor="green"
          title="Sample Research Call Structure"
          subtitle="Every recommendation is delivered in a standardized, unambiguous format with defined entry zones, 3 profit targets, and a mandatory system stop-loss."
        />

        <div className="max-w-2xl mx-auto select-none">
          <ScrollReveal>
            <div className="rounded-xl p-4 sm:p-6 bg-white text-steel-dark shadow-card border border-border-gray relative overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-gray/80 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-alert/80" />
                  <span className="w-2 h-2 rounded-full bg-soft-amber/80" />
                  <span className="w-2 h-2 rounded-full bg-sage-green/80" />
                  <span className="text-steel ml-1.5 font-bold tracking-wider flex items-center gap-1 text-[11px]">
                    <Terminal className="w-3 h-3" />
                    <span>STOCK BUCKETS // RESEARCH SPECIFICATION</span>
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sage-green-dark font-bold text-[10px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-sage-green" />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="space-y-3 font-mono">
                <div className="grid grid-cols-2 gap-3 pb-2.5 border-b border-border-gray/80">
                  <div>
                    <span className="text-steel text-[10px] uppercase tracking-wider block font-semibold">
                      Segment / Bucket
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-sage-green">
                      EQUITY · QUANTUM CASH
                    </span>
                  </div>
                  <div>
                    <span className="text-steel text-[10px] uppercase tracking-wider block font-semibold">
                      Stock Symbol
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-ink-navy">
                      NSE: PREMIERPRI
                    </span>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 bg-mist-gray/80 rounded-lg border border-border-gray">
                  <span className="text-steel text-[10px] uppercase tracking-wider block font-semibold">
                    Execution Action
                  </span>
                  <div className="font-bold text-sm sm:text-base text-ink-navy mt-0.5">
                    BUY ABOVE ₹1,270.00
                  </div>
                </div>

                {/* Targets Grid */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 sm:p-2.5 bg-emerald-50/70 rounded-lg border border-emerald-200 text-center">
                    <span className="text-steel text-[9px] block font-semibold">TGT 1</span>
                    <span className="font-bold text-xs sm:text-sm text-sage-green-dark">
                      ₹1,282.70
                    </span>
                  </div>
                  <div className="p-2 sm:p-2.5 bg-emerald-50/70 rounded-lg border border-emerald-200 text-center">
                    <span className="text-steel text-[9px] block font-semibold">TGT 2</span>
                    <span className="font-bold text-xs sm:text-sm text-sage-green-dark">
                      ₹1,295.40
                    </span>
                  </div>
                  <div className="p-2 sm:p-2.5 bg-emerald-50/70 rounded-lg border border-emerald-200 text-center">
                    <span className="text-steel text-[9px] block font-semibold">TGT 3</span>
                    <span className="font-bold text-xs sm:text-sm text-sage-green-dark">
                      ₹1,308.10
                    </span>
                  </div>
                </div>

                {/* Mandatory Stop-Loss */}
                <div className="p-2.5 sm:p-3 bg-rose-50 rounded-lg border border-rose-200 flex items-center justify-between">
                  <div>
                    <span className="text-rose-700 text-[10px] font-bold tracking-wider uppercase block">
                      MANDATORY STOP-LOSS
                    </span>
                    <span className="font-bold text-sm sm:text-base text-ink-navy">
                      ₹1,244.60
                    </span>
                  </div>
                  <span className="text-[11px] text-rose-700 font-bold bg-rose-100 px-2 py-0.5 rounded border border-rose-200">
                    Risk Capped: 2.0%
                  </span>
                </div>

                {/* Metadata Row */}
                <div className="pt-2.5 border-t border-border-gray/80 flex flex-wrap items-center justify-between gap-2 text-xs text-steel font-medium">
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <MessageSquare className="w-3 h-3 text-sage-green" />
                    <span>Dispatched: Telephonic & WhatsApp</span>
                  </div>
                  <div className="text-[11px]">
                    Risk: <strong className="text-ink-navy">Moderate</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Note Below */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-steel text-center font-mono">
              <AlertCircle className="w-3.5 h-3.5 text-soft-amber flex-shrink-0" />
              <span>
                Sample call illustration. Actual research recommendations are dispatched exclusively to verified subscribers.
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
