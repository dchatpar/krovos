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

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
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
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

// Bento Grid Card Component
const BentoCard = ({
  title,
  description,
  icon,
  gradient,
  delay = 0,
  size = "normal",
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  delay?: number;
  size?: "normal" | "large" | "wide";
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5, scale: 1.02 }}
    className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 ${
      size === "large" ? "md:row-span-2" : size === "wide" ? "md:col-span-2" : ""
    }`}
  >
    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/25">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
);

// Glass Card Component
const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`relative bg-white/40 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl ${className}`}>
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-rose-500/5" />
    <div className="relative z-10">{children}</div>
  </div>
);

// Parallax Section Component
const ParallaxSection = ({
  children,
  speed = 0.5,
}: {
  children: React.ReactNode;
  speed?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
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
      <span className="text-lg font-semibold text-slate-900 pr-4">{question}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className="flex-shrink-0"
      >
        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <p className="pb-6 text-slate-600 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

// Case Study Card Component
const CaseStudyCard = ({
  company,
  industry,
  challenge,
  solution,
  results,
  logo,
}: {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  logo?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
  >
    <div className="h-3 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500" />
    <div className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
          {company[0]}
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">{company}</h3>
          <p className="text-sm text-slate-500">{industry}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-2">Challenge</h4>
          <p className="text-slate-600">{challenge}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-2">Solution</h4>
          <p className="text-slate-600">{solution}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-rose-600 uppercase tracking-wider mb-2">Results</h4>
          <ul className="space-y-2">
            {results.map((result, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-700">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-pink-600 transition-colors"
        >
          Read full story
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  </motion.div>
);

// Integration Detail Card
const IntegrationDetail = ({
  name,
  description,
  features,
  color,
}: {
  name: string;
  description: string;
  features: string[];
  color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all group"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center shadow-lg`}>
        <span className="text-white font-bold text-lg">{name[0]}</span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-900">{name}</h3>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
    </div>
    <ul className="space-y-2">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
          <svg className="w-4 h-4 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

// Channel Support Card
const ChannelCard = ({
  name,
  icon,
  description,
  features,
  gradient,
}: {
  name: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  gradient: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
    <div className="relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{name}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
            <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

// Metrics Data
const metrics = [
  { value: 65, suffix: "%", label: "Faster Response Time", description: "AI-powered ticket routing reduces handling time by 65%" },
  { value: 70, suffix: "%", label: "Automation Rate", description: "Tickets resolved automatically without agent intervention" },
  { value: 4.8, suffix: "/5", label: "Customer Satisfaction", description: "Average CSAT score across all support channels" },
  { value: 40, suffix: "%", label: "Cost Reduction", description: "Operational cost savings through automation" },
];

// Extended Stats Data
const extendedStats = [
  { value: 500, suffix: "+", label: "Enterprise Customers", description: "Trust Krovos for their support operations" },
  { value: 10, suffix: "M+", label: "Tickets Resolved", description: "Successfully handled tickets to date" },
  { value: 99.9, suffix: "%", label: "Uptime SLA", description: "Guaranteed platform availability" },
  { value: 24, suffix: "/7", label: "AI Availability", description: "Round-the-clock AI support coverage" },
];

// Automation Features
const automationFeatures = [
  {
    title: "AI Ticket Routing",
    description: "Automatically classify and route support tickets to the right agents or teams using intelligent analysis and machine learning algorithms. Our system learns from historical data to improve routing accuracy over time.",
    features: [
      "Smart category classification using NLP",
      "Multi-language detection and routing",
      "Skill-based agent matching",
      "Load balancing across teams",
      "Custom routing rules engine",
      "Priority-based queue management",
    ],
    index: 0,
  },
  {
    title: "Intelligent Auto-Responses",
    description: "Provide instant, accurate answers to common questions using your knowledge base and AI-powered response generation. The system learns from successful resolutions to continuously improve response quality.",
    features: [
      "Knowledge base integration",
      "Context-aware responses",
      "Personalized answers using customer data",
      "Multi-language support (40+ languages)",
      "Automatic escalation of complex issues",
      "Response quality scoring",
    ],
    index: 1,
  },
  {
    title: "Sentiment Analysis",
    description: "Detect customer emotions and urgency in real-time to prioritize tickets and escalate when needed. Our advanced NLP models analyze message tone, word choice, and context to gauge sentiment.",
    features: [
      "Emotion detection (frustrated, happy, neutral)",
      "Urgency scoring algorithm",
      "SLA risk alerts",
      "Automatic escalation triggers",
      "Historical sentiment tracking",
      "Customer mood analytics dashboard",
    ],
    index: 2,
  },
  {
    title: "Priority Detection",
    description: "Automatically assess ticket severity and business impact to ensure critical issues receive immediate attention. The system considers multiple factors to determine the appropriate priority level.",
    features: [
      "Impact assessment algorithms",
      "VIP customer identification",
      "Contract-based priority rules",
      "Business hour weighting",
      "SLA requirement mapping",
      "Custom priority criteria",
    ],
    index: 3,
  },
];

// Bento Grid Features
const bentoFeatures = [
  {
    title: "Live Chat Automation",
    description: "AI-powered chatbots that handle customer conversations 24/7, deflecting common issues and seamlessly escalating to human agents when needed.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-500",
    delay: 0,
  },
  {
    title: "Call Center Integration",
    description: "Connect with your existing telephony infrastructure for intelligent call routing, whisper coaching, and post-call analysis.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    gradient: "from-pink-500 to-rose-500",
    delay: 0.1,
  },
  {
    title: "Self-Service Portal",
    description: "Empower customers to find answers themselves with an AI-powered help center, knowledge base, and interactive guides.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-rose-500 to-purple-500",
    delay: 0.2,
  },
  {
    title: "Knowledge Base",
    description: "Build and maintain a comprehensive knowledge base with AI suggestions for content improvements and gap analysis.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    gradient: "from-purple-500 to-rose-500",
    delay: 0.3,
    size: "large" as const,
  },
  {
    title: "Community Forums",
    description: "Foster customer peer-to-peer support with integrated community forums moderated by AI for quality assurance.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: "from-pink-500 to-purple-500",
    delay: 0.4,
  },
];

// Multi-Channel Support
const channelSupports = [
  {
    name: "Email Support",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: "AI-powered email parsing, intelligent routing, auto-responses, and sentiment-aware replies for high-volume email support operations.",
    features: [
      "Intelligent email classification",
      "Automated response suggestions",
      "Attachment analysis and processing",
      "Priority inbox sorting",
      "Template recommendation engine",
      "Follow-up reminder automation",
    ],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
  },
  {
    name: "Live Chat",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    description: "Real-time chat support with AI co-pilot suggestions, automated responses, and seamless agent handoff for instant customer assistance.",
    features: [
      "AI-powered chatbot conversations",
      "Co-pilot agent assistance",
      "Proactive chat invitations",
      "Canned response suggestions",
      "File and screen share support",
      "Chat transcript automation",
    ],
    gradient: "from-pink-500 via-rose-500 to-purple-500",
  },
  {
    name: "Phone Support",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    description: "Intelligent call routing, voicemail analysis, whisper coaching, and post-call summary automation for efficient phone support.",
    features: [
      "IVR with natural language understanding",
      "Intelligent call routing",
      "Real-time whisper coaching",
      "Voicemail transcription",
      "Post-call summary generation",
      "Call quality analytics",
    ],
    gradient: "from-rose-500 via-purple-500 to-pink-500",
  },
  {
    name: "Social Media",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    description: "Monitor, engage, and resolve customer issues across social media platforms with unified social support management.",
    features: [
      "Multi-platform monitoring",
      "Sentiment tracking across channels",
      "Automated response templates",
      "Escalation workflows",
      "Social media analytics",
      "Influencer management",
    ],
    gradient: "from-purple-500 via-rose-500 to-pink-500",
  },
  {
    name: "Messaging Apps",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    description: "Support customers through WhatsApp, Facebook Messenger, SMS, and other messaging platforms with unified inbox management.",
    features: [
      "WhatsApp Business integration",
      "SMS and MMS support",
      "Messenger API connection",
      "Rich message templates",
      "Broadcast campaigns",
      "Chatbot automation",
    ],
    gradient: "from-pink-500 via-purple-500 to-rose-500",
  },
  {
    name: "Web Forms",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    description: "Smart web forms with auto-fill, validation, and intelligent submission routing for efficient support request handling.",
    features: [
      "Smart form pre-fill",
      "Intelligent field suggestions",
      "Automatic ticket creation",
      "Custom form builder",
      "Submission analytics",
      "Drop-off recovery",
    ],
    gradient: "from-rose-500 via-pink-500 to-purple-500",
  },
];

// Integration Data
const integrationDetails = [
  {
    name: "Zendesk",
    description: "Leading customer service platform",
    color: "bg-green-600",
    features: [
      "Two-way ticket sync",
      "Real-time agent presence",
      "Custom field mapping",
      "Automated workflows",
      "Reporting integration",
    ],
  },
  {
    name: "Salesforce",
    description: "Enterprise CRM platform",
    color: "bg-blue-600",
    features: [
      "Service Cloud integration",
      "Case management sync",
      "Customer 360 view",
      "Omnichannel routing",
      "Einstein AI features",
    ],
  },
  {
    name: "Intercom",
    description: "Customer messaging platform",
    color: "bg-blue-500",
    features: [
      "Live chat integration",
      "Bot workflow sync",
      "User data sharing",
      "Conversation routing",
      "Campaign management",
    ],
  },
];

// Case Studies Data
const caseStudies = [
  {
    company: "TechFlow SaaS",
    industry: "B2B SaaS",
    challenge: "TechFlow was struggling with a 40% increase in support tickets while maintaining response time SLAs. Their team was overwhelmed and customer satisfaction was dropping.",
    solution: "Implemented Kro routing, automated responsesvos AI-powered ticket for common issues, and sentiment analysis for priority detection. The integration with their existing Zendesk setup took less than a week.",
    results: [
      "65% reduction in average response time",
      "70% of tickets resolved automatically",
      "CSAT score increased from 4.1 to 4.8",
      "Support team capacity increased by 3x",
    ],
  },
  {
    company: "GlobalServe",
    industry: "E-commerce",
    challenge: "GlobalServe faced challenges with multi-language support across 12 countries. They needed a solution that could handle diverse customer bases while maintaining consistent service quality.",
    solution: "Deployed Krovos with multi-language NLP capabilities, integrated with their Salesforce CRM, and implemented AI-powered live chat with automated responses in 8 languages.",
    results: [
      "Support coverage in 12 languages",
      "45% reduction in support costs",
      "Customer satisfaction up 35%",
      "First contact resolution at 78%",
    ],
  },
  {
    company: "CloudScale Inc",
    industry: "Cloud Infrastructure",
    challenge: "CloudScale needed enterprise-grade support automation that could handle critical technical issues from enterprise customers while maintaining strict SLA requirements.",
    solution: "Implemented Krovos with priority detection, SLA monitoring, VIP customer routing, and deep integration with their internal systems. Added custom escalation workflows for critical issues.",
    results: [
      "99.9% SLA compliance achieved",
      "Critical issues resolved 2x faster",
      "Enterprise NPS up 28 points",
      "Support ticket backlog eliminated",
    ],
  },
];

// FAQ Data
const faqData = [
  {
    question: "How does AI ticket routing work?",
    answer: "Our AI analyzes incoming tickets using natural language processing to understand the content, context, and intent. It then classifies the ticket into appropriate categories and routes it to the most suitable agent based on skills, availability, and workload. The system continuously learns from routing decisions to improve accuracy over time.",
  },
  {
    question: "Can I integrate with my existing helpdesk software?",
    answer: "Yes! Krovos integrates seamlessly with leading helpdesk platforms including Zendesk, Salesforce Service Cloud, Intercom, Freshdesk, HubSpot, and many others. Our integration setup typically takes less than a week with minimal configuration required. We also offer custom API integrations for proprietary systems.",
  },
  {
    question: "How accurate is the sentiment analysis?",
    answer: "Our sentiment analysis model achieves 92% accuracy in detecting customer emotions (frustrated, satisfied, neutral). It analyzes multiple signals including word choice, punctuation patterns, capitalization, and context. The model is continuously trained on your specific industry terminology to improve accuracy for your use case.",
  },
  {
    question: "What languages are supported?",
    answer: "Krovos supports over 40 languages for both ticket processing and auto-responses, including English, Spanish, French, German, Italian, Portuguese, Chinese (Simplified and Traditional), Japanese, Korean, Arabic, and many more. Multi-language tickets are automatically detected and routed appropriately.",
  },
  {
    question: "How does pricing work?",
    answer: "Our pricing is based on the number of support tickets processed per month and the features you need. We offer three tiers: Starter (up to 1,000 tickets/month), Professional (up to 10,000 tickets/month), and Enterprise (unlimited tickets). All plans include a 14-day free trial with full access to all features.",
  },
  {
    question: "Is my customer data secure?",
    answer: "Absolutely. We take data security seriously and are SOC 2 Type II certified, GDPR compliant, and follow industry best practices. All data is encrypted in transit and at rest. We offer data residency options across US, EU, and APAC regions. Your customer data is never used to train models shared with other customers.",
  },
  {
    question: "How long does implementation take?",
    answer: "Most customers are up and running within 1-2 weeks. The basic setup with one channel integration can be completed in as little as 3-5 business days. More complex implementations with multiple channels, custom integrations, and extensive knowledge base configuration typically take 2-4 weeks.",
  },
  {
    question: "What happens to unresolved tickets?",
    answer: "Krovos automatically escalates tickets that cannot be resolved through automation to your human agents. The system provides the agent with full context including customer history, previous interactions, and suggested responses. Tickets can also be configured to auto-escalate after a certain time period or based on specific triggers like negative sentiment detection.",
  },
];

// Process Steps
const processSteps = [
  {
    number: "Step 01",
    title: "Connect Your Channels",
    description: "Integrate with your existing support channels including email, chat, phone, and social media in minutes using our pre-built connectors.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    number: "Step 02",
    title: "Configure Knowledge Base",
    description: "Upload your documentation, FAQs, and support articles. Our AI learns from your content to provide accurate answers and identify content gaps.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    number: "Step 03",
    title: "Deploy AI Agents",
    description: "Launch AI support agents that work 24/7 to handle inquiries, provide answers, and escalate complex issues to your human team.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    number: "Step 04",
    title: "Monitor & Optimize",
    description: "Track performance with real-time dashboards, identify optimization opportunities, and continuously improve your support operations.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

// Integrations
const integrations = [
  { name: "Zendesk", color: "bg-green-600" },
  { name: "Salesforce", color: "bg-blue-600" },
  { name: "Intercom", color: "bg-blue-500" },
  { name: "Freshdesk", color: "bg-orange-500" },
  { name: "HubSpot", color: "bg-orange-600" },
  { name: "Slack", color: "bg-purple-600" },
  { name: "Microsoft Teams", color: "bg-indigo-600" },
  { name: "Discord", color: "bg-indigo-500" },
  { name: "WhatsApp", color: "bg-green-500" },
  { name: "Twilio", color: "bg-red-600" },
];

// Testimonials
const testimonials = [
  {
    quote: "Krovos transformed our support operations. Our response time dropped by 65% and customer satisfaction increased to 4.8 stars. The AI routing is incredibly accurate.",
    author: "Jessica Park",
    role: "Head of Customer Success",
    company: "TechFlow SaaS",
  },
  {
    quote: "We automated 70% of incoming tickets with intelligent auto-responses. Our support team now focuses on complex issues that truly need human expertise.",
    author: "David Kim",
    role: "Support Director",
    company: "CloudScale Inc",
  },
  {
    quote: "The sentiment analysis feature is a game-changer. We can now identify frustrated customers instantly and prioritize their issues before they escalate.",
    author: "Amanda Chen",
    role: "VP of Operations",
    company: "GlobalServe",
  },
];

// ROI Metrics
const roiMetrics = [
  { label: "Average ROI", value: "340%", description: "Return on investment within first year" },
  { label: "Payback Period", value: "4.2", description: "Months to recover initial investment" },
  { label: "Cost per Ticket", value: "-67%", description: "Reduction in support costs" },
  { label: "Agent Productivity", value: "+45%", description: "Increase in tickets handled per agent" },
];

export default function CustomerSupportPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Extended Hero Section with Animated Stats */}
      <section className="relative py-20 lg:py-40 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(244, 63, 94, 0.1) 0%, transparent 40%)",
            }}
          />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm text-purple-700 text-sm font-semibold mb-6 border border-purple-200/50"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                AI-Powered Customer Support
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight"
              >
                Transform your{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-400 bg-clip-text text-transparent">
                  customer support
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-xl text-slate-600 max-w-xl mx-auto lg:mx-0"
              >
                Deploy AI agents that handle ticket routing, auto-responses, sentiment analysis,
                and priority detection. Deliver exceptional support at scale while reducing costs by 40%.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link
                  href="/signup"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/25 transition-all hover:scale-105"
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

            {/* Right - Service Illustration with floating elements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl shadow-purple-500/10 p-8">
                <ServiceIllustration type="Customer Support" className="w-full h-64 lg:h-80" />

                {/* Floating cards with animations */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Ticket Resolved</div>
                    <div className="text-xs text-slate-500">in 1.2 minutes</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white" />
                      <div className="w-8 h-8 bg-pink-500 rounded-full border-2 border-white" />
                      <div className="w-8 h-8 bg-rose-500 rounded-full border-2 border-white" />
                    </div>
                    <div className="text-sm font-medium text-slate-700">5 agents active</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 -right-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-3 border border-white/50"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-slate-600">AI Processing</span>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl" />
            </motion.div>
          </div>

          {/* Animated Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-20 lg:mt-32"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
              {extendedStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg"
                >
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-semibold text-slate-700 mt-2">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-400" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {metrics.map((metric, index) => (
              <MetricBox
                key={index}
                value={`${metric.value}${metric.suffix || ""}`}
                label={metric.label}
                description={metric.description}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Comprehensive Support Automation
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to deliver exceptional customer support at scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {bentoFeatures.map((feature, index) => (
              <BentoCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                gradient={feature.gradient}
                delay={feature.delay}
                size={feature.size as "normal" | "large" | "wide"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Automate Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              What you can automate
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Empower your support team with AI agents that handle repetitive tasks and deliver instant, accurate responses
            </p>
          </motion.div>

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

      {/* Multi-Channel Support Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Omnichannel Support
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Unified customer experience across all communication channels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channelSupports.map((channel, index) => (
              <ChannelCard
                key={index}
                name={channel.name}
                icon={channel.icon}
                description={channel.description}
                features={channel.features}
                gradient={channel.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <ParallaxSection speed={0.1}>
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500" />
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Powerful Analytics Dashboard
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Gain deep insights into your support operations with real-time analytics and custom reporting
              </p>
            </motion.div>

            <GlassCard className="p-8">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="p-4 bg-purple-500/20 rounded-2xl">
                  <div className="text-sm text-purple-300 mb-1">Total Tickets</div>
                  <div className="text-3xl font-bold text-white">12,847</div>
                  <div className="text-xs text-green-400">+23% vs last month</div>
                </div>
                <div className="p-4 bg-pink-500/20 rounded-2xl">
                  <div className="text-sm text-pink-300 mb-1">Avg Response</div>
                  <div className="text-3xl font-bold text-white">2.3m</div>
                  <div className="text-xs text-green-400">-65% vs last month</div>
                </div>
                <div className="p-4 bg-rose-500/20 rounded-2xl">
                  <div className="text-sm text-rose-300 mb-1">Resolution Rate</div>
                  <div className="text-3xl font-bold text-white">94%</div>
                  <div className="text-xs text-green-400">+12% vs last month</div>
                </div>
                <div className="p-4 bg-purple-500/20 rounded-2xl">
                  <div className="text-sm text-purple-300 mb-1">CSAT Score</div>
                  <div className="text-3xl font-bold text-white">4.8/5</div>
                  <div className="text-xs text-green-400">+0.7</div>
                 vs last month</div>
              </div>

              {/* Mock chart */}
              <div className="h-64 bg-slate-800/50 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute bottom-6 left-6 right-6 h-40 flex items-end gap-2">
                  {[35, 45, 55, 40, 60, 75, 65, 80, 70, 85, 90, 95].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                      className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t"
                    />
                  ))}
                </div>
                <div className="absolute top-6 left-6 text-white font-semibold">Ticket Volume Trend</div>
              </div>
            </GlassCard>
          </div>
        </section>
      </ParallaxSection>

      {/* SLA & Customer Satisfaction Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-slate-900"
              >
                SLA Monitoring & Customer Satisfaction Tracking
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-lg text-slate-600"
              >
                Stay on top of your service level agreements with real-time monitoring and automated alerts. Track customer satisfaction trends and identify areas for improvement.
              </motion.p>
              <ul className="mt-8 space-y-4">
                {[
                  "Real-time SLA countdown timers with visual indicators",
                  "Automated escalation when SLA is at risk",
                  "CSAT and NPS score tracking with trends",
                  "Customizable dashboards and automated reports",
                  "Customer effort score (CES) measurement",
                  "Feedback collection at multiple touchpoints",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <GlassCard className="p-8">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-purple-50 rounded-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Avg Response Time</div>
                        <div className="text-2xl font-bold text-slate-900">2.3 min</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold">-65%</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center justify-between p-4 bg-pink-50 rounded-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">CSAT Score</div>
                        <div className="text-2xl font-bold text-slate-900">4.8/5</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold">+23%</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-between p-4 bg-rose-50 rounded-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">SLA Compliance</div>
                        <div className="text-2xl font-bold text-slate-900">98.5%</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold">+12%</div>
                  </motion.div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Service Portal Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Self-Service Portal
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Empower customers to find answers independently with an AI-powered help center
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                {[
                  {
                    title: "AI-Powered Search",
                    description: "Intelligent search that understands context and natural language queries",
                    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                  },
                  {
                    title: "Interactive Guides",
                    description: "Step-by-step tutorials with conditional logic based on user responses",
                    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
                  },
                  {
                    title: "Knowledge Base",
                    description: "Comprehensive articles, FAQs, and documentation with AI suggestions",
                    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                  },
                  {
                    title: "Community Forums",
                    description: "Peer-to-peer support moderated by AI for quality assurance",
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/25">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <GlassCard className="p-6">
                <div className="bg-white rounded-2xl shadow-inner p-4">
                  {/* Mock search interface */}
                  <div className="relative mb-6">
                    <input
                      type="text"
                      placeholder="How do I reset my password?"
                      className="w-full px-4 py-3 pl-12 bg-slate-100 rounded-xl border-0 focus:ring-2 focus:ring-purple-500"
                    />
                    <svg className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>

                  {/* Mock results */}
                  <div className="space-y-3">
                    {[
                      { title: "Resetting Your Password", category: "Account", relevance: "98%" },
                      { title: "Two-Factor Authentication Setup", category: "Security", relevance: "85%" },
                      { title: "Managing Account Settings", category: "Account", relevance: "72%" },
                    ].map((result, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-4 bg-slate-50 rounded-xl hover:bg-purple-50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-slate-900">{result.title}</h4>
                          <span className="text-xs text-green-600 font-medium">{result.relevance} match</span>
                        </div>
                        <p className="text-sm text-slate-500">{result.category}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Details Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Seamless Integrations
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Connect with your existing tools for a unified support experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {integrationDetails.map((integration, index) => (
              <IntegrationDetail
                key={index}
                name={integration.name}
                description={integration.description}
                features={integration.features}
                color={integration.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ROI Metrics Section */}
      <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500" />
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
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
              See the measurable impact of AI-powered customer support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {roiMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-white mt-2">{metric.label}</div>
                <div className="text-sm text-slate-400 mt-1">{metric.description}</div>
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

          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
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
            <WorkflowDiagram steps={["Connect", "Configure", "Automate", "Monitor", "Optimize"]} />
          </div>
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
              See how leading companies transform their customer support
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
                results={study.results}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By / Integrations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
              Trusted by leading enterprises
            </h2>
            <p className="mt-3 text-slate-600">
              Seamlessly integrates with your existing support stack
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Loved by support teams
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how leading companies transform their customer support
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

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
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
              Everything you need to know about Krovos customer support
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Multiple CTAs Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600" />
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
              Ready to transform your customer support?
            </h2>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
              Join thousands of support teams who have automated their operations and increased customer satisfaction by 40%.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="px-10 py-5 bg-white text-purple-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/25 transition-all hover:scale-105"
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

            {/* Secondary CTA */}
            <div className="mt-16 pt-12 border-t border-white/20">
              <p className="text-white/80 mb-6">Want to see it in action first?</p>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch a demo
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex items-center justify-center gap-8 text-white/60 text-sm flex-wrap">
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
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                24/7 Support
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
