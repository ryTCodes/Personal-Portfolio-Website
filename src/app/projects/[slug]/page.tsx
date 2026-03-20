import { getProjectBySlug, projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Pre-render static parameters iteratively across all projects during Next.js build
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) return notFound();

  return (
    <main className="bg-[#050505] min-h-screen text-[#f5f5f5] pt-32 selection:bg-[#ccff00] selection:text-[#050505] relative z-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-24">
        
        <Link href="/#projects" className="inline-flex items-center gap-4 text-[#a1a1aa] hover:text-[#ccff00] transition-colors mb-16 md:mb-32 uppercase tracking-widest text-xs md:text-sm font-semibold group">
          <div className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center group-hover:border-[#ccff00] transition-colors">
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </div>
          Back to Works
        </Link>
        
        <h1 className="text-[14vw] md:text-[8vw] leading-[0.85] display-font font-black tracking-tighter uppercase mb-12 mix-blend-difference">
          {project.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24 border-t border-[#1f1f1f] pt-12 md:pt-20">
          <div className="lg:col-span-8">
            <p className="text-2xl md:text-4xl text-[#a1a1aa] font-light leading-relaxed max-w-4xl">
              {project.description}
            </p>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-10 md:gap-12 text-sm uppercase tracking-widest font-semibold text-[#a1a1aa]">
            <div>
              <span className="text-[#555] block mb-3">Role</span>
              <span className="text-[#f5f5f5] text-base">{project.role}</span>
            </div>
            <div>
              <span className="text-[#555] block mb-3">Year</span>
              <span className="text-[#f5f5f5] text-base font-mono">{project.year}</span>
            </div>
            <div>
              <span className="text-[#555] block mb-3">Core Stack</span>
              <ul className="flex flex-col gap-3 text-[#f5f5f5] text-base">
                {project.tech.map((t) => (
                  <li key={t} className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 bg-[#ccff00] rounded-full" />
                     {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full aspect-video rounded-[2rem] md:rounded-[4rem] overflow-hidden relative shadow-2xl group">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
          />
          <div className="absolute inset-0 bg-[#050505]/20 mix-blend-overlay pointer-events-none" />
        </div>
      </div>
    </main>
  );
}
