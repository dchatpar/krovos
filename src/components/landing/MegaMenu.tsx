"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const services = [
  {
    name: "AI & Automation",
    description: "Intelligent automation solutions that transform your business operations",
    href: "/services/ai-automation",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "from-[#D4A017] to-[#F0C040]"
  },
  {
    name: "Custom Software",
    description: "Tailored software development for your unique business needs",
    href: "/services/custom-software",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    color: "from-[#0E7C7B] to-[#14B8A6]"
  },
  {
    name: "Digital Marketing",
    description: "Growth and brand strategy to expand your digital presence",
    href: "/services/digital-marketing",
    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
    color: "from-[#1B6CA8] to-[#3B82F6]"
  },
  {
    name: "Managed IT",
    description: "End-to-end IT services for seamless business operations",
    href: "/services/managed-it",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
    color: "from-[#4A1882] to-[#7C3AED]"
  },
  {
    name: "Talent Solutions",
    description: "Tech talent acquisition to build your dream team",
    href: "/services/talent-solutions",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    color: "from-[#D4A017] to-[#0E7C7B]"
  },
  {
    name: "Logistics Tech",
    description: "Supply chain solutions for efficient operations",
    href: "/services/logistics",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    color: "from-[#0E7C7B] to-[#D4A017]"
  },
];

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
        staggerChildren: 0.05,
        delayChildren: 0.05,
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div ref={menuRef} className="relative">
      {/* Services Dropdown */}
      <div className="relative">
        <button
          onClick={() => setActiveMenu(activeMenu === "services" ? null : "services")}
          onMouseEnter={() => setActiveMenu("services")}
          className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all ${
            activeMenu === "services"
              ? "text-[#D4A017]"
              : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
        >
          Services
          <svg
            className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeMenu === "services" ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <AnimatePresence>
          {activeMenu === "services" && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              onMouseLeave={() => setActiveMenu(null)}
              className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[800px] max-w-[90vw]"
            >
              <div className="glass rounded-2xl shadow-2xl shadow-black/30 border border-[#D4A017]/20 overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-[#D4A017]/20 bg-[#0A1628]/50">
                  <span className="text-sm font-semibold text-[#D4A017] uppercase tracking-wider">Our Services</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#D4A017]/50 to-transparent" />
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-3 gap-1 p-3">
                  {services.map((service, i) => (
                    <motion.div key={i} variants={itemVariants}>
                      <Link
                        href={service.href}
                        className="group flex items-start gap-4 p-4 rounded-xl hover:bg-[#D4A017]/10 transition-all border border-transparent hover:border-[#D4A017]/30"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-white text-sm group-hover:text-[#D4A017] transition-colors">{service.name}</div>
                          <div className="text-xs text-white/50 mt-1 line-clamp-2">{service.description}</div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-[#D4A017]/20 bg-[#0A1628]/50">
                  <Link
                    href="/services"
                    className="inline-flex items-center text-sm font-medium text-[#D4A017] hover:text-[#F0C040] transition-colors group"
                  >
                    View all services
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MegaMenu;
