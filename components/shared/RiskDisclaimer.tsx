import { AlertTriangle } from "lucide-react";

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
        className={`bg-mist-gray/80 border border-border-gray p-3 rounded-lg text-xs text-steel flex items-start gap-2.5 ${className}`}
      >
        <AlertTriangle className="w-4 h-4 text-soft-amber flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-ink-navy">Market Risk Notice:</strong> All investments in securities and commodity markets carry risk. Past performance does not assure future results. Stock Buckets Research Company does not promise guaranteed returns or profit-sharing.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`bg-mist-gray/90 border border-border-gray p-4 sm:p-5 rounded-xl text-xs sm:text-sm text-steel flex items-start gap-3.5 ${className}`}
    >
      <div className="p-2 rounded-lg bg-soft-amber/10 text-soft-amber flex-shrink-0">
        <AlertTriangle className="w-5 h-5" />
      </div>
      <div className="space-y-1.5 leading-relaxed">
        <h4 className="font-bold text-ink-navy text-xs sm:text-sm tracking-wide uppercase">
          Statutory Risk & Advisory Disclaimer
        </h4>
        <p>
          Investments and trading in equity, futures, options, and commodity markets are subject to high market risks, volatility, and potential capital loss. All research recommendations published by Stock Buckets Research Company are meant for educational, research, and informational purposes only.
        </p>
        <p>
          Our company strictly <strong>does not provide guaranteed returns, profit-sharing, or personalized wealth management accounts</strong>. Fees paid for research advisory subscriptions are solely for the analytical research service rendered and are non-refundable. Please execute trades strictly according to your personal financial risk appetite.
        </p>
      </div>
    </div>
  );
}
