import Link from "next/link";
import { Check, PhoneCall, MessageSquare, ArrowRight } from "lucide-react";

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
  formattedPrice?: string;
  tenure?: string;
  tenureShort?: string;
  tier?: string;
  monthlyEquivalent?: string;
}

export function PackageCard({
  name,
  tagline,
  riskLevel,
  features,
  accentColor = "green",
  formattedPrice,
  tenure,
  tenureShort,
  tier,
  monthlyEquivalent,
}: PackageCardProps) {
  const borderAccent = {
    green: "border-t-sage-green",
    amber: "border-t-soft-amber",
    navy: "border-t-ink-navy",
  }[accentColor];

  // Derive a clean, short duration for the main price row (e.g. "1 Month", "3 Months", "6 Months")
  const durationClean = tenureShort
    ? tenureShort.replace("/", "")
    : tenure?.includes("6 Months")
    ? "6 Months"
    : tenure?.includes("3 Months")
    ? "3 Months"
    : "month";

  return (
    <div
      className={`bg-white border border-border-gray border-t-4 ${borderAccent} rounded-2xl p-4 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between h-full group`}
    >
      <div>
        {/* Card Header: Tier Badge + Risk Level */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md uppercase tracking-wide">
            {tier || "Advisory Plan"}
          </span>
          <span className="text-xs text-steel">
            Risk: <strong className="text-ink-navy font-semibold">{riskLevel}</strong>
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-ink-navy group-hover:text-sage-green transition-colors">
          {name}
        </h3>
        <p className="text-xs text-steel mt-0.5 leading-relaxed line-clamp-2">
          {tagline}
        </p>

        {/* Crisp Modern Price Box */}
        {formattedPrice && (
          <div className="mt-3.5 p-3.5 bg-mist-gray/60 border border-border-gray/70 rounded-xl">
            {/* Primary Price Row (Single Line Guaranteed) */}
            <div className="flex items-baseline gap-1.5 whitespace-nowrap">
              <span className="text-3xl font-extrabold text-ink-navy font-sans tracking-tight">
                {formattedPrice}
              </span>
              <span className="text-xs font-semibold text-steel">
                {durationClean === "month"
                  ? "/ month"
                  : durationClean.includes("3")
                  ? "/ 3 months"
                  : "/ 6 months"}
              </span>
            </div>

            {/* Sub-row: Plan Cycle & Effective Rate */}
            <div className="mt-2 pt-2 border-t border-border-gray/60 flex items-center justify-between text-[11px]">
              <span className="text-steel font-medium">
                {tenure?.includes("6 Months")
                  ? "6-Month Plan"
                  : tenure?.includes("3 Months")
                  ? "Quarterly Plan"
                  : "Monthly Plan"}
              </span>

              {monthlyEquivalent ? (
                <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded border border-emerald-200 whitespace-nowrap">
                  Effective: {monthlyEquivalent}
                </span>
              ) : (
                <span className="text-steel font-mono text-[10px]">
                  Fixed Advisory Fee
                </span>
              )}
            </div>
          </div>
        )}

        {/* Key Features (Compact 3 Bullets) */}
        <div className="mt-3.5 space-y-2">
          {features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-ink-navy">
              <Check className="w-3.5 h-3.5 text-sage-green flex-shrink-0 mt-0.5" />
              <span className="leading-snug">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer & CTA */}
      <div className="mt-4 pt-3 border-t border-border-gray/80 space-y-2.5">
        {/* Delivery & SL Notice */}
        <div className="flex items-center justify-between text-xs text-steel bg-cloud-white p-2 rounded-lg border border-border-gray/70">
          <div className="flex items-center gap-1.5 text-ink-navy font-medium text-xs">
            <PhoneCall className="w-3.5 h-3.5 text-sage-green flex-shrink-0" />
            <MessageSquare className="w-3.5 h-3.5 text-sage-green flex-shrink-0" />
            <span>Telephonic & WhatsApp</span>
          </div>
          <span className="text-rose-600 font-bold text-[10px] whitespace-nowrap bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
            Strict SL
          </span>
        </div>

        {/* Action Button */}
        <Link
          href={`/contact?service=${encodeURIComponent(
            formattedPrice ? `${name} (${formattedPrice})` : name
          )}`}
          className="btn-primary w-full py-2.5 rounded-xl text-xs font-semibold justify-center shadow-sm"
        >
          <span>Subscribe to {name}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
