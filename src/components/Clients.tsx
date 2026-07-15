"use client";

import { motion } from "framer-motion";
import { CircleDot, Radio, Shield, Triangle, Zap } from "lucide-react";

export default function Clients() {
  const clients = [
    { name: "Velocity", icon: Zap, text: "velocity" },
    { name: "Muzica", icon: Radio, text: "muzica" },
    { name: "FoxHub", icon: Shield, text: "foxhub" },
    { name: "Ztos", icon: CircleDot, text: "ztos" },
    { name: "Lua", icon: Triangle, text: "lua" },
  ];

  return (
    <section className="py-20 bg-[#070707] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b5ff1a]"
          >
            Our Clients
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-xl md:text-2xl font-syne font-bold text-gray-300"
          >
            More than 30 Clients who have worked with me
          </motion.h2>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {clients.map((client, i) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#070707] py-8 px-6 flex flex-col items-center justify-center gap-3 group hover:bg-[#b5ff1a]/5 transition-colors duration-300"
              >
                <Icon className="w-8 h-8 text-gray-500 group-hover:text-[#b5ff1a] transition-colors duration-300" />
                <span className="font-syne font-bold text-sm tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300 uppercase">
                  {client.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
