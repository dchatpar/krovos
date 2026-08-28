import Link from "next/link";

export const metadata = {
  title: "Digital Transformation - Krovos",
  description: "Digital transformation projects delivered by Krovos: scoped per engagement, with the team you actually talk to.",
};

const capabilities = [
  {
    title: "Process Automation",
    description: "Help streamlining operational workflows, scoped to the processes that actually matter for your team.",
  },
  {
    title: "Customer Experience",
    description: "Help with the customer-facing surfaces of your product, from intake flows to support tooling.",
  },
  {
    title: "Data Modernization",
    description: "Help with reporting, dashboards, and data flows. Scope depends on what data you have and what questions you need to answer.",
  },
  {
    title: "Application Delivery",
    description: "Help building or maintaining the applications that run your operations, on the stack that fits your team.",
  },
];

const approach = [
  { step: "01", title: "Assess", desc: "Evaluate current state and identify opportunities" },
  { step: "02", title: "Strategy", desc: "Create roadmap aligned with business goals" },
  { step: "03", title: "Implement", desc: "Execute the work with agreed milestones" },
  { step: "04", title: "Optimize", desc: "Iterate based on what we learn in production" },
];

const stats = [
  { value: "Project", label: "Engagement Model" },
  { value: "Direct", label: "Communication" },
  { value: "Fixed", label: "Pricing" },
  { value: "Senior", label: "Team on the Work" },
];

export default function TransformationPage() {
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
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Digital <span className="text-[#D4A017]">Transformation</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Transformation projects delivered by Krovos. Each engagement is
              scoped up front, priced up front, and run by a small senior team
              you can talk to directly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A017] text-[#0A1628] font-semibold rounded-lg hover:bg-[#D4A017]/90 transition-colors"
              >
                Start a Conversation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/resources/case-studies"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                See Project Examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0D2040]/50 border-y border-[#D4A017]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#D4A017]">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Project Capabilities</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Where we can help on transformation work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="bg-[#0D2040]/50 border border-[#D4A017]/10 rounded-2xl p-6 hover:border-[#D4A017]/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-white">{cap.title}</h3>
                <p className="text-white/50 text-sm mt-2">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-[#0D2040]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Our Approach</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              A simple four-step method we use on larger engagements.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {approach.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-[#0A1628] border border-[#D4A017]/10 rounded-2xl p-6 h-full">
                  <div className="text-4xl font-bold text-[#D4A017]/30 mb-4">{item.step}</div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-white/50 text-sm mt-2">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-[#D4A017]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#D4A017] to-[#F0C040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1628]">
            Start a Conversation
          </h2>
          <p className="mt-4 text-[#0A1628]/70 text-lg">
            Tell us what you are working on. We will scope the project and
            price it up front.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#D4A017] bg-[#0A1628] rounded-lg hover:bg-[#0A1628]/90 transition-colors"
            >
              Get in Touch
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
