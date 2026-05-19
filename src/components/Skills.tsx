"use client";

import { motion } from "framer-motion";

const skills = [
  "3d Printing",
  "ROS2",
  "Autonomous Systems",
  "LiDAR Mapping",
  "SLAM",
  "Embedded Systems",
  "Control Systems",
  "Drones / UAV",
  "Aerospace Systems",
  "AI / ML",
  "Neural Networks",
  "Python",
  "Linux",
  "Git",
  "Simulation",
  "Fusion 360",
  "CAD / CAM",
  "Edge Computing",
  "RF / SDR",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Label */}
        <p className="uppercase tracking-[0.3em] text-sm text-slate-500 mb-4">
          Technical Stack
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Systems, Tools & Engineering Capabilities
        </h2>

        <p className="text-slate-400 max-w-3xl text-lg mb-16">
          A cross-disciplinary skill set spanning robotics, aerospace,
          embedded systems, AI, simulation, autonomous platforms,
          and defense-oriented engineering.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-800 bg-white/[0.03] backdrop-blur-xl backdrop-blur-sm px-5 py-6 text-center text-slate-200 hover:border-slate-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-900/30 transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-40" />
    </section>
  );
}