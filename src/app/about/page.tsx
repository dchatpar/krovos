"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Section wrapper with animation
const SectionWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Value card component
const ValueCard = ({ icon, title, description, delay = 0 }: { icon: string; title: string; description: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative p-8 rounded-2xl bg-navy-mid border border-[rgba(212,160,23,0.15)] hover:border-[rgba(212,160,23,0.5)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,160,23,0.15)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,160,23,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center mb-6 shadow-lg shadow-[rgba(212,160,23,0.3)]">
          <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-[#94A3B8] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Timeline item component
const TimelineItem = ({ year, title, description, isLeft = true, delay = 0 }: { year: string; title: string; description: string; isLeft?: boolean; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`relative flex items-center ${isLeft ? "justify-end" : "justify-start"}`}
    >
      <div className={`w-5/12 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}>
        <div className="text-3xl font-bold text-gradient-gold mb-2">{year}</div>
        <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
        <p className="text-[#94A3B8] text-sm leading-relaxed">{description}</p>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#D4A017] to-[#F0C040] shadow-[0_0_15px_rgba(212,160,23,0.6)]" />
    </motion.div>
  );
};

// Team member card
const TeamMember = ({ name, title, bio, imageColor, delay = 0 }: { name: string; title: string; bio: string; imageColor: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative"
    >
      <div className="relative p-6 rounded-2xl bg-navy-mid border border-[rgba(212,160,23,0.1)] hover:border-[rgba(212,160,23,0.4)] transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,160,23,0.08)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        <div className="relative z-10">
          {/* Avatar placeholder */}
          <div className={`w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center ${imageColor}`}>
            <span className="text-3xl font-bold text-navy">{name.split(" ").map(n => n[0]).join("")}</span>
          </div>
          <h3 className="text-xl font-bold text-white text-center mb-2">{name}</h3>
          <p className="text-[#D4A017] text-center font-medium text-sm mb-4">{title}</p>
          <p className="text-[#94A3B8] text-sm leading-relaxed text-center">{bio}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Office location component
const OfficeCard = ({ city, country, address, phone, email, delay = 0 }: { city: string; country: string; address: string; phone: string; email: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative p-8 rounded-2xl bg-navy-mid border border-[rgba(212,160,23,0.1)] hover:border-[rgba(212,160,23,0.4)] transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,160,23,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center mb-6 shadow-lg shadow-[rgba(212,160,23,0.3)]">
          <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{city}</h3>
        <p className="text-[#D4A017] font-medium mb-4">{country}</p>
        <div className="space-y-3">
          <p className="text-[#94A3B8] text-sm flex items-start gap-2">
            <svg className="w-4 h-4 mt-0.5 text-[#D4A017] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {address}
          </p>
          <p className="text-[#94A3B8] text-sm flex items-center gap-2">
            <svg className="w-4 h-4 text-[#D4A017] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {phone}
          </p>
          <p className="text-[#94A3B8] text-sm flex items-center gap-2">
            <svg className="w-4 h-4 text-[#D4A017] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {email}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Award/certification card
const AwardCard = ({ icon, title, description, delay = 0 }: { icon: string; title: string; description: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="flex items-start gap-4 p-6 rounded-xl bg-navy-mid border border-[rgba(212,160,23,0.1)] hover:border-[rgba(212,160,23,0.3)] transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4A017]/20 to-[#F0C040]/20 flex items-center justify-center flex-shrink-0">
        <svg className="w-6 h-6 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
        <p className="text-[#94A3B8] text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

// Stats component
const StatItem = ({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="text-center"
    >
      <div className="text-4xl lg:text-5xl font-bold text-gradient-gold mb-2">{value}</div>
      <div className="text-[#94A3B8]">{label}</div>
    </motion.div>
  );
};

// Main About Page Component
export default function AboutPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Core values data
  const values = [
    {
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      title: "Innovation First",
      description: "We push boundaries and challenge conventions to deliver cutting-edge solutions that transform industries."
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Trust & Security",
      description: "Enterprise-grade security and compliance are foundational to everything we build and every relationship we nurture."
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Collaboration",
      description: "We believe the best solutions emerge from diverse perspectives working together toward shared goals."
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Excellence",
      description: "We hold ourselves to the highest standards, delivering exceptional quality in every project and interaction."
    }
  ];

  // Timeline data
  const timeline = [
    {
      year: "2015",
      title: "Founded",
      description: "Krovos Inc. was established in Vancouver, Canada with a vision to transform enterprise technology."
    },
    {
      year: "2017",
      title: "First Global Office",
      description: "Opened our Dubai office, expanding operations to the Middle East and North Africa region."
    },
    {
      year: "2019",
      title: "Service Expansion",
      description: "Launched AI automation and custom software development services for enterprise clients."
    },
    {
      year: "2020",
      title: "India Operations",
      description: "Established Mumbai office to serve growing demand in the Asia-Pacific market."
    },
    {
      year: "2022",
      title: "ISO Certification",
      description: "Achieved ISO 27001 and ISO 9001 certifications, demonstrating commitment to quality and security."
    },
    {
      year: "2024",
      title: "SOC 2 Type II",
      description: "Completed SOC 2 Type II audit, ensuring highest standards of data security and privacy."
    },
    {
      year: "2025",
      title: "Industry Recognition",
      description: "Named among the top enterprise technology solution providers by multiple industry analysts."
    },
    {
      year: "2026",
      title: "Global Scale",
      description: "Serving 200+ clients across 11 countries with 120+ team members worldwide."
    }
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Marcus Chen",
      title: "Chief Executive Officer",
      bio: "Former VP at Fortune 500 tech company. 20+ years in enterprise software. Stanford MBA.",
      imageColor: "bg-gradient-to-br from-[#D4A017] to-[#F0C040]"
    },
    {
      name: "Sarah Al-Rashid",
      title: "Chief Technology Officer",
      bio: "AI/ML researcher with 15 patents. Previously led engineering at major cloud provider.",
      imageColor: "bg-gradient-to-br from-[#0E7C7B] to-[#14B8A6]"
    },
    {
      name: "David Okonkwo",
      title: "Chief Operating Officer",
      bio: "Operations expert scaling startups to enterprises. Ex-McKinsey consultant.",
      imageColor: "bg-gradient-to-br from-[#1B6CA8] to-[#3B82F6]"
    },
    {
      name: "Emily Watson",
      title: "VP of Engineering",
      bio: "20 years building scalable systems. Led teams at top-tier technology companies.",
      imageColor: "bg-gradient-to-br from-[#4A1882] to-[#8B5CF6]"
    },
    {
      name: "Raj Patel",
      title: "VP of Sales",
      bio: "Enterprise sales leader with track record of 10x revenue growth in emerging markets.",
      imageColor: "bg-gradient-to-br from-[#D4A017] to-[#F0C040]"
    },
    {
      name: "Lisa Nakamura",
      title: "VP of Customer Success",
      bio: "Customer experience specialist ensuring enterprise clients achieve maximum value.",
      imageColor: "bg-gradient-to-br from-[#0E7C7B] to-[#14B8A6]"
    }
  ];

  // Awards data
  const awards = [
    {
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      title: "ISO 27001 Certified",
      description: "Information security management system meeting international standards"
    },
    {
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      title: "ISO 9001 Certified",
      description: "Quality management system ensuring consistent service delivery"
    },
    {
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      title: "SOC 2 Type II",
      description: "Audited compliance with security, availability, and confidentiality standards"
    },
    {
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
      title: "Great Place to Work",
      description: "Recognized as one of the best technology companies to work for"
    }
  ];

  return (
    <div className="min-h-screen bg-navy">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-mesh-navy" />
        <div className="absolute inset-0 bg-grid bg-dots opacity-30" />

        {/* Floating elements */}
        <motion.div style={{ y: heroY }} className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#D4A017]/10 to-transparent blur-3xl" />
        <motion.div style={{ y: heroY }} className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#0E7C7B]/10 to-transparent blur-3xl" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.3)] text-[#D4A017] text-sm font-medium mb-6">
              About Krovos Inc.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Building Technology That Moves Business
            <span className="block text-gradient-gold mt-2">Since 2015</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl lg:text-2xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed"
          >
            We are a global enterprise technology company specializing in AI automation,
            custom software development, and digital transformation solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link href="/company/careers" className="btn-gold">
              Join Our Team
            </Link>
            <Link href="/contact" className="btn-outline-gold">
              Get a Quote
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-[rgba(212,160,23,0.5)] flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [1, 0.5, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-[#D4A017]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-navy-light" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Our Story</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
                  A Journey of Innovation and Growth
                </h2>
                <div className="space-y-4 text-[#94A3B8] leading-relaxed">
                  <p>
                    Founded in 2015 in Vancouver, Canada, Krovos Inc. began with a simple yet ambitious vision:
                    to transform how enterprises leverage technology for business growth.
                  </p>
                  <p>
                    What started as a small team of passionate technologists has grown into a global organization
                    with over 120 team members across three continents. Throughout our journey, we have remained
                    committed to our core principles: innovation, integrity, and delivering exceptional value to our clients.
                  </p>
                  <p>
                    Today, we serve more than 200 enterprise clients across 11 countries, having completed over 450
                    successful projects. Our team combines deep technical expertise with industry knowledge to deliver
                    solutions that drive real business outcomes.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-navy-mid to-navy-light border border-[rgba(212,160,23,0.2)] p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl lg:text-8xl font-bold text-gradient-gold mb-4">10+</div>
                    <div className="text-xl text-white">Years of Excellence</div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#D4A017]/20 to-transparent blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-br from-[#0E7C7B]/20 to-transparent blur-2xl" />
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-mesh-teal opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Mission & Vision</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">What Drives Us</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative p-10 rounded-3xl bg-navy-mid border border-[rgba(212,160,23,0.15)] hover:border-[rgba(212,160,23,0.4)] transition-all duration-500"
              >
                <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center">
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-[#94A3B8] text-lg leading-relaxed">
                  To empower enterprises with cutting-edge AI automation and technology solutions that drive
                  operational excellence, accelerate digital transformation, and create sustainable competitive advantage.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="relative p-10 rounded-3xl bg-navy-mid border border-[rgba(14,124,123,0.15)] hover:border-[rgba(14,124,123,0.4)] transition-all duration-500"
              >
                <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0E7C7B] to-[#14B8A6] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-[#94A3B8] text-lg leading-relaxed">
                  To be the global leader in enterprise AI automation, recognized for delivering transformative
                  technology solutions that shape the future of business across industries.
                </p>
              </motion.div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 lg:py-32 relative bg-navy-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Core Values</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">What We Stand For</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  delay={index * 0.15}
                />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-navy" />
        <div className="max-w-5xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Our Journey</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">Milestones That Define Us</h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#D4A017] via-[#0E7C7B] to-[#D4A017]" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    isLeft={index % 2 === 0}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 lg:py-32 relative bg-navy-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Leadership</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">Meet Our Executive Team</h2>
              <p className="text-[#94A3B8] mt-4 text-lg max-w-2xl mx-auto">
                Seasoned industry leaders with decades of combined experience in technology, operations, and enterprise strategy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  title={member.title}
                  bio={member.bio}
                  imageColor={member.imageColor}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-mesh-gold opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Global Presence</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">Our Offices Worldwide</h2>
              <p className="text-[#94A3B8] mt-4 text-lg max-w-2xl mx-auto">
                Strategically located across three continents to serve our global client base.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <OfficeCard
                city="Vancouver"
                country="Canada (HQ)"
                address="1000-500 Granville Street, Vancouver, BC V6C 1S4"
                phone="+1 (604) 555-0100"
                email="vancouver@krovos.com"
                delay={0}
              />
              <OfficeCard
                city="Dubai"
                country="United Arab Emirates"
                address="Level 42, Emirates Tower, Sheikh Zayed Road, Dubai"
                phone="+971 4 555 0200"
                email="dubai@krovos.com"
                delay={0.15}
              />
              <OfficeCard
                city="Mumbai"
                country="India"
                address="Level 8, One BKC, G Block, Bandra Kurla Complex, Mumbai 400051"
                phone="+91 22 5555 0300"
                email="mumbai@krovos.com"
                delay={0.3}
              />
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Awards & Certifications Section */}
      <section className="py-24 lg:py-32 relative bg-navy-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Recognition</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">Awards & Certifications</h2>
              <p className="text-[#94A3B8] mt-4 text-lg max-w-2xl mx-auto">
                Industry-recognized certifications demonstrating our commitment to quality and security.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {awards.map((award, index) => (
                <AwardCard
                  key={index}
                  icon={award.icon}
                  title={award.title}
                  description={award.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 lg:py-32 relative bg-navy-mid">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <StatItem value="200+" label="Enterprise Clients" delay={0} />
              <StatItem value="450+" label="Projects Delivered" delay={0.1} />
              <StatItem value="11" label="Countries" delay={0.2} />
              <StatItem value="120+" label="Team Members" delay={0.3} />
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-navy" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#D4A017]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#0E7C7B]/20 to-transparent blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <SectionWrapper>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto">
              Join the hundreds of enterprises that trust Krovos to deliver innovative technology solutions
              that drive real business results.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/company/careers" className="btn-gold text-lg px-8 py-4">
                Join Our Team
              </Link>
              <Link href="/contact" className="btn-outline-gold text-lg px-8 py-4">
                Get a Quote
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
