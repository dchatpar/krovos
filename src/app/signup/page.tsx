import Link from "next/link";

export const metadata = {
  title: "Sign Up - Krovos",
  description: "Create your free Krovos account and start automating workflows today.",
};

export default function SignupPage() {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen flex items-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-slate-900">Create your account</h1>
          <p className="mt-2 text-slate-600">Start automating for free. No credit card required.</p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Work email</label>
            <input type="email" id="email" className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="you@company.com" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
            <input type="password" id="password" className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="Create a password" />
          </div>
          <button type="submit" className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
            Create account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-600 font-medium hover:text-indigo-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
