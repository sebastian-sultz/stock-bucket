import {
  ShieldAlert,
  Layers,
  LayoutGrid,
  Headphones,
  MessageSquareOff,
  FileSpreadsheet,
} from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function WhyChooseUs() {
  const points = [
    {
      title: "Defined Risk on Every Call",
      desc: "We never publish an advisory call without a strict stop-loss. Capital protection is the foundation of every recommendation we produce.",
      icon: ShieldAlert,
      color: "text-alert",
      bg: "bg-red-50",
    },
    {
      title: "Multi-Layer Framework",
      desc: "Every setup undergoes multi-timeframe technical review, volume profile confirmation, and macro-economic overlay — never based on rumors.",
      icon: Layers,
      color: "text-sage-green",
      bg: "bg-emerald-50",
    },
    {
      title: "All 4 Segments, One Roof",
      desc: "Seamless research coverage across Equity Cash, Stock & Index Futures, Greek Options, and MCX Commodities with consistent discipline.",
      icon: LayoutGrid,
      color: "text-ink-navy",
      bg: "bg-slate-100",
    },
    {
      title: "Real-Time Market Support",
      desc: "Our analyst team provides live updates, trailing stop adjustments, and client query resolution throughout active trading hours.",
      icon: Headphones,
      color: "text-sage-green",
      bg: "bg-emerald-50",
    },
    {
      title: "No Telegram, No Ambiguity",
      desc: "We do not operate any Telegram channels or unofficial tip groups. All verified calls are dispatched via direct Telephonic and official WhatsApp channels.",
      icon: MessageSquareOff,
      color: "text-soft-amber",
      bg: "bg-amber-50",
    },
    {
      title: "Transparent Track Records",
      desc: "Historical performance is recorded and published daily on verifiable track sheets so clients can audit research accuracy openly.",
      icon: FileSpreadsheet,
      color: "text-ink-navy",
      bg: "bg-slate-100",
    },
  ];

  return (
    <section className="py-10 sm:py-16 bg-mist-gray/30 border-t border-border-gray">
      <div className="container-custom">
        <SectionHeading
          badge="The Stock Buckets Edge"
          badgeColor="navy"
          title="What Sets Our Research Apart"
          subtitle="Built from the ground up for disciplined traders who value structured risk management over market noise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {points.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white border border-border-gray p-4 sm:p-5 rounded-xl shadow-card h-full flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div>
                    <div
                      className={`w-10 h-10 rounded-lg ${item.bg} ${item.color} flex items-center justify-center mb-3 border border-border-gray/50`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-ink-navy mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-steel leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
