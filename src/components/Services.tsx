"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      num: "01.",
      title: "Design Visual",
      description:
        "Design that is unique, functional, and beautiful is at the heart of everything we create. We obsess over user experience, designing not for ourselves but for real people solving problems.",
      skills: [
        "UI/UX Design",
        "Mockup Design",
        "Design Graphic",
        "Icon Design",
        "Logo Design",
      ],
    },
    {
      num: "02.",
      title: "Frontend Development",
      description:
        "I build fast, responsive, and user-friendly web interfaces using modern frontend technologies. My focus is on creating pixel-perfect, accessible, and high-performance websites that deliver seamless user experiences across all devices.",
      skills: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5 & CSS3",
        "Bootstrap",
        "Responsive Web Development",
        "Frontend Performance Optimization",
        "UI Component Development",
      ],
    },
  ];

  return (
    <section id="service" className="py-24 bg-[#070707] relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b5ff1a]"
          >
            Service
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-syne font-extrabold text-3xl md:text-5xl text-white"
          >
            Available services that I can work on
          </motion.h2>
        </div>

        {/* Services Stack */}
        <div className="flex flex-col gap-20">
          {serviceCategories.map((category, idx) => (
            <div key={category.title} className="border-t border-white/10 pt-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Numeric Indicator & Title */}
                <div className="lg:col-span-4 flex items-start gap-4">
                  <span className="font-syne font-extrabold text-2xl text-[#b5ff1a]">
                    {category.num}
                  </span>
                  <div>
                    <h3 className="font-syne font-bold text-2xl md:text-3xl text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Description Text */}
                <div className="lg:col-span-8">
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                    {category.description}
                  </p>

                  {/* Skills Tag Grid */}
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
                    {category.skills.map((skill, sIdx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: sIdx * 0.05 }}
                        whileHover={{ y: -3 }}
                        className="py-4 px-3 rounded-lg border border-white/5 bg-white/5 text-center text-xs md:text-sm font-medium text-gray-300 hover:border-[#b5ff1a]/40 hover:bg-[#b5ff1a]/5 hover:text-white transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
