import Link from "next/link";

export const metadata = {
  title: "Security - Krovos",
  description: "Enterprise-grade security at Krovos. SOC 2 Type II, encryption, SSO, and more.",
};

const features = [
  {
    title: "Encryption",
    items: ["TLS 1.3 in transit", "AES-256 at rest", "Customer-managed keys"],
  },
  {
    title: "Access Control",
    items: ["SSO/SAML", "Role-based access", "MFA support"],
  },
  {
    title: "Compliance",
    items: ["SOC 2 Type II", "GDPR", "HIPAA ready"],
  },
  {
    title: "Monitoring",
    items: ["24/7 monitoring", "Intrusion detection", "Incident response"],
  },
];

export default function SecurityPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              <span className="gradient-text">Security</span> first
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Enterprise-grade security built into every layer of the Krovos platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-slate-200 bg-white">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, iIndex) => (
                    <li key={iIndex} className="flex items-center text-sm text-slate-600">
                      <svg className="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Questions about security?</h2>
          <p className="mt-4 text-slate-600">Contact our security team for more details.</p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              Contact security
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
