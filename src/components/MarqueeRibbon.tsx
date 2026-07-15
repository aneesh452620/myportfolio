"use client";

interface MarqueeRibbonProps {
  direction?: "left" | "right";
  rotate?: string;
  className?: string;
}

export default function MarqueeRibbon({
  direction = "left",
  rotate = "-2deg",
  className = "",
}: MarqueeRibbonProps) {
  const items = [
    "BRANDING",
    "UI/UX DESIGN",
    "DEVELOPMENT",
    "ICON DESIGN",
    "LOGO BRANDING",
  ];

  // Repeat items to fill space and enable continuous infinite scrolling
  const repeatedItems = [...Array(12)].flatMap(() => items);

  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className={`w-full overflow-hidden bg-[#b5ff1a] py-4 relative z-20 select-none ${className}`}
      style={{
        transform: `rotate(${rotate}) scale(1.02)`,
      }}
    >
      <div className="flex whitespace-nowrap">
        <div className={`${animationClass} flex items-center gap-12 font-syne font-extrabold text-lg md:text-xl text-black`}>
          {repeatedItems.map((item, idx) => (
            <span key={idx} className="flex items-center gap-12">
              <span>{item}</span>
              <span className="text-[12px] opacity-40">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
