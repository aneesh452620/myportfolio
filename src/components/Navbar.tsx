"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Service", href: "#service" },
    { name: "Portfolio", href: "#portfolio" },

    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav py-4 shadow-lg shadow-black/20" : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-black font-extrabold text-lg transition-transform duration-300 group-hover:rotate-45">
              AC
            </span>

          </a>

          {/* Nav Items - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-gray-300 hover:text-accent transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white hover:border-accent hover:bg-accent hover:text-black transition-all duration-300"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Toggle Menu - Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-accent focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-[#070707]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-syne font-bold hover:text-accent transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-accent text-black font-semibold flex items-center gap-2"
            >
              Get In Touch
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
