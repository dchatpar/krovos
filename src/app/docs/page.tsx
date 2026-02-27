import Link from "next/link";

export const metadata = {
  title: "Documentation - Krovos",
  description: "Complete documentation for Krovos AI automation platform. Guides, tutorials, API reference, and more.",
};

const sections = [
  {
    title: "Getting Started",
    items: [
      { name: "Quickstart", href: "/docs/quickstart" },
      { name: "Installation", href: "/docs/installation" },
      { name: "Your first workflow", href: "/docs/first-workflow" },
      { name: "Concepts", href: "/docs/concepts" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { name: "Agents", href: "/docs/agents" },
      { name: "Workflows", href: "/docs/workflows" },
      { name: "Triggers", href: "/docs/triggers" },
      { name: "Actions", href: "/docs/actions" },
    ],
  },
  {
    title: "Integrations",
    items: [
      { name: "Overview", href: "/docs/integrations" },
      { name: "Slack", href: "/docs/slack" },
      { name: "Jira", href: "/docs/jira" },
      { name: "Salesforce", href: "/docs/salesforce" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { name: "Authentication", href: "/docs/auth" },
      { name: "REST API", href: "/docs/api" },
      { name: "Webhooks", href: "/docs/webhooks" },
      { name: "SDKs", href: "/docs/sdks" },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              <span className="gradient-text">Documentation</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to build with Krovos. From quickstart guides to
              advanced API reference.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-2xl mx-auto px-4">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-lg font-semibold text-slate-900 mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.items.map((item, iIndex) => (
                    <li key={iIndex}>
                      <Link href={item.href} className="text-slate-600 hover:text-indigo-600 transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/docs/quickstart" className="p-6 rounded-xl border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold text-slate-900">Quickstart</h3>
              <p className="mt-2 text-slate-600">Get up and running in 5 minutes</p>
            </Link>
            <Link href="/docs/api" className="p-6 rounded-xl border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold text-slate-900">API Reference</h3>
              <p className="mt-2 text-slate-600">Complete API documentation</p>
            </Link>
            <Link href="/docs/templates" className="p-6 rounded-xl border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold text-slate-900">Templates</h3>
              <p className="mt-2 text-slate-600">Pre-built workflows to get started</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
