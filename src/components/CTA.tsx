"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-32 bg-[#070707] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      {/* Floating 3D Cubes (CSS drawn) */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-[15%] w-16 h-16 border border-white/5 rotate-12 rounded-lg hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 right-[15%] w-24 h-24 border border-[#b5ff1a]/10 -rotate-12 rounded-xl hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b5ff1a]">
          Collaboration
        </span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 font-syne font-extrabold text-4xl md:text-6xl lg:text-7xl text-white leading-tight max-w-4xl mx-auto"
        >
          Let's talk to <br />
          <span className="text-[#b5ff1a]">Collaboration</span>
        </motion.h2>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#b5ff1a] text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg shadow-[#b5ff1a]/10"
          >
            Get In Touch
            <MessageSquare className="w-5 h-5" />
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 bg-white/5 text-white font-bold rounded-full hover:border-[#b5ff1a] hover:bg-[#b5ff1a]/5 transition-all duration-300"
          >
            Hire Me Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
