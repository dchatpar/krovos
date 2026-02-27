import Link from "next/link";

export const metadata = {
  title: "Workflow Orchestration - Krovos",
  description: "Visual workflow builder for complex automation pipelines. Design, test, and deploy multi-step workflows with ease.",
};

export default function OrchestrationPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Visual <span className="gradient-text">workflow orchestration</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Design complex multi-step automation pipelines with our drag-and-drop
              visual builder. No coding required.
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Build workflows in minutes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Drag & drop</h3>
              <p className="mt-2 text-slate-600">Build workflows with our visual editor</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Connect apps</h3>
              <p className="mt-2 text-slate-600">Link 500+ integrations together</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Deploy</h3>
              <p className="mt-2 text-slate-600">Activate with one click</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to build?</h2>
          <p className="mt-4 text-lg text-slate-300">Start creating workflows today.</p>
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
