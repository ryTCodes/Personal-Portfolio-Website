"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { Variants } from "framer-motion";

const textVariants: Variants = {
  hidden: { opacity: 0, y: "100%", rotate: 5 },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotate: 0,
    transition: { delay: i * 0.04 + 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }
  })
};

const AnimatedText = ({ text, className = "" }: { text: string, className?: string }) => (
  <div className={`flex justify-center ${className}`}>
    {text.split("").map((char, i) => (
      <span key={i} className="overflow-hidden inline-block pb-2 lg:pb-6 px-[0.1em] -mx-[0.1em]">
        <motion.span
          custom={i}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      </span>
    ))}
  </div>
);

export function Hero() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -250]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.08)_0%,transparent_50%)] pointer-events-none"
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity, scale }}
        className="z-10 flex flex-col items-center text-center mt-8 md:mt-20 w-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="px-5 py-2 rounded-full border border-[#333] text-xs font-semibold tracking-widest uppercase mb-12 flex items-center gap-3 bg-[#0a0a0a]"
        >
          <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
          Building Systems that matters
        </motion.div>

        <AnimatedText text="RAYYAN" className="text-[10vw] md:text-[9vw] leading-[0.80] display-font font-black tracking-tighter uppercase text-[#f5f5f5]" />
        <AnimatedText text="TAUSALKAR" className="text-[10vw] md:text-[9vw] leading-[0.80] display-font font-black tracking-tighter uppercase text-[#f5f5f5] mt-2 md:mt-4" />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-12 text-lg md:text-3xl text-[#a1a1aa] max-w-[90%] md:max-w-3xl font-light"
        >
          Aspiring AI Engineer specializing in Artificial Intelligence and Machine Learning.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 64 }}
        transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#777]">Scroll</span>
        <div className="w-[1px] h-full bg-gradient-to-b from-[#777] to-transparent" />
      </motion.div>
    </section>
  );
}
