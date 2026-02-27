"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
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
const useAnimatedCounter = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return { ref, count };
};

// Parallax section component
const ParallaxSection = ({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

// Bento grid item component
const BentoItem = ({
  children,
  colSpan = 1,
  rowSpan = 1,
  className = "",
}: {
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
}) => {
  return (
    <div
      className={`bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 p-6 lg:p-8 shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 ${className}`}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      }}
    >
      {children}
    </div>
  );
};

// Glass card component
const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-white/40 backdrop-blur-md rounded-3xl border border-white/50 p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
};

// Animated gradient border component
const GradientBorder = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative rounded-3xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-3xl blur-sm opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-3xl animate-pulse opacity-50" />
      <div className="relative bg-white rounded-3xl">{children}</div>
    </div>
  );
};

// Stats data
const stats = [
  { value: 35, suffix: "%", label: "More Revenue", description: "AI-powered forecasting accuracy" },
  { value: 50, suffix: "%", label: "Faster Cycles", description: "Streamlined pipeline velocity" },
  { value: 90, suffix: "%", label: "Data Accuracy", description: "Automated data reconciliation" },
  { value: 3, suffix: "x", label: "Team Alignment", description: "Unified revenue view" },
  { value: 45, suffix: "+", label: "Integrations", description: "Native connectors" },
  { value: 24, suffix: "/7", label: "AI Monitoring", description: "Always-on insights" },
];

// Feature cards data
const featureCards = [
  {
    title: "Revenue Intelligence",
    description: "AI-powered forecasting that predicts revenue with unprecedented accuracy by analyzing historical data, market trends, and buyer signals.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    features: ["Predictive revenue modeling", "Historical pattern analysis", "Market trend integration", "Scenario planning"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Pipeline Management",
    description: "Centralized pipeline visibility that tracks deals across all stages with automated health scoring and risk alerts.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    features: ["Real-time pipeline visibility", "Deal health scoring", "Stalled deal alerts", "Stage velocity analytics"],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Lead Scoring & Attribution",
    description: "Multi-touch attribution that tracks every touchpoint and assigns scores based on engagement, fit, and buying signals.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
    features: ["Behavioral scoring", "Multi-touch attribution", "Source tracking", "Channel effectiveness"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Deal Insights",
    description: "Deep analytics that surface insights about deal risks, buying committee members, and optimal next steps.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    features: ["Risk detection", "Stakeholder mapping", "Next-best-action suggestions", "Competitive intelligence"],
    color: "from-pink-500 to-rose-500",
  },
];

// Additional features for bento grid
const bentoFeatures = [
  {
    title: "Cross-Team Alignment",
    description: "Unified dashboard that brings Sales, Marketing, and Customer Success together with shared goals and visibility.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z",
    features: ["Shared KPIs", "Goal tracking", "Activity synchronization", "Performance dashboards"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Account-Based Revenue",
    description: "Target key accounts with personalized campaigns and track revenue attribution across the buyer journey.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    features: ["ABM strategy", "Account scoring", "Personalized playbooks", "Revenue attribution"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Forecasting AI",
    description: "Machine learning models that continuously improve forecast accuracy by learning from historical patterns and market changes.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    features: ["ML-based predictions", "Confidence intervals", "What-if scenarios", "Automated adjustments"],
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Commission Tracking",
    description: "Automated commission calculations with transparent dashboards that keep reps motivated and finance teams accurate.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    features: ["Automated calculations", "Quota tracking", "Attainment dashboards", "Audit-ready reports"],
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Territory Management",
    description: "Intelligent territory planning that balances quota attainment, rep capacity, and market coverage.",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    features: ["Auto-assignment rules", "Territory balancing", "Coverage analysis", "Quota allocation"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Data Unification",
    description: "Single source of truth that aggregates data from all revenue tools and reconciles discrepancies automatically.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    features: ["Bi-directional sync", "Data validation", "Conflict resolution", "Historical reconciliation"],
    color: "from-violet-500 to-indigo-500",
  },
];

// CRM integrations
const crmIntegrations = [
  { name: "Salesforce", icon: "S", color: "bg-blue-600" },
  { name: "HubSpot", icon: "H", color: "bg-orange-500" },
  { name: "Microsoft Dynamics", icon: "D", color: "bg-blue-500" },
  { name: "Pipedrive", icon: "P", color: "bg-green-500" },
  { name: "Zoho CRM", icon: "Z", color: "bg-red-400" },
  { name: "SugarCRM", icon: "S", color: "bg-pink-500" },
];

// Marketing automation
const marketingIntegrations = [
  { name: "Marketo", icon: "M", color: "bg-red-600" },
  { name: "Pardot", icon: "P", color: "bg-blue-600" },
  { name: "HubSpot Marketing", icon: "H", color: "bg-orange-500" },
  { name: "Mailchimp", icon: "M", color: "bg-yellow-500" },
  { name: "ActiveCampaign", icon: "A", color: "bg-green-500" },
  { name: "Klaviyo", icon: "K", color: "bg-purple-500" },
];

// Case studies
const caseStudies = [
  {
    company: "TechScale Inc",
    industry: "SaaS",
    metric: "45%",
    metricLabel: "Revenue Growth",
    quote: "Krovos transformed our revenue operations. We went from siloed teams to a unified revenue machine in just 3 months.",
    author: "Sarah Chen",
    role: "CRO",
  },
  {
    company: "Enterprise Solutions",
    industry: "Enterprise Software",
    metric: "60%",
    metricLabel: "Forecast Accuracy",
    quote: "The AI forecasting is incredible. We can now predict revenue within 5% accuracy, which has completely changed how we plan.",
    author: "Michael Torres",
    role: "VP Revenue Ops",
  },
  {
    company: "GrowthCo",
    industry: "FinTech",
    metric: "3x",
    metricLabel: "ROI in 6 Months",
    quote: "The cross-team alignment features paid for themselves in the first quarter. Our Sales and Marketing teams have never been more aligned.",
    author: "Jessica Williams",
    role: "Chief Revenue Officer",
  },
];

// FAQ items
const faqItems = [
  {
    question: "How does Krovos unify revenue data from multiple sources?",
    answer: "Krovos uses advanced data reconciliation algorithms to aggregate data from all your revenue tools. Our AI automatically identifies and resolves conflicts, creating a single source of truth that updates in real-time. We support bi-directional sync with 45+ native integrations, and our open API allows connection to any custom systems.",
  },
  {
    question: "What makes your AI forecasting different from traditional methods?",
    answer: "Our forecasting AI goes beyond simple trend analysis. It uses machine learning models that consider hundreds of signals including historical deal patterns, buyer behavior, market conditions, and engagement metrics. The system continuously learns from outcomes, improving accuracy over time and providing confidence intervals for each prediction.",
  },
  {
    question: "How long does implementation typically take?",
    answer: "Most customers are up and running within 2-4 weeks. Our onboarding team handles the entire setup process, including data migration, integration configuration, and team training. We also provide dedicated customer success support to ensure your team gets maximum value from the platform.",
  },
  {
    question: "Can Krovos work with our existing CRM and tools?",
    answer: "Absolutely. Krovos is designed to enhance your existing tools rather than replace them. We integrate natively with Salesforce, HubSpot, Microsoft Dynamics, and 40+ other platforms. Our bi-directional sync ensures data flows seamlessly between systems without duplicates or conflicts.",
  },
  {
    question: "How secure is our data with Krovos?",
    answer: "Security is our top priority. We're SOC 2 Type II certified, GDPR compliant, and use enterprise-grade encryption for all data in transit and at rest. We also offer role-based access controls, audit logs, and SSO integration with major identity providers.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "Every customer gets a dedicated Customer Success Manager who provides ongoing strategic guidance. We also offer 24/7 technical support, comprehensive documentation, video tutorials, and regular training sessions. Our support team has an average response time of under 2 hours.",
  },
];

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Connect Your Revenue Tools",
    description: "Integrate with Salesforce, HubSpot, Marketo, Gainsight, and 100+ other tools in minutes with bi-directional sync.",
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
  {
    number: "02",
    title: "Unify Your Data",
    description: "Our AI automatically reconciles data across all platforms, creating a single source of truth for revenue operations.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    number: "03",
    title: "Activate AI Insights",
    description: "Deploy intelligent agents that monitor your revenue operations, surface insights, and automate workflows 24/7.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    number: "04",
    title: "Align Your Teams",
    description: "Give Sales, Marketing, and Customer Success unified dashboards and shared KPIs that drive collaboration.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

// Testimonials
const testimonials = [
  {
    quote: "Krovos transformed how we view revenue. Our forecast accuracy improved by 35% in the first quarter, and executives finally have a single source of truth for all revenue data.",
    author: "Amanda Foster",
    role: "VP of Revenue Operations",
    company: "ScaleUp Technologies",
  },
  {
    quote: "The cross-team alignment features are incredible. Marketing, Sales, and Customer Success now share the same dashboards and KPIs. We've eliminated the finger-pointing forever.",
    author: "James Wilson",
    role: "Chief Revenue Officer",
    company: "CloudFirst Inc",
  },
  {
    quote: "Commission tracking used to take our finance team 3 days every quarter. Now it's automated in real-time, and our reps can see their earnings update live as deals close.",
    author: "Michelle Park",
    role: "Sales Operations Director",
    company: "Enterprise Solutions Group",
  },
];

export default function RevOpsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-80 h-80 bg-violet-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/80 backdrop-blur-sm text-indigo-700 text-sm font-semibold mb-6 border border-indigo-200/50"
              >
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                Revenue Operations
              </motion.div>

              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Unify your{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-400 bg-clip-text text-transparent">
                  revenue operations
                </span>
              </h1>

              <p className="mt-6 text-xl text-slate-600 max-w-xl mx-auto lg:mx-0">
                Connect sales, marketing, and customer success data into one platform. Deploy AI agents
                that provide insights, automate workflows, and align your entire revenue organization.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link
                  href="/signup"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-indigo-500/25 transition-all hover:scale-105"
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
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
            </motion.div>

            {/* Right - Service Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl shadow-indigo-500/10 p-8">
                <ServiceIllustration type="RevOps" className="w-full h-64 lg:h-80" />

                {/* Floating cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Revenue Up 35%</div>
                    <div className="text-xs text-slate-500">this quarter</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-indigo-500 rounded-full border-2 border-white" />
                      <div className="w-8 h-8 bg-violet-500 rounded-full border-2 border-white" />
                      <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">3 teams aligned</div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-purple-500/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-400" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-6 gap-6"
          >
            {stats.map((stat, index) => (
              <AnimatedStat key={index} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Revenue Intelligence Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Revenue Intelligence
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Transform raw data into actionable revenue insights with AI-powered analytics
              that learn and improve over time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featureCards.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((f, i) => (
                      <li key={i} className="flex items-center text-slate-600">
                        <svg className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline Management Section with Bento Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Pipeline Management
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Visualize and manage your entire sales pipeline with AI-powered insights
              that help you close more deals faster
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large feature card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <BentoItem colSpan={2} className="h-full min-h-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Pipeline Analytics</h3>
                      <p className="text-slate-600">Real-time visibility into deal health and velocity</p>
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-indigo-600">$2.4M</div>
                      <div className="text-sm text-slate-600 mt-1">Pipeline Value</div>
                      <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        12% this month
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-violet-600">47</div>
                      <div className="text-sm text-slate-600 mt-1">Active Deals</div>
                      <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        8 new this week
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-purple-600">28%</div>
                      <div className="text-sm text-slate-600 mt-1">Win Rate</div>
                      <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        3% improvement
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-pink-600">45d</div>
                      <div className="text-sm text-slate-600 mt-1">Avg. Cycle</div>
                      <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        5 days faster
                      </div>
                    </div>
                  </div>
                </div>
              </BentoItem>
            </motion.div>

            {/* Side features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <BentoItem className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900">Risk Alerts</h4>
                </div>
                <p className="text-sm text-slate-600">Get instant notifications when deals show warning signs</p>
              </BentoItem>

              <BentoItem className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900">Health Scores</h4>
                </div>
                <p className="text-sm text-slate-600">AI-generated health scores for every deal in your pipeline</p>
              </BentoItem>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cross-Team Alignment Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Cross-Team Alignment
            </h2>
            <p className="mt-4 text-lg text-indigo-200">
              Break down silos and align Sales, Marketing, and Customer Success
              around shared revenue goals
            </p>
          </motion.div>

          {/* Team cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sales", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "from-blue-500 to-cyan-500", members: 24, revenue: "$4.2M" },
              { name: "Marketing", icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z", color: "from-purple-500 to-pink-500", members: 18, revenue: "$2.8M" },
              { name: "Customer Success", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", color: "from-emerald-500 to-teal-500", members: 12, revenue: "$3.1M" },
            ].map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${team.color} flex items-center justify-center mb-6`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={team.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{team.name}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-indigo-200">Team Members</span>
                      <span className="text-white font-semibold">{team.members}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-indigo-200">Generated Revenue</span>
                      <span className="text-white font-semibold">{team.revenue}</span>
                    </div>
                    <div className="pt-4 border-t border-white/20">
                      <div className="text-sm text-indigo-200 mb-2">Goal Progress</div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${65 + index * 15}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className={`h-full bg-gradient-to-r ${team.color}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Unified metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-medium">All teams aligned to unified revenue goals</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deal Insights Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Deal Insights
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              AI-powered insights that help you understand deal risks, stakeholder dynamics,
              and optimal next actions
            </p>
          </motion.div>

          {/* Deal insight cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Risk Detection", description: "Identify deals at risk before they stall with predictive analytics", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", color: "text-red-500", bg: "bg-red-100" },
              { title: "Stakeholder Mapping", description: "Visualize the buying committee and track engagement across all stakeholders", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", color: "text-blue-500", bg: "bg-blue-100" },
              { title: "Next Best Action", description: "Get AI recommendations on the optimal next step for each deal", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "text-purple-500", bg: "bg-purple-100" },
              { title: "Competitive Intelligence", description: "Track competitor mentions and understand how you stack up", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", color: "text-emerald-500", bg: "bg-emerald-100" },
              { title: "Timing Insights", description: "Know the best time to reach out based on buyer behavior patterns", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "text-amber-500", bg: "bg-amber-100" },
              { title: "Engagement Score", description: "Track prospect engagement and identify when they're ready to buy", icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z", color: "text-indigo-500", bg: "bg-indigo-100" },
            ].map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <div className={`w-12 h-12 rounded-xl ${insight.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <svg className={`w-6 h-6 ${insight.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={insight.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{insight.title}</h3>
                  <p className="text-slate-600">{insight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Account-Based Revenue Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Account-Based Revenue
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Target high-value accounts with personalized campaigns and track revenue
              attribution across the entire buyer journey
            </p>
          </motion.div>

          {/* ABM Dashboard */}
          <GradientBorder className="p-1">
            <div className="bg-white rounded-3xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left: Account list */}
                <div className="lg:w-1/3">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Target Accounts</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Acme Corporation", score: 92, revenue: "$450K", status: "Active" },
                      { name: "TechStart Inc", score: 87, revenue: "$320K", status: "Active" },
                      { name: "Global Systems", score: 78, revenue: "$280K", status: "Engaged" },
                      { name: "DataFlow Ltd", score: 72, revenue: "$195K", status: "New" },
                    ].map((account, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors cursor-pointer"
                      >
                        <div>
                          <div className="font-semibold text-slate-900">{account.name}</div>
                          <div className="text-sm text-slate-500">{account.revenue} potential</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-indigo-600">{account.score}</div>
                          <div className="text-xs text-slate-500">{account.status}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right: Analytics */}
                <div className="lg:w-2/3">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Revenue Attribution</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-indigo-600">$1.2M</div>
                      <div className="text-sm text-slate-600 mt-1">Pipeline from ABM</div>
                    </div>
                    <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-violet-600">34%</div>
                      <div className="text-sm text-slate-600 mt-1">Win Rate</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-purple-600">4.2</div>
                      <div className="text-sm text-slate-600 mt-1">Decision Makers per Deal</div>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-pink-600">$125K</div>
                      <div className="text-sm text-slate-600 mt-1">Average Deal Size</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GradientBorder>
        </div>
      </section>

      {/* Forecasting AI Section */}
      <ParallaxSection speed={0.3}>
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Forecasting AI
              </h2>
              <p className="mt-4 text-lg text-indigo-200">
                Machine learning models that continuously improve forecast accuracy
                by learning from historical patterns and market changes
              </p>
            </motion.div>

            {/* Forecast visualization */}
            <GradientBorder className="p-1">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-white">Q4 Revenue Forecast</h3>
                    <p className="text-indigo-300">AI-powered prediction with 95% confidence</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-white">$8.4M</div>
                    <div className="text-green-400 text-sm">+23% vs last year</div>
                  </div>
                </div>

                {/* Chart */}
                <div className="relative h-64 flex items-end gap-4">
                  {[
                    { month: "Oct", actual: null, forecast: 2.1, confidence: [1.8, 2.4] },
                    { month: "Nov", actual: null, forecast: 2.8, confidence: [2.4, 3.2] },
                    { month: "Dec", actual: null, forecast: 3.5, confidence: [2.9, 4.1] },
                  ].map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div className="relative w-full flex-1 flex items-end">
                        {/* Confidence interval */}
                        <div
                          className="absolute bottom-0 w-full bg-indigo-500/20 rounded-t-lg"
                          style={{
                            height: `${((item.confidence[1] - item.confidence[0]) / 4) * 100}%`,
                            bottom: `${(item.confidence[0] / 4) * 100}%`,
                          }}
                        />
                        {/* Forecast bar */}
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${(item.forecast / 4) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.2 }}
                          className="relative w-full bg-gradient-to-t from-indigo-500 to-violet-500 rounded-t-lg"
                        />
                      </div>
                      <div className="mt-4 text-white font-medium">{item.month}</div>
                      <div className="text-indigo-300 text-sm">${item.forecast}M</div>
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-8 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gradient-to-t from-indigo-500 to-violet-500 rounded" />
                    <span className="text-indigo-200 text-sm">Forecast</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-indigo-500/20 rounded" />
                    <span className="text-indigo-200 text-sm">Confidence Interval</span>
                  </div>
                </div>
              </div>
            </GradientBorder>
          </div>
        </section>
      </ParallaxSection>

      {/* Commission Tracking Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Commission Tracking
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Automated commission calculations with transparent dashboards that keep
              reps motivated and finance teams accurate
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Commission breakdown */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <BentoItem className="h-full">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Your Commission Summary</h3>
                <div className="space-y-4">
                  {[
                    { name: "Q1 Closed Deals", amount: "$24,500", progress: 100 },
                    { name: "Q2 Closed Deals", amount: "$18,750", progress: 85 },
                    { name: "Q3 Pipeline Bonus", amount: "$12,000", progress: 60 },
                    { name: "Team Override", amount: "$8,200", progress: 100 },
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-700">{item.name}</span>
                        <span className="font-bold text-indigo-600">{item.amount}</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-slate-900">Total Earnings</span>
                    <span className="text-2xl font-bold text-indigo-600">$63,450</span>
                  </div>
                </div>
              </BentoItem>
            </motion.div>

            {/* Quota attainment */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <BentoItem className="h-full">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Quota Attainment</h3>
                <div className="flex items-center justify-center mb-8">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="#e2e8f0"
                        strokeWidth="12"
                        fill="none"
                      />
                      <motion.circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="url(#gradient)"
                        strokeWidth="12"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: 0, strokeDashoffset: 0 }}
                        whileInView={{ strokeDasharray: 553, strokeDashoffset: 165 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-4xl font-bold text-slate-900">70%</div>
                      <div className="text-sm text-slate-500">of quota</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-xl">
                    <div className="text-2xl font-bold text-slate-900">$420K</div>
                    <div className="text-sm text-slate-500">Booked</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-xl">
                    <div className="text-2xl font-bold text-slate-900">$180K</div>
                    <div className="text-sm text-slate-500">Remaining</div>
                  </div>
                </div>
              </BentoItem>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Territory Management Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Territory Management
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Intelligent territory planning that balances quota attainment,
              rep capacity, and market coverage
            </p>
          </motion.div>

          {/* Territory map visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-3xl p-8"
          >
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "West Coast", rep: "Sarah M.", quota: "$1.2M", attainment: "85%", deals: 24 },
                { name: "East Coast", rep: "John D.", quota: "$1.4M", attainment: "92%", deals: 31 },
                { name: "EMEA", rep: "Emma W.", quota: "$980K", attainment: "78%", deals: 18 },
                { name: "APAC", rep: "David L.", quota: "$720K", attainment: "65%", deals: 12 },
              ].map((territory, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-slate-900">{territory.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      parseFloat(territory.attainment) >= 80
                        ? "bg-green-100 text-green-700"
                        : parseFloat(territory.attainment) >= 60
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                      {territory.attainment}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Rep</span>
                      <span className="text-slate-900">{territory.rep}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Quota</span>
                      <span className="text-slate-900">{territory.quota}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Deals</span>
                      <span className="text-slate-900">{territory.deals}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Unification Section */}
      <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-400" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Data Unification
            </h2>
            <p className="mt-4 text-lg text-indigo-200">
              Create a single source of truth that aggregates data from all
              revenue tools and reconciles discrepancies automatically
            </p>
          </motion.div>

          {/* Data flow visualization */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { name: "CRM", icon: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z", color: "from-blue-500 to-cyan-500" },
              { name: "Marketing", icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z", color: "from-purple-500 to-pink-500" },
              { name: "Finance", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "from-emerald-500 to-teal-500" },
              { name: "Support", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "from-amber-500 to-orange-500" },
            ].map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${source.color} flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={source.icon} />
                  </svg>
                </div>
                <div className="text-white font-medium">{source.name}</div>
              </motion.div>
            ))}

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="hidden lg:block"
            >
              <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.div>

            {/* Unified platform */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 flex items-center justify-center mb-4 mx-auto shadow-xl shadow-indigo-500/30">
                <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-white font-bold text-lg">Krovos</div>
              <div className="text-indigo-300 text-sm">Single Source of Truth</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CRM Sync Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              CRM Sync
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Bi-directional synchronization with all major CRM platforms keeps
              your data always up-to-date without manual entry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crmIntegrations.map((crm, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className={`w-14 h-14 rounded-xl ${crm.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">{crm.icon}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{crm.name}</h4>
                  <p className="text-sm text-slate-500">Bi-directional sync</p>
                </div>
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Automation Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Marketing Automation
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Connect your marketing automation platforms to track lead sources,
              measure campaign ROI, and attribute revenue accurately
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingIntegrations.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className={`w-14 h-14 rounded-xl ${platform.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">{platform.icon}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{platform.name}</h4>
                  <p className="text-sm text-slate-500">Campaign attribution</p>
                </div>
                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Integration Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Customer Success Integration
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Extend revenue visibility into post-sale with health scores, renewal
              tracking, and upsell opportunity identification
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Health Monitoring", description: "Track customer health scores and identify churn risk early", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", stat: "94%", label: "Churn Detection" },
              { title: "Renewal Tracking", description: "Monitor renewal dates and probability to forecast expansion revenue", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", stat: "$2.4M", label: "Renewal Pipeline" },
              { title: "Upsell Intelligence", description: "Identify expansion opportunities based on product usage patterns", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", stat: "28%", label: "Upsell Rate" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 mb-6">{feature.description}</p>
                  <div className="bg-indigo-50 rounded-xl p-4">
                    <div className="text-3xl font-bold text-indigo-600">{feature.stat}</div>
                    <div className="text-sm text-slate-500">{feature.label}</div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Analytics Dashboard Section */}
      <section className="py-20 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Revenue Analytics
            </h2>
            <p className="mt-4 text-lg text-indigo-200">
              Comprehensive analytics that give you complete visibility into every
              aspect of your revenue operations
            </p>
          </motion.div>

          {/* Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700"
          >
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Total Revenue", value: "$12.4M", change: "+23%", positive: true },
                { label: "YoY Growth", value: "34%", change: "+8%", positive: true },
                { label: "Avg Deal Size", value: "$45K", change: "-5%", positive: false },
                { label: "Win Rate", value: "28%", change: "+3%", positive: true },
              ].map((metric, index) => (
                <div key={index} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <div className="text-sm text-slate-400 mb-2">{metric.label}</div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className={`text-sm ${metric.positive ? "text-green-400" : "text-red-400"}`}>
                    {metric.change} vs last period
                  </div>
                </div>
              ))}
            </div>

            {/* Chart placeholder */}
            <div className="h-64 bg-slate-800/50 rounded-2xl border border-slate-700 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-indigo-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <div className="text-indigo-300">Revenue Trend Chart</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Customization Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Dashboard Customization
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Build custom dashboards tailored to your specific needs with drag-and-drop
              widgets and personalized views for every team member
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Executive View", description: "High-level revenue metrics and KPIs for leadership", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
              { title: "Sales Dashboard", description: "Pipeline, deals, and individual rep performance", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Marketing ROI", description: "Campaign performance and lead generation metrics", icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" },
              { title: "CS Health", description: "Customer success metrics and retention tracking", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
            ].map((dashboard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={dashboard.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{dashboard.title}</h3>
                  <p className="text-sm text-slate-600">{dashboard.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Hub Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
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
              Connect with 45+ native integrations and build custom connections
              with our open API
            </p>
          </motion.div>

          {/* Integration categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "CRM & Sales", count: 12, integrations: ["Salesforce", "HubSpot", "Microsoft Dynamics", "Pipedrive"] },
              { name: "Marketing", count: 10, integrations: ["Marketo", "Pardot", "HubSpot", "Mailchimp"] },
              { name: "Finance", count: 8, integrations: ["Stripe", "Zuora", "NetSuite", "QuickBooks"] },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BentoItem className="h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-900">{category.name}</h3>
                    <span className="text-sm text-slate-500">{category.count} apps</span>
                  </div>
                  <div className="space-y-2">
                    {category.integrations.map((app, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-600">
                        <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {app}
                      </div>
                    ))}
                  </div>
                </BentoItem>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/integrations"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
            >
              View all integrations
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
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
              See how leading companies transform their revenue operations with Krovos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{study.company}</h4>
                      <p className="text-sm text-slate-500">{study.industry}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {study.metric}
                      </div>
                      <div className="text-sm text-slate-500">{study.metricLabel}</div>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6 italic">&ldquo;{study.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      {study.author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{study.author}</div>
                      <div className="text-sm text-slate-500">{study.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Metrics Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              ROI Metrics
            </h2>
            <p className="mt-4 text-lg text-indigo-200">
              Understand the expected return on investment when you deploy
              Krovos for your revenue operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Average ROI", value: "312%", period: "12 months" },
              { label: "Payback Period", value: "4.2", period: "months" },
              { label: "Productivity Gain", value: "45%", period: "hours saved/week" },
              { label: "Revenue Lift", value: "35%", period: "average increase" },
            ].map((roi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-white mb-2">{roi.value}</div>
                  <div className="text-indigo-200 font-medium">{roi.label}</div>
                  <div className="text-sm text-indigo-300 mt-1">{roi.period}</div>
                </div>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-600">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
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
              Get started in minutes with our four-step process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
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
            <WorkflowDiagram steps={["Connect", "Unify Data", "Activate AI", "Align Teams", "Grow Revenue"]} />
          </div>
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
              Loved by revenue teams
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how leading companies transform their revenue operations
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

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Ready to unify your revenue operations?
            </h2>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
              Join thousands of revenue teams who have aligned their Sales, Marketing, and Customer Success organizations with AI-powered insights.
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
          </motion.div>
        </div>
      </section>

      {/* Second CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GradientBorder className="p-1">
            <div className="bg-white rounded-3xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Get a personalized demo
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                See how Krovos can transform your revenue operations with a custom demo
                tailored to your specific needs and use cases.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/demo"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-indigo-500/25 transition-all hover:scale-105"
                >
                  Schedule demo
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-all"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </GradientBorder>
        </div>
      </section>
    </div>
  );
}

// Animated stat component
function AnimatedStat({ stat, index }: { stat: { value: number; suffix: string; label: string; description: string }; index: number }) {
  const { ref, count } = useAnimatedCounter(stat.value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50"
    >
      <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        {count}{stat.suffix}
      </div>
      <div className="text-lg font-semibold text-slate-700 mt-2">{stat.label}</div>
      <div className="text-sm text-slate-500 mt-1">{stat.description}</div>
    </motion.div>
  );
}
