"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2000 }: { end: number; suffix?: string; prefix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="inline-flex items-center">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// Bento Grid Item Component
const BentoCard = ({
  title,
  description,
  icon,
  colSpan = 1,
  rowSpan = 1,
  delay = 0,
  children,
  accentColor = "gold"
}: {
  title: string;
  description: string;
  icon: string;
  colSpan?: number;
  rowSpan?: number;
  delay?: number;
  children?: React.ReactNode;
  accentColor?: "gold" | "teal" | "blue" | "purple";
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colorClasses = {
    gold: {
      bg: "from-[#D4A017]/20 to-[#B8860B]/5",
      icon: "from-[#D4A017] to-[#B8860B]",
      iconShadow: "shadow-[#D4A017]/30",
      borderHover: "hover:border-[#D4A017]/40",
      text: "text-[#D4A017]",
      gradient: "from-[#D4A017] to-[#B8860B]"
    },
    teal: {
      bg: "from-[#0E7C7B]/20 to-[#0E7C7B]/5",
      icon: "from-[#0E7C7B] to-[#14B8A6]",
      iconShadow: "shadow-[#0E7C7B]/30",
      borderHover: "hover:border-[#0E7C7B]/40",
      text: "text-[#0E7C7B]",
      gradient: "from-[#0E7C7B] to-[#14B8A6]"
    },
    blue: {
      bg: "from-[#1B6CA8]/20 to-[#1B6CA8]/5",
      icon: "from-[#1B6CA8] to-[#3B82F6]",
      iconShadow: "shadow-[#1B6CA8]/30",
      borderHover: "hover:border-[#1B6CA8]/40",
      text: "text-[#1B6CA8]",
      gradient: "from-[#1B6CA8] to-[#3B82F6]"
    },
    purple: {
      bg: "from-[#4A1882]/20 to-[#4A1882]/5",
      icon: "from-[#4A1882] to-[#7C3AED]",
      iconShadow: "shadow-[#4A1882]/30",
      borderHover: "hover:border-[#4A1882]/40",
      text: "text-[#4A1882]",
      gradient: "from-[#4A1882] to-[#7C3AED]"
    }
  };

  const colors = colorClasses[accentColor];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className={`bento-item relative overflow-hidden group`}
      style={{ gridColumn: `span ${colSpan}`, gridRow: `span ${rowSpan}` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4A017]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.icon} flex items-center justify-center shadow-lg ${colors.iconShadow} mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-[#9CA3AF] text-sm leading-relaxed">{description}</p>
        {children}
      </div>
    </motion.div>
  );
};

// Process Step Component
const ProcessStep = ({
  number,
  title,
  description,
  icon,
  delay = 0,
  isLast = false
}: {
  number: string;
  title: string;
  description: string;
  icon: string;
  delay?: number;
  isLast?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="relative flex flex-col items-center"
    >
      <div className="relative z-10 w-full">
        <div className="card-premium p-6 lg:p-8 text-center group">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-[#D4A017] to-[#B8860B] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[#D4A017]/30">
            {number}
          </div>
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4A017] to-[#B8860B] flex items-center justify-center shadow-lg shadow-[#D4A017]/30 mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <p className="text-[#9CA3AF] text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#D4A017]/30 to-transparent" />
      )}
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
  tags,
  delay = 0
}: {
  title: string;
  company: string;
  metric: string;
  metricLabel: string;
  description: string;
  tags: string[];
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
      className="card-premium overflow-hidden group cursor-pointer"
    >
      <div className="h-1.5 bg-gradient-to-r from-[#D4A017] to-[#B8860B]" />
      <div className="p-6 lg:p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium bg-[#D4A017]/10 text-[#D4A017] rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="text-sm font-semibold text-[#D4A017] mb-2">{company}</div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl lg:text-5xl font-bold gradient-text">
            {metric}
          </span>
          <span className="text-[#9CA3AF]">{metricLabel}</span>
        </div>
        <p className="text-[#9CA3AF] leading-relaxed">{description}</p>
      </div>
    </motion.div>
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="card-glass p-8 text-center"
    >
      <div className="mb-6">
        <svg className="w-12 h-12 text-[#D4A017]/30 mx-auto" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <blockquote className="text-lg md:text-xl text-white mb-6 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4A017] to-[#B8860B] flex items-center justify-center text-white text-xl font-bold mb-3 shadow-lg shadow-[#D4A017]/20">
          {author.charAt(0)}
        </div>
        <div className="text-white font-semibold text-lg">{author}</div>
        <div className="text-[#D4A017] text-sm">{role}</div>
        <div className="text-[#6B7280] text-sm">{company}</div>
      </div>
    </motion.div>
  );
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
      className="border-b border-[#D4A017]/10 last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#D4A017] transition-colors group"
      >
        <span className="text-lg font-semibold text-white group-hover:text-[#D4A017] transition-colors pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 flex items-center justify-center flex-shrink-0"
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
            <p className="pb-6 text-[#9CA3AF] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Feature Card Component
const FeatureCard = ({
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
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="flex gap-4 group"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#B8860B] flex items-center justify-center shadow-lg shadow-[#D4A017]/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-[#9CA3AF] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Service Highlight Component
const ServiceHighlight = ({
  title,
  description,
  features,
  icon,
  delay = 0,
  reverse = false
}: {
  title: string;
  description: string;
  features: string[];
  icon: string;
  delay?: number;
  reverse?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className={`card-glass p-8 lg:p-12 ${reverse ? '' : ''}`}
    >
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-start`}>
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D4A017] to-[#B8860B] flex items-center justify-center shadow-xl shadow-[#D4A017]/20">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-[#9CA3AF] mb-6 leading-relaxed">{description}</p>
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-[#D1D5DB]">
                <svg className="w-5 h-5 text-[#D4A017] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default function DigitalMarketingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const capabilities = [
    {
      title: "Search Engine Optimization",
      description: "Comprehensive SEO strategies including technical optimization, content strategy, link building, and local SEO to improve organic visibility and drive quality traffic that converts.",
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    },
    {
      title: "Pay-Per-Click Advertising",
      description: "Data-driven PPC campaigns across Google Ads, Bing, and social platforms with advanced targeting, bid management, and continuous optimization for maximum ROI.",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Social Media Marketing",
      description: "Strategic social media presence across all major platforms with content creation, community management, influencer partnerships, and paid social campaigns.",
      icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
    },
    {
      title: "Email Marketing",
      description: "Automated email sequences, newsletters, and drip campaigns that nurture leads, increase customer retention, and drive conversions through personalized communication.",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: "Content Marketing",
      description: "Compelling content creation including blogs, whitepapers, infographics, videos, and interactive content that establishes thought leadership and engages audiences.",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      title: "Marketing Analytics",
      description: "Comprehensive analytics setup and reporting with dashboards, conversion tracking, and actionable insights to measure performance and guide strategy decisions.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    }
  ];

  const keyFeatures = [
    {
      title: "Data-Driven Strategy",
      description: "Every decision is backed by data. We analyze trends, customer behavior, and competitive landscapes to create strategies that deliver measurable results.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      title: "Multi-Channel Integration",
      description: "Seamlessly integrate your marketing efforts across SEO, PPC, social media, email, and content to create a cohesive customer journey that nurtures leads.",
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    },
    {
      title: "Conversion Optimization",
      description: "We don't just drive traffic; we optimize every touchpoint to convert visitors into customers through A/B testing, UX improvements, and data-backed refinements.",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    },
    {
      title: "Scalable Solutions",
      description: "Whether you're a startup or enterprise, our strategies scale with your business. We build systems that grow and evolve with your marketing needs.",
      icon: "M4 4v5h.582m15.582 0A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    },
    {
      title: "Transparent Reporting",
      description: "Real-time dashboards and detailed monthly reports keep you informed. No hidden metrics or ambiguous KPIs - just clear, actionable insights.",
      icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      title: "Dedicated Account Team",
      description: "Get a committed team of experts including strategists, analysts, and specialists who understand your business and work as an extension of your team.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We dive deep into your business, analyzing your current marketing channels, audience segments, competitive landscape, and defining clear success metrics tailored to your goals.",
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Our experts craft a comprehensive digital marketing roadmap with channel prioritization, budget allocation, timeline planning, and contingency strategies for optimal results.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      number: "03",
      title: "Campaign Execution",
      description: "We launch campaigns across all selected channels, creating compelling content, optimizing ad spend, implementing technical requirements, and maintaining brand consistency.",
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    },
    {
      number: "04",
      title: "Continuous Optimization",
      description: "Through ongoing monitoring, A/B testing, and performance analysis, we refine campaigns in real-time to improve performance and maximize your return on investment.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      number: "05",
      title: "Scale & Growth",
      description: "Once we identify winning strategies, we scale successful campaigns, expand to new channels, and compound your marketing growth for sustainable long-term success.",
      icon: "M4 4v5h.582m15.582 0A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    }
  ];

  const caseStudies = [
    {
      title: "E-Commerce Growth Campaign",
      company: "Premium Fashion Retailer",
      metric: "347%",
      metricLabel: "Revenue Growth",
      description: "Implemented comprehensive digital strategy combining SEO, paid social, and email marketing, resulting in 347% revenue increase and 285% customer acquisition growth within 12 months.",
      tags: ["E-Commerce", "SEO", "Paid Social", "Email"]
    },
    {
      title: "B2B Lead Generation",
      company: "Enterprise Software Company",
      metric: "412%",
      metricLabel: "More Qualified Leads",
      description: "Developed multi-channel lead generation strategy with content marketing, LinkedIn advertising, and marketing automation that generated 412% more qualified leads at 35% lower cost.",
      tags: ["B2B", "LinkedIn", "Content", "Automation"]
    },
    {
      title: "Local Market Dominance",
      company: "Regional Healthcare System",
      metric: "89%",
      metricLabel: "Search Visibility",
      description: "Local SEO and content strategy achieved 89% visibility in local search results, increasing patient appointments by 156% year-over-year with 40% reduction in acquisition cost.",
      tags: ["Healthcare", "Local SEO", "Content"]
    },
    {
      title: "Mobile App Launch",
      company: "FinTech Startup",
      metric: "2.3M",
      metricLabel: "App Downloads",
      description: "Launch strategy combining ASO, influencer partnerships, and targeted paid campaigns drove 2.3 million downloads in the first 6 months with 28% organic conversion rate.",
      tags: ["FinTech", "Mobile", "ASO", "Influencer"]
    },
    {
      title: "Brand Transformation",
      company: "Legacy Manufacturing Brand",
      metric: "524%",
      metricLabel: "Brand Awareness",
      description: "Complete digital transformation including website redesign, content strategy, and social media presence increased brand awareness by 524% and web traffic by 312%.",
      tags: ["Manufacturing", "Branding", "Content"]
    },
    {
      title: "Restaurant Chain Expansion",
      company: "National Fast-Casual Chain",
      metric: "68%",
      metricLabel: "Online Orders",
      description: "Implemented digital ordering, loyalty program, and localized marketing campaigns that increased online orders by 68% and customer retention by 45%.",
      tags: ["Food & Beverage", "Mobile", "Loyalty"]
    }
  ];

  const testimonials = [
    {
      quote: "Krovos transformed our digital presence completely. Our organic traffic increased by 280% within 6 months, and the quality of leads has never been higher. The team's data-driven approach is exactly what we needed.",
      author: "Sarah Mitchell",
      role: "Chief Marketing Officer",
      company: "TechFlow Solutions"
    },
    {
      quote: "Working with Krovos was a game-changer for our e-commerce business. They didn't just increase our traffic - they fundamentally improved our conversion rate and customer lifetime value. The ROI speaks for itself.",
      author: "Michael Chen",
      role: "Founder & CEO",
      company: "LuxeHome Interiors"
    },
    {
      quote: "The team's expertise in B2B lead generation is unmatched. They helped us scale our enterprise sales pipeline while reducing our cost per lead by 35%. Their strategic approach has been invaluable to our growth.",
      author: "Jennifer Rodriguez",
      role: "VP of Sales",
      company: "CloudSync Analytics"
    }
  ];

  const faqItems = [
    {
      question: "What makes Krovos digital marketing different from other agencies?",
      answer: "At Krovos, we combine data-driven strategies with creative excellence. Our approach focuses on measurable outcomes rather than vanity metrics. We provide transparent reporting, dedicated account teams, and custom strategies tailored to your specific business goals. Our team includes certified experts across all major platforms with deep industry experience. We don't believe in one-size-fits-all solutions - every strategy is crafted to address your unique challenges and opportunities."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "Timeline varies by channel and competition. SEO typically shows significant results in 4-6 months, while PPC and social ads can generate traffic within days. We provide detailed timeline projections during the strategy phase and focus on sustainable, long-term growth rather than quick fixes that don't last. Most clients see meaningful progress within the first quarter, with substantial results by month 6-12."
    },
    {
      question: "How do you measure and report on campaign performance?",
      answer: "We provide comprehensive dashboards showing real-time performance across all channels. Our reporting includes key metrics like traffic, conversions, cost per acquisition, ROI, and custom goals specific to your business. Monthly strategy calls ensure you understand the data and can make informed decisions. We believe in full transparency and will never hide behind complex metrics."
    },
    {
      question: "Can you work with our existing marketing team?",
      answer: "Absolutely! We function as a seamless extension of your team. Whether you need full-service management or specific channel expertise, we collaborate with your internal team to enhance capabilities and achieve shared goals. We provide training and knowledge transfer to build internal competencies over time."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have extensive experience across e-commerce, B2B technology, healthcare, financial services, real estate, professional services, and more. Our team includes vertical specialists who understand industry-specific challenges, regulations, and best practices for maximum impact."
    },
    {
      question: "How much should I budget for digital marketing?",
      answer: "Budget requirements depend on your goals, competition, and market position. We work with businesses of all sizes and develop strategies that maximize ROI within your budget. During discovery, we analyze your market and provide recommendations aligned with your growth objectives and available resources."
    },
    {
      question: "Do you offer both organic and paid marketing services?",
      answer: "Yes, we provide comprehensive digital marketing services covering SEO, content marketing, paid search, social advertising, email marketing, and more. Our integrated approach ensures all channels work together cohesively for maximum impact and efficient spend."
    },
    {
      question: "What makes your SEO approach different?",
      answer: "Our SEO strategy focuses on sustainable, white-hat techniques that build long-term authority. We combine technical expertise, content strategy, and ethical link building to improve rankings that last. We prioritize user experience and search intent, ensuring traffic converts to customers."
    }
  ];

  return (
    <div className="bg-[#0A1628] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute inset-0"
          >
            <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#D4A017]/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#0E7C7B]/15 rounded-full blur-[100px]" />
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#D4A017]/8 to-transparent rounded-full" />
          </motion.div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/30 text-[#D4A017] text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
              Digital Marketing Division
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Data-Driven Digital Marketing
              <br />
              <span className="gradient-text">
                That Delivers Results
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#9CA3AF] mb-10 max-w-3xl mx-auto leading-relaxed">
              Strategic digital marketing solutions that increase visibility, drive qualified traffic,
              and convert leads into loyal customers. Measurable results at scale.
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
                  View Portfolio
                </motion.button>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { value: 280, suffix: "%", label: "Average ROI Increase" },
                { value: 15, suffix: "M+", label: "Monthly Impressions" },
                { value: 500, suffix: "+", label: "Clients Served" },
                { value: 50, suffix: "+", label: "Industry Awards" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[#6B7280] text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Services Overview - Bento Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-mesh-navy opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive Digital Marketing Services
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              End-to-end marketing solutions tailored to your business goals. From strategy to execution, we handle every aspect of your digital presence.
            </p>
          </motion.div>

          <div className="bento-grid">
            <BentoCard
              title="Search Engine Optimization"
              description="Comprehensive SEO strategies including technical optimization, content strategy, link building, and local SEO to improve organic visibility."
              icon="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              colSpan={2}
              rowSpan={1}
              delay={0}
              accentColor="gold"
            />
            <BentoCard
              title="Pay-Per-Click Advertising"
              description="Data-driven PPC campaigns with advanced targeting and continuous optimization."
              icon="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              colSpan={1}
              rowSpan={1}
              delay={1}
              accentColor="teal"
            />
            <BentoCard
              title="Social Media Marketing"
              description="Strategic presence across all major platforms with content and community management."
              icon="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              colSpan={1}
              rowSpan={1}
              delay={2}
              accentColor="blue"
            />
            <BentoCard
              title="Email Marketing"
              description="Automated sequences, newsletters, and drip campaigns that nurture leads."
              icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              colSpan={1}
              rowSpan={1}
              delay={3}
              accentColor="purple"
            />
            <BentoCard
              title="Content Marketing"
              description="Compelling content that establishes thought leadership and engages audiences."
              icon="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              colSpan={1}
              rowSpan={1}
              delay={4}
              accentColor="gold"
            />
            <BentoCard
              title="Marketing Analytics"
              description="Comprehensive analytics with dashboards and actionable insights."
              icon="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              colSpan={2}
              rowSpan={1}
              delay={5}
              accentColor="teal"
            />
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 relative bg-[#060D18]">
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Krovos for Digital Marketing
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              We combine strategic thinking with technical expertise to deliver marketing solutions that drive real business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-mesh-gold opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              A systematic approach to digital marketing that ensures consistent results and continuous improvement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={index}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-24 relative bg-[#060D18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Deep-Dive Marketing Solutions
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              Detailed strategies designed to maximize your digital presence and drive sustainable growth.
            </p>
          </motion.div>

          <div className="space-y-8">
            <ServiceHighlight
              title="Search Engine Optimization (SEO)"
              description="Our comprehensive SEO services go beyond basic optimization. We conduct thorough technical audits, competitor analysis, and keyword research to identify opportunities others miss. Our white-hat approach builds sustainable authority that withstands algorithm changes and delivers long-term results."
              features={[
                "Technical SEO audits and site architecture optimization",
                "Advanced keyword research and content strategy",
                "On-page optimization and meta tag refinement",
                "White-hat link building campaigns",
                "Local SEO and Google Business optimization",
                "SEO performance tracking and reporting"
              ]}
              icon="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              delay={0}
            />
            <ServiceHighlight
              title="Pay-Per-Click (PPC) Advertising"
              description="Our PPC experts manage campaigns across Google Ads, Bing, and social platforms with precision targeting and optimization. We focus on quality scores, ad relevance, and conversion tracking to maximize your ROI and reduce cost per acquisition."
              features={[
                "Campaign setup and structure optimization",
                "Advanced audience targeting and remarketing",
                "A/B testing for ad copy and creative",
                "Bid management and budget optimization",
                "Conversion tracking and attribution modeling",
                "Landing page optimization and testing"
              ]}
              icon="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              delay={1}
              reverse
            />
            <ServiceHighlight
              title="Social Media Marketing"
              description="We build engaged communities across all major social platforms. From content creation to influencer partnerships, our strategies amplify your brand voice and foster meaningful connections with your target audience."
              features={[                "Social media strategy and content planning",
                "Platform-specific content creation",
                "Community management and engagement",
                "Influencer identification and outreach",
                "Social media analytics and reporting",
                "Paid social campaigns and optimization"
              ]}
              icon="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              delay={2}
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-mesh-navy opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              Real-world examples of how we&apos;ve helped businesses transform their digital presence and achieve measurable growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                title={study.title}
                company={study.company}
                metric={study.metric}
                metricLabel={study.metricLabel}
                description={study.description}
                tags={study.tags}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative bg-[#060D18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              Trusted by businesses across industries to deliver exceptional digital marketing results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
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
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-mesh-gold opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#9CA3AF]">
              Common questions about our digital marketing services.
            </p>
          </motion.div>

          <div className="glass p-8">
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D2040] to-[#0A1628]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D4A017]/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0E7C7B]/15 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="gradient-text"> Digital Presence?</span>
            </h2>
            <p className="text-xl text-[#9CA3AF] mb-10 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how our data-driven digital marketing strategies can help you achieve your business goals. Schedule a free consultation with our experts today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-10 py-4"
                >
                  Start Your Project
                </motion.button>
              </Link>
              <Link href="/demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-10 py-4"
                >
                  View Case Studies
                </motion.button>
              </Link>
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 pt-8 border-t border-[#D4A017]/10"
            >
              <p className="text-[#6B7280] text-sm mb-6">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
                {["Google Partner", "Meta Business Partner", "Microsoft Advertising", "HubSpot Partner"].map((partner, index) => (
                  <span key={index} className="text-[#9CA3AF] font-medium">{partner}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA Banner */}
      <section className="py-12 border-t border-[#D4A017]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Ready to grow your business?</h3>
              <p className="text-[#9CA3AF]">Let&apos;s create your digital marketing success story.</p>
            </div>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get In Touch
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
