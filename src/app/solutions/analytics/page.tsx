import Link from "next/link";

export const metadata = {
  title: "Data Analytics - Krovos",
  description: "Transform your data into actionable insights with AI-powered analytics. Real-time dashboards, predictive models, and business intelligence.",
};

const features = [
  {
    title: "Real-Time Analytics",
    description: "Process millions of events per second with sub-second latency for real-time decision making.",
  },
  {
    title: "AI-Powered Insights",
    description: "Machine learning models automatically surface patterns, anomalies, and opportunities in your data.",
  },
  {
    title: "Custom Dashboards",
    description: "Build beautiful, interactive dashboards tailored to your business needs with drag-and-drop simplicity.",
  },
  {
    title: "Predictive Analytics",
    description: "Forecast trends, predict customer behavior, and anticipate market changes with accuracy.",
  },
];

const metrics = [
  { label: "Data Points Processed", value: "10B+" },
  { label: "Query Response Time", value: "<100ms" },
  { label: "Dashboards Created", value: "50K+" },
  { label: "AI Insights Generated", value: "1M+" },
];

const integrations = [
  "Snowflake", "Databricks", "BigQuery", "Redshift", "PostgreSQL", "MySQL",
  "Salesforce", "HubSpot", "Stripe", "Google Analytics", "Amplitude", "Mixpanel"
];

export default function AnalyticsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1F35] to-[#0A1628]" />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Data <span className="text-purple-400">Analytics</span> Powered by AI
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Turn your data into competitive advantage. AI-powered analytics that reveal 
              insights you never knew existed and predict what comes next.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors"
              >
                Start Free Trial
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-[#0D2040]/50 border-y border-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-purple-400">{metric.value}</div>
                <div className="text-white/60 text-sm mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Analytics That Think</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Go beyond traditional BI with AI that learns from your data
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-[#0D2040]/50 border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-white/50 text-sm mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-[#0D2040]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white">Works With Your Data Stack</h2>
            <p className="mt-4 text-white/60">Connect to any data source</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((tool, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-[#0A1628] border border-white/10 rounded-full text-white/70 text-sm hover:border-purple-500/30 hover:text-purple-400 transition-colors cursor-pointer"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Unlock Your Data Potential
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Start discovering insights today. 14-day free trial, no credit card required.
          </p>
          <div className="mt-8">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-purple-600 bg-white rounded-lg hover:bg-white/90 transition-colors"
            >
              Start Free Trial
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
