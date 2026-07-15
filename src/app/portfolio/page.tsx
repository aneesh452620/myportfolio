"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioItems } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <main className="flex-1 w-full bg-[#070707] overflow-x-hidden relative">
      <Navbar />

      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#b5ff1a] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b5ff1a]"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-syne font-extrabold text-4xl md:text-6xl text-white leading-tight max-w-2xl"
          >
            All Selected <span className="text-stroke">Works</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 text-sm md:text-base max-w-lg leading-relaxed font-light"
          >
            A complete look at the projects I've designed and built — from web
            applications to mobile experiences and branding work.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {portfolioItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.15, duration: 0.6 }}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#121212] border border-white/10 hover:border-[#b5ff1a]/40 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </div>

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

      <Footer />
    </main>
  );
}
