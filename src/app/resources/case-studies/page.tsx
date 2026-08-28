import Link from "next/link";

export const metadata = {
  title: "Case Studies - Krovos",
  description: "See the kinds of outcomes we deliver for clients across AI automation, custom software, digital marketing, managed IT, talent solutions, and logistics tech.",
};

const caseStudies = [
  {
    industry: "Financial Services",
    logo: "FS",
    challenge:
      "A regional financial services firm needed faster turnaround on a manual document review process that was creating backlogs for the operations team.",
    solution:
      "We built an AI-assisted document processing workflow with human-in-the-loop review, integrated with their existing case management system.",
    tags: ["AI & Automation", "Financial Services"],
  },
  {
    industry: "Manufacturing",
    logo: "MF",
    challenge:
      "A small manufacturer had limited visibility across suppliers and was reacting to disruptions after they had already impacted production schedules.",
    solution:
      "We designed and deployed a centralized supply-chain dashboard with alerting on key milestones, plus a simple reporting workflow for the operations manager.",
    tags: ["Analytics", "Manufacturing"],
  },
  {
    industry: "Healthcare",
    logo: "HC",
    challenge:
      "A multi-location healthcare provider was spending significant staff time compiling quarterly reports from multiple source systems.",
    solution:
      "We automated the report assembly process by pulling from the existing data sources into a single consolidated report template.",
    tags: ["Healthcare", "Reporting"],
  },
  {
    industry: "Retail",
    logo: "RT",
    challenge:
      "A growing retailer wanted consistent customer service quality across web chat, email, and social channels without expanding headcount proportionally.",
    solution:
      "We built a unified inbox and response playbook with shared macros, escalation rules, and basic analytics for the support lead.",
    tags: ["Customer Service", "Retail"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1F35] to-[#0A1628]" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#D4A017]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#0E7C7B]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Project <span className="text-[#D4A017]">Highlights</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Selected examples of the kinds of work we deliver across our six
              service areas. Detailed case studies are available on request —
              reach out and we will share the most relevant ones for your
              situation.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-[#0D2040] border border-[#D4A017]/10 rounded-2xl overflow-hidden hover:border-[#D4A017]/30 transition-all"
              >
                <div className="grid lg:grid-cols-3">
                  {/* Company Info */}
                  <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center text-[#0A1628] font-bold text-lg">
                        {study.logo}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {study.industry} client
                        </h3>
                        <p className="text-white/50 text-sm">{study.industry}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {study.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <h4 className="text-white/40 text-sm font-medium mb-2">
                        Challenge
                      </h4>
                      <p className="text-white/70 text-sm">{study.challenge}</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/10 lg:col-span-2">
                    <h4 className="text-[#D4A017] text-sm font-medium mb-4">
                      Approach
                    </h4>
                    <p className="text-white/70">{study.solution}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-[#D4A017] text-sm font-medium mt-6 hover:underline"
                    >
                      Talk Through a Similar Project
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#D4A017] to-[#F0C040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1628]">
            Want to See Detailed Examples?
          </h2>
          <p className="mt-4 text-[#0A1628]/70 text-lg max-w-2xl mx-auto">
            Tell us what you are working on and we will share relevant project
            examples and references from our team in Surrey, BC.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#D4A017] bg-[#0A1628] rounded-lg hover:bg-[#0A1628]/90 transition-colors"
            >
              Get in Touch
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
