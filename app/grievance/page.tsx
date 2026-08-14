import type { Metadata } from "next";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { RiskDisclaimer } from "@/components/shared/RiskDisclaimer";

export const metadata: Metadata = {
  title: "Grievance Redressal Mechanism | Stock Buckets Research",
  description:
    "Formal dispute escalation workflow, grievance timelines, and compliance resolution channels for Stock Buckets Research Company.",
};

export default function GrievancePage() {
  const steps = [
    {
      level: "Level 1: Client Support Desk",
      contact: COMPANY.email,
      phone: COMPANY.phone,
      sla: "Resolution within 24 to 48 business hours",
      desc: "For general billing inquiries, package delivery delays, or basic operational questions, contact our support desk directly.",
    },
    {
      level: "Level 2: Principal Compliance Officer",
      contact: "compliance@stockbuckets.in",
      phone: COMPANY.phone,
      sla: "Formal review within 7 business days",
      desc: "If your grievance is not resolved satisfactorily at Level 1, escalate your formal ticket with payment reference and details.",
    },
    {
      level: "Level 3: Executive Grievance Redressal",
      contact: "grievance@stockbuckets.in",
      phone: COMPANY.phone,
      sla: "Final resolution within a maximum of 21 calendar days",
      desc: "Final internal escalation point for comprehensive review by our senior management committee.",
    },
  ];

  return (
    <div>
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 border-b border-border-gray relative">
        <div className="container-custom max-w-4xl text-center">
          <div className="mb-2.5 sm:mb-3">
            <span className="badge-pill badge-pill-navy">Redressal SLA</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-ink-navy leading-snug">
            Grievance Redressal Mechanism
          </h1>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-steel leading-relaxed max-w-2xl mx-auto">
            We are committed to fair, prompt, and structured resolution of all client grievances and complaints.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="container-custom max-w-4xl space-y-8">
          {/* Overview Note */}
          <div className="bg-mist-gray/70 border border-border-gray p-4 sm:p-6 rounded-xl space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-ink-navy flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sage-green" />
              <span>Our Client Resolution Commitment</span>
            </h2>
            <p className="text-xs sm:text-sm text-steel leading-relaxed">
              At <strong>{COMPANY.name}</strong>, customer trust is our core foundation. We adhere to a structured 3-tier escalation framework ensuring that every written complaint receives an acknowledgment within 24 hours and a conclusive resolution within a maximum turnaround time of <strong>21 calendar days</strong>.
            </p>
          </div>

          {/* 3-Tier Escalation Pathway */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-ink-navy">
              Escalation Matrix & Process Flow
            </h3>

            <div className="space-y-3">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-cloud-white border border-border-gray p-4 sm:p-5 rounded-xl shadow-card hover:border-sage-green/40 transition-colors space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2.5 border-b border-border-gray/70">
                    <span className="font-bold text-sm sm:text-base text-ink-navy">
                      {step.level}
                    </span>
                    <span className="badge-pill badge-pill-green text-[10px] font-mono w-fit">
                      {step.sla}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-steel leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="pt-1.5 flex flex-wrap items-center gap-3 text-xs font-mono text-ink-navy">
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-sage-green" />
                      <a href={`mailto:${step.contact}`} className="hover:underline">
                        {step.contact}
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-sage-green" />
                      <span>{step.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Information to Include When Filing */}
          <div className="bg-white border border-border-gray p-4 sm:p-5 rounded-xl space-y-2">
            <h4 className="font-bold text-ink-navy text-sm sm:text-base">
              Information Required When Raising a Ticket:
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm text-steel list-disc pl-5">
              <li>Full Name & Registered Mobile Number</li>
              <li>Official Invoice Number / Bank Transaction Reference</li>
              <li>Subscribed Research Bucket (e.g. Equity Quantum Cash)</li>
              <li>Clear description of the issue along with supporting screenshots if applicable</li>
            </ul>
          </div>

          <RiskDisclaimer />
        </div>
      </section>
    </div>
  );
}
