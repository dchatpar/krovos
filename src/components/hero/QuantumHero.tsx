"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  color: string;
  alpha: number;
  size: number;
  connectionDistance: number;
}

export default function QuantumHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const particleCount = 800;
    const connectionDistance = 80;
    const mouseDistance = 150;

    let mouseX = 0;
    let mouseY = 0;

    const colors = [
      "#00FFFF",
      "#00E5FF",
      "#00CED1",
      "#40E0D0",
      "#7FFFD4",
      "#E0FFFF",
      "#FF00FF",
      "#FF1493",
      "#FF6B6B",
      "#8B5CF6",
      "#6366F1",
      "#3B82F6",
    ];

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const initParticles = () => {
      particles = [];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 250 + 50;
        const z = (Math.random() - 0.5) * 200;

        const x = centerX + Math.cos(angle) * radius * (1 + z / 200);
        const y = centerY + Math.sin(angle) * radius * (1 + z / 200);

        const distFromCenter = Math.sqrt(
          Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
        );
        const normalizedDist = distFromCenter / 300;

        let color: string;
        if (normalizedDist < 0.3) {
          color = colors[Math.floor(Math.random() * 6)];
        } else if (normalizedDist < 0.6) {
          color = colors[6 + Math.floor(Math.random() * 5)];
        } else {
          color = colors[6 + Math.floor(Math.random() * 6)];
        }

        particles.push({
          x,
          y,
          z,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: (Math.random() - 0.5) * 0.3,
          baseX: x,
          baseY: y,
          baseZ: z,
          color,
          alpha: Math.random() * 0.5 + 0.3,
          size: Math.random() * 2 + 1,
          connectionDistance: connectionDistance + Math.random() * 40,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        const dx = particle.x - centerX;
        const dy = particle.y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 300) {
          const angle = Math.atan2(dy, dx);
          particle.vx = -Math.cos(angle) * Math.abs(particle.vx);
          particle.vy = -Math.sin(angle) * Math.abs(particle.vy);
        }

        if (particle.z > 100 || particle.z < -100) {
          particle.vz = -particle.vz;
        }

        const mouseDx = particle.x - mouseX;
        const mouseDy = particle.y - mouseY;
        const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (mouseDist < mouseDistance) {
          const force = (mouseDistance - mouseDist) / mouseDistance;
          particle.vx += (mouseDx / mouseDist) * force * 0.5;
          particle.vy += (mouseDy / mouseDist) * force * 0.5;
        }

        const pulseScale = 1 + Math.sin(time * 2 + index * 0.1) * 0.1;
        const size = particle.size * pulseScale * (1 - particle.z / 400);

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          size * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();
      });

      ctx.globalAlpha = 0.15;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dz = particles[i].z - particles[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < particles[i].connectionDistance) {
            const alpha = (1 - dist / particles[i].connectionDistance) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;

      const glowGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        200
      );
      glowGradient.addColorStop(0, "rgba(0, 255, 255, 0.1)");
      glowGradient.addColorStop(0.5, "rgba(139, 92, 246, 0.05)");
      glowGradient.addColorStop(1, "transparent");
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(drawParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    resizeCanvas();
    initParticles();
    drawParticles();

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mounted]);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Left Pane */}
      <div className="w-1/2 relative z-10 flex flex-col justify-between p-8 lg:p-16">
        {/* Quantum Circuit Blueprint */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] opacity-[0.08] pointer-events-none">
          <svg viewBox="0 0 500 400" className="w-full h-full">
            <defs>
              <pattern
                id="grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-white/30"
                />
              </pattern>
            </defs>
            <rect width="500" height="400" fill="url(#grid)" />
            <circle cx="250" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-400" />
            <circle cx="250" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400/50" />
            <circle cx="250" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400/30" />
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = 250 + Math.cos(angle) * 60;
              const y1 = 200 + Math.sin(angle) * 60;
              const x2 = 250 + Math.cos(angle) * 100;
              const y2 = 200 + Math.sin(angle) * 100;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-cyan-400"
                />
              );
            })}
            <line x1="250" y1="120" x2="250" y2="80" stroke="currentColor" strokeWidth="2" className="text-white" />
            <line x1="250" y1="280" x2="250" y2="320" stroke="currentColor" strokeWidth="2" className="text-white" />
            <line x1="170" y1="200" x2="130" y2="200" stroke="currentColor" strokeWidth="2" className="text-white" />
            <line x1="330" y1="200" x2="370" y2="200" stroke="currentColor" strokeWidth="2" className="text-white" />
          </svg>
        </div>

        {/* Top Navigation */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <rect x="5" y="5" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white" />
                <rect x="21" y="5" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400" />
                <rect x="5" y="21" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400" />
                <rect x="21" y="21" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white" />
              </svg>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">KROVOS</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#" className="text-white/60 text-sm font-mono hover:text-white transition-colors">
              // Core
            </Link>
            <Link href="#" className="text-white/60 text-sm font-mono hover:text-white transition-colors">
              // Synapse
            </Link>
            <Link href="#" className="text-white/60 text-sm font-mono hover:text-white transition-colors">
              // Topology
            </Link>
            <Link href="#" className="text-white/60 text-sm font-mono hover:text-white transition-colors">
              // Matrix
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="text-white/60 text-xs font-mono hover:text-white transition-colors">
              v EN
            </button>
            <button className="px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors">
              Initialize
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center max-w-xl">
          <span className="text-white/40 text-xs font-mono tracking-[0.3em] uppercase mb-6 block">
            // GENERATE ONCE, PUBLISH EVERYWHERE
          </span>

          <h1 className="text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-2">
            <span className="font-semibold">One piece</span> of content.
          </h1>
          <h1 className="text-6xl lg:text-7xl font-thin text-white leading-[1.1] mb-8">
            Every platform. <span className="text-cyan-400">Instantly.</span>
          </h1>

          <p className="text-white/50 font-mono text-sm leading-relaxed mb-10 max-w-md">
            Zero-latency neural bridging across all endpoints. Our quantum-ready
            infrastructure synchronizes your content ecosystem in real-time,
            eliminating deployment friction forever.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mb-16">
            {/* Sign In with Tech Brackets */}
            <div className="relative group">
              <div className="absolute -top-1 -left-1 w-3 h-3 border-l border-t border-white/40" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-r border-t border-white/40" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l border-b border-white/40" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-white/40" />
              <button className="px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all">
                Sign in
              </button>
            </div>

            {/* Learn More */}
            <button className="px-8 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors">
              Learn more
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { value: "128Q", label: "QUBITS" },
            { value: "0.01ms", label: "LATENCY" },
            { value: "99.9%", label: "UPTIME" },
            { value: "2048", label: "ENTANGLE" },
          ].map((stat, i) => (
            <div
              key={i}
              className="relative p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg"
            >
              <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-cyan-400/60" />
              <div className="absolute -top-1 -right-1 w-2 h-2 border-r border-t border-cyan-400/60" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l border-b border-cyan-400/60" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-cyan-400/60" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Pane - Particle Visualization */}
      <div ref={containerRef} className="w-1/2 relative">
        <canvas ref={canvasRef} className="absolute inset-0" />

        {/* HUD Labels */}
        <div className="absolute top-1/4 right-8 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg max-w-[180px]">
          <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-cyan-400/60" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-r border-t border-cyan-400/60" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l border-b border-cyan-400/60" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-cyan-400/60" />
          <div className="text-[10px] font-mono text-cyan-400 mb-1">CRYO-STATE</div>
          <div className="text-white font-semibold text-sm">15mK</div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-cyan-400/60 to-transparent" />
        </div>

        <div className="absolute top-1/3 left-8 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg max-w-[180px]">
          <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-cyan-400/60" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-r border-t border-cyan-400/60" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l border-b border-cyan-400/60" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-cyan-400/60" />
          <div className="text-[10px] font-mono text-cyan-400 mb-1">ENTANGLEMENT RATIO</div>
          <div className="text-white font-semibold text-sm">0.9999</div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-cyan-400/60 to-transparent" />
        </div>

        <div className="absolute bottom-1/3 right-8 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg max-w-[180px]">
          <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-cyan-400/60" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-r border-t border-cyan-400/60" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l border-b border-cyan-400/60" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-cyan-400/60" />
          <div className="text-[10px] font-mono text-cyan-400 mb-1">NEURAL DENSITY</div>
          <div className="text-white font-semibold text-sm">847 TB/s</div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-cyan-400/60 to-transparent" />
        </div>

        <div className="absolute bottom-1/4 left-8 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg max-w-[180px]">
          <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-cyan-400/60" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-r border-t border-cyan-400/60" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l border-b border-cyan-400/60" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-cyan-400/60" />
          <div className="text-[10px] font-mono text-cyan-400 mb-1">COHERENCE TIME</div>
          <div className="text-white font-semibold text-sm">100μs</div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-cyan-400/60 to-transparent" />
        </div>
      </div>
    </div>
  );
}
