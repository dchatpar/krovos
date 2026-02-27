"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

import {
  ServiceIllustration,
  FeatureWithImage,
  ProcessStep,
  MetricBox,
  TestimonialCard,
  IntegrationLogo,
  WorkflowDiagram,
} from "@/components/landing/ServiceComponents";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

// Animated counter hook
function useAnimatedCounter(end: number, duration: number = 2, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, start]);

  return count;
}

// Animated counter component
function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useAnimatedCounter(end, duration, isInView);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// Bento grid item component
function BentoItem({
  children,
  className = "",
  colSpan = "col-span-1",
  rowSpan = "row-span-1"
}: {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
}) {
  return (
    <div className={`${colSpan} ${rowSpan} group relative bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-orange-50/30 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative h-full p-6 lg:p-8">
        {children}
      </div>
    </div>
  );
}

// Parallax section component
function ParallaxSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

// Threat detection architecture diagram
function ThreatDetectionArchitecture() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Central hub */}
      <div className="flex justify-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-red-600 via-orange-500 to-amber-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-500/30 z-10 relative">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          {/* Animated ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-red-300 rounded-3xl"
          />
        </motion.div>
      </div>

      {/* Surrounding nodes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { title: "Network Monitor", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", color: "from-blue-500 to-cyan-400" },
          { title: "EDR Agent", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", color: "from-purple-500 to-pink-400" },
          { title: "SIEM Connector", icon: "M4 6h16M4 10h16M4 14h16M4 18h16", color: "from-green-500 to-emerald-400" },
          { title: "Threat Intel", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "from-amber-500 to-orange-400" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg mb-4`}>
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-900">{item.title}</h4>
          </motion.div>
        ))}
      </div>

      {/* Connection lines would go here in a real implementation */}
    </div>
  );
}

// Incident response workflow
function IncidentResponseWorkflow() {
  const steps = [
    {
      title: "Detection",
      description: "AI identifies anomalous behavior patterns across your infrastructure",
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
      time: "< 1 min"
    },
    {
      title: "Analysis",
      description: "Automated enrichment correlates threat intelligence and contextual data",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      time: "< 2 min"
    },
    {
      title: "Containment",
      description: "Isolated hosts are automatically quarantined and remediated",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      time: "< 5 min"
    },
    {
      title: "Recovery",
      description: "Systems are restored to operational state with verified integrity",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      time: "< 30 min"
    },
  ];

  return (
    <div className="relative">
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                  </svg>
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {step.time}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-6 h-6 bg-white rounded-full border-2 border-red-300 flex items-center justify-center"
                >
                  <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Use case card
function UseCaseCard({
  title,
  description,
  icon,
  metrics
}: {
  title: string;
  description: string;
  icon: string;
  metrics: { value: string; label: string }[];
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-red-500/10 transition-all group"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
        {metrics.map((metric, index) => (
          <div key={index}>
            <div className="text-2xl font-bold text-red-600">{metric.value}</div>
            <div className="text-sm text-slate-500">{metric.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// FAQ accordion item
function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="border-b border-slate-200 last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-semibold text-slate-900">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
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
            <p className="pb-6 text-slate-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Compliance badge
function ComplianceBadge({ name, description, icon }: { name: string; description: string; icon: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg flex items-start gap-4"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
        </svg>
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-1">{name}</h4>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </motion.div>
  );
}

// Case study excerpt
function CaseStudyCard({
  company,
  industry,
  challenge,
  solution,
  result
}: {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center font-bold text-lg">
            {company[0]}
          </div>
          <div>
            <h4 className="font-bold text-lg">{company}</h4>
            <p className="text-sm text-slate-400">{industry}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="text-sm font-semibold text-red-400 mb-1">Challenge</h5>
            <p className="text-slate-300 text-sm">{challenge}</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-orange-400 mb-1">Solution</h5>
            <p className="text-slate-300 text-sm">{solution}</p>
          </div>
          <div className="pt-4 border-t border-slate-700">
            <p className="text-lg font-bold text-green-400">{result}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// SOC integration feature
function SOCFeature({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <motion.div
      whileHover={{ x: 8 }}
      className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
    >
      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
        </svg>
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </motion.div>
  );
}

// Main page component
export default function SecurityOpsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Metrics data with animated counters
  const metrics = [
    { value: 90, suffix: "%", label: "Faster triage", description: "AI-powered threat classification" },
    { value: 70, suffix: "%", label: "Reduction in alerts", description: "Intelligent alert deduplication" },
    { value: 24, suffix: "/7", label: "Automated monitoring", description: "Continuous threat detection" },
    { value: 5, suffix: "min", label: "Avg response time", description: "Automated incident response" },
  ];

  const automationFeatures = [
    {
      title: "Threat Detection",
      description: "AI-powered anomaly detection that identifies potential threats across your entire infrastructure before they become breaches.",
      features: [
        "Machine learning-based behavioral analysis",
        "Real-time threat signature updates",
        "Network traffic anomaly detection",
        "Cloud workload protection",
      ],
      index: 0,
    },
    {
      title: "Alert Enrichment",
      description: "Automatically enrich alerts with contextual threat intelligence, asset information, and historical data.",
      features: [
        "Threat intelligence integration",
        "Asset context enrichment",
        "False positive filtering",
        "Priority scoring automation",
      ],
      index: 1,
    },
    {
      title: "Incident Response",
      description: "Automated containment, eradication, and recovery workflows that respond to threats in milliseconds.",
      features: [
        "Automated isolation of compromised hosts",
        "Threat playbook automation",
        "One-click remediation",
        "Forensic data collection",
      ],
      index: 2,
    },
    {
      title: "Compliance Reporting",
      description: "Generate comprehensive compliance reports for SOC 2, HIPAA, PCI-DSS, and other regulatory frameworks.",
      features: [
        "SOC 2 Type II automation",
        "HIPAA compliance reports",
        "PCI-DSS audit preparation",
        "Continuous compliance monitoring",
      ],
      index: 3,
    },
  ];

  const processSteps = [
    {
      number: "Step 01",
      title: "Connect Security Tools",
      description: "Integrate with your existing security stack including SIEM, EDR, firewall, and threat intelligence platforms.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      number: "Step 02",
      title: "Configure Detection Rules",
      description: "Set up AI-powered detection rules and automated response playbooks tailored to your organization's security policies.",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      number: "Step 03",
      title: "Deploy AI Agents",
      description: "Launch autonomous security agents that monitor, detect, and respond to threats 24/7 without manual intervention.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
  ];

  const integrations = [
    { name: "CrowdStrike", color: "bg-red-600" },
    { name: "Palo Alto Networks", color: "bg-blue-600" },
    { name: "Splunk", color: "bg-green-600" },
    { name: "Microsoft Defender", color: "bg-blue-500" },
    { name: "Rapid7", color: "bg-red-500" },
    { name: "Qualys", color: "bg-blue-400" },
    { name: "Tenable", color: "bg-orange-500" },
    { name: "AWS Security", color: "bg-orange-400" },
    { name: "Azure Sentinel", color: "bg-blue-400" },
    { name: "Google Chronicle", color: "bg-blue-500" },
  ];

  const testimonials = [
    {
      quote: "Krovos reduced our alert fatigue by 70%. The AI triage agents now handle 90% of our initial investigation, letting our analysts focus on real threats.",
      author: "David Martinez",
      role: "CISO",
      company: "HealthFirst Systems",
    },
    {
      quote: "Our mean time to respond dropped from 4 hours to under 5 minutes. The automated containment saved us from a potential ransomware outbreak.",
      author: "Jennifer Walsh",
      role: "Director of Security Operations",
      company: "FinTech Global",
    },
    {
      quote: "SOC 2 compliance reporting that used to take weeks now completes automatically. The continuous monitoring gives us confidence 24/7.",
      author: "Robert Kim",
      role: "Security Architect",
      company: "CloudScale Enterprise",
    },
  ];

  const useCases = [
    {
      title: "Enterprise SOC",
      description: "Scale your security operations center with AI agents that work 24/7, handling the volume of alerts that would require a team of dozens.",
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
      metrics: [
        { value: "85%", label: "Alert Reduction" },
        { value: "24/7", label: "Coverage" },
      ],
    },
    {
      title: "Managed Security",
      description: " MSPs and MSSPs can deliver enterprise-grade security services to their clients with automated detection and response capabilities.",
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
      metrics: [
        { value: "60%", label: "Cost Reduction" },
        { value: "3x", label: "Client Growth" },
      ],
    },
    {
      title: "Cloud Security",
      description: "Protect multi-cloud environments with AI agents that understand the unique threats facing AWS, Azure, and GCP workloads.",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      metrics: [
        { value: "95%", label: "Coverage" },
        { value: "40%", label: "Faster MTTR" },
      ],
    },
    {
      title: "Threat Hunting",
      description: "Proactively search for hidden threats using AI-powered threat hunting that analyzes billions of events to identify sophisticated attacks.",
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      metrics: [
        { value: "2.5x", label: "More Findings" },
        { value: "70%", label: "Time Saved" },
      ],
    },
  ];

  const faqs = [
    {
      question: "How does AI-powered threat detection work?",
      answer: "Our AI agents analyze billions of security events using machine learning models trained on billions of threat samples. They identify patterns, anomalies, and indicators of compromise that traditional rule-based systems miss. The system continuously learns from your environment, reducing false positives while catching sophisticated attacks that would otherwise go undetected.",
    },
    {
      question: "Can Krovos integrate with our existing security tools?",
      answer: "Yes, Krovos integrates with over 200 security tools including all major SIEMs (Splunk, Microsoft Sentinel, IBM QRadar), EDRs (CrowdStrike, SentinelOne, Microsoft Defender), firewalls (Palo Alto Networks, Fortinet), and cloud security platforms (AWS Security Hub, Azure Security Center, GCP Security Command Center). Our pre-built connectors enable deployment in hours, not weeks.",
    },
    {
      question: "What happens during an automated incident response?",
      answer: "When a threat is detected, Krovos automatically executes a predefined response playbook. This can include isolating the affected endpoint, blocking malicious IP addresses, killing suspicious processes, revoking user credentials, and collecting forensic data. Every action is logged for compliance and audit purposes. You can customize playbooks or use our templates based on industry best practices.",
    },
    {
      question: "How does Krovos help with compliance?",
      answer: "Krovos provides continuous compliance monitoring for SOC 2, HIPAA, PCI-DSS, ISO 27001, and GDPR. The platform automatically collects evidence, generates audit reports, and alerts on compliance drift. Our compliance dashboard gives you real-time visibility into your security posture across all frameworks, reducing audit preparation time by up to 80%.",
    },
    {
      question: "What is the deployment process?",
      answer: "Most customers are up and running within 24 hours. The deployment involves deploying lightweight agents to your endpoints, configuring API integrations with your security tools, and customizing detection rules to your environment. Our onboarding team guides you through each step, and our self-service portal makes ongoing configuration intuitive.",
    },
    {
      question: "How is pricing structured?",
      answer: "Krovos pricing is based on the number of endpoints protected and the level of functionality required. We offer three tiers: Core (threat detection), Pro (detection + automated response), and Enterprise (full platform with custom integrations and dedicated support). All plans include 24/7 support and regular feature updates.",
    },
  ];

  const caseStudies = [
    {
      company: "Global Finance Corp",
      industry: "Financial Services",
      challenge: "Processing over 100,000 security alerts daily with a team of 12 analysts, resulting in 40% of threats going undetected for days.",
      solution: "Deployed Krovos AI agents for automated triage and response, integrating with existing CrowdStrike and Splunk infrastructure.",
      result: "Reduced alerts requiring human review by 85%, achieved same-day threat detection, and saved $2.4M annually in analyst time.",
    },
    {
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Struggling to maintain HIPAA compliance while expanding telehealth services, with manual audit preparation taking 6 weeks.",
      solution: "Implemented continuous compliance monitoring with automated evidence collection and real-time HIPAA gap detection.",
      result: "Cut compliance audit prep from 6 weeks to 2 days, achieved zero findings in annual audits, and reduced compliance costs by 60%.",
    },
    {
      company: "RetailMax",
      industry: "E-Commerce",
      challenge: "Experiencing frequent DDoS attacks and payment fraud during peak shopping seasons, with incident response times averaging 4 hours.",
      solution: "Deployed Krovos for real-time threat detection across cloud infrastructure, with automated DDoS mitigation and fraud prevention.",
      result: "Blocked 50M+ attack attempts in first year, reduced average response time to 3 minutes, and prevented $12M in potential fraud losses.",
    },
  ];

  const socFeatures = [
    {
      title: "Real-time Alert Triage",
      description: "AI-powered classification of security alerts with automatic prioritization based on threat severity, asset criticality, and attack kill chain context.",
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    },
    {
      title: "Automated Playbooks",
      description: "Pre-built and customizable response automation that executes containment, eradication, and recovery steps without human intervention.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "Threat Intelligence",
      description: "Integrated global threat intelligence feeds enriched with your internal security data for contextual risk assessment.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
      title: "Forensic Analysis",
      description: "Automated evidence collection and root cause analysis that accelerates post-incident investigation and remediation.",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
    {
      title: "SOAR Capabilities",
      description: "Security Orchestration, Automation, and Response platform that coordinates actions across your entire security stack.",
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    },
    {
      title: "Unified Dashboard",
      description: "Single pane of glass for security operations with real-time metrics, threat landscape visualization, and executive reporting.",
      icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
    },
  ];

  const techSpecs = [
    { label: "Detection Rate", value: "99.7%" },
    { label: "False Positive Rate", value: "< 0.1%" },
    { label: "Average Response Time", value: "< 5 minutes" },
    { label: "API Response Latency", value: "< 100ms" },
    { label: "Uptime SLA", value: "99.99%" },
    { label: "Data Retention", value: "13 months" },
    { label: "Supported Integrations", value: "200+" },
    { label: "Encryption", value: "AES-256" },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Extended Hero Section with Animated Stats */}
      <section className="relative py-20 lg:py-40 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-orange-50" />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-red-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            className="absolute top-40 right-20 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"
          />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100/80 backdrop-blur-sm text-red-700 text-sm font-semibold mb-6 border border-red-200/50">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-2 h-2 bg-red-500 rounded-full"
                />
                Security Operations
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight">
                Secure your infrastructure with{" "}
                <span className="bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                  AI
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="mt-6 text-xl text-slate-600 max-w-xl mx-auto lg:mx-0">
                Deploy AI security agents that detect threats, enrich alerts, and automate incident response.
                Stay protected 24/7 without the alert fatigue.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/signup"
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-red-500/25 transition-all hover:scale-105"
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
              <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
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
            </motion.div>

            {/* Right - Service Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl shadow-red-500/10 p-8">
                <ServiceIllustration type="Security Operations" className="w-full h-64 lg:h-80" />

                {/* Floating cards with animations */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Threat Blocked</div>
                    <div className="text-xs text-slate-500">in 0.3 seconds</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-white" />
                      <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white" />
                      <div className="w-8 h-8 bg-amber-500 rounded-full border-2 border-white" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">5 agents active</div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-red-500/10 via-orange-500/10 to-amber-500/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section with Animated Counters */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-orange-500 to-amber-400" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <MetricBox
                key={index}
                value={<AnimatedCounter end={metric.value} suffix={metric.suffix} />}
                label={metric.label}
                description={metric.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Problem Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute top-0 left-0 w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">The Security Challenge</h2>
              <p className="text-lg text-slate-600 mb-8">
                Modern security teams face an impossible task. The volume of security alerts has grown exponentially,
                while the threat landscape becomes more sophisticated every day. Traditional security operations
                cannot keep pace.
              </p>
              <ul className="space-y-4">
                {[
                  "Average SOC receives 10,000+ alerts daily",
                  "80% of alerts are false positives",
                  "Analyst burnout leads to missed threats",
                  "Mean time to detect exceeds 24 hours",
                  "Manual processes cannot scale",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Solution Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute top-0 left-0 w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">The Krovos Solution</h2>
              <p className="text-lg text-slate-600 mb-8">
                AI-powered security operations that augment your team, automate routine tasks, and respond to
                threats in milliseconds. Focus your analysts on what matters most.
              </p>
              <ul className="space-y-4">
                {[
                  "AI triage reduces alerts by 70%",
                  "98% accuracy in threat classification",
                  "Automated response in under 5 minutes",
                  "24/7 coverage without analyst fatigue",
                  "Scales automatically with your infrastructure",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features Section 1 */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Comprehensive Security Platform
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to protect your organization from modern threats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BentoItem colSpan="md:col-span-2">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">AI-Powered Threat Detection</h3>
                  <p className="text-slate-600 mb-6">
                    Our machine learning models analyze billions of events across your infrastructure to identify
                    sophisticated threats that traditional rule-based systems miss. Get real-time detection with
                    99.7% accuracy and less than 0.1% false positive rate.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Behavioral Analysis", "Anomaly Detection", "Threat Intelligence", "Cloud Security"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </BentoItem>

            <BentoItem>
              <div className="h-full flex flex-col justify-center items-center text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={99} suffix="." />7%
                </div>
                <div className="text-slate-600">Detection Rate</div>
                <div className="mt-4 w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
              </div>
            </BentoItem>

            <BentoItem>
              <div className="h-full flex flex-col justify-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Real-Time Processing</h4>
                <p className="text-sm text-slate-600">
                  Process millions of events per second with sub-second latency
                </p>
              </div>
            </BentoItem>

            <BentoItem colSpan="md:col-span-2">
              <div className="h-full flex flex-col">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Advanced Analytics</h4>
                    <p className="text-slate-600 mb-4">
                      Leverage advanced analytics and machine learning to uncover hidden threats. Our platform
                      correlates data across endpoints, network, cloud, and identity sources to provide complete
                      threat visibility and context.
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {["User Behavior Analytics", "Entity Behavior", "Attack Chain Visualization", "Risk Scoring"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </BentoItem>
          </div>
        </div>
      </section>

      {/* Threat Detection Architecture Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-orange-50/30 to-amber-50/50 opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Threat Detection Architecture
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A unified platform that integrates with your entire security infrastructure
            </p>
          </motion.div>

          <ThreatDetectionArchitecture />
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
              Empower your security team with AI agents that handle threat detection, alert triage, and incident response automatically
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

      {/* Bento Grid Features Section 2 - Use Cases */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Use Cases
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tailored solutions for every security operation need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <UseCaseCard
                key={index}
                title={useCase.title}
                description={useCase.description}
                icon={useCase.icon}
                metrics={useCase.metrics}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Animated Counters */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-500/5 via-orange-500/5 to-amber-500/5 rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Transform Your Security Operations
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Measurable results that impact your bottom line
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 70, suffix: "%", label: "Alert Reduction" },
              { value: 90, suffix: "%", label: "Faster Triage" },
              { value: 24, suffix: "/7", label: "Coverage" },
              { value: 60, suffix: "%", label: "Cost Savings" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                  <AnimatedCounter end={benefit.value} suffix={benefit.suffix} duration={2} />
                </div>
                <div className="mt-2 text-lg font-semibold text-white">{benefit.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOC Integration Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Built for Modern SOCs
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Enterprise-grade capabilities designed for security operations centers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socFeatures.map((feature, index) => (
              <SOCFeature
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Compliance Made Simple
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Automated compliance monitoring and reporting for major frameworks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ComplianceBadge
              name="SOC 2 Type II"
              description="Continuous controls monitoring with automated evidence collection and audit preparation"
              icon="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
            <ComplianceBadge
              name="ISO 27001"
              description="Information security management system compliance with risk assessment automation"
              icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <ComplianceBadge
              name="HIPAA"
              description="Healthcare data protection with PHI monitoring and breach notification automation"
              icon="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
            <ComplianceBadge
              name="PCI-DSS"
              description="Payment card industry data security standard compliance for retail and e-commerce"
              icon="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
            <ComplianceBadge
              name="GDPR"
              description="General Data Protection Regulation compliance with data subject request automation"
              icon="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
            <ComplianceBadge
              name="NIST CSF"
              description="National Institute of Standards and Technology Cybersecurity Framework implementation"
              icon="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </div>
        </div>
      </section>

      {/* Incident Response Workflow Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Automated Incident Response
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From detection to recovery in minutes, not hours
            </p>
          </motion.div>

          <IncidentResponseWorkflow />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              See how leading organizations transformed their security operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                company={study.company}
                industry={study.industry}
                challenge={study.challenge}
                solution={study.solution}
                result={study.result}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Technical Specifications
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Enterprise-grade performance and reliability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
              >
                <div className="text-sm text-slate-500 mb-1">{spec.label}</div>
                <div className="text-2xl font-bold text-slate-900">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to know about Krovos Security Operations
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            {faqs.map((faq, index) => (
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
            <WorkflowDiagram steps={["Connect", "Configure", "Deploy", "Monitor", "Respond"]} />
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
              Integrates with your security stack
            </h2>
            <p className="mt-3 text-slate-600">
              Seamlessly connect with leading security tools and platforms
            </p>
          </div>

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

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Trusted by security teams
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how leading companies transform their security operations
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

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600" />
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Ready to secure your operations?
            </h2>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
              Join security teams who have reduced alert fatigue by 70% and achieved 90% faster threat triage.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="px-10 py-5 bg-white text-red-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/25 transition-all hover:scale-105"
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
                HIPAA Ready
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                ISO 27001 Certified
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
