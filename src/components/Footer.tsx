"use client";

import { ArrowUp } from "lucide-react";

// Inline SVG components for brand icons to ensure build stability
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", icon: InstagramIcon, href: "#" },
    { name: "Facebook", icon: FacebookIcon, href: "#" },
    { name: "Twitter", icon: TwitterIcon, href: "#" },
    { name: "LinkedIn", icon: LinkedInIcon, href: "#" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070707] border-t border-white/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-16">

          {/* Brand Info */}
          <div className="md:col-span-6 max-w-md">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <span className="w-8 h-8 rounded-full bg-[#b5ff1a] flex items-center justify-center text-black font-extrabold text-lg">
                AC
              </span>

            </a>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
              Working in development and design has given me a stronger sense of the extraordinary in my digital work.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-syne font-bold text-sm text-white uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-sm text-gray-400 hover:text-[#b5ff1a] transition-colors">Home</a>
              <a href="#service" className="text-sm text-gray-400 hover:text-[#b5ff1a] transition-colors">Service</a>
              <a href="#portfolio" className="text-sm text-gray-400 hover:text-[#b5ff1a] transition-colors">Portfolio</a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-[#b5ff1a] transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <h4 className="font-syne font-bold text-sm text-white uppercase tracking-wider mb-6">
              Social Media
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-[#b5ff1a] flex items-center gap-2 transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-gray-500 font-light">
            © Aneesh. All rights reserved 2022.
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#b5ff1a] hover:text-[#b5ff1a] hover:bg-[#b5ff1a]/5 transition-all duration-300 group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

