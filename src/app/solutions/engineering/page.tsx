"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ServiceIllustration,
  FeatureWithImage,
  ProcessStep,
  MetricBox,
  TestimonialCard,
  IntegrationLogo,
  WorkflowDiagram,
} from "@/components/landing/ServiceComponents";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
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

// Bento grid item component
const BentoCard = ({
  title,
  description,
  icon,
  colSpan = 1,
  rowSpan = 1,
  delay = 0,
  children
}: {
  title: string;
  description: string;
  icon: string;
  colSpan?: number;
  rowSpan?: number;
  delay?: number;
  children?: React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`col-span-${colSpan} row-span-${rowSpan} group relative bg-white/60 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200/50 hover:border-slate-300/50 hover:bg-white/80 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-500/10 overflow-hidden`}
      style={{ gridColumn: `span ${colSpan}`, gridRow: `span ${rowSpan}` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-slate-600 to-zinc-500 flex items-center justify-center mb-4 shadow-lg shadow-slate-500/20">
          <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm lg:text-base text-slate-600 leading-relaxed">{description}</p>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </motion.div>
  );
};

// FAQ accordion item
const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-slate-200 last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-slate-900 group-hover:text-slate-700 transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <p className="pb-5 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Case study card
const CaseStudyCard = ({
  company,
  industry,
  challenge,
  solution,
  results,
  logo
}: {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  logo?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-slate-500/10 transition-all duration-500 group"
    >
      <div className="h-3 bg-gradient-to-r from-slate-600 via-zinc-500 to-gray-400" />
      <div className="p-6 lg:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">{company}</h3>
            <p className="text-sm text-slate-500">{industry}</p>
          </div>
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
            <span className="text-lg lg:text-xl font-bold text-slate-600">{company[0]}</span>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-1">Challenge</h4>
            <p className="text-sm text-slate-600">{challenge}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-1">Solution</h4>
            <p className="text-sm text-slate-600">{solution}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-2">Results</h4>
            <div className="flex flex-wrap gap-2">
              {results.map((result, i) => (
                <span key={i} className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200">
                  {result}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Parallax section component
const ParallaxSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

// Stats with animation
const StatCard = ({ value, label, description, delay = 0 }: { value: string; label: string; description: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className="text-center p-6"
    >
      <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-700 via-zinc-600 to-gray-500 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-lg font-semibold text-slate-800 mt-2">{label}</div>
      <div className="text-sm text-slate-500 mt-1">{description}</div>
    </motion.div>
  );
};

// Main metrics data
const metrics = [
  { value: "70%", label: "Faster Deployments", description: "Average deployment time reduction" },
  { value: "85%", label: "Code Coverage", description: "Automated test coverage achieved" },
  { value: "99.9%", label: "Pipeline Uptime", description: "CI/CD reliability guaranteed" },
  { value: "50%", label: "Less Manual Work", description: "Reduced developer toil" },
];

// Extended hero stats
const heroStats = [
  { value: 500, suffix: "+", label: "Enterprise Teams", description: "Using Krovos" },
  { value: 2, suffix: "M+", label: "Deployments/Year", description: "Automated" },
  { value: 99.99, suffix: "%", label: "Uptime SLA", description: "Guaranteed" },
  { value: 40, suffix: "%", label: "Cost Reduction", description: "Average savings" },
];

// Automation features - expanded list
const automationFeatures = [
  {
    title: "CI/CD Pipeline Automation",
    description: "Automate your entire build, test, and deployment pipeline with intelligent workflow orchestration.",
    features: [
      "Multi-stage pipeline configuration",
      "Parallel test execution",
      "Automatic rollback on failure",
      "Deployment scheduling",
    ],
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
    index: 0,
  },
  {
    title: "Infrastructure as Code",
    description: "Manage your infrastructure declaratively with automated provisioning and configuration.",
    features: [
      "Terraform and Ansible integration",
      "Environment parity",
      "Version-controlled configs",
      "Self-healing infrastructure",
    ],
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    index: 1,
  },
  {
    title: "Automated Testing & QA",
    description: "Comprehensive test automation across unit, integration, and end-to-end testing.",
    features: [
      "Smart test selection",
      "Visual regression testing",
      "Performance benchmarking",
      "Security vulnerability scanning",
    ],
    icon: "M9 12l2 2 4-4m6 2a2 2 0 11-4 0 2 2 0 014 0z",
    index: 2,
  },
  {
    title: "Code Review Automation",
    description: "Automate code quality checks and enforce standards before human review.",
    features: [
      "Automated linting",
      "Style consistency enforcement",
      "Security scan integration",
      "Complexity analysis",
    ],
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    index: 3,
  },
  {
    title: "Deployment Orchestration",
    description: "Coordinate complex deployments across multiple environments with zero downtime.",
    features: [
      "Blue-green deployments",
      "Canary releases",
      "Feature flags management",
      "Rollback automation",
    ],
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    index: 4,
  },
  {
    title: "Incident Management",
    description: "Automated incident detection, response, and resolution for production systems.",
    features: [
      "Intelligent alerting",
      "Automated runbooks",
      "Post-incident automation",
      "On-call management",
    ],
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    index: 5,
  },
];

// Bento grid features for DevSecOps
const devsecopsFeatures = [
  {
    title: "Security Scanning",
    description: "Automated SAST, DAST, and SCA scanning integrated into your CI/CD pipeline.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Container Security",
    description: "Scan container images for vulnerabilities and enforce security policies.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Compliance as Code",
    description: "Define and enforce compliance policies as code with automated audits.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Secrets Management",
    description: "Securely manage API keys, tokens, and credentials throughout their lifecycle.",
    icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
    colSpan: 1,
    rowSpan: 1,
  },
];

// GitOps features
const gitopsFeatures = [
  {
    title: "GitOps Workflows",
    description: "Manage infrastructure and applications through Git repositories.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    title: "Declarative Config",
    description: "Define desired state and let the system reconcile automatically.",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
  },
  {
    title: " drift Detection",
    description: "Automatically detect and correct configuration drift.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Audit Trail",
    description: "Complete history of all changes with rollback capability.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

// Cloud & container features
const cloudFeatures = [
  {
    title: "Container Orchestration",
    description: "Automated Kubernetes cluster management and workload scheduling.",
    features: [
      "Auto-scaling",
      "Service mesh integration",
      "Multi-cluster management",
      "Workload placement optimization",
    ],
  },
  {
    title: "Cloud Provisioning",
    description: "Provision and manage resources across AWS, Azure, and GCP.",
    features: [
      "Multi-cloud support",
      "Cost-aware scheduling",
      "Resource optimization",
      "Cloud-native integrations",
    ],
  },
  {
    title: "Cost Optimization",
    description: "Continuously optimize cloud spend with automated recommendations.",
    features: [
      "Right-sizing recommendations",
      "Spot instance management",
      "Reserved capacity planning",
      "Cost allocation tags",
    ],
  },
];

// Observability features
const observabilityFeatures = [
  {
    title: "Performance Monitoring",
    description: "Real-time application performance monitoring with AI-powered insights.",
    metrics: ["Response Time", "Throughput", "Error Rate", "Resource Usage"],
  },
  {
    title: "Log Aggregation",
    description: "Centralized logging with powerful search and analysis capabilities.",
    metrics: ["Centralized Logs", "Real-time Search", "Log Retention", "Alerting"],
  },
  {
    title: "Tracing & Metrics",
    description: "Distributed tracing and custom metrics for deep system visibility.",
    metrics: ["Distributed Traces", "Custom Metrics", "Dashboards", "SLO Tracking"],
  },
];

// Developer productivity features
const productivityFeatures = [
  {
    title: "Developer Experience",
    description: "Streamlined workflows that keep developers in the zone.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Self-Service Infrastructure",
    description: "Empower teams to provision resources without tickets.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Knowledge Sharing",
    description: "Automated documentation and runbook generation.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
];

// Integration data
const integrations = [
  { name: "GitHub", color: "bg-slate-800" },
  { name: "GitLab", color: "bg-orange-600" },
  { name: "Jenkins", color: "bg-red-600" },
  { name: "CircleCI", color: "bg-slate-700" },
  { name: "Terraform", color: "bg-purple-600" },
  { name: "AWS", color: "bg-orange-500" },
  { name: "Azure", color: "bg-blue-500" },
  { name: "GCP", color: "bg-red-500" },
  { name: "Kubernetes", color: "bg-blue-700" },
  { name: "Docker", color: "bg-blue-500" },
  { name: "Datadog", color: "bg-indigo-600" },
  { name: "New Relic", color: "bg-green-600" },
  { name: "Splunk", color: "bg-green-700" },
  { name: "PagerDuty", color: "bg-orange-500" },
  { name: "Slack", color: "bg-purple-600" },
  { name: "Vault", color: "bg-black" },
];

// Process steps
const processSteps = [
  {
    number: "Step 01",
    title: "Connect Your Repos",
    description: "Integrate with GitHub, GitLab, Bitbucket, or Azure DevOps in minutes with OAuth.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    number: "Step 02",
    title: "Define Your Pipeline",
    description: "Use our visual builder or YAML config to create automated workflows for any scenario.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    number: "Step 03",
    title: "Deploy with Confidence",
    description: "Let AI agents handle deployments, monitoring, and incident response 24/7.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

// Testimonials
const testimonials = [
  {
    quote: "Krovos cut our deployment time from 45 minutes to under 5. The automated rollback feature alone has saved us countless hours of incident response.",
    author: "David Kim",
    role: "VP of Engineering",
    company: "CloudScale Technologies",
  },
  {
    quote: "Our code review process is now 80% automated. Developers focus on logic and architecture while Krovos handles style, security, and quality checks.",
    author: "Amanda Foster",
    role: "Engineering Director",
    company: "DataFlow Systems",
  },
  {
    quote: "Infrastructure as Code with Krovos eliminated environment drift completely. What used to take days now takes minutes.",
    author: "Robert Chen",
    role: "CTO",
    company: "DevOps Inc",
  },
];

// Case studies
const caseStudies = [
  {
    company: "TechCorp Global",
    industry: "Enterprise SaaS",
    challenge: "Manual deployments causing 12+ hours of downtime per month, inconsistent environments across dev/staging/prod, and 40% of engineering time spent on operational tasks.",
    solution: "Implemented Krovos for full CI/CD automation, Infrastructure as Code with Terraform templates, and self-service provisioning for developers.",
    results: ["73% faster deployments", "99.99% uptime", "60% less toil", "40% cost reduction"],
  },
  {
    company: "FinanceHub",
    industry: "FinTech",
    challenge: "Strict compliance requirements with manual audit processes taking 2 weeks, slow incident response times, and inability to meet SOC 2 requirements efficiently.",
    solution: "Deployed DevSecOps pipeline with automated compliance scanning, integrated secrets management, and complete audit trail capabilities.",
    results: ["SOC 2 certified", "85% faster audits", "65% MTTR reduction", "Zero compliance gaps"],
  },
  {
    company: "MobileFirst Apps",
    industry: "Mobile Technology",
    challenge: "Complex multi-cloud infrastructure with escalating costs, manual container management, and lack of visibility into application performance.",
    solution: "Implemented Kubernetes orchestration with Krovos cost optimization, centralized observability stack, and automated scaling policies.",
    results: ["45% cloud cost savings", "Auto-scaling 99%", "Single dashboard view", "Zero manual scaling"],
  },
];

// FAQ data
const faqData = [
  {
    question: "How does Krovos integrate with our existing CI/CD tools?",
    answer: "Krovos provides native integrations with all major CI/CD platforms including Jenkins, GitHub Actions, GitLab CI, CircleCI, and Azure DevOps. Our agent-based approach works alongside your existing tools, enhancing them with AI-powered automation without requiring a complete migration. You can connect your repositories in minutes and start automating immediately.",
  },
  {
    question: "What security measures does Krovos implement?",
    answer: "Security is built into every layer of Krovos. We implement SOC 2 Type II compliance, end-to-end encryption, and zero-trust architecture. Our DevSecOps features include automated vulnerability scanning (SAST/DAST/SCA), container security scanning, secrets management via HashiCorp Vault integration, and compliance-as-code with OPA policies. All data is encrypted at rest and in transit.",
  },
  {
    question: "How long does implementation typically take?",
    answer: "Most customers are up and running within 1-2 weeks. The initial setup can be completed in a day for basic CI/CD automation. More comprehensive implementations with Infrastructure as Code, GitOps workflows, and full observability stack typically take 2-4 weeks. We provide dedicated onboarding support and documentation throughout the process.",
  },
  {
    question: "Can Krovos help with cost optimization?",
    answer: "Absolutely. Krovos includes comprehensive cost optimization features including right-sizing recommendations, spot instance management, reserved capacity planning, and resource utilization monitoring. Our customers typically see 30-50% reduction in cloud costs through automated resource optimization, waste identification, and cost-aware scheduling.",
  },
  {
    question: "What happens if a deployment fails?",
    answer: "Krovos provides automated rollback capabilities that can detect failures and automatically revert to the previous stable version within seconds. You can configure custom rollback triggers based on error rates, latency thresholds, or custom health checks. Detailed failure analytics help teams understand what went wrong and how to prevent similar issues in the future.",
  },
  {
    question: "Is there a trial period or demo available?",
    answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start. We also provide personalized demos where our engineering team can walk through specific use cases relevant to your organization. Contact our sales team to schedule a demo tailored to your needs.",
  },
];

// ROI metrics
const roiMetrics = [
  { value: "$2.3M", label: "Annual Savings", description: "Average enterprise savings" },
  { value: "47hrs", label: "Weekly/Engineer", description: "Time reclaimed from toil" },
  { value: "312%", label: "3-Year ROI", description: "Average return on investment" },
  { value: "4.2months", label: "Payback Period", description: "Time to positive ROI" },
];

export default function EngineeringPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="pt-16 lg:pt-20">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 via-zinc-500 to-gray-400 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section with Animated Stats */}
      <section ref={heroRef} className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-zinc-50" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-80 h-80 bg-zinc-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear_gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 backdrop-blur-sm text-slate-700 text-sm font-semibold mb-6 border border-slate-200/50"
              >
                <span className="w-2 h-2 bg-slate-500 rounded-full animate-pulse" />
                Engineering
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight"
              >
                Accelerate your{" "}
                <span className="bg-gradient-to-r from-slate-600 via-zinc-500 to-gray-400 bg-clip-text text-transparent">
                  engineering workflow
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-xl text-slate-600 max-w-xl mx-auto lg:mx-0"
              >
                Deploy AI agents that automate CI/CD pipelines, infrastructure as code, testing,
                and incident management. Let your developers focus on building great products.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link
                  href="/signup"
                  className="px-8 py-4 bg-gradient-to-r from-slate-600 to-zinc-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-slate-500/25 transition-all hover:scale-105"
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
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
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
              </motion.div>
            </div>

            {/* Right - Service Illustration */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative bg-white/40 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl shadow-slate-500/10 p-8"
              >
                <ServiceIllustration type="Engineering" className="w-full h-64 lg:h-80" />

                {/* Floating cards */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Build Complete</div>
                    <div className="text-xs text-slate-500">in 2.3 minutes</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-slate-500 rounded-full border-2 border-white" />
                      <div className="w-8 h-8 bg-zinc-500 rounded-full border-2 border-white" />
                      <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">5 agents active</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-slate-500/10 via-zinc-500/10 to-gray-500/10 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Animated hero stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center p-4 lg:p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-slate-100">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-700 via-zinc-600 to-gray-500 bg-clip-text text-transparent">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm lg:text-base font-semibold text-slate-800 mt-1">{stat.label}</div>
                <div className="text-xs lg:text-sm text-slate-500">{stat.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-600 via-zinc-500 to-gray-400" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
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

      {/* What You Can Automate Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              What you can automate
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Empower your engineering team with AI agents that handle the entire software delivery lifecycle
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {automationFeatures.map((feature, index) => (
              <FeatureWithImage
                key={index}
                title={feature.title}
                description={feature.description}
                features={feature.features}
                index={feature.index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DevSecOps Bento Grid Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                DevSecOps & Security
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Built-in security at every stage of your development lifecycle
              </p>
            </div>
          </ParallaxSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {devsecopsFeatures.map((feature, index) => (
              <BentoCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                colSpan={feature.colSpan}
                rowSpan={feature.rowSpan}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* GitOps Workflows Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              GitOps Workflows
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Single source of truth for your entire infrastructure and application state
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gitopsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-600 to-zinc-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Container & Cloud Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Container & Cloud Orchestration
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Seamless management across Kubernetes and multi-cloud environments
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cloudFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">{feature.title}</h3>
                <p className="text-slate-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((f, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-600">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Observability Section */}
      <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-slate-700/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-zinc-700/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Full-Stack Observability
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Complete visibility into your applications, infrastructure, and user experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {observabilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-slate-200 transition-colors">{feature.title}</h3>
                <p className="text-slate-400 mb-6">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.metrics.map((metric, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700">
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Productivity Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Developer Productivity
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Remove friction and let developers focus on what matters most
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {productivityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-600 to-zinc-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
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
            <WorkflowDiagram steps={["Connect", "Configure", "Build", "Test", "Deploy", "Monitor"]} />
          </div>
        </div>
      </section>

      {/* Integration Hub Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Integration Hub
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Connect with your existing tools and extend your workflows
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-lg ${integration.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <span className="text-white font-bold text-sm">{integration.name[0]}</span>
                </div>
                <span className="font-medium text-slate-700 text-sm lg:text-base truncate">{integration.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Case Studies
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how leading engineering teams transform their workflows
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                company={study.company}
                industry={study.industry}
                challenge={study.challenge}
                solution={study.solution}
                results={study.results}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ROI Metrics Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-800 via-slate-900 to-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-700/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Proven ROI
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Measurable results that transform your engineering organization
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {roiMetrics.map((metric, index) => (
              <StatCard
                key={index}
                value={metric.value}
                label={metric.label}
                description={metric.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Loved by engineering teams
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how leading companies transform their development workflows
            </p>
          </div>

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

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to know about Krovos
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-zinc-600 to-slate-500" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Ready to transform your engineering?
          </h2>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Join thousands of engineering teams who have automated their pipelines and reduced deployment time by 70%.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="px-10 py-5 bg-white text-slate-700 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/25 transition-all hover:scale-105"
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

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:gap-8 text-white/60 text-sm">
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

      {/* Secondary CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-100 to-zinc-100 rounded-3xl p-8 lg:p-12 border border-slate-200">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  Need a personalized demo?
                </h3>
                <p className="text-slate-600 mb-6">
                  Our engineering team will walk you through how Krovos can solve your specific challenges.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom use case analysis
                  </li>
                  <li className="flex items-center text-slate-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ROI calculation
                  </li>
                  <li className="flex items-center text-slate-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Technical deep-dive
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Link
                  href="/demo"
                  className="px-8 py-4 bg-gradient-to-r from-slate-600 to-zinc-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-slate-500/25 transition-all hover:scale-105 text-center"
                >
                  Schedule Demo
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-center"
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
