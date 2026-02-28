import Link from "next/link";

export const metadata = {
  title: "Templates - Krovos",
  description: "Free workflow templates and automation recipes to jumpstart your productivity with Krovos.",
};

const templates = [
  {
    name: "Customer Onboarding",
    description: "Automate new customer welcome emails, account setup, and onboarding sequence",
    category: "Sales",
    popularity: "Popular",
  },
  {
    name: "Lead Scoring",
    description: "Score and qualify leads based on engagement, demographics, and behavior",
    category: "Marketing",
    popularity: "Popular",
  },
  {
    name: "Support Ticket Routing",
    description: "Automatically route support tickets to the right team based on issue type",
    category: "Support",
    popularity: "Trending",
  },
  {
    name: "Social Media Publishing",
    description: "Schedule and publish content across multiple social media platforms",
    category: "Marketing",
    popularity: "",
  },
  {
    name: "Invoice Processing",
    description: "Extract data from invoices and automatically process payments",
    category: "Finance",
    popularity: "",
  },
  {
    name: "Employee Offboarding",
    description: "Streamline employee departure process with automated tasks",
    category: "HR",
    popularity: "",
  },
  {
    name: "Content Calendar",
    description: "Manage and track content publishing across teams and channels",
    category: "Marketing",
    popularity: "",
  },
  {
    name: "Meeting Notes to Tasks",
    description: "Automatically create tasks from meeting notes and assign to team members",
    category: "Productivity",
    popularity: "",
  },
  {
    name: "Data Sync",
    description: "Keep data synchronized between different apps in real-time",
    category: "Development",
    popularity: "",
  },
  {
    name: "Weekly Report",
    description: "Generate and send automated weekly reports to stakeholders",
    category: "Productivity",
    popularity: "",
  },
];

const categories = ["All", "Sales", "Marketing", "Support", "Finance", "HR", "Productivity", "Development"];

export default function TemplatesPage() {
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
              Workflow <span className="text-[#D4A017]">Templates</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Jumpstart your automation with pre-built templates. Simply customize and deploy 
              to save hours of setup time.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-[#0A1628] border-b border-white/5 sticky top-16 z-30">
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

      {/* Templates Grid */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-[#0D2040] border border-[#D4A017]/10 rounded-2xl p-6 hover:border-[#D4A017]/30 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#0E7C7B]/10 text-[#0E7C7B] text-xs font-medium rounded-full">
                    {template.category}
                  </span>
                  {template.popularity && (
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      template.popularity === "Popular" 
                        ? "bg-[#D4A017]/10 text-[#D4A017]"
                        : "bg-purple-500/10 text-purple-400"
                    }`}>
                      {template.popularity}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white">{template.name}</h3>
                <p className="mt-2 text-white/50 text-sm">{template.description}</p>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white/40 text-sm">Free template</span>
                  <span className="text-[#D4A017] text-sm font-medium hover:underline">
                    Use template
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#D4A017] to-[#F0C040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1628]">
            Build Your Own Template
          </h2>
          <p className="mt-4 text-[#0A1628]/70 text-lg max-w-2xl mx-auto">
            Create custom workflows and share them with your team. Start building 
            automation in minutes with our visual workflow builder.
          </p>
          <div className="mt-8">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#D4A017] bg-[#0A1628] rounded-lg hover:bg-[#0A1628]/90 transition-colors"
            >
              Get Started Free
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
