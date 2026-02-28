import Link from "next/link";

export const metadata = {
  title: "Partners - Krovos",
  description: "Explore Krovos's strategic partnerships with leading technology companies and consulting firms.",
};

const partners = [
  {
    name: "Amazon Web Services",
    logo: "AWS",
    tier: "Premier",
    description: "Advanced tier partner delivering enterprise cloud solutions on AWS infrastructure.",
    since: "2024",
  },
  {
    name: "Microsoft Azure",
    logo: "Azure",
    tier: "Gold",
    description: "Gold certified partner for Azure cloud migration and integration services.",
    since: "2024",
  },
  {
    name: "Google Cloud",
    logo: "GCP",
    tier: "Premier",
    description: "Premier partner specializing in AI/ML and data analytics on Google Cloud.",
    since: "2023",
  },
  {
    name: "Salesforce",
    logo: "SFDC",
    tier: "AppExchange",
    description: "Certified AppExchange partner building enterprise automation solutions.",
    since: "2024",
  },
  {
    name: "Snowflake",
    logo: "SNOW",
    tier: "Technology",
    description: "Data cloud partner enabling enterprise analytics and data warehousing.",
    since: "2024",
  },
  {
    name: "Databricks",
    logo: "DBX",
    tier: "Partner",
    description: "AI and machine learning partner for advanced data platform implementations.",
    since: "2025",
  },
];

const technologyPartners = [
  { name: "OpenAI", category: "AI/ML" },
  { name: "Anthropic", category: "AI/ML" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "Stripe", category: "Payments" },
  { name: "Twilio", category: "Communications" },
  { name: "Auth0", category: "Security" },
  { name: "Okta", category: "Security" },
  { name: "Cloudflare", category: "Infrastructure" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
];

const consultingPartners = [
  {
    name: "Deloitte",
    type: "Strategic",
    services: ["Enterprise transformation", "Risk advisory"],
  },
  {
    name: "Accenture",
    type: "Implementation",
    services: ["Digital transformation", "Cloud migration"],
  },
  {
    name: "McKinsey & Company",
    type: "Strategy",
    services: ["Strategy consulting", "Operations optimization"],
  },
  {
    name: "PwC",
    type: "Advisory",
    services: ["Risk management", "Compliance"],
  },
];

const benefits = [
  {
    title: "Co-sell Opportunities",
    description: "Access joint go-to-market opportunities with our sales team and expand your revenue streams.",
  },
  {
    title: "Technical Enablement",
    description: "Get access to training, certifications, and technical resources to build integrated solutions.",
  },
  {
    title: "Marketing Support",
    description: "Leverage co-marketing opportunities, joint events, and lead generation campaigns.",
  },
  {
    title: "Dedicated Support",
    description: "Work with a dedicated partner manager to help you succeed and grow your practice.",
  },
];

export default function PartnersPage() {
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
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Strategic <span className="text-[#D4A017]">Partners</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Join our partner ecosystem to deliver cutting-edge AI automation solutions to enterprise clients worldwide. 
              Together, we transform how businesses operate.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Technology Partners</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Strategic alliances with industry leaders to deliver comprehensive solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="group bg-[#0D2040]/50 border border-[#D4A017]/10 rounded-2xl p-6 hover:border-[#D4A017]/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center text-[#0A1628] font-bold">
                    {partner.logo}
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    partner.tier === 'Premier' 
                      ? 'bg-[#D4A017]/20 text-[#D4A017]' 
                      : partner.tier === 'Gold'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {partner.tier}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
                <p className="text-white/50 text-sm mt-2">{partner.description}</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-white/40 text-sm">Partner since {partner.since}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners Grid */}
      <section className="py-20 bg-[#0D2040]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white">Integrations & Technologies</h2>
            <p className="mt-4 text-white/60">Seamless integration with your existing technology stack</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {technologyPartners.map((tech, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-[#0A1628] border border-white/10 rounded-full text-white/70 text-sm hover:border-[#D4A017]/30 hover:text-[#D4A017] transition-colors cursor-pointer"
              >
                {tech.name}
                <span className="ml-2 text-white/30 text-xs">| {tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Partners */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Consulting Partners</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Global consulting firms that recommend and implement Krovos solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingPartners.map((firm, index) => (
              <div 
                key={index}
                className="bg-[#0D2040]/50 border border-[#D4A017]/10 rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E7C7B] to-[#14B8A6] flex items-center justify-center text-white font-bold mb-4">
                  {firm.name[0]}
                </div>
                <h3 className="text-lg font-semibold text-white">{firm.name}</h3>
                <span className="inline-block px-2 py-1 bg-[#D4A017]/10 text-[#D4A017] text-xs font-medium rounded mt-2">
                  {firm.type} Partner
                </span>
                <ul className="mt-4 space-y-2">
                  {firm.services.map((service, i) => (
                    <li key={i} className="text-white/50 text-sm flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-[#0D2040]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Partner Benefits</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Everything you need to build, sell, and grow with Krovos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-[#0A1628] border border-[#D4A017]/10 rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4A017]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="text-white/50 text-sm mt-2 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Program Tiers */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-white">Partner Program</h2>
              <p className="mt-4 text-white/70">
                Choose the partnership level that fits your business goals and unlock progressively greater benefits.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#D4A017] text-[#0A1628] font-semibold rounded-lg hover:bg-[#D4A017]/90 transition-colors"
                >
                  Become a Partner
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-3 gap-4">
              <div className="bg-[#0D2040] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white">Registered</h3>
                <p className="text-white/40 text-sm mt-2">For businesses getting started</p>
                <ul className="mt-4 space-y-2">
                  <li className="text-white/60 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Partner directory listing
                  </li>
                  <li className="text-white/60 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sales collateral
                  </li>
                </ul>
              </div>
              <div className="bg-[#0D2040] border border-[#D4A017]/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white">Select</h3>
                <p className="text-white/40 text-sm mt-2">For growing practices</p>
                <ul className="mt-4 space-y-2">
                  <li className="text-white/60 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in Registered
                  </li>
                  <li className="text-white/60 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Deal registration
                  </li>
                  <li className="text-white/60 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Partner training
                  </li>
                </ul>
              </div>
              <div className="bg-[#0D2040] border border-[#D4A017] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white">Premier</h3>
                <p className="text-white/40 text-sm mt-2">For enterprise focus</p>
                <ul className="mt-4 space-y-2">
                  <li className="text-white/60 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in Select
                  </li>
                  <li className="text-white/60 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dedicated partner manager
                  </li>
                  <li className="text-white/60 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Co-sell with Krovos sales
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#D4A017] to-[#F0C040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1628]">
            Ready to Partner with Krovos?
          </h2>
          <p className="mt-4 text-[#0A1628]/70 text-lg max-w-2xl mx-auto">
            Join our growing partner ecosystem and help enterprises transform their operations with AI automation.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#D4A017] bg-[#0A1628] rounded-full hover:bg-[#0A1628]/90 transition-colors"
            >
              Apply Now
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
