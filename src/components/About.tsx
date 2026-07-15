"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  const stats = [
    { value: "312+", label: "Project Complete" },
    { value: "281+", label: "World Clients" },
    { value: "10+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-24 bg-[#070707] relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-48 border border-white/5 rotate-45 rounded-2xl pointer-events-none" />
      <div className="absolute right-12 bottom-12 w-64 h-64 border border-white/5 rotate-12 rounded-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Column: Heading and CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b5ff1a]"
              >
                About Me
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight text-white"
              >
                I can deliver results that exceed your expectations.
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 lg:mt-16"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 border border-[#b5ff1a] text-black bg-[#b5ff1a] font-semibold rounded-full hover:bg-transparent hover:text-white transition-all duration-300 group"
              >
                Hire Me Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Bio and Stats */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed font-light"
            >
              Hi, I'm Amalia Sanchez. I have an understanding of the relationship between design and users through detailed execution and proper user experience. I love working on interesting and meaningful projects that I can be proud of, and I always strive to create clean, pixel-perfect interfaces that are smoothly animated. I prefer to prioritize not only code but also quality, perfect graphic design, and optimized development.
            </motion.p>

            {/* Statistics */}
            <div className="mt-12 lg:mt-20 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="font-syne font-extrabold text-3xl md:text-5xl text-[#b5ff1a] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-xs md:text-sm text-gray-400 font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
