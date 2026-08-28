"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// Constellation: floating gold particles for the hero backdrop
const Constellation = ({ count = 28 }: { count?: number }) => {
  // Deterministic pseudo-random so SSR/CSR match
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const seed = (i + 1) * 9301;
        const rand = (n: number) => {
          const x = Math.sin(seed * (n + 1)) * 10000;
          return x - Math.floor(x);
        };
        return {
          top: rand(1) * 100,
          left: rand(2) * 100,
          size: 2 + rand(3) * 3,
          duration: 6 + rand(4) * 10,
          delay: rand(5) * 5,
          opacity: 0.3 + rand(6) * 0.5,
        };
      }),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-[#F0C040]"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: "0 0 10px rgba(240, 192, 64, 0.7), 0 0 20px rgba(212, 160, 23, 0.35)",
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, p.opacity, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
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
      className={`group relative block h-full rounded-3xl border border-[#D4A017]/10 overflow-hidden transition-all duration-500 hover:border-[#D4A017]/40 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(212,160,23,0.25)] ${
        size === "large" ? "md:col-span-2 md:row-span-2" : ""
      }`}
      style={{
        background:
          "linear-gradient(160deg, #0D2040 0%, #0D1F35 55%, #060D18 100%)",
      }}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-full`} />

      {/* Thin gold accent line at top on hover */}
      <span
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[2px] origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #D4A017 30%, #F0C040 50%, #D4A017 70%, transparent 100%)",
        }}
      />

      <div className="relative p-6 lg:p-8 h-full flex flex-col">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(212,160,23,0.25)] transition-all duration-300 shadow-lg`}>
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-[#F0C040] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#94A3B8] text-base lg:text-lg mb-6 flex-grow">
          {description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-[#CBD5E1] bg-white/[0.08] rounded-full border border-white/10"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Learn more */}
        <div className="flex items-center text-[#D4A017] font-semibold text-sm mt-auto">
          <span className="bg-gradient-to-r from-[#D4A017] to-[#F0C040] bg-clip-text text-transparent">
            Learn more
          </span>
          <svg
            className="w-4 h-4 ml-1.5 text-[#F0C040] transform group-hover:translate-x-2 transition-transform duration-300 ease-out"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
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
    className="group relative p-6 lg:p-8 bg-[#0D1F35] rounded-3xl border border-[#D4A017]/10 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:border-[#D4A017]/35 hover:shadow-[0_20px_50px_-12px_rgba(212,160,23,0.35)]"
  >
    {/* Hover gold glow */}
    <div
      aria-hidden
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, rgba(212, 160, 23, 0.18) 0%, rgba(212, 160, 23, 0.05) 35%, transparent 70%)",
      }}
    />

    <div className="relative">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(212,160,23,0.4)] transition-all duration-300">
        <svg className="w-6 h-6 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
        </svg>
      </div>
      <h3 className="text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-[#F0C040] transition-colors duration-300">{title}</h3>
      <p className="text-[#94A3B8] text-base lg:text-lg">{description}</p>
    </div>
  </motion.div>
);

// Our Location Card
const OurLocation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative max-w-lg mx-auto"
    >
      <div className="relative bg-[#0A1628] rounded-3xl border border-[#D4A017]/20 p-8 lg:p-10 overflow-hidden">
        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#D4A017]/10 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#0E7C7B]/10 to-transparent rounded-tr-full" />

        {/* Decorative line */}
        <div className="absolute top-8 left-8 w-16 h-0.5 bg-gradient-to-r from-[#D4A017] to-[#F0C040] rounded-full" />

        <div className="relative">
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center mb-5 shadow-lg shadow-[#D4A017]/30">
            <svg className="w-7 h-7 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          {/* Heading */}
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Based in Surrey, BC
          </h3>

          {/* Address */}
          <p className="text-[#CBD5E1] leading-relaxed mb-4">
            13428 105 Ave Suite 1410
            <br />
            Surrey, BC V3T 0S6
          </p>

          {/* Email */}
          <a
            href="mailto:info@krovos.ca"
            className="inline-flex items-center gap-2 text-[#D4A017] hover:text-[#F0C040] transition-colors font-medium group"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="group-hover:underline">info@krovos.ca</span>
          </a>
        </div>
      </div>
    </motion.div>
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



// Why Krovos data
const whyKrovos = [
  {
    title: "Canadian Delivery Hub",
    description: "Based in Surrey, BC, we provide hands-on technology delivery with deep local market expertise across Canada.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "6-Division Service Coverage",
    description: "From AI automation to talent solutions, we cover the technology domains small and mid-sized teams typically need.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z",
  },
  {
    title: "Fixed-Price Engagement Model",
    description: "Predictable costs with transparent pricing. No surprises, just reliable project delivery within budget.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

// Process / Tech Stack data
const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into your business goals, current systems, and pain points to define a clear roadmap.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    step: "02",
    title: "Design",
    description: "Our architects craft the blueprint — system design, UX flows, and integration plans built for scale.",
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
  },
  {
    step: "03",
    title: "Develop",
    description: "Senior engineers build in tight sprints with continuous reviews, automated testing, and clear weekly demos.",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  },
  {
    step: "04",
    title: "Deploy",
    description: "We ship to production, hand off the keys, and stay on for monitoring, iteration, and long-term support.",
    icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  },
];

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

          {/* Constellation: floating gold particles */}
          <Constellation count={32} />

          {/* Gradient noise overlay for depth */}
          <div
            className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1   0 0 0 0 1   0 0 0 0 1   0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
            }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAlIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">


          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              We Build Technology{" "}
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 18px rgba(212, 160, 23, 0.35), 0 0 32px rgba(212, 160, 23, 0.15)",
                    "0 0 30px rgba(240, 192, 64, 0.6), 0 0 50px rgba(212, 160, 23, 0.3)",
                    "0 0 18px rgba(212, 160, 23, 0.35), 0 0 32px rgba(212, 160, 23, 0.15)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block bg-gradient-to-r from-[#D4A017] via-[#F0C040] to-[#0E7C7B] bg-clip-text text-transparent"
              >
                That Moves Business
              </motion.span>
            </h1>

            <p className="mt-6 text-xl sm:text-2xl text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed">
              Enterprise AI &middot; Custom Software &middot; Managed IT &middot; Digital Marketing
              <span className="block mt-2 text-[#64748B]">
                              delivered from Surrey, BC
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
              className="group relative px-8 py-4 bg-gradient-to-r from-[#D4A017] to-[#F0C040] text-[#0A1628] font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(240,192,64,0.55)]"
            >
              {/* Ripple/glow ring on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(240, 192, 64, 0.6), 0 0 24px 4px rgba(240, 192, 64, 0.45)",
                }}
              />
              {/* Animated shimmer sweep */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)",
                }}
              />
              {/* Expanding ring pulse */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-[cta-ring_1.2s_ease-out_infinite]"
                style={{
                  boxShadow: "0 0 0 0 rgba(240, 192, 64, 0.55)",
                }}
              />

              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/solutions"
              className="group px-8 py-4 bg-transparent text-white font-semibold rounded-2xl border border-white/20 hover:border-[#D4A017] hover:bg-white/5 transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>

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
            <p className="mt-4 text-lg text-[#94A3B8]">
              Six focused services, delivered by one team from Surrey, BC.
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
            <p className="mt-4 text-lg text-[#94A3B8]">
              What working with us actually looks like.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {whyKrovos.map((item, index) => (
              <WhyKrovosCard key={index} {...item} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Process / Tech Stack */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #D4A017 1px, transparent 1.5px), radial-gradient(circle at 75% 75%, #D4A017 1px, transparent 1.5px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A017]/10 text-[#D4A017] text-sm font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              How We{" "}
              <span className="bg-gradient-to-r from-[#D4A017] to-[#F0C040] bg-clip-text text-transparent">
                Deliver
              </span>
            </h2>
            <p className="mt-4 text-lg text-[#94A3B8]">
              A predictable four-step process — from first conversation to live production.
            </p>
          </motion.div>

          {/* Steps grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Connecting line (desktop only) */}
            <div
              aria-hidden
              className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent"
            />

            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative"
              >
                {/* Step card */}
                <div className="relative h-full bg-[#0D1F35] rounded-3xl border border-[#D4A017]/10 p-6 lg:p-8 transition-all duration-500 hover:border-[#D4A017]/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(212,160,23,0.3)]">
                  {/* Numbered badge */}
                  <div className="relative w-14 h-14 mb-6">
                    <div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center shadow-lg shadow-[#D4A017]/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    >
                      <span className="text-[#0A1628] font-bold text-lg">
                        {step.step}
                      </span>
                    </div>
                    {/* Subtle outer ring */}
                    <div className="absolute -inset-1 rounded-2xl border border-[#D4A017]/20 group-hover:border-[#D4A017]/50 transition-colors duration-300" />
                  </div>

                  {/* Small icon */}
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#D4A017]/30 transition-colors">
                    <svg className="w-4 h-4 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F0C040] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#94A3B8] text-base lg:text-lg leading-relaxed">
                                      {step.description}
                                    </p>

                  {/* Arrow connector (between cards on desktop) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-14 z-10 w-6 h-6 rounded-full bg-[#0A1628] border border-[#D4A017]/30 items-center justify-center">
                      <svg className="w-3 h-3 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Location */}
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
                                Our Location
                              </div>
                              <h2 className="text-3xl lg:text-5xl font-bold text-white">
                                Based in{" "}
                                <span className="bg-gradient-to-r from-[#D4A017] to-[#F0C040] bg-clip-text text-transparent">
                                  Surrey, BC
                                </span>
                              </h2>
                              <p className="mt-4 text-lg text-[#94A3B8]">
                                Proudly serving clients from our headquarters in British Columbia.
                              </p>
                            </motion.div>

                            <OurLocation />
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
              Tell us what you are building. We will scope it, price it, and get to work from Surrey, BC.
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
    </div>
  );
}
