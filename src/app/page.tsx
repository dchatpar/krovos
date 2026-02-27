"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// Animated counter component
const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2 }: { end: number; suffix?: string; prefix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

// Service Card Component
const ServiceCard = ({
  title,
  description,
  icon,
  color,
  features,
  href,
  delay = 0,
  size = "normal" as "normal" | "large"
}: {
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  href: string;
  delay?: number;
  size?: "normal" | "large";
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <Link
      href={href}
      className={`group relative block h-full bg-[#0D1F35] rounded-3xl border border-[#D4A017]/10 overflow-hidden transition-all duration-500 hover:border-[#D4A017]/30 hover:-translate-y-2 ${
        size === "large" ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-full`} />

      <div className="relative p-6 lg:p-8 h-full flex flex-col">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-[#D4A017] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/60 text-sm lg:text-base mb-6 flex-grow">
          {description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-white/70 bg-white/5 rounded-full border border-white/10"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Learn more */}
        <div className="flex items-center text-[#D4A017] font-medium text-sm group-hover:gap-2 transition-all mt-auto">
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  </motion.div>
);

// Case Study Card
const CaseStudyCard = ({
  industry,
  title,
  challenge,
  result,
  tech,
  delay = 0
}: {
  industry: string;
  title: string;
  challenge: string;
  result: string;
  tech: string[];
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="group bg-[#0D1F35] rounded-3xl border border-[#D4A017]/10 overflow-hidden hover:border-[#D4A017]/30 transition-all duration-500"
  >
    <div className="p-6 lg:p-8">
      {/* Industry badge */}
      <span className="inline-block px-3 py-1 text-xs font-semibold text-[#0E7C7B] bg-[#0E7C7B]/10 rounded-full mb-4">
        {industry}
      </span>

      {/* Title */}
      <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-[#D4A017] transition-colors">
        {title}
      </h3>

      {/* Challenge */}
      <div className="mb-6">
        <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Challenge</h4>
        <p className="text-white/70 text-sm">{challenge}</p>
      </div>

      {/* Result */}
      <div className="p-4 bg-gradient-to-r from-[#D4A017]/10 to-transparent rounded-xl border-l-4 border-[#D4A017] mb-6">
        <h4 className="text-xs font-semibold text-[#D4A017] uppercase tracking-wider mb-1">Result</h4>
        <p className="text-2xl lg:text-3xl font-bold text-white">{result}</p>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {tech.map((t, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs text-white/50 bg-white/5 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// Why Krovos Card
const WhyKrovosCard = ({
  title,
  description,
  icon,
  delay = 0
}: {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay }}
    viewport={{ once: true }}
    className="group p-6 lg:p-8 bg-[#0D1F35] rounded-3xl border border-[#D4A017]/10 hover:border-[#D4A017]/30 transition-all duration-500"
  >
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
      <svg className="w-6 h-6 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
      </svg>
    </div>
    <h3 className="text-lg lg:text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-white/60 text-sm lg:text-base">{description}</p>
  </motion.div>
);

// Testimonial Card
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
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/10 hover:border-[#D4A017]/20 transition-all"
  >
    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-[#D4A017]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>

    {/* Quote */}
    <p className="text-white/80 text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed">&ldquo;{quote}&rdquo;</p>

    {/* Author */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#D4A017] to-[#0E7C7B] flex items-center justify-center text-white font-bold text-sm lg:text-base">
        {author.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <div className="font-semibold text-white text-sm lg:text-base">{author}</div>
        <div className="text-xs lg:text-sm text-white/50">{role}, {company}</div>
      </div>
    </div>
  </motion.div>
);

// Client Logo
const ClientLogos = () => {
  const logos = [
    "TechCorp", "GlobalBank", "MediCare", "RetailMax", "LogiFlow",
    "FinanceHub", "DataSync", "CloudNine", "InnovateAI", "SecureNet",
    "RetailPro", "HealthTech", "FinServe", "AutoMotive", "EnergyPlus"
  ];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Row 1 - Left to Right */}
      <div className="flex mb-4">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center gap-3 text-white/40">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                <span className="text-xs font-bold">{logo[0]}</span>
              </div>
              <span className="font-medium text-sm">{logo}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="flex">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...logos.slice().reverse(), ...logos.slice().reverse()].map((logo, i) => (
            <div key={i} className="flex items-center gap-3 text-white/40">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                <span className="text-xs font-bold">{logo[0]}</span>
              </div>
              <span className="font-medium text-sm">{logo}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// World Map with offices
const GlobalOffices = () => {
  const offices = [
    { name: "Vancouver", country: "Canada", coords: "top-[35%] left-[18%]" },
    { name: "Dubai", country: "UAE", coords: "top-[45%] left-[58%]" },
    { name: "Mumbai", country: "India", coords: "top-[55%] left-[68%]" },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Simple world map SVG */}
      <svg viewBox="0 0 800 400" className="w-full h-auto" fill="none">
        {/* Simplified world outline */}
        <path
          d="M150 200 Q100 180 80 200 Q60 220 80 240 Q120 260 150 250 Q180 240 200 220 Q220 200 200 180 Q180 160 150 200"
          fill="#1a3a5c"
          opacity="0.3"
        />
        <path
          d="M250 150 Q300 120 350 150 Q400 180 420 220 Q440 260 400 280 Q360 300 320 280 Q280 260 260 220 Q240 180 250 150"
          fill="#1a3a5c"
          opacity="0.3"
        />
        <path
          d="M450 180 Q500 160 550 180 Q600 200 620 240 Q640 280 600 300 Q560 320 520 300 Q480 280 460 240 Q440 200 450 180"
          fill="#1a3a5c"
          opacity="0.3"
        />
        <path
          d="M550 100 Q600 80 650 100 Q700 120 720 160 Q740 200 700 220 Q660 240 620 220 Q580 200 560 160 Q540 120 550 100"
          fill="#1a3a5c"
          opacity="0.3"
        />
        <path
          d="M650 280 Q700 260 720 290 Q740 320 700 340 Q660 360 630 340 Q600 320 620 290 Q640 260 650 280"
          fill="#1a3a5c"
          opacity="0.3"
        />

        {/* Continents labels */}
        <text x="120" y="230" fill="#D4A017" fontSize="12" fontWeight="600">NORTH AMERICA</text>
        <text x="280" y="220" fill="#D4A017" fontSize="12" fontWeight="600">EUROPE</text>
        <text x="470" y="220" fill="#D4A017" fontSize="12" fontWeight="600">ASIA</text>
        <text x="640" y="310" fill="#D4A017" fontSize="12" fontWeight="600">AUSTRALIA</text>
      </svg>

      {/* Office dots */}
      {offices.map((office, index) => (
        <motion.div
          key={office.name}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.2 }}
          viewport={{ once: true }}
          className={`absolute ${office.coords} transform -translate-x-1/2 -translate-y-1/2`}
        >
          {/* Pulse effect */}
          <span className="absolute w-8 h-8 bg-[#0E7C7B] rounded-full opacity-30 animate-ping" />
          <span className="relative w-4 h-4 bg-[#0E7C7B] rounded-full border-2 border-white shadow-lg shadow-[#0E7C7B]/50" />

          {/* Label */}
          <div className="absolute left-6 top-0 whitespace-nowrap">
            <div className="text-sm font-bold text-white">{office.name}</div>
            <div className="text-xs text-white/60">{office.country}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Services data
const services = [
  {
    title: "AI & Automation",
    description: "Intelligent automation solutions powered by machine learning and advanced algorithms to streamline operations and reduce manual workload.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "from-[#0E7C7B] to-[#0A5C5B]",
    features: ["AI Agents", "Process Automation", "Machine Learning"],
    href: "/services/ai-automation",
    size: "large" as const,
  },
  {
    title: "Custom Software",
    description: "Bespoke software solutions tailored to your unique business requirements with cutting-edge technologies.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    color: "from-blue-500 to-blue-700",
    features: ["Web Apps", "Mobile Apps", "Cloud Solutions"],
    href: "/services/custom-software",
    size: "normal" as const,
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to amplify your brand presence and drive meaningful engagement across all channels.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
    color: "from-[#D4A017] to-[#F0C040]",
    features: ["SEO", "Social Media", "Content Strategy"],
    href: "/services/digital-marketing",
    size: "normal" as const,
  },
  {
    title: "Managed IT",
    description: "Comprehensive IT infrastructure management ensuring your systems remain secure, efficient, and always available.",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
    color: "from-red-500 to-red-700",
    features: ["24/7 Support", "Security", "Cloud Management"],
    href: "/services/managed-it",
    size: "normal" as const,
  },
  {
    title: "Talent Solutions",
    description: "Strategic talent acquisition and management to build high-performing teams that drive business success.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    color: "from-purple-500 to-purple-700",
    features: ["Recruitment", "Team Building", "Training"],
    href: "/services/talent",
    size: "normal" as const,
  },
  {
    title: "Logistics Tech",
    description: "Advanced technology solutions to optimize supply chain operations and enhance logistics efficiency.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    color: "from-cyan-500 to-cyan-700",
    features: ["Fleet Management", "Tracking", "Route Optimization"],
    href: "/services/logistics",
    size: "normal" as const,
  },
];

// Case studies data
const caseStudies = [
  {
    industry: "Finance",
    title: "Global Bank Modernization",
    challenge: "Legacy systems causing 40% inefficiency in transaction processing and poor customer experience.",
    result: "65% Faster Processing",
    tech: ["Python", "AWS", "React", "Kubernetes"],
  },
  {
    industry: "Healthcare",
    title: "Hospital Network Integration",
    challenge: "Disconnected systems across 12 facilities causing data silos and delayed patient care.",
    result: "90% Data Accessibility",
    tech: ["Java", "FHIR", "Azure", "AI/ML"],
  },
  {
    industry: "Retail",
    title: "E-commerce Platform Scale",
    challenge: "Unable to handle Black Friday traffic spikes, losing an estimated $2M in sales annually.",
    result: "99.99% Uptime",
    tech: ["Node.js", "MongoDB", "Redis", "CDN"],
  },
];

// Why Krovos data
const whyKrovos = [
  {
    title: "Global 3-Office Delivery Model",
    description: "Strategic presence across Vancouver, Dubai, and Mumbai enables around-the-clock development cycles and diverse market expertise.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "6-Division Full-Stack Capability",
    description: "From AI automation to talent solutions, we provide end-to-end services across all technology domains your business needs.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z",
  },
  {
    title: "Fixed-Price Engagement Model",
    description: "Predictable costs with transparent pricing. No surprises, just reliable project delivery within budget.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Enterprise-Grade Quality",
    description: "ISO-certified processes, GDPR compliance, and Fortune 500 client references. Security and quality are non-negotiable.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

// Testimonials data
const testimonials = [
  {
    quote: "Krovos transformed our digital infrastructure. Their team's expertise in AI automation helped us reduce operational costs by 40% in just 6 months.",
    author: "James Morrison",
    role: "CTO",
    company: "Global Finance Corp",
  },
  {
    quote: "Working with Krovos was exceptional. They delivered our custom software platform ahead of schedule and the quality exceeded our expectations.",
    author: "Priya Sharma",
    role: "VP of Operations",
    company: "MediCare Plus",
  },
  {
    quote: "The team's understanding of both technology and business requirements made all the difference. They didn't just build what we asked for, they built what we needed.",
    author: "Michael Chen",
    role: "CEO",
    company: "TechVentures Inc",
  },
];

// Footer Import
import Footer from "@/components/landing/Footer";

// Main Page Component
export default function HomePage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="bg-[#0A1628] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0 -z-10">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1F35] to-[#0A1628]" />

          {/* Animated orbs */}
          <motion.div
            style={{ y: y1, x: -50 }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#D4A017]/20 via-[#F0C040]/10 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            style={{ y: y2, x: 50 }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#0E7C7B]/20 via-[#0A5C5B]/10 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#D4A017]/10 via-[#0E7C7B]/5 to-transparent rounded-full blur-3xl"
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAlIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/20 text-[#D4A017] text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ISO-Certified
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 text-[#0E7C7B] text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              GDPR Compliant
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              We Build Technology{" "}
              <span className="bg-gradient-to-r from-[#D4A017] via-[#F0C040] to-[#0E7C7B] bg-clip-text text-transparent">
                That Moves Business
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Enterprise AI &middot; Custom Software &middot; Managed IT &middot; Digital Marketing
              <span className="block mt-2 text-white/50">
                delivered globally from Vancouver, Dubai & Mumbai
              </span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#D4A017] to-[#F0C040] text-[#0A1628] font-semibold rounded-2xl shadow-lg shadow-[#D4A017]/30 hover:shadow-[#D4A017]/50 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D4A017] to-[#F0C040] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            </Link>
            <Link
              href="/solutions"
              className="group px-8 py-4 bg-transparent text-white font-semibold rounded-2xl border border-white/20 hover:border-[#D4A017] hover:bg-white/5 transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 text-center text-white/50 text-sm"
          >
            <span className="text-[#D4A017] font-semibold">200+ projects</span> &middot;{" "}
            <span className="text-[#D4A017] font-semibold">11 countries</span> &middot;{" "}
            Fortune 500 clients
          </motion.p>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="py-12 bg-[#0D1F35] border-y border-[#D4A017]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: 200, suffix: "+", label: "Clients Served" },
              { value: 450, suffix: "+", label: "Projects Delivered" },
              { value: 11, suffix: "", label: "Countries" },
              { value: 120, suffix: "+", label: "Team Members" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#D4A017] to-[#F0C040] bg-clip-text text-transparent">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/60 text-sm lg:text-base mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E7C7B]/10 text-[#0E7C7B] text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Complete Technology{" "}
              <span className="bg-gradient-to-r from-[#D4A017] to-[#F0C040] bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Six specialized divisions working together to deliver comprehensive enterprise solutions.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="py-12 bg-[#0D1F35] border-y border-[#D4A017]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-white/40 text-sm font-medium uppercase tracking-widest">
              Trusted by Industry Leaders
            </h3>
          </motion.div>
          <ClientLogos />
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A017]/10 text-[#D4A017] text-sm font-medium mb-4">
              Case Studies
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Proven{" "}
              <span className="bg-gradient-to-r from-[#D4A017] to-[#F0C040] bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Real projects, real impact. See how we have helped enterprises transform their operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Krovos */}
      <section className="py-20 lg:py-32 bg-[#0D1F35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
              Why Krovos
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              The Krovos{" "}
              <span className="bg-gradient-to-r from-[#0E7C7B] to-[#0A5C5B] bg-clip-text text-transparent">
                Advantage
              </span>
            </h2>
            <p className="mt-4 text-lg text-white/60">
              What sets us apart in the enterprise technology landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {whyKrovos.map((item, index) => (
              <WhyKrovosCard key={index} {...item} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E7C7B]/10 text-[#0E7C7B] text-sm font-medium mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Client{" "}
              <span className="bg-gradient-to-r from-[#D4A017] to-[#F0C040] bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 lg:py-32 bg-[#0D1F35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A017]/10 text-[#D4A017] text-sm font-medium mb-4">
              Global Presence
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Delivering Worldwide
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Strategic offices in key business hubs to serve clients across continents.
            </p>
          </motion.div>

          <GlobalOffices />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Gold gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4A017] via-[#E5B020] to-[#F0C040]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-[#0A1628]">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="mt-4 text-lg text-[#0A1628]/70">
              Let us transform your vision into reality. Our team of experts is ready to deliver solutions that drive business growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-[#0A1628] text-[#D4A017] font-semibold rounded-2xl hover:bg-[#0D1F35] transition-all hover:scale-105 shadow-xl"
              >
                Start Your Project
              </Link>
              <Link
                href="/company/about"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-[#0A1628] font-semibold rounded-2xl border border-[#0A1628]/20 hover:bg-white/20 transition-all hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
