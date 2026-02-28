import Link from "next/link";

export const metadata = {
  title: "Cookie Policy - Krovos",
  description: "Krovos Cookie Policy - How we use cookies and similar tracking technologies.",
};

export default function CookiesPage() {
  return (
    <div className="pt-24 pb-16 bg-[#0A1628] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
        
        <div className="space-y-8 text-white/70">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
              <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Types of Cookies We Use</h2>
            
            <div className="mt-6 space-y-6">
              <div className="p-4 bg-[#0D2040] rounded-lg">
                <h3 className="text-white font-medium mb-2">Essential Cookies</h3>
                <p className="text-sm text-white/60">
                  These cookies are necessary for the website to function. They enable core features like security, 
                  network management, and accessibility. You cannot opt out of these cookies.
                </p>
              </div>

              <div className="p-4 bg-[#0D2040] rounded-lg">
                <h3 className="text-white font-medium mb-2">Analytics Cookies</h3>
                <p className="text-sm text-white/60">
                  These cookies help us understand how visitors interact with our website by collecting and 
                  reporting information anonymously. This helps us improve our site performance.
                </p>
              </div>

              <div className="p-4 bg-[#0D2040] rounded-lg">
                <h3 className="text-white font-medium mb-2">Marketing Cookies</h3>
                <p className="text-sm text-white/60">
                  These cookies may be set through our site by our advertising partners. They may be used to 
                  build a profile of your interests and show you relevant advertisements.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Cookie List</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-white">Cookie Name</th>
                    <th className="text-left py-3 text-white">Type</th>
                    <th className="text-left py-3 text-white">Purpose</th>
                    <th className="text-left py-3 text-white">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-white/60">
                  <tr className="border-b border-white/5">
                    <td className="py-3">session_id</td>
                    <td className="py-3">Essential</td>
                    <td className="py-3">User session management</td>
                    <td className="py-3">Session</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">csrf_token</td>
                    <td className="py-3">Essential</td>
                    <td className="py-3">Security protection</td>
                    <td className="py-3">Session</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">_ga</td>
                    <td className="py-3">Analytics</td>
                    <td className="py-3">Google Analytics tracking</td>
                    <td className="py-3">2 years</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">_gid</td>
                    <td className="py-3">Analytics</td>
                    <td className="py-3">Google Analytics tracking</td>
                    <td className="py-3">24 hours</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">preferences</td>
                    <td className="py-3">Functional</td>
                    <td className="py-3">User preferences storage</td>
                    <td className="py-3">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Managing Cookies</h2>
            <p className="mb-4">
              You can manage your cookie preferences through your browser settings. Here are links to 
              cookie management instructions for popular browsers:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#D4A017] hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[#D4A017] hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#D4A017] hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29a" target="_blank" rel="noopener noreferrer" className="text-[#D4A017] hover:underline">Microsoft Edge</a></li>
            </ul>
            <p className="mt-4">
              Please note that blocking some cookies may impact your experience and limit available features on our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third-party services that appear on our pages. We do not control 
              these cookies. We recommend reviewing the privacy policies of these third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any changes by 
              posting the new Cookie Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-[#0D2040] rounded-lg">
              <p className="text-white">Email: privacy@krovos.com</p>
            </div>
          </section>

          <p className="text-white/40 text-sm mt-12">
            Last updated: February 2026
          </p>
        </div>
      </div>
    </div>
  );
}
