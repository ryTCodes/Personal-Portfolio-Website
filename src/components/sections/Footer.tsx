import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#ccff00] pt-16 pb-8 border-t border-[#050505]/10 text-[#050505] relative z-20 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">

        <div className="flex items-center gap-4">
          <span className="text-2xl font-black display-font uppercase tracking-tighter">RYTCODES</span>
          <span className="text-[#050505]/50 font-medium">&copy; {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/rayyan-tausalkar-0b86202bb" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-[#050505] hover:text-[#050505]/70 transition-colors hover:scale-110 active:scale-95 duration-300">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/ryTCodes" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-[#050505] hover:text-[#050505]/70 transition-colors hover:scale-110 active:scale-95 duration-300">
            <FaGithub size={28} />
          </a>
          <a href="https://www.instagram.com/_rayyan_2766" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="text-[#050505] hover:text-[#050505]/70 transition-colors hover:scale-110 active:scale-95 duration-300">
            <FaInstagram size={28} />
          </a>
        </div>

        <div className="flex gap-8 text-[#050505]/50 font-medium">
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}
