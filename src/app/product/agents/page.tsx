import Link from "next/link";

export const metadata = {
  title: "AI Agents - Krovos",
  description: "Deploy intelligent AI agents that understand context and take autonomous action. Powered by large language models with long-term memory.",
};

const capabilities = [
  {
    title: "Context-Aware",
    description: "Agents understand your business context and make decisions based on your data.",
  },
  {
    title: "Long-Term Memory",
    description: "Agents remember past interactions and learn from your workflows over time.",
  },
  {
    title: "Tool Calling",
    description: "Agents can call APIs, query databases, and interact with your tools autonomously.",
  },
  {
    title: "Human-in-the-Loop",
    description: "Escalate to humans when needed with configurable approval workflows.",
  },
];

const useCases = [
  {
    title: "Support Agent",
    description: "Answer customer questions, summarize conversations, and route tickets.",
  },
  {
    title: "Data Analyst",
    description: "Query databases, generate reports, and provide insights.",
  },
  {
    title: "Sales Assistant",
    description: "Qualify leads, enrich contacts, and automate follow-ups.",
  },
  {
    title: "IT Operations",
    description: "Triage incidents, run diagnostics, and automate remediation.",
  },
];

export default function AIPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              AI Agents that actually <span className="gradient-text">understand</span> your business
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Deploy autonomous agents powered by large language models. They understand context,
              remember past interactions, and take intelligent action.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Start free
              </Link>
              <Link
                href="/demo"
                className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
              >
                Book demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How AI Agents work</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Define</h3>
              <p className="mt-2 text-slate-600">
                Define your agent&apos;s role, instructions, and available tools.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Train</h3>
              <p className="mt-2 text-slate-600">
                Connect your data sources and let agents learn from your workflows.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Deploy</h3>
              <p className="mt-2 text-slate-600">
                Deploy agents to Slack, email, or API. They&apos;re ready to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Built for enterprise workloads
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <div key={index} className="p-6 rounded-xl bg-white border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">{cap.title}</h3>
                <p className="mt-2 text-slate-600">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Pre-built agents for every team
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 rounded-xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-slate-900">{useCase.title}</h3>
                <p className="mt-2 text-slate-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to deploy your first agent?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Start building intelligent agents today. Free forever tier available.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Start free
            </Link>
            <Link
              href="/docs/agents"
              className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
            >
              Read docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
