"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-16 bg-mist-gray/30 border-t border-border-gray" id="faq">
      <div className="container-custom max-w-4xl">
        <SectionHeading
          badge="Transparency First"
          badgeColor="navy"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our research methodology, delivery channels, and operational policies."
        />

        <div className="space-y-2.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={index} delay={index * 50}>
                <div
                  className={`bg-white border rounded-xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-sage-green/60 shadow-md ring-1 ring-sage-green/20"
                      : "border-border-gray hover:border-steel-light/60 shadow-card"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-4 py-3.5 sm:px-6 sm:py-4 text-left flex items-center justify-between gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-green"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-2.5 font-bold text-xs sm:text-sm text-ink-navy">
                      <HelpCircle
                        className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${
                          isOpen ? "text-sage-green" : "text-steel"
                        }`}
                      />
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-steel flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-sage-green" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 sm:px-6 sm:pb-5 text-xs sm:text-sm text-steel leading-relaxed border-t border-border-gray/50 animate-fade-in">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
