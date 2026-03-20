"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <div className="relative bg-[#050505] selection:bg-[#ccff00] selection:text-[#050505] min-h-screen">
      <CustomCursor />
      <main className="relative z-10 mix-blend-normal">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
