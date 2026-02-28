import Link from "next/link";

export const metadata = {
  title: "Cybersecurity Solutions - Krovos",
  description: "Enterprise-grade cybersecurity solutions. Protect your business with AI-powered threat detection, incident response, and compliance management.",
};

const features = [
  {
    title: "AI Threat Detection",
    description: "Machine learning models detect threats in real-time, identifying attacks that traditional tools miss.",
  },
  {
    title: "Zero Trust Architecture",
    description: "Implement zero trust security with continuous verification and least-privilege access.",
  },
  {
    title: "24/7 SOC",
    description: "Round-the-clock security operations center with expert analysts monitoring your infrastructure.",
  },
  {
    title: "Compliance Management",
    description: "Stay compliant with SOC 2, HIPAA, GDPR, PCI-DSS, and more with automated controls.",
  },
];

const services = [
  { name: "Penetration Testing", description: "Identify vulnerabilities before attackers do" },
  { name: "Security Audits", description: "Comprehensive security assessments" },
  { name: "Incident Response", description: "Rapid breach containment and recovery" },
  { name: "Security Training", description: "Employee security awareness programs" },
];

const stats = [
  { value: "500+", label: "Protected Enterprises" },
  { value: "10M+", label: "Threats Blocked" },
  { value: "<15min", label: "Avg Response Time" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function SecurityPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1F35] to-[#0A1628]" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Enterprise <span className="text-red-400">Cybersecurity</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Protect your business with AI-powered security. From threat detection to incident response, 
              we secure your infrastructure 24/7.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
              >
                Get Security Assessment
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/product/security"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0D2040]/50 border-y border-red-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-red-400">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Comprehensive Security</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Enterprise-grade protection for modern businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-[#0D2040]/50 border border-red-500/10 rounded-2xl p-6 hover:border-red-500/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-white/50 text-sm mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#0D2040]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Security Services</h2>
            <p className="mt-4 text-white/60">Expert services to strengthen your security posture</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-[#0A1628] border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                <p className="text-white/50 text-sm mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Secure Your Business Today
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Get a free security assessment and discover your vulnerabilities.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-red-600 bg-white rounded-lg hover:bg-white/90 transition-colors"
            >
              Get Free Assessment
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
