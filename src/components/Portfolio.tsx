"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const items = [
    {
      title: "Dashboard UI",
      category: "Web Application",
      image: "/portfolio_dashboard.png",
      link: "#",
    },
    {
      title: "Mobile App UI",
      category: "iOS & Android",
      image: "/portfolio_app.png",
      link: "#",
    },
    {
      title: "Creative Branding Poster",
      category: "Branding",
      image: "/portfolio_poster.png",
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#070707] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-lg">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b5ff1a]"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 font-syne font-extrabold text-3xl md:text-5xl text-white leading-tight"
            >
              Selected Works <br />
              <span className="text-stroke">2020–2022</span>
            </motion.h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <p className="text-gray-400 text-sm md:text-base max-w-xs md:text-right mb-6 leading-relaxed font-light">
              Check out more portfolios I've worked on
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 bg-white/5 rounded-full hover:border-[#b5ff1a] hover:bg-[#b5ff1a] hover:text-black transition-all duration-300 text-sm font-semibold"
            >
              View More
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#121212] border border-white/10 hover:border-[#b5ff1a]/40 transition-all duration-500"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                {/* Glowing Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Card Info */}
              <div className="p-6 flex items-center justify-between z-10 relative bg-[#0d0d0d]">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#b5ff1a] font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold font-syne text-white mt-1">
                    {item.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:bg-[#b5ff1a] group-hover:text-black group-hover:border-[#b5ff1a] transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
