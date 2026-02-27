"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

// Color constants from design system
const COLORS = {
  navy: "#0A1628",
  navyMid: "#0D2040",
  navyLight: "#142038",
  gold: "#D4A017",
  goldBright: "#F0C040",
  goldDim: "#B8860B",
  purple: "#7C3AED",
  purpleLight: "#9333EA",
  teal: "#0E7C7B",
  white: "#FFFFFF",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563"
};

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useRef(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }).current;

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
            <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Service Card Component for Bento Grid
const ServiceCard = ({
  title,
  description,
  icon,
  delay = 0,
  large = false
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  large?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className={`bento-item group relative overflow-hidden ${large ? 'bento-item-large' : ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4A017] to-[#B8860B] flex items-center justify-center shadow-lg shadow-[#D4A017]/30 mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
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
  icon: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="card-premium p-6 lg:p-8 group"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#9333EA] flex items-center justify-center shadow-lg shadow-[#7C3AED]/30 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
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
      className="card-premium overflow-hidden group"
    >
      <div className="h-1 bg-gradient-to-r from-[#D4A017] via-[#F0C040] to-[#D4A017]" />
      <div className="p-6 lg:p-8">
        <div className="text-sm font-semibold text-[#D4A017] mb-2">{company}</div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl lg:text-5xl font-bold gradient-text">
            {metric}
          </span>
          <span className="text-gray-400">{metricLabel}</span>
        </div>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ quote, author, role, company, delay = 0 }: { quote: string; author: string; role: string; company: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="glass-heavy rounded-3xl p-8 lg:p-12 text-center"
    >
      <svg className="w-12 h-12 text-[#D4A017] mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-xl lg:text-2xl text-white leading-relaxed mb-8 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center justify-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#9333EA] flex items-center justify-center text-white font-bold text-lg">
          {author.charAt(0)}
        </div>
        <div className="text-left">
          <div className="text-white font-semibold">{author}</div>
          <div className="text-gray-400 text-sm">{role}, {company}</div>
        </div>
      </div>
    </motion.div>
  );
};

// Process Timeline Component
const ProcessTimeline = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description: "We begin with a comprehensive consultation to understand your talent needs, company culture, and specific requirements for the roles you're looking to fill. This foundational step ensures we align our strategy with your business objectives.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Talent Mapping",
      description: "Our team conducts detailed talent mapping and market research to identify the best candidates, including passive candidates who aren't actively job hunting but represent exceptional opportunities.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Sourcing & Screening",
      description: "We source candidates through multiple channels and conduct rigorous screening, including technical assessments, cultural fit evaluations, and comprehensive background verification.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Interview Coordination",
      description: "We manage the entire interview process, coordinating schedules, providing interview preparation, and gathering feedback to ensure optimal candidate and hiring manager experience.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Onboarding Support",
      description: "Our engagement continues after placement with onboarding support, 90-day check-ins, and ongoing retention strategies to ensure long-term success for both parties.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
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
              <div className="absolute -top-3 left-6 w-6 h-6 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0C040] flex items-center justify-center text-[#0A1628] text-xs font-bold">
                {step.number}
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#9333EA] flex items-center justify-center shadow-lg shadow-[#7C3AED]/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ stat, statLabel, title, description, delay = 0 }: { stat: string; statLabel: string; title: string; description: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: delay * 0.15 }}
      className="card-premium p-8 group"
    >
      <div className="inline-flex items-baseline justify-center gap-2 mb-4">
        <span className="text-5xl lg:text-6xl font-bold gradient-text">
          {stat}
        </span>
      </div>
      <div className="text-[#D4A017] font-semibold mb-4">{statLabel}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

// Icon Components
const UsersIcon = () => (
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TrophyIcon = () => (
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const TeamIcon = () => (
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const GraduationCapIcon = () => (
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function TalentSolutionsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const services = [
    {
      title: "Talent Acquisition",
      description: "Our comprehensive talent acquisition services cover the entire hiring lifecycle. From workforce planning and candidate sourcing to offer management and onboarding support, we partner with you to build high-performing teams that drive business success. We leverage advanced sourcing strategies, AI-powered matching, and extensive industry networks to identify both active and passive candidates who align with your technical requirements and cultural values.",
      icon: <UsersIcon />
    },
    {
      title: "Team Building",
      description: "Transform individual hires into cohesive, high-performing teams through our specialized team building services. We conduct cultural assessments, team dynamics analysis, and develop integration strategies that accelerate productivity and foster collaboration. Our approach considers complementing skill sets, personality dynamics, and organizational fit to create teams that excel together.",
      icon: <TeamIcon />
    },
    {
      title: "Training & Development",
      description: "Invest in your workforce with our comprehensive training and development solutions. We design and deliver custom learning programs that upskill your employees, close capability gaps, and prepare your organization for future challenges. From technical skills training to leadership development, our programs are tailored to your specific business objectives and delivered by industry experts.",
      icon: <GraduationCapIcon />
    },
    {
      title: "Recruitment",
      description: "Our recruitment services encompass permanent placement, temporary staffing, and contract-to-hire options to meet your diverse workforce needs. We combine cutting-edge technology with human expertise to deliver candidates who not only meet qualifications but thrive in your organizational environment. Our rigorous screening process ensures quality matches that reduce turnover and maximize ROI.",
      icon: <BriefcaseIcon />
    },
    {
      title: "Staffing Solutions",
      description: "Scale your workforce dynamically with our flexible staffing solutions. Whether you need temporary staff for seasonal peaks, contract professionals for project-based work, or temp-to-hire arrangements to evaluate fit before commitment, we provide the talent you need when you need it. Our extensive candidate pool and rapid deployment capabilities ensure you maintain operational efficiency.",
      icon: <DocumentIcon />
    },
    {
      title: "Executive Search",
      description: "Our executive search practice specializes in identifying and recruiting senior leadership and C-suite talent. We approach each engagement with deep market research, extensive networking, and a confidentiality-first methodology. Our proven track record includes placing CFOs, CTOs, VPs, and board members across multiple industries, always focusing on long-term cultural and strategic alignment.",
      icon: <TrophyIcon />
    }
  ];

  const features = [
    {
      title: "Global Talent Network",
      description: "Access our extensive network of over 50,000 pre-vetted professionals across 45+ countries. We have established relationships with top talent in technology, finance, healthcare, and more, giving you a competitive edge in accessing passive candidates who aren't actively job hunting but represent exceptional opportunities.",
      icon: <GlobeIcon />
    },
    {
      title: "AI-Powered Matching",
      description: "Our proprietary AI-driven matching technology analyzes candidate skills, experience, cultural fit, and career trajectory to identify the ideal match for your requirements. This technology, combined with human expertise, significantly reduces time-to-hire while improving placement quality and retention rates.",
      icon: <RocketIcon />
    },
    {
      title: "Rigorous Vetting",
      description: "Every candidate undergoes our comprehensive 7-stage vetting process, including technical assessments, behavioral interviews, reference verification, background checks, and cultural fit evaluation. Our 96% retention rate demonstrates the effectiveness of our quality assurance process.",
      icon: <ShieldIcon />
    },
    {
      title: "Industry Expertise",
      description: "Our team includes former industry professionals who understand the unique talent demands and market dynamics of your sector. This domain expertise allows us to accurately assess candidate qualifications, provide market intelligence, and offer strategic workforce planning advice.",
      icon: <ChartIcon />
    },
    {
      title: "Flexible Engagement",
      description: "Choose from multiple engagement models including contingency recruitment, retained search, managed service provider programs, and employer of record services. We tailor our approach to your specific needs, budget, and timeline, providing maximum flexibility while maintaining premium service quality.",
      icon: <ClockIcon />
    },
    {
      title: "Post-Placement Support",
      description: "Our commitment doesn't end with a signed offer. We provide 90-day guarantee coverage, onboarding support, regular check-ins, and retention strategies to ensure long-term success. Our account managers remain engaged to address any concerns and ensure mutual satisfaction.",
      icon: <CheckCircleIcon />
    }
  ];

  const differentiators = [
    {
      stat: "15,000+",
      statLabel: "Placements Made",
      title: "Proven Track Record",
      description: "Our extensive experience spanning over two decades has resulted in more than 15,000 successful placements across diverse industries, giving us unmatched insight into matching talent with opportunity."
    },
    {
      stat: "94%",
      statLabel: "Retention Rate",
      title: "Quality That Lasts",
      description: "Our rigorous vetting process and cultural fit assessment result in a 94% retention rate, well above the industry average of 70%. We focus on long-term matches that benefit both employers and candidates."
    },
    {
      stat: "3.2x",
      statLabel: "Faster Hiring",
      title: "Speed Without Compromise",
      description: "Our streamlined process and ready access to talent means we fill positions 3.2x faster than traditional recruitment methods, helping you secure top talent before competitors."
    }
  ];

  const caseStudies = [
    {
      title: "Scaling a Fintech Startup",
      company: "Series B Fintech Company",
      metric: "40",
      metricLabel: "Hires in 90 Days",
      description: "Needed to rapidly scale from 20 to 60 employees for a major product launch. We delivered 40 qualified hires across engineering, product, and operations roles while maintaining cultural fit. The startup successfully launched on schedule and secured Series C funding six months later."
    },
    {
      title: "Building Global Engineering Hub",
      company: "Fortune 500 Tech Company",
      metric: "85%",
      metricLabel: "Retention After 2 Years",
      description: "Required building a 200-person engineering center in a new geography. Our localized recruitment strategy, comprehensive onboarding support, and ongoing retention programs achieved 85% retention after two years, significantly exceeding their initial 70% target."
    },
    {
      title: "C-Suite Executive Placement",
      company: "Healthcare SaaS Leader",
      metric: "6",
      metricLabel: "Weeks to Close",
      description: "Critical CTO replacement needed within strict timeline due to unexpected departure. Our executive search network and rigorous process delivered a perfect fit in just 6 weeks, minimizing disruption to ongoing product development and investor relations."
    }
  ];

  const testimonials = [
    {
      quote: "Krovos transformed our talent acquisition strategy. They understood our culture and delivered candidates who weren't just technically qualified but truly aligned with our mission. Our team has never been stronger, and our retention has improved dramatically since we started working together.",
      author: "Michael Torres",
      role: "Chief People Officer",
      company: "Enterprise Tech Solutions"
    },
    {
      quote: "The difference between Krovos and other agencies is night and day. They took the time to understand our specific needs, and the candidates they sent were exceptional. We've reduced our time-to-hire by 60% and our new hire quality has never been higher.",
      author: "Sarah Chen",
      role: "VP of Engineering",
      company: "GrowthStage Startups"
    },
    {
      quote: "As a rapidly scaling company, we needed a partner who could keep up with our growth. Krovos has been instrumental in helping us build teams across three continents. Their global reach and local expertise made all the difference.",
      author: "David Okonkwo",
      role: "CEO",
      company: "Nexus Global"
    }
  ];

  const faqItems = [
    {
      question: "What industries do you specialize in for talent solutions?",
      answer: "We have extensive experience across multiple industries including technology, healthcare, financial services, manufacturing, retail, and professional services. Our team includes industry specialists who understand the unique talent demands and market dynamics of each sector. We tailor our recruitment strategies to address industry-specific requirements, compensation benchmarks, and candidate availability. Whether you need software engineers in Silicon Valley or data scientists in London, we have the expertise to find the right talent."
    },
    {
      question: "How do you ensure candidate quality?",
      answer: "Our quality assurance process includes multi-stage screening with technical assessments, behavioral interviews, reference verification, and cultural fit evaluation. We also implement skills testing, personality assessments, and background checks. Our 94% retention rate demonstrates the effectiveness of our vetting process. We stand behind our placements with replacement guarantees, showing our confidence in the quality of candidates we provide."
    },
    {
      question: "What is your typical hiring timeline?",
      answer: "Timelines vary by role complexity and availability. For staff augmentation and contract roles, we can often provide candidates within 48-72 hours. For direct hires, typical timelines range from 2-6 weeks depending on the seniority of the position. Executive searches may take 8-12 weeks. We provide realistic timelines during the consultation phase and keep you updated throughout the process, ensuring transparency every step of the way."
    },
    {
      question: "How do you handle remote and international hiring?",
      answer: "We have extensive experience building remote and distributed teams across multiple time zones. Our services include compliance guidance for international hiring, timezone coordination, remote onboarding support, and ongoing management tools. We can handle payroll, benefits administration, and compliance for employees in multiple countries through our employer of record partnerships, making global hiring seamless."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing structures including contingency recruitment (fee only on successful placement), retained search (for executive and specialized roles), hourly contracting rates, and managed service provider (MSP) programs for volume hiring. We provide detailed proposals with transparent pricing after understanding your specific requirements. There are no hidden fees or unexpected costs."
    },
    {
      question: "Do you offer guarantees on placements?",
      answer: "Yes, we offer replacement guarantees on all our placements. For direct hires, we provide a 90-day guarantee where we'll find a replacement at no additional cost if the candidate leaves or doesn't work out. For contract placements, we offer immediate replacement within the contract period. This demonstrates our confidence in our vetting process and commitment to your satisfaction."
    },
    {
      question: "How do you handle confidential searches?",
      answer: "We understand the sensitivity of executive searches and competitive intelligence concerns. We conduct discreet searches using anonymized job descriptions when required, use blind advertising techniques, and implement strict confidentiality protocols. Our team signs NDAs, and we can operate under your company's name or a neutral third party identity. Your secrets are safe with us."
    },
    {
      question: "What makes Krovos different from other talent agencies?",
      answer: "Krovos combines personalized service with technology-enabled efficiency. Unlike large agencies that treat you as a number, we provide dedicated account management and consultative partnership. Our hybrid approach combines AI-powered sourcing tools with human expertise for optimal results. With 15,000+ placements and a 94% retention rate, we deliver proven outcomes that justify our premium service."
    }
  ];

  return (
    <div className="bg-[#0A1628] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-mesh-navy">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C3AED]/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D4A017]/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#7C3AED]/15 to-transparent rounded-full" />
          </motion.div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-subtle opacity-40" />
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
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED]/30 border border-[#7C3AED]/50 text-purple-300 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
              Talent Solutions Division
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Global Talent Solutions
              <br />
              <span className="gradient-text">
                Scale Your Team
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Scale Your Team with Top-tier Professionals. We connect world-class talent with
              innovative companies, delivering exceptional hires across staff augmentation,
              direct hire, executive search, and comprehensive workforce solutions.
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
                  View Case Studies
                </motion.button>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {[
                { value: "15,000+", label: "Placements" },
                { value: "94%", label: "Retention" },
                { value: "50K+", label: "Talent Pool" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
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
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Services Overview - Bento Grid */}
      <section className="py-24 bg-[#0D2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive Talent Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From staff augmentation to executive search, we offer end-to-end talent
              solutions to meet every hiring need across your organization.
            </p>
          </motion.div>

          <div className="bento-grid">
            <ServiceCard
              title="Talent Acquisition"
              description={services[0].description}
              icon={services[0].icon}
              delay={0}
              large
            />
            <ServiceCard
              title="Team Building"
              description={services[1].description}
              icon={services[1].icon}
              delay={1}
            />
            <ServiceCard
              title="Training & Development"
              description={services[2].description}
              icon={services[2].icon}
              delay={2}
            />
            <ServiceCard
              title="Recruitment"
              description={services[3].description}
              icon={services[3].icon}
              delay={3}
            />
            <ServiceCard
              title="Staffing Solutions"
              description={services[4].description}
              icon={services[4].icon}
              delay={4}
            />
            <ServiceCard
              title="Executive Search"
              description={services[5].description}
              icon={services[5].icon}
              delay={5}
              large
            />
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Krovos
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with human expertise to deliver
              exceptional talent solutions that drive business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-24 bg-[#0D2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Results That Speak
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our track record demonstrates the measurable impact we deliver
              through every engagement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <StatCard
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

      {/* Case Studies Section */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how we have helped leading organizations build exceptional teams
              and achieve their talent goals.
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

      {/* Process Timeline Section */}
      <section className="py-24 bg-[#0D2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Talent Acquisition Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven, consultative approach that ensures we find the right talent
              while providing an exceptional candidate experience.
            </p>
          </motion.div>

          <ProcessTimeline />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#0A1628]">
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
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted by leading organizations worldwide to deliver exceptional talent solutions.
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
      <section className="py-24 bg-[#0D2040]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Get answers to common questions about our talent solutions.
            </p>
          </motion.div>

          <div className="glass-heavy rounded-3xl p-6 lg:p-8">
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
      <section className="py-24 bg-gradient-to-r from-[#7C3AED] to-[#9333EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Get a customized quote for your talent needs. Our experts will
              analyze your requirements and design a solution that delivers
              exceptional results.
            </p>
            <Link href="/contact?service=talent-solutions">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#D4A017] text-[#0A1628] font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
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
