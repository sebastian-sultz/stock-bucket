interface SegmentGraphicProps {
  segment: "equity" | "futures" | "options" | "commodity" | "general";
}

export function SegmentGraphic({ segment }: SegmentGraphicProps) {
  if (segment === "equity") {
    return (
      <div className="relative w-full max-w-[460px] mx-auto">
        <div className="bg-white border border-border-gray rounded-xl p-3.5 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-300">
          <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-border-gray/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-beacon" />
              <span className="text-xs font-mono font-bold text-ink-navy tracking-wider">
                EQUITY CASH · ACCUMULATION RADAR
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold text-sage-green-dark bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              NSE CASH
            </span>
          </div>

          <svg viewBox="0 0 380 230" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Grid */}
            <line x1="10" y1="50" x2="370" y2="50" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />
            <line x1="10" y1="110" x2="370" y2="110" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />
            <line x1="10" y1="170" x2="370" y2="170" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />

            {/* Volume histogram bars at bottom */}
            <rect x="30" y="180" width="12" height="30" fill="#059669" opacity="0.4" rx="2" />
            <rect x="55" y="170" width="12" height="40" fill="#059669" opacity="0.5" rx="2" />
            <rect x="80" y="190" width="12" height="20" fill="#E11D48" opacity="0.4" rx="2" />
            <rect x="105" y="160" width="12" height="50" fill="#059669" opacity="0.6" rx="2" />
            <rect x="130" y="175" width="12" height="35" fill="#059669" opacity="0.5" rx="2" />
            <rect x="155" y="145" width="12" height="65" fill="#059669" opacity="0.7" rx="2" />
            <rect x="180" y="185" width="12" height="25" fill="#E11D48" opacity="0.4" rx="2" />
            <rect x="205" y="130" width="12" height="80" fill="#059669" opacity="0.8" rx="2" />
            <rect x="230" y="150" width="12" height="60" fill="#059669" opacity="0.6" rx="2" />
            <rect x="255" y="115" width="12" height="95" fill="#059669" opacity="0.9" rx="2" />
            <rect x="280" y="100" width="12" height="110" fill="#10B981" rx="2" />
            <rect x="305" y="90" width="12" height="120" fill="#10B981" rx="2" />
            <rect x="330" y="75" width="12" height="135" fill="#10B981" rx="2" />

            {/* Price Candlesticks overlay */}
            <g>
              <line x1="61" y1="120" x2="61" y2="160" stroke="#059669" strokeWidth="1.5" />
              <rect x="56" y="130" width="10" height="22" fill="#059669" rx="1.5" />

              <line x1="111" y1="105" x2="111" y2="150" stroke="#059669" strokeWidth="1.5" />
              <rect x="106" y="115" width="10" height="25" fill="#059669" rx="1.5" />

              <line x1="161" y1="95" x2="161" y2="140" stroke="#059669" strokeWidth="1.5" />
              <rect x="156" y="105" width="10" height="26" fill="#059669" rx="1.5" />

              <line x1="211" y1="80" x2="211" y2="130" stroke="#059669" strokeWidth="1.5" />
              <rect x="206" y="90" width="10" height="30" fill="#059669" rx="1.5" />

              <line x1="261" y1="60" x2="261" y2="110" stroke="#059669" strokeWidth="1.5" />
              <rect x="256" y="70" width="10" height="30" fill="#059669" rx="1.5" />

              <line x1="311" y1="35" x2="311" y2="90" stroke="#10B981" strokeWidth="1.5" />
              <rect x="306" y="45" width="10" height="35" fill="#10B981" rx="1.5" />
            </g>

            {/* Breakout Trend Line */}
            <path
              d="M 30 155 Q 120 140 180 110 T 340 40"
              stroke="#059669"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Breakout Tag Pill */}
            <g transform="translate(210, 18)">
              <rect width="135" height="26" rx="6" fill="#ECFDF5" stroke="#059669" strokeWidth="1" />
              <text x="8" y="17" fill="#047857" fontSize="10" fontFamily="'IBM Plex Mono', monospace" fontWeight="700">
                ▲ CASH BREAKOUT
              </text>
            </g>
          </svg>

          <div className="mt-3 pt-3 border-t border-border-gray/80 grid grid-cols-2 gap-2 text-xs font-mono">
            <div>
              <span className="text-steel-light text-[10px] uppercase block">Delivery Horizon</span>
              <span className="font-bold text-ink-navy">Intraday to 5 Days</span>
            </div>
            <div>
              <span className="text-steel-light text-[10px] uppercase block">Volume Profile</span>
              <span className="font-bold text-sage-green">3.8x Accumulation</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (segment === "futures") {
    return (
      <div className="relative w-full max-w-[460px] mx-auto">
        <div className="bg-white border border-border-gray rounded-xl p-3.5 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-300">
          <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-border-gray/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-beacon" />
              <span className="text-xs font-mono font-bold text-ink-navy tracking-wider">
                FUTURES · OPEN INTEREST MONITOR
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              F&O DESK
            </span>
          </div>

          <svg viewBox="0 0 380 230" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Grid */}
            <line x1="10" y1="60" x2="370" y2="60" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />
            <line x1="10" y1="120" x2="370" y2="120" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />
            <line x1="10" y1="180" x2="370" y2="180" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />

            {/* OI Build-up Area Gradient */}
            <path
              d="M 20 180 L 80 150 L 140 160 L 200 110 L 260 90 L 320 50 L 360 40 L 360 180 Z"
              fill="url(#futuresAreaGrad)"
              opacity="0.25"
            />
            <defs>
              <linearGradient id="futuresAreaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>

            {/* Long Build-Up Trend */}
            <path
              d="M 20 180 L 80 150 L 140 160 L 200 110 L 260 90 L 320 50 L 360 40"
              stroke="#D97706"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            {/* Node Points */}
            <circle cx="80" cy="150" r="4.5" fill="#FFFFFF" stroke="#D97706" strokeWidth="2.5" />
            <circle cx="140" cy="160" r="4.5" fill="#FFFFFF" stroke="#D97706" strokeWidth="2.5" />
            <circle cx="200" cy="110" r="4.5" fill="#FFFFFF" stroke="#D97706" strokeWidth="2.5" />
            <circle cx="260" cy="90" r="4.5" fill="#FFFFFF" stroke="#D97706" strokeWidth="2.5" />
            <circle cx="320" cy="50" r="4.5" fill="#FFFFFF" stroke="#D97706" strokeWidth="2.5" />

            {/* Rollover Tag */}
            <g transform="translate(190, 20)">
              <rect width="160" height="26" rx="6" fill="#FFFBEB" stroke="#D97706" strokeWidth="1" />
              <text x="8" y="17" fill="#B45309" fontSize="9.5" fontFamily="'IBM Plex Mono', monospace" fontWeight="700">
                ● LONG BUILD-UP: +14.2% OI
              </text>
            </g>
          </svg>

          <div className="mt-3 pt-3 border-t border-border-gray/80 grid grid-cols-2 gap-2 text-xs font-mono">
            <div>
              <span className="text-steel-light text-[10px] uppercase block">Contract Segment</span>
              <span className="font-bold text-ink-navy">NSE Index & Stock F&O</span>
            </div>
            <div>
              <span className="text-steel-light text-[10px] uppercase block">Risk Ratio</span>
              <span className="font-bold text-soft-amber-dark">1 : 2.5 Strict</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (segment === "options") {
    return (
      <div className="relative w-full max-w-[460px] mx-auto">
        <div className="bg-white border border-border-gray rounded-xl p-3.5 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-300">
          <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-border-gray/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-beacon" />
              <span className="text-xs font-mono font-bold text-ink-navy tracking-wider">
                OPTIONS · GREEK VOLATILITY DESK
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              STRIKE SCAN
            </span>
          </div>

          <svg viewBox="0 0 380 230" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Strike bell curve */}
            <path
              d="M 20 190 Q 190 20 360 190"
              stroke="#059669"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Asymmetric payoff area */}
            <path
              d="M 120 190 Q 190 60 260 190 Z"
              fill="#ECFDF5"
              stroke="#10B981"
              strokeWidth="1.5"
            />

            {/* Key Strike Levels */}
            <line x1="190" y1="40" x2="190" y2="190" stroke="#059669" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="190" cy="60" r="5" fill="#FFFFFF" stroke="#059669" strokeWidth="2.5" />

            <text x="145" y="212" fill="#0B1528" fontSize="10" fontFamily="'IBM Plex Mono', monospace" fontWeight="700">
              ATM STRIKE: 24500
            </text>

            <g transform="translate(195, 30)">
              <rect width="155" height="26" rx="6" fill="#ECFDF5" stroke="#059669" strokeWidth="1" />
              <text x="8" y="17" fill="#047857" fontSize="9.5" fontFamily="'IBM Plex Mono', monospace" fontWeight="700">
                Δ 0.52 · OPTION MANTRA
              </text>
            </g>
          </svg>

          <div className="mt-3 pt-3 border-t border-border-gray/80 grid grid-cols-2 gap-2 text-xs font-mono">
            <div>
              <span className="text-steel-light text-[10px] uppercase block">Strategy Model</span>
              <span className="font-bold text-ink-navy">Directional & Mantra</span>
            </div>
            <div>
              <span className="text-steel-light text-[10px] uppercase block">Theta Decay</span>
              <span className="font-bold text-sage-green">Strictly Managed</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Commodity Default
  return (
    <div className="relative w-full max-w-[460px] mx-auto">
      <div className="bg-white border border-border-gray rounded-xl p-3.5 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-300">
        <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-border-gray/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-beacon" />
            <span className="text-xs font-mono font-bold text-ink-navy tracking-wider">
              MCX COMMODITY · GLOBAL MACRO
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
            MCX DESK
          </span>
        </div>

        <svg viewBox="0 0 380 230" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Gold Trend */}
          <path d="M 20 160 Q 120 130 200 90 T 360 40" stroke="#D97706" strokeWidth="2.5" fill="none" />
          <circle cx="360" cy="40" r="4.5" fill="#FFFFFF" stroke="#D97706" strokeWidth="2.5" />

          {/* Crude Oil Trend */}
          <path d="M 20 190 Q 140 170 220 120 T 360 80" stroke="#059669" strokeWidth="2" strokeDasharray="5 3" fill="none" />

          <text x="24" y="150" fill="#D97706" fontSize="9" fontFamily="'IBM Plex Mono', monospace" fontWeight="700">
            MCX GOLD (1KG)
          </text>
          <text x="24" y="180" fill="#059669" fontSize="9" fontFamily="'IBM Plex Mono', monospace" fontWeight="700">
            CRUDE OIL NYMEX
          </text>

          <g transform="translate(180, 20)">
            <rect width="170" height="26" rx="6" fill="#FFFBEB" stroke="#D97706" strokeWidth="1" />
            <text x="8" y="17" fill="#B45309" fontSize="9.5" fontFamily="'IBM Plex Mono', monospace" fontWeight="700">
              EVE SESSION: TILL 11:30 PM
            </text>
          </g>
        </svg>

        <div className="mt-3 pt-3 border-t border-border-gray/80 grid grid-cols-2 gap-2 text-xs font-mono">
          <div>
            <span className="text-steel-light text-[10px] uppercase block">Exchange Scope</span>
            <span className="font-bold text-ink-navy">MCX Bullion & Energy</span>
          </div>
          <div>
            <span className="text-steel-light text-[10px] uppercase block">Evening Desk</span>
            <span className="font-bold text-soft-amber-dark">Active Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
