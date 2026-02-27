"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

// Parallax Section Component
const ParallaxSection = ({ children, offset = 50 }: { children: React.ReactNode; offset?: number }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -offset]);

  return <motion.div style={{ y }}>{children}</motion.div>;
};

// Glass Card Component
const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl ${className}`}>
    {children}
  </div>
);

// Bento Grid Item Component
const BentoItem = ({ children, className = "", colSpan = 1, rowSpan = 1 }: { children: React.ReactNode; className?: string; colSpan?: number; rowSpan?: number }) => (
  <div className={`col-span-${colSpan} row-span-${rowSpan} ${className}`}>
    {children}
  </div>
);

// Accordion Component for FAQ
const AccordionItem = ({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="border-b border-slate-200 last:border-0"
  >
    <button
      onClick={onToggle}
      className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
    >
      <span className="text-lg font-semibold text-slate-900">{question}</span>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="ml-4 flex-shrink-0"
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
          <p className="pb-6 text-slate-600 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

// Animated Gradient Border Component
const AnimatedGradientBorder = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative rounded-3xl ${className}`}>
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 p-[2px]">
      <div className="absolute inset-0 rounded-3xl bg-white" />
    </div>
    <div className="relative rounded-[22px] bg-white">
      {children}
    </div>
  </div>
);

// Stats data for hero section
const heroStats = [
  { value: 75, suffix: "%", label: "Faster Processing", description: "Invoice automation speed" },
  { value: 98, suffix: "%", label: "Accuracy Rate", description: "AI-powered validation" },
  { value: 60, suffix: "%", label: "Cost Reduction", description: "Operational savings" },
  { value: 24, suffix: "/7", label: "Automation", description: "Continuous processing" },
];

// Bento grid features
const bentoFeatures = [
  {
    title: "Accounts Payable Automation",
    description: "Automate invoice processing from receipt to payment with intelligent data extraction and approval workflows.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    colSpan: "md:col-span-2",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Accounts Receivable Management",
    description: "Streamline invoice generation, payment tracking, and collections with automated follow-ups.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    colSpan: "md:col-span-1",
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "Invoice Processing",
    description: "AI-powered extraction and processing with automatic validation and matching.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z M 9 14l2 2 4-4",
    colSpan: "md:col-span-1",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Payment Reconciliation",
    description: "Automated bank matching with intelligent exception handling.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    colSpan: "md:col-span-2",
    color: "from-amber-600 to-yellow-600",
  },
  {
    title: "Expense Management",
    description: "Receipt scanning, policy compliance, and automatic categorization.",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    colSpan: "md:col-span-1",
    color: "from-yellow-600 to-orange-600",
  },
];

// Advanced features data
const advancedFeatures = [
  {
    title: "Budget Forecasting",
    description: "Leverage AI to create accurate budget forecasts based on historical data, trends, and predictive modeling.",
    features: ["ML-based predictions", "Scenario modeling", "Variance analysis", "Rolling forecast updates"],
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Financial Reporting",
    description: "Generate real-time financial reports and dashboards with customizable KPIs and automated data consolidation.",
    features: ["Real-time dashboard generation", "Custom KPI tracking", "Multi-entity consolidation", "Automated report scheduling"],
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Cash Flow Analysis",
    description: "Monitor and predict cash flow with real-time insights and scenario planning tools.",
    features: ["Real-time cash visibility", "Predictive modeling", "Scenario planning", "Working capital optimization"],
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Audit Trails",
    description: "Maintain comprehensive audit trails with complete visibility into all financial transactions.",
    features: ["Complete transaction logging", "User activity tracking", "Change history", "Export capabilities"],
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    title: "Compliance Management",
    description: "Ensure compliance with SOX, GAAP, IFRS, and other regulatory standards with automated controls.",
    features: ["SOX compliance automation", "GAAP/IFRS alignment", "Policy enforcement", "Automated compliance reports"],
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Multi-Currency Support",
    description: "Handle global transactions with automatic currency conversion and exchange rate management.",
    features: ["150+ currencies supported", "Real-time exchange rates", "Hedging management", "FX gain/loss tracking"],
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z M 3.5 9 a 6.5 6.5 0 0 1 13 0 M 3.5 9 a 6.5 6.5 0 0 0 13 0",
  },
  {
    title: "ERP Integration",
    description: "Seamlessly connect with SAP, Oracle, NetSuite, and other major ERP systems.",
    features: ["Native SAP integration", "Oracle EBS support", "NetSuite connector", "Custom API support"],
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
  },
  {
    title: "Bank Reconciliation",
    description: "Automate bank statement reconciliation with intelligent matching algorithms.",
    features: ["Automated bank feeds", "Smart matching rules", "Exception handling", "Reconciliation reports"],
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
  {
    title: "Cost Optimization",
    description: "Identify cost-saving opportunities and optimize spending across your organization.",
    features: ["Cost analysis dashboards", "Vendor management", "Contract insights", "Savings tracking"],
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
  },
  {
    title: "Revenue Recognition",
    description: "Automate revenue recognition with ASC 606 and IFRS 15 compliance.",
    features: ["Automated schedules", "Multi-element arrangements", "Contract management", "Compliance reporting"],
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
  {
    title: "Tax Automation",
    description: "Automate tax calculations, filings, and compliance across jurisdictions.",
    features: ["Multi-jurisdiction support", "Tax rate management", "Filing calendars", "Audit preparation"],
    icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z",
  },
  {
    title: "Integration Hub",
    description: "Connect with 500+ business applications through our unified integration platform.",
    features: ["Pre-built connectors", "Custom integrations", "Real-time sync", "Webhook support"],
    icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
  },
];

// Process steps
const processSteps = [
  {
    number: "Step 01",
    title: "Connect Financial Systems",
    description: "Integrate with your ERP, accounting software, banking systems, and other financial data sources in minutes.",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
  {
    number: "Step 02",
    title: "Configure Workflows",
    description: "Set up automation rules, approval hierarchies, and compliance controls tailored to your finance processes.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    number: "Step 03",
    title: "Deploy AI Agents",
    description: "Launch autonomous finance agents that process invoices, reconcile payments, and generate reports 24/7.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

// Case studies data
const caseStudies = [
  {
    company: "Global Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Manual invoice processing taking 5+ days with 15% error rate",
    solution: "Deployed Krovos AP automation with AI-powered extraction",
    results: [
      { label: "Processing Time", value: "5 days", improvement: "to 4 hours" },
      { label: "Error Rate", value: "15%", improvement: "to 0.5%" },
      { label: "Cost Savings", value: "$1.2M", improvement: "annually" },
    ],
    quote: "Krovos transformed our entire accounts payable process. What used to take a week now happens in hours, and our error rate is virtually zero.",
    author: "Robert Martinez",
    role: "CFO",
  },
  {
    company: "Meridian Healthcare",
    industry: "Healthcare",
    challenge: "Complex multi-entity financial consolidation taking 10+ days monthly",
    solution: "Implemented unified financial reporting with automated consolidation",
    results: [
      { label: "Close Time", value: "10 days", improvement: "to 2 days" },
      { label: "Entities Consolidated", value: "25", improvement: "automatically" },
      { label: "Reporting Accuracy", value: "95%", improvement: "to 99.9%" },
    ],
    quote: "The multi-entity consolidation feature is a game-changer. Our monthly close is now a fraction of what it used to be.",
    author: "Amanda Foster",
    role: "CFO",
  },
  {
    company: "TechVentures Capital",
    industry: "Financial Services",
    challenge: "SOX compliance audits requiring 3+ months of preparation",
    solution: "Automated audit trails and compliance controls with real-time monitoring",
    results: [
      { label: "Audit Prep Time", value: "3 months", improvement: "to 1 week" },
      { label: "Findings", value: "12", improvement: "to 1" },
      { label: "Compliance Score", value: "78%", improvement: "to 99%" },
    ],
    quote: "Compliance reporting that used to take days now happens automatically. SOX audits are painless with complete audit trails at our fingertips.",
    author: "Patricia Williams",
    role: "Controller",
  },
];

// ROI metrics data
const roiMetrics = [
  { value: 300, suffix: "%", label: "ROI", description: "Average return on investment within first year" },
  { value: 6, suffix: " months", label: "Payback", description: "Typical payback period" },
  { value: 2.5, suffix: "M", label: "Saved", description: "Average annual savings per 1000 invoices" },
  { value: 80, suffix: "%", label: "Time Saved", description: "Reduction in manual finance tasks" },
];

// Integrations
const integrations = [
  { name: "SAP", color: "bg-blue-600" },
  { name: "Oracle", color: "bg-red-600" },
  { name: "QuickBooks", color: "bg-green-600" },
  { name: "NetSuite", color: "bg-blue-500" },
  { name: "Xero", color: "bg-blue-400" },
  { name: "Microsoft Dynamics", color: "bg-blue-700" },
  { name: "Stripe", color: "bg-purple-600" },
  { name: "PayPal", color: "bg-blue-500" },
  { name: "ADP", color: "bg-red-500" },
  { name: "Workday", color: "bg-blue-600" },
  { name: "Sage", color: "bg-teal-600" },
  { name: "FreshBooks", color: "bg-red-400" },
];

// FAQ data
const faqData = [
  {
    question: "How long does implementation typically take?",
    answer: "Most implementations are completed within 4-8 weeks depending on complexity. Our onboarding team works closely with you to ensure a smooth transition with minimal disruption to your operations. Phase 1 typically goes live in 2-3 weeks with core AP/AR automation.",
  },
  {
    question: "What happens to my existing data?",
    answer: "We provide comprehensive data migration services to ensure all your historical financial data is properly imported and structured in the new system. Our team handles data mapping, validation, and verification to guarantee data integrity throughout the migration process.",
  },
  {
    question: "Is the system SOC 2 and SOX compliant?",
    answer: "Yes, Krovos is SOC 2 Type II certified and fully compliant with SOX requirements. We maintain complete audit trails, role-based access controls, and automated compliance reporting. Our platform is regularly audited by independent third parties to ensure continuous compliance.",
  },
  {
    question: "Can I integrate with my existing ERP system?",
    answer: "Absolutely. We offer native integrations with all major ERP systems including SAP, Oracle, Microsoft Dynamics, NetSuite, and more. Our integration hub supports 500+ business applications with pre-built connectors and custom API capabilities for unique requirements.",
  },
  {
    question: "How does the AI-powered invoice processing work?",
    answer: "Our AI engine uses advanced machine learning models trained on millions of invoices to automatically extract relevant data including vendor details, line items, amounts, and dates. The system continuously learns from corrections to improve accuracy over time, typically achieving 98%+ accuracy after initial training.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide comprehensive 24/7 support through dedicated account managers, technical support teams, and a self-service knowledge base. Enterprise customers also receive priority support with guaranteed response times and dedicated implementation assistance.",
  },
  {
    question: "Can the system handle multiple currencies and international transactions?",
    answer: "Yes, our platform supports 150+ currencies with real-time exchange rate updates, automatic conversion, and comprehensive FX gain/loss tracking. We also support multi-entity and multi-country configurations for global organizations.",
  },
  {
    question: "How is pricing structured?",
    answer: "Our pricing is based on transaction volume and the specific modules you need. We offer tiered pricing plans starting from basic AP automation to full-suite financial operations. Contact our sales team for a customized quote based on your organization's specific requirements.",
  },
];

// Testimonials
const testimonials = [
  {
    quote: "Krovos transformed our accounts payable process. We reduced invoice processing time by 75% and eliminated nearly all manual data entry errors. The ROI has exceeded our expectations.",
    author: "Amanda Foster",
    role: "CFO",
    company: "Meridian Healthcare",
  },
  {
    quote: "The AI-powered reconciliation saved us 40 hours per week. Our team now focuses on strategic financial planning instead of manual matching. Best investment we've made.",
    author: "Christopher Lee",
    role: "Finance Director",
    company: "Global Retail Inc",
  },
  {
    quote: "Compliance reporting that used to take days now happens automatically. SOX audits are painless with complete audit trails at our fingertips. Game changer for our finance team.",
    author: "Patricia Williams",
    role: "Controller",
    company: "TechVentures Capital",
  },
  {
    quote: "The multi-currency support is exceptional. Managing payments across 30+ countries is now seamless, and the real-time exchange rate handling has saved us significant money.",
    author: "James Wilson",
    role: "VP of Finance",
    company: "International Trade Co",
  },
  {
    quote: "We processed over $2 billion through Krovos last year with zero errors. The system is incredibly reliable and the automated controls give us complete confidence.",
    author: "Sarah Thompson",
    role: "CFO",
    company: "Capital Investments Ltd",
  },
  {
    quote: "Implementation was smooth and the team was incredibly supportive. Within 3 months, we saw dramatic improvements in our month-end close process.",
    author: "Michael Torres",
    role: "Controller",
    company: "Manufacturing Solutions",
  },
];

export default function FinancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Extended Hero Section with Animated Stats */}
      <section className="relative py-20 lg:py-40 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 backdrop-blur-sm text-amber-700 text-sm font-semibold mb-6 border border-amber-200/50"
              >
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                AI-Powered Finance Operations
              </motion.div>

              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Automate your{" "}
                <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
                  finance operations
                </span>
              </h1>

              <p className="mt-6 text-xl text-slate-600 max-w-xl mx-auto lg:mx-0">
                Deploy AI agents that handle accounts payable/receivable, expense management,
                reconciliation, and compliance. Transform your finance department into a strategic partner.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/signup"
                  className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-amber-500/25 transition-all hover:scale-105"
                >
                  Start free trial
                </Link>
                <Link
                  href="/demo"
                  className="px-8 py-4 bg-white/60 backdrop-blur-sm text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-white transition-all"
                >
                  Book demo
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
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
              </div>
            </motion.div>

            {/* Right - Service Illustration with floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl shadow-amber-500/10 p-8">
                <ServiceIllustration type="Finance" className="w-full h-64 lg:h-80" />

                {/* Floating cards with animations */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Invoice Processed</div>
                    <div className="text-xs text-slate-500">in 12 seconds</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-amber-500 rounded-full border-2 border-white" />
                      <div className="w-8 h-8 bg-yellow-500 rounded-full border-2 border-white" />
                      <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">$2.4M processed</div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-orange-500/10 rounded-full blur-3xl" />
            </motion.div>
          </div>

          {/* Animated Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-lg font-semibold text-slate-700 mt-2">{stat.label}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Metrics Section with Glassmorphism */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-400" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "75%", label: "Faster Processing", description: "Invoice to payment automation" },
              { value: "98%", label: "Accuracy Rate", description: "AI-powered validation" },
              { value: "60%", label: "Cost Reduction", description: "Reduced manual effort" },
            ].map((metric, index) => (
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

      {/* Bento Grid Features Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Comprehensive Financial Automation
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to streamline your finance operations with AI-powered automation
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bentoFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${feature.colSpan} group`}
              >
                <GlassCard className="h-full p-8 hover:bg-white/20 transition-all duration-300 group-hover:-translate-y-2">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    className={`h-1 bg-gradient-to-r ${feature.color} mt-6 rounded-full`}
                  />
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section with Parallax */}
      <section className="py-20 lg:py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Enterprise-Grade Financial Capabilities
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Advanced features designed for modern finance teams operating at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advancedFeatures.map((feature, index) => (
              <ParallaxSection key={index} offset={20}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-slate-600 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.features.map((f, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-center text-sm text-slate-600"
                          >
                            <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {f}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Metrics Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Proven Return on Investment
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              See the measurable impact Krovos delivers to finance organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {roiMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/10 hover:border-amber-500/30 transition-all"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-lg font-semibold text-white mt-2">{metric.label}</div>
                <div className="text-sm text-slate-400 mt-1">{metric.description}</div>
              </motion.div>
            ))}
          </div>

          {/* ROI Calculator CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/roi-calculator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-colors"
            >
              Calculate Your ROI
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how leading companies transform their finance operations with Krovos
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6">
                  <div className="text-white/80 text-sm font-medium">{study.industry}</div>
                  <h3 className="text-2xl font-bold text-white mt-2">{study.company}</h3>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-slate-500 mb-1">Challenge</div>
                    <p className="text-slate-700">{study.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-slate-500 mb-1">Solution</div>
                    <p className="text-slate-700">{study.solution}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-amber-600">{result.value}</div>
                        <div className="text-xs text-slate-500">{result.improvement}</div>
                      </div>
                    ))}
                  </div>
                  <blockquote className="border-t pt-4">
                    <p className="text-slate-600 italic">&ldquo;{study.quote}&rdquo;</p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold">
                        {study.author[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{study.author}</div>
                        <div className="text-sm text-slate-500">{study.role}</div>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              How it works
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Get started in minutes with our three-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
          <div className="mt-16 p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl">
            <WorkflowDiagram steps={["Connect", "Configure", "Automate", "Monitor", "Report"]} />
          </div>
        </div>
      </section>

      {/* Integration Hub Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Integration Hub
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Connect with 500+ business applications through our unified integration platform
            </p>
          </div>

          {/* Featured Integrations */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {integrations.slice(0, 8).map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <IntegrationLogo
                  name={integration.name}
                  color={integration.color || "bg-slate-600"}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/integrations"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              View All Integrations
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Trusted by Finance Teams Worldwide
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See what finance leaders say about their experience with Krovos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                Enterprise-Grade Security & Compliance
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Built for the most demanding regulatory environments with comprehensive security controls and compliance automation.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "SOC 2 Type II Certified" },
                  { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01", label: "SOX Compliant" },
                  { icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3", label: "GAAP & IFRS Aligned" },
                  { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "256-bit Encryption" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                    <span className="font-semibold text-slate-900">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <AnimatedGradientBorder className="p-8">
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-4">
                    99.99%
                  </div>
                  <div className="text-xl font-semibold text-slate-900">Uptime SLA</div>
                  <div className="text-slate-500 mt-2">Guaranteed availability for enterprise deployments</div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-xl">
                    <div className="text-2xl font-bold text-slate-900">0</div>
                    <div className="text-sm text-slate-500">Data Breaches</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-xl">
                    <div className="text-2xl font-bold text-slate-900">24/7</div>
                    <div className="text-sm text-slate-500">Security Monitoring</div>
                  </div>
                </div>
              </AnimatedGradientBorder>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to know about Krovos finance automation
            </p>
          </div>

          <div className="space-y-0">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-100 to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Ready to Transform Your Finance Operations?
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Join thousands of finance teams who have automated their operations and reduced processing time by 75%.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="px-10 py-5 bg-gradient-to-r from-amber-600 to-yellow-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-amber-500/25 transition-all hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
              >
                Schedule Consultation
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SOC 2 Compliant
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SOX Compliant
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                99.9% Uptime SLA
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Start Your Finance Transformation Today
          </h2>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Get started with a 14-day free trial. No credit card required. Full access to all features.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="px-10 py-5 bg-white text-amber-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/25 transition-all hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              Contact Sales
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-white/70">Integrations</div>
            </div>
            <div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-white/70">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold">$50B+</div>
              <div className="text-white/70">Processed Monthly</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
