import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Hi, I'm Aneesh, a passionate Frontend Developer & UI/UX Designer dedicated to building modern, responsive, and visually engaging digital experiences. I combine creative design thinking with clean, scalable code to create interfaces that are both beautiful and user-friendly..",
  keywords: ["Aneesh", "UI/UX Design", "Development", "Portfolio", "Web Design", "React", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} h-full antialiased dark`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col bg-[#070707] text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
