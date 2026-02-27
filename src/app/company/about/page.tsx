import Link from "next/link";

export const metadata = {
  title: "About - Krovos",
  description: "Krovos is building the future of AI automation. Learn about our mission, values, and team.",
};

const values = [
  {
    title: "Customer Obsession",
    description: "We start with customer needs and work backwards.",
  },
  {
    title: "Bias for Action",
    description: "Speed matters. We make decisions quickly and iterate.",
  },
  {
    title: "Radical Transparency",
    description: "We share information openly and communicate honestly.",
  },
  {
    title: "Excellence",
    description: "We ship the best products and never settle for good enough.",
  },
];

const timeline = [
  { year: "2023", event: "Krovos founded" },
  { year: "2024", event: "Public beta launch" },
  { year: "2025", event: "SOC 2 Type II certification" },
  { year: "2026", event: "Enterprise growth" },
];

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Building the future of <span className="gradient-text">work</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Krovos is on a mission to automate every repetitive task in the enterprise.
              We believe AI agents will transform how work gets done, freeing people to
              focus on creative and strategic work.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Our mission</h2>
              <p className="mt-4 text-lg text-slate-600">
                To automate every repetitive task so people can focus on work that matters.
                We&apos;re building AI agents that understand your business, remember your
                preferences, and get smarter over time.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-white border border-slate-200">
                <div className="text-3xl font-bold text-indigo-600">10K+</div>
                <div className="text-sm text-slate-600">Active users</div>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200">
                <div className="text-3xl font-bold text-indigo-600">50M+</div>
                <div className="text-sm text-slate-600">Workflows run</div>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200">
                <div className="text-3xl font-bold text-indigo-600">500+</div>
                <div className="text-sm text-slate-600">Integrations</div>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200">
                <div className="text-3xl font-bold text-indigo-600">99.9%</div>
                <div className="text-sm text-slate-600">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200" />
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between mb-8">
                <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "ml-auto pl-8"}`}>
                  <div className="text-sm text-indigo-600 font-semibold">{item.year}</div>
                  <div className="text-slate-900 font-medium">{item.event}</div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Join us</h2>
          <p className="mt-4 text-lg text-slate-600">
            We&apos;re building something special. Come help us transform how work gets done.
          </p>
          <div className="mt-8">
            <Link href="/company/careers" className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              View open positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
