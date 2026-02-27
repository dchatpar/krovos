"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
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

// Bento Card Component
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="bento-item group relative overflow-hidden"
      style={{ gridColumn: `span ${colSpan}`, gridRow: `span ${rowSpan}` }}
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[var(--krovos-gold)]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[var(--krovos-blue)]/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--krovos-blue)] to-[var(--krovos-blue-light)] flex items-center justify-center shadow-lg shadow-blue-500/30 mb-4 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-[var(--krovos-gray-400)] text-sm leading-relaxed">{description}</p>
        {children}
      </div>
    </motion.div>
  );
};

// FAQ Accordion Component
const FAQItem = ({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      className="border-b border-[var(--border)] last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[var(--krovos-gold)] transition-colors"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-[var(--krovos-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <p className="pb-6 text-[var(--krovos-gray-400)] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Case Study Card Component
const CaseStudyCard = ({
  title,
  company,
  metric,
  metricLabel,
  description,
  delay = 0
}: {
  title: string;
  company: string;
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
      transition={{ duration: 0.6, delay: delay * 0.15 }}
      className="card-premium overflow-hidden group"
    >
      <div className="h-1 bg-gradient-to-r from-[var(--krovos-gold)] to-[var(--krovos-blue)]" />
      <div className="p-6 lg:p-8">
        <div className="text-sm font-semibold text-[var(--krovos-gold)] mb-2">{company}</div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl lg:text-5xl font-bold gradient-text">
            {metric}
          </span>
          <span className="text-[var(--krovos-gray-400)]">{metricLabel}</span>
        </div>
        <p className="text-[var(--krovos-gray-400)] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Technology Logo Component
const TechLogo = ({ name, icon }: { name: string; icon: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[var(--krovos-navy-mid)] border border-[var(--border)] hover:border-[var(--krovos-gold)]/30 hover:shadow-lg hover:shadow-gold/10 transition-all cursor-pointer group"
    >
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--krovos-blue)] to-[var(--krovos-blue-light)] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
        </svg>
      </div>
      <span className="font-medium text-white">{name}</span>
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
      transition={{ delay }}
      className="glass-heavy rounded-3xl p-8 lg:p-12"
    >
      <svg className="w-12 h-12 text-[var(--krovos-gold)] mb-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-xl lg:text-2xl text-white leading-relaxed mb-8 font-light">
        {quote}
      </p>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--krovos-blue)] to-[var(--krovos-gold)] flex items-center justify-center text-white font-bold text-xl">
          {author.charAt(0)}
        </div>
        <div>
          <div className="text-white font-semibold text-lg">{author}</div>
          <div className="text-[var(--krovos-gray-400)]">{role}, {company}</div>
        </div>
      </div>
    </motion.div>
  );
};

// Process Timeline Component
const ProcessTimeline = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We dive deep into your business requirements, existing systems, and strategic goals. Our team conducts comprehensive stakeholder interviews, process mapping, and technical feasibility studies to create a detailed blueprint for your custom software solution. This phase establishes the foundation for a successful project.",
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    },
    {
      number: "02",
      title: "Strategic Design",
      description: "Our architects create detailed system designs, user interface prototypes, and technical specifications aligned with your business objectives. We focus on scalability, security, and user experience, ensuring the design supports your long-term goals while addressing immediate pain points.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      number: "03",
      title: "Agile Development",
      description: "Our expert developers build your custom software using modern frameworks and best practices. We follow Scrum methodology with two-week sprints, providing regular iterations and client feedback loops. You'll have full visibility into progress through our project management dashboard.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "Rigorous quality assurance including unit testing, integration testing, security penetration testing, performance testing, and user acceptance testing ensures flawless performance. We follow OWASP guidelines and industry best practices to deliver secure, reliable software.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      number: "05",
      title: "Deployment & Launch",
      description: "We handle the complete deployment process, including infrastructure setup on cloud platforms, data migration from legacy systems, and production environment configuration. Our zero-downtime deployment strategy ensures a smooth transition for your users.",
      icon: "M5 12h14M12 5l7 7-7 7"
    },
    {
      number: "06",
      title: "Ongoing Support",
      description: "Our relationship doesn't end at deployment. We provide comprehensive post-launch support including 24/7 monitoring, security updates, performance optimization, and continuous feature enhancements. Your success is our priority.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    }
  ];

  return (
    <div className="relative">
      <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--krovos-gold)] to-transparent hidden lg:block" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <div className="card-premium group h-full">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-[var(--krovos-gold)] to-[var(--krovos-gold-bright)] flex items-center justify-center text-[var(--krovos-navy-deep)] text-xs font-bold">
                {step.number}
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--krovos-blue)] to-[var(--krovos-teal)] flex items-center justify-center shadow-lg shadow-blue-500/30 mb-4 group-hover:scale-110 transition-transform duration-300 mt-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-[var(--krovos-gray-400)] text-sm leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({
  title,
  description,
  icon,
  benefits,
  delay = 0
}: {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: delay * 0.15 }}
      className="card-premium p-8"
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--krovos-gold)]/20 to-[var(--krovos-gold)]/5 flex items-center justify-center mb-6 border border-[var(--krovos-gold)]/20">
        <svg className="w-8 h-8 text-[var(--krovos-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-[var(--krovos-gray-400)] mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-start gap-3 text-[var(--krovos-gray-300)]">
            <svg className="w-5 h-5 text-[var(--krovos-teal)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {benefit}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function CustomSoftwarePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const capabilities = [
    {
      title: "Enterprise Web Applications",
      description: "Scalable, secure web applications built with modern frameworks like React, Angular, and Vue.js, designed to handle enterprise workloads with exceptional performance.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences and integrate seamlessly with your existing systems.",
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
      title: "API Development & Integration",
      description: "Robust RESTful and GraphQL APIs with comprehensive documentation, enabling seamless integration between your systems and third-party services.",
      icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    },
    {
      title: "Cloud Solutions",
      description: "Cloud-native applications and migration services leveraging AWS, Azure, and Google Cloud for maximum scalability, security, and cost-efficiency.",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    },
    {
      title: "Legacy System Modernization",
      description: "Transform outdated monolithic systems into modern, microservices-based architectures that improve agility, reduce technical debt, and enhance performance.",
      icon: "M4 4v5h.582m15.582 0A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    },
    {
      title: "Custom Database Solutions",
      description: "Tailored database architectures optimized for your specific data patterns, from relational databases to NoSQL and time-series solutions.",
      icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    }
  ];

  const serviceDetails = [
    {
      title: "Web Application Development",
      description: "Our enterprise web application development services deliver scalable, secure, and high-performance solutions tailored to your business needs. We specialize in building complex web applications using cutting-edge technologies like React, Angular, Vue.js, and Node.js. Whether you need a customer-facing portal, internal dashboard, or complex enterprise system, our team has the expertise to deliver results that exceed expectations. We focus on creating intuitive user experiences while ensuring robust backend architectures that can handle millions of transactions.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      benefits: [
        "Responsive design for all devices and screen sizes",
        "Real-time data synchronization and live updates",
        "Advanced role-based access control and security",
        "Third-party integrations with popular services",
        "Comprehensive analytics and reporting dashboards",
        "Progressive Web App (PWA) capabilities"
      ]
    },
    {
      title: "Mobile Application Development",
      description: "Our mobile application development services span native iOS and Android development as well as cross-platform solutions using React Native and Flutter. We build mobile apps that provide seamless user experiences while leveraging device capabilities like cameras, GPS, and push notifications. From concept to app store submission, our team handles every aspect of the mobile development lifecycle. We focus on creating apps that are not only visually stunning but also performant, secure, and scalable.",
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      benefits: [
        "Native iOS (Swift) and Android (Kotlin) development",
        "Cross-platform solutions with React Native and Flutter",
        "Offline-first architecture with sync capabilities",
        "Push notifications and in-app messaging",
        "Biometric authentication and secure data storage",
        "App store optimization and deployment support"
      ]
    },
    {
      title: "Enterprise Solutions",
      description: "Our enterprise software solutions are designed to address the complex challenges faced by large organizations. We build custom ERP systems, CRM platforms, supply chain management solutions, and more. Our enterprise applications are built for scale, security, and reliability, supporting thousands of concurrent users while maintaining optimal performance. We understand enterprise requirements including compliance, integration with legacy systems, and complex workflow automation.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      benefits: [
        "Scalable architecture supporting enterprise workloads",
        "Advanced workflow automation and business rules",
        "Comprehensive audit trails and compliance reporting",
        "Integration with ERP, CRM, and legacy systems",
        "Role-based access control with LDAP/Active Directory",
        "High availability and disaster recovery options"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "Our cloud solutions leverage the full power of modern cloud platforms to deliver scalable, cost-effective, and secure applications. We provide cloud-native development, cloud migration services, and managed cloud infrastructure. Whether you're looking to build a new cloud-native application or migrate existing systems to the cloud, our certified experts will guide you through every step. We help you optimize costs, improve scalability, and enhance security through best-practice cloud architecture.",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      benefits: [
        "Cloud-native architecture with microservices",
        "Auto-scaling and load balancing",
        "Serverless computing for cost optimization",
        "Multi-cloud and hybrid cloud strategies",
        "Cloud security best practices and compliance",
        "24/7 monitoring and infrastructure management"
      ]
    }
  ];

  const differentiators = [
    {
      stat: "200+",
      statLabel: "Projects Delivered",
      title: "Proven Development Expertise",
      description: "With over 200 successful custom software projects across industries, our team brings deep technical expertise and proven methodologies to every engagement. We've solved complex challenges for Fortune 500 companies and innovative startups alike."
    },
    {
      stat: "48",
      statLabel: "Hours to First Build",
      title: "Rapid Development Velocity",
      description: "Our agile methodology and expert teams deliver working software faster. Thanks to our established frameworks and pre-built components, you can expect your first functional build within 48 hours of project kickoff."
    },
    {
      stat: "98%",
      statLabel: "Client Retention",
      title: "Long-Term Partnership",
      description: "Our clients stay with us for years, not months. Our 98% retention rate reflects our unwavering commitment to quality, communication, and delivering lasting business value that grows with your organization."
    },
    {
      stat: "24/7",
      statLabel: "Support Available",
      title: "Round-the-Clock Support",
      description: "Our dedicated support team is available around the clock to address any issues, implement enhancements, and ensure your software continues to perform optimally. Sleep easy knowing your systems are in capable hands."
    }
  ];

  const techStack = [
    { name: "React", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { name: "Node.js", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" },
    { name: "Python", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { name: "TypeScript", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { name: "AWS", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
    { name: "Azure", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" },
    { name: "PostgreSQL", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
    { name: "Docker", icon: "M4 4v5h.582m15.582 0A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }
  ];

  const caseStudies = [
    {
      title: "Enterprise Resource Planning System",
      company: "Manufacturing Conglomerate",
      metric: "67%",
      metricLabel: "Efficiency Increase",
      description: "Built a custom ERP system replacing legacy software, integrating 12 departments and reducing operational overhead by 67% in the first year. The system handles over 50,000 daily transactions and provides real-time analytics across the entire organization."
    },
    {
      title: "Patient Portal & Healthcare CRM",
      company: "National Healthcare Provider",
      metric: "45K",
      metricLabel: "Patients Served Monthly",
      description: "Developed a comprehensive patient-facing portal with appointment scheduling, medical records access, and telehealth integration, improving patient satisfaction by 94% and reducing call center volume by 60%."
    },
    {
      title: "E-Commerce Platform",
      company: "Global Retail Brand",
      metric: "$24M",
      metricLabel: "First Year Revenue",
      description: "Created a custom e-commerce platform handling 10,000+ concurrent users, with AI-powered recommendations driving 35% higher conversion rates. Integrated with 15+ third-party logistics and payment providers."
    },
    {
      title: "Supply Chain Management System",
      company: "Logistics Enterprise",
      metric: "40%",
      metricLabel: "Cost Reduction",
      description: "Developed an end-to-end supply chain management system with real-time tracking, predictive analytics, and automated inventory management, reducing operational costs by 40% and improving delivery times by 25%."
    }
  ];

  const testimonials = [
    {
      quote: "Krovos built us a custom ERP system that transformed our operations. Their team understood our complex requirements and delivered a solution that reduced our operational costs by 67% while giving us capabilities our competitors don't have. The ongoing support has been exceptional.",
      author: "Michael Rodriguez",
      role: "Chief Technology Officer",
      company: "Manufacturing Corp"
    },
    {
      quote: "The mobile app they developed exceeded our expectations. User engagement increased by 280% within the first three months, and the app store ratings remain at 4.9 stars. Their team truly understood our vision and translated it into an incredible product.",
      author: "Sarah Chen",
      role: "VP of Product",
      company: "HealthTech Solutions"
    },
    {
      quote: "We were skeptical about the 48-hour first build promise, but they delivered. The quality of code and the speed of development has been remarkable. They've become a true technology partner for our organization.",
      author: "James Williams",
      role: "CEO",
      company: "FinServe Analytics"
    }
  ];

  const faqItems = [
    {
      question: "What types of custom software do you develop?",
      answer: "We develop a comprehensive range of custom software solutions including enterprise web applications, mobile apps for iOS and Android, API development and integration, cloud solutions and migration, legacy system modernization, and custom database solutions. Our team has deep expertise across multiple industries including healthcare (HIPAA-compliant solutions), finance (security-focused applications with PCI-DSS compliance), manufacturing (ERP and supply chain systems), retail (e-commerce and inventory management), and logistics (fleet management and real-time tracking). We work with businesses of all sizes from startups to Fortune 500 companies."
    },
    {
      question: "How long does it take to develop custom software?",
      answer: "Development timelines vary significantly based on complexity and scope. Simple applications with basic functionality can be delivered in 4-8 weeks, while complex enterprise systems with multiple integrations typically take 3-6 months. Large-scale digital transformations can extend to 6-12 months. During our discovery phase, we provide a detailed project timeline with milestone breakdowns. Our agile methodology allows us to deliver incremental value throughout the project, so you can start seeing results long before final delivery."
    },
    {
      question: "What is your development methodology?",
      answer: "We follow an agile development methodology with two-week Scrum sprints, regular client reviews, and continuous feedback integration. This approach ensures complete transparency, allows for scope adjustments based on evolving requirements, and delivers working software early and often. You'll have access to our project management dashboard (Jira/Asana), regular status updates, and direct communication with your development team. We believe in collaborative development where your input shapes the final product."
    },
    {
      question: "How do you ensure software quality and security?",
      answer: "Quality and security are built into every phase of our development process. We implement comprehensive testing including unit tests with 80%+ code coverage, integration tests, end-to-end tests, security penetration testing, performance testing, and user acceptance testing. Our security practices include OWASP guidelines compliance, encryption at rest and in transit (AES-256, TLS 1.3), regular vulnerability assessments, and adherence to industry-specific compliance standards (HIPAA, PCI-DSS, SOC 2). Every deployment goes through rigorous security review."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance packages that include bug fixes, security updates, performance monitoring, and feature enhancements. Our support plans are flexible and can be tailored to your needs - from basic maintenance to premium 24/7 support with dedicated account management. We recommend our support packages to ensure your software remains secure, optimized, and continues to evolve with your business needs. Most clients opt for our ongoing support, which includes SLA guarantees and priority response times."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. We have extensive experience integrating with virtually any system including ERP platforms (SAP, Oracle, Microsoft Dynamics), CRM systems (Salesforce, HubSpot), legacy databases, third-party APIs, IoT devices, and custom applications. We use API-first architecture and can work with REST, GraphQL, SOAP, and gRPC protocols. During discovery, we analyze your existing tech stack and design integration strategies that minimize disruption while maximizing data flow efficiency."
    },
    {
      question: "What industries do you specialize in?",
      answer: "Our team has deep expertise across multiple verticals: Healthcare (HIPAA-compliant patient portals, telemedicine platforms, medical device integration), Finance (trading platforms, banking APIs, compliance-heavy applications), Manufacturing (ERP, supply chain, IoT monitoring), Retail (e-commerce, inventory management, loyalty programs), Logistics (fleet management, route optimization, warehouse systems), and Real Estate (property management, MLS integrations). We understand industry-specific compliance requirements, workflow patterns, and best practices."
    },
    {
      question: "How do you handle data migration from legacy systems?",
      answer: "We have extensive experience with data migration projects of all sizes. Our approach includes comprehensive data analysis and profiling, detailed mapping documents, data cleansing and transformation, parallel running with legacy systems, validation and reconciliation, and phased cutover strategies. We handle structured data (databases, spreadsheets) and unstructured data (documents, images). Our migration process includes rollback capabilities to ensure zero data loss and minimal downtime - typically less than 4 hours for most migrations."
    },
    {
      question: "What about intellectual property and confidentiality?",
      answer: "Your intellectual property is fully protected. All code and documentation we create is exclusively yours - we transfer full ownership upon final payment. We sign comprehensive NDAs and IP transfer agreements before starting any work. Our development environments are secure and isolated. We never use your proprietary code or concepts for other clients. Many of our projects involve highly sensitive data, and we've maintained perfect confidentiality for over 15 years."
    },
    {
      question: "How do you handle project scope changes?",
      answer: "We understand that business needs evolve. Our agile approach naturally accommodates scope changes through our sprint planning process. Changes can be prioritized into future sprints based on business value. For significant scope changes, we provide impact analysis including timeline and cost implications. We maintain flexible contracts that allow for adjustments while ensuring transparency. Our goal is to deliver maximum value, not to lock you into rigid specifications."
    }
  ];

  return (
    <div className="bg-[var(--krovos-navy)] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-mesh-navy">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--krovos-blue)]/20 rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--krovos-gold)]/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[var(--krovos-blue)]/10 to-transparent rounded-full" />
          </motion.div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-subtle opacity-40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--krovos-blue)]/20 border border-[var(--krovos-blue)]/30 text-[var(--krovos-blue-light)] text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--krovos-gold)] animate-pulse" />
              Custom Software Development Division
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Bespoke Software
              <br />
              <span className="gradient-text">
                Built for Your Business
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[var(--krovos-gray-400)] mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform your business with custom software solutions designed to address your unique challenges,
              streamline operations, and drive measurable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Get Started
                </motion.button>
              </Link>
              <Link href="#process">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Our Process
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: 200, suffix: "+", label: "Projects Delivered" },
              { value: 98, suffix: "%", label: "Client Retention" },
              { value: 15, suffix: "+", label: "Years Experience" },
              { value: 50, suffix: "+", label: "Expert Developers" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[var(--krovos-gray-400)] text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-[var(--krovos-gray-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-[var(--krovos-navy-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Custom Solutions for Complex Challenges
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              Every business is unique. Our custom software development services address your specific pain points
              with solutions tailored to your workflows, goals, and infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-premium p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--krovos-blue)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                Problems We Solve
              </h3>
              <ul className="space-y-4">
                {[
                  "Off-the-shelf software that doesn't fit your business processes",
                  "Inefficient manual workflows consuming excessive employee time",
                  "Disconnected systems creating data silos and inconsistencies",
                  "Limited scalability preventing business growth",
                  "High licensing costs for generic enterprise software",
                  "Security vulnerabilities in inadequate legacy systems"
                ].map((problem, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--krovos-gray-300)]">
                    <svg className="w-5 h-5 text-[var(--krovos-gold)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {problem}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-premium p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--krovos-teal)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Who We Serve
              </h3>
              <ul className="space-y-4">
                {[
                  "Enterprises seeking competitive differentiation through technology",
                  "Companies outgrowing their legacy systems",
                  "Organizations requiring specialized industry solutions",
                  "Startups building scalable technical foundations",
                  "Mid-market companies modernizing their tech stack",
                  "Any business demanding full control over their software"
                ].map((audience, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--krovos-gray-300)]">
                    <svg className="w-5 h-5 text-[var(--krovos-teal)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {audience}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Bento Grid */}
      <section className="py-24 bg-[var(--krovos-navy)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Development Capabilities
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              From concept to deployment, our team delivers end-to-end custom software solutions
              tailored to your specific business requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <BentoCard
                key={capability.title}
                title={capability.title}
                description={capability.description}
                icon={capability.icon}
                colSpan={1}
                rowSpan={1}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-24 bg-[var(--krovos-navy-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              We specialize in delivering high-quality custom software across multiple domains,
              each backed by deep expertise and proven methodologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceDetails.map((service, index) => (
              <FeatureCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                benefits={service.benefits}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Krovos Section */}
      <section className="py-24 bg-[var(--krovos-navy)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Krovos for Custom Software
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              We combine technical excellence with business acumen to deliver software solutions
              that create lasting competitive advantage for your organization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((diff, index) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center card-premium p-6"
              >
                <div className="inline-flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-5xl lg:text-6xl font-bold gradient-text">
                    {diff.stat}
                  </span>
                </div>
                <div className="text-[var(--krovos-gold)] font-semibold mb-4">{diff.statLabel}</div>
                <h3 className="text-xl font-bold text-white mb-2">{diff.title}</h3>
                <p className="text-[var(--krovos-gray-400)] leading-relaxed text-sm">{diff.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-mesh-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Built with Modern Technologies
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              We leverage industry-leading frameworks and platforms to build robust, scalable,
              and future-proof software solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <TechLogo key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-[var(--krovos-navy-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              A proven, transparent approach that keeps you informed and involved at every stage,
              delivering working software that meets your exact specifications.
            </p>
          </motion.div>

          <ProcessTimeline />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-[var(--krovos-navy)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              See how we&apos;ve helped leading organizations transform their operations
              with custom software solutions tailored to their unique needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.title}
                title={study.title}
                company={study.company}
                metric={study.metric}
                metricLabel={study.metricLabel}
                description={study.description}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-mesh-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              Hear from organizations that have transformed their business with our custom software solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ROI Benefits Section */}
      <section className="py-24 bg-[var(--krovos-navy-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Business Value & ROI
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)] max-w-3xl mx-auto">
              Custom software is an investment that delivers measurable returns across your organization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Operational Efficiency",
                description: "Automate repetitive tasks, streamline workflows, and eliminate manual data entry. Our clients typically see 40-60% improvements in operational efficiency within the first year of implementation.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              },
              {
                title: "Cost Reduction",
                description: "Replace expensive SaaS subscriptions and licensing fees with tailored solutions. Organizations save an average of 30-50% on software costs over a 5-year period while gaining more functionality.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Competitive Advantage",
                description: "Unique capabilities that differentiate you from competitors. Custom software allows you to implement innovative features and processes that off-the-shelf solutions simply cannot provide.",
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-premium p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--krovos-teal)]/20 to-[var(--krovos-teal)]/5 flex items-center justify-center mb-6 mx-auto border border-[var(--krovos-teal)]/20">
                  <svg className="w-8 h-8 text-[var(--krovos-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[var(--krovos-gray-400)] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[var(--krovos-navy)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[var(--krovos-gray-400)]">
              Get answers to common questions about our custom software development services.
            </p>
          </motion.div>

          <div className="glass-heavy rounded-3xl p-6 lg:p-8">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-mesh-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl text-[var(--krovos-navy-light)] mb-10 max-w-2xl mx-auto">
              Get a customized quote for your software project. Our experts will analyze your requirements
              and design a solution that delivers measurable business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?service=custom-software">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Get a Quote
                </motion.button>
              </Link>
              <Link href="/demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[var(--krovos-navy)]/50 text-white font-semibold rounded-full border border-white/20 hover:bg-[var(--krovos-navy)]/70 transition-all backdrop-blur-sm"
                >
                  Schedule Demo
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
