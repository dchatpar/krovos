"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function LiquidMetalHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let blobPoints: { x: number; y: number; targetX: number; targetY: number; vx: number; vy: number }[] = [];
    const numPoints = 12;
    let time = 0;
    let mouseX = 0;
    let mouseY = 0;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      initBlob();
    };

    const initBlob = () => {
      blobPoints = [];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.25;

      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * baseRadius;
        const y = centerY + Math.sin(angle) * baseRadius;
        blobPoints.push({
          x,
          y,
          targetX: x,
          targetY: y,
          vx: 0,
          vy: 0,
        });
      }
    };

    const drawBlob = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.25;

      blobPoints.forEach((point, i) => {
        const angle = (i / numPoints) * Math.PI * 2;
        const noise = Math.sin(time * 2 + i * 0.5) * 30;
        const mouseNoise = Math.sin(time * 3 + i) * 15;

        const dx = mouseX - point.x;
        const dy = mouseY - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseForce = dist < 200 ? (200 - dist) / 200 * 50 : 0;

        point.targetX = centerX + Math.cos(angle) * (baseRadius + noise + mouseNoise);
        point.targetY = centerY + Math.sin(angle) * (baseRadius + noise + mouseNoise);

        if (dist < 200) {
          point.targetX -= (dx / dist) * mouseForce;
          point.targetY -= (dy / dist) * mouseForce;
        }

        point.vx += (point.targetX - point.x) * 0.05;
        point.vy += (point.targetY - point.y) * 0.05;
        point.vx *= 0.9;
        point.vy *= 0.9;
        point.x += point.vx;
        point.y += point.vy;
      });

      ctx.beginPath();
      ctx.moveTo(blobPoints[0].x, blobPoints[0].y);

      for (let i = 0; i < numPoints; i++) {
        const p0 = blobPoints[(i - 1 + numPoints) % numPoints];
        const p1 = blobPoints[i];
        const p2 = blobPoints[(i + 1) % numPoints];
        const p3 = blobPoints[(i + 2) % numPoints];

        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;
        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;

        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
      }

      ctx.closePath();

      const gradient = ctx.createLinearGradient(
        centerX - baseRadius,
        centerY - baseRadius,
        centerX + baseRadius,
        centerY + baseRadius
      );
      gradient.addColorStop(0, "rgba(220, 220, 230, 0.9)");
      gradient.addColorStop(0.3, "rgba(200, 200, 215, 0.85)");
      gradient.addColorStop(0.5, "rgba(180, 180, 200, 0.8)");
      gradient.addColorStop(0.7, "rgba(200, 200, 215, 0.85)");
      gradient.addColorStop(1, "rgba(220, 220, 230, 0.9)");

      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const offset = (i + 1) * baseRadius * 0.25;
        ctx.ellipse(
          centerX - offset * 0.3,
          centerY - offset * 0.5,
          baseRadius * 0.8 - offset * 0.3,
          baseRadius * 0.6 - offset * 0.2,
          -Math.PI / 6,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      animationId = requestAnimationFrame(drawBlob);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    resizeCanvas();
    drawBlob();

    window.addEventListener("resize", resizeCanvas);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mounted]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#e8eaed] overflow-hidden">
      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-800" />
                <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-600" />
                <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
              </svg>
            </div>
            <span className="text-slate-800 font-bold text-lg tracking-tight">KROVOS</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Products", "Solutions", "Services", "Company", "Resources"].map((link) => (
              <Link
                key={link}
                href="#"
                className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors">
              Sign in
            </button>
            {/* Chrome Button */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-slate-100 to-slate-300 blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <button className="relative px-8 py-3 rounded-full bg-gradient-to-br from-white via-slate-50 to-slate-200 text-slate-900 text-sm font-semibold overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-2 bg-slate-800 text-white text-xs font-mono rounded-full mb-8">
              ✦ ISO-Certified · GDPR Compliant
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              We Build
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500">
                Technology
              </span>
              <br />
              That Moves
              <br />
              Business
            </h1>

            <p className="text-slate-600 text-lg max-w-lg mb-10">
              Accelerate your digital transformation with enterprise-grade
              solutions. From AI automation to custom software, we build
              technology that scales with your ambitions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-full border border-slate-200 hover:bg-slate-50 transition-all">
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-12 mt-16">
              {[
                { value: "200+", label: "Clients" },
                { value: "450+", label: "Projects" },
                { value: "15+", label: "Years" },
                { value: "50+", label: "Experts" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <canvas ref={canvasRef} className="absolute inset-0" />

            {/* Floating Images */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform rotate-[-3deg] translate-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=400&fit=crop"
                    alt="Abstract chrome"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform rotate-[2deg]">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop"
                    alt="Fluid art"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform rotate-[3deg]">
                  <img
                    src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=300&fit=crop"
                    alt="Abstract"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform rotate-[-2deg] -translate-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400&h=400&fit=crop"
                    alt="Chrome sphere"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-slate-900 rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference opacity-0 transition-opacity"
        style={{ opacity: 1 }}
      />
    </div>
  );
}
