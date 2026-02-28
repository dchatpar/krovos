import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Krovos",
  description: "Krovos Privacy Policy - How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16 bg-[#0A1628] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-white/70">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                At Krovos Inc. (&quot;Krovos,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we take your privacy seriously. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website, use our platform, or interact with our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Register for an account</li>
                <li>Use our platform or services</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact our support team</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="mt-4">This information may include your name, email address, phone number, job title, company name, and payment information.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative information, such as updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and provide customer service</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties except 
                in the following circumstances: to trusted third parties who assist us in operating our website, 
                conducting our business, or servicing you, so long as those parties agree to keep this 
                information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. We use industry-standard 
                encryption for data in transit and at rest.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing your personal information</li>
                <li>Request transfer of your personal information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain 
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites, services, or applications that are not 
                operated by us. We have no control over and assume no responsibility for their content, privacy 
                policies, or practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">9. Children&apos;s Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the &quot;last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-[#0D2040] rounded-lg">
                <p className="text-white">Krovos Inc.</p>
                <p className="text-white/60">123 Innovation Drive</p>
                <p className="text-white/60">San Francisco, CA 94102</p>
                <p className="text-white/60 mt-2">Email: privacy@krovos.com</p>
              </div>
            </section>

            <p className="text-white/40 text-sm mt-12">
              Last updated: February 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
