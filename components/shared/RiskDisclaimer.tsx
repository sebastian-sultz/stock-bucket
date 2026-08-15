import { AlertTriangle, ShieldAlert } from "lucide-react";

export function RiskDisclaimer({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div
        className={`bg-amber-50/50 border border-amber-200/70 p-3 rounded-xl text-xs text-steel flex items-start gap-2.5 ${className}`}
      >
        <AlertTriangle className="w-4 h-4 text-soft-amber flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed text-[11px] sm:text-xs">
          <strong className="text-ink-navy">Market Risk Notice:</strong> Securities and derivatives trading carries substantial capital risk. Stock Buckets Research Company operates strictly on a pure fixed fee model with no guaranteed returns or profit-sharing.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`bg-amber-50/40 border border-amber-200/60 rounded-2xl p-4 sm:p-5 text-xs text-steel ${className}`}
    >
      {/* Header Bar */}
      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-amber-200/50">
        <div className="w-6 h-6 rounded-lg bg-soft-amber/15 text-soft-amber flex items-center justify-center flex-shrink-0">
          <ShieldAlert className="w-3.5 h-3.5" />
        </div>
        <h4 className="font-bold text-ink-navy text-xs tracking-wider uppercase font-mono">
          Statutory Risk & Advisory Disclaimer
        </h4>
      </div>

      {/* Structured Copy with Clean Rhythm */}
      <div className="space-y-2 leading-relaxed text-[11px] sm:text-xs">
        <p>
          Investments in equity, futures, options, and commodity markets are subject to high volatility and risk of capital loss. All research recommendations published by <strong>Stock Buckets Research Company</strong> are formulated for analytical, educational, and research advisory purposes only.
        </p>
        <p>
          We operate strictly under a <strong>pure fixed-fee subscription model</strong>. We never promise guaranteed returns, demand profit-sharing, or operate personal trading accounts. All subscriptions are non-refundable once activated. Please execute trades strictly within your personal risk tolerance with mandatory stop-losses.
        </p>
      </div>
    </div>
  );
}
