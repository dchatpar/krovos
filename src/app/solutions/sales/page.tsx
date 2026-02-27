"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
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
function useAnimatedCounter(end: number, duration: number = 2000): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
}

// Animated stat component
function AnimatedStat({ value, label, suffix = "", prefix = "" }: { value: number; label: string; suffix?: string; prefix?: string }) {
  const count = useAnimatedCounter(value);
  return (
    <div className="text-center">
      <div className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
        {prefix}{count}{suffix}
      </div>
      <div className="text-lg font-semibold text-slate-700 mt-2">{label}</div>
    </div>
  );
}

// Bento grid item component
function BentoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Parallax section wrapper
function ParallaxSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

// Accordion component for FAQ
function AccordionItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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

// ROI Calculator component
function ROICalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [avgDealSize, setAvgDealSize] = useState(50000);
  const [conversionRate, setConversionRate] = useState(15);
  const [dealsPerMonth, setDealsPerMonth] = useState(5);

  const currentRevenue = teamSize * dealsPerMonth * avgDealSize * (conversionRate / 100);
  const improvedConversionRate = Math.min(conversionRate * 1.4, 95);
  const projectedRevenue = teamSize * dealsPerMonth * avgDealSize * (improvedConversionRate / 100);
  const monthlyIncrease = projectedRevenue - currentRevenue;
  const annualIncrease = monthlyIncrease * 12;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl p-8">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">Sales Team Size</label>
            <input
              type="range"
              min="1"
              max="100"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="mt-2 text-emerald-600 font-bold">{teamSize} reps</div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">Average Deal Size</label>
            <input
              type="range"
              min="10000"
              max="500000"
              step="5000"
              value={avgDealSize}
              onChange={(e) => setAvgDealSize(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="mt-2 text-emerald-600 font-bold">${avgDealSize.toLocaleString()}</div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">Current Conversion Rate</label>
            <input
              type="range"
              min="1"
              max="50"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="mt-2 text-emerald-600 font-bold">{conversionRate}%</div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">Deals Closed Per Month</label>
            <input
              type="range"
              min="1"
              max="50"
              value={dealsPerMonth}
              onChange={(e) => setDealsPerMonth(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="mt-2 text-emerald-600 font-bold">{dealsPerMonth} deals/month</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
          <h4 className="text-xl font-bold text-slate-900 mb-6">Projected ROI</h4>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-slate-200">
              <span className="text-slate-600">Current Monthly Revenue</span>
              <span className="font-semibold text-slate-900">${currentRevenue.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200">
              <span className="text-slate-600">Projected Monthly Revenue</span>
              <span className="font-semibold text-emerald-600">${projectedRevenue.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-200">
              <span className="text-slate-600">Monthly Increase</span>
              <span className="font-bold text-emerald-600 text-lg">+${monthlyIncrease.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-slate-600">Annual Revenue Increase</span>
              <span className="font-bold text-emerald-600 text-xl">+${annualIncrease.toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-xl">
            <p className="text-sm text-slate-600">
              <strong className="text-emerald-600">40%</strong> improvement in conversion rate calculated based on average customer results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Data arrays
const metrics = [
  { value: "3x", label: "More Leads", description: "AI-powered lead generation" },
  { value: "50%", label: "Shorter Sales Cycle", description: "Automated workflows" },
  { value: "40%", label: "Higher Conversion", description: "Personalized engagement" },
];

const animatedStats = [
  { value: 250, suffix: "+", label: "Enterprise Customers" },
  { value: 50, suffix: "B+", label: "Pipeline Managed" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 10, suffix: "M+", label: "Leads Processed" },
];

const automationFeatures = [
  {
    title: "Lead Scoring",
    description: "AI-powered scoring that analyzes prospect behavior, demographics, and engagement signals to prioritize your best opportunities.",
    features: [
      "Behavioral scoring algorithms",
      "Intent signal detection",
      "Firmographic scoring",
      "Real-time score updates",
    ],
    index: 0,
  },
  {
    title: "Contact Enrichment",
    description: "Automatically enrich your contacts with firmographic, technographic, and demographic data from 50+ data sources.",
    features: [
      "Company enrichment",
      "Contact data verification",
      "Technographic insights",
      "Social profile enrichment",
    ],
    index: 1,
  },
  {
    title: "Auto Follow-ups",
    description: "Intelligent follow-up sequences that personalize based on prospect behavior, preferences, and optimal send times.",
    features: [
      "Multi-channel sequences",
      "Behavioral triggers",
      "A/B testing",
      "Optimal send time optimization",
    ],
    index: 2,
  },
  {
    title: "Meeting Booking",
    description: "AI assistant that handles meeting scheduling across time zones, preferences, and calendar availability automatically.",
    features: [
      "Natural language booking",
      "Calendar sync",
      "Time zone intelligence",
      "Round-robin scheduling",
    ],
    index: 3,
  },
];

const pipelineStages = [
  { stage: "Prospecting", color: "from-blue-500 to-cyan-400", deals: 1250, value: "$2.5M" },
  { stage: "Qualification", color: "from-emerald-500 to-teal-400", deals: 450, value: "$1.8M" },
  { stage: "Proposal", color: "from-amber-500 to-orange-400", deals: 180, value: "$1.2M" },
  { stage: "Negotiation", color: "from-purple-500 to-pink-400", deals: 85, value: "$800K" },
  { stage: "Closed Won", color: "from-green-500 to-emerald-400", deals: 42, value: "$450K" },
];

const crmIntegrations = [
  { name: "Salesforce", color: "bg-blue-500", status: "Connected", syncTime: "Real-time" },
  { name: "HubSpot", color: "bg-orange-500", status: "Connected", syncTime: "Real-time" },
  { name: "Pipedrive", color: "bg-green-600", status: "Connected", syncTime: "5 min" },
  { name: "Microsoft Dynamics", color: "bg-blue-700", status: "Available", syncTime: "-" },
  { name: "Zoho CRM", color: "bg-teal-600", status: "Available", syncTime: "-" },
  { name: "SugarCRM", color: "bg-red-500", status: "Available", syncTime: "-" },
];

const forecastingFeatures = [
  { title: "AI Predictions", description: "Machine learning models predict deal closure probability based on historical patterns and current signals." },
  { title: "Revenue Forecasting", description: "Accurate quarterly and annual revenue predictions with confidence intervals and scenario modeling." },
  { title: "Pipeline Analytics", description: "Real-time visibility into pipeline health, velocity, and conversion rates at each stage." },
  { title: "Risk Detection", description: "Automatically identify at-risk deals and recommend interventions to save at-risk opportunities." },
];

const conversationIntelligence = [
  { metric: "85%", label: "Call Transcription Accuracy", description: "Industry-leading speech recognition" },
  { metric: "50%", label: "Talk Time Reduction", description: "More listening, less talking" },
  { metric: "3x", label: "Coachability Improvement", description: "Faster rep development" },
  { metric: "40%", label: "Win Rate Increase", description: "Using best practices from top performers" },
];

const emailAutomation = [
  { title: "Smart Sequences", description: "Multi-touch email sequences that adapt based on prospect behavior and engagement" },
  { title: "Personalization Engine", description: "AI-generated personalized content at scale using prospect data and signals" },
  { title: "Send Time Optimization", description: "Machine learning determines optimal send times for each recipient" },
  { title: "A/B Testing", description: "Automatically test subject lines, content, and timing to optimize performance" },
];

const proposalFeatures = [
  { title: "AI Content Generation", description: "Automatically generate compelling proposal content based on deal context and customer needs" },
  { title: "Dynamic Pricing", description: "Automated pricing calculations with discounts, bundles, and special offers" },
  { title: "Version Control", description: "Track all proposal versions and collaborate with stakeholders in real-time" },
  { title: "E-Signature Integration", description: "Direct integration with DocuSign, HelloSign, and Adobe Sign" },
];

const contractAnalysis = [
  { title: "Clause Detection", description: "AI automatically identifies risky clauses, missing terms, and non-standard language" },
  { title: "Benchmark Comparison", description: "Compare contract terms against industry benchmarks and company policies" },
  { title: "Approval Workflows", description: "Automated routing to legal, finance, and exec for approval based on deal parameters" },
  { title: "Version Analysis", description: "Track changes between contract versions and highlight key modifications" },
];

const commissionFeatures = [
  { title: "Automated Calculations", description: "Automatically calculate commissions based on deal closure, quota attainment, and tier structures" },
  { title: "Multiple Plans", description: "Support for multiple commission structures including base+bonus, accelerators, and draw" },
  { title: "Quota Tracking", description: "Real-time quota attainment tracking with visual dashboards and alerts" },
  { title: "Repayment Rules", description: "Configure clawback and repayment rules for cancelled or downsized deals" },
];

const analyticsFeatures = [
  { title: "Sales Dashboards", description: "Customizable dashboards with KPIs, trends, and performance metrics" },
  { title: "Activity Tracking", description: "Track all sales activities including calls, emails, meetings, and tasks" },
  { title: "Forecasting Reports", description: "AI-generated forecasts with confidence intervals and scenario analysis" },
  { title: "Competitive Intelligence", description: "Track competitive wins/losses and identify trends in deal outcomes" },
];

const integrationTools = [
  { name: "Salesforce", color: "bg-blue-500", category: "CRM" },
  { name: "HubSpot", color: "bg-orange-500", category: "CRM" },
  { name: "Pipedrive", color: "bg-green-600", category: "CRM" },
  { name: "LinkedIn", color: "bg-blue-600", category: "Social" },
  { name: "Gmail", color: "bg-red-500", category: "Email" },
  { name: "Outlook", color: "bg-blue-500", category: "Email" },
  { name: "Zoom", color: "bg-blue-400", category: "Communication" },
  { name: "Slack", color: "bg-purple-600", category: "Communication" },
  { name: "DocuSign", color: "bg-yellow-500", category: "ESignature" },
  { name: "Zapier", color: "bg-orange-400", category: "Automation" },
  { name: "Google Workspace", color: "bg-blue-300", category: "Productivity" },
  { name: "Microsoft 365", color: "bg-blue-700", category: "Productivity" },
];

const caseStudies = [
  {
    company: "TechScale Inc",
    industry: "SaaS",
    challenge: "Manual lead qualification taking 20+ hours per week",
    solution: "Deployed Krovos AI agents for automated lead scoring and qualification",
    results: ["3x more qualified leads", "50% reduction in admin time", "35% higher conversion rate"],
    metric: "+147%",
    metricLabel: "Pipeline Growth",
  },
  {
    company: "GlobalTech Solutions",
    industry: "Enterprise Software",
    challenge: "Disconnected sales data across multiple systems",
    solution: "Unified CRM integration with real-time data synchronization",
    results: ["100% data accuracy", "30% faster sales cycles", "25% revenue increase"],
    metric: "+$2.5M",
    metricLabel: "Annual Revenue",
  },
  {
    company: "InnovateCorp",
    industry: "FinTech",
    challenge: "Inefficient commission tracking causing rep dissatisfaction",
    solution: "Automated commission calculations with transparent dashboards",
    results: ["90% reduction in disputes", "Real-time quota tracking", "Improved rep retention"],
    metric: "100%",
    metricLabel: "Accuracy",
  },
];

const faqItems = [
  {
    question: "How long does it take to implement Krovos Sales?",
    answer: "Most customers are up and running within 2-4 weeks. Our implementation team guides you through CRM integration, data migration, and team onboarding. We provide dedicated support to ensure a smooth transition with minimal disruption to your sales operations.",
  },
  {
    question: "What CRM systems do you integrate with?",
    answer: "Krovos integrates natively with all major CRM platforms including Salesforce, HubSpot, Pipedrive, Microsoft Dynamics, Zoho CRM, and SugarCRM. We also offer custom integrations through our API and support for bidirectional sync to keep your data always current.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We are SOC 2 Type II certified and GDPR compliant. We use bank-level 256-bit encryption for all data in transit and at rest. Our infrastructure is hosted on AWS with multiple redundancy layers. We never sell or share your data with third parties.",
  },
  {
    question: "Can I customize the AI models for my specific industry?",
    answer: "Yes. Our AI models are trained on your data and can be fine-tuned for your specific industry, sales process, and customer base. We offer custom model training as part of our enterprise plans, with ongoing optimization based on your deal outcomes.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide comprehensive support including dedicated customer success managers, 24/7 technical support, regular training sessions, and access to our customer community. Enterprise customers also receive strategic planning sessions and custom integrations.",
  },
  {
    question: "How does the ROI calculator work?",
    answer: "Our ROI calculator uses data from thousands of similar companies to project potential improvements. It factors in your team size, average deal size, current conversion rates, and deal volume to estimate the impact of automation, improved conversion rates, and shortened sales cycles.",
  },
  {
    question: "What happens if I need to cancel my subscription?",
    answer: "You can cancel your subscription at any time with 30 days notice. We provide a 30-day data export window so you can download all your information. We also offer flexible plans that can scale with your business needs.",
  },
  {
    question: "Do you offer training for my sales team?",
    answer: "Yes, all plans include comprehensive onboarding and training. We offer live training sessions, video tutorials, documentation, and access to our best practices library. Enterprise customers receive customized training programs tailored to their sales methodology.",
  },
];

const technicalSpecs = [
  { category: "Performance", specs: "99.9% uptime SLA, <100ms response time, Global CDN" },
  { category: "Security", specs: "SOC 2 Type II, GDPR, HIPAA ready, 256-bit encryption" },
  { category: "Integrations", specs: "50+ native integrations, REST API, GraphQL, Webhooks" },
  { category: "Data", specs: "Unlimited storage, Real-time sync, Automated backups" },
  { category: "Compliance", specs: "GDPR, CCPA, SOX, ISO 27001 certified" },
  { category: "Support", specs: "24/7 support, Dedicated CSM, Priority response" },
];

const processSteps = [
  {
    number: "Step 01",
    title: "Connect Your CRM",
    description: "Integrate with Salesforce, HubSpot, Pipedrive, or any CRM in minutes. We support bi-directional sync with all major platforms.",
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
  {
    number: "Step 02",
    title: "Import Your Data",
    description: "Upload your leads, contacts, and deals. Our AI will analyze patterns and build your personalized automation workflows.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    number: "Step 03",
    title: "Activate AI Agents",
    description: "Deploy intelligent sales agents that work 24/7 to engage prospects, book meetings, and move deals through your pipeline.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const testimonials = [
  {
    quote: "Krovos transformed our sales process. We went from manually chasing leads to having AI agents nurture prospects 24/7. Our conversion rate jumped 45% in just 3 months.",
    author: "David Park",
    role: "VP of Sales",
    company: "TechGrowth Inc",
  },
  {
    quote: "The meeting booking feature alone is worth the investment. Our reps used to spend 10 hours a week on scheduling. Now the AI handles it all flawlessly.",
    author: "Jessica Martinez",
    role: "Sales Director",
    company: "CloudScale Solutions",
  },
  {
    quote: "Lead scoring has been a game-changer. Our team now focuses only on high-intent prospects, and we've seen a 3x increase in qualified opportunities.",
    author: "Robert Chen",
    role: "CRO",
    company: "EnterpriseFlow",
  },
];

export default function SalesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 backdrop-blur-sm text-emerald-700 text-sm font-semibold mb-6 border border-emerald-200/50"
              >
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Sales
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight"
              >
                Automate your{" "}
                <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
                  sales pipeline
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-xl text-slate-600 max-w-xl mx-auto lg:mx-0"
              >
                Deploy AI agents that qualify leads, enrich contacts, send personalized follow-ups,
                and book meetings automatically. Let your team focus on closing deals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link
                  href="/signup"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-emerald-500/25 transition-all hover:scale-105"
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
                transition={{ duration: 0.6, delay: 0.4 }}
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl shadow-emerald-500/10 p-8">
                <ServiceIllustration type="Sales" className="w-full h-64 lg:h-80" />

                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Meeting Booked</div>
                    <div className="text-xs text-slate-500">with qualified lead</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full border-2 border-white" />
                      <div className="w-8 h-8 bg-teal-500 rounded-full border-2 border-white" />
                      <div className="w-8 h-8 bg-cyan-500 rounded-full border-2 border-white" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">3 agents active</div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-400" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {animatedStats.map((stat, index) => (
              <AnimatedStat key={index} value={stat.value} label={stat.label} suffix={stat.suffix} />
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Lead Generation Automation Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Lead Generation Automation
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              AI-powered lead generation that identifies, scores, and nurtures prospects around the clock
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

      {/* CRM Integration Deep Dive */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              CRM Integration Deep Dive
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Seamless two-way synchronization with all major CRM platforms
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
              {crmIntegrations.map((crm, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 border-b md:border-b-0 border-slate-100 hover:bg-emerald-50/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${crm.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-lg">{crm.name[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{crm.name}</h4>
                      <span className={`text-sm ${crm.status === "Connected" ? "text-green-600" : "text-slate-500"}`}>
                        {crm.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-slate-500">
                    Sync: <span className="text-slate-700 font-medium">{crm.syncTime}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Real-time Sync</h4>
              <p className="text-slate-600 text-sm">Instant data synchronization ensures your team always has the latest information.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Data Security</h4>
              <p className="text-slate-600 text-sm">Enterprise-grade encryption and compliance with all major data protection regulations.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50"
            >
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Custom Mappings</h4>
              <p className="text-slate-600 text-sm">Flexible field mapping to match your unique CRM structure and workflows.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pipeline Management */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Pipeline Management
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Visual pipeline management with AI-powered insights and automation
            </p>
          </div>

          <div className="space-y-4">
            {pipelineStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 text-lg">{stage.stage}</h4>
                        <p className="text-sm text-slate-500">{stage.deals} deals</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">{stage.value}</div>
                      <p className="text-sm text-slate-500">Total value</p>
                    </div>
                  </div>
                  <div className="mt-4 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(stage.deals / 1250) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${stage.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Forecasting AI */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Sales Forecasting AI
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Machine learning models that predict revenue with unprecedented accuracy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {forecastingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversation Intelligence */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Conversation Intelligence
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              AI-powered call analysis that uncovers insights and improves performance
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {conversationIntelligence.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {item.metric}
                </div>
                <div className="font-semibold text-slate-900 mb-1">{item.label}</div>
                <div className="text-sm text-slate-500">{item.description}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Call Recording & Transcription</h3>
                <p className="text-slate-600 mb-6">
                  Automatically record, transcribe, and analyze every sales call. Our AI identifies key moments, sentiment, and action items.
                </p>
                <ul className="space-y-3">
                  {["Automatic transcription", "Speaker identification", "Topic detection", "Sentiment analysis", "Objection tracking"].map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-8 lg:p-12 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <div className="bg-white rounded-2xl shadow-xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Sales Call Analysis</div>
                        <div className="text-sm text-slate-500">Completed 2 minutes ago</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-3/4" />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Key topics: Pricing, Timeline, Features</span>
                        <span className="text-emerald-600 font-medium">87% positive</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Email Automation */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Email Automation
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Intelligent email sequences that personalize at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emailAutomation.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-xl hover:shadow-emerald-500/10 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Scheduling */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Meeting Scheduling
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              AI-powered scheduling that eliminates the back-and-forth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
                  <h3 className="text-xl font-semibold">Schedule a Demo</h3>
                  <p className="text-white/80 text-sm">Select a time that works for you</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {["9:00 AM - 10:00 AM", "10:30 AM - 11:30 AM", "2:00 PM - 3:00 PM", "3:30 PM - 4:30 PM"].map((time, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full p-4 rounded-xl border-2 text-left font-medium transition-colors ${i === 0 ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-slate-200 hover:border-emerald-300 text-slate-700"}`}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              {[
                { title: "Smart Time Zone Detection", description: "Automatically detects and converts time zones for international meetings" },
                { title: "Calendar Integration", description: "Syncs with Google Calendar, Outlook, and Apple Calendar in real-time" },
                { title: "Buffer Time Management", description: "Automatically adds buffer time between meetings for preparation" },
                { title: "Round-Robin Assignment", description: "Distributes meeting requests evenly among your sales team" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proposal Generation */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Proposal Generation
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              AI-powered proposal creation that wins more deals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {proposalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Analysis */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Contract Analysis
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              AI-powered contract review that identifies risks and accelerates deals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contractAnalysis.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Tracking */}
      <section className="py-20 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Commission Tracking
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Transparent, automated commission calculations that keep your team motivated
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commissionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Analytics */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Sales Analytics
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive analytics that drive better decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Hub */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Integration Hub
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Connect with 50+ tools your team already uses
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {integrationTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10 transition-all cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-lg ${tool.color} flex items-center justify-center shadow-md`}>
                  <span className="text-white font-bold">{tool.name[0]}</span>
                </div>
                <div>
                  <span className="font-medium text-slate-700">{tool.name}</span>
                  <span className="text-xs text-slate-400 block">{tool.category}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/integrations"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-semibold rounded-xl border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              View all integrations
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Calculate Your ROI
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how much revenue Krovos can add to your business
            </p>
          </div>

          <ROICalculator />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Case Studies
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how leading companies transform their sales operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{study.company}</h3>
                      <p className="text-white/80 text-sm">{study.industry}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{study.metric}</div>
                      <div className="text-white/80 text-sm">{study.metricLabel}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-500 uppercase mb-1">Challenge</h4>
                    <p className="text-slate-700">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-500 uppercase mb-1">Solution</h4>
                    <p className="text-slate-700">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 uppercase mb-2">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center text-sm text-slate-700">
                          <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Technical Specs */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Technical Specifications
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Enterprise-grade infrastructure built for scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
              >
                <h4 className="font-semibold text-slate-900 mb-2">{spec.category}</h4>
                <p className="text-sm text-slate-600">{spec.specs}</p>
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
            <WorkflowDiagram steps={["Connect CRM", "Import Data", "Activate AI", "Track Results", "Optimize"]} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Loved by sales teams
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how leading companies transform their sales operations
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to know about Krovos Sales
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden">
            <div className="p-8">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* First CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Start your free trial today
          </h2>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Join thousands of sales teams who have automated their pipeline and achieved 3x more leads with 40% higher conversion rates.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="px-10 py-5 bg-white text-emerald-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/25 transition-all hover:scale-105"
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

      {/* Second CTA - Book Demo */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 lg:p-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Book a personalized demo
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  See how Krovos Sales can transform your pipeline. Our team will show you a custom demonstration tailored to your specific use case.
                </p>
                <div className="space-y-4">
                  {[
                    "Custom pipeline setup and configuration",
                    "Integration with your existing CRM",
                    "AI agent customization for your sales process",
                    "ROI analysis and business case development"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-slate-700">
                      <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-12 lg:p-16 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        placeholder="Your company"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Team Size</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all">
                        <option>1-10</option>
                        <option>11-50</option>
                        <option>51-200</option>
                        <option>200+</option>
                      </select>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                    >
                      Schedule Demo
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third CTA - Enterprise */}
      <section className="py-20 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need a custom enterprise solution?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Get a tailored solution for large organizations with advanced security, compliance, and customization requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/enterprise"
                className="px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all hover:scale-105"
              >
                Contact Enterprise Sales
              </Link>
              <Link
                href="/pricing"
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By / Integrations Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
              Trusted by leading enterprises
            </h2>
            <p className="mt-3 text-slate-600">
              Seamlessly integrates with your existing CRM and sales stack
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { name: "Salesforce", color: "bg-blue-500" },
              { name: "HubSpot", color: "bg-orange-500" },
              { name: "Pipedrive", color: "bg-green-600" },
              { name: "Microsoft Dynamics", color: "bg-blue-700" },
              { name: "Zoho CRM", color: "bg-teal-600" },
              { name: "LinkedIn", color: "bg-blue-600" },
              { name: "Gmail", color: "bg-red-500" },
              { name: "Outlook", color: "bg-blue-500" },
              { name: "Zoom", color: "bg-blue-400" },
              { name: "Slack", color: "bg-purple-600" },
            ].map((integration, index) => (
              <IntegrationLogo
                key={index}
                name={integration.name}
                color={integration.color}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
