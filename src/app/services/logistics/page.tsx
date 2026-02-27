"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2000 }: { end: number; suffix?: string; prefix?: string; duration?: number }) => {
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

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

// Feature Card Component
const FeatureCard = ({
  title,
  description,
  icon,
  delay = 0,
  accentColor = "#D4A017"
}: {
  title: string;
  description: string;
  icon: string;
  delay?: number;
  accentColor?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="card-premium p-6 lg:p-8 group cursor-pointer relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${accentColor}15 0%, transparent 60%)`
        }}
      />
      <div className="relative z-10">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}CC 100%)`,
            boxShadow: `0 8px 30px ${accentColor}30`
          }}
        >
          <svg className="w-7 h-7 text-navy-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Bento Grid Item Component
const BentoItem = ({
  children,
  colSpan = 1,
  rowSpan = 1,
  delay = 0
}: {
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const colSpanClass = colSpan === 2 ? 'bento-item-wide' : '';
  const rowSpanClass = rowSpan === 2 ? 'bento-item-tall' : '';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className={`bento-item ${colSpanClass} ${rowSpanClass}`}
    >
      {children}
    </motion.div>
  );
};

// Process Step Component
const ProcessStep = ({
  number,
  title,
  description,
  icon,
  delay = 0,
  isLast = false
}: {
  number: string;
  title: string;
  description: string;
  icon: string;
  delay?: number;
  isLast?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className="relative flex flex-col items-center"
    >
      <div className="relative z-10">
        <div className="w-20 h-20 rounded-2xl bg-navy-mid border border-gold/20 flex items-center justify-center mb-4 group-hover:border-gold/50 transition-colors duration-300">
          <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        <div className="text-gold font-bold text-lg mb-2">{number}</div>
        <h3 className="text-white font-semibold text-lg mb-2 text-center">{title}</h3>
        <p className="text-gray-400 text-sm text-center max-w-xs">{description}</p>
      </div>
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+50px)] w-[calc(100%-100px)] h-px bg-gradient-to-r from-gold/50 to-transparent" />
      )}
    </motion.div>
  );
};

// Testimonial Card Component
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
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="glass p-8 lg:p-10 text-center"
    >
      <svg className="w-16 h-16 text-gold/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <blockquote className="text-xl lg:text-2xl text-white mb-8 leading-relaxed font-light">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex flex-col items-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold mb-3"
          style={{
            background: 'linear-gradient(135deg, #D4A017 0%, #F0C040 100%)',
            color: '#060D18'
          }}
        >
          {author.charAt(0)}
        </div>
        <div className="text-white font-semibold">{author}</div>
        <div className="text-gold">{role}</div>
        <div className="text-gray-500">{company}</div>
      </div>
    </motion.div>
  );
};

// Case Study Card Component
const CaseStudyCard = ({
  company,
  title,
  metric,
  metricLabel,
  description,
  delay = 0
}: {
  company: string;
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
      className="card-premium overflow-hidden group cursor-pointer"
    >
      <div className="h-1.5 bg-gradient-to-r from-gold via-gold-bright to-gold" />
      <div className="p-6 lg:p-8">
        <div className="text-cyan text-sm font-semibold mb-2">{company}</div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">{title}</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl lg:text-5xl font-bold gradient-text">
            {metric}
          </span>
          <span className="text-gray-400 text-sm">{metricLabel}</span>
        </div>
        <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

// FAQ Item Component
const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  delay = 0
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay }}
      className="border-b border-gold/10 last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-white group-hover:text-gold transition-colors">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-light border border-gold/20 group-hover:border-gold/50 transition-colors"
        >
          <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Stats Component
const StatsBar = () => {
  const stats = [
    { value: "2.5M+", label: "Shipments Tracked Daily", suffix: "+" },
    { value: "35", label: "Cost Reduction %", suffix: "%" },
    { value: "40", label: "Faster Delivery %", suffix: "%" },
    { value: "99.99", label: "Uptime Guarantee", suffix: "%" }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl lg:text-4xl font-bold gradient-text mb-1">
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
    </div>
  );
};

export default function LogisticsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Service capabilities data
  const capabilities = [
    {
      title: "Supply Chain Solutions",
      description: "End-to-end supply chain orchestration that connects suppliers, warehouses, distributors, and retailers into a unified, intelligent network. Gain complete visibility and control over your entire supply chain from raw materials to final delivery.",
      icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
    },
    {
      title: "Fleet Management",
      description: "Comprehensive vehicle tracking, maintenance scheduling, driver management, and fuel optimization. Monitor your entire fleet in real-time with predictive analytics, automated dispatching, and comprehensive reporting dashboards.",
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
    },
    {
      title: "Route Optimization",
      description: "AI-powered route planning that reduces mileage, saves fuel, and ensures timely deliveries. Our algorithms factor in traffic patterns, weather conditions, delivery windows, vehicle capacity, and driver schedules automatically.",
      icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
    },
    {
      title: "Real-Time Tracking",
      description: "End-to-end visibility across your entire supply chain. Track shipments in real-time, monitor environmental conditions, and provide accurate ETAs to customers with precision confidence and proactive notifications.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Warehouse Management",
      description: "Intelligent inventory management, automated picking and packing, space optimization, and real-time stock tracking. Transform your warehouse into a smart, efficient operations center with barcode scanning and RFID integration.",
      icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast demand, predict delays, optimize inventory levels, and make data-driven decisions. Turn your supply chain data into actionable business intelligence with machine learning and advanced reporting.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    }
  ];

  // Key features for bento grid
  const keyFeatures = [
    {
      title: "Multi-Modal Transportation",
      description: "Seamlessly manage freight across air, sea, road, and rail with unified tracking and optimization.",
      icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    },
    {
      title: "Cold Chain Monitoring",
      description: "Temperature-sensitive cargo management with real-time alerts and compliance documentation.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: "Warehouse Automation",
      description: "Robotic process automation, automated storage/retrieval, and intelligent picking systems.",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    },
    {
      title: "EDI Integration",
      description: "Electronic data interchange for seamless B2B communication with trading partners.",
      icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    },
    {
      title: "Last Mile Delivery",
      description: "Optimized last-mile solutions with customer notifications, proof of delivery, and route sequencing.",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    },
    {
      title: "Compliance Management",
      description: "Automated customs documentation, hazardous materials handling, and regulatory reporting.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Assessment",
      description: "We analyze your current supply chain operations, identify inefficiencies, and map out your technology landscape.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    },
    {
      number: "02",
      title: "Design",
      description: "Our experts design a tailored technology roadmap with platform selection and implementation timeline.",
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    },
    {
      number: "03",
      title: "Implementation",
      description: "We deploy and integrate logistics technology platforms, configure systems, and ensure seamless connectivity.",
      icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
    },
    {
      number: "04",
      title: "Optimization",
      description: "We fine-tune algorithms, optimize routes, and refine warehouse operations based on real-world performance.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      number: "05",
      title: "Scale",
      description: "We help you expand successful initiatives across locations and achieve enterprise-wide excellence.",
      icon: "M4 4v5h.582m15.582 0A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    }
  ];

  // Case studies
  const caseStudies = [
    {
      title: "National Distribution Network",
      company: "Leading Consumer Goods Company",
      metric: "28%",
      metricLabel: "Fuel Cost Savings",
      description: "Implemented AI-powered route optimization across 500+ vehicles, reducing fuel consumption by 28% while improving on-time delivery rates to 98.5%."
    },
    {
      title: "Smart Warehouse Transformation",
      company: "Global 3PL Provider",
      metric: "3x",
      metricLabel: "Throughput Increase",
      description: "Deployed automated picking systems and inventory optimization, tripling warehouse throughput while reducing labor costs by 45%."
    },
    {
      title: "End-to-End Visibility Platform",
      company: "International Freight Forwarder",
      metric: "99.8%",
      metricLabel: "Shipment Visibility",
      description: "Built real-time tracking infrastructure across 12,000+ monthly shipments, providing customers with precise location data and accurate ETAs."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Krovos transformed our logistics operations with their comprehensive technology platform. Fleet utilization improved by 40%, fuel costs dropped by 28%, and our customers now have real-time visibility into their shipments.",
      author: "Michael Torres",
      role: "VP of Operations",
      company: "National Distribution Partners"
    },
    {
      quote: "The warehouse management system revolutionized our fulfillment center. We tripled our throughput without adding any staff, and our accuracy rate jumped to 99.9%. The ROI exceeded our expectations within the first year.",
      author: "Sarah Chen",
      role: "Director of Supply Chain",
      company: "Global Logistics Solutions"
    },
    {
      quote: "Real-time tracking gave us visibility we never had before. We can now provide our customers with accurate delivery times and proactively manage exceptions before they become problems. Our customer satisfaction scores have never been higher.",
      author: "James Williams",
      role: "CEO",
      company: "Premier Freight Services"
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What makes Krovos logistics technology different from other solutions?",
      answer: "Krovos combines deep industry expertise with cutting-edge technology to deliver comprehensive supply chain solutions. Our platform is built on decades of logistics experience, understanding the unique challenges of fleet management, warehouse operations, and route optimization. Unlike generic solutions, we provide tailored implementations that address your specific operational requirements while integrating seamlessly with your existing systems. Our AI-powered algorithms continuously learn and optimize based on your data, delivering ever-improving efficiency gains over time."
    },
    {
      question: "How long does it take to implement your logistics technology?",
      answer: "Implementation timelines vary based on complexity and scope. A single module like fleet tracking can be deployed in 4-6 weeks, while comprehensive supply chain transformation typically takes 3-6 months. We follow an iterative approach, delivering incremental value at each phase so you can see results quickly while building toward comprehensive optimization. Our agile methodology ensures continuous delivery of working features throughout the implementation process."
    },
    {
      question: "What kind of ROI can we expect from logistics technology?",
      answer: "Our clients typically see ROI within 12-18 months of full implementation. Common returns include 25-35% reduction in fuel costs, 30-40% improvement in fleet utilization, 40% faster warehouse operations, and significant reductions in administrative overhead. We provide detailed ROI projections during the assessment phase and track performance metrics continuously. Our performance guarantees ensure you see measurable returns on your investment."
    },
    {
      question: "Can your systems integrate with our existing ERP and WMS?",
      answer: "Yes, our logistics technology integrates seamlessly with major ERP platforms (SAP, Oracle, Microsoft Dynamics), WMS solutions, TMS systems, and custom applications. We use API-first architecture and support both cloud and on-premises deployments. Our integration team ensures data flows smoothly across your entire technology ecosystem. We offer pre-built connectors for over 200+ logistics and business systems."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "Security is foundational to our platform. We implement enterprise-grade security measures including end-to-end encryption, role-based access controls, and comprehensive audit logging. Our solutions comply with SOC 2, ISO 27001, GDPR, and other relevant regulations. We also provide on-premises deployment options for organizations with strict data sovereignty requirements. Our security team continuously monitors for threats and updates our defenses accordingly."
    },
    {
      question: "What ongoing support and maintenance do you provide?",
      answer: "We offer comprehensive support packages including 24/7 monitoring, performance optimization, system updates, and continuous improvement. Our dedicated support team ensures your logistics operations remain seamless and efficient. We provide training for your teams and regular system health checks to prevent issues before they impact your operations. Our support tiers include dedicated account managers for enterprise clients."
    },
    {
      question: "How does real-time tracking work and what data is available?",
      answer: "Our real-time tracking uses GPS, cellular, and satellite communication to provide continuous visibility. You can monitor vehicle location, speed, fuel levels, temperature conditions for sensitive cargo, delivery status, and driver behavior. The platform provides historical data analysis, predictive ETAs, and automated alerts for deviations from planned routes or schedules. Our tracking covers all transportation modes including ocean, air, rail, and road freight."
    },
    {
      question: "What industries do you specialize in for logistics technology?",
      answer: "We have extensive experience across multiple industries including retail and e-commerce, manufacturing, food and beverage, pharmaceuticals, freight and transportation, and third-party logistics. Our team includes domain experts who understand the unique challenges, regulatory requirements, and operational workflows of each sector. We offer industry-specific templates and best practices that accelerate implementation and ensure compliance."
    }
  ];

  return (
    <div className="bg-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute inset-0"
          >
            {/* Mesh gradient background */}
            <div className="absolute inset-0 bg-mesh-navy" />

            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-pulse-soft delay-500" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan/5 to-transparent rounded-full" />
          </motion.div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-cyan text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              Logistics Technology Division
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Supply Chain Technology
              <br />
              <span className="gradient-text">
                Optimize Operations, Accelerate Delivery
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your logistics operations with intelligent technology that delivers
              end-to-end visibility, optimizes routes, and drives measurable efficiency across your supply chain.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Get Started
                </motion.button>
              </Link>
              <Link href="/demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Watch Demo
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-navy-deep border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsBar />
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end technology solutions that transform every aspect of your supply chain
              from fleet management to final delivery.
            </p>
          </motion.div>

          {/* Bento Grid for Capabilities */}
          <div className="bento-grid">
            <BentoItem colSpan={2} rowSpan={2} delay={0}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-bright flex items-center justify-center mb-6" style={{ boxShadow: '0 8px 30px rgba(212, 160, 23, 0.3)' }}>
                    <svg className="w-8 h-8 text-navy-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Supply Chain Solutions</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    End-to-end supply chain orchestration that connects suppliers, warehouses, distributors, and retailers into a unified, intelligent network. Gain complete visibility and control over your entire supply chain from raw materials to final delivery. Our platform leverages AI and machine learning to predict disruptions, optimize flows, and automate decision-making across your entire operation.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gold">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </BentoItem>

            {capabilities.slice(1, 4).map((cap, idx) => (
              <BentoItem key={idx} delay={(idx + 1) * 0.1}>
                <FeatureCard
                  title={cap.title}
                  description={cap.description}
                  icon={cap.icon}
                  accentColor={idx === 0 ? "#D4A017" : idx === 1 ? "#06B6D4" : "#D4A017"}
                />
              </BentoItem>
            ))}
          </div>

          {/* Second row of capabilities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {capabilities.slice(4).map((cap, idx) => (
              <FeatureCard
                key={idx}
                title={cap.title}
                description={cap.description}
                icon={cap.icon}
                accentColor="#06B6D4"
                delay={(idx + 5) * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section with Bento Grid */}
      <section className="py-24 bg-navy-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Power-packed capabilities designed to streamline your logistics operations
              and drive operational excellence.
            </p>
          </motion.div>

          <div className="bento-grid">
            {keyFeatures.map((feature, idx) => (
              <BentoItem
                key={idx}
                colSpan={idx === 0 || idx === 3 ? 2 : 1}
                delay={idx * 0.1}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-light border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 transition-colors">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </BentoItem>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven, phased approach that delivers value at every step while building
              toward comprehensive supply chain transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, idx) => (
              <ProcessStep
                key={idx}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={idx * 0.15}
                isLast={idx === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-navy-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how we have helped leading organizations transform their supply chain operations
              with measurable, impactful results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <CaseStudyCard
                key={idx}
                company={study.company}
                title={study.title}
                metric={study.metric}
                metricLabel={study.metricLabel}
                description={study.description}
                delay={idx * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted by industry leaders worldwide to deliver transformative logistics solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                delay={idx * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-navy-deep">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Get answers to common questions about our logistics technology solutions.
            </p>
          </motion.div>

          <div className="glass p-6 lg:p-8">
            {faqItems.map((item, idx) => (
              <FAQItem
                key={idx}
                question={item.question}
                answer={item.answer}
                isOpen={openFAQ === idx}
                onToggle={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                delay={idx * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-mesh-gold opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Get a customized quote for your logistics technology project. Our experts will
              analyze your operations and design a solution that delivers measurable results.
            </p>
            <Link href="/contact?service=logistics">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-10 py-4"
              >
                Get a Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
