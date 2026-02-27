"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {count}
        </motion.span>
      ) : (
        0
      )}
      {suffix}
    </span>
  );
};

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

// Job card component
const JobCard = ({
  title,
  department,
  location,
  type,
  description,
  requirements,
  delay = 0
}: {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,160,23,0.08)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="relative p-6 lg:p-8 rounded-2xl bg-navy-mid border border-[rgba(212,160,23,0.1)] hover:border-[rgba(212,160,23,0.4)] transition-all duration-500">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-[rgba(212,160,23,0.15)] text-[#D4A017] text-sm font-medium">
                {department}
              </span>
              <span className="px-3 py-1 rounded-full bg-[rgba(14,124,123,0.15)] text-[#0E7C7B] text-sm font-medium">
                {type}
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-[#94A3B8] flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="btn-outline-gold text-sm px-6 py-3"
          >
            {isExpanded ? "View Less" : "View Details"}
          </button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-6 border-t border-[rgba(212,160,23,0.1)]"
            >
              <p className="text-[#94A3B8] mb-4">{description}</p>
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Requirements</h4>
                <ul className="space-y-2">
                  {requirements.map((req, index) => (
                    <li key={index} className="text-[#94A3B8] text-sm flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#D4A017] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="btn-gold inline-flex items-center gap-2"
              >
                Apply Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Benefit card component
const BenefitCard = ({ icon, title, description, delay = 0 }: { icon: string; title: string; description: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative p-6 lg:p-8 rounded-2xl bg-navy-mid border border-[rgba(212,160,23,0.1)] hover:border-[rgba(212,160,23,0.4)] transition-all duration-500"
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

// Culture value component
const CultureItem = ({ number, title, description, delay = 0 }: { number: string; title: string; description: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex gap-6"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center shadow-lg shadow-[rgba(212,160,23,0.3)]">
        <span className="text-navy font-bold text-lg">{number}</span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-[#94A3B8] text-sm leading-relaxed">{description}</p>
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

// Testimonial card component
const TestimonialCard = ({ quote, author, role, company, avatar, delay = 0 }: { quote: string; author: string; role: string; company: string; avatar: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative p-8 rounded-2xl bg-navy-mid border border-[rgba(212,160,23,0.1)] hover:border-[rgba(212,160,23,0.4)] transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,160,23,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="relative z-10">
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-[#D4A017]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <blockquote className="text-[#CBD5E1] text-lg leading-relaxed mb-6">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4A017] to-[#0E7C7B] flex items-center justify-center text-white font-bold text-lg">
            {avatar}
          </div>
          <div>
            <div className="text-white font-semibold">{author}</div>
            <div className="text-[#94A3B8] text-sm">{role} at {company}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Bento grid item component
const BentoItem = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`bento-item ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Growth opportunity card
const GrowthCard = ({ icon, title, description, delay = 0 }: { icon: string; title: string; description: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group relative p-6 rounded-2xl bg-navy-mid border border-[rgba(212,160,23,0.1)] hover:border-[rgba(212,160,23,0.4)] transition-all duration-500 hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(14,124,123,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E7C7B] to-[#14B8A6] flex items-center justify-center mb-4 shadow-lg shadow-[rgba(14,124,123,0.3)]">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-[#94A3B8] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Main Careers Page Component
export default function CareersPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Benefits data
  const benefits = [
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Competitive Compensation",
      description: "Industry-leading salaries with equity participation. We reward talent with compensation that reflects your value and contributions to our success. Annual performance reviews ensure your growth is recognized and rewarded."
    },
    {
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      title: "Comprehensive Health",
      description: "Full medical, dental, and vision coverage for you and your family. Including mental health support, wellness programs, and access to premium healthcare providers across all our office locations."
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Flexible Time Off",
      description: "Unlimited PTO policy. Take the time you need to recharge, innovate, and bring your best self to work every day. We trust our employees to manage their own time responsibly."
    },
    {
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      title: "Remote-First Culture",
      description: "Work from anywhere. Our distributed-first approach gives you the freedom to work where you're most productive and happy. Core hours are flexible, and we host quarterly in-person team gatherings."
    },
    {
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Home Office Setup",
      description: "$2,000 home office stipend. Set up your perfect workspace with the equipment you need to do your best work. Includes ergonomic furniture, monitors, and cutting-edge technology."
    },
    {
      icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
      title: "Learning & Growth",
      description: "$3,000 annual learning budget. Access conferences, courses, certifications, and books to accelerate your professional growth. Internal mentorship programs help you develop new skills."
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Team Building",
      description: "Annual team retreats and monthly virtual events. Build lasting relationships with colleagues through hackathons, social events, and collaborative projects that span departments."
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Cutting-Edge Tech",
      description: "Work with the latest technologies and tools. We invest heavily in our tech stack, ensuring you have access to state-of-the-art equipment and platforms for innovation."
    }
  ];

  // Culture values data
  const cultureValues = [
    {
      number: "01",
      title: "Innovation Without Limits",
      description: "We encourage bold ideas and experimentation. Every voice matters, and the best solutions emerge from challenging the status quo. Our innovation lab provides resources for exploring new ideas."
    },
    {
      number: "02",
      title: "Collaboration First",
      description: "Great achievements come from great teams. We foster an environment where knowledge sharing and mutual support are core values. Cross-functional collaboration is embedded in our workflow."
    },
    {
      number: "03",
      title: "Continuous Learning",
      description: "The tech landscape evolves rapidly, and so do we. We invest heavily in your growth and provide pathways for skill development through workshops, certifications, and conference attendance."
    },
    {
      number: "04",
      title: "Work-Life Integration",
      description: "We believe in results, not hours. Flexible schedules and remote options allow you to integrate work seamlessly with your life. Your well-being is our priority."
    }
  ];

  // Growth opportunities data
  const growthOpportunities = [
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Leadership Pathways",
      description: "Clear career progression to engineering manager, technical lead, and director roles. We develop future leaders through structured programs and mentorship."
    },
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: "Technical Track",
      description: "Deep-dive into architecture, AI/ML, or specialized domains. Become a principal engineer or distinguished technical expert in your field."
    },
    {
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Cross-Functional Exposure",
      description: "Rotate through different teams and projects. Gain broad experience across product, engineering, design, and business functions."
    },
    {
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Global Mobility",
      description: "Transfer between our offices in Vancouver, Dubai, and Mumbai. Experience different cultures while advancing your career with international exposure."
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Joining Krovos was the best career decision I've ever made. The culture of innovation and collaboration is unmatched. I've grown more in two years here than I did in five years at my previous company.",
      author: "Sarah Chen",
      role: "Senior Software Engineer",
      company: "Krovos",
      avatar: "SC"
    },
    {
      quote: "The leadership genuinely cares about employee growth. I've been given opportunities to lead major projects and develop skills I never thought I'd need. This is where careers are built.",
      author: "Mohammed Al-Rashid",
      role: "Engineering Manager",
      company: "Krovos",
      avatar: "MA"
    },
    {
      quote: "As a designer, Krovos gives me the freedom to push boundaries and create meaningful experiences. The collaboration with engineering is seamless, and the impact of our work is visible every day.",
      author: "Elena Rodriguez",
      role: "Principal Product Designer",
      company: "Krovos",
      avatar: "ER"
    },
    {
      quote: "The remote-first culture is real, not just a buzzword. I'm trusted to do my best work from anywhere, and the team connections are stronger than any office-based experience I've had.",
      author: "James Okonkwo",
      role: "DevOps Lead",
      company: "Krovos",
      avatar: "JO"
    }
  ];

  // Job openings data
  const jobOpenings = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote (Worldwide)",
      type: "Full-time",
      description: "Join our frontend team to build cutting-edge enterprise applications using React, TypeScript, and modern web technologies. You'll work on products that serve hundreds of enterprise clients, creating intuitive interfaces that make complex AI automation accessible.",
      requirements: [
        "5+ years of experience with React and TypeScript",
        "Strong understanding of web performance optimization",
        "Experience with state management (Redux, Zustand, or similar)",
        "Excellent communication skills in English"
      ]
    },
    {
      title: "Backend Engineer - AI/ML",
      department: "Engineering",
      location: "Vancouver, Canada",
      type: "Full-time",
      description: "Build scalable backend systems that power our AI automation platform. Work with Python, Node.js, and cloud infrastructure to deliver intelligent solutions that transform enterprise operations.",
      requirements: [
        "4+ years of backend development experience",
        "Experience with Python and machine learning frameworks",
        "Knowledge of distributed systems and microservices",
        "Experience with AWS or GCP cloud services"
      ]
    },
    {
      title: "Senior Product Designer",
      department: "Design",
      location: "Remote (Americas)",
      type: "Full-time",
      description: "Shape the future of enterprise UX. Create intuitive, beautiful interfaces that make complex AI automation accessible to business users across industries.",
      requirements: [
        "5+ years of product design experience",
        "Strong portfolio showcasing enterprise B2B products",
        "Proficiency in Figma and design systems",
        "Experience with user research and prototyping"
      ]
    },
    {
      title: "Enterprise Sales Manager",
      department: "Sales",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "Drive revenue growth in the Middle East region. Build and manage relationships with enterprise clients seeking digital transformation solutions.",
      requirements: [
        "5+ years of enterprise software sales experience",
        "Proven track record of meeting and exceeding quotas",
        "Deep understanding of enterprise sales cycles",
        "Arabic and English fluency required"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      description: "Build and maintain our cloud infrastructure. Ensure high availability, security, and performance across all our production systems serving global enterprise clients.",
      requirements: [
        "4+ years of DevOps or SRE experience",
        "Strong experience with Kubernetes and Docker",
        "Knowledge of Infrastructure as Code (Terraform)",
        "Experience with CI/CD pipelines and monitoring"
      ]
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Vancouver, Canada",
      type: "Full-time",
      description: "Ensure our enterprise clients achieve their goals. Drive adoption, satisfaction, and long-term retention through proactive engagement and strategic account management.",
      requirements: [
        "3+ years in customer success or account management",
        "Experience with enterprise SaaS platforms",
        "Strong analytical and communication skills",
        "Proven ability to manage multiple accounts"
      ]
    },
    {
      title: "Technical Writer",
      department: "Product",
      location: "Remote (Europe)",
      type: "Full-time",
      description: "Create documentation that empowers users to get the most from our platform. Work with engineering and product teams to translate complex features into clear, accessible content.",
      requirements: [
        "3+ years of technical writing experience",
        "Experience with developer documentation",
        "Understanding of API documentation",
        "Ability to learn complex technical concepts quickly"
      ]
    },
    {
      title: "AI Research Scientist",
      department: "Engineering",
      location: "Remote (Worldwide)",
      type: "Full-time",
      description: "Push the boundaries of what's possible with AI. Research and develop new algorithms and approaches to advance our automation capabilities.",
      requirements: [
        "Advanced degree in Computer Science, ML, or related field",
        "Publication record in top-tier conferences",
        "Experience with large language models",
        "Strong Python and deep learning framework skills"
      ]
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
              Join Our Team
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Join the Future of
            <span className="block text-gradient-gold mt-2">Enterprise Technology</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl lg:text-2xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Join a global team of innovators building the next generation of enterprise AI automation.
            Work on challenging problems, grow your skills, and make an impact that reaches millions of businesses worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#open-positions" className="btn-gold text-lg px-8 py-4">
              View Open Positions
            </a>
            <a href="#culture" className="btn-outline-gold text-lg px-8 py-4">
              Learn About Our Culture
            </a>
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

      {/* Stats Section */}
      <section className="py-16 relative bg-navy-mid">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <StatItem value="120+" label="Team Members" delay={0} />
            <StatItem value="11" label="Countries" delay={0.1} />
            <StatItem value="200+" label="Enterprise Clients" delay={0.2} />
            <StatItem value="98%" label="Employee Satisfaction" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Why Krovos Section with Bento Grid */}
      <section id="culture" className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-navy-light" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Why Krovos</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">Benefits & Culture</h2>
              <p className="text-[#94A3B8] mt-4 text-lg max-w-2xl mx-auto">
                We invest in our people because they are the foundation of our success.
                Here is what makes Krovos a great place to build your career.
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="bento-grid">
              <BentoItem className="bento-item-large" delay={0}>
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center mb-6 shadow-lg shadow-[rgba(212,160,23,0.3)]">
                      <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Competitive Compensation</h3>
                    <p className="text-[#94A3B8] leading-relaxed mb-6">
                      Industry-leading salaries with equity participation. We reward talent with compensation that reflects your value and contributions to our success. Annual performance reviews ensure your growth is recognized and rewarded with competitive salary adjustments and bonus packages.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[rgba(212,160,23,0.1)]">
                    <div className="flex items-center gap-2 text-[#D4A017]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">Equity participation</span>
                    </div>
                  </div>
                </div>
              </BentoItem>

              <BentoItem delay={0.1}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E7C7B] to-[#14B8A6] flex items-center justify-center mb-4 shadow-lg shadow-[rgba(14,124,123,0.3)]">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Health & Wellness</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">Full medical, dental, vision coverage plus mental health support.</p>
              </BentoItem>

              <BentoItem delay={0.2}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center mb-4 shadow-lg shadow-[rgba(212,160,23,0.3)]">
                  <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Unlimited PTO</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">Take the time you need to recharge and bring your best self.</p>
              </BentoItem>

              <BentoItem className="bento-item-wide" delay={0.3}>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4A1882] to-[#7C3AED] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[rgba(74,24,130,0.3)]">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Remote-First Culture</h3>
                    <p className="text-[#94A3B8] leading-relaxed">
                      Work from anywhere. Our distributed-first approach gives you the freedom to work where you are most productive. Core hours are flexible, and we host quarterly in-person team gatherings in exotic locations to build lasting connections.
                    </p>
                  </div>
                </div>
              </BentoItem>

              <BentoItem delay={0.4}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#F0C040] flex items-center justify-center mb-4 shadow-lg shadow-[rgba(212,160,23,0.3)]">
                  <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">$2,000 Setup</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">Home office stipend for your perfect workspace.</p>
              </BentoItem>

              <BentoItem delay={0.5}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E7C7B] to-[#14B8A6] flex items-center justify-center mb-4 shadow-lg shadow-[rgba(14,124,123,0.3)]">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">$3,000 Learning</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">Annual budget for courses, conferences, and certifications.</p>
              </BentoItem>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Growth Opportunities Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-mesh-teal opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Growth Opportunities</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">Build Your Future</h2>
              <p className="text-[#94A3B8] mt-4 text-lg max-w-2xl mx-auto">
                At Krovos, your career trajectory is limited only by your ambition.
                We provide the resources, mentorship, and opportunities to help you reach your full potential.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {growthOpportunities.map((item, index) => (
                <GrowthCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Culture Values Section */}
      <section className="py-24 lg:py-32 relative bg-navy-light">
        <div className="absolute inset-0 bg-mesh-teal opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Our Culture</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
                  Values That Drive Us
                </h2>
                <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
                  Our culture is built on a foundation of trust, innovation, and mutual respect.
                  We believe that when people thrive, teams thrive, and the company thrives.
                  Here are the principles that guide how we work together every day.
                </p>
                <div className="space-y-8">
                  {cultureValues.map((value, index) => (
                    <CultureItem
                      key={index}
                      number={value.number}
                      title={value.title}
                      description={value.description}
                      delay={index * 0.15}
                    />
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-navy-mid to-navy-light border border-[rgba(212,160,23,0.2)] p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl lg:text-8xl font-bold text-gradient-gold mb-4">4.9</div>
                    <div className="text-xl text-white mb-2">Glassdoor Rating</div>
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-[#D4A017]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[#94A3B8] text-sm mt-4">Based on 50+ employee reviews</p>
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

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-mesh-gold opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Testimonials</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">Hear From Our Team</h2>
              <p className="text-[#94A3B8] mt-4 text-lg max-w-2xl mx-auto">
                Do not just take our word for it. Hear from the people who make Krovos a great place to work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                  avatar={testimonial.avatar}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-24 lg:py-32 relative bg-navy-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Open Positions</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">Join Our Growing Team</h2>
              <p className="text-[#94A3B8] mt-4 text-lg max-w-2xl mx-auto">
                We are always looking for talented individuals to join our mission.
                Browse our current openings below and find your next career opportunity.
              </p>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <JobCard
                  key={index}
                  title={job.title}
                  department={job.department}
                  location={job.location}
                  type={job.type}
                  description={job.description}
                  requirements={job.requirements}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-mesh-gold opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-[#D4A017] font-medium uppercase tracking-wider text-sm">Application Process</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">How to Join Us</h2>
              <p className="text-[#94A3B8] mt-4 text-lg max-w-2xl mx-auto">
                Our hiring process is designed to be thorough yet respectful of your time.
                Here is what to expect when you apply to join the Krovos team.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Apply Online",
                  description: "Submit your resume and cover letter through our careers portal. Tell us about your experience and why you want to join Krovos."
                },
                {
                  step: "02",
                  title: "Initial Screening",
                  description: "A 30-minute call with our recruitment team to learn about your background, skills, and career aspirations."
                },
                {
                  step: "03",
                  title: "Technical Interview",
                  description: "Deep-dive sessions with team members to assess your technical skills, problem-solving abilities, and domain expertise."
                },
                {
                  step: "04",
                  title: "Team Fit",
                  description: "Meet with leadership and potential team members to ensure cultural alignment and mutual fit for success."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="relative p-6 rounded-2xl bg-navy-mid border border-[rgba(212,160,23,0.1)] hover:border-[rgba(212,160,23,0.4)] transition-all duration-500"
                >
                  <div className="text-4xl font-bold text-gradient-gold mb-4">{item.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[#94A3B8] text-sm">{item.description}</p>
                </motion.div>
              ))}
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
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto">
              Join a team that is transforming enterprise technology worldwide.
              We are looking for passionate individuals who want to make a difference
              and build the future of AI automation.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#open-positions" className="btn-gold text-lg px-8 py-4">
                Browse Open Positions
              </a>
              <Link href="/contact" className="btn-outline-gold text-lg px-8 py-4">
                Get in Touch
              </Link>
            </div>

            <p className="text-[#94A3B8] mt-8 text-sm">
              Do not see the right role? Email us at{" "}
              <a href="mailto:careers@krovos.com" className="text-[#D4A017] hover:underline">
                careers@krovos.com
              </a>
            </p>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
