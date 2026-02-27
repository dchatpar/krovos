export const metadata = {
  title: "Book a Demo - Krovos",
  description: "Schedule a personalized demo of the Krovos AI automation platform.",
};

export default function DemoPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-20 lg:py-32">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900">Book a demo</h1>
            <p className="mt-4 text-lg text-slate-600">
              See how Krovos can transform your workflows. Schedule a personalized demo with our team.
            </p>
          </div>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">First name</label>
                <input type="text" id="firstName" className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="John" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">Last name</label>
                <input type="text" id="lastName" className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Work email</label>
              <input type="email" id="email" className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company</label>
              <input type="text" id="company" className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="Acme Inc." />
            </div>
            <div>
              <label htmlFor="employees" className="block text-sm font-medium text-slate-700">Company size</label>
              <select id="employees" className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
                <option>201-500</option>
                <option>500+</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">What would you like to see?</label>
              <textarea id="message" rows={4} className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="Tell us about your use case..." />
            </div>
            <button type="submit" className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              Schedule demo
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
