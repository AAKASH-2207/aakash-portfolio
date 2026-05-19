"use client";

import { motion } from "framer-motion";

const blogs = [
  {
    title: "ROS2 Mapping Systems & Real-Time Navigation",
    category: "Robotics",
    excerpt:
      "Exploring ROS2-driven mapping pipelines, LiDAR integration, and autonomous system workflows.",
  },
  {
    title: "Defense Simulation & Embedded Control Design",
    category: "Defense Tech",
    excerpt:
      "Engineering thoughts on indigenous simulation systems, embedded control interfaces, and tactical hardware.",
  },
  {
    title: "AI, Drones & Autonomous Engineering",
    category: "Aerospace AI",
    excerpt:
      "Combining machine intelligence, drones, and real-world autonomous engineering systems.",
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Label */}
        <p className="uppercase tracking-[0.3em] text-sm text-slate-500 mb-4">
          Engineering Notes
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Research Logs & Technical Writings
        </h2>

        <p className="text-slate-400 max-w-3xl text-lg mb-16">
          Future devlogs, engineering research notes, aerospace concepts,
          robotics experiments, and technical insights.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.96, rotateX: 6 }}   
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-800 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-slate-600 hover:translate-y-[-4px] transition"
            >
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">
                {blog.category}
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {blog.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6">
                {blog.excerpt}
              </p>

              <button className="text-sm uppercase tracking-widest text-slate-300 hover:text-white transition">
                Read More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-40" />
    </section>
  );
}