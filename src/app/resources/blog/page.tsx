import Link from "next/link";

export const metadata = {
  title: "Blog - Krovos",
  description: "Insights, tutorials, and news about AI automation, enterprise technology, and digital transformation.",
};

const posts = [
  {
    date: "February 20, 2026",
    category: "AI & Automation",
    title: "The Future of AI Agents in Enterprise Automation",
    excerpt: "Exploring how AI agents are transforming enterprise workflows and what it means for the future of work.",
    readTime: "8 min read",
  },
  {
    date: "February 15, 2026",
    category: "Case Studies",
    title: "How a Fortune 500 Bank Reduced Processing Time by 75%",
    excerpt: "A deep dive into how we helped a major financial institution automate their loan approval process.",
    readTime: "12 min read",
  },
  {
    date: "February 10, 2026",
    category: "Product",
    title: "Introducing Krovos Enterprise: Built for Scale",
    excerpt: "Announcing our new enterprise tier with advanced security, compliance, and customization features.",
    readTime: "5 min read",
  },
  {
    date: "February 5, 2026",
    category: "Tutorial",
    title: "Building Your First AI Automation Workflow",
    excerpt: "A step-by-step guide to creating intelligent workflows that learn and improve over time.",
    readTime: "15 min read",
  },
  {
    date: "January 28, 2026",
    category: "Industry",
    title: "The State of Enterprise Automation in 2026",
    excerpt: "Our annual report on the state of automation in enterprises, including trends and predictions.",
    readTime: "20 min read",
  },
  {
    date: "January 20, 2026",
    category: "Security",
    title: "Zero Trust Security for AI Automation Platforms",
    excerpt: "Best practices for implementing zero trust architecture in automated systems.",
    readTime: "10 min read",
  },
];

const categories = [
  "All Posts",
  "AI & Automation",
  "Case Studies",
  "Product",
  "Tutorial",
  "Industry",
  "Security",
];

export default function BlogPage() {
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
              <span className="text-[#D4A017]">Blog</span> & Insights
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Stay up to date with the latest in AI automation, enterprise technology, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-[#0A1628] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-[#D4A017] text-[#0A1628]"
                    : "bg-[#0D2040] text-white/60 hover:text-white hover:bg-[#0D2040]/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0D2040] border border-[#D4A017]/10 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <span className="inline-block px-3 py-1 bg-[#D4A017]/10 text-[#D4A017] text-xs font-medium rounded-full mb-4">
                  Featured
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">
                  The Future of AI Agents in Enterprise Automation
                </h2>
                <p className="mt-4 text-white/60">
                  Exploring how AI agents are transforming enterprise workflows and what it means for the future of work.
                </p>
                <div className="mt-6 flex items-center gap-4 text-white/40 text-sm">
                  <span>February 20, 2026</span>
                  <span>|</span>
                  <span>8 min read</span>
                </div>
                <Link
                  href="/resources/blog"
                  className="mt-6 inline-flex items-center text-[#D4A017] font-medium hover:underline"
                >
                  Read Article
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-[#D4A017]/20 to-[#0E7C7B]/20 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-[#0D2040] border border-[#D4A017]/20 flex items-center justify-center">
                  <svg className="w-16 h-16 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-[#0D2040]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, index) => (
              <article
                key={index}
                className="bg-[#0A1628] border border-white/10 rounded-2xl overflow-hidden hover:border-[#D4A017]/30 transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#D4A017] text-xs font-medium">{post.category}</span>
                    <span className="text-white/20 text-xs">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white hover:text-[#D4A017] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-white/50 text-sm line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-white/30 text-xs">{post.readTime}</span>
                    <Link
                      href="/resources/blog"
                      className="text-[#D4A017] text-sm font-medium hover:underline"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#0A1628] border-t border-[#D4A017]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-white/60">
            Get the latest insights delivered to your inbox every week.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#0D2040] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#D4A017]"
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
