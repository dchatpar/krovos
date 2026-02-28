"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ArchitecturalHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const revealImageRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      if (revealImageRef.current) {
        revealImageRef.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 100}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const methodologyItems = [
    {
      title: "Orchestrating Silent Volumes",
      description: "Spatial computing meets architectural precision",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=500&fit=crop",
    },
    {
      title: "Material Authenticity",
      description: "Raw concrete, honest surfaces",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=500&fit=crop",
    },
    {
      title: "Light as Material",
      description: "Natural illumination as design element",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=500&fit=crop",
    },
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#EAE6DF] overflow-x-hidden">
      {/* Noise Overlay */}
      <div
        className="fixed inset-0 opacity-[0.35] pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Background Texture */}
      <div
        className="fixed inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop')`,
          backgroundSize: "cover",
        }}
      />

      {/* Drafting Grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(28,27,26,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(28,27,26,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vertical Grid Lines */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="fixed top-0 bottom-0 w-px bg-[#1C1B1A]/[0.08] z-10"
          style={{ left: `${20 + i * 20}%` }}
        />
      ))}

      {/* Giant Background Text */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <span className="text-[25vw] font-bold text-[#1C1B1A]/[0.02] font-serif tracking-tighter">
          ATELIER
        </span>
      </div>

      {/* Decorative Markers */}
      <div className="fixed top-20 right-32 text-[#1C1B1A]/[0.15] text-4xl z-10 animate-spin-slow">
        +
      </div>
      <div className="fixed bottom-32 left-16 text-[#1C1B1A]/[0.1] text-2xl z-10">
        ✦
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-8 py-6">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[#1C1B1A] font-serif text-2xl italic">Krovos</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Projects", "Studio", "Approach", "Journal", "Contact"].map((link) => (
              <Link
                key={link}
                href="#"
                className="text-[#827C75] text-sm font-medium hover:text-[#1C1B1A] transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          <button className="px-6 py-3 bg-[#1C1B1A] text-[#EAE6DF] text-sm font-medium rounded-full hover:bg-[#1C1B1A]/90 transition-colors">
            Start a Project
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-20 pt-32 pb-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-12 gap-8 mb-32">
            {/* Tall Editorial Image */}
            <div className="col-span-12 lg:col-span-7 relative">
              <div
                className="aspect-[3/4] rounded-[200px_2px_2px_2px] overflow-hidden shadow-2xl"
                style={{
                  borderRadius: "200px 2px 2px 2px",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=1000&fit=crop"
                  alt="Architectural space"
                  className="w-full h-full object-cover grayscale-[80%] sepia-[15%] hue-rotate-[345deg] contrast-[1.1] brightness-[0.9] hover:grayscale-0 hover:sepia-0 hover:hue-rotate-0 hover:contrast-100 hover:brightness-100 transition-all duration-700"
                />
              </div>

              {/* Overlapping Content Box */}
              <div className="absolute -bottom-12 -right-4 lg:right-12 bg-[#F4F1EB] p-8 shadow-xl max-w-xs">
                <span className="text-[#A84B2B] text-xs font-mono tracking-wider uppercase mb-2 block">
                  01 — Methodology
                </span>
                <h3 className="text-[#1C1B1A] text-2xl font-serif italic leading-tight">
                  Orchestrating Silent Volumes
                </h3>
                <p className="text-[#827C75] text-sm mt-3 leading-relaxed">
                  We believe in the poetry of reduction. Every line serves a purpose,
                  every void tells a story.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center pl-8">
              <span className="text-[#A84B2B] text-xs font-mono tracking-[0.3em] uppercase mb-6 block">
                Architectural Studio
              </span>

              <h1 className="text-5xl lg:text-7xl font-serif text-[#1C1B1A] leading-[0.95] mb-8">
                Where <span className="italic">vision</span> meets
                <span className="italic"> precision</span>
              </h1>

              <p className="text-[#827C75] text-lg leading-relaxed mb-10 max-w-md">
                We design spaces that transcend the ordinary. Our approach combines
                raw materiality with computational precision, creating environments
                that breathe and evolve.
              </p>

              {/* Magnetic Discover Button */}
              <div className="relative">
                <button className="group relative w-48 h-48 rounded-full border-2 border-[#1C1B1A]/20 hover:border-[#A84B2B] transition-colors">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1C1B1A] font-medium group-hover:text-[#A84B2B] transition-colors">
                    Discover
                  </span>
                  <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                      className="text-[#1C1B1A]/20 group-hover:text-[#A84B2B]/50 transition-colors animate-spin-slow"
                      style={{ animationDuration: "20s" }}
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Detail Overlap - Spinning Seal */}
          <div className="relative mb-32">
            <div className="absolute -left-32 top-0 w-64 h-64">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow" style={{ animationDuration: "30s" }}>
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#1C1B1A"
                  strokeWidth="0.5"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#A84B2B"
                  strokeWidth="0.5"
                  strokeDasharray="2 4"
                />
                <defs>
                  <path id="textCircle" d="M 15,50 A 35,35 0 1,1 85,50 A 35,35 0 1,1 15,50" />
                </defs>
                <text fill="#1C1B1A" fontSize="6" fontFamily="monospace">
                  <textPath href="#textCircle" startOffset="0">
                    • BESPOKE CRAFT • RAW MATERIALITY • ORCHESTRATING SILENCE •
                  </textPath>
                </text>
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg className="w-8 h-8 text-[#A84B2B]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Interactive List */}
          <div className="grid grid-cols-12 gap-8 items-center border-t border-[#1C1B1A]/12 pt-12">
            <div className="col-span-12 lg:col-span-4">
              <h2 className="text-4xl font-serif text-[#1C1B1A] leading-tight">
                Our <span className="italic">approach</span> defines us
              </h2>
            </div>

            <div className="col-span-12 lg:col-span-8">
              {methodologyItems.map((item, i) => (
                <div
                  key={i}
                  className="group border-b border-[#1C1B1A]/12 py-6 cursor-pointer flex items-center justify-between hover:pl-4 transition-all duration-300"
                  onMouseEnter={() => setHoveredItem(i)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-[#827C75] font-mono text-sm">
                      0{i + 2}
                    </span>
                    <h3 className="text-2xl font-serif text-[#1C1B1A] group-hover:text-[#A84B2B] group-hover:translate-x-2 transition-all">
                      {item.title}
                    </h3>
                  </div>
                  <div
                    className={`text-[#A84B2B] transition-transform duration-300 ${
                      hoveredItem === i ? "rotate-90" : ""
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Hover Reveal Image */}
      <div
        ref={revealImageRef}
        className="fixed top-0 left-0 w-[300px] h-[400px] rounded-lg overflow-hidden shadow-2xl pointer-events-none z-[100] opacity-0 transition-opacity duration-200"
        style={{ opacity: hoveredItem !== null ? 1 : 0 }}
      >
        <img
          src={
            hoveredItem !== null
              ? methodologyItems[hoveredItem].image
              : methodologyItems[0].image
          }
          alt="Reveal"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-[#EAE6DF] px-3 py-1">
          <span className="text-[#1C1B1A] text-xs font-mono uppercase">View</span>
        </div>
      </div>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-[#A84B2B] rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 transition-transform"
      />
      <div className="fixed top-0 left-0 w-10 h-10 border border-[#A84B2B] rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference" />
    </div>
  );
}
