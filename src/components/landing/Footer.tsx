"use client";

import Link from "next/link";
import { useState } from "react";

const companyLinks = [
  { name: "About Us", href: "/company/about" },
  { name: "Careers", href: "/company/careers" },
];

const servicesLinks = [
  { name: "AI & Automation", href: "/services/ai-automation" },
  { name: "Custom Software", href: "/services/custom-software" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Managed IT", href: "/services/managed-it" },
  { name: "Talent Solutions", href: "/services/talent-solutions" },
  { name: "Logistics Tech", href: "/services/logistics" },
];

const contactInfo = {
  address: "13428 105 Ave Suite 1410",
  city: "Surrey, BC V3T 0S6",
  email: "info@krovos.ca",
  phone: "+1 (437) 860-5694",
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer
      aria-labelledby="footer-heading"
      className="bg-[#0A1628] border-t border-[#D4A017]/20"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column - Logo, Description, Social, Newsletter */}
          <section
            aria-labelledby="footer-brand"
            className="lg:col-span-2 md:col-span-2"
          >
            <h3 id="footer-brand" className="sr-only">
              About Krovos
            </h3>
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4A017] via-[#F0C040] to-[#0E7C7B] flex items-center justify-center shadow-lg shadow-[#D4A017]/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <span className="text-xl font-bold text-white">Krovos</span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-md">
              Enterprise technology holding company delivering innovative solutions across AI, software, marketing, and IT services.
            </p>

            {/* Social Icons - bright on dark */}
            <div className="flex items-center space-x-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 text-white hover:bg-[#0A66C2] hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 text-white hover:bg-black hover:text-white transition-all"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 text-white hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 text-white hover:bg-[#FF0000] hover:text-white transition-all"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8 max-w-sm">
              <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                Newsletter
              </h3>
              {isSubscribed ? (
                <div
                  role="status"
                  className="flex items-center space-x-2 text-[#F0C040] py-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium">Thanks for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <label htmlFor="footer-newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com — get monthly insights"
                    className="w-full px-4 py-2.5 bg-white/10 border border-white/15 rounded-lg text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] transition-all"
                    required
                    aria-label="Email address for newsletter"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2.5 text-sm font-semibold text-[#0A1628] bg-gradient-to-r from-[#D4A017] to-[#F0C040] rounded-lg hover:shadow-lg hover:shadow-[#D4A017]/30 hover:scale-[1.02] transition-all"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* Company Column */}
          <nav aria-labelledby="footer-company">
            <h3
              id="footer-company"
              className="text-sm font-semibold text-white uppercase tracking-wider mb-4"
            >
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-[#D4A017] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services Column */}
          <nav aria-labelledby="footer-services">
            <h3
              id="footer-services"
              className="text-sm font-semibold text-white uppercase tracking-wider mb-4"
            >
              Services
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-[#D4A017] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact Section */}
        <section
          aria-labelledby="footer-contact"
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <address className="not-italic">
              <h3
                id="footer-contact"
                className="text-sm font-semibold text-white uppercase tracking-wider mb-4"
              >
                Contact
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <span className="block text-white font-medium">Headquarters</span>
                  {contactInfo.address}
                  <br />
                  {contactInfo.city}
                </li>
              </ul>
            </address>

            <div>
              <h3 className="sr-only">Reach us</h3>
              <ul className="space-y-3 text-sm text-white/70 md:mt-[3.25rem]">
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center gap-2 hover:text-[#D4A017] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6m-18 0V18a2 2 0 002 2h14a2 2 0 002-2V8m-18 0a2 2 0 012-2h14a2 2 0 012 2" />
                    </svg>
                    {contactInfo.email}
                  </a>
                </li>
                {contactInfo.phone && (
                  <li>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                      className="inline-flex items-center gap-2 hover:text-[#D4A017] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3l2 5-2.5 1.5a11 11 0 005 5L8 17l-5 2H3a2 2 0 01-2-2V5z" />
                      </svg>
                      {contactInfo.phone}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="md:text-right md:self-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-full text-[#0A1628] bg-gradient-to-r from-[#D4A017] via-[#F0C040] to-[#D4A017] hover:shadow-lg hover:shadow-[#D4A017]/30 hover:scale-[1.03] transition-all"
              >
                Get in Touch
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} Krovos Inc. All rights reserved.
            </p>
            <nav aria-label="Legal">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <li>
                  <Link
                    href="/legal/privacy"
                    className="text-sm text-white/50 hover:text-[#D4A017] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/terms"
                    className="text-sm text-white/50 hover:text-[#D4A017] transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/cookies"
                    className="text-sm text-white/50 hover:text-[#D4A017] transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
