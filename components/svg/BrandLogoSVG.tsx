export function BrandLogoSVG({
  className = "w-6 h-6",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 4 Ascending Geometric Growth Pillars */}
      {/* Pillar 1: Equity (Foundation / Green) */}
      <rect x="4" y="24" width="6" height="12" rx="2" fill="#1A7F5A" />

      {/* Pillar 2: Futures (Momentum / Emerald) */}
      <rect x="13" y="18" width="6" height="18" rx="2" fill="#10B981" />

      {/* Pillar 3: Options (Alpha / Navy or Sky) */}
      <rect
        x="22"
        y="12"
        width="6"
        height="24"
        rx="2"
        fill={isDark ? "#38BDF8" : "#0D2040"}
      />

      {/* Pillar 4: Commodity (Apex Wealth / Gold) */}
      <rect x="31" y="6" width="6" height="30" rx="2" fill="#D97706" />

      {/* Upward Breakout Trendline & Arrow */}
      <path
        d="M7 21C14 17 21 13 34 3M34 3H26M34 3V11"
        stroke="#F59E0B"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
