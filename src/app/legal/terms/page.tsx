import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Krovos",
  description: "Krovos Terms of Service - Terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16 bg-[#0A1628] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-white/70">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Krovos Inc.&apos;s website and services, you accept and agree to be bound 
              by the terms and provision of this agreement. If you do not agree to abide by these terms, 
              please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Description of Service</h2>
            <p>
              Krovos provides enterprise AI automation solutions, including but not limited to workflow automation, 
              AI-powered analytics, cloud migration services, and related consulting services (the &quot;Services&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. User Accounts</h2>
            <p className="mb-4">When you create an account, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly update any changes to your information</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Payment Terms</h2>
            <p className="mb-4">For paid services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fees are billed in advance on a monthly or annual basis</li>
              <li>All fees are non-refundable unless otherwise specified</li>
              <li>You authorize us to charge your payment method for all fees</li>
              <li>Prices are subject to change with 30 days notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Acceptable Use</h2>
            <p className="mb-4">You agree not to use the Services to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit harmful, threatening, or offensive content</li>
              <li>Attempt to gain unauthorized access to systems</li>
              <li>Distribute malware or other malicious code</li>
              <li>Interfere with the proper operation of the Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Intellectual Property</h2>
            <p>
              The Services and all content, features, and functionality are owned by Krovos Inc. and are 
              protected by copyright, trademark, and other intellectual property laws. You may not 
              copy, modify, distribute, sell, or lease any part of our Services without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
            <p>
              In no event shall Krovos be liable for any indirect, incidental, special, consequential, or 
              punitive damages, including without limitation, loss of profits, data, use, goodwill, or 
              other intangible losses, resulting from your use of the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Disclaimer of Warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. KROVOS 
              MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, REGARDING THE 
              COMPLETENESS, ACCURACY, OR RELIABILITY OF THE SERVICES.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Krovos and its officers, directors, employees, 
              agents, and affiliates from any claim, demand, or damage, including reasonable attorneys&apos; fees, 
              arising out of your use of the Services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">10. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Services immediately, without 
              prior notice or liability, for any reason, including breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of 
              California, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of 
              material changes by posting the new Terms on this page and updating the &quot;last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">13. Contact Information</h2>
            <p>
              Questions about these Terms should be sent to:
            </p>
            <div className="mt-4 p-4 bg-[#0D2040] rounded-lg">
              <p className="text-white">Krovos Inc.</p>
              <p className="text-white/60">123 Innovation Drive</p>
              <p className="text-white/60">San Francisco, CA 94102</p>
              <p className="text-white/60 mt-2">Email: legal@krovos.com</p>
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
