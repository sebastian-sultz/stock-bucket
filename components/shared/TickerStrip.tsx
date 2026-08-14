import { TICKER_ITEMS } from "@/lib/constants";

export function TickerStrip({ className = "" }: { className?: string }) {
  // Duplicate array 3 times for a continuous, seamless loop
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className={`ticker-mask py-3 overflow-hidden select-none ${className}`}
      aria-label="Live Market Segments Covered"
    >
      <div className="inline-flex gap-8 animate-ticker items-center">
        {items.map((item, i) => (
          <div key={i} className="inline-flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            <span className="text-xs font-mono font-bold tracking-wider text-ink-navy">
              {item}
            </span>
            <span className="text-[10px] font-mono font-semibold text-sage-green bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
              ACTIVE
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
