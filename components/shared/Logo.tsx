import Link from "next/link";
import { BrandLogoSVG } from "@/components/svg/BrandLogoSVG";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  href?: string;
}

export function Logo({
  className = "",
  variant = "light",
  size = "md",
  showTagline = true,
  href = "/",
}: LogoProps) {
  const isDark = variant === "dark";

  const sizeStyles = {
    sm: {
      icon: "w-5 h-5 sm:w-5.5 sm:h-5.5",
      container: "w-8 h-8 sm:w-8.5 sm:h-8.5",
      title: "text-base sm:text-lg",
      tagline: "text-[9px] sm:text-[10px]",
    },
    md: {
      icon: "w-6 h-6 sm:w-6.5 sm:h-6.5",
      container: "w-9 h-9 sm:w-9.5 sm:h-9.5",
      title: "text-lg sm:text-xl",
      tagline: "text-[10px] sm:text-[11px]",
    },
    lg: {
      icon: "w-7 h-7 sm:w-8 sm:h-8",
      container: "w-11 h-11 sm:w-12 sm:h-12",
      title: "text-xl sm:text-2xl",
      tagline: "text-xs",
    },
  }[size];

  const content = (
    <div className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* Concept 3: Ascending Growth Pillars Emblem */}
      <div
        className={`rounded-xl border flex items-center justify-center group-hover:scale-105 transition-all duration-200 flex-shrink-0 ${
          sizeStyles.container
        } ${
          isDark
            ? "bg-white/10 border-white/15"
            : "bg-white border-border-gray shadow-subtle"
        }`}
      >
        <BrandLogoSVG className={sizeStyles.icon} variant={variant} />
      </div>

      {/* Typographic Wordmark */}
      <div className="flex flex-col">
        <span
          className={`font-bold font-display tracking-tight leading-none ${sizeStyles.title} ${
            isDark ? "text-white" : "text-ink-navy"
          }`}
        >
          Stock Buckets
        </span>
        {showTagline && (
          <span className="font-mono font-semibold tracking-wider uppercase mt-0.5 text-sage-green text-[10px]">
            Research Company
          </span>
        )}
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link
      href={href}
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-green rounded-xl"
      aria-label="Stock Buckets Research Company Home"
    >
      {content}
    </Link>
  );
}
