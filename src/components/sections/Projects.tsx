"use client";

import { motion, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { useState, useEffect } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const cursorX = useSpring(0, { damping: 25, stiffness: 120, mass: 0.5 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 120, mass: 0.5 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 250); 
      cursorY.set(e.clientY - 150); 
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <section id="projects" className="py-40 px-6 md:px-12 max-w-[1600px] mx-auto bg-[#050505] relative z-20">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-[#ccff00] mb-24">( Selected Works )</h2>
      
      <div className="flex flex-col gap-0 border-t border-[#1f1f1f]">
        {projects.map((project, i) => (
          <Link href={`/projects/${project.slug}`} key={i} className="block w-full">
            <motion.div 
              onMouseEnter={() => setActiveProject(i)}
              onMouseLeave={() => setActiveProject(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative block w-full border-b border-[#1f1f1f] py-16 md:py-24 hover:bg-[#0a0a0a] transition-colors cursor-pointer"
            >
              <div className="flex flex-col xl:flex-row justify-between xl:items-center gap-8 relative z-10 px-4">
                <div className="flex flex-col gap-4 xl:gap-6 max-w-4xl">
                  <h3 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl display-font font-bold tracking-tighter group-hover:translate-x-4 xl:group-hover:translate-x-8 transition-transform duration-700 ease-out text-[#f5f5f5] break-words">
                    {project.title}
                  </h3>
                  <p className="text-[#a1a1aa] text-base md:text-lg lg:text-xl font-light group-hover:translate-x-4 xl:group-hover:translate-x-8 transition-transform duration-700 ease-out delay-75 line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-6 md:gap-12 text-[#a1a1aa] group-hover:text-[#f5f5f5] transition-colors duration-500 lg:pr-12 mt-4 xl:mt-0">
                  <span className="text-sm uppercase tracking-widest hidden md:block">{project.category}</span>
                  <span className="text-sm font-mono">{project.year}</span>
                  <Magnetic>
                    <div className="w-16 h-16 rounded-full border border-[#333] flex items-center justify-center group-hover:bg-[#ccff00] group-hover:border-[#ccff00] group-hover:text-black transition-all duration-500 hidden md:flex">
                      <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </Magnetic>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className={`fixed top-0 left-0 w-[500px] aspect-video pointer-events-none transition-all duration-500 z-[100] overflow-hidden rounded-sm hidden xl:block shadow-2xl ${
          activeProject !== null ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <div className="w-full h-full bg-[#1a1a1a] border border-[#333] relative">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className={`absolute inset-0 transition-opacity duration-700 ${activeProject === i ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={p.image} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
