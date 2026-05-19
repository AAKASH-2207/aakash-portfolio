"use client";

import { motion } from "framer-motion";

const links = [
  {
    label: "GitHub",
    value: "github.com/AAKASH-2207",
    href: "https://github.com/AAKASH-2207",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/itaakashsharma",
    href: "https://linkedin.com/in/itaakashsharma/",
  },
  {
    label: "Email",
    value: "akshisharma2207@gmail.com",
    href: "mailto:akshisharma2207@gmail.com",
  },
  {
    label: "Resume",
    value: "Download CV",
    href: "/Aakash_Sh_cv.pdf",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Label */}
        <p className="uppercase tracking-[0.3em] text-sm text-slate-500 mb-4">
          Contact Hub
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let’s Build Systems That Matter
        </h2>

        <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed mb-14">
          Open to engineering collaborations, aerospace innovation,
          robotics systems, defense-tech discussions, research,
          and technical product development.
        </p>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.label !== "Resume" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-800 bg-white/[0.03] backdrop-blur-xl p-8 text-left hover:border-slate-600 hover:translate-y-[-4px] transition"
            >
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                {link.label}
              </p>

              <p className="text-xl text-white font-medium break-all">
                {link.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:akshisharma2207@gmail.com"
          className="inline-flex rounded-xl bg-white text-black px-8 py-4 font-medium hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition"
        >
          Let’s Build Something
        </a>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-40" />
    </section>
  );
}