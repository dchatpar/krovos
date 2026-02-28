import Link from "next/link";

export const metadata = {
  title: "Startup Accelerator - Krovos",
  description: "AI-powered solutions designed specifically for startups and growing companies. Scale faster with intelligent automation.",
};

const features = [
  {
    title: "Rapid Deployment",
    description: "Get started in minutes, not months. Pre-built templates and workflows for common startup use cases.",
  },
  {
    title: "Growth Scaling",
    description: "Automations that grow with you. From 10 to 10,000 users without changing platforms.",
  },
  {
    title: "Cost Effective",
    description: "Startup-friendly pricing with generous free tiers. Pay only for what you use as you scale.",
  },
  {
    title: "Integration Ready",
    description: "Connect with the tools startups use: Stripe, Slack, Notion, Airtable, and 200+ more.",
  },
];

const tools = [
  { name: "Stripe", category: "Payments" },
  { name: "Slack", category: "Communication" },
  { name: "Notion", category: "Productivity" },
  { name: "Airtable", category: "Database" },
  { name: "HubSpot", category: "CRM" },
  { name: "Intercom", category: "Support" },
  { name: "Linear", category: "Project Mgmt" },
  { name: "GitHub", category: "Development" },
];

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "For early-stage startups",
    features: ["1,000 workflows/month", "5 automations", "Basic integrations", "Community support"],
  },
  {
    name: "Growth",
    price: "$99",
    period: "/month",
    description: "For scaling startups",
    features: ["50,000 workflows/month", "Unlimited automations", "Advanced integrations", "Priority support", "Custom AI models"],
  },
  {
    name: "Scale",
    price: "$299",
    period: "/month",
    description: "For fast-growing companies",
    features: ["Unlimited workflows", "Unlimited automations", "All integrations", "Dedicated support", "SLA guarantee", "Custom development"],
  },
];

export default function StartupPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1F35] to-[#0A1628]" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#0E7C7B]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#D4A017]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-[#0E7C7B]/10 border border-[#0E7C7B]/30 rounded-full text-[#0E7C7B] text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#0E7C7B] rounded-full mr-2 animate-pulse" />
              Built for Startups
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Scale Your Startup <span className="text-[#0E7C7B]">Faster</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              AI automation designed for startups. Automate repetitive tasks, reduce costs, 
              and focus on what matters most - growing your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#0E7C7B] text-white font-semibold rounded-lg hover:bg-[#0E7C7B]/90 transition-colors"
              >
                Start Free
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

      {/* Stats */}
      <section className="py-16 bg-[#0D2040]/50 border-y border-[#0E7C7B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#0E7C7B]">5,000+</div>
              <div className="text-white/60 text-sm mt-1">Startup Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#0E7C7B]">40%</div>
              <div className="text-white/60 text-sm mt-1">Avg. Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#0E7C7B]">10M+</div>
              <div className="text-white/60 text-sm mt-1">Workflows Run</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#0E7C7B]">90%</div>
              <div className="text-white/60 text-sm mt-1">Time Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Everything Startups Need</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Purpose-built automation tools that help you move fast
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-[#0D2040]/50 border border-[#0E7C7B]/10 rounded-2xl p-6 hover:border-[#0E7C7B]/30 transition-all"
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
            <h2 className="text-2xl lg:text-3xl font-bold text-white">Works With Your Stack</h2>
            <p className="mt-4 text-white/60">Connect with 200+ tools startups rely on</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-[#0A1628] border border-white/10 rounded-full text-white/70 text-sm hover:border-[#0E7C7B]/30 hover:text-[#0E7C7B] transition-colors cursor-pointer"
              >
                {tool.name}
                <span className="ml-2 text-white/30 text-xs">| {tool.category}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-white/40 text-sm mt-8">+ 200 more integrations</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0E7C7B] to-[#14B8A6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            Join thousands of startups saving 40+ hours per week with AI automation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#0E7C7B] bg-white rounded-lg hover:bg-white/90 transition-colors"
            >
              Start Free Today
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
