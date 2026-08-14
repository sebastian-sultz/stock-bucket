export function AmbientBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#FAFCFF]"
      aria-hidden="true"
    >
      {/* 1. Luminous Dual-Aurora Color Beams */}
      <div className="absolute -top-[15%] left-[10%] w-[700px] h-[550px] bg-gradient-to-br from-emerald-400/20 via-teal-400/10 to-transparent rounded-full blur-3xl animate-aurora pointer-events-none" />
      <div className="absolute -top-[10%] right-[5%] w-[650px] h-[600px] bg-gradient-to-bl from-amber-400/15 via-orange-400/8 to-transparent rounded-full blur-3xl animate-aurora pointer-events-none [animation-delay:-6s]" />
      <div className="absolute top-[40%] -left-[10%] w-[600px] h-[550px] bg-gradient-to-tr from-sky-400/15 via-indigo-400/8 to-transparent rounded-full blur-3xl animate-aurora pointer-events-none [animation-delay:-12s]" />

      {/* 2. Precision Financial Coordinate Grid with Focused Radial Mask */}
      <div
        className="absolute inset-0 opacity-[0.65]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226, 232, 240, 0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 85% 70% at 50% 30%, #000 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 70% at 50% 30%, #000 40%, transparent 90%)",
        }}
      />

      {/* 3. Geometric Financial Radar & Compass Reticles */}
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Radar Center Ring (Hero Left Offset) */}
        <circle cx="280" cy="380" r="180" stroke="#059669" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="280" cy="380" r="320" stroke="#0B1528" strokeWidth="1" strokeDasharray="6 8" />
        <circle cx="280" cy="380" r="460" stroke="#D97706" strokeWidth="0.75" strokeDasharray="3 6" />
        
        {/* Crosshair Axes */}
        <line x1="0" y1="380" x2="800" y2="380" stroke="#059669" strokeWidth="0.75" strokeDasharray="4 4" />
        <line x1="280" y1="0" x2="280" y2="800" stroke="#059669" strokeWidth="0.75" strokeDasharray="4 4" />

        {/* Diagonal Ray Lines */}
        <line x1="100" y1="200" x2="460" y2="560" stroke="#0B1528" strokeWidth="0.5" strokeDasharray="3 5" />
        <line x1="460" y1="200" x2="100" y2="560" stroke="#0B1528" strokeWidth="0.5" strokeDasharray="3 5" />

        {/* Micro Candlestick Clusters in Background */}
        <g opacity="0.6">
          {/* Cluster 1 */}
          <line x1="120" y1="140" x2="120" y2="220" stroke="#059669" strokeWidth="1" />
          <rect x="115" y="160" width="10" height="40" fill="#059669" rx="1" />

          <line x1="145" y1="120" x2="145" y2="200" stroke="#059669" strokeWidth="1" />
          <rect x="140" y="130" width="10" height="50" fill="#059669" rx="1" />

          <line x1="170" y1="150" x2="170" y2="230" stroke="#E11D48" strokeWidth="1" />
          <rect x="165" y="165" width="10" height="35" fill="#E11D48" rx="1" />
          
          {/* Cluster 2 (Right Side) */}
          <line x1="1280" y1="220" x2="1280" y2="300" stroke="#059669" strokeWidth="1" />
          <rect x="1275" y="240" width="10" height="40" fill="#059669" rx="1" />

          <line x1="1305" y1="200" x2="1305" y2="280" stroke="#059669" strokeWidth="1" />
          <rect x="1300" y="210" width="10" height="50" fill="#059669" rx="1" />
        </g>

        {/* Flowing Volatility Waveforms */}
        <path
          d="M -100 240 C 260 140, 560 360, 880 200 C 1180 50, 1380 280, 1540 200"
          stroke="#059669"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <path
          d="M -100 320 C 300 220, 600 440, 920 260 C 1220 80, 1420 340, 1540 260"
          stroke="#10B981"
          strokeWidth="2"
        />
        <path
          d="M -100 400 C 320 280, 640 520, 980 320 C 1260 120, 1440 400, 1540 320"
          stroke="#F59E0B"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
      </svg>

      {/* 4. Fine Corner Accent Markers */}
      <div className="absolute top-24 left-8 text-[10px] font-mono text-emerald-800/40 tracking-widest hidden md:block">
        + SYS_GRID: 01.44 // VOLATILITY_SCANNER
      </div>
      <div className="absolute top-24 right-8 text-[10px] font-mono text-slate-500/40 tracking-widest hidden md:block">
        COORD: 25.4358° N, 81.8463° E
      </div>
    </div>
  );
}
