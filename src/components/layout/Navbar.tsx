"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { Magnetic } from "@/components/ui/Magnetic";

const navItems = ["About", "Projects", "Achievements", "Contact"];

export function Navbar() {
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
        }}
        initial="visible"
        animate="visible"
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 flex justify-center transition-all duration-500 px-4 ${
          scrolled ? "pt-4" : "pt-8"
        }`}
      >
        <div 
          className={`flex justify-between items-center transition-all duration-500 overflow-hidden ${
            scrolled 
              ? "bg-[#050505]/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 w-full max-w-4xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]" 
              : "w-full max-w-[1600px] px-6 md:px-12 py-4 bg-transparent border-transparent rounded-none"
          }`}
        >
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 relative z-[100] hover:opacity-80 transition-opacity"
          >
            <Image src="/nav-logo.png" alt="Logo" width={180} height={60} className="object-contain h-10 md:h-12 w-auto" />
          </Link>
          
          <div className="hidden md:flex relative gap-2 items-center z-10" onMouseLeave={() => setHoveredIndex(null)}>
            {navItems.map((item, index) => {
              const targetId = `#${item.toLowerCase()}`;
              const isHovered = hoveredIndex === index;
              return (
                <Magnetic key={item}>
                  <div className="relative">
                    {isHovered && (
                      <motion.div
                        layoutId="nav-hover"
                        className="absolute inset-0 bg-white/10 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <a 
                      href={targetId}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onClick={(e) => {
                        e.preventDefault();
                        lenis?.scrollTo(targetId);
                      }}
                      className="relative px-5 py-2 text-sm font-medium uppercase tracking-widest text-[#a1a1aa] hover:text-white transition-colors duration-300 block z-10"
                    >
                      {item}
                    </a>
                  </div>
                </Magnetic>
              )
            })}
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[100]"
          >
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block transition-all"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white block transition-all"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block transition-all"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-24 left-4 right-4 z-[90] bg-[#050505]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => {
                const targetId = `#${item.toLowerCase()}`;
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <a
                      href={targetId}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        setTimeout(() => {
                          lenis?.scrollTo(targetId);
                        }, 500);
                      }}
                      className="text-2xl font-bold uppercase tracking-widest text-[#f5f5f5] hover:text-[#ccff00] transition-colors duration-300 block py-2 border-b border-white/5 last:border-0"
                    >
                      {item}
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
