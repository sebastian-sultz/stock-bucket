export function HeroChartSVG() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto group select-none">
      {/* Floating Micro Badge 1 (Top Left) */}
      <div className="hidden sm:flex absolute -top-3.5 -left-3 z-20 items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md border border-emerald-200 shadow-md animate-float-slow">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-beacon" />
        <span className="text-[11px] font-mono font-bold text-ink-navy">
          NIFTY BREAKOUT: <strong className="text-emerald-600">+18.4%</strong>
        </span>
      </div>

      {/* Floating Micro Badge 2 (Bottom Right) */}
      <div className="hidden sm:flex absolute -bottom-3.5 -right-3 z-20 items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md border border-amber-200 shadow-md animate-float-slow [animation-delay:-3s]">
        <span className="w-2 h-2 rounded-full bg-amber-500" />
        <span className="text-[11px] font-mono font-bold text-ink-navy">
          SL RISK CAPPED: <strong className="text-rose-600">2.0% MAX</strong>
        </span>
      </div>

      {/* Luminous Subtle Backdrop */}
      <div
        className="absolute -inset-2 bg-gradient-to-r from-emerald-400/15 via-teal-400/10 to-amber-400/15 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        aria-hidden="true"
      />

      {/* Light Surface Terminal Frame */}
      <div className="bg-white border border-border-gray rounded-xl p-3.5 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden text-steel-dark">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-border-gray/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-alert/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-soft-amber/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-sage-green/80" />
            <span className="text-[11px] font-mono text-steel ml-2 font-bold tracking-wider">
              STOCK BUCKETS // RESEARCH ENGINE
            </span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-sage-green animate-beacon" />
            <span className="text-[10px] font-mono font-bold text-sage-green-dark uppercase tracking-wider">
              MARKET LIVE
            </span>
          </div>
        </div>

        {/* Vector Interactive Chart Area */}
        <svg
          viewBox="0 0 480 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-full h-auto"
        >
          <defs>
            {/* Terminal Light Subgrid */}
            <pattern id="light-terminal-grid" width="40" height="32" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 32" fill="none" stroke="#E2E8F0" strokeWidth="0.75" />
            </pattern>

            {/* Gradient Fill under Chart Line */}
            <linearGradient id="lightChartAreaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.22" />
              <stop offset="70%" stopColor="#059669" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0" />
            </linearGradient>

            {/* Linear Glow for Trend Line */}
            <linearGradient id="lightChartStrokeGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="70%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Background Grid */}
          <rect width="480" height="230" fill="url(#light-terminal-grid)" />

          {/* Area Fill Under Trend */}
          <path
            d="M 20 210 L 75 185 L 135 170 L 195 135 L 255 150 L 315 105 L 385 80 L 445 40 L 460 40 L 460 230 L 20 230 Z"
            fill="url(#lightChartAreaGradient)"
            style={{ animation: "fadeIn 1s 0.4s ease both" }}
          />

          {/* Resistance Level Line */}
          <line
            x1="20"
            y1="40"
            x2="460"
            y2="40"
            stroke="#D97706"
            strokeWidth="1.25"
            strokeDasharray="4 4"
            opacity="0.85"
          />
          <text x="360" y="32" fill="#B45309" fontSize="9" fontFamily="'IBM Plex Mono', monospace" fontWeight="700">
            BREAKOUT LEVEL: ₹1,270.00
          </text>

          {/* Support Level Line */}
          <line
            x1="20"
            y1="210"
            x2="460"
            y2="210"
            stroke="#64748B"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.4"
          />
          <text x="24" y="222" fill="#64748B" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace" fontWeight="600">
            VOLUME BASE SUPPORT: ₹1,244.60
          </text>

          {/* Trend Line (Animated Drawing) */}
          <path
            d="M 20 210 L 75 185 L 135 170 L 195 135 L 255 150 L 315 105 L 385 80 L 445 40"
            stroke="url(#lightChartStrokeGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray="1200"
            strokeDashoffset="1200"
            style={{
              animation: "drawChartPath 2s 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          />

          {/* Pulsing Nodes */}
          {[
            [20, 210],
            [75, 185],
            [135, 170],
            [195, 135],
            [255, 150],
            [315, 105],
            [385, 80],
            [445, 40],
          ].map(([cx, cy], i) => (
            <g
              key={i}
              style={{
                opacity: 0,
                animation: `fadeIn 0.3s ${0.3 + i * 0.15}s ease forwards`,
              }}
            >
              <circle cx={cx} cy={cy} r="4.5" fill="#FFFFFF" stroke="#059669" strokeWidth="2.5" />
            </g>
          ))}

          {/* Floating Call Badge 1 (Options Target) - Light Surface */}
          <g
            style={{
              animation: "fadeInUp 0.6s 1.6s cubic-bezier(0.16, 1, 0.3, 1) both",
              opacity: 0,
            }}
          >
            <rect
              x="240"
              y="60"
              width="220"
              height="76"
              rx="10"
              fill="#FFFFFF"
              stroke="#059669"
              strokeWidth="1.25"
              filter="drop-shadow(0 6px 14px rgba(11,21,40,0.1))"
            />
            <circle cx="256" cy="78" r="3.5" fill="#059669" />
            <text
              x="266"
              y="81"
              fill="#059669"
              fontSize="9"
              fontFamily="'IBM Plex Mono', monospace"
              fontWeight="700"
              letterSpacing="0.08em"
            >
              OPTIONS · INDEX STRIKE
            </text>
            <text
              x="256"
              y="100"
              fill="#0B1528"
              fontSize="12.5"
              fontFamily="'IBM Plex Mono', monospace"
              fontWeight="700"
            >
              BUY NIFTY 24500 CE
            </text>
            <text
              x="256"
              y="120"
              fill="#475569"
              fontSize="9.5"
              fontFamily="'IBM Plex Mono', monospace"
              fontWeight="600"
            >
              TGT 155 | 175 | 205 · <tspan fill="#E11D48">SL 110</tspan>
            </text>
          </g>

          {/* Floating Call Badge 2 (Cash Breakout) - Light Surface */}
          <g
            style={{
              animation: "fadeInUp 0.6s 2s cubic-bezier(0.16, 1, 0.3, 1) both",
              opacity: 0,
            }}
          >
            <rect
              x="24"
              y="90"
              width="180"
              height="66"
              rx="10"
              fill="#FFFFFF"
              stroke="#D97706"
              strokeWidth="1.25"
              filter="drop-shadow(0 4px 10px rgba(11,21,40,0.08))"
            />
            <text
              x="36"
              y="108"
              fill="#D97706"
              fontSize="8.5"
              fontFamily="'IBM Plex Mono', monospace"
              fontWeight="700"
              letterSpacing="0.06em"
            >
              EQUITY · QUANTUM CASH
            </text>
            <text
              x="36"
              y="126"
              fill="#0B1528"
              fontSize="11.5"
              fontFamily="'IBM Plex Mono', monospace"
              fontWeight="700"
            >
              BUY PREMIERPRI &gt; ₹1,270
            </text>
            <text
              x="36"
              y="142"
              fill="#64748B"
              fontSize="9"
              fontFamily="'IBM Plex Mono', monospace"
            >
              TGT: ₹1,295.4 · <tspan fill="#E11D48">SL: ₹1,244.6</tspan>
            </text>
          </g>

          {/* Time Axis Labels */}
          <text x="25" y="260" fill="#64748B" fontSize="9.5" fontFamily="'IBM Plex Mono', monospace" fontWeight="600">
            09:15 AM
          </text>
          <text x="125" y="260" fill="#64748B" fontSize="9.5" fontFamily="'IBM Plex Mono', monospace" fontWeight="600">
            11:30 AM
          </text>
          <text x="235" y="260" fill="#64748B" fontSize="9.5" fontFamily="'IBM Plex Mono', monospace" fontWeight="600">
            01:45 PM
          </text>
          <text x="340" y="260" fill="#64748B" fontSize="9.5" fontFamily="'IBM Plex Mono', monospace" fontWeight="600">
            03:30 PM
          </text>
          <text x="415" y="260" fill="#059669" fontSize="9.5" fontFamily="'IBM Plex Mono', monospace" fontWeight="700">
            MCX EVE
          </text>
        </svg>

        {/* Bottom Micro Metrics Bar */}
        <div className="mt-3 pt-3.5 border-t border-border-gray/80 grid grid-cols-3 gap-2 text-center font-mono text-xs">
          <div>
            <div className="text-steel-light text-[10px] uppercase tracking-wider font-semibold">Risk / Reward</div>
            <div className="font-bold text-ink-navy mt-0.5">1 : 2.5 Min</div>
          </div>
          <div className="border-x border-border-gray/80">
            <div className="text-steel-light text-[10px] uppercase tracking-wider font-semibold">Stop-Loss</div>
            <div className="font-bold text-alert mt-0.5">Mandatory</div>
          </div>
          <div>
            <div className="text-steel-light text-[10px] uppercase tracking-wider font-semibold">Delivery Mode</div>
            <div className="font-bold text-sage-green mt-0.5">Telephonic & WA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
