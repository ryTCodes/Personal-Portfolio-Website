export const projects = [
  {
    slug: "Carbon-Net-V2",
    title: "Carbon-Net V2",
    category: "AI, Sustainable and Blockchain",
    year: "2026",
    image: "/images/carbonnet-v2.jpg",
    description: "A decentralized verification ecosystem for carbon credits. It utilizes a 4-layer satellite imagery analysis system powered by AI to perform sentiment-based environmental assessment, ensuring the authenticity of carbon offsets before recording them on the Polygon blockchain.",
    tech: ["Next.js", "FastAPI", "Blockchain", "Polygon", "Solidity"],
  },
  {
    slug: "WiChain",
    title: "WiChain",
    category: "AI, Cybersecurity and Blockchain",
    year: "2025",
    image: "/images/Wichain.jpg",
    description: "A cybersecurity solution for Wi-Fi spoofing detection. The system scans local networks and employs a Machine Learning model analyzing SSID, BSSID, signal strength, and encryption patterns to identify rogue access points, subsequently logging threat data onto a blockchain for immutable auditing.",
    tech: ["React", "FastAPI", "Blockchain", "Tailwind CSS", "Solidity", "Ethers.js"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}