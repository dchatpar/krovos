"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

// Social link component
const SocialLink = ({ icon, label, href, delay = 0 }: { icon: React.ReactNode; label: string; href: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group flex items-center gap-4 p-6 rounded-2xl bg-[#0A1628]-mid border border-[rgba(212,160,23,0.1)] hover:border-[rgba(212,160,23,0.4)] hover:bg-[#0A1628]-light transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(212,160,23,0.15)] to-[rgba(212,160,23,0.05)] flex items-center justify-center group-hover:from-[#D4A017] group-hover:to-[#F0C040] transition-all duration-300">
        <div className="text-[#D4A017] group-hover:text-[#0A1628] transition-colors duration-300">
          {icon}
        </div>
      </div>
      <div>
        <span className="block text-white font-semibold">{label}</span>
        <span className="text-sm text-[#94A3B8] group-hover:text-[#D4A017] transition-colors">Follow us</span>
      </div>
      <motion.svg
        className="w-5 h-5 text-[#D4A017] ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </motion.svg>
    </motion.a>
  );
};
const SectionWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Contact card component
const ContactMethodCard = ({ icon, title, description, detail, delay = 0 }: { icon: string; title: string; description: string; detail: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative p-6 lg:p-8 rounded-2xl bg-[#0A1628]-mid border border-[rgba(212,160,23,0.1)] hover:border-[rgba(212,160,23,0.4)] transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,160,23,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center mb-6 shadow-lg shadow-[rgba(212,160,23,0.3)]">
          <svg className="w-7 h-7 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-[#94A3B8] mb-4">{description}</p>
        <a
          href={detail.startsWith('http') ? detail : `mailto:${detail}`}
          className="text-[#D4A017] font-medium hover:underline"
        >
          {detail}
        </a>
      </div>
    </motion.div>
  );
};

// Office location component
const OfficeCard = ({ city, country, address, phone, email, timezone, delay = 0 }: { city: string; country: string; address: string; phone: string; email: string; timezone: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative p-8 rounded-2xl bg-[#0A1628]-mid border border-[rgba(212,160,23,0.1)] hover:border-[rgba(212,160,23,0.4)] transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,160,23,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center mb-6 shadow-lg shadow-[rgba(212,160,23,0.3)]">
          <svg className="w-7 h-7 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{city}</h3>
        <p className="text-[#D4A017] font-medium mb-6">{country}</p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#D4A017] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span className="text-[#94A3B8] text-sm">{address}</span>
          </div>

          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#D4A017] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href={`tel:${phone}`} className="text-[#94A3B8] text-sm hover:text-[#D4A017] transition-colors">
              {phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#D4A017] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href={`mailto:${email}`} className="text-[#94A3B8] text-sm hover:text-[#D4A017] transition-colors">
              {email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#D4A017] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[#94A3B8] text-sm">{timezone}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Form input component
const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  rows = 4
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-white mb-2">
        {label}
        {required && <span className="text-[#D4A017] ml-1">*</span>}
      </label>
      {rows > 1 ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl bg-[#0A1628]-light border border-[rgba(212,160,23,0.2)] text-white placeholder-[#64748B] focus:border-[#D4A017] focus:ring-2 focus:ring-[rgba(212,160,23,0.2)] transition-all resize-none"
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl bg-[#0A1628]-light border border-[rgba(212,160,23,0.2)] text-white placeholder-[#64748B] focus:border-[#D4A017] focus:ring-2 focus:ring-[rgba(212,160,23,0.2)] transition-all"
        />
      )}
    </div>
  );
};

// FAQ item component
const FAQItem = ({ question, answer, delay = 0 }: { question: string; answer: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="border-b border-[rgba(212,160,23,0.1)]"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-5 text-[#D4A017] flex-shrink-0 ml-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-[#94A3B8] pb-6">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Main Contact Page Component
export default function ContactPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // FAQ data
  const faqItems = [
    {
      question: "What are your typical response times?",
      answer: "We typically respond to all inquiries within 24 business hours. For urgent matters, please mention this in your message and we will prioritize your request."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer complimentary initial consultations for all potential clients. This allows us to understand your needs and propose the best solutions for your business."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve a wide range of industries including finance, healthcare, retail, logistics, real estate, events, and hospitality. Our team has deep expertise in enterprise digital transformation."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely. We specialize in integrating with existing infrastructure and platforms. Our team will assess your current setup and recommend solutions that work seamlessly with your systems."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. Small projects typically take 4-8 weeks, while enterprise transformations can take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages for all our solutions. This includes regular updates, security patches, performance monitoring, and dedicated support channels."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[#0A1628]" />
        <div className="absolute inset-0 bg-grid bg-dots opacity-30" />

        {/* Floating elements */}
        <motion.div style={{ y: heroY }} className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#D4A017]/10 to-transparent blur-3xl" />
        <motion.div style={{ y: heroY }} className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#0E7C7B]/10 to-transparent blur-3xl" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.3)] text-[#D4A017] text-sm font-medium mb-6">
              Contact Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Let&apos;s Build Something
            <span className="block text-gradient-gold mt-2">Extraordinary</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl lg:text-2xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Ready to transform your business with cutting-edge technology?
            Our team is here to help you every step of the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#contact-form" className="px-8 py-3 bg-gradient-to-r from-[#D4A017] to-[#F0C040] text-[#0A1628] font-semibold rounded-full hover:shadow-lg hover:shadow-[#D4A017]/30 hover:scale-105 transition-all text-lg px-8 py-4">
              Send a Message
            </a>
            <a href="#offices" className="px-8 py-3 border-2 border-[#D4A017] text-[#D4A017] font-semibold rounded-full hover:bg-[#D4A017] hover:text-[#0A1628] transition-all text-lg px-8 py-4">
              Visit Our Offices
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-[rgba(212,160,23,0.5)] flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [1, 0.5, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-[#D4A017]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-[#0A1628]-light" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="grid md:grid-cols-3 gap-6">
              <ContactMethodCard
                icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                title="Email Us"
                description="Send us an email anytime. We respond within 24 hours."
                detail="contact@krovos.com"
                delay={0}
              />
              <ContactMethodCard
                icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                title="Call Us"
                description="Speak directly with our team during business hours."
                detail="+1 (604) 555-0100"
                delay={0.1}
              />
              <ContactMethodCard
                icon="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                title="Live Chat"
                description="Chat with us in real-time for quick answers."
                detail="Start a conversation"
                delay={0.2}
              />
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-mesh-teal opacity-50" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="text-center mb-12">
              <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Get in Touch</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">Send Us a Message</h2>
              <p className="text-[#94A3B8] mt-4 text-lg max-w-2xl mx-auto">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="p-8 lg:p-12 rounded-3xl bg-[#0A1628]-mid border border-[rgba(212,160,23,0.15)]">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-[#94A3B8] mb-6">Thank you for reaching out. We will get back to you within 24 hours.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3 border-2 border-[#D4A017] text-[#D4A017] font-semibold rounded-full hover:bg-[#D4A017] hover:text-[#0A1628] transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormInput
                        label="Your Name"
                        name="name"
                        placeholder="John Smith"
                        required
                      />
                      <FormInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <FormInput
                      label="Company Name"
                      name="company"
                      placeholder="Acme Corporation"
                    />
                    <FormInput
                      label="Your Message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      required
                      rows={5}
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-3 bg-gradient-to-r from-[#D4A017] to-[#F0C040] text-[#0A1628] font-semibold rounded-full hover:shadow-lg hover:shadow-[#D4A017]/30 hover:scale-105 transition-all text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-[#64748B] text-sm">
                      By submitting this form, you agree to our{" "}
                      <Link href="/privacy" className="text-[#D4A017] hover:underline">Privacy Policy</Link>.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Global Offices Section */}
      <section id="offices" className="py-24 lg:py-32 relative bg-[#0A1628]-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Global Presence</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">Our Offices Worldwide</h2>
              <p className="text-[#94A3B8] mt-4 text-lg max-w-2xl mx-auto">
                Visit one of our offices around the world. We are here to serve you globally.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <OfficeCard
                city="Vancouver"
                country="Canada (Headquarters)"
                address="1000-500 Granville Street, Vancouver, BC V6C 1S4"
                phone="+1 (604) 555-0100"
                email="vancouver@krovos.com"
                timezone="PST (UTC-8)"
                delay={0}
              />
              <OfficeCard
                city="Dubai"
                country="United Arab Emirates"
                address="Level 42, Emirates Tower, Sheikh Zayed Road, Dubai"
                phone="+971 4 555 0200"
                email="dubai@krovos.com"
                timezone="GST (UTC+4)"
                delay={0.15}
              />
              <OfficeCard
                city="Mumbai"
                country="India"
                address="Level 8, One BKC, G Block, Bandra Kurla Complex, Mumbai 400051"
                phone="+91 22 5555 0300"
                email="mumbai@krovos.com"
                timezone="IST (UTC+5:30)"
                delay={0.3}
              />
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-mesh-gold opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Global Reach</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
                  Serving Clients Across the Globe
                </h2>
                <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
                  With offices in North America, Middle East, and Asia, we provide round-the-clock
                  support to enterprise clients across 11 countries. Our distributed team ensures
                  you always have access to the expertise you need, when you need it.
                </p>

                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "11", label: "Countries" },
                    { value: "200+", label: "Enterprise Clients" },
                    { value: "24/7", label: "Support Available" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl lg:text-4xl font-bold text-gradient-gold mb-1">{stat.value}</div>
                      <div className="text-[#94A3B8] text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#0A1628] to-[#0F2137] border border-[rgba(212,160,23,0.2)] p-8 overflow-hidden">
                  {/* Simplified world map visualization */}
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        {/* Location markers */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5, type: "spring" }}
                          className="absolute top-1/3 left-1/4"
                        >
                          <div className="w-4 h-4 rounded-full bg-[#D4A017] shadow-[0_0_20px_rgba(212,160,23,0.6)]">
                            <motion.div
                              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute inset-0 rounded-full bg-[#D4A017]"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.7, type: "spring" }}
                          className="absolute top-1/4 right-1/3"
                        >
                          <div className="w-4 h-4 rounded-full bg-[#0E7C7B] shadow-[0_0_20px_rgba(14,124,123,0.6)]">
                            <motion.div
                              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                              className="absolute inset-0 rounded-full bg-[#0E7C7B]"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.9, type: "spring" }}
                          className="absolute bottom-1/3 left-1/2"
                        >
                          <div className="w-4 h-4 rounded-full bg-[#1B6CA8] shadow-[0_0_20px_rgba(27,108,168,0.6)]">
                            <motion.div
                              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                              className="absolute inset-0 rounded-full bg-[#1B6CA8]"
                            />
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Connection lines (simplified) */}
                    <svg className="absolute inset-0 w-full h-full opacity-20">
                      <line x1="25%" y1="33%" x2="67%" y2="25%" stroke="#D4A017" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="67%" y1="25%" x2="50%" y2="67%" stroke="#0E7C7B" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="50%" y1="67%" x2="25%" y2="33%" stroke="#1B6CA8" strokeWidth="1" strokeDasharray="4 4" />
                    </svg>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#D4A017]/20 to-transparent blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-br from-[#0E7C7B]/20 to-transparent blur-2xl" />
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-mesh-teal opacity-30" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="text-center mb-12">
              <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Stay Connected</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">Connect With Us</h2>
              <p className="text-[#94A3B8] mt-4 text-lg max-w-2xl mx-auto">
                Follow us on social media for the latest updates, insights, and industry news.
              </p>
            </div>

            {/* Bento Grid for Social Links */}
            <div className="bento-grid">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bento-item bento-item-wide group cursor-pointer"
              >
                <a href="https://linkedin.com/company/krovos" target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0077B5] to-[#00A0DC] flex items-center justify-center shadow-lg shadow-[#0077B5]/30">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <motion.svg
                      className="w-6 h-6 text-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </motion.svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">LinkedIn</h3>
                  <p className="text-[#94A3B8] mb-4">Connect with our professional network</p>
                  <div className="flex items-center gap-2 text-sm text-[#0077B5] font-medium">
                    <span>12,500+ followers</span>
                    <span className="w-1 h-1 rounded-full bg-[#0077B5]" />
                    <span>Join network</span>
                  </div>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bento-item group cursor-pointer"
              >
                <a href="https://twitter.com/krovos" target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1DA1F2] to-[#0D8BD9] flex items-center justify-center mb-6 shadow-lg shadow-[#1DA1F2]/30">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">X (Twitter)</h3>
                  <p className="text-[#94A3B8] text-sm">Latest updates & announcements</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-[#1DA1F2] font-medium">
                    <span>8,200+ followers</span>
                  </div>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bento-item group cursor-pointer"
              >
                <a href="https://github.com/krovos" target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#333] to-[#1a1a1a] flex items-center justify-center mb-6 shadow-lg shadow-gray-500/30">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
                  <p className="text-[#94A3B8] text-sm">Explore our open source projects</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-400 font-medium">
                    <span>150+ repositories</span>
                  </div>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bento-item group cursor-pointer"
              >
                <a href="https://youtube.com/@krovos" target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF0000] to-[#CC0000] flex items-center justify-center mb-6 shadow-lg shadow-red-500/30">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">YouTube</h3>
                  <p className="text-[#94A3B8] text-sm">Tutorials & product demos</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-red-500 font-medium">
                    <span>5,000+ subscribers</span>
                  </div>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bento-item group cursor-pointer"
              >
                <a href="https://instagram.com/krovos" target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
                  <p className="text-[#94A3B8] text-sm">Behind the scenes & culture</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-purple-500 font-medium">
                    <span>3,800+ followers</span>
                  </div>
                </a>
              </motion.div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 relative bg-[#0A1628]-light">
        <div className="max-w-3xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-12">
              <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">FAQ</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-0">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1628]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#D4A017]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#0E7C7B]/20 to-transparent blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <SectionWrapper>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto">
              Let us help you transform your business with innovative technology solutions.
              Reach out today and start your journey with Krovos.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact-form" className="px-8 py-3 bg-gradient-to-r from-[#D4A017] to-[#F0C040] text-[#0A1628] font-semibold rounded-full hover:shadow-lg hover:shadow-[#D4A017]/30 hover:scale-105 transition-all text-lg px-8 py-4">
                Contact Us Now
              </a>
              <Link href="/demo" className="px-8 py-3 border-2 border-[#D4A017] text-[#D4A017] font-semibold rounded-full hover:bg-[#D4A017] hover:text-[#0A1628] transition-all text-lg px-8 py-4">
                Request a Demo
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
