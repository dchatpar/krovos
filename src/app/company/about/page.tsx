import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About - Krovos",
  description: "Krovos is a technology services company based in Surrey, BC. We deliver AI & Automation, Custom Software, Digital Marketing, Managed IT, Talent Solutions, and Logistics Tech.",
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
  { year: "2023", event: "Krovos founded in Surrey, BC with a vision to deliver practical technology services to local and regional clients", milestone: true },
  { year: "2024", event: "Service portfolio expanded to cover AI & Automation, Custom Software, Digital Marketing, Managed IT, Talent Solutions, and Logistics Tech", milestone: false },
  { year: "2025", event: "Fixed-price engagement model introduced to give clients predictable project costs", milestone: true },
  { year: "2026", event: "Team growth in Surrey, BC as we continue to invest in Canadian delivery", milestone: false },
];

const stats = [
  { value: "6", label: "Service Areas", description: "From AI automation to logistics tech" },
  { value: "1", label: "Headquarters", description: "Surrey, BC, Canada" },
  { value: "Fixed-Price", label: "Engagement Model", description: "Predictable project costs" },
  { value: "Direct", label: "Communication", description: "Talk to the people doing the work" },
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
              Practical <span className="text-[#D4A017]">Technology</span> Services
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-[#CBD5E1] leading-relaxed max-w-2xl">
              Krovos is a technology services company based in Surrey, BC. We deliver AI &amp; Automation, Custom Software, Digital Marketing, Managed IT, Talent Solutions, and Logistics Tech.
            </p>
            <p className="text-[#94A3B8] mt-4 text-lg lg:text-xl max-w-2xl">
              Our focus is helping small and mid-sized teams get practical technology work done — without the enterprise overhead.
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
                <div className="text-[#94A3B8] text-base lg:text-lg mt-1">{stat.description}</div>
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
              <div className="space-y-4 text-[#CBD5E1] leading-relaxed">
                <p>
                  At Krovos, our focus is helping small and mid-sized teams
                  deliver practical technology projects on time and on budget.
                </p>
                <p>
                  We work across AI &amp; Automation, Custom Software, Digital
                  Marketing, Managed IT, Talent Solutions, and Logistics Tech.
                  Each engagement is scoped and priced up front, with direct
                  communication throughout.
                </p>
                <p>
                  Based in Surrey, BC, Krovos brings together the people doing
                  the work to solve the technology problems our clients face
                  every day.
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
              <div className="space-y-4 text-[#CBD5E1] leading-relaxed">
                <p>
                  We want to make it easier for small and mid-sized teams to
                  access the same quality of technology services that
                  larger enterprises take for granted — without the enterprise
                  pricing, sales cycles, or hand-offs to junior staff.
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
                    <span className="text-white/80">Security controls scoped to each engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">Integration work scoped to the systems our clients actually use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">Reliability targets agreed per engagement, not blanket claims</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">Direct communication with the team doing the work</span>
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
            <p className="text-[#94A3B8] mt-4 text-base lg:text-lg max-w-2xl mx-auto">
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
                <p className="text-[#94A3B8] text-base lg:text-lg mt-2 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-[#0D2040]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Location</h2>
            <p className="text-[#CBD5E1] leading-relaxed text-lg">
              Krovos Inc. is headquartered in Surrey, British Columbia, Canada.
            </p>
            <div className="mt-8 inline-flex flex-col items-center gap-4 bg-[#0A1628] border border-[#D4A017]/10 rounded-2xl px-6 py-4">
                          <div className="inline-flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-[#D4A017]/10 flex items-center justify-center">
                              <span className="text-[#D4A017] font-bold">CA</span>
                            </div>
                            <div className="text-left">
                              <div className="text-white font-medium">Surrey, BC</div>
                              <div className="text-[#94A3B8] text-sm">Headquarters — Canada</div>
                            </div>
                          </div>
                          <a
                            href="tel:+14378605694"
                            className="inline-flex items-center gap-2 text-[#D4A017] hover:text-[#F0C040] transition-colors font-medium"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +1 (437) 860-5694
                          </a>
                        </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Our Journey</h2>
            <p className="text-[#94A3B8] mt-4 text-base lg:text-lg">A short timeline of how we got here</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#D4A017]/20" />
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between mb-8 last:mb-0">
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "ml-auto pl-8"}`}>
                  <div className={`text-sm font-semibold ${item.milestone ? "text-[#D4A017]" : "text-[#475569]"}`}>
                    {item.year}
                  </div>
                  <div className="text-white/80 text-base lg:text-lg mt-1">{item.event}</div>
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
            See Open Roles
          </h2>
          <p className="mt-4 text-[#0A1628]/70 text-lg max-w-2xl mx-auto">
            We hire for roles as we grow. If your background fits one of our
            service areas, we&apos;d like to hear from you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#D4A017] bg-[#0A1628] rounded-full hover:bg-[#0A1628]/90 transition-colors"
            >
              Get in Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#0A1628] bg-white rounded-full hover:bg-white/90 transition-colors"
            >
              See Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
