"use client";

import { motion } from "framer-motion";

const domains = [
  {
    title: "Robotics & Autonomous Systems",
    description:
      "Designing intelligent robotic systems, ROS2 platforms, autonomous drones, mapping systems, and real-world control architectures.",
  },
  {
    title: "Defense Engineering",
    description:
      "Working on indigenous defense-oriented systems, simulation hardware, surveillance concepts, and tactical engineering solutions.",
  },
  {
    title: "Aerospace & Embedded Systems",
    description:
      "Developing flight systems, embedded control solutions, sensor integrations, and aerospace-focused engineering prototypes.",
  },
  {
    title: "AI / Data Science",
    description:
      "Building machine learning systems, neural network models, analytics workflows, and intelligent automation platforms.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Label */}
        <p className="uppercase tracking-[0.3em] text-sm text-slate-500 mb-4">
          Core Domains
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Building Across High-Impact Engineering Fields
        </h2>

        {/* Intro */}
        <p className="text-slate-400 max-w-3xl text-lg leading-relaxed mb-14">
          My work sits at the intersection of robotics, autonomous systems,
          aerospace engineering, defense technologies, embedded intelligence,
          and AI-driven problem solving.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-800 bg-white/[0.03] backdrop-blur-xl backdrop-blur-sm p-8 hover:border-slate-600 hover:translate-y-[-4px] transition"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {domain.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {domain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-40" />
    </section>
  );
}