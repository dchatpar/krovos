"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

// Bento Card Component
const BentoCard = ({
  title,
  description,
  icon,
  colSpan = 1,
  rowSpan = 1,
  delay = 0,
  accentColor = "#D4A017",
  children
}: {
  title: string;
  description: string;
  icon: string;
  colSpan?: number;
  rowSpan?: number;
  delay?: number;
  accentColor?: string;
  children?: React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="bento-item group cursor-pointer"
      style={{ gridColumn: `span ${colSpan}`, gridRow: `span ${rowSpan}` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
           style={{ background: `radial-gradient(circle at top right, ${accentColor}, transparent 70%)` }} />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110"
             style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`, boxShadow: `0 10px 30px ${accentColor}40` }}>
          <svg className="w-7 h-7 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4A017] transition-colors duration-300">{title}</h3>
        <p className="text-[#9CA3AF] text-sm leading-relaxed">{description}</p>
        {children}
      </div>
    </motion.div>
  );
};

// Process Step Component
const ProcessStep = ({ number, title, description, icon, delay = 0 }: { number: string; title: string; description: string; icon: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: delay * 0.15 }}
      className="relative"
    >
      <div className="bg-[#0D2040] rounded-2xl p-8 border border-[#D4A017]/10 hover:border-[#D4A017]/30 transition-all duration-300 group h-full">
        <div className="absolute -top-3 left-8 w-8 h-8 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0C040] flex items-center justify-center text-[#0A1628] text-sm font-bold">
          {number}
        </div>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E7C7B] to-[#14B8A6] flex items-center justify-center shadow-lg shadow-[#0E7C7B]/30 mb-5 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-[#9CA3AF] text-sm leading-relaxed">{description}</p>
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
      className="bg-[#0D2040] rounded-3xl overflow-hidden border border-[#D4A017]/10 hover:border-[#D4A017]/30 transition-all duration-500 group"
    >
      <div className="h-1.5 bg-gradient-to-r from-[#D4A017] via-[#F0C040] to-[#D4A017]" />
      <div className="p-6 lg:p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-[#0E7C7B]/20 text-[#14B8A6] text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        <div className="text-sm font-semibold text-[#D4A017] mb-2">{company}</div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#D4A017] transition-colors duration-300">{title}</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#D4A017] to-[#F0C040] bg-clip-text text-transparent">
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
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className="bg-[#0D2040] rounded-3xl p-8 lg:p-10 border border-[#D4A017]/10 hover:border-[#D4A017]/25 transition-all duration-300"
    >
      <svg className="w-12 h-12 text-[#D4A017] mb-6 opacity-60" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-xl lg:text-2xl text-white leading-relaxed mb-8 font-light">
        {quote}
      </p>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0E7C7B] to-[#14B8A6] flex items-center justify-center text-white font-bold text-xl">
          {author.charAt(0)}
        </div>
        <div>
          <div className="text-white font-semibold text-lg">{author}</div>
          <div className="text-[#9CA3AF]">{role}, {company}</div>
        </div>
      </div>
    </motion.div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, icon, features, delay = 0 }: { title: string; description: string; icon: string; features: string[]; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-[#0D2040] rounded-2xl p-8 border border-[#D4A017]/10 hover:border-[#D4A017]/30 transition-all duration-300 group"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0E7C7B] to-[#14B8A6] flex items-center justify-center shadow-lg shadow-[#0E7C7B]/30 mb-6 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4A017] transition-colors duration-300">{title}</h3>
      <p className="text-[#9CA3AF] text-sm mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-[#D1D5DB] text-sm">
            <svg className="w-5 h-5 text-[#0E7C7B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// Stat Card Component
const StatCard = ({ stat, suffix, label, description, delay = 0 }: { stat: number; suffix?: string; label: string; description: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: delay * 0.15 }}
      className="text-center"
    >
      <div className="inline-flex items-baseline justify-center gap-1 mb-3">
        <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#D4A017] to-[#F0C040] bg-clip-text text-transparent">
          <AnimatedCounter end={stat} suffix={suffix} />
        </span>
      </div>
      <div className="text-[#0E7C7B] font-semibold text-lg mb-2">{label}</div>
      <p className="text-[#9CA3AF] text-sm leading-relaxed">{description}</p>
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
            <p className="pb-6 text-[#9CA3AF] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function AIAutomationPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const services = [
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your business data, enabling predictive analytics, pattern recognition, and intelligent decision-making that transforms raw data into actionable insights.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      features: [
        "Predictive Analytics Models",
        "Demand Forecasting",
        "Anomaly Detection Systems",
        "Customer Behavior Analysis",
        "Natural Language Processing",
        "Computer Vision Applications"
      ]
    },
    {
      title: "Process Automation",
      description: "Streamline operations by automating repetitive tasks, reducing errors, and freeing your team to focus on high-value strategic work that drives business growth.",
      icon: "M4 4v5h.582m15.582 0A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      features: [
        "Workflow Automation",
        "Robotic Process Automation (RPA)",
        "Intelligent Document Processing",
        "Automated Reporting",
        "Integration with Enterprise Systems",
        "Custom Automation Scripts"
      ]
    },
    {
      title: "AI Agents & Assistants",
      description: "Intelligent virtual agents that handle customer service, internal queries, and complex multi-step tasks autonomously, delivering consistent experiences at scale.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      features: [
        "Customer Support Agents",
        "Virtual Business Assistants",
        "Sales & Lead Qualification Bots",
        "Knowledge Base Assistants",
        "Multi-language Support",
        "Contextual Conversation AI"
      ]
    },
    {
      title: "Data Analytics & Insights",
      description: "Transform raw data into actionable business intelligence with advanced analytics, dashboards, and real-time reporting that drive informed decision-making.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      features: [
        "Real-time Dashboards",
        "Business Intelligence",
        "Performance Metrics",
        "Trend Analysis",
        "Custom Reporting",
        "Data Visualization"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "We analyze your business processes, identify automation opportunities, and assess data readiness for AI implementation. This phase includes comprehensive stakeholder interviews, technical audits, and gap analysis to ensure we understand your complete operational landscape before proposing solutions.",
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    },
    {
      number: "02",
      title: "Strategy & Roadmapping",
      description: "Our experts develop a comprehensive AI strategy aligned with your business goals, prioritizing high-impact use cases and creating a phased implementation roadmap with clear milestones, resource allocation, and expected outcomes at each stage.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    },
    {
      number: "03",
      title: "Proof of Concept",
      description: "We build rapid prototypes to validate AI solutions with your data, demonstrating feasibility and ROI before committing to full-scale development. This includes model training, initial testing, and stakeholder demonstrations to validate assumptions.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    },
    {
      number: "04",
      title: "Development & Integration",
      description: "Our team develops production-ready AI models and automation workflows, seamlessly integrating them with your existing systems, databases, and third-party applications while maintaining data security and compliance standards.",
      icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
    },
    {
      number: "05",
      title: "Deployment & Optimization",
      description: "We deploy solutions to production environments, ensuring proper scaling, monitoring, and performance optimization. Continuous learning mechanisms keep models accurate over time while maintaining system reliability and responsiveness.",
      icon: "M5 12h14M12 5l7 7-7 7"
    },
    {
      number: "06",
      title: "Training & Support",
      description: "Comprehensive training for your team ensures adoption success. We provide ongoing support, model updates, and continuous improvement services to maximize your ROI and ensure long-term success.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    }
  ];

  const caseStudies = [
    {
      title: "Intelligent Customer Support Automation",
      company: "Global Financial Services Firm",
      metric: "73%",
      metricLabel: "Resolution Rate",
      description: "Implemented an AI-powered support system that handles 10,000+ daily inquiries, reducing ticket volume by 65% while improving customer satisfaction scores by 45%. The system uses advanced NLP to understand customer intent and provides instant responses for routine queries while escalating complex issues to human agents.",
      tags: ["NLP", "Chatbots", "Financial Services"]
    },
    {
      title: "Predictive Maintenance System",
      company: "Manufacturing Conglomerate",
      metric: "89%",
      metricLabel: "Downtime Reduction",
      description: "Deployed ML models across 500+ machines to predict failures before they occur, preventing unplanned downtime and saving an estimated $12M annually in maintenance costs. The system analyzes sensor data in real-time and alerts maintenance teams days before potential failures.",
      tags: ["Predictive Analytics", "IoT", "Manufacturing"]
    },
    {
      title: "Automated Invoice Processing",
      company: "Healthcare System",
      metric: "95%",
      metricLabel: "Processing Accuracy",
      description: "Replaced manual invoice processing with intelligent document recognition and automated workflows, reducing processing time from 5 days to 4 hours. The AI extracts relevant data from invoices, validates against purchase orders, and routes for approval automatically.",
      tags: ["Document AI", "RPA", "Healthcare"]
    },
    {
      title: "Demand Forecasting & Inventory Optimization",
      company: "Retail Distribution Network",
      metric: "$8.2M",
      metricLabel: "Annual Savings",
      description: "AI-driven demand prediction reduced inventory waste by 34% while improving product availability, leading to significant cost savings and customer satisfaction improvements. Machine learning models analyze historical sales, seasonal trends, and external factors.",
      tags: ["ML", "Supply Chain", "Retail"]
    }
  ];

  const testimonials = [
    {
      quote: "Krovos transformed our operations with AI automation. Their team understood our complex requirements and delivered solutions that exceeded our expectations. We've seen a 73% improvement in support ticket resolution and our customers love the faster response times. The ROI was evident within the first quarter.",
      author: "Sarah Chen",
      role: "VP of Operations",
      company: "Global Financial Services"
    },
    {
      quote: "The predictive maintenance system has been a game-changer. We went from reacting to failures to preventing them. The ROI was visible within the first quarter, and the ongoing value continues to grow as the models learn from our data. Our maintenance team now has actionable insights before problems occur.",
      author: "David Martinez",
      role: "CTO",
      company: "Manufacturing Corp"
    },
    {
      quote: "Our invoice processing used to take days. Now it's automated and handles 95% of documents without any human intervention. The Krovos team made the implementation seamless and the results have been remarkable. Our AP team can now focus on strategic spend analysis instead of manual data entry.",
      author: "Jennifer Williams",
      role: "Director of Finance",
      company: "Regional Healthcare System"
    }
  ];

  const keyBenefits = [
    {
      title: "Operational Efficiency",
      description: "Automate up to 80% of repetitive tasks, reducing manual effort and human error while accelerating process completion by 10x. Your team focuses on strategic work while AI handles the routine.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Cost Reduction",
      description: "AI solutions typically reduce operational costs by 30-60% through automation, optimization, and predictive capabilities. Achieve more with less while improving quality and consistency.",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Scalable Growth",
      description: "AI systems handle increased volume without proportional cost increases, enabling your business to scale efficiently. Add capacity instantly without adding headcount.",
      icon: "M4 4v5h.582m15.582 0A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    },
    {
      title: "Data-Driven Decisions",
      description: "Transform data into actionable insights with real-time analytics, enabling faster and more accurate business decisions. Move from intuition to evidence-based strategy.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      title: "Enhanced Customer Experience",
      description: "Deliver personalized, instant responses 24/7 while maintaining consistent quality across all customer touchpoints. Build lasting relationships through superior service.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: "Competitive Advantage",
      description: "Leverage cutting-edge AI technology to differentiate your offerings and stay ahead of competitors in your industry. Innovation that sets you apart.",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    }
  ];

  const faqItems = [
    {
      question: "What industries do you specialize in for AI automation?",
      answer: "We have extensive experience across multiple industries including financial services, healthcare, manufacturing, retail, logistics, and enterprise technology. Our team includes domain experts who understand the unique challenges and regulatory requirements of each sector. We tailor our AI solutions to address industry-specific workflows, compliance needs, and business objectives. This cross-industry experience allows us to bring best practices and innovative approaches from one sector to benefit clients in another."
    },
    {
      question: "How long does it typically take to implement AI automation?",
      answer: "Implementation timelines vary based on complexity and scope. A single AI agent can be deployed in 2-4 weeks, while enterprise-wide automation initiatives typically take 3-6 months. We follow an iterative approach, delivering incremental value at each phase so you can see results quickly while building toward comprehensive transformation. Our proof of concept phase often delivers initial value within 2-3 weeks, allowing you to validate the approach before committing to full implementation."
    },
    {
      question: "What kind of ROI can we expect from AI automation?",
      answer: "Our clients typically see ROI within 6-12 months of implementation. Common returns include 40-80% reduction in manual processing time, 30-50% cost savings in operational workflows, and significant improvements in accuracy and consistency. We provide detailed ROI projections during the strategy phase and track performance metrics continuously. Many clients report ROI exceeding 300% within the first year, with ongoing savings accumulating in subsequent years."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "Security is foundational to everything we build. We implement enterprise-grade security measures including end-to-end encryption, role-based access controls, and comprehensive audit logging. Our solutions comply with SOC 2, GDPR, HIPAA, and other relevant regulations. We also provide on-premises deployment options for organizations with strict data sovereignty requirements. Our security team conducts regular penetration testing and vulnerability assessments to maintain the highest security standards."
    },
    {
      question: "Can AI agents integrate with our existing systems?",
      answer: "Yes, our AI solutions integrate seamlessly with a wide range of enterprise systems including ERP platforms (SAP, Oracle), CRM systems (Salesforce, Microsoft Dynamics), legacy databases, cloud services, and custom applications. We use API-first architecture and support both cloud and on-premises integrations. Our integration specialists have experience with over 200+ enterprise systems and can quickly connect to your existing technology stack without disrupting operations."
    },
    {
      question: "What ongoing support and maintenance do you provide?",
      answer: "We offer comprehensive support packages including 24/7 monitoring, performance optimization, model retraining, and continuous improvement. Our dedicated support team ensures your AI agents remain accurate and effective as your business evolves. We also provide training for your teams to manage and extend the solutions. Support packages are scalable and can be adjusted based on your needs, from basic maintenance to full managed services."
    },
    {
      question: "How do you handle AI bias and ethical considerations?",
      answer: "We have robust frameworks for AI ethics and bias mitigation. This includes diverse training data selection, regular bias audits, explainable AI models, and human-in-the-loop controls for high-stakes decisions. Our solutions are designed with transparency and fairness as core principles. We provide detailed documentation of model decisions and can implement additional safeguards for industries with strict fairness requirements. Our ethical AI framework has been validated by independent auditors."
    },
    {
      question: "What makes Krovos different from other AI automation providers?",
      answer: "Krovos combines deep enterprise expertise with cutting-edge AI technology. Unlike pure technology providers, we understand business processes and ROI. Our approach focuses on measurable outcomes, not just technology deployment. With a track record of 500+ successful implementations and 85%+ efficiency gains, we deliver proven results. Our team includes former business executives who understand the strategic context, not just technical implementation. We partner with you as a strategic advisor, not just a vendor."
    }
  ];

  return (
    <div className="bg-[#0A1628] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0E7C7B]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#D4A017]/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#0E7C7B]/10 to-transparent rounded-full" />
        </motion.div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0E7C7B]/20 border border-[#0E7C7B]/30 text-[#14B8A6] text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-[#0E7C7B] animate-pulse" />
                AI & Automation Division
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Intelligent Solutions for
                <br />
                <span className="bg-gradient-to-r from-[#D4A017] via-[#F0C040] to-[#D4A017] bg-clip-text text-transparent">
                  Modern Business
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[#9CA3AF] mb-10 max-w-3xl leading-relaxed">
                Transform your operations with cutting-edge artificial intelligence and automation solutions.
                From machine learning to intelligent agents, we build systems that think, learn, and deliver results that matter.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary text-lg px-10 py-4"
                  >
                    Start Your Transformation
                  </motion.button>
                </Link>
                <Link href="#case-studies">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary text-lg"
                  >
                    View Case Studies
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-[#D4A017]/20 shadow-2xl">
                <Image
                  src="/images/hero-ai-automation.png"
                  alt="AI Automation Platform"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4A017]/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#0E7C7B]/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-[#D4A017]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#060D18] border-y border-[#D4A017]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard stat={500} suffix="+" label="AI Projects" description="Successfully delivered" delay={0} />
            <StatCard stat={85} suffix="%" label="Cost Reduction" description="Average savings achieved" delay={1} />
            <StatCard stat={24} suffix="/7" label="AI Availability" description="Continuous operation" delay={2} />
            <StatCard stat={99} suffix="%" label="Accuracy Rate" description="In predictive models" delay={3} />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Future of Business is <span className="gradient-text">Intelligent</span>
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-4xl mx-auto leading-relaxed">
              Artificial intelligence is no longer a luxury - it is a necessity for businesses that want to thrive in the digital age.
              Our comprehensive AI & Automation services help you harness the full power of machine learning, process automation,
              and intelligent agents to transform your operations, reduce costs, and create exceptional customer experiences.
              We partner with you to identify the highest-impact opportunities and implement solutions that deliver measurable
              business outcomes from day one.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0D2040] rounded-3xl p-8 border border-[#D4A017]/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0E7C7B] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                Challenges We Solve
              </h3>
              <ul className="space-y-4">
                {[
                  "Manual, repetitive tasks consuming excessive employee time",
                  "Inconsistent customer service quality and response times",
                  "Inability to extract actionable insights from growing data volumes",
                  "Slow decision-making due to fragmented information",
                  "Scalability limitations during periods of growth",
                  "High operational costs from inefficient processes"
                ].map((problem, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#D1D5DB]">
                    <svg className="w-5 h-5 text-[#0E7C7B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="bg-[#0D2040] rounded-3xl p-8 border border-[#D4A017]/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4A017] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Our Solutions
              </h3>
              <ul className="space-y-4">
                {[
                  "Intelligent automation of repetitive workflows",
                  "AI-powered customer service available 24/7",
                  "Advanced analytics turning data into insights",
                  "Predictive models for proactive decision-making",
                  "Scalable cloud-based AI infrastructure",
                  "Continuous learning systems that improve over time"
                ].map((solution, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#D1D5DB]">
                    <svg className="w-5 h-5 text-[#D4A017] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {solution}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 bg-[#060D18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive AI & Automation Services
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              From initial strategy to full implementation, we provide end-to-end AI solutions
              tailored to your unique business requirements and industry-specific challenges.
            </p>
          </motion.div>

          <div className="bento-grid">
            {services.map((service, index) => (
              <BentoCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                colSpan={index === 0 ? 2 : 1}
                rowSpan={index === 0 ? 2 : 1}
                delay={index}
                accentColor={index % 2 === 0 ? "#D4A017" : "#0E7C7B"}
              >
                <div className="mt-6 pt-6 border-t border-[#D4A017]/10">
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-[#9CA3AF] text-sm">
                        <svg className="w-4 h-4 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Business Value Through AI
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              Our AI solutions deliver measurable business outcomes that impact your bottom line
              and create sustainable competitive advantage for years to come.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBenefits.map((benefit, index) => (
              <FeatureCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                features={[]}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#060D18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Implementation Process
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              A proven, systematic approach to AI implementation that minimizes risk
              and maximizes return on investment while keeping you informed at every step.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              See how leading organizations have transformed their operations
              with our AI and automation solutions, achieving measurable results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.title}
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

      {/* Technology Stack Section */}
      <section className="py-24 bg-gradient-to-br from-[#0D2040] via-[#0A1628] to-[#0D2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Powered by Leading Technologies
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              We leverage the most advanced AI frameworks and cloud platforms to build
              robust, scalable solutions that meet enterprise demands for reliability and performance.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "TensorFlow", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
              { name: "PyTorch", icon: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" },
              { name: "AWS AI", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
              { name: "Azure AI", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" },
              { name: "Google Cloud AI", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
              { name: "OpenAI", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
              { name: "LangChain", icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
              { name: "Kubernetes", icon: "M4 4v5h.582m15.582 0A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#0D2040] border border-[#D4A017]/10 hover:border-[#D4A017]/30 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0E7C7B] to-[#14B8A6] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tech.icon} />
                  </svg>
                </div>
                <span className="font-medium text-white">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              Hear from organizations that have transformed their businesses with our AI solutions,
              achieving results that exceeded their expectations.
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

      {/* ROI Section */}
      <section className="py-24 bg-[#060D18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Return on Investment
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              Our AI solutions are designed to deliver measurable financial returns within the first year of implementation,
              with proven results across diverse industries and business sizes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-[#0D2040] rounded-3xl border border-[#D4A017]/10"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-[#D4A017] to-[#F0C040] bg-clip-text text-transparent mb-3">
                <AnimatedCounter end={30} suffix="%" />
              </div>
              <div className="text-[#0E7C7B] font-semibold mb-2">Average Cost Reduction</div>
              <p className="text-[#9CA3AF] text-sm">Through automation and optimization</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-[#0D2040] rounded-3xl border border-[#D4A017]/10"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-[#D4A017] to-[#F0C040] bg-clip-text text-transparent mb-3">
                <AnimatedCounter end={10} suffix="x" />
              </div>
              <div className="text-[#0E7C7B] font-semibold mb-2">Faster Processing</div>
              <p className="text-[#9CA3AF] text-sm">Compared to manual workflows</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 bg-[#0D2040] rounded-3xl border border-[#D4A017]/10"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-[#D4A017] to-[#F0C040] bg-clip-text text-transparent mb-3">
                <AnimatedCounter end={6} suffix=" mo" />
              </div>
              <div className="text-[#0E7C7B] font-semibold mb-2">Average Payback Period</div>
              <p className="text-[#9CA3AF] text-sm">For AI implementation investments</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-8 bg-[#0D2040] rounded-3xl border border-[#D4A017]/10"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-[#D4A017] to-[#F0C040] bg-clip-text text-transparent mb-3">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <div className="text-[#0E7C7B] font-semibold mb-2">Client Retention</div>
              <p className="text-[#9CA3AF] text-sm">Continue partnership post-implementation</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#060D18]">
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
            <p className="text-xl text-[#9CA3AF]">
              Get answers to common questions about our AI automation solutions.
            </p>
          </motion.div>

          <div className="bg-[#0D2040] rounded-3xl p-6 lg:p-8 border border-[#D4A017]/10">
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
      <section className="py-24 bg-gradient-to-r from-[#0E7C7B] via-[#14B8A6] to-[#0E7C7B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
              Join the businesses leveraging AI to drive innovation, reduce costs, and deliver exceptional experiences.
              Our team is ready to help you get started on your AI transformation journey.
            </p>
            <Link href="/contact?service=ai-automation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#0A1628] text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                Schedule a Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
