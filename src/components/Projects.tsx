"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
const projects = [
  {
    title: "ROS2 LiDAR Mapping Platform",
    category: "Autonomous Systems",
    description:
      "A ROS2-based LiDAR mapping and surveillance platform focused on edge processing, environmental awareness, and real-time navigation.",
    stack: ["ROS2", "LiDAR", "SLAM", "Linux"],
  },
  {
    title: "Flight Simulator Control System",
    category: "Defense Simulation",
    description:
      "Designed indigenous simulation hardware and control architecture for advanced flight training and embedded interaction systems.",
    stack: ["Embedded", "Control Systems", "Simulation"],
  },
  {
    title: "Autonomous Drone Systems",
    category: "Aerospace Robotics",
    description:
      "Worked on autonomous drone concepts for reconnaissance, mobility, environmental sensing, and defense-oriented applications.",
    stack: ["Drones", "Sensors", "AI", "Navigation"],
  },
  {
    title: "AI / Neural Network Systems",
    category: "Machine Intelligence",
    description:
      "Built machine learning and neural network-based systems focused on analytics, prediction, automation, and intelligent workflows.",
    stack: ["Python", "ML", "Neural Networks", "Data Science"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Label */}
        <p className="uppercase tracking-[0.3em] text-sm text-slate-500 mb-4">
          Projects
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Engineering Builds & Technical Systems
        </h2>

        <p className="text-slate-400 max-w-3xl text-lg mb-16">
          A collection of aerospace, defense-tech, autonomous systems,
          robotics, and AI-focused engineering work.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
          <Tilt
            key={project.title}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1200}
            glareEnable={true}
            glareMaxOpacity={0.12}
            scale={1.02}
            >
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl overflow-hidden border border-slate-800 bg-white/[0.03] backdrop-blur-xl hover:border-slate-500 hover:shadow-2xl hover:-translate-y-2 transition duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.18)]"
            >
              {/* Image Placeholder */}
              <div className="h-56 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-500 text-sm tracking-wider uppercase">
                Project Visual Placeholder
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-sm uppercase tracking-widest text-slate-500 mb-3">
                  {project.category}
                </p>

                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-slate-200 transition">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 rounded-full border border-slate-700 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-40" />
    </section>
  );
}