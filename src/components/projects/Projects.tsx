import type { ProjectsProps } from "@/components/shared/types";

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="proyectos" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-3">03 / Proyectos</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.1] tracking-[-0.02em]">Casos de éxito.</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
          {projects.map((p) => (
            <article key={p.title} className="group border-r border-b border-border bg-background">
              <div className="relative overflow-hidden aspect-[4/5] bg-surface">
                <img src={p.img} alt={p.title} width={800} height={1000} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute top-3 left-3 bg-background text-foreground text-[10px] font-mono uppercase tracking-[0.14em] px-2 py-1">{p.tag}</div>
              </div>
              <div className="p-5 border-t border-border">
                <div className="flex items-center justify-between mb-2 text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                  <span>{p.code}</span>
                  <span>{p.client}</span>
                </div>
                <h3 className="font-semibold text-[15px] text-foreground leading-snug tracking-tight">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

