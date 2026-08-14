interface SectionHeadingProps {
  badge?: string;
  badgeColor?: "green" | "amber" | "navy";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeColor = "green",
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const badgeClasses = {
    green: "badge-pill-green",
    amber: "badge-pill-amber",
    navy: "badge-pill-navy",
  }[badgeColor];

  return (
    <div
      className={`mb-6 sm:mb-10 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl text-left"
      } ${className}`}
    >
      {badge && (
        <div className="mb-2.5">
          <span className={`badge-pill ${badgeClasses}`}>{badge}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink-navy leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 text-xs sm:text-sm lg:text-base text-steel leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
