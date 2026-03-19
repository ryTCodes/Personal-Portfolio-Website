export const projects = [
  {
    slug: "lumina-os",
    title: "Lumina OS",
    category: "System Design",
    year: "2026",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
    description: "A visionary operating system interface designed entirely around spatial computing and neural interfaces. Lumina OS challenges the traditional desktop paradigm with physics-based window management and depth-layered typography.",
    role: "Lead Product Designer",
    tech: ["React Base", "Framer Motion", "WebGL", "Three.js"],
  },
  {
    slug: "ether-protocol",
    title: "Ether Protocol",
    category: "Web3 Platform",
    year: "2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    description: "A decentralized finance (DeFi) trading platform abstracting complex smart contract logic into an ultra-premium, cinematic dashboard. Ether Protocol prioritizes zero-latency data visualization and mathematical typography.",
    role: "Frontend Architect",
    tech: ["Next.js", "Solidity", "Tailwind CSS", "Ethers.js"],
  },
  {
    slug: "chronos",
    title: "Chronos",
    category: "E-Commerce",
    year: "2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    description: "An experimental e-commerce sandbox for a luxury timepiece manufacturer. The platform uses native scroll-hijacking and immense 3D model renderings to craft a narrative-driven purchasing experience.",
    role: "Creative Developer",
    tech: ["Next.js", "Zustand", "Lenis Scroll", "GSAP"],
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
