import Link from "next/link";

export const metadata = {
  title: "Integrations - Krovos",
  description: "Connect 500+ tools with Krovos AI automation. Slack, Jira, Salesforce, HubSpot, ServiceNow, and more.",
};

const categories = [
  { name: "Communication", count: 45 },
  { name: "CRM", count: 32 },
  { name: "IT Service Management", count: 28 },
  { name: "Cloud Infrastructure", count: 56 },
  { name: "Databases", count: 48 },
  { name: "Marketing", count: 38 },
  { name: "Finance", count: 24 },
  { name: "HR", count: 22 },
];

const featured = [
  { name: "Slack", description: "Chat with agents, receive notifications, and trigger workflows" },
  { name: "Jira", description: "Create tickets, update issues, and automate project workflows" },
  { name: "Salesforce", description: "Sync contacts, manage opportunities, and automate CRM workflows" },
  { name: "HubSpot", description: "Marketing automation, lead scoring, and contact management" },
  { name: "ServiceNow", description: "Incident management, CMDB, and IT operations" },
  { name: "Google Workspace", description: "Gmail, Calendar, Drive, and Sheets integration" },
];

export default function IntegrationsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Connect every <span className="gradient-text">tool</span> in your stack
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              500+ integrations and growing. Connect your CRM, ITSM, HRIS, and more
              to build powerful automation workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((cat, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 hover:border-indigo-200 hover:text-indigo-600 transition-colors"
              >
                {cat.name} <span className="text-slate-400">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Featured integrations</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((int, index) => (
              <div key={index} className="p-6 rounded-xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-slate-600">{int.name[0]}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{int.name}</h3>
                </div>
                <p className="text-slate-600">{int.description}</p>
                <Link href={`/integrations/${int.name.toLowerCase()}`} className="mt-4 inline-flex items-center text-indigo-600 text-sm font-medium">
                  View integration
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Need a custom integration?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Build custom integrations with our REST API and webhooks.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/docs/api" className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              API Reference
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
              Contact sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
