"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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

// Animated counter hook
function useAnimatedCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, target, duration]);

  return { count, ref };
}

// Animated stat component
function AnimatedStat({ value, suffix, label, description }: { value: number; suffix?: string; label: string; description: string }) {
  const { count, ref } = useAnimatedCounter(value);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
        {count}{suffix || ""}%
      </div>
      <div className="text-lg font-semibold text-slate-700 mt-2">{label}</div>
      <div className="text-sm text-slate-500 mt-1">{description}</div>
    </div>
  );
}

// Bento grid item component
function BentoCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Parallax section component
function ParallaxSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

// Glassmorphism card component
function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white/60 backdrop-blur-lg border border-white/50 rounded-3xl shadow-xl ${className}`}>
      {children}
    </div>
  );
}

// Animated gradient border component
function GradientBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-3xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-rose-600 via-pink-500 to-red-500 rounded-3xl animate-pulse" style={{ opacity: 0.5 }} />
      <div className="absolute inset-0.5 bg-white rounded-3xl" />
      <div className="relative">{children}</div>
    </div>
  );
}

// FAQ accordion item
function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-slate-200 last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left"
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
            <p className="pb-6 text-slate-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Main metrics data
const metrics = [
  { value: 75, label: "Faster Onboarding", description: "Reduced time to productivity" },
  { value: 85, label: "Less Manual Work", description: "Automated HR workflows" },
  { value: 99.9, suffix: "%", label: "Compliance Rate", description: "Automated tracking" },
  { value: 50, label: "Cost Savings", description: "Reduced administrative overhead" },
];

// Feature sections data
const hrFeatures = [
  {
    title: "Employee Onboarding",
    description: "Transform new hire experiences with comprehensive digital onboarding that accelerates time-to-productivity and ensures compliance from day one.",
    icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
    features: [
      "Digital onboarding checklists with progress tracking",
      "Automated document collection and e-signatures",
      "IT provisioning and access management",
      "Welcome video messaging from leadership",
      "Team introduction and buddy matching",
      "Compliance training automation",
      "Manager dashboard for tracking progress",
      "Customizable onboarding templates",
    ],
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "Offboarding Automation",
    description: "Ensure smooth employee departures with automated exit processes that protect your organization and maintain compliance.",
    icon: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
    features: [
      "Automated exit interview scheduling",
      "Asset return tracking and management",
      "Access revocation workflows",
      "Final paycheck processing",
      "COBRA notification automation",
      "Knowledge transfer checklists",
      "Offboarding survey automation",
      "Alumni network enrollment",
    ],
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Time-Off Management",
    description: "Simplify leave management with intelligent workflows, automatic accruals, and seamless calendar integrations.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    features: [
      "Multi-type leave request management",
      "Automated approval workflows",
      "Accrual tracking and projections",
      "Team calendar synchronization",
      "Holiday calendar management",
      "Leave balance dashboards",
      "Carryover automation",
      "FMLA and extended leave tracking",
    ],
    color: "from-pink-500 to-rose-400",
  },
  {
    title: "Payroll Processing",
    description: "Eliminate manual payroll errors with automated calculations, multi-jurisdiction tax compliance, and seamless integrations.",
    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
    features: [
      "Automated payroll calculations",
      "Multi-state tax processing",
      "Direct deposit and pay card support",
      "Year-end reporting and W-2s",
      "Multi-currency support",
      "Audit trail generation",
      "Bonus and commission tracking",
      "Garnishment management",
    ],
    color: "from-orange-500 to-amber-400",
  },
  {
    title: "Benefits Administration",
    description: "Streamline benefits enrollment and management with automated eligibility checks and carrier integrations.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    features: [
      "Open enrollment automation",
      "Life events processing",
      "Benefits eligibility automation",
      "Carrier integrations (medical, dental, vision)",
      "COBRA management",
      "Cost analytics and reporting",
      "Benefits comparison tools",
      "Dependent management",
    ],
    color: "from-amber-500 to-yellow-400",
  },
  {
    title: "Performance Management",
    description: "Enable continuous performance enablement with goal tracking, reviews, and feedback loops.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    features: [
      "Goal cascade management",
      "Review cycle automation",
      "360-degree feedback collection",
      "Performance dashboards",
      "Competency framework tracking",
      "Career development planning",
      "Performance calibration sessions",
      "Merit cycle automation",
    ],
    color: "from-yellow-500 to-green-400",
  },
  {
    title: "Goal Tracking",
    description: "Align individual and team goals with organizational objectives through OKR and goal management tools.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    features: [
      "OKR and KPI tracking",
      "Goal alignment visualization",
      "Progress automation",
      "Check-in reminders",
      "Goal achievement analytics",
      "Team goal aggregation",
      "Historical goal tracking",
      "Goal templates by department",
    ],
    color: "from-green-500 to-teal-400",
  },
  {
    title: "360 Reviews",
    description: "Gather comprehensive feedback from all directions with automated 360-degree review processes.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    features: [
      "Multi-rater survey automation",
      "Anonymous feedback collection",
      "Review cycle management",
      "Competency rating scales",
      "Written feedback templates",
      "Review synthesis reports",
      "Development recommendations",
      "Trend analysis across time",
    ],
    color: "from-teal-500 to-cyan-400",
  },
  {
    title: "Compensation Planning",
    description: "Manage salary planning, bonuses, and equity compensation with data-driven insights and审批 workflows.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    features: [
      "Salary structure management",
      "Merit increase planning",
      "Bonus pool allocation",
      "Equity compensation tracking",
      "Market benchmarking",
      "Compensation analytics",
      "Budget forecasting",
      "Approval workflows",
    ],
    color: "from-cyan-500 to-blue-400",
  },
  {
    title: "Skills Management",
    description: "Build a comprehensive skills inventory and identify gaps with AI-powered skill assessments.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    features: [
      "Skills inventory database",
      "Skill gap analysis",
      "Skills taxonomy management",
      "AI-powered skill recommendations",
      "Certification tracking",
      "Skills search and matching",
      "Team skills matrix",
      "Skills development paths",
    ],
    color: "from-blue-500 to-indigo-400",
  },
  {
    title: "Learning & Development",
    description: "Empower employee growth with integrated learning management and development pathways.",
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
    features: [
      "LMS integration",
      "Course catalog management",
      "Learning paths creation",
      "Completion tracking",
      "Training calendar",
      "Certification management",
      "Learning analytics",
      "Budget allocation",
    ],
    color: "from-indigo-500 to-purple-400",
  },
  {
    title: "Compliance Tracking",
    description: "Stay audit-ready with automated compliance monitoring, training tracking, and policy acknowledgments.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    features: [
      "Policy acknowledgment tracking",
      "Training completion monitoring",
      "I-9 and E-Verify",
      "EEO reporting",
      "Audit log automation",
      "Regulatory alerts",
      "Compliance dashboards",
      "Document retention",
    ],
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "Employee Self-Service",
    description: "Empower employees with comprehensive self-service for all HR-related tasks.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    features: [
      "Personal information updates",
      "Pay stub and tax document access",
      "Benefits enrollment and changes",
      "Team directory and org chart",
      "Time-off requests",
      "Performance reviews",
      "Training and certifications",
      "Company announcements",
    ],
    color: "from-pink-500 to-rose-400",
  },
  {
    title: "Manager Dashboard",
    description: "Equip managers with real-time insights and tools for effective team management.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    features: [
      "Team overview and analytics",
      "Direct report management",
      "Approval queue",
      "Time-off visibility",
      "Performance snapshots",
      "Compensation insights",
      "Headcount planning",
      "Team health metrics",
    ],
    color: "from-rose-500 to-red-400",
  },
  {
    title: "HR Analytics",
    description: "Transform HR data into actionable insights with comprehensive reporting and dashboards.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    features: [
      "Workforce demographics",
      "Turnover and attrition analysis",
      "Compensation benchmarking",
      "Diversity and inclusion metrics",
      "Training effectiveness",
      "Absence analytics",
      "Predictive modeling",
      "Custom report builder",
    ],
    color: "from-red-500 to-pink-400",
  },
  {
    title: "Org Chart Visualization",
    description: "Visualize your organizational structure with interactive and always-current org charts.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    features: [
      "Interactive org visualization",
      "Real-time updates",
      "Reporting line management",
      "Headcount by department",
      "Succession planning integration",
      "Role and title tracking",
      "Location-based views",
      "Export and presentation mode",
    ],
    color: "from-pink-500 to-purple-400",
  },
  {
    title: "Succession Planning",
    description: "Identify and develop future leaders with strategic succession planning and talent pools.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    features: [
      "Talent pool creation",
      "Readiness assessment",
      "Development planning",
      "High-potential identification",
      "Career path visualization",
      "Leadership competency mapping",
      "Succession scenario modeling",
      "Board reporting",
    ],
    color: "from-purple-500 to-violet-400",
  },
  {
    title: "Diversity & Inclusion",
    description: "Measure and improve workplace diversity with comprehensive D&I analytics and initiatives.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    features: [
      "Workforce diversity metrics",
      "Pay equity analysis",
      "Representation tracking",
      "Inclusion survey integration",
      "ERG management",
      "Hiring pipeline analytics",
      "Promotion equity analysis",
      "D&I goal tracking",
    ],
    color: "from-violet-500 to-indigo-400",
  },
];

// Integration data
const integrations = [
  { name: "Workday", color: "bg-orange-500", description: "HCM and Finance" },
  { name: "ADP", color: "bg-red-600", description: "Payroll & Time" },
  { name: "BambooHR", color: "bg-green-600", description: "HR Software" },
  { name: "Greenhouse", color: "bg-green-500", description: "Recruiting" },
  { name: "Lever", color: "bg-orange-400", description: "Talent Acquisition" },
  { name: "Gusto", color: "bg-purple-600", description: "Payroll" },
  { name: "Okta", color: "bg-blue-600", description: "Identity Management" },
  { name: "Microsoft 365", color: "bg-blue-500", description: "Productivity" },
  { name: "Slack", color: "bg-purple-600", description: "Communication" },
  { name: "Google Workspace", color: "bg-red-500", description: "Productivity" },
  { name: "Salesforce", color: "bg-blue-600", description: "CRM" },
  { name: "ServiceNow", color: "bg-blue-500", description: "IT Service Mgmt" },
];

// Case studies data
const caseStudies = [
  {
    company: "TechCorp Global",
    industry: "Technology",
    employees: "5,000+",
    challenge: "Manual onboarding taking 3 weeks per new hire",
    solution: "Implemented automated onboarding workflows",
    results: [
      "75% reduction in onboarding time",
      "95% new hire satisfaction rate",
      "40 hours saved per week by HR team",
    ],
  },
  {
    company: "Healthcare Plus",
    industry: "Healthcare",
    employees: "10,000+",
    challenge: "Complex multi-state payroll compliance",
    solution: "Unified payroll with automated tax processing",
    results: [
      "100% compliance across 25 states",
      "Zero payroll errors in 2 years",
      "$1.2M annual cost savings",
    ],
  },
  {
    company: "RetailMax",
    industry: "Retail",
    employees: "25,000+",
    challenge: "High turnover and inconsistent onboarding",
    solution: "Standardized digital onboarding platform",
    results: [
      "50% reduction in turnover",
      "60% faster time-to-productivity",
      "92% employee satisfaction",
    ],
  },
];

// ROI metrics data
const roiMetrics = [
  { value: 847, suffix: "K", label: "Hours Saved Annually", description: "Average for mid-size companies" },
  { value: 2.3, suffix: "M", label: "Reduced Turnover Costs", description: "Through better onboarding" },
  { value: 99.9, suffix: "%", label: "Compliance Rate", description: "Automated tracking" },
  { value: 4.8, suffix: "/5", label: "Employee Satisfaction", description: "With self-service portal" },
];

// FAQ data
const faqItems = [
  {
    question: "How long does implementation take?",
    answer: "Most implementations are completed within 4-8 weeks depending on your organization's size and complexity. We provide a dedicated implementation team to ensure a smooth transition, including data migration, system configuration, and user training.",
  },
  {
    question: "Is the platform secure and compliant?",
    answer: "Absolutely. We are SOC 2 Type II certified, GDPR compliant, and maintain 99.9% uptime SLA. All data is encrypted at rest and in transit. We also support HIPAA compliance for healthcare organizations.",
  },
  {
    question: "Can we integrate with our existing HR systems?",
    answer: "Yes, we offer pre-built integrations with 50+ leading HR platforms including Workday, ADP, BambooHR, and more. Our open API allows for custom integrations as needed.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 customer support with dedicated account managers, comprehensive documentation, video tutorials, and regular training sessions. Enterprise customers also have access to priority support and custom SLAs.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start. We also provide complimentary demos and pilot programs for enterprise customers.",
  },
  {
    question: "How does pricing work?",
    answer: "Our pricing is per-employee-per-month (PEPM) and scales based on your organization size and selected features. We offer flexible plans starting at $8 PEPM with volume discounts for larger organizations.",
  },
];

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Connect Your HR Systems",
    description: "Integrate with your existing HRIS, payroll providers, and talent management systems in minutes using our pre-built connectors.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    number: "02",
    title: "Configure Workflows",
    description: "Set up automation rules for onboarding, time-off, and other HR processes using our intuitive visual workflow builder.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    number: "03",
    title: "Deploy HR Agents",
    description: "Launch AI-powered agents that work 24/7 to handle employee queries, requests, and administrative tasks.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    number: "04",
    title: "Monitor & Optimize",
    description: "Track performance with real-time dashboards and continuously improve your HR processes with AI insights.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

// Testimonials
const testimonials = [
  {
    quote: "Krovos transformed our onboarding process. New hires are productive in half the time, and our HR team saved 30 hours per week on administrative tasks. The ROI has exceeded our expectations.",
    author: "Jessica Williams",
    role: "Chief People Officer",
    company: "TechStart Innovations",
    employees: "2,500 employees",
  },
  {
    quote: "The compliance automation is a game-changer. We passed our latest audit with zero findings, and tracking training compliance went from manual spreadsheets to fully automated. Highly recommended.",
    author: "Robert Martinez",
    role: "VP of HR Operations",
    company: "GlobalTech Solutions",
    employees: "8,000 employees",
  },
  {
    quote: "Our employees love the self-service portal. HR inquiries dropped by 60%, and our team can finally focus on strategic talent initiatives instead of answering routine questions.",
    author: "Amanda Thompson",
    role: "HR Director",
    company: "FinanceFirst Corp",
    employees: "5,000 employees",
  },
];

// Main component
export default function HRPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-600 via-pink-500 to-red-500 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      {/* Hero Section */}
      <ParallaxSection className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-pink-50" />
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-40 right-20 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-400/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 12, repeat: Infinity, delay: 4 }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/80 backdrop-blur-sm text-rose-700 text-sm font-semibold mb-6 border border-rose-200/50"
              >
                <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
                Human Resources Solution
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight"
              >
                Transform your{" "}
                <span className="bg-gradient-to-r from-rose-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
                  HR operations
                </span>{" "}
                with AI
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-xl text-slate-600 max-w-xl mx-auto lg:mx-0"
              >
                Deploy intelligent AI agents that automate employee lifecycles, ensure compliance,
                and empower your workforce. From onboarding to offboarding, we handle it all.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link
                  href="/signup"
                  className="group px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-rose-500/25 transition-all hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10">Start free trial</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                <Link
                  href="/demo"
                  className="px-8 py-4 bg-white/60 backdrop-blur-sm text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-white transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch demo
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500"
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
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  SOC 2 Certified
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Service Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <GradientBorder className="relative bg-white/40 backdrop-blur-sm rounded-3xl shadow-2xl shadow-rose-500/10 p-8">
                <ServiceIllustration type="HR" className="w-full h-64 lg:h-80" />

                {/* Floating cards with animations */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Employee Onboarded</div>
                    <div className="text-xs text-slate-500">in 2 hours</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 cursor-pointer hover:scale-105 transition-transform"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="w-8 h-8 bg-rose-500 rounded-full border-2 border-white"
                      />
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.3 }}
                        className="w-8 h-8 bg-pink-500 rounded-full border-2 border-white"
                      />
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.4 }}
                        className="w-8 h-8 bg-red-500 rounded-full border-2 border-white"
                      />
                    </div>
                    <div className="text-sm font-medium text-slate-700">3 HR agents active</div>
                  </div>
                </motion.div>
              </GradientBorder>

              {/* Decorative elements */}
              <motion.div
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-red-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Animated Stats Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-600 via-pink-500 to-red-400" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <AnimatedStat
                key={index}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                description={metric.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid - HR Features Overview */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Complete HR Automation Suite
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From hire to retire, our comprehensive platform handles every aspect of human resource management
              with powerful AI-driven automation
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hrFeatures.slice(0, 6).map((feature, index) => (
              <BentoCard
                key={index}
                delay={index * 0.1}
                className={`group bg-white rounded-3xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 hover:-translate-y-2 ${
                  index === 0 || index === 5 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">{feature.description}</p>
                    <ul className="space-y-1">
                      {feature.features.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-center text-xs text-slate-500">
                          <svg className="w-4 h-4 text-rose-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>

          {/* View All Features Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-600 font-semibold rounded-xl border-2 border-rose-200 hover:border-rose-400 hover:bg-rose-50 transition-all"
            >
              View all features
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Deep Dive Sections - Each Feature */}
      {hrFeatures.slice(0, 12).map((feature, index) => (
        <section
          key={index}
          className={`py-20 lg:py-32 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${feature.color} text-white text-sm font-semibold mb-6`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature.title}
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h2>

                <p className="text-lg text-slate-600 mb-8">
                  {feature.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {feature.features.map((f, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-slate-600"
                    >
                      <span className={`w-6 h-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mr-3 flex-shrink-0`}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {f}
                    </motion.li>
                  ))}
                </ul>

                <Link
                  href="/demo"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${feature.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all hover:scale-105`}
                >
                  Learn more
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>

              {/* Image/Illustration */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <GlassCard className="p-8">
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8">
                    <ServiceIllustration type={feature.title} className="w-full h-64" />
                  </div>
                  {/* Floating feature list */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {feature.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`} />
                        {f.split(" ").slice(0, 2).join(" ")}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Integration Hub Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Integration Hub
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Seamlessly connect with your existing HR stack. Our pre-built integrations and open API
              ensure smooth data flow across all your systems
            </p>
          </motion.div>

          {/* Bento Grid for Integrations */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-500/10 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${integration.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-bold text-lg">{integration.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{integration.name}</div>
                    <div className="text-xs text-slate-500">{integration.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-slate-500 mb-4">Need a custom integration?</p>
            <Link
              href="/integrations"
              className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700"
            >
              View API documentation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
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
              See how leading companies transformed their HR operations with Krovos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-rose-500/10 transition-all group"
              >
                <div className="bg-gradient-to-r from-rose-600 to-pink-500 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{study.company}</h3>
                      <p className="text-white/80 text-sm">{study.industry}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                      <span className="text-white font-semibold">{study.employees}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-xs font-semibold text-rose-600 uppercase tracking-wider mb-2">Challenge</div>
                    <p className="text-slate-600 text-sm">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-semibold text-rose-600 uppercase tracking-wider mb-2">Solution</div>
                    <p className="text-slate-600 text-sm">{study.solution}</p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-rose-600 uppercase tracking-wider mb-3">Results</div>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Metrics Section */}
      <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Proven ROI
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Measure the impact of HR automation on your organization&apos;s bottom line
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roiMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  {metric.value}{metric.suffix}
                </div>
                <div className="text-lg font-semibold text-white mt-3">{metric.label}</div>
                <div className="text-sm text-slate-400 mt-1">{metric.description}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/roi-calculator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-600 font-semibold rounded-xl hover:shadow-xl transition-all"
            >
              Calculate your ROI
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              How it works
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Get started in minutes with our simple four-step process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-xl hover:shadow-rose-500/10 transition-all h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-500 flex items-center justify-center">
                      <span className="text-white font-bold">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Workflow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl"
          >
            <WorkflowDiagram steps={["Connect", "Configure", "Automate", "Monitor", "Optimize"]} />
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
              Loved by HR teams worldwide
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Join thousands of HR professionals who have transformed their operations
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

          {/* Company logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <p className="text-center text-slate-500 mb-8">Trusted by 500+ companies worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {["Fortune 500", "Tech 50", "Forbes Cloud 100", "G2 Leader", "Capterra Top HR"].map((company, i) => (
                <div key={i} className="text-xl font-bold text-slate-400">{company}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to know about Krovos HR
            </p>
          </motion.div>

          <div className="space-y-0">
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700"
            >
              Contact our team
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section 1 - Primary */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600" />
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold text-white"
          >
            Ready to transform your HR operations?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-white/80 max-w-2xl mx-auto"
          >
            Join thousands of HR teams who have automated their operations and reduced administrative workload by 85%
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/signup"
              className="px-10 py-5 bg-white text-rose-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/25 transition-all hover:scale-105"
            >
              Start free trial
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              Contact sales
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex items-center justify-center gap-8 text-white/60 text-sm"
          >
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
          </motion.div>
        </div>
      </section>

      {/* CTA Section 2 - Secondary */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  Need a personalized demo?
                </h3>
                <p className="text-lg text-slate-600 mb-8">
                  Our HR specialists will show you exactly how Krovos can transform your specific workflows and address your unique challenges.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Customized to your organization",
                    "Q&A with our experts",
                    "Implementation timeline overview",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <svg className="w-5 h-5 text-rose-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="/demo"
                  className="w-full px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-rose-500/25 transition-all text-center"
                >
                  Schedule a demo
                </Link>
                <Link
                  href="/pricing"
                  className="w-full px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 transition-all text-center"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
