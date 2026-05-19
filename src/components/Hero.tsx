"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
  {[...Array(40)].map((_, i) => (
    <div
      key={i}
      className="absolute h-[2px] w-[2px] rounded-full bg-white"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  ))}
</div>

      {/* Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-slate-700 blur-[150px] opacity-20" />

      <div className="absolute bottom-[10%] right-[10%] h-[220px] w-[220px] rounded-full bg-blue-900 blur-[120px] opacity-10" />

      {/* Content */}
      <motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{ repeat: Infinity, duration: 8 }}
  className="absolute top-20 left-20 h-44 w-44 rounded-full bg-cyan-500 blur-[110px] opacity-10"
/>

<motion.div
  animate={{ y: [0, 30, 0] }}
  transition={{ repeat: Infinity, duration: 12 }}
  className="absolute right-20 top-40 h-56 w-56 rounded-full bg-blue-700 blur-[140px] opacity-10"
/>

<motion.div
  animate={{ x: [0, 20, 0] }}
  transition={{ repeat: Infinity, duration: 10 }}
  className="absolute bottom-20 left-1/3 h-40 w-40 rounded-full bg-violet-700 blur-[120px] opacity-10"
/>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-5xl text-center"
      >
        
        {/* Small label */}
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-6">
          Space • Defense • Robotics • R&D
        </p>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
          Aakash Sharma
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-xl md:text-3xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
          Engineering Intelligent Systems for Space, Defense &
          Autonomous Technologies
        </p>

        {/* Intro */}
        <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
          Building robotics, embedded systems, ROS2 mapping platforms,
          autonomous drones, aerospace-focused engineering solutions,
          and next-generation defense technologies.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-xl bg-white text-black px-6 py-3 font-medium hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition"
          >
            View Projects <ArrowRight size={18} />
          </a>

          <a
            href="/Aakash_Sh_cv.pdf"
            className="flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-3 hover:bg-slate-800 transition"
          >
            <FileText size={18} />
            Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex items-center justify-center gap-6 text-slate-300">
        <a
            href="https://github.com/AAKASH-2207"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800 transition"
        >
            GitHub
        </a>

        <a
            href="https://linkedin.com/in/itaakashsharma/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800 transition"
        >
            LinkedIn
        </a>
        </div>
      </motion.div>
      
    </section>
  );
}