"use client";

import { useState } from "react";

// Generate a unique gradient based on seed
const generateGradient = (seed: string) => {
  const gradients: Record<string, string> = {
    "IT Operations": "from-blue-600 via-cyan-500 to-teal-400",
    "Security Operations": "from-red-600 via-orange-500 to-amber-400",
    "Sales": "from-emerald-600 via-teal-500 to-cyan-400",
    "Customer Support": "from-purple-600 via-pink-500 to-rose-400",
    "RevOps": "from-indigo-600 via-violet-500 to-purple-400",
    "Finance": "from-amber-600 via-yellow-500 to-orange-400",
    "HR": "from-rose-600 via-pink-500 to-red-400",
    "Engineering": "from-slate-600 via-zinc-500 to-gray-400",
  };
  return gradients[seed] || "from-indigo-600 via-purple-500 to-pink-400";
};

// SVG-based illustration components for different services
export const ServiceIllustration = ({ type, className = "" }: { type: string; className?: string }) => {
  const illustrations: Record<string, React.ReactElement> = {
    "IT Operations": (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="itGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect x="40" y="80" width="80" height="60" rx="8" fill="url(#itGrad)" opacity="0.9" />
        <rect x="160" y="80" width="80" height="60" rx="8" fill="url(#itGrad)" opacity="0.7" />
        <rect x="280" y="80" width="80" height="60" rx="8" fill="url(#itGrad)" opacity="0.5" />
        <rect x="40" y="180" width="80" height="60" rx="8" fill="url(#itGrad)" opacity="0.5" />
        <rect x="160" y="180" width="80" height="60" rx="8" fill="url(#itGrad)" opacity="0.7" />
        <rect x="280" y="180" width="80" height="60" rx="8" fill="url(#itGrad)" opacity="0.9" />
        <circle cx="80" cy="110" r="12" fill="white" opacity="0.9" />
        <circle cx="200" cy="110" r="12" fill="white" opacity="0.9" />
        <circle cx="320" cy="110" r="12" fill="white" opacity="0.9" />
        <path d="M80 130 L200 130 M200 130 L200 180 M200 180 L80 180" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M200 130 L320 130 M320 130 L320 180 M320 180 L200 180" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
        <circle cx="200" cy="210" r="20" fill="white" opacity="0.95" />
        <path d="M195 210 L200 215 L210 205" stroke="#3b82f6" strokeWidth="3" fill="none" />
      </svg>
    ),
    "Security Operations": (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="secGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <path d="M200 40 L320 80 L320 180 L200 220 L80 180 L80 80 Z" fill="url(#secGrad)" opacity="0.3" />
        <path d="M200 60 L300 95 L300 175 L200 205 L100 175 L100 95 Z" fill="url(#secGrad)" opacity="0.5" />
        <path d="M200 80 L280 110 L280 170 L200 195 L120 170 L120 110 Z" fill="url(#secGrad)" opacity="0.7" />
        <circle cx="200" cy="140" r="35" fill="white" />
        <path d="M185 140 L195 150 L210 130" stroke="#dc2626" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="140" cy="100" r="8" fill="#dc2626" opacity="0.8" />
        <circle cx="260" cy="100" r="8" fill="#dc2626" opacity="0.8" />
        <circle cx="140" cy="180" r="8" fill="#dc2626" opacity="0.8" />
        <circle cx="260" cy="180" r="8" fill="#dc2626" opacity="0.8" />
      </svg>
    ),
    "Sales": (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="salesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <path d="M60 200 L100 140 L140 160 L180 100 L220 140 L260 80 L300 120 L340 60 L380 100" stroke="url(#salesGrad)" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="100" cy="140" r="12" fill="white" stroke="#059669" strokeWidth="2" />
        <circle cx="180" cy="100" r="12" fill="white" stroke="#059669" strokeWidth="2" />
        <circle cx="260" cy="80" r="12" fill="white" stroke="#059669" strokeWidth="2" />
        <circle cx="340" cy="60" r="12" fill="white" stroke="#059669" strokeWidth="2" />
        <rect x="60" y="220" width="100" height="50" rx="8" fill="url(#salesGrad)" opacity="0.6" />
        <rect x="180" y="220" width="100" height="50" rx="8" fill="url(#salesGrad)" opacity="0.8" />
        <rect x="300" y="220" width="100" height="50" rx="8" fill="url(#salesGrad)" />
        <text x="85" y="250" fill="white" fontSize="14" fontWeight="bold">LEADS</text>
        <text x="205" y="250" fill="white" fontSize="14" fontWeight="bold">DEALS</text>
        <text x="330" y="250" fill="white" fontSize="14" fontWeight="bold">REVENUE</text>
      </svg>
    ),
    "Customer Support": (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="supportGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="100" r="50" fill="url(#supportGrad)" opacity="0.3" />
        <circle cx="200" cy="100" r="35" fill="url(#supportGrad)" opacity="0.6" />
        <circle cx="200" cy="100" r="20" fill="url(#supportGrad)" />
        <path d="M180 95 Q200 80 220 95" stroke="white" strokeWidth="3" fill="none" />
        <circle cx="190" cy="105" r="3" fill="white" />
        <circle cx="210" cy="105" r="3" fill="white" />
        <rect x="80" y="170" width="240" height="80" rx="12" fill="#f1f5f9" stroke="#e2e8f0" />
        <rect x="100" y="190" width="200" height="12" rx="6" fill="#e2e8f0" />
        <rect x="100" y="215" width="140" height="10" rx="5" fill="#cbd5e1" />
        <circle cx="300" cy="225" r="15" fill="url(#supportGrad)" />
        <path d="M295 225 L300 230 L310 218" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
    "default": (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect x="60" y="60" width="120" height="80" rx="12" fill="url(#defaultGrad)" opacity="0.7" />
        <rect x="220" y="60" width="120" height="80" rx="12" fill="url(#defaultGrad)" opacity="0.5" />
        <rect x="60" y="170" width="120" height="80" rx="12" fill="url(#defaultGrad)" opacity="0.5" />
        <rect x="220" y="170" width="120" height="80" rx="12" fill="url(#defaultGrad)" opacity="0.7" />
        <circle cx="200" cy="150" r="30" fill="white" opacity="0.9" />
        <path d="M185 150 L195 160 L215 140" stroke="#6366f1" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    "RevOps": (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="revopsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="150" r="80" fill="url(#revopsGrad)" opacity="0.2" />
        <circle cx="200" cy="150" r="60" fill="url(#revopsGrad)" opacity="0.4" />
        <circle cx="200" cy="150" r="40" fill="url(#revopsGrad)" opacity="0.6" />
        <circle cx="200" cy="150" r="25" fill="white" />
        <path d="M200 135 L200 150 L215 160" stroke="#4f46e5" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="120" cy="100" r="15" fill="#4f46e5" opacity="0.8" />
        <circle cx="280" cy="100" r="15" fill="#8b5cf6" opacity="0.8" />
        <circle cx="100" cy="180" r="15" fill="#8b5cf6" opacity="0.8" />
        <circle cx="300" cy="180" r="15" fill="#4f46e5" opacity="0.8" />
        <path d="M200 110 L120 100" stroke="#4f46e5" strokeWidth="1" opacity="0.5" />
        <path d="M200 110 L280 100" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" />
        <path d="M200 190 L100 180" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" />
        <path d="M200 190 L300 180" stroke="#4f46e5" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    "Finance": (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="financeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <rect x="60" y="80" width="280" height="140" rx="16" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
        <rect x="80" y="100" width="100" height="30" rx="6" fill="#f59e0b" opacity="0.3" />
        <rect x="80" y="140" width="240" height="8" rx="4" fill="#e5e7eb" />
        <rect x="80" y="160" width="180" height="8" rx="4" fill="#e5e7eb" />
        <rect x="80" y="180" width="200" height="8" rx="4" fill="#e5e7eb" />
        <circle cx="300" cy="115" r="20" fill="url(#financeGrad)" />
        <path d="M290 115 L297 122 L312 107" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="100" y="122" fill="#92400e" fontSize="12" fontWeight="bold">INVOICE</text>
        <text x="100" y="205" fill="#6b7280" fontSize="10">INV-2024-001</text>
        <circle cx="320" cy="180" r="25" fill="#10b981" opacity="0.2" />
        <path d="M310 180 L317 187 L332 172" stroke="#10b981" strokeWidth="3" fill="none" />
      </svg>
    ),
    "HR": (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="hrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="100" r="50" fill="url(#hrGrad)" opacity="0.2" />
        <circle cx="200" cy="100" r="35" fill="url(#hrGrad)" opacity="0.4" />
        <circle cx="200" cy="100" r="22" fill="white" />
        <path d="M188 95 Q200 85 212 95" stroke="#e11d48" strokeWidth="2" fill="none" />
        <circle cx="192" cy="102" r="2" fill="#e11d48" />
        <circle cx="208" cy="102" r="2" fill="#e11d48" />
        <rect x="100" y="170" width="200" height="80" rx="12" fill="white" stroke="#fecdd3" strokeWidth="2" />
        <rect x="120" y="190" width="60" height="8" rx="4" fill="#fecdd3" />
        <rect x="120" y="210" width="80" height="6" rx="3" fill="#e5e7eb" />
        <rect x="200" y="210" width="60" height="6" rx="3" fill="#e5e7eb" />
        <circle cx="270" cy="195" r="12" fill="url(#hrGrad)" opacity="0.6" />
        <text x="265" y="199" fill="white" fontSize="10" fontWeight="bold">+3</text>
      </svg>
    ),
    "Engineering": (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="engGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="100%" stopColor="#71717a" />
          </linearGradient>
        </defs>
        <rect x="40" y="60" width="100" height="80" rx="8" fill="url(#engGrad)" opacity="0.8" />
        <rect x="160" y="60" width="100" height="80" rx="8" fill="url(#engGrad)" opacity="0.6" />
        <rect x="280" y="60" width="80" height="80" rx="8" fill="url(#engGrad)" opacity="0.4" />
        <path d="M90 100 L90 120 M90 120 L140 120 M140 120 L140 100" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M210 100 L210 120 M210 120 L260 120 M260 120 L260 100" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
        <rect x="40" y="160" width="80" height="80" rx="8" fill="url(#engGrad)" opacity="0.4" />
        <rect x="160" y="160" width="100" height="80" rx="8" fill="url(#engGrad)" opacity="0.6" />
        <rect x="280" y="160" width="80" height="80" rx="8" fill="url(#engGrad)" opacity="0.8" />
        <circle cx="80" cy="200" r="8" fill="#10b981" />
        <circle cx="210" cy="200" r="8" fill="#10b981" />
        <circle cx="320" cy="200" r="8" fill="#10b981" />
        <path d="M40 130 L40 160 M120 130 L120 160" stroke="white" strokeWidth="1" opacity="0.4" />
        <path d="M160 130 L160 160 M260 130 L260 160" stroke="white" strokeWidth="1" opacity="0.4" />
        <path d="M280 130 L280 160 M360 130 L360 160" stroke="white" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  };

  return illustrations[type] || illustrations["default"];
};

// Feature card with illustration
export const FeatureWithImage = ({
  title,
  description,
  features,
  index
}: {
  title: string;
  description: string;
  features: string[];
  index: number;
}) => (
  <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2">
    <div className="relative mb-6">
      <div className="w-full h-48 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden">
        <ServiceIllustration type={title} className="w-full h-full" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center text-sm text-slate-600">
          <svg className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

// Process step component
export const ProcessStep = ({
  number,
  title,
  description,
  icon
}: {
  number: string;
  title: string;
  description: string;
  icon: string;
}) => (
  <div className="relative flex items-start gap-6">
    <div className="flex-shrink-0">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
        </svg>
      </div>
    </div>
    <div className="pt-2">
      <div className="text-sm font-semibold text-indigo-600 mb-1">{number}</div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  </div>
);

// Metric component
export const MetricBox = ({ value, label, description }: { value: React.ReactNode; label: string; description?: string }) => (
  <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50">
    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
      {value}
    </div>
    <div className="text-lg font-semibold text-slate-700 mt-2">{label}</div>
    {description && <div className="text-sm text-slate-500 mt-1">{description}</div>}
  </div>
);

// Testimonial card
export const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  logo
}: {
  quote: string;
  author: string;
  role: string;
  company: string;
  logo?: string;
}) => (
  <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all">
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-slate-700 text-lg mb-6 leading-relaxed">&ldquo;{quote}&rdquo;</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
        {author[0]}
      </div>
      <div>
        <div className="font-semibold text-slate-900">{author}</div>
        <div className="text-sm text-slate-500">{role}, {company}</div>
      </div>
    </div>
  </div>
);

// Integration logo
export const IntegrationLogo = ({ name, color }: { name: string; color: string }) => (
  <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10 transition-all cursor-pointer">
    <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center shadow-md`}>
      <span className="text-white font-bold">{name[0]}</span>
    </div>
    <span className="font-medium text-slate-700">{name}</span>
  </div>
);

// Workflow diagram
export const WorkflowDiagram = ({ steps }: { steps: string[] }) => (
  <div className="flex items-center justify-center gap-4 flex-wrap">
    {steps.map((step, i) => (
      <div key={i} className="flex items-center">
        <div className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/30">
          {step}
        </div>
        {i < steps.length - 1 && (
          <svg className="w-8 h-8 text-slate-300 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </div>
    ))}
  </div>
);
