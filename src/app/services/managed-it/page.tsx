"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// FAQ Accordion Component
const FAQItem = ({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      className="border-b border-[rgba(212,160,23,0.1)] last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#D4A017] transition-colors"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[var(--krovos-gray-400)] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Capability Card Component
const CapabilityCard = ({
  title,
  description,
  icon,
  delay = 0
}: {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="bento-item group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B91C1C]/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center shadow-lg shadow-[#B91C1C]/30 mb-4 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-[var(--krovos-gray-400)] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Large Capability Card for Bento Grid
const LargeCapabilityCard = ({
  title,
  description,
  icon,
  features,
  delay = 0
}: {
  title: string;
  description: string;
  icon: string;
  features: string[];
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="bento-item bento-item-large group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#B91C1C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center shadow-lg shadow-[#B91C1C]/30 mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-[var(--krovos-gray-400)] leading-relaxed mb-6">{description}</p>
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-[var(--krovos-gray-300)]">
              <svg className="w-4 h-4 text-[#D4A017] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Case Study Card Component
const CaseStudyCard = ({
  title,
  company,
  metric,
  metricLabel,
  description,
  delay = 0
}: {
  title: string;
  company: string;
  metric: string;
  metricLabel: string;
  description: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: delay * 0.15 }}
      className="card-premium group overflow-hidden"
    >
      <div className="h-1 bg-gradient-to-r from-[#B91C1C] to-[#D4A017]" />
      <div className="p-6 lg:p-8">
        <div className="text-sm font-semibold text-[#D4A017] mb-2">{company}</div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl lg:text-5xl font-bold gradient-text">
            {metric}
          </span>
          <span className="text-[var(--krovos-gray-400)]">{metricLabel}</span>
        </div>
        <p className="text-[var(--krovos-gray-400)] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Process Timeline Component
const ProcessTimeline = () => {
  const steps = [
    {
      number: "01",
      title: "Assessment",
      description: "We conduct a comprehensive evaluation of your current IT infrastructure, security posture, and compliance requirements to identify gaps and opportunities.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
    },
    {
      number: "02",
      title: "Strategy",
      description: "Our experts develop a tailored managed IT roadmap aligned with your business objectives, regulatory requirements, and budget constraints.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      number: "03",
      title: "Implementation",
      description: "We deploy integrated solutions including security infrastructure, monitoring systems, and management tools with minimal disruption to operations.",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    },
    {
      number: "04",
      title: "Management",
      description: "Our 24/7 operations team continuously monitors, maintains, and optimizes your IT environment with proactive threat detection and rapid response.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      number: "05",
      title: "Optimization",
      description: "We provide ongoing improvements through regular reviews, performance tuning, and strategic recommendations to maximize your IT investment.",
      icon: "M4 4v5h.582m15.582 0A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    }
  ];

  return (
    <div className="relative">
      <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent hidden lg:block" />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <div className="card-premium p-6 group">
              <div className="absolute -top-3 left-6 w-6 h-6 rounded-full bg-gradient-to-r from-[#B91C1C] to-[#D4A017] flex items-center justify-center text-white text-xs font-bold">
                {step.number}
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center shadow-lg shadow-[#B91C1C]/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-[var(--krovos-gray-400)] text-sm leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  delay = 0
}: {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: delay * 0.15 }}
      className="glass-heavy rounded-3xl p-8 lg:p-12"
    >
      <svg className="w-12 h-12 text-[#D4A017] mb-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#B91C1C] to-[#D4A017] flex items-center justify-center text-white font-bold text-xl">
          {author.charAt(0)}
        </div>
        <div>
          <div className="text-white font-semibold">{author}</div>
          <div className="text-[var(--krovos-gray-400)]">{role}, {company}</div>
        </div>
      </div>
    </motion.div>
  );
};

// Trust Badge Component
const TrustBadge = ({ name, icon }: { name: string; icon: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      className="flex flex-col items-center gap-3 px-6 py-4 rounded-xl border border-[rgba(212,160,23,0.1)] hover:border-[#D4A017]/30 hover:bg-[rgba(212,160,23,0.05)] transition-all cursor-pointer group"
    >
      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
        </svg>
      </div>
      <span className="font-semibold text-white text-center">{name}</span>
    </motion.div>
  );
};

// Differentiator Card Component
const DifferentiatorCard = ({
  stat,
  statLabel,
  title,
  description,
  delay = 0
}: {
  stat: string;
  statLabel: string;
  title: string;
  description: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: delay * 0.15 }}
      className="card-premium p-8 group"
    >
      <div className="text-center mb-6">
        <div className="inline-flex items-baseline justify-center gap-2">
          <span className="text-5xl lg:text-6xl font-bold gradient-text">
            {stat}
          </span>
        </div>
        <div className="text-[#D4A017] font-semibold mt-1">{statLabel}</div>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 text-center">{title}</h3>
      <p className="text-[var(--krovos-gray-400)] leading-relaxed text-center">{description}</p>
    </motion.div>
  );
};

// Service Feature Card
const ServiceFeatureCard = ({
  title,
  description,
  icon,
  list,
  delay = 0
}: {
  title: string;
  description: string;
  icon: string;
  list: string[];
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bento-item group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4A017]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#B8860B] flex items-center justify-center shadow-lg shadow-[#D4A017]/20 mb-4 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-6 h-6 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-[var(--krovos-gray-400)] text-sm leading-relaxed mb-4">{description}</p>
        <ul className="space-y-2">
          {list.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-[var(--krovos-gray-300)]">
              <svg className="w-4 h-4 text-[#D4A017] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function ManagedITPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const capabilities = [
    {
      title: "Enterprise Security",
      description: "Comprehensive threat protection including next-gen firewall, endpoint detection and response (EDR), intrusion detection, and advanced malware protection tailored for enterprise environments.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      title: "24/7 Monitoring",
      description: "Real-time infrastructure monitoring with AI-powered anomaly detection, automated alerting, and rapid incident response from our Security Operations Center (SOC).",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      title: "Help Desk Support",
      description: "Enterprise-grade technical support with dedicated account management, priority response times, and knowledgeable engineers who understand your business context.",
      icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
    },
    {
      title: "Compliance Management",
      description: "Automated compliance monitoring and reporting for SOX, PCI-DSS, HIPAA, GDPR, SOC 2, and other regulatory frameworks with continuous audit readiness.",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    },
    {
      title: "Cloud Management",
      description: "Seamless management of multi-cloud environments including AWS, Azure, and Google Cloud with optimized costs, security hardening, and governance policies.",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    },
    {
      title: "Backup & Recovery",
      description: "Enterprise backup solutions with automated testing, geographic redundancy, and proven recovery objectives to ensure business continuity and data protection.",
      icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    }
  ];

  const serviceFeatures = [
    {
      title: "IT Infrastructure",
      description: "Complete management of your physical and virtual infrastructure including servers, storage, networking, and virtualization platforms.",
      icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
      list: ["Server Management & Monitoring", "Network Infrastructure", "Virtualization (VMware, Hyper-V)", "Storage Area Networks", "Data Center Operations"]
    },
    {
      title: "Network Management",
      description: "Comprehensive network oversight ensuring optimal performance, security, and reliability for your enterprise connectivity.",
      icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0",
      list: ["Network Monitoring & Alerts", "Firewall Management", "VPN & Remote Access", "SD-WAN Solutions", "Network Segmentation"]
    },
    {
      title: "Security Services",
      description: "Multi-layered security approach protecting your organization from evolving cyber threats with advanced threat detection and response.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      list: ["Endpoint Detection & Response", "Security Information & Event Management (SIEM)", "Threat Hunting", "Zero Trust Architecture", "Security Awareness Training"]
    },
    {
      title: "Cloud Services",
      description: "Strategic cloud migration and management services optimizing your workloads across multi-cloud environments.",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      list: ["Cloud Migration Strategy", "AWS/Azure/Google Cloud Management", "Cloud Security Hardening", "Cost Optimization", "Hybrid Cloud Architecture"]
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support from certified engineers ensuring your systems remain operational at all times.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      list: ["24/7/365 Help Desk", "Priority Incident Response", "Dedicated Account Manager", "On-Site Support Available", "Knowledge Base Access"]
    },
    {
      title: "Proactive Monitoring",
      description: "Continuous surveillance of your IT environment with AI-powered analytics to detect and prevent issues before they impact your business.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      list: ["Real-Time Infrastructure Monitoring", "Performance Analytics", "Automated Alerts", "Capacity Planning", "Trend Analysis & Reporting"]
    }
  ];

  const differentiators = [
    {
      stat: "99.99%",
      statLabel: "Uptime SLA",
      title: "Enterprise-Grade Reliability",
      description: "Industry-leading uptime guarantees with redundant infrastructure, automatic failover, and 24/7 proactive monitoring ensure your systems never go down."
    },
    {
      stat: "15min",
      statLabel: "Avg Response Time",
      title: "Rapid Incident Response",
      description: "Our dedicated SOC team responds to critical issues within minutes, not hours, minimizing business impact and ensuring operational continuity."
    },
    {
      stat: "500+",
      statLabel: "Enterprise Clients",
      title: "Proven Enterprise Expertise",
      description: "Two decades of experience managing IT for Fortune 500 companies, financial institutions, healthcare organizations, and government agencies."
    }
  ];

  const trustBadges = [
    { name: "ISO 27001", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
    { name: "SOC 2 Type II", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { name: "GDPR Compliant", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
    { name: "HIPAA Compliant", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
    { name: "PCI DSS", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
    { name: "SOX Compliant", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }
  ];

  const caseStudies = [
    {
      title: "Financial Institution IT Overhaul",
      company: "Global Investment Bank",
      metric: "60%",
      metricLabel: "Cost Reduction",
      description: "Complete IT infrastructure modernization for a major investment bank, reducing operational costs by 60% while improving security posture and achieving full regulatory compliance."
    },
    {
      title: "Healthcare System Security",
      company: "Regional Hospital Network",
      metric: "99.9%",
      metricLabel: "Uptime Achieved",
      description: "Implemented comprehensive managed IT and security solutions for a 15-hospital network, achieving 99.9% uptime and HIPAA compliance with zero security breaches."
    },
    {
      title: "Manufacturing IT Transformation",
      company: "Industrial Conglomerate",
      metric: "45%",
      metricLabel: "Productivity Boost",
      description: "Digital transformation of IT operations across 12 manufacturing facilities, increasing operational efficiency by 45% and reducing unplanned downtime by 70%."
    }
  ];

  const testimonials = [
    {
      quote: "Krovos has been instrumental in transforming our IT operations. Their managed services team reduced our downtime by 95%, and their cybersecurity expertise helped us achieve SOC 2 Type II compliance within months. The ROI has been substantial, and their proactive approach prevents issues before they impact our business.",
      author: "Michael Rodriguez",
      role: "Chief Information Officer",
      company: "Meridian Financial Group"
    },
    {
      quote: "As a healthcare organization, we face unique IT challenges with strict HIPAA compliance requirements. Krovos has been exceptional in maintaining our security posture while ensuring our systems remain highly available for patient care. Their team truly understands the healthcare industry.",
      author: "Sarah Chen",
      role: "VP of Information Technology",
      company: "Pacific Health Systems"
    },
    {
      quote: "The transition to cloud infrastructure was seamless with Krovos guiding us every step of the way. Their expertise in multi-cloud environments helped us optimize costs while improving performance. We've reduced our cloud spend by 35% while increasing application responsiveness.",
      author: "James Patterson",
      role: "CTO",
      company: "TechCorp Industries"
    }
  ];

  const faqItems = [
    {
      question: "What industries do you specialize in for managed IT services?",
      answer: "We have extensive experience across multiple regulated industries including financial services, healthcare, manufacturing, retail, government, and technology. Our team includes certified professionals who understand the unique compliance requirements, security demands, and operational challenges of each sector. We tailor our managed IT solutions to address industry-specific workflows, regulatory requirements, and business objectives. Our vertical-specific expertise allows us to deliver solutions that not only meet technical requirements but also align with industry best practices and regulatory frameworks specific to your sector."
    },
    {
      question: "What is included in your managed IT services?",
      answer: "Our comprehensive managed IT services include 24/7 infrastructure monitoring and support, security management (firewall, endpoint protection, SIEM), cloud infrastructure management, help desk support, backup and disaster recovery, compliance management, and strategic IT consulting. We offer flexible packages that can be customized based on your organization's specific needs and budget. Each package includes dedicated account management, regular strategic reviews, and comprehensive reporting. Our services are designed to provide complete coverage of your IT environment while allowing flexibility to scale as your business grows."
    },
    {
      question: "How quickly can you respond to IT emergencies?",
      answer: "We offer tiered response times based on service level agreements. Our standard enterprise package includes 15-minute response times for critical issues, with dedicated escalation paths for severity 1 incidents. Our 24/7 Security Operations Center (SOC) provides continuous monitoring and can respond to security incidents immediately, often detecting and neutralizing threats before they impact your business. We maintain clear escalation procedures and communication protocols to ensure you're always informed during critical situations."
    },
    {
      question: "How do you ensure compliance with regulations like HIPAA, SOX, and PCI-DSS?",
      answer: "We maintain a dedicated compliance team that stays current with all regulatory requirements. Our services include continuous compliance monitoring, automated audit preparation, policy documentation, regular vulnerability assessments, and detailed reporting for auditors. We have proven track records helping organizations achieve and maintain compliance with HIPAA, SOX, PCI-DSS, SOC 2, ISO 27001, GDPR, and other frameworks. Our automated compliance tools provide real-time visibility into your compliance posture, and we conduct regular mock audits to ensure you're always prepared for formal assessments."
    },
    {
      question: "Can you manage our existing IT infrastructure, or do you require a complete overhaul?",
      answer: "We work with organizations at any stage of their IT journey. Whether you need full infrastructure management or supplemental support for your existing team, we adapt our services to fit your needs. We can gradually assume responsibility for specific systems or provide comprehensive oversight. Our approach minimizes disruption while maximizing the value of your existing investments. We conduct thorough assessments of your current environment before recommending any changes, ensuring that every decision is backed by solid business rationale and cost-benefit analysis."
    },
    {
      question: "What makes Krovos different from other managed IT providers?",
      answer: "Krovos combines deep enterprise expertise with personalized service. Unlike large providers that treat you as just another account, we provide dedicated account teams who understand your business. With 20+ years of experience and 500+ enterprise clients, we bring proven methodologies while maintaining the flexibility to customize solutions. Our 99.99% uptime SLA and 15-minute average response times set us apart in the industry. We invest heavily in our people, tools, and processes to ensure we deliver exceptional service that exceeds expectations."
    },
    {
      question: "How do you handle data backup and disaster recovery?",
      answer: "We implement comprehensive backup solutions with multiple layers of protection including local snapshots, offsite replication, and cloud archiving. Our disaster recovery services include automated testing, documented runbooks, and proven recovery time objectives (RTO) and recovery point objectives (RPO). We regularly test recovery procedures and provide detailed reports on your backup status and recovery capabilities. Our approach ensures that your business can recover quickly from any disaster, minimizing data loss and operational disruption."
    },
    {
      question: "What are your pricing options for managed IT services?",
      answer: "We offer flexible pricing models including per-device, per-user, and comprehensive flat-rate options. Our team will work with you to understand your needs and provide a customized quote. We believe in transparent pricing with no hidden fees, and we provide detailed reporting so you can see the value delivered. Many clients find our managed services cost less than maintaining equivalent in-house capabilities. We provide detailed ROI analysis and ongoing value reporting to demonstrate the tangible benefits of our partnership."
    }
  ];

  return (
    <div className="bg-[var(--krovos-navy)] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-mesh-navy">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B91C1C]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D4A017]/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#B91C1C]/10 to-transparent rounded-full" />
          </motion.div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B91C1C]/20 border border-[#B91C1C]/30 text-red-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              Enterprise IT & Cybersecurity Division
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Enterprise IT & Cybersecurity
              <br />
              <span className="gradient-text">
                Managed, Protected, Optimized
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[var(--krovos-gray-400)] mb-10 max-w-3xl mx-auto leading-relaxed">
              Comprehensive managed IT services and cybersecurity solutions designed for enterprise organizations.
              Trust your infrastructure to experts who deliver reliability, security, and compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Get Started
                </motion.button>
              </Link>
              <Link href="/demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Schedule Demo
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-[var(--krovos-gray-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-[var(--krovos-navy-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-Grade Managed IT & Security
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              Our comprehensive managed IT solutions address critical business challenges across industries,
              enabling organizations to achieve operational excellence while maintaining robust security and compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-premium p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#B91C1C] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                Problems We Solve
              </h3>
              <ul className="space-y-4">
                {[
                  "Complex, multi-vendor IT environments lacking unified management",
                  "Increasing cybersecurity threats and sophisticated attack vectors",
                  "Struggling to maintain compliance with multiple regulatory frameworks",
                  "Limited IT resources unable to keep pace with business demands",
                  "Unexpected downtime affecting productivity and customer trust",
                  "Rising IT costs without clear visibility into spending"
                ].map((problem, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--krovos-gray-300)]">
                    <svg className="w-5 h-5 text-[#B91C1C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {problem}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-premium p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4A017] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Who We Serve
              </h3>
              <ul className="space-y-4">
                {[
                  "Enterprise organizations requiring 24/7 IT operations",
                  "Financial services firms with strict compliance requirements",
                  "Healthcare organizations managing sensitive patient data",
                  "Manufacturing companies with complex operational technology",
                  "Government agencies needing secure, compliant infrastructure",
                  "Any organization where IT reliability is critical to success"
                ].map((audience, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--krovos-gray-300)]">
                    <svg className="w-5 h-5 text-[#D4A017] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {audience}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Bento Grid */}
      <section className="py-24 bg-[var(--krovos-navy)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive IT & Security Capabilities
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              Our full suite of managed IT services addresses diverse enterprise needs,
              from infrastructure management to advanced cybersecurity and compliance.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="bento-grid">
            <LargeCapabilityCard
              title="Complete IT Infrastructure Management"
              description="End-to-end management of your physical and virtual infrastructure including servers, storage, networks, and cloud environments. We handle the complexity so you can focus on business growth."
              icon="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
              features={["Server Management & Monitoring", "Network Infrastructure", "Virtualization Platforms", "Storage Solutions", "Data Center Operations"]}
              delay={0}
            />
            {capabilities.slice(0, 5).map((capability, index) => (
              <CapabilityCard
                key={capability.title}
                title={capability.title}
                description={capability.description}
                icon={capability.icon}
                delay={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Features */}
      <section className="py-24 bg-[var(--krovos-navy-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Core Service Areas
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              Specialized services designed to address the unique challenges of modern enterprise IT environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceFeatures.map((feature, index) => (
              <ServiceFeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                list={feature.list}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Krovos Section */}
      <section className="py-24 bg-[var(--krovos-navy)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Krovos for Managed IT Services
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              We combine deep technical expertise with enterprise experience to deliver
              IT solutions that drive reliability, security, and measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <DifferentiatorCard
                key={diff.title}
                stat={diff.stat}
                statLabel={diff.statLabel}
                title={diff.title}
                description={diff.description}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Security Trust Badges */}
      <section className="py-24 bg-mesh-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted Compliance & Security
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              We maintain the highest standards of security and compliance, with certifications
              that meet rigorous enterprise and regulatory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBadges.map((badge, index) => (
              <TrustBadge key={badge.name} name={badge.name} icon={badge.icon} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-[var(--krovos-gray-400)] text-sm">
              Our security practices are regularly audited by independent third parties
              to ensure continuous compliance and adherence to industry best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-[var(--krovos-navy-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              See how leading organizations have transformed their IT operations
              with our managed services and cybersecurity solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.title}
                title={study.title}
                company={study.company}
                metric={study.metric}
                metricLabel={study.metricLabel}
                description={study.description}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-[var(--krovos-navy)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Managed Services Process
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              A proven, phased approach that delivers value at every step while building
              toward comprehensive enterprise IT transformation.
            </p>
          </motion.div>

          <ProcessTimeline />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-mesh-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              Hear from enterprise leaders who have transformed their IT operations with Krovos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[var(--krovos-navy-deep)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)]">
              Get answers to common questions about our managed IT services.
            </p>
          </motion.div>

          <div className="glass p-6 lg:p-8">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#B91C1C] to-[#991B1B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Operations?
            </h2>
            <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
              Get a customized quote for your managed IT services. Our experts will
              analyze your needs and design a solution that delivers reliability, security, and measurable results.
            </p>
            <Link href="/contact?service=managed-it">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-[#B91C1C] font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                Get a Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
