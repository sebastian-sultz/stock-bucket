import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { ARTICLES } from "@/lib/constants";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Market Intelligence & Research Insights",
  description:
    "Analytical articles, technical strategy frameworks, and inter-market research perspectives from the Stock Buckets analyst team.",
};

export default function InsightsPage() {
  return (
    <div>
      {/* Header - Seamless from Top Navbar */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 border-b border-border-gray relative">
        <div className="container-custom max-w-3xl text-center">
          <div className="mb-2.5 sm:mb-3">
            <span className="badge-pill badge-pill-green">Market Perspectives</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-ink-navy tracking-tight leading-snug">
            Market Intelligence & Strategy Notes
          </h1>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-steel leading-relaxed max-w-xl mx-auto">
            In-depth analytical frameworks, stop-loss discipline guides, and macro correlation commentary written by our senior desk analysts.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
            {ARTICLES.map((article) => (
              <article
                key={article.slug}
                className="bg-cloud-white border border-border-gray rounded-xl p-4 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="badge-pill badge-pill-navy text-[10px] font-mono">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-steel font-mono">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-ink-navy group-hover:text-sage-green transition-colors leading-snug">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-steel mt-2 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border-gray/70 flex items-center justify-between text-xs text-steel font-mono">
                  <div className="flex items-center gap-1 text-[11px]">
                    <Calendar className="w-3 h-3 text-sage-green" />
                    <span>{article.date}</span>
                  </div>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="font-bold text-ink-navy group-hover:text-sage-green transition-colors flex items-center gap-1 text-xs"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
