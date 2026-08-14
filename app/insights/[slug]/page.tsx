import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { ARTICLES } from "@/lib/constants";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";
import { ContactCTA } from "@/components/home/ContactCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Market Insights`,
    description: article.excerpt,
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div>
      {/* Header / Meta - Seamless from Top Navbar */}
      <article className="pt-24 sm:pt-32 pb-8 sm:pb-12 bg-cloud-white border-b border-border-gray">
        <div className="container-custom max-w-3xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-steel hover:text-ink-navy transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Insights</span>
          </Link>

          <div className="flex items-center gap-2.5 mb-3">
            <span className="badge-pill badge-pill-green text-[10px] font-mono">
              {article.category}
            </span>
            <div className="flex items-center gap-1 text-[11px] text-steel font-mono">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-steel font-mono">
              <Calendar className="w-3 h-3 text-sage-green" />
              <span>{article.date}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-ink-navy leading-snug">
            {article.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-steel leading-relaxed italic">
            &ldquo;{article.excerpt}&rdquo;
          </p>
        </div>
      </article>

      {/* Main Content Body */}
      <div className="py-16 bg-white">
        <div className="container-custom max-w-3xl space-y-8">
          <div className="prose text-ink-navy text-sm sm:text-base leading-relaxed space-y-5 font-normal">
            <p>
              In capital markets trading, understanding risk asymmetry is what differentiates professional practitioners from emotional market participants. A series of profitable trades can be easily dismantled when risk rules are breached or stop-loss discipline is discarded.
            </p>

            <h3 className="text-xl font-bold text-ink-navy pt-2">
              1. The Asymmetry of Capital Drawdown
            </h3>
            <p>
              When a trader incurs a 10% drawdown on allocated capital, an 11.1% gain is required to restore breakeven. However, allowing a position to deteriorate into a 50% loss demands a 100% gain purely to reach starting principal. This mathematical reality is why Stock Buckets incorporates mandatory stop-loss parameters on every single research recommendation.
            </p>

            <h3 className="text-xl font-bold text-ink-navy pt-2">
              2. Formulating System Stop-Losses
            </h3>
            <p>
              Our research team derives stop-loss thresholds from Average True Range (ATR) volatility bands, key structural support/resistance invalidations, and Volume-Weighted Average Price (VWAP) zones. Rather than relying on arbitrary round percentage figures, every risk level reflects actual market order flow dynamics.
            </p>

            <div className="bg-mist-gray p-5 rounded-xl border border-border-gray space-y-2">
              <h4 className="font-bold text-sm text-ink-navy">
                Key Execution Rules for Subscribers:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-steel list-disc pl-4">
                <li>Execute strictly within the recommended entry zone.</li>
                <li>Place your system stop-loss the moment your broker order fills.</li>
                <li>Lock in partial profits at Target 1 and trail your stop-loss to cost.</li>
                <li>Never widen or extend a stop-loss when the market tests your level.</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border-gray">
            <RiskDisclaimer />
          </div>
        </div>
      </div>

      <ContactCTA />
    </div>
  );
}
