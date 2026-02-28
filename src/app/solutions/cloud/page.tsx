import Link from "next/link";

export const metadata = {
  title: "Cloud Migration - Krovos",
  description: "Seamless cloud migration solutions. Move your infrastructure to AWS, Azure, or Google Cloud with zero downtime.",
};

const features = [
  {
    title: "Zero Downtime Migration",
    description: "Blue-green deployment ensures your applications stay running during the entire migration process.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Automated Assessment",
    description: "AI-powered analysis of your current infrastructure to create a detailed migration roadmap.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
  },
  {
    title: "Cost Optimization",
    description: "Right-size resources and optimize spending with continuous monitoring and recommendations.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Security First",
    description: "Enterprise-grade security throughout the migration with compliance certifications.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

const migrationPaths = [
  {
    from: "On-Premise",
    to: "AWS",
    description: "Migrate datacenters to Amazon Web Services",
  },
  {
    from: "On-Premise",
    to: "Azure",
    description: "Move infrastructure to Microsoft Azure",
  },
  {
    from: "On-Premise",
    to: "GCP",
    description: "Transition to Google Cloud Platform",
  },
  {
    from: "Legacy Cloud",
    to: "Multi-Cloud",
    description: "Distribute workloads across multiple providers",
  },
];

const stats = [
  { value: "500+", label: "Migrations Completed" },
  { value: "99.99%", label: "Uptime During Migration" },
  { value: "60%", label: "Average Cost Savings" },
  { value: "40%", label: "Faster Time-to-Market" },
];

export default function CloudPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1F35] to-[#0A1628]" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Cloud <span className="text-blue-400">Migration</span> Made Simple
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Migrate to the cloud with confidence. Our AI-powered platform ensures 
              zero downtime, optimal performance, and significant cost savings.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
              >
                Start Migration
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/resources/case-studies"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0D2040]/50 border-y border-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Why Choose Krovos for Migration?</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Enterprise-grade migration with zero business disruption
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-[#0D2040]/50 border border-blue-500/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-white/50 text-sm mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Paths */}
      <section className="py-20 bg-[#0D2040]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Migration Paths</h2>
            <p className="mt-4 text-white/60">We support migrations to all major cloud platforms</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationPaths.map((path, index) => (
              <div 
                key={index}
                className="bg-[#0A1628] border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-white/60 text-sm">{path.from}</span>
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="text-blue-400 font-semibold">{path.to}</span>
                </div>
                <p className="text-white/60 text-sm text-center">{path.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Our Migration Process</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              A proven 4-step methodology that ensures successful cloud migrations
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assess", desc: "AI analysis of current infrastructure" },
              { step: "02", title: "Plan", desc: "Detailed migration roadmap" },
              { step: "03", title: "Migrate", desc: "Execute with zero downtime" },
              { step: "04", title: "Optimize", desc: "Fine-tune for performance & cost" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-[#0D2040] border border-blue-500/10 rounded-2xl p-6 h-full">
                  <div className="text-4xl font-bold text-blue-500/30 mb-4">{item.step}</div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-white/50 text-sm mt-2">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-blue-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Move to the Cloud?
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            Get a free assessment of your current infrastructure and migration plan.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-blue-600 bg-white rounded-lg hover:bg-white/90 transition-colors"
            >
              Get Free Assessment
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
