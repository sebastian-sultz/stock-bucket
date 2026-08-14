export function ServiceComparison() {
  const comparisonRows = [
    {
      feature: "Target Profit Levels",
      equity: "3 Defined Targets",
      futures: "3 Defined Targets",
      options: "3 Defined Targets",
      commodity: "3 Defined Targets",
    },
    {
      feature: "Mandatory Stop-Loss",
      equity: "Included on Every Call",
      futures: "Included on Every Call",
      options: "Included on Every Call",
      commodity: "Included on Every Call",
    },
    {
      feature: "Exchange Segments",
      equity: "NSE & BSE Cash",
      futures: "NSE & BSE Futures",
      options: "NSE & BSE F&O",
      commodity: "MCX Bullion & Energy",
    },
    {
      feature: "Risk Level",
      equity: "Moderate",
      futures: "Moderate – High",
      options: "Low – High (Strategy based)",
      commodity: "Moderate – High",
    },
    {
      feature: "SMS & Instant Messenger Delivery",
      equity: "Instant Alert",
      futures: "Instant Alert",
      options: "Instant Alert",
      commodity: "Instant Alert",
    },
    {
      feature: "Market Hours Analyst Support",
      equity: "Mon–Fri, 9:00 AM – 3:30 PM",
      futures: "Mon–Fri, 9:00 AM – 3:30 PM",
      options: "Mon–Fri, 9:00 AM – 3:30 PM",
      commodity: "Mon–Fri, 9:00 AM – 11:30 PM",
    },
    {
      feature: "Daily Track Sheet Tracking",
      equity: "Published Daily",
      futures: "Published Daily",
      options: "Published Daily",
      commodity: "Published Daily",
    },
    {
      feature: "Guaranteed Return Claims",
      equity: "Strictly NO",
      futures: "Strictly NO",
      options: "Strictly NO",
      commodity: "Strictly NO",
    },
  ];

  return (
    <div className="bg-white border border-border-gray rounded-2xl overflow-hidden shadow-card">
      <div className="p-6 sm:p-8 border-b border-border-gray bg-cloud-white">
        <h3 className="text-xl sm:text-2xl font-bold text-ink-navy">
          Comprehensive Bucket Feature Comparison
        </h3>
        <p className="text-sm text-steel mt-1">
          Review operational parameters, risk profiles, and support windows across all four research segments.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="bg-mist-gray border-b border-border-gray text-ink-navy font-mono font-bold uppercase text-[11px] tracking-wider">
              <th className="py-4 px-6">Feature / Specification</th>
              <th className="py-4 px-6 text-sage-green">Equity Bucket</th>
              <th className="py-4 px-6 text-soft-amber">Futures Bucket</th>
              <th className="py-4 px-6 text-ink-navy">Options Bucket</th>
              <th className="py-4 px-6 text-soft-amber">Commodity Bucket</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-gray/70 font-medium text-steel">
            {comparisonRows.map((row, i) => (
              <tr key={i} className="hover:bg-mist-gray/40 transition-colors">
                <td className="py-4 px-6 font-bold text-ink-navy">
                  {row.feature}
                </td>
                <td className="py-4 px-6 text-ink-navy">{row.equity}</td>
                <td className="py-4 px-6 text-ink-navy">{row.futures}</td>
                <td className="py-4 px-6 text-ink-navy">{row.options}</td>
                <td className="py-4 px-6 text-ink-navy">{row.commodity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
