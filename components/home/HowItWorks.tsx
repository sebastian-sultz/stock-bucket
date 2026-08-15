import { CheckSquare, Smartphone, Compass, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Subscribe to Your Bucket",
      desc: "Select the specific segment and risk package that mirrors your capital allocation, trading style, and market focus.",
      icon: CheckSquare,
    },
    {
      num: "02",
      title: "Receive Structured Calls",
      desc: "Instant delivery via direct Telephonic and official WhatsApp channels with clear entry zone, 3 targets, and a mandatory stop-loss.",
      icon: Smartphone,
    },
    {
      num: "03",
      title: "Trade With Complete Context",
      desc: "Receive real-time market hour follow-ups, trailing profit advisories, and direct support during active trading hours.",
      icon: Compass,
    },
  ];

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="Seamless Process"
          badgeColor="green"
          title="How Our Research Reaches You"
          subtitle="From analytical formulation to real-time execution in three structured, transparent steps."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 150}>
                <div className="bg-cloud-white border border-border-gray p-4 sm:p-6 rounded-xl h-full flex flex-col justify-between relative group hover:border-sage-green/40 transition-colors shadow-card">
                  <div>
                    {/* Step Number + Icon Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-ink-navy text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm group-hover:bg-sage-green transition-colors">
                        {step.num}
                      </div>
                      <div className="p-2 rounded-lg bg-mist-gray text-steel group-hover:text-sage-green transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-ink-navy mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-steel leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 text-border-gray">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
