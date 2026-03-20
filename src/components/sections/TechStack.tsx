"use client";

import { motion } from "framer-motion";
import { Database, Binary, Code2, Cpu, Globe, Braces } from "lucide-react";

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 md:py-40 px-6 md:px-12 max-w-[1600px] mx-auto bg-[#050505] relative z-20">

      <div className="flex flex-col mb-16 md:mb-24">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#ccff00] mb-6">( The Arsenal )</h2>
        <h3 className="text-5xl md:text-7xl lg:text-8xl display-font font-black tracking-tighter text-[#f5f5f5] mix-blend-difference mb-8">
          TECH STACK
        </h3>
        <p className="text-[#a1a1aa] max-w-xl text-lg md:text-xl font-light">
          A meticulously curated ecosystem of technologies I use to build intelligent systems, scale infrastructure, and craft immersive web experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:auto-rows-[350px]">


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[2rem] bg-[#0a0a0a] border border-[#1f1f1f] overflow-hidden group hover:border-[#ccff00]/50 transition-colors duration-500 min-h-[350px] lg:min-h-0"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none hidden sm:block">
            <Binary className="w-32 h-32 md:w-64 md:h-64 text-[#ccff00] -rotate-12 transform translate-x-8 -translate-y-8" />
          </div>

          <div className="flex flex-col h-full justify-between relative z-10 w-full">
            <div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center mb-6 group-hover:bg-[#ccff00] group-hover:text-[#050505] transition-colors duration-500 text-[#f5f5f5]">
                <Cpu className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h4 className="text-3xl sm:text-4xl md:text-5xl text-[#f5f5f5] font-semibold mb-3 md:mb-4 tracking-tight leading-tight break-words">Intelligence &<br />Data Models</h4>
              <p className="text-[#a1a1aa] text-base md:text-lg max-w-sm">Deep learning frameworks and massive data processing architectures.</p>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 mt-10 md:mt-12 lg:mt-8">
              {["PyTorch", "TensorFlow", "Scikit-Learn", "Hugging Face", "Pandas", "NumPy", "Jupyter Notebook"].map(t => (
                <span key={t} className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-full bg-[#111] border border-[#222] text-[#f5f5f5] text-[11px] sm:text-xs md:text-sm lg:text-base font-mono tracking-tight group-hover:border-[#ccff00]/30 transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-1 lg:col-span-2 lg:row-span-1 relative p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2rem] bg-[#ccff00] overflow-hidden group min-h-[350px] lg:min-h-0"
        >
          <div className="flex flex-col lg:flex-row h-full relative z-10 w-full lg:gap-16">
            <div className="lg:w-1/3 flex flex-col justify-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#050505] flex items-center justify-center mb-6 text-[#ccff00]">
                <Code2 className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h4 className="text-3xl sm:text-4xl md:text-4xl text-[#050505] font-black mb-8 lg:mb-0 tracking-tight display-font break-words">Lang</h4>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 mt-auto lg:mt-0 lg:w-2/3 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:content-center">
              {["Python", "Java", "C", "JavaScript", "TypeScript", "SQL"].map((t, i) => (
                <div key={t} className="flex items-center justify-between border-b border-[#050505]/20 pb-3 sm:pb-4 lg:py-2">
                  <span className="text-[#050505] text-base sm:text-lg md:text-xl font-bold">{t}</span>
                  <span className="text-[#050505]/50 font-mono text-xs sm:text-sm">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-1 lg:col-span-2 lg:row-span-1 relative p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2rem] bg-[#0a0a0a] border border-[#1f1f1f] overflow-hidden group hover:border-[#ccff00]/50 transition-colors duration-500 min-h-[350px] lg:min-h-0"
        >
          <div className="flex flex-col lg:flex-row h-full relative z-10 w-full lg:gap-16">
            <div className="lg:w-1/3 flex flex-col justify-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#111] flex items-center justify-center mb-6 text-[#a1a1aa] group-hover:text-[#ccff00] transition-colors">
                <Globe className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h4 className="text-3xl sm:text-4xl md:text-4xl text-[#f5f5f5] font-black mb-8 lg:mb-0 tracking-tight display-font break-words">Engg</h4>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 mt-auto lg:mt-0 lg:w-2/3 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:content-center">
              {["LangChain & AI", "Next.js & React", "FastAPI, Django & Flask", "MySQL & PostgreSQL", "Docker & Git"].map((t, i) => (
                <div key={t} className="flex items-center justify-between border-b border-[#1f1f1f] pb-3 sm:pb-4 lg:py-2 group-hover:border-[#ccff00]/30 transition-colors">
                  <span className="text-[#f5f5f5] text-base sm:text-lg md:text-xl font-bold">{t}</span>
                  <span className="text-[#555] group-hover:text-[#ccff00]/80 transition-colors font-mono text-xs sm:text-sm">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
