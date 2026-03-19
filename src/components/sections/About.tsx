"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative inline-block mr-[0.25em] mt-1">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }} className="text-[#f5f5f5]">{children}</motion.span>
    </span>
  );
};

export function About() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "start 20%"]
  });

  const paragraph = "With over a decade of experience bridging the gap between design and engineering, I specialize in crafting interactive interfaces that leave a lasting impression. I leverage the React ecosystem, WebGL, and precise motion design to build fast, accessible, and uniquely cinematic digital products.";
  const words = paragraph.split(" ");

  return (
    <section ref={container} id="about" className="py-40 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen flex items-center relative z-20 bg-[#050505]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 w-full">
        <div className="lg:col-span-5">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#ccff00] mb-8 lg:mb-0">( The Philosophy )</h2>
        </div>
        <div className="lg:col-span-7 flex flex-col text-3xl md:text-4xl lg:text-5xl text-[#f5f5f5] leading-[1.3] gap-8 md:gap-12 font-medium display-font">
          <motion.h3 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8 }}
          >
            I reject <span className="text-[#555]">mediocrity in web design.</span> Every pixel must serve a purpose and deliver impact.
          </motion.h3>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-[#a1a1aa] leading-relaxed font-light font-sans flex flex-wrap">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
            })}
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-12 border-t border-[#333] mt-8"
          >
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#f5f5f5] mb-6 font-sans">Core Arsenal</h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-base font-sans text-[#a1a1aa]">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"/> Frontend Strategy</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"/> Design Systems</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"/> WebGL & Shaders</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"/> Creative Coding</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
