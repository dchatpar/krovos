import Link from "next/link";

export const metadata = {
  title: "Case Studies - Krovos",
  description: "Discover how leading companies transform their operations with Krovos AI automation solutions.",
};

const caseStudies = [
  {
    company: "Fortune 500 Bank",
    industry: "Financial Services",
    logo: "F5B",
    challenge: "Manual loan approval process taking 5+ days with high error rates",
    solution: "AI-powered document processing and decision automation",
    results: [
      { metric: "75%", label: "Faster Processing" },
      { metric: "95%", label: "Accuracy Rate" },
      { metric: "$8M", label: "Annual Savings" },
    ],
    tags: ["AI & Automation", "Financial Services"],
  },
  {
    company: "Global Manufacturer",
    industry: "Manufacturing",
    logo: "GM",
    challenge: "Complex supply chain with limited visibility and slow response times",
    solution: "Real-time supply chain monitoring and predictive analytics",
    results: [
      { metric: "40%", label: "Faster Delivery" },
      { metric: "60%", label: "Less Downtime" },
      { metric: "$12M", label: "Cost Savings" },
    ],
    tags: ["Analytics", "Manufacturing"],
  },
  {
    company: "Healthcare System",
    industry: "Healthcare",
    logo: "HS",
    challenge: "Manual compliance reporting taking weeks each quarter",
    solution: "Automated compliance monitoring and reporting platform",
    results: [
      { metric: "90%", label: "Faster Reporting" },
      { metric: "100%", label: "Compliance" },
      { metric: "500+", label: "Hours Saved/Month" },
    ],
    tags: ["Healthcare", "Compliance"],
  },
  {
    company: "Retail Giant",
    industry: "Retail",
    logo: "RG",
    challenge: "Inconsistent customer service across channels",
    solution: "AI-powered customer service automation with omnichannel support",
    results: [
      { metric: "60%", label: "Faster Response" },
      { metric: "85%", label: "Customer Satisfaction" },
      { metric: "$4M", label: "Support Cost Reduction" },
    ],
    tags: ["Customer Service", "Retail"],
  },
  {
    company: "Tech Unicorn",
    industry: "Technology",
    logo: "TU",
    challenge: "Rapid growth overwhelming manual onboarding processes",
    solution: "Automated employee onboarding and IT provisioning",
    results: [
      { metric: "80%", label: "Faster Onboarding" },
      { metric: "50%", label: "IT Workload Reduced" },
      { metric: "3x", label: "Scale Capacity" },
    ],
    tags: ["HR", "IT Operations"],
  },
  {
    company: "Insurance Leader",
    industry: "Insurance",
    logo: "IL",
    challenge: "Slow claims processing with high manual error rates",
    solution: "AI-powered claims processing with fraud detection",
    results: [
      { metric: "70%", label: "Faster Claims" },
      { metric: "99%", label: "Fraud Detection" },
      { metric: "$6M", label: "Annual Savings" },
    ],
    tags: ["AI & Automation", "Insurance"],
  },
];

const industries = [
  "All Industries",
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Technology",
  "Insurance",
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
              Customer <span className="text-[#D4A017]">Success</span> Stories
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              See how leading enterprises are transforming their operations with Krovos AI automation. 
              Real results, proven ROI, and measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 bg-[#0A1628] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {industries.map((industry, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-[#D4A017] text-[#0A1628]"
                    : "bg-[#0D2040] text-white/60 hover:text-white hover:bg-[#0D2040]/80"
                }`}
              >
                {industry}
              </button>
            ))}
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
                        <h3 className="text-lg font-semibold text-white">{study.company}</h3>
                        <p className="text-white/50 text-sm">{study.industry}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {study.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <h4 className="text-white/40 text-sm font-medium mb-2">Challenge</h4>
                      <p className="text-white/70 text-sm">{study.challenge}</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                    <h4 className="text-[#D4A017] text-sm font-medium mb-4">Solution</h4>
                    <p className="text-white/70">{study.solution}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-[#D4A017] text-sm font-medium mt-6 hover:underline"
                    >
                      Read Full Story
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Results */}
                  <div className="p-8 bg-[#0A1628]/50">
                    <h4 className="text-[#D4A017] text-sm font-medium mb-4">Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl font-bold text-[#D4A017]">{result.metric}</div>
                          <div className="text-white/40 text-xs mt-1">{result.label}</div>
                        </div>
                      ))}
                    </div>
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
            Ready to See Results?
          </h2>
          <p className="mt-4 text-[#0A1628]/70 text-lg max-w-2xl mx-auto">
            Join 500+ enterprises transforming their operations with Krovos.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#D4A017] bg-[#0A1628] rounded-lg hover:bg-[#0A1628]/90 transition-colors"
            >
              Get a Demo
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
