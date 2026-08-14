import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { BUCKETS } from "@/lib/constants";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  EquityIcon,
  FuturesIcon,
  OptionsIcon,
  CommodityIcon,
} from "@/components/svg/BucketIcons";

export function BucketCards() {
  const getIcon = (id: string) => {
    switch (id) {
      case "equity":
        return <EquityIcon className="w-6 h-6 text-sage-green" />;
      case "futures":
        return <FuturesIcon className="w-6 h-6 text-soft-amber" />;
      case "options":
        return <OptionsIcon className="w-6 h-6 text-ink-navy" />;
      case "commodity":
        return <CommodityIcon className="w-6 h-6 text-soft-amber" />;
      default:
        return <EquityIcon className="w-6 h-6 text-sage-green" />;
    }
  };

  const getBorderAccentClass = (accent: string) => {
    switch (accent) {
      case "amber":
        return "border-t-4 border-t-soft-amber hover:border-soft-amber/80";
      case "navy":
        return "border-t-4 border-t-ink-navy hover:border-ink-navy/80";
      default:
        return "border-t-4 border-t-sage-green hover:border-sage-green/80";
    }
  };

  return (
    <section className="py-10 sm:py-16 bg-mist-gray/30 border-t border-border-gray" id="buckets">
      <div className="container-custom">
        <SectionHeading
          badge="Asset Class Architecture"
          badgeColor="green"
          title="Our Four Core Research Buckets"
          subtitle="Select the segment and risk architecture tailored to your capital profile, execution timeframe, and risk tolerance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {BUCKETS.map((bucket, i) => (
            <ScrollReveal key={bucket.id} delay={i * 100}>
              <div
                className={`bg-white rounded-xl border border-border-gray ${getBorderAccentClass(
                  bucket.accent
                )} p-4 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1`}
              >
                <div>
                  {/* Card Header: Icon + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-cloud-white flex items-center justify-center border border-border-gray group-hover:scale-105 transition-transform shadow-subtle">
                      {getIcon(bucket.id)}
                    </div>
                    <span className="badge-pill badge-pill-navy text-[10px] font-mono">
                      {bucket.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-ink-navy group-hover:text-sage-green transition-colors">
                    {bucket.title}
                  </h3>
                  <p className="text-xs font-mono font-medium text-steel mt-0.5 italic">
                    &ldquo;{bucket.tagline}&rdquo;
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-steel mt-2 leading-relaxed">
                    {bucket.description}
                  </p>

                  {/* Packages Included */}
                  <div className="mt-4 pt-3 border-t border-border-gray/80">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-steel-dark block mb-2">
                      Included Service Packages:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {bucket.packages.map((pkg, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs font-semibold text-steel-dark bg-cloud-white p-1.5 px-2 rounded-md border border-border-gray/60"
                        >
                          <Check className="w-3 h-3 text-sage-green flex-shrink-0" />
                          <span className="truncate">{pkg}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-3 border-t border-border-gray flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-steel font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-sage-green" />
                    <span>Stop-Loss Mandatory</span>
                  </div>

                  <Link
                    href={`/services/${bucket.id}`}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-ink-navy group-hover:text-sage-green transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
