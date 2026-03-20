import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rayyantlk.vercel.app"),
  title: {
    default: "Rayyan Tausalkar | Portfolio",
    template: "%s | Rayyan Tausalkar",
  },
  description: "Aspiring AI Engineer specializing in Artificial Intelligence, Machine Learning, Data Science, and Large Language Models. Exploring the boundaries of technology.",
  keywords: ["Rayyan Tausalkar", "AI Engineer", "Machine Learning", "Data Science", "LLM", "Developer", "Portfolio", "ryTCodes"],
  authors: [{ name: "Rayyan Tausalkar" }],
  creator: "Rayyan Tausalkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rayyantlk.vercel.app",
    title: "Rayyan Tausalkar | AI Engineer & Developer",
    description: "Aspiring AI Engineer specializing in Artificial Intelligence, Machine Learning, Data Science, and Large Language Models.",
    siteName: "Rayyan Tausalkar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayyan Tausalkar | AI Engineer & Developer",
    description: "Aspiring AI Engineer specializing in Artificial Intelligence, Machine Learning, Data Science, and Large Language Models.",
    creator: "@ryTCodes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen bg-[#050505] text-[#f5f5f5] selection:bg-[#ccff00] selection:text-[#050505] overflow-x-hidden">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
