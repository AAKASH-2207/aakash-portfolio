"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition ${
        scrolled
          ? "backdrop-blur-md bg-slate-950/80 border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="#"
          className="text-white font-semibold tracking-wider text-lg"
        >
          Aakash Sharma
        </a>

        <div className="hidden md:flex gap-8 text-sm text-slate-300">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}