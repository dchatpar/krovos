import Link from "next/link";

export const metadata = {
  title: "Press - Krovos",
  description: "Latest news, press releases, and media coverage about Krovos.",
};

const pressReleases = [
  {
    date: "February 2026",
    title: "Krovos Raises $50M Series B to Accelerate Enterprise AI Automation",
    excerpt: "Funding led by Horizon Ventures to expand go-to-market and product development for enterprise customers.",
    category: "Funding",
  },
  {
    date: "January 2026",
    title: "Krovos Announces Strategic Partnership with AWS",
    excerpt: "New advanced tier partnership to deliver enterprise-grade AI automation solutions on AWS infrastructure.",
    category: "Partnership",
  },
  {
    date: "December 2025",
    title: "Krovos Achieves SOC 2 Type II Certification",
    excerpt: "Security compliance milestone demonstrates commitment to enterprise-grade security and data protection.",
    category: "Company",
  },
  {
    date: "November 2025",
    title: "Krovos Launches Enterprise Suite for Large Organizations",
    excerpt: "New product tier designed specifically for enterprises with 10,000+ employees needing advanced automation.",
    category: "Product",
  },
  {
    date: "October 2025",
    title: "Krovos Named to Forbes Cloud 100 List",
    excerpt: "Recognition as one of the top private cloud companies in the world for the second consecutive year.",
    category: "Recognition",
  },
  {
    date: "September 2025",
    title: "Krovos Expands to Europe with London Office",
    excerpt: "European headquarters marks next phase of global expansion and customer support in EMEA region.",
    category: "Expansion",
  },
];

const mediaCoverage = [
  {
    publication: "Forbes",
    date: "February 2026",
    title: "How Krovos is Revolutionizing Enterprise Automation",
    url: "#",
  },
  {
    publication: "TechCrunch",
    date: "January 2026",
    title: "Krovos nabs $50M to build AI agents for the enterprise",
    url: "#",
  },
  {
    publication: "VentureBeat",
    date: "December 2025",
    title: "Krovos launches new enterprise automation platform with advanced security",
    url: "#",
  },
  {
    publication: "Business Insider",
    date: "November 2025",
    title: "This startup is helping Fortune 500 companies automate their most tedious tasks",
    url: "#",
  },
  {
    publication: "The Information",
    date: "October 2025",
    title: "Krovos emerges as leader in enterprise AI agent market",
    url: "#",
  },
  {
    publication: "Bloomberg",
    date: "September 2025",
    title: "Enterprise AI startup Krovos sets sights on European expansion",
    url: "#",
  },
];

const awards = [
  {
    year: "2025",
    title: "Forbes Cloud 100",
    organization: "Forbes",
    description: "Named to the annual list of top cloud companies",
  },
  {
    year: "2025",
    title: "Best Enterprise Product",
    organization: "SaaStr Awards",
    description: "Recognized for excellence in enterprise software",
  },
  {
    year: "2025",
    title: "AI Innovation Award",
    organization: "TechCrunch Disrupt",
    description: "Winner of the AI category at Disrupt 2025",
  },
  {
    year: "2024",
    title: "Best Workplace",
    organization: "Fortune",
    description: "Named to Best Workplace in Technology list",
  },
  {
    year: "2024",
    title: "Emerging Unicorn",
    organization: "YC",
    description: "Recognized as a high-growth startup on unicorn trajectory",
  },
];

const brandAssets = {
  logo: "Krovos logo (PNG/SVG)",
  guidelines: "Brand guidelines",
  pressKit: "Download press kit",
};

export default function PressPage() {
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
              Press <span className="text-[#D4A017]">Room</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Latest news, press releases, and media coverage about Krovos. 
              Stay updated with our latest announcements and achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Press Releases</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Official announcements and news from Krovos
            </p>
          </div>
          <div className="space-y-4">
            {pressReleases.map((release, index) => (
              <div 
                key={index}
                className="group bg-[#0D2040]/50 border border-[#D4A017]/10 rounded-2xl p-6 hover:border-[#D4A017]/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-[#D4A017]/10 text-[#D4A017] text-xs font-medium rounded-full">
                        {release.category}
                      </span>
                      <span className="text-white/40 text-sm">{release.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#D4A017] transition-colors">
                      {release.title}
                    </h3>
                    <p className="mt-2 text-white/60 text-sm">{release.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Read more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 bg-[#0D2040]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Media Coverage</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              What the press is saying about Krovos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mediaCoverage.map((item, index) => (
              <a 
                key={index}
                href={item.url}
                className="group bg-[#0A1628] border border-white/10 rounded-xl p-5 hover:border-[#D4A017]/30 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#D4A017] font-semibold text-sm">{item.publication}</span>
                  <span className="text-white/30 text-xs">{item.date}</span>
                </div>
                <h3 className="text-white font-medium group-hover:text-[#D4A017] transition-colors">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Awards & Recognition</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Industry recognition for our products and workplace
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="bg-[#0D2040]/50 border border-[#D4A017]/10 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-[#D4A017]/10 text-[#D4A017] text-sm font-medium rounded-full">
                    {award.year}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0A1628]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white">{award.title}</h3>
                <p className="text-[#D4A017] text-sm font-medium">{award.organization}</p>
                <p className="text-white/50 text-sm mt-2">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-20 bg-[#0D2040]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white">Brand Assets</h2>
            <p className="mt-4 text-white/60">Official Krovos branding materials</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-3 bg-[#0A1628] border border-white/10 rounded-xl px-6 py-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center">
                <span className="text-[#0A1628] font-bold">K</span>
              </div>
              <div>
                <div className="text-white font-medium">{brandAssets.logo}</div>
                <div className="text-white/40 text-sm">PNG, SVG formats</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#0A1628] border border-white/10 rounded-xl px-6 py-4">
              <div className="w-12 h-12 rounded-lg bg-[#0E7C7B] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-medium">{brandAssets.guidelines}</div>
                <div className="text-white/40 text-sm">PDF download</div>
              </div>
            </div>
            <Link
              href="/press-kit"
              className="flex items-center gap-3 bg-[#D4A017] text-[#0A1628] rounded-xl px-6 py-4 font-medium hover:bg-[#D4A017]/90 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {brandAssets.pressKit}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-[#0A1628] border-t border-[#D4A017]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white">Media Inquiries</h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            For press inquiries, interview requests, or additional information, please contact our communications team.
          </p>
          <div className="mt-8">
            <Link
              href="mailto:press@krovos.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A017] text-[#0A1628] font-semibold rounded-lg hover:bg-[#D4A017]/90 transition-colors"
            >
              Contact Press Team
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
