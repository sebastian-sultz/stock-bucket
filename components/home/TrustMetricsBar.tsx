import { StatCounter } from "@/components/shared/StatCounter";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function TrustMetricsBar() {
  const metrics = [
    {
      value: 14,
      suffix: "+",
      label: "Years Advisory Experience",
      subtext: "Navigating diverse bull & bear cycles",
    },
    {
      value: 5000,
      suffix: "+",
      label: "Structured Research Calls",
      subtext: "Every call with defined stop-loss",
    },
    {
      value: 4,
      suffix: " Segments",
      label: "Active Market Desks",
      subtext: "Equity, Futures, Options & MCX",
    },
    {
      value: 98,
      suffix: "%",
      label: "Client Retention Rate",
      subtext: "Transparent, track-sheet backed",
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-white border-y border-border-gray relative z-10 shadow-subtle">
      <div className="container-custom">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {metrics.map((item, idx) => (
              <div
                key={idx}
                className="bg-cloud-white border border-border-gray p-3.5 sm:p-5 rounded-xl flex flex-col justify-between shadow-subtle hover:shadow-card hover:border-border-hover transition-all duration-300 group"
              >
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-ink-navy group-hover:text-sage-green transition-colors tracking-tight">
                    <StatCounter target={item.value} suffix={item.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-steel-dark mt-1">
                    {item.label}
                  </div>
                </div>
                <div className="text-[11px] sm:text-xs text-steel-light mt-1.5 pt-1.5 border-t border-border-gray/60 font-medium">
                  {item.subtext}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
