import Link from "next/link";

export const metadata = {
  title: "Webinars - Krovos",
  description: "Watch webinars on AI automation, enterprise technology, and digital transformation. Live and on-demand sessions.",
};

const webinars = [
  {
    title: "The Future of AI in Enterprise",
    date: "March 15, 2026",
    time: "2:00 PM EST",
    speaker: "Sarah Chen, CEO",
    type: "Live",
    thumbnail: "AI",
  },
  {
    title: "Zero Trust Security Implementation",
    date: "March 10, 2026",
    time: "1:00 PM EST",
    speaker: "David Kim, CISO",
    type: "On-Demand",
    thumbnail: "SEC",
  },
  {
    title: "Cloud Migration Best Practices",
    date: "March 5, 2026",
    time: "3:00 PM EST",
    speaker: "James Thompson, VP Engineering",
    type: "On-Demand",
    thumbnail: "CLD",
  },
  {
    title: "Automation in Financial Services",
    date: "February 28, 2026",
    time: "2:00 PM EST",
    speaker: "Marcus Rodriguez, CTO",
    type: "On-Demand",
    thumbnail: "FIN",
  },
  {
    title: "Building AI-Powered Products",
    date: "February 20, 2026",
    time: "1:00 PM EST",
    speaker: "Priya Sharma, CPO",
    type: "On-Demand",
    thumbnail: "PRD",
  },
  {
    title: "Scaling Enterprise Automation",
    date: "February 15, 2026",
    time: "2:00 PM EST",
    speaker: "Emily Watson, COO",
    type: "On-Demand",
    thumbnail: "SCL",
  },
];

const upcomingWebinars = [
  {
    title: "Enterprise AI Implementation Strategies",
    date: "March 15, 2026",
    time: "2:00 PM EST",
    speaker: "Sarah Chen, CEO",
    description: "Learn strategies for successfully implementing AI in enterprise environments.",
  },
  {
    title: "Security Best Practices for 2026",
    date: "March 22, 2026",
    time: "1:00 PM EST",
    speaker: "David Kim, CISO",
    description: "Stay ahead of emerging security threats with proactive strategies.",
  },
];

export default function WebinarsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1F35] to-[#0A1628]" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0E7C7B]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#D4A017]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              <span className="text-[#0E7C7B]">Webinars</span> & Events
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Watch expert-led sessions on AI automation, security, cloud, and enterprise transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Upcoming Webinars</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingWebinars.map((webinar, index) => (
              <div
                key={index}
                className="bg-[#0D2040] border border-[#0E7C7B]/20 rounded-2xl p-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#0E7C7B]/20 text-[#0E7C7B] text-xs font-medium rounded-full">
                    Upcoming
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{webinar.title}</h3>
                <p className="mt-2 text-white/60">{webinar.description}</p>
                <div className="mt-4 flex items-center gap-4 text-white/40 text-sm">
                  <span>{webinar.date}</span>
                  <span>|</span>
                  <span>{webinar.time}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-white/60 text-sm">{webinar.speaker}</span>
                </div>
                <Link
                  href="/signup"
                  className="mt-6 inline-flex items-center justify-center w-full py-3 bg-[#0E7C7B] text-white font-semibold rounded-lg hover:bg-[#0E7C7B]/90 transition-colors"
                >
                  Register Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On Demand */}
      <section className="py-16 bg-[#0D2040]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">On-Demand Webinars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinars.map((webinar, index) => (
              <div
                key={index}
                className="bg-[#0A1628] border border-white/10 rounded-2xl overflow-hidden hover:border-[#0E7C7B]/30 transition-all"
              >
                <div className="h-32 bg-gradient-to-br from-[#0E7C7B]/20 to-[#D4A017]/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/20">{webinar.thumbnail}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      webinar.type === "Live" 
                        ? "bg-red-500/20 text-red-400" 
                        : "bg-white/5 text-white/40"
                    }`}>
                      {webinar.type}
                    </span>
                    <span className="text-white/30 text-xs">{webinar.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{webinar.title}</h3>
                  <p className="mt-2 text-white/50 text-sm">{webinar.speaker}</p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center text-[#0E7C7B] text-sm font-medium hover:underline"
                  >
                    Watch Now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16 bg-[#0A1628] border-t border-[#D4A017]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">Never Miss a Webinar</h2>
          <p className="mt-4 text-white/60">
            Subscribe to get notified about upcoming webinars and new on-demand content.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#0D2040] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#0E7C7B]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#0E7C7B] text-white font-semibold rounded-lg hover:bg-[#0E7C7B]/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
