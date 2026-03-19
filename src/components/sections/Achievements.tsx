"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const achievementsList = [
  { 
    title: "Global Web3 Hackathon", 
    award: "1st Place Overall", 
    year: "2026",
    description: "Architected a highly scalable decentralized exchange utilizing zero-knowledge rollups, securing top honors among 500+ international teams."
  },
  { 
    title: "NASA Space Apps", 
    award: "Best Use of Data", 
    year: "2025",
    description: "Developed an interactive 3D particle simulation mapping orbital debris trajectories using real-time open satellite tracking telemetry."
  },
  { 
    title: "ETHGlobal London", 
    award: "Finalist", 
    year: "2024",
    description: "Built a fully generative smart contract platform that visually mints purely on-chain generative art directly into the user's wallet."
  },
  { 
    title: "Reactathon", 
    award: "Best UI/UX Design", 
    year: "2023",
    description: "Engineered a cinematic, physics-driven data dashboard showcasing custom Framer Motion variants and complex state orchestration."
  },
];

export function Achievements() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  return (
    <section ref={containerRef} id="achievements" className="py-40 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen flex flex-col justify-center bg-[#050505] relative z-20">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-[#ccff00] mb-24 md:mb-32 text-center md:text-left">( Hackathons & Events )</h2>
      
      <div className="flex flex-col relative border-t border-[#1f1f1f]">
        {/* Animated drawing line across the entire container */}
        <div className="absolute left-0 top-0 w-full h-[1px]">
           <motion.div className="h-full bg-[#ccff00] origin-left" style={{ scaleX: scrollYProgress }} />
        </div>

        {achievementsList.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col xl:flex-row xl:items-center justify-between py-12 md:py-16 border-b border-[#1f1f1f] hover:bg-[#0a0a0a] transition-colors gap-6 xl:gap-0 px-4 relative overflow-hidden"
          >
            {/* Inner dynamic border sweeps on hover */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ccff00] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
            
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl md:text-5xl lg:text-6xl display-font font-bold tracking-tighter text-[#f5f5f5] group-hover:translate-x-8 transition-transform duration-500">
                {item.title}
              </h3>
              <p className="text-[#a1a1aa] font-sans font-light text-base md:text-lg max-w-2xl leading-relaxed group-hover:translate-x-8 transition-transform duration-500 delay-75">
                {item.description}
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 mt-6 xl:mt-0">
              <span className="text-xl md:text-2xl text-[#ccff00] font-medium tracking-wide z-10 relative">
                {item.award}
              </span>
              <span className="text-[#a1a1aa] font-mono text-sm hidden md:block group-hover:text-[#f5f5f5] transition-colors z-10 relative">
                {item.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
