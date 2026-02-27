import Link from "next/link";

export const metadata = {
  title: "Careers - Krovos",
  description: "Join the Krovos team. We're building the future of AI automation.",
};

const departments = [
  { name: "Engineering", open: 12 },
  { name: "Product", open: 5 },
  { name: "Sales", open: 8 },
  { name: "Marketing", open: 4 },
  { name: "Customer Success", open: 6 },
  { name: "Operations", open: 3 },
];

const benefits = [
  "Competitive salary & equity",
  "Health, dental, vision insurance",
  "Unlimited PTO",
  "Remote-first culture",
  "Home office stipend",
  "Learning & development budget",
];

export default function CareersPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Join the <span className="gradient-text">team</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We&apos;re building the future of work. Come help us automate every
              repetitive task and free people to do their best work.
            </p>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Open positions by team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept, index) => (
              <Link
                key={index}
                href={`/company/careers#${dept.name.toLowerCase()}`}
                className="flex items-center justify-between p-6 rounded-xl border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all"
              >
                <span className="font-semibold text-slate-900">{dept.name}</span>
                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                  {dept.open} open
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">Benefits & perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-4 rounded-lg bg-slate-50">
                <svg className="w-5 h-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Don&apos;t see the right role?</h2>
          <p className="mt-4 text-lg text-slate-300">
            We&apos;re always looking for exceptional talent. Send us your resume.
          </p>
          <div className="mt-8">
            <a href="mailto:careers@krovos.com" className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              Email us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
