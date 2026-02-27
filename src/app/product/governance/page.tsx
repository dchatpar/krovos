import Link from "next/link";

export const metadata = {
  title: "Governance & Guardrails - Krovos",
  description: "Enterprise-grade governance with approvals, permissions, and audit trails. Ensure compliance while empowering automation.",
};

export default function GovernancePage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Enterprise <span className="gradient-text">governance</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Built-in controls for approvals, permissions, and audit trails.
              Automate with confidence while maintaining compliance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup" className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
                Start free
              </Link>
              <Link href="/demo" className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
                Book demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Approvals", desc: "Require human approval for sensitive actions" },
              { title: "RBAC", desc: "Fine-grained role-based access control" },
              { title: "Audit Logs", desc: "Complete audit trail of all actions" },
              { title: "Policy Engine", desc: "Enforce business rules automatically" },
              { title: "Data Residency", desc: "Control where data is stored" },
              { title: "Compliance Reports", desc: "Generate compliance reports on demand" },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl border border-slate-200 bg-white">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to automate safely?</h2>
          <p className="mt-4 text-lg text-slate-300">Start with enterprise-grade governance today.</p>
          <div className="mt-8">
            <Link href="/signup" className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              Start free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
