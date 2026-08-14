import Link from "next/link";
import { Check, Smartphone, ArrowRight, Activity } from "lucide-react";

interface PackageCardProps {
  name: string;
  tagline: string;
  segment: string;
  riskLevel: string;
  callsPerDay: string;
  targets: string;
  maxOpenPositions: string;
  delivery: readonly string[];
  features: readonly string[];
  sampleCall: string;
  accentColor?: "green" | "amber" | "navy";
}

export function PackageCard({
  name,
  tagline,
  segment,
  riskLevel,
  callsPerDay,
  targets,
  maxOpenPositions,
  delivery,
  features,
  sampleCall,
  accentColor = "green",
}: PackageCardProps) {
  const borderAccent = {
    green: "border-t-sage-green",
    amber: "border-t-soft-amber",
    navy: "border-t-ink-navy",
  }[accentColor];

  return (
    <div
      className={`bg-white border border-border-gray border-t-4 ${borderAccent} rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between h-full group`}
    >
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="badge-pill badge-pill-navy text-[10px] font-mono">
            {segment}
          </span>
          <span className="text-xs font-mono font-semibold text-steel">
            Risk: <strong className="text-ink-navy">{riskLevel}</strong>
          </span>
        </div>

        {/* Package Title & Subtext */}
        <h3 className="text-2xl font-bold text-ink-navy group-hover:text-sage-green transition-colors">
          {name}
        </h3>
        <p className="text-xs sm:text-sm text-steel mt-1 leading-snug">
          {tagline}
        </p>

        {/* Key Metrics Grid */}
        <div className="mt-5 p-3.5 bg-mist-gray/70 rounded-xl border border-border-gray/70 grid grid-cols-2 gap-3 text-xs font-mono">
          <div>
            <span className="text-steel text-[10px] uppercase block">Frequency</span>
            <span className="font-bold text-ink-navy">{callsPerDay}</span>
          </div>
          <div>
            <span className="text-steel text-[10px] uppercase block">Max Open</span>
            <span className="font-bold text-ink-navy">{maxOpenPositions}</span>
          </div>
          <div className="col-span-2 pt-2 border-t border-border-gray/50">
            <span className="text-steel text-[10px] uppercase block">Structure</span>
            <span className="font-bold text-sage-green">{targets}</span>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-6 space-y-2.5">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-steel block">
            What&apos;s Included:
          </span>
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-navy">
              <Check className="w-4 h-4 text-sage-green flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Sample Call Box - Pure Light Surface */}
        <div className="mt-6 p-3.5 bg-emerald-50/60 text-steel-dark rounded-xl font-mono text-xs border border-emerald-200 space-y-1.5">
          <div className="flex items-center justify-between text-[10px] text-sage-green-dark font-bold uppercase">
            <span>Sample Call Format</span>
            <Activity className="w-3.5 h-3.5 text-sage-green" />
          </div>
          <p className="leading-relaxed text-ink-navy font-semibold">
            {sampleCall}
          </p>
        </div>
      </div>

      {/* Footer & CTA */}
      <div className="mt-8 pt-4 border-t border-border-gray/80 space-y-3">
        <div className="flex items-center justify-between text-xs text-steel font-mono">
          <div className="flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-sage-green" />
            <span>{delivery.join(" + ")}</span>
          </div>
          <span className="text-alert font-bold">SL Included</span>
        </div>

        <Link
          href={`/contact?service=${encodeURIComponent(name)}`}
          className="btn-primary w-full py-3 rounded-xl text-sm font-semibold justify-center"
        >
          <span>Subscribe to {name}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
