import Link from "next/link";

export const metadata = {
  title: "Resources - Krovos",
  description: "Resources for building with Krovos. Case studies, templates, guides, blog posts, and more.",
};

const categories = [
  { name: "Case Studies", count: 12, icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { name: "Templates", count: 45, icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" },
  { name: "Blog", count: 28, icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" },
  { name: "Guides", count: 32, icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
];

const featuredTemplates = [
  { name: "Slack Incident Alert", description: "Get notified in Slack when new incidents are created" },
  { name: "Sales Lead Routing", description: "Automatically route leads to the right sales reps" },
  { name: "Employee Onboarding", description: "Automate new hire onboarding workflow" },
  { name: "Invoice Processing", description: "Extract data from invoices and create payments" },
];

const latestPosts = [
  { title: "How AI Agents are transforming enterprise workflows", date: "Feb 20, 2026" },
  { title: "Building a SOC 2 compliant automation platform", date: "Feb 15, 2026" },
  { title: "Top 10 use cases for AI in IT operations", date: "Feb 10, 2026" },
];

export default function ResourcesPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              <span className="gradient-text">Resources</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to succeed with Krovos. Case studies, templates,
              guides, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4">
            {categories.map((cat, index) => (
              <Link
                key={index}
                href={`/resources/${cat.name.toLowerCase()}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{cat.name}</div>
                  <div className="text-sm text-slate-500">{cat.count} items</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Popular templates</h2>
            <Link href="/resources/templates" className="text-indigo-600 font-medium hover:text-indigo-700">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTemplates.map((template, index) => (
              <div key={index} className="p-6 rounded-xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-slate-900">{template.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{template.description}</p>
                <Link href="/resources/templates" className="mt-4 inline-block text-sm text-indigo-600 font-medium">
                  Use template
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Latest from the blog</h2>
            <Link href="/resources/blog" className="text-indigo-600 font-medium hover:text-indigo-700">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.map((post, index) => (
              <Link
                key={index}
                href="/resources/blog"
                className="p-6 rounded-xl border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all"
              >
                <div className="text-sm text-slate-500 mb-2">{post.date}</div>
                <h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Stay updated</h2>
          <p className="mt-4 text-slate-600">Get the latest news, tips, and resources delivered to your inbox.</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
            <button type="submit" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
