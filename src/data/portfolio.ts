export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  link: string;
}

export const portfolioItems: PortfolioItem[] = [
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
