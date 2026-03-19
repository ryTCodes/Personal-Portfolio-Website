export function Footer() {
  return (
    <footer className="bg-[#ccff00] pt-16 pb-8 border-t border-[#050505]/10 text-[#050505] relative z-20 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        <div className="flex items-center gap-4">
          <span className="text-2xl font-black display-font uppercase tracking-tighter">RYTCODES</span>
          <span className="text-[#050505]/50 font-medium">&copy; {new Date().getFullYear()}</span>
        </div>

        <div className="flex gap-8 text-[#050505]/50 font-medium">
           All rights reserved.
        </div>

      </div>
    </footer>
  );
}
