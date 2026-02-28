import Link from "next/link";

export const metadata = {
  title: "Leadership - Krovos",
  description: "Meet the executive team at Krovos driving innovation in enterprise AI automation.",
};

const leadershipTeam = [
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    bio: "Former VP of Engineering at Google with 15+ years in enterprise software. Led digital transformation initiatives for Fortune 500 companies.",
    image: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    bio: "AI researcher turned technologist. Previously founded 2 successful exits in the automation space. PhD in Machine Learning from Stanford.",
    image: "MR",
  },
  {
    name: "Emily Watson",
    role: "Chief Operating Officer",
    bio: "Operational excellence leader with experience scaling startups to $100M+ ARR. Former McKinsey consultant specializing in tech transformation.",
    image: "EW",
  },
  {
    name: "David Kim",
    role: "Chief Financial Officer",
    bio: "20 years in corporate finance. Previously CFO at a Series D startup and investment banking at Goldman Sachs.",
    image: "DK",
  },
  {
    name: "Priya Sharma",
    role: "Chief Product Officer",
    bio: "Product visionary who shipped products used by 100M+ users. Former Head of Product at Stripe and Airbnb.",
    image: "PS",
  },
  {
    name: "James Thompson",
    role: "VP of Engineering",
    bio: "Infrastructure expert. Built systems handling 1B+ requests/day at Netflix. Open source contributor to Kubernetes and Prometheus.",
    image: "JT",
  },
  {
    name: "Lisa Park",
    role: "VP of Sales",
    bio: "Enterprise sales leader with $500M+ in career quota attainment. Previously led sales at Salesforce and ServiceNow.",
    image: "LP",
  },
  {
    name: "Michael Foster",
    role: "VP of Customer Success",
    bio: "Customer advocate who built success organizations from the ground up. Known for achieving 150%+ Net Promoter Score.",
    image: "MF",
  },
];

const boardMembers = [
  {
    name: "Robert Williams",
    role: "Board Chairman",
    company: "Former CEO, EnterpriseTech Inc.",
    bio: "30 years in enterprise software leadership. Board member at multiple Fortune 500 technology companies.",
    image: "RW",
  },
  {
    name: "Jennifer Martinez",
    role: "Board Member",
    company: "Managing Partner, Horizon Ventures",
    bio: "Leading investor in enterprise AI. Partnered with 5 unicorn exits in B2B SaaS.",
    image: "JM",
  },
  {
    name: "Thomas Anderson",
    role: "Board Member",
    company: "Former CTO, CloudScale Systems",
    bio: "Technical architect behind some of the world's largest distributed systems. Angel investor in 50+ startups.",
    image: "TA",
  },
];

export default function LeadershipPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1F35] to-[#0A1628]" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0E7C7B]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Our <span className="text-[#D4A017]">Leadership</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Meet the executive team driving Krovos&apos;s mission to transform enterprise operations 
              through intelligent automation. Decades of combined experience in scaling technology companies.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Executive Team</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Seasoned leaders with deep expertise in enterprise software, AI, and scaling high-growth companies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((member, index) => (
              <div 
                key={index}
                className="group bg-[#0D2040]/50 border border-[#D4A017]/10 rounded-2xl p-6 hover:border-[#D4A017]/30 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center text-[#0A1628] font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                  {member.image}
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-[#D4A017] text-sm font-medium mt-1">{member.role}</p>
                <p className="text-white/50 text-sm mt-3 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-[#0A1628] border-t border-[#D4A017]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Board of Directors</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Strategic advisors with extensive experience in building and scaling technology enterprises
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {boardMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-[#0D2040]/30 border border-[#D4A017]/10 rounded-2xl p-8 text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#0E7C7B] to-[#14B8A6] flex items-center justify-center text-white font-bold text-2xl mb-4">
                  {member.image}
                </div>
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-[#D4A017] text-sm font-medium mt-1">{member.role}</p>
                <p className="text-white/50 text-sm mt-1">{member.company}</p>
                <p className="text-white/50 text-sm mt-3 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 bg-[#0D2040]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Leadership Philosophy</h2>
              <p className="mt-6 text-white/70 leading-relaxed">
                Our leadership team believes in servant leadership - empowering teams to do their best work 
                while removing obstacles. We foster a culture of transparency, continuous learning, and 
                customer obsession.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#0A1628]/50 rounded-xl border border-[#D4A017]/10">
                  <div className="text-2xl font-bold text-[#D4A017]">200+</div>
                  <div className="text-white/60 text-sm">Team Members</div>
                </div>
                <div className="p-4 bg-[#0A1628]/50 rounded-xl border border-[#D4A017]/10">
                  <div className="text-2xl font-bold text-[#D4A017]">15</div>
                  <div className="text-white/60 text-sm">Countries</div>
                </div>
                <div className="p-4 bg-[#0A1628]/50 rounded-xl border border-[#D4A017]/10">
                  <div className="text-2xl font-bold text-[#D4A017]">4.9/5</div>
                  <div className="text-white/60 text-sm">Glassdoor Rating</div>
                </div>
                <div className="p-4 bg-[#0A1628]/50 rounded-xl border border-[#D4A017]/10">
                  <div className="text-2xl font-bold text-[#D4A017]">95%</div>
                  <div className="text-white/60 text-sm">Retention Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A017]/20 to-[#0E7C7B]/20 rounded-3xl blur-2xl" />
              <div className="relative bg-[#0D2040] border border-[#D4A017]/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Our Core Principles</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">Customer obsession in every decision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">Bias for action and rapid iteration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">Radical transparency and open communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">Excellence in everything we ship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">Building for the long term</span>
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
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
