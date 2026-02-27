import Link from "next/link";

export const metadata = {
  title: "Solutions - Krovos",
  description: "AI automation solutions for every team. IT Operations, Security, Sales, Support, and more.",
};

const solutions = [
  {
    title: "IT Operations",
    description: "Automate incident triage, asset management, and compliance checks.",
    href: "/solutions/it-ops",
  },
  {
    title: "Security Operations",
    description: "Detect threats, enrich alerts, and automate response workflows.",
    href: "/solutions/security-ops",
  },
  {
    title: "RevOps",
    description: "Align sales, marketing, and revenue operations with automated workflows.",
    href: "/solutions/revops",
  },
  {
    title: "Sales",
    description: "Qualify leads, enrich contacts, and automate deal workflows.",
    href: "/solutions/sales",
  },
  {
    title: "Customer Support",
    description: "Route tickets, summarize conversations, and automate responses.",
    href: "/solutions/customer-support",
  },
  {
    title: "Finance",
    description: "Automate invoice processing, approvals, and financial reporting.",
    href: "/solutions/finance",
  },
  {
    title: "HR",
    description: "Streamline onboarding, offboarding, and employee requests.",
    href: "/solutions/hr",
  },
  {
    title: "Product & Engineering",
    description: "Automate code reviews, deployments, and incident response.",
    href: "/solutions/engineering",
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Solutions for <span className="gradient-text">every team</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Krovos agents work where your teams work. Automate workflows across
              the entire organization.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                href={solution.href}
                className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{solution.description}</p>
                <div className="mt-4 flex items-center text-indigo-600 font-medium text-sm">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Can&apos;t find what you need?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Build custom workflows with our visual builder. If you can dream it, you can automate it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/demo" className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              Talk to sales
            </Link>
            <Link href="/docs" className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
              Read docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
