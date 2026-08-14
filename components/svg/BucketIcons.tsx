export function LogoBucketIcon({ className = "w-6 h-6 text-sage-green" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Top Bucket Layer */}
      <ellipse cx="16" cy="8" rx="10" ry="3.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
      {/* Middle Bucket Layer */}
      <path d="M6 10 C6 14 26 14 26 10" stroke="currentColor" strokeWidth="2" />
      <path d="M6 16 C6 20 26 20 26 16" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      {/* Bottom Bucket Layer */}
      <path d="M8 22 C8 26 24 26 24 22" stroke="currentColor" strokeWidth="2.5" />
      <path d="M10 24 L13 28 H19 L22 24" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function EquityIcon({ className = "w-6 h-6 text-sage-green" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Candlestick bars */}
      <path d="M9 3v4m0 8v6M9 7h4v8H9z" fill="currentColor" fillOpacity="0.2" />
      <path d="M17 1v3m0 8v11M15 4h4v8h-4z" fill="currentColor" fillOpacity="0.2" />
      <path d="M3 8v3m0 6v4M1 11h4v6H1z" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

export function FuturesIcon({ className = "w-6 h-6 text-soft-amber" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m22 7-8.5 8.5-5-5L2 17" />
      <path d="M16 7h6v6" />
      <circle cx="6" cy="6" r="2" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="2" strokeWidth="1.5" />
    </svg>
  );
}

export function OptionsIcon({ className = "w-6 h-6 text-ink-navy" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Greek Theta / Probability Bell Curve */}
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M7 12h10" strokeWidth="2" />
      <path d="M12 7c-2 0-3 2-3 5s1 5 3 5 3-2 3-5-1-5-3-5z" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

export function CommodityIcon({ className = "w-6 h-6 text-soft-amber" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Gold Ingot / Barrel / Energy */}
      <path d="M4 10l3-6h10l3 6H4z" fill="currentColor" fillOpacity="0.15" />
      <path d="M3 10h18l-2 10H5L3 10z" />
      <path d="M8 15h8" strokeDasharray="2 2" />
    </svg>
  );
}
