import Link from "next/link";

export const metadata = {
  title: "API Reference - Krovos",
  description: "Complete API documentation for Krovos automation platform. Integrate with our powerful AI automation capabilities.",
};

const endpoints = [
  {
    method: "POST",
    path: "/api/v1/workflows",
    description: "Create a new automation workflow",
  },
  {
    method: "GET",
    path: "/api/v1/workflows/:id",
    description: "Get workflow details by ID",
  },
  {
    method: "PUT",
    path: "/api/v1/workflows/:id",
    description: "Update an existing workflow",
  },
  {
    method: "DELETE",
    path: "/api/v1/workflows/:id",
    description: "Delete a workflow",
  },
  {
    method: "POST",
    path: "/api/v1/executions",
    description: "Execute a workflow",
  },
  {
    method: "GET",
    path: "/api/v1/executions/:id",
    description: "Get execution status",
  },
  {
    method: "GET",
    path: "/api/v1/analytics",
    description: "Get workflow analytics",
  },
  {
    method: "POST",
    path: "/api/v1/integrations",
    description: "Register a new integration",
  },
];

const sdks = [
  { name: "JavaScript", icon: "JS", description: "Official Node.js and browser SDK" },
  { name: "Python", icon: "PY", description: "Python client library" },
  { name: "Go", icon: "GO", description: "Go SDK for high-performance apps" },
  { name: "Ruby", icon: "RB", description: "Ruby gem for Rails integration" },
  { name: "Java", icon: "JV", description: "Java SDK for enterprise apps" },
  { name: "C#", icon: "C#", description: ".NET SDK for Microsoft stack" },
];

export default function ApiPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1F35] to-[#0A1628]" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#0E7C7B]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              API <span className="text-[#D4A017]">Reference</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Build powerful integrations with the Krovos API. Automate workflows, 
              manage executions, and access analytics programmatically.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A017] text-[#0A1628] font-semibold rounded-lg hover:bg-[#D4A017]/90 transition-colors"
              >
                Get API Key
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Quick Start</h2>
          <div className="bg-[#0D2040] border border-white/10 rounded-2xl overflow-hidden">
            <div className="flex border-b border-white/10">
              <div className="px-4 py-2 bg-[#0A1628] text-white/60 text-sm font-medium">cURL</div>
              <div className="px-4 py-2 text-white/40 text-sm">JavaScript</div>
              <div className="px-4 py-2 text-white/40 text-sm">Python</div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm text-white/80 font-mono">
{`# Create a new workflow
curl -X POST https://api.krovos.com/v1/workflows \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Hello World",
    "trigger": { "type": "schedule", "cron": "0 9 * * *" },
    "actions": [{ "type": "log", "message": "Hello!" }]
  }'`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-16 bg-[#0D2040]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">API Endpoints</h2>
          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <div
                key={index}
                className="bg-[#0A1628] border border-white/10 rounded-xl p-4 hover:border-[#D4A017]/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className={`px-2 py-1 text-xs font-bold rounded ${
                    endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                    endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                    endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-white/80 font-mono text-sm">{endpoint.path}</code>
                </div>
                <p className="mt-2 text-white/50 text-sm">{endpoint.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Official SDKs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sdks.map((sdk, index) => (
              <div
                key={index}
                className="bg-[#0D2040] border border-white/10 rounded-xl p-6 hover:border-[#D4A017]/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center text-[#0A1628] font-bold">
                    {sdk.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{sdk.name}</h3>
                    <p className="text-white/40 text-sm">{sdk.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="py-16 bg-[#0D2040]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A1628] border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">Rate Limits</h2>
            <p className="text-white/60 mb-6">
              API requests are rate limited based on your plan:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-[#0D2040] rounded-xl">
                <div className="text-2xl font-bold text-[#D4A017]">1,000</div>
                <div className="text-white/40 text-sm">requests/hour (Free)</div>
              </div>
              <div className="text-center p-4 bg-[#0D2040] rounded-xl">
                <div className="text-2xl font-bold text-[#D4A017]">50,000</div>
                <div className="text-white/40 text-sm">requests/hour (Pro)</div>
              </div>
              <div className="text-center p-4 bg-[#0D2040] rounded-xl">
                <div className="text-2xl font-bold text-[#D4A017]">Unlimited</div>
                <div className="text-white/40 text-sm">requests/hour (Enterprise)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#D4A017] to-[#F0C040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1628]">
            Start Building with Krovos API
          </h2>
          <p className="mt-4 text-[#0A1628]/70 text-lg">
            Get your API key and start building integrations today.
          </p>
          <div className="mt-8">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#D4A017] bg-[#0A1628] rounded-lg hover:bg-[#0A1628]/90 transition-colors"
            >
              Get API Key
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
