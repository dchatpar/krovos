"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  ServiceIllustration,
  FeatureWithImage,
  ProcessStep,
  MetricBox,
  TestimonialCard,
  IntegrationLogo,
  WorkflowDiagram,
} from "@/components/landing/ServiceComponents";

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

// Parallax Section Component
const ParallaxSection = ({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

// Bento Grid Item Component
const BentoCard = ({
  title,
  description,
  icon,
  gradient,
  size = "normal",
  delay = 0,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  size?: "small" | "medium" | "large" | "normal";
  delay?: number;
}) => {
  const sizeClasses = {
    small: "col-span-1",
    medium: "col-span-1 md:col-span-2",
    large: "col-span-1 md:col-span-2 lg:col-span-2",
    normal: "col-span-1",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`${sizeClasses[size]} group relative bg-white/60 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      <div className="relative z-10">
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm lg:text-base text-slate-600">{description}</p>
      </div>
    </motion.div>
  );
};

// FAQ Accordion Component
const FAQItem = ({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="border-b border-slate-200 last:border-0"
  >
    <button onClick={onToggle} className="w-full py-5 flex items-center justify-between text-left group">
      <span className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{question}</span>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-6 flex items-center justify-center"
      >
        <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.span>
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
          <p className="pb-5 text-slate-600 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

// Comparison Row Component
const ComparisonRow = ({
  metric,
  before,
  after,
  isHighlight,
}: {
  metric: string;
  before: string;
  after: string;
  isHighlight?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`flex items-center justify-between py-4 px-6 rounded-xl ${isHighlight ? "bg-blue-50 border border-blue-200" : "bg-white border border-slate-100"}`}
  >
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <span className="font-medium text-slate-700">{metric}</span>
    </div>
    <div className="flex items-center gap-8">
      <span className="text-red-500 font-semibold">{before}</span>
      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-green-600 font-bold">{after}</span>
    </div>
  </motion.div>
);

// Case Study Card Component
const CaseStudyCard = ({
  company,
  industry,
  challenge,
  solution,
  results,
  metric,
}: {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  metric: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 group"
  >
    <div className="h-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400" />
    <div className="p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
          {company[0]}
        </div>
        <div>
          <h4 className="text-xl font-bold text-slate-900">{company}</h4>
          <p className="text-sm text-slate-500">{industry}</p>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <h5 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-1">Challenge</h5>
          <p className="text-slate-600 text-sm">{challenge}</p>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-1">Solution</h5>
          <p className="text-slate-600 text-sm">{solution}</p>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-1">Results</h5>
          <p className="text-slate-600 text-sm">{results}</p>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">{metric}</div>
        <p className="text-sm text-slate-500">Improvement</p>
      </div>
    </div>
  </motion.div>
);

// Technical Spec Component
const TechSpecItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
    <span className="text-slate-600">{label}</span>
    <span className="font-semibold text-slate-900">{value}</span>
  </div>
);

// Data for sections
const metrics = [
  { value: "60%", label: "Faster MTTR", description: "Mean Time To Resolution" },
  { value: "80%", label: "Fewer Manual Tasks", description: "Automated workflows" },
  { value: "99.9%", label: "Uptime", description: "Guaranteed SLA" },
  { value: "45%", label: "Cost Reduction", description: "Operational savings" },
];

const heroStats = [
  { value: 500, suffix: "+", label: "Enterprise Customers" },
  { value: 2, suffix: "M+", label: "Incidents Resolved" },
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 24, suffix: "/7", label: "AI Monitoring" },
];

const benefits = [
  { value: 60, suffix: "%", label: "Faster Incident Resolution", description: "AI-powered triage and automated routing reduce response times dramatically" },
  { value: 80, suffix: "%", label: "Task Automation", description: "Free your team from repetitive manual tasks with intelligent workflows" },
  { value: 45, suffix: "%", label: "Cost Savings", description: "Reduce operational costs through efficient resource utilization" },
  { value: 99.9, suffix: "%", label: "System Availability", description: "Proactive monitoring ensures maximum uptime for critical systems" },
];

const bentoFeatures = [
  {
    title: "Intelligent Incident Management",
    description: "AI-powered incident detection, classification, and automated routing to the right teams.",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
    gradient: "from-orange-500 via-red-500 to-pink-500",
    size: "medium" as const,
    delay: 0,
  },
  {
    title: "Automated Asset Discovery",
    description: "Continuous scanning and tracking of all hardware and software assets across your infrastructure.",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    size: "small" as const,
    delay: 0.1,
  },
  {
    title: "Compliance Automation",
    description: "SOC 2, HIPAA, GDPR compliance monitoring with automated evidence collection and reporting.",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    size: "small" as const,
    delay: 0.2,
  },
  {
    title: "Smart Patch Management",
    description: "Automated vulnerability scanning, risk-based prioritization, and staged patch deployment.",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>,
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    size: "medium" as const,
    delay: 0.3,
  },
  {
    title: "Real-Time Monitoring",
    description: "Comprehensive observability across infrastructure, applications, and services with intelligent alerting.",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    gradient: "from-amber-500 via-orange-500 to-red-500",
    size: "large" as const,
    delay: 0.4,
  },
];

const bentoFeatures2 = [
  {
    title: "ServiceNow Integration",
    description: "Bi-directional sync with ServiceNow for seamless ITSM workflows and CMDB updates.",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
    gradient: "from-blue-600 to-blue-800",
    size: "small" as const,
    delay: 0,
  },
  {
    title: "Slack/Teams Notifications",
    description: "Instant alerts and incident channels in your communication tools for faster collaboration.",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    gradient: "from-purple-600 to-purple-800",
    size: "small" as const,
    delay: 0.1,
  },
  {
    title: "Cloud Cost Optimization",
    description: "AI analysis of cloud spend with recommendations for cost reduction and resource optimization.",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    gradient: "from-teal-600 to-cyan-800",
    size: "medium" as const,
    delay: 0.2,
  },
  {
    title: "Custom Workflow Builder",
    description: "Visual drag-and-drop workflow designer for creating custom automation sequences.",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
    gradient: "from-rose-600 to-pink-800",
    size: "large" as const,
    delay: 0.3,
  },
];

const useCases = [
  {
    title: "Infrastructure Monitoring",
    description: "Comprehensive monitoring for servers, networks, and cloud infrastructure with intelligent alerting.",
    features: ["Server health monitoring", "Network performance", "Cloud resource tracking", "Custom metrics"],
    gradient: "from-slate-600 via-zinc-500 to-gray-400",
  },
  {
    title: "Application Performance",
    description: "Full-stack APM with distributed tracing, auto-discovery, and performance optimization.",
    features: ["APM & tracing", "Error tracking", "User experience monitoring", "Dependency mapping"],
    gradient: "from-blue-600 via-indigo-500 to-violet-400",
  },
  {
    title: "Security Operations",
    description: "Automated threat detection, vulnerability management, and security compliance.",
    features: ["Threat detection", "Vulnerability scanning", "SIEM integration", "Compliance reporting"],
    gradient: "from-red-600 via-orange-500 to-amber-400",
  },
  {
    title: "Cloud Management",
    description: "Multi-cloud orchestration, cost analytics, and resource optimization across AWS, Azure, GCP.",
    features: ["Multi-cloud support", "Cost analytics", "Resource optimization", "Compliance automation"],
    gradient: "from-cyan-600 via-teal-500 to-emerald-400",
  },
];

const problems = [
  {
    title: "Alert Fatigue",
    description: "Your team is overwhelmed with thousands of alerts daily, making it impossible to identify critical issues.",
    impact: "Mean time to resolution increases, team morale drops, and critical incidents slip through the cracks.",
  },
  {
    title: "Manual Processes",
    description: "Repetitive tasks like incident triage, asset tracking, and compliance checks consume 40% of IT time.",
    impact: "High operational costs, human errors, and inability to focus on strategic initiatives.",
  },
  {
    title: "Siloed Tools",
    description: "Multiple disconnected tools create data gaps, slow incident response, and lack unified visibility.",
    impact: "Inability to quickly diagnose issues, delayed escalations, and poor stakeholder communication.",
  },
  {
    title: "Compliance Burden",
    description: "Manual compliance audits consume weeks of effort and leave organizations vulnerable to gaps.",
    impact: "Audit failures, security vulnerabilities, and potential regulatory penalties.",
  },
];

const processSteps = [
  {
    number: "Step 01",
    title: "Connect Your Tools",
    description: "Integrate with your existing IT stack including ServiceNow, Jira, Slack, and cloud platforms in minutes.",
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
  {
    number: "Step 02",
    title: "Define Workflows",
    description: "Configure automation rules and workflows using our visual builder or pre-built templates.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    number: "Step 03",
    title: "Activate Automation",
    description: "Deploy AI agents that work 24/7 to handle incidents, updates, and compliance tasks automatically.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    number: "Step 04",
    title: "Monitor & Optimize",
    description: "Track performance metrics, identify trends, and continuously improve automation rules.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const integrations = [
  { name: "ServiceNow", color: "bg-blue-600" },
  { name: "Jira", color: "bg-blue-500" },
  { name: "Slack", color: "bg-purple-600" },
  { name: "Splunk", color: "bg-green-600" },
  { name: "Datadog", color: "bg-indigo-600" },
  { name: "AWS", color: "bg-orange-500" },
  { name: "Azure", color: "bg-blue-400" },
  { name: "GCP", color: "bg-red-500" },
  { name: "Kubernetes", color: "bg-blue-700" },
  { name: "Ansible", color: "bg-red-600" },
];

const testimonials = [
  {
    quote: "Krovos reduced our incident response time by 65%. The AI-powered triage routes issues to the right teams instantly, and our MTTR has never been better.",
    author: "Sarah Chen",
    role: "VP of Infrastructure",
    company: "TechScale Inc",
  },
  {
    quote: "We automated 80% of our compliance checks that used to take days. Now we get real-time alerts and audit-ready reports with zero manual effort.",
    author: "Michael Torres",
    role: "CISO",
    company: "FinSecure Bank",
  },
  {
    quote: "The patch management automation alone saved us 40 hours per week. Our team can finally focus on strategic projects instead of firefighting.",
    author: "Emily Rodriguez",
    role: "IT Director",
    company: "GlobalTech Solutions",
  },
];

const caseStudies = [
  {
    company: "TechScale Inc",
    industry: "SaaS / 2,000 employees",
    challenge: "Overwhelmed by 10,000+ daily alerts with only 3-person NOC team. Mean time to resolution was 4+ hours.",
    solution: "Deployed Krovos AI agents for intelligent alert triage, automated incident classification, and smart routing.",
    results: "Reduced alert noise by 85%, automated 70% of incident responses, and improved MTTR to under 30 minutes.",
    metric: "65%",
  },
  {
    company: "FinSecure Bank",
    industry: "Financial Services / 5,000 employees",
    challenge: "Manual SOC 2 compliance audits taking 6 weeks twice a year. Unable to maintain continuous compliance.",
    solution: "Implemented continuous compliance monitoring with automated evidence collection and real-time policy enforcement.",
    results: "Achieved continuous SOC 2 compliance, reduced audit preparation to under 1 week, and prevented 12 policy violations.",
    metric: "90%",
  },
  {
    company: "GlobalTech Solutions",
    industry: "Enterprise Software / 3,500 employees",
    challenge: "Patch management across 5,000 endpoints was entirely manual, causing 3+ month delays in critical security updates.",
    solution: "Deployed automated vulnerability scanning, risk-based prioritization, and staged patch deployment with rollback.",
    results: "Reduced patch deployment time from 3 months to 48 hours. Zero critical vulnerabilities in the last 12 months.",
    metric: "95%",
  },
];

const faqs = [
  {
    question: "How does AI-powered incident triage work?",
    answer: "Our AI engine analyzes incoming incidents using natural language processing to understand the context, severity, and affected systems. It then automatically classifies the incident, determines the appropriate response team, and can even execute predefined remediation steps. The system learns from your team's actions over time, improving accuracy and reducing false positives by up to 90%.",
  },
  {
    question: "What integrations do you support?",
    answer: "We integrate with over 200+ enterprise tools including ServiceNow, Jira, Slack, Microsoft Teams, Splunk, Datadog, PagerDuty, AWS, Azure, GCP, Kubernetes, and more. Our integration library covers ITSM platforms, monitoring tools, communication platforms, cloud providers, and security tools. Custom integrations can be built through our REST API or webhook support.",
  },
  {
    question: "How long does implementation take?",
    answer: "Most customers are up and running within 2-4 weeks. The initial setup includes connecting your existing tools (typically takes 1-2 days), configuring basic automation rules (1 week), and training the AI on your specific workflows (2 weeks). For organizations with complex requirements, we offer accelerated onboarding programs that can get you operational in as little as 1 week.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We are SOC 2 Type II certified, GDPR compliant, and follow industry-best security practices. Your data is encrypted at rest and in transit using AES-256 encryption. We offer data residency options in US, EU, and APAC regions. Our infrastructure is hosted on AWS with redundant failovers and 99.9% uptime SLA. We never use your data to train models shared with other customers.",
  },
  {
    question: "What happens if the AI makes a mistake?",
    answer: "Our AI is designed to augment human decision-making, not replace it. All automated actions can be reviewed and modified. You have full control over automation confidence thresholds - for critical actions, the AI can suggest actions for human approval. Our system also includes a complete audit trail of all AI decisions, allowing your team to review and improve the system continuously.",
  },
  {
    question: "Can I customize the automation workflows?",
    answer: "Yes, our visual workflow builder allows you to create custom automation sequences without writing code. You can define triggers, conditions, and actions based on your specific requirements. We also provide hundreds of pre-built templates for common IT operations scenarios. For advanced users, our API allows programmatic access to extend functionality even further.",
  },
  {
    question: "How does pricing work?",
    answer: "We offer tiered pricing based on the number of monitored assets, incidents, and automation volume. Our Starter plan starts at $499/month for small teams, Professional at $1,499/month for growing organizations, and Enterprise includes custom pricing with unlimited automation. All plans include a 14-day free trial with full functionality.",
  },
  {
    question: "Do you offer on-premise deployment?",
    answer: "Yes, we offer both cloud and on-premise deployment options. Our cloud solution is ideal for organizations wanting quick deployment and minimal infrastructure management. For organizations with strict data sovereignty requirements or those operating in air-gapped environments, we offer an on-premise solution that can be installed in your data center or private cloud (AWS Outposts, Azure Stack, GCP Anthos).",
  },
];

const technicalSpecs = [
  { label: "Deployment Options", value: "Cloud, On-Premise, Hybrid" },
  { label: "Supported Platforms", value: "AWS, Azure, GCP, On-Premise, Kubernetes" },
  { label: "API Rate Limit", value: "10,000 requests/minute" },
  { label: "Data Retention", value: "13 months (configurable)" },
  { label: "Encryption", value: "AES-256 at rest, TLS 1.3 in transit" },
  { label: "Uptime SLA", value: "99.9% availability" },
  { label: "Incident Processing", value: "100,000+ per day" },
  { label: "Alert Sources", value: "200+ integrations" },
  { label: "Compliance", value: "SOC 2 Type II, GDPR, HIPAA, ISO 27001" },
  { label: "Support", value: "24/7 Enterprise with 1-hour response" },
];

const comparisonData = [
  { metric: "Incident Response Time", before: "4+ hours", after: "15 minutes" },
  { metric: "Alert Noise Reduction", before: "10,000 alerts/day", after: "500 alerts/day" },
  { metric: "Compliance Audit Time", before: "6 weeks", after: "1 week" },
  { metric: "Patch Deployment", before: "3 months", after: "48 hours" },
  { metric: "Manual Tasks", before: "40% of team time", after: "8% of team time" },
  { metric: "False Positive Rate", before: "35%", after: "3%" },
];

export default function ITOpsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section with Animated Stats */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm text-blue-700 text-sm font-semibold mb-6 border border-blue-200/50"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                IT Operations
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight"
              >
                Automate your{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                  IT operations
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-xl text-slate-600 max-w-xl mx-auto lg:mx-0"
              >
                Deploy AI agents that handle incident triage, asset management, compliance checks,
                and patch deployment. Free your IT team to focus on strategic work.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link
                  href="/signup"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all hover:scale-105"
                >
                  Start free trial
                </Link>
                <Link
                  href="/demo"
                  className="px-8 py-4 bg-white/60 backdrop-blur-sm text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-white transition-all"
                >
                  Book demo
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  14-day free trial
                </div>
              </motion.div>
            </div>

            {/* Right - Service Illustration */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative bg-white/40 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl shadow-blue-500/10 p-8"
              >
                <ServiceIllustration type="IT Operations" className="w-full h-64 lg:h-80" />

                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Incident Resolved</div>
                    <div className="text-xs text-slate-500">in 2.3 minutes</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white" />
                      <div className="w-8 h-8 bg-cyan-500 rounded-full border-2 border-white" />
                      <div className="w-8 h-8 bg-teal-500 rounded-full border-2 border-white" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">3 agents active</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Animated Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm lg:text-base font-medium text-slate-700 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <MetricBox
                key={index}
                value={metric.value}
                label={metric.label}
                description={metric.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              The IT Operations Challenge
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Modern IT teams face unprecedented challenges. Discover how Krovos transforms these problems into opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{problem.title}</h3>
                    <p className="text-slate-600 mb-4">{problem.description}</p>
                    <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                      <p className="text-sm text-red-700"><span className="font-semibold">Impact:</span> {problem.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Solution highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white font-semibold shadow-lg shadow-blue-500/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Krovos AI-Powered Solution: All-in-One Platform
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features Section 1 */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Everything you need to run efficient IT operations
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A comprehensive platform that automates the entire IT operations lifecycle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bentoFeatures.map((feature, index) => (
              <BentoCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                gradient={feature.gradient}
                size={feature.size}
                delay={feature.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Animated Counters */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Transform your IT operations
            </h2>
            <p className="mt-4 text-lg text-blue-200">
              Measurable business outcomes that drive real value for your organization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter end={benefit.value} suffix={benefit.suffix} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {benefit.label}
                </h3>
                <p className="text-blue-200 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Platform Architecture
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A modern, scalable architecture designed for enterprise-grade reliability and security
            </p>
          </motion.div>

          {/* Architecture visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left - Data Sources */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Data Sources</h3>
                {["Cloud Infrastructure", "Applications", "Network Devices", "Security Tools", "Custom APIs"].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Center - Processing */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">AI Processing Layer</h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl shadow-lg shadow-blue-500/30"
                >
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="font-bold text-lg">Krovos Engine</div>
                    <div className="text-sm text-blue-100 mt-1">Machine Learning & Automation</div>
                  </div>
                </motion.div>
                <div className="flex justify-center gap-2 mt-4">
                  <div className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Ingestion</div>
                  <div className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-medium rounded-full">Analysis</div>
                  <div className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">Action</div>
                </div>
              </div>

              {/* Right - Outputs */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Actions & Insights</h3>
                {["Incident Response", "Automated Remediation", "Compliance Reports", "Cost Optimization", "Analytics Dashboard"].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl"
                  >
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center ml-auto">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Comprehensive Use Cases
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tailored solutions for every aspect of your IT operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className={`h-2 bg-gradient-to-r ${useCase.gradient}`} />
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{useCase.description}</p>
                  <ul className="space-y-3">
                    {useCase.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Before & After Krovos
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See the dramatic improvements organizations achieve with AI-powered IT operations
            </p>
          </motion.div>

          <div className="space-y-4">
            {comparisonData.map((item, index) => (
              <ComparisonRow
                key={index}
                metric={item.metric}
                before={item.before}
                after={item.after}
                isHighlight={index % 2 === 0}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all hover:scale-105"
            >
              See full comparison
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features Section 2 */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Integrations & Extensibility
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Connect with your existing tools and build custom workflows
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bentoFeatures2.map((feature, index) => (
              <BentoCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                gradient={feature.gradient}
                size={feature.size}
                delay={feature.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process/Workflow Deep Dive */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Your journey to automated IT operations
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A proven four-step process that ensures successful implementation and adoption
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>

          {/* Workflow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl"
          >
            <WorkflowDiagram steps={["Connect", "Configure", "Automate", "Monitor", "Optimize"]} />
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how leading enterprises transform their IT operations with Krovos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                company={study.company}
                industry={study.industry}
                challenge={study.challenge}
                solution={study.solution}
                results={study.results}
                metric={study.metric}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Technical Specifications
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Enterprise-grade capabilities designed for scale and security
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSpecs.map((spec, index) => (
                <TechSpecItem key={index} label={spec.label} value={spec.value} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Trusted by leading enterprises
            </h2>
            <p className="mt-3 text-slate-400">
              Seamlessly integrates with your existing IT stack
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {integrations.map((integration, index) => (
              <IntegrationLogo
                key={index}
                name={integration.name}
                color={integration.color || "bg-slate-600"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to know about Krovos IT Operations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-3xl p-6 lg:p-8"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Loved by IT teams
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how leading companies transform their IT operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Ready to transform your IT operations?
          </h2>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Join thousands of IT teams who have automated their operations and reduced MTTR by 60%.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="px-10 py-5 bg-white text-indigo-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/25 transition-all hover:scale-105"
            >
              Start free trial
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              Contact sales
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              SOC 2 Compliant
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              GDPR Ready
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              99.9% Uptime SLA
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 2 - Alternative */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 rounded-3xl p-8 lg:p-16 overflow-hidden"
          >
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Start your free trial today
              </h2>
              <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
                No credit card required. Get full access to all features for 14 days.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/signup"
                  className="px-10 py-5 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/25 transition-all hover:scale-105"
                >
                  Start free trial
                </Link>
                <Link
                  href="/demo"
                  className="px-10 py-5 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-white/30 transition-all"
                >
                  Schedule demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
