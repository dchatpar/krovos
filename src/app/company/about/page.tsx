import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About - Krovos | Enterprise AI Automation Company",
  description: "Krovos is a global enterprise technology holding company delivering transformative AI automation, custom software, digital marketing, managed IT, talent solutions, and logistics technology.",
};

const values = [
  {
    title: "Customer Obsession",
    description: "We start with customer needs and work backwards from there. Every decision we make is guided by what will create the most value for our clients.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Bias for Action",
    description: "Speed matters in business. We make decisions quickly, iterate fast, and learn from real-world feedback to continuously improve.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Radical Transparency",
    description: "We share information openly across the organization. Honesty and clarity in communication build trust with our team and clients.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M3 3a8 8 0 0114 9 M21 12a8 8 0 01-14 9",
  },
  {
    title: "Excellence",
    description: "We ship the best products and never settle for good enough. Quality is not an afterthought - it's built into everything we do.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944 11.955 11.955 0 01-8.618 3.04 12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622",
  },
];

const timeline = [
  { year: "2023", event: "Krovos founded in Vancouver with vision to transform enterprise operations", milestone: true },
  { year: "2024", event: "Public beta launch - 10,000+ early adopters join platform", milestone: false },
  { year: "2025", event: "SOC 2 Type II certification achieved - enterprise security validated", milestone: true },
  { year: "2025", event: "Expanded operations to Dubai and Mumbai - global presence established", milestone: false },
  { year: "2026", event: "Enterprise growth - 500+ enterprise clients worldwide", milestone: true },
  { year: "2026", event: "50M+ workflows automated - milestone of 50 million processes automated", milestone: true },
];

const leadershipTeam = [
  { name: "Sarah Chen", role: "CEO & Founder", bio: "Former VP of Engineering at Google with 15+ years in enterprise software. Led digital transformation initiatives for Fortune 500 companies." },
  { name: "Marcus Rodriguez", role: "CTO", bio: "AI researcher and technologist. Previously founded 2 successful exits in the automation space. PhD in Machine Learning from Stanford." },
  { name: "Emily Watson", role: "COO", bio: "Operational excellence leader with experience scaling startups to $100M+ ARR. Former McKinsey consultant." },
];

const stats = [
  { value: "500+", label: "Enterprise Clients", description: "Companies trusting Krovos worldwide" },
  { value: "50M+", label: "Workflows Automated", description: "Processes optimized each month" },
  { value: "99.99%", label: "Uptime SLA", description: "Guaranteed reliability" },
  { value: "24/7", label: "Support", description: "Always available assistance" },
];

export default function AboutPage() {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Building the Future of <span className="text-[#D4A017]">Enterprise</span> Technology
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
              Krovos Inc. is a premier global enterprise technology holding company headquartered in Vancouver, 
              with operations spanning Dubai and Mumbai. We deliver transformative solutions across AI automation, 
              custom software, digital marketing, managed IT, talent solutions, and logistics technology.
            </p>
            <p className="mt-4 text-lg text-white/60 leading-relaxed max-w-2xl">
              Our mission is to liberate enterprises from repetitive tasks through intelligent automation, 
              enabling teams to focus on creative strategy and high-impact work that drives business growth.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 relative">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-[#D4A017]/20 shadow-2xl">
              <Image
                src="/images/hero-enterprise.png"
                alt="Krovos Enterprise Operations"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4A017]/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#0E7C7B]/20 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0D2040]/50 border-y border-[#D4A017]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-5xl font-bold text-[#D4A017]">{stat.value}</div>
                <div className="text-white font-semibold mt-2">{stat.label}</div>
                <div className="text-white/50 text-sm mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  At Krovos, we believe that the future of work lies in the seamless integration of 
                  artificial intelligence with human creativity. Our mission is to automate every repetitive 
                  task so that people can focus on work that truly matters.
                </p>
                <p>
                  We&apos;re building AI agents that understand your business, remember your preferences, 
                  and get smarter over time. Our platform serves as the intelligent backbone for 
                  enterprise operations, handling everything from customer service automation to 
                  complex workflow orchestration.
                </p>
                <p>
                  Founded in Vancouver, Canada, and expanded globally to Dubai and Mumbai, Krovos 
                  brings together diverse talent and perspectives to solve the most challenging 
                  problems in enterprise automation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-[#D4A017]/20 shadow-2xl">
                <Image
                  src="/images/ai-automation.png"
                  alt="AI Automation Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0E7C7B]/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-[#0D2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Vision</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Our vision extends beyond mere efficiency gains. We envision a world where 
                  enterprises can scale infinitely without proportional increases in headcount, 
                  where innovation isn&apos;t constrained by operational bandwidth, and where 
                  human creativity is the primary driver of business value.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A017]/20 to-[#0E7C7B]/20 rounded-3xl blur-2xl" />
              <div className="relative bg-[#0D2040] border border-[#D4A017]/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">What Sets Us Apart</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">Enterprise-grade security with SOC 2 Type II compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">500+ enterprise integrations out of the box</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">99.99% uptime SLA with global infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">24/7 dedicated support with enterprise success teams</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0D2040]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Our Core Values</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              These principles guide every decision we make and every product we build
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-[#0A1628] border border-[#D4A017]/10 rounded-2xl p-6 hover:border-[#D4A017]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#D4A017]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                <p className="text-white/50 text-sm mt-2 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Leadership Team</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Experienced leaders with deep expertise in enterprise technology and AI
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-[#0D2040] border border-[#D4A017]/10 rounded-2xl p-6">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center text-[#0A1628] font-bold text-xl mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-[#D4A017] text-sm font-medium mt-1">{member.role}</p>
                <p className="text-white/50 text-sm mt-3 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/company/leadership" className="inline-flex items-center text-[#D4A017] font-medium hover:underline">
              Meet our full leadership team
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-[#0D2040]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Global Presence</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                With headquarters in Vancouver and operations spanning Dubai and Mumbai, Krovos 
                serves enterprise clients across North America, Europe, Middle East, and Asia-Pacific.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D4A017]/10 flex items-center justify-center">
                    <span className="text-[#D4A017] font-bold">CA</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Vancouver (HQ)</div>
                    <div className="text-white/40 text-sm">North America</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D4A017]/10 flex items-center justify-center">
                    <span className="text-[#D4A017] font-bold">AE</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Dubai</div>
                    <div className="text-white/40 text-sm">Middle East</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D4A017]/10 flex items-center justify-center">
                    <span className="text-[#D4A017] font-bold">IN</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Mumbai</div>
                    <div className="text-white/40 text-sm">Asia Pacific</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0E7C7B]/20 to-[#D4A017]/20 rounded-3xl blur-2xl" />
              <div className="relative bg-[#0D2040] border border-[#D4A017]/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Why Global Matters</h3>
                <ul className="space-y-4 text-white/70">
                  <li>Round-the-clock development cycles across time zones</li>
                  <li>Local market expertise in key enterprise regions</li>
                  <li>Data residency options for compliance requirements</li>
                  <li>24/7 customer support with regional teams</li>
                  <li>Partnerships with local technology ecosystems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Our Journey</h2>
            <p className="mt-4 text-white/60">From startup to enterprise leader</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#D4A017]/20" />
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between mb-8 last:mb-0">
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "ml-auto pl-8"}`}>
                  <div className={`text-sm font-semibold ${item.milestone ? "text-[#D4A017]" : "text-white/40"}`}>
                    {item.year}
                  </div>
                  <div className="text-white/80 text-sm mt-1">{item.event}</div>
                </div>
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 ${item.milestone ? "bg-[#D4A017] border-[#D4A017]" : "bg-[#0D2040] border-[#D4A017]/40"}`} />
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#D4A017] to-[#F0C040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1628]">
            Join Our Growing Team
          </h2>
          <p className="mt-4 text-[#0A1628]/70 text-lg max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals who share our passion for transforming 
            enterprise operations through AI automation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/company/careers"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#D4A017] bg-[#0A1628] rounded-full hover:bg-[#0A1628]/90 transition-colors"
            >
              View Open Positions
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#0A1628] bg-white rounded-full hover:bg-white/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
