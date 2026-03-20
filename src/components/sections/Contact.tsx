"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Contact() {
  const socials = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/rayyan-tausalkar-0b86202bb", icon: FaLinkedin },
    { name: "GitHub", url: "https://github.com/ryTCodes", icon: FaGithub },
    { name: "Instagram", url: "https://www.instagram.com/_rayyan_2766", icon: FaInstagram },
  ];

  return (
    <section id="contact" className="py-40 md:py-64 bg-[#ccff00] text-[#050505] relative z-20 rounded-t-[3rem] md:rounded-t-[8vw] mt-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[20vw] md:text-[14vw] leading-[0.8] display-font font-black tracking-tighter uppercase mb-12 md:mb-24"
        >
          Let's Talk
        </motion.h2>
        
        <div className="flex flex-row items-center gap-6 md:gap-12 justify-center">
          {socials.map((social, i) => (
            <motion.a 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + (i * 0.1) }}
              className="group relative overflow-hidden rounded-full bg-[#050505] text-[#f5f5f5] w-20 h-20 md:w-32 md:h-32 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-500 shadow-xl"
              aria-label={social.name}
            >
              <span className="relative z-10 flex items-center justify-center">
                <social.icon className="w-8 h-8 md:w-12 md:h-12 group-hover:text-[#ccff00] transition-colors duration-300" />
              </span>
              <div className="absolute inset-0 bg-[#1a1a1a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
