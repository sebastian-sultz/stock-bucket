import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";
import { SegmentGraphic } from "@/components/services/SegmentGraphic";

interface ServiceHeroProps {
  badge: string;
  badgeColor?: "green" | "amber" | "navy";
  title: string;
  tagline: string;
  description: string;
  segment?: "equity" | "futures" | "options" | "commodity" | "general";
  highlights?: string[];
}

export function ServiceHero({
  badge,
  badgeColor = "green",
  title,
  tagline,
  description,
  segment = "equity",
  highlights = [
    "Defined Entry & 3 Profit Targets",
    "Mandatory Stop-Loss Protection",
    "Real-Time Market Hours Hotline",
  ],
}: ServiceHeroProps) {
  const badgeClasses = {
    green: "badge-pill-green",
    amber: "badge-pill-amber",
    navy: "badge-pill-navy",
  }[badgeColor];

  return (
    <section className="pt-24 sm:pt-32 pb-8 sm:pb-14 border-b border-border-gray relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div>
              <div className="mb-2.5 sm:mb-3">
                <span className={`badge-pill ${badgeClasses}`}>{badge}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-ink-navy tracking-tight leading-snug">
                {title}
              </h1>

              <p className="text-xs sm:text-sm font-mono font-semibold text-sage-green mt-1 italic">
                &ldquo;{tagline}&rdquo;
              </p>
            </div>

            <p className="text-xs sm:text-sm lg:text-base text-steel leading-relaxed">
              {description}
            </p>

            {/* Key Highlights */}
            <div className="pt-3 border-t border-border-gray/80 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-ink-navy">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage-green flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-1 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-primary text-xs sm:text-sm py-2.5 px-5 rounded-lg">
                <span>Subscribe to This Bucket</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/pricing" className="btn-secondary text-xs sm:text-sm py-2.5 px-5 rounded-lg">
                <span>Compare All Buckets</span>
              </Link>
            </div>

            <div className="pt-1">
              <RiskDisclaimer compact />
            </div>
          </div>

          {/* Right Column: Segment Specific SVG Visual Illustration (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <SegmentGraphic segment={segment} />
          </div>
        </div>
      </div>
    </section>
  );
}
