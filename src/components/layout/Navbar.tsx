"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { Magnetic } from "@/components/ui/Magnetic";

export function Navbar() {
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050505]/80 backdrop-blur-lg py-4 border-b border-[#333]" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center gap-2 relative z-[100] hover:opacity-80 transition-opacity"
        >
          <Image src="/nav-logo.png" alt="Logo" width={180} height={60} className="object-contain h-12 w-auto md:h-16" />
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-[#a1a1aa] z-10">
          {["About", "Projects", "Achievements", "Contact"].map((item) => {
            const targetId = `#${item.toLowerCase()}`;
            return (
            <Magnetic key={item}>
              <a 
                href={targetId}
                onClick={(e) => {
                  e.preventDefault();
                  lenis?.scrollTo(targetId);
                }}
                className="hover:text-white transition-colors relative group block py-4 flex flex-col items-center"
              >
                {item}
                <span className="absolute bottom-2 w-0 h-[2px] bg-[#ccff00] transition-all duration-300 group-hover:w-[120%]" />
              </a>
            </Magnetic>
          )})}
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-sm uppercase tracking-widest hover:text-[#ccff00] transition-colors z-[100]"
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] bg-[#050505] flex flex-col items-center justify-center gap-8 md:hidden h-[100dvh]"
          >
            {["About", "Projects", "Achievements", "Contact"].map((item) => {
              const targetId = `#${item.toLowerCase()}`;
              return (
                <a
                  key={item}
                  href={targetId}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      lenis?.scrollTo(targetId);
                    }, 500);
                  }}
                  className="text-4xl font-bold uppercase tracking-widest hover:text-[#ccff00] transition-colors"
                >
                  {item}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
