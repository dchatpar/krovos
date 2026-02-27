import Link from "next/link";

interface LogoProps {
  variant?: "full" | "icon" | "text";
  className?: string;
}

export default function Logo({ variant = "full", className = "" }: LogoProps) {
  if (variant === "icon") {
    return (
      <Link href="/" className={`flex items-center gap-2 ${className}`}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 md:w-12 md:h-12"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4A017" />
              <stop offset="50%" stopColor="#F0C040" />
              <stop offset="100%" stopColor="#0E7C7B" />
            </linearGradient>
            <linearGradient id="logoGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4A017" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0E7C7B" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Outer ring */}
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            fill="none"
            className="opacity-80"
          />
          {/* Inner hexagon shape representing K */}
          <path
            d="M14 34L14 14L24 14L34 24L24 34L14 34Z"
            fill="url(#logoGradient)"
            className="opacity-90"
          />
          {/* K letter cutout */}
          <path
            d="M22 24H32M32 18L26 24L32 30"
            stroke="#0A1628"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Accent dots */}
          <circle cx="12" cy="12" r="2" fill="#D4A017" className="animate-pulse-soft" />
          <circle cx="36" cy="36" r="2" fill="#0E7C7B" className="animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
        </svg>
      </Link>
    );
  }

  if (variant === "text") {
    return (
      <Link href="/" className={`flex items-center gap-2 ${className}`}>
        <span className="text-2xl md:text-3xl font-bold tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>
          <span className="text-white">KROV</span>
          <span className="text-[#D4A017]">OS</span>
        </span>
      </Link>
    );
  }

  // Full logo (icon + text)
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 md:w-12 md:h-12"
      >
        <defs>
          <linearGradient id="logoGradientFull" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4A017" />
            <stop offset="50%" stopColor="#F0C040" />
            <stop offset="100%" stopColor="#0E7C7B" />
          </linearGradient>
        </defs>
        {/* Outer ring */}
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="url(#logoGradientFull)"
          strokeWidth="2"
          fill="none"
          className="opacity-80"
        />
        {/* Inner hexagon */}
        <path
          d="M14 34L14 14L24 14L34 24L24 34L14 34Z"
          fill="url(#logoGradientFull)"
          className="opacity-90"
        />
        {/* K letter */}
        <path
          d="M22 24H32M32 18L26 24L32 30"
          stroke="#0A1628"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Accent dots */}
        <circle cx="12" cy="12" r="2" fill="#D4A017" className="animate-pulse-soft" />
        <circle cx="36" cy="36" r="2" fill="#0E7C7B" className="animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
      </svg>
      <span className="text-2xl md:text-3xl font-bold tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>
        <span className="text-white">KROV</span>
        <span className="text-[#D4A017]">OS</span>
      </span>
    </Link>
  );
}
