"use client";

import { motion } from "framer-motion";

const experience = [
  {
    year: "2025 – Present",
    role: "R&D Intern",
    company: "Kapoor Engineers Pvt. Ltd.",
    description:
      "Working on indigenous defense-oriented engineering systems, manufacturing support, ROS2-based mapping and surveillance solutions, and simulation-focused development.",
  },
  {
    year: "2025",
    role: "Student President",
    company: "Analytix Lab Pvt. Ltd.",
    description:
      "Led technical student communities, coordinated teams, and drove engagement across data science, AI, and engineering initiatives.",
  },
  {
    year: "2024",
    role: "Content & Graphics Intern",
    company: "Lingaya’s Vidyapeeth",
    description:
      "Produced technical communication assets, visual content, and structured messaging under rapid deadlines.",
  },
  {
    year: "Leadership & Technical Work",
    role: "Robotics / AI / Systems",
    company: "Independent + University Initiatives",
    description:
      "Led robotics and AI-related technical initiatives, prototyping, engineering builds, and innovation-focused collaborative work.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Label */}
        <p className="uppercase tracking-[0.3em] text-sm text-slate-500 mb-4">
          Experience
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Engineering Journey
        </h2>

        <p className="text-slate-400 max-w-3xl text-lg mb-16">
          A timeline of technical growth across robotics, defense-focused
          engineering, leadership, research, and systems development.
        </p>

        <div className="relative border-l border-slate-800 ml-4 space-y-14">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-10"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-white shadow-lg" />

              {/* Year */}
              <p className="text-sm uppercase tracking-wider text-slate-500 mb-2">
                {item.year}
              </p>

              {/* Role */}
              <h3 className="text-2xl font-semibold text-white">
                {item.role}
              </h3>

              {/* Company */}
              <p className="text-slate-300 mb-3">{item.company}</p>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed max-w-3xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-40" />
    </section>
  );
}