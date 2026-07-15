"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 overflow-hidden bg-[#070707]"
    >
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[45vw] h-[45vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] rounded-full bg-white/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-syne font-extrabold text-[12vw] sm:text-[8vw] lg:text-[7vw] leading-[0.9] tracking-tight uppercase">
              Aneesh <br />
              <span className="text-stroke-accent">Creaticx</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8 text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-light"
          >
            Hello, my name is Aneesh, nice to meet you. I would like to welcome you with my personal portfolio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-10"
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download triggered!");
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#b5ff1a] text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg shadow-[#b5ff1a]/10 clickable"
            >
              <span>Download Resume</span>
              <Download className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Image Area */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10 bg-[#121212]"
          >
            <Image
              src="/aneesh_image.png"
              alt="Amalia Sanchez"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
              sizes="(max-w-720px) 100vw, 420px"
            />
            {/* Green Glass Overlay - precisely positioned like the mockup over the eye */}

          </motion.div>
        </div>
      </div>

      {/* Mouse Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="mouse-scroll" />
        <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase">
          Scroll
        </span>
      </div>
    </section>
  );
}
