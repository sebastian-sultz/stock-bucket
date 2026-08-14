import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { ARTICLES } from "@/lib/constants";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function InsightsPreview() {
  return (
    <section className="py-10 sm:py-16 bg-white border-t border-border-gray">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-4">
          <SectionHeading
            badge="Market Intelligence"
            badgeColor="green"
            title="Research Perspectives & Insights"
            subtitle="Analytical commentary and trading frameworks from our senior research desk."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <Link
            href="/insights"
            className="btn-secondary text-xs sm:text-sm py-2 px-4 rounded-lg w-fit"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
          {ARTICLES.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 100}>
              <article className="bg-white border border-border-gray rounded-xl p-4 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
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

                  <h3 className="text-base font-bold text-ink-navy group-hover:text-sage-green transition-colors line-clamp-2 leading-snug">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-steel mt-2 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border-gray/70 flex items-center justify-between text-xs text-steel">
                  <div className="flex items-center gap-1.5 font-mono text-[11px]">
                    <Calendar className="w-3 h-3 text-sage-green" />
                    <span>{article.date}</span>
                  </div>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="font-bold text-ink-navy group-hover:text-sage-green transition-colors flex items-center gap-1 text-xs"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
