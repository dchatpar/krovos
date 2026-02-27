import Link from "next/link";

export const metadata = {
  title: "Trust Center - Krovos",
  description: "Security, compliance, and privacy at Krovos. SOC 2 Type II certified, GDPR compliant, and committed to responsible AI.",
};

const security = [
  {
    title: "SOC 2 Type II",
    description: "Independently audited annually for security, availability, and confidentiality.",
  },
  {
    title: "GDPR Compliant",
    description: "Full compliance with EU General Data Protection Regulation requirements.",
  },
  {
    title: "End-to-End Encryption",
    description: "All data encrypted in transit (TLS 1.3) and at rest (AES-256).",
  },
  {
    title: "SSO & SAML",
    description: "Enterprise single sign-on with Okta, Azure AD, and Google Workspace.",
  },
  {
    title: "Role-Based Access",
    description: "Fine-grained permissions and audit trails for every action.",
  },
  {
    title: "99.9% Uptime SLA",
    description: "Enterprise-grade reliability with financial guarantees.",
  },
];

export default function TrustPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Security & <span className="gradient-text">trust</span> first
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Enterprise-grade security, compliance, and privacy. Your data is
              protected with the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Security Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {security.map((item, index) => (
              <div key={index} className="p-6 rounded-xl border border-slate-200 bg-white">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Compliance certifications</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["SOC 2", "GDPR", "HIPAA", "ISO 27001", "CCPA"].map((cert, index) => (
              <div key={index} className="px-6 py-3 rounded-lg bg-slate-100 text-slate-700 font-semibold">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Principles */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Responsible AI</h2>
          <p className="mt-4 text-lg text-slate-300">
            We&apos;re committed to building AI that is fair, transparent, and accountable.
            Read our AI principles.
          </p>
          <div className="mt-8">
            <Link href="/trust/ai-principles" className="inline-flex items-center text-indigo-400 font-medium hover:text-indigo-300">
              View AI principles
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
