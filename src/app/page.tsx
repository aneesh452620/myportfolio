import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import About from "@/components/About";
import MarqueeRibbon from "@/components/MarqueeRibbon";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 w-full bg-[#070707] overflow-x-hidden relative">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Clients Section */}
      {/* <Clients /> */}

      {/* 4. About Me Section */}
      <About />

      {/* 5. Tilted Scrolling Marquee */}
      <div className="relative py-16 overflow-hidden select-none">
        <MarqueeRibbon direction="left" rotate="-2deg" className="shadow-lg shadow-black/40" />
      </div>

      {/* 6. Services Section */}
      <Services />

      {/* 7. Portfolio Section */}
      <Portfolio />

      {/* 8. Second Tilted Scrolling Marquee */}
      <div className="relative py-16 overflow-hidden select-none">
        <MarqueeRibbon direction="right" rotate="2deg" className="shadow-lg shadow-black/40" />
      </div>

      {/* 9. CTA Section */}
      <CTA />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}
