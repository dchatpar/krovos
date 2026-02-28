import Link from "next/link";

export const metadata = {
  title: "Whitepapers - Krovos",
  description: "Download in-depth research papers and technical guides on AI automation, enterprise security, and digital transformation.",
};

const whitepapers = [
  {
    title: "Enterprise AI Automation: A Complete Guide",
    description: "Everything you need to know about implementing AI automation in enterprise environments.",
    pages: 45,
    category: "AI & Automation",
  },
  {
    title: "Zero Trust Security for Modern Enterprises",
    description: "Implementation guide for zero trust architecture in cloud-native applications.",
    pages: 32,
    category: "Security",
  },
  {
    title: "The State of Cloud Migration 2026",
    description: "Annual research report on cloud migration trends, challenges, and best practices.",
    pages: 58,
    category: "Cloud",
  },
  {
    title: "Building Scalable AI Systems",
    description: "Technical deep-dive into architecting AI systems that scale to millions of users.",
    pages: 62,
    category: "Architecture",
  },
  {
    title: "Compliance Guide: SOC 2, HIPAA, GDPR",
    description: "Navigate enterprise compliance requirements with this comprehensive guide.",
    pages: 40,
    category: "Compliance",
  },
  {
    title: "Digital Transformation Playbook",
    description: "Step-by-step guide to planning and executing successful digital transformation.",
    pages: 55,
    category: "Strategy",
  },
];

export default function WhitepapersPage() {
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
              <span className="text-[#D4A017]">Whitepapers</span> & Research
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              In-depth research, technical guides, and industry reports from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whitepapers.map((paper, index) => (
              <div
                key={index}
                className="bg-[#0D2040] border border-[#D4A017]/10 rounded-2xl p-6 hover:border-[#D4A017]/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-[#D4A017]/10 text-[#D4A017] text-xs font-medium rounded-full">
                    {paper.category}
                  </span>
                  <span className="text-white/30 text-sm">{paper.pages} pages</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{paper.title}</h3>
                <p className="mt-2 text-white/50 text-sm">{paper.description}</p>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href="/contact?subject=Request Whitepaper: {paper.title}"
                    className="text-[#D4A017] text-sm font-medium hover:underline"
                  >
                    Request Access
                  </Link>
                  <span className="text-white/30 text-xs">Free</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16 bg-[#0D2040]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">Get All Whitepapers</h2>
          <p className="mt-4 text-white/60">
            Subscribe to get access to all our whitepapers and receive new ones as they&apos;re published.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#0A1628] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#D4A017]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#D4A017] text-[#0A1628] font-semibold rounded-lg hover:bg-[#D4A017]/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
