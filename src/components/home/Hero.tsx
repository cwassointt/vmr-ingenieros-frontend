import type { HeroProps } from "@/components/shared/types";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="inicio" className="relative pt-16 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-12 min-h-[calc(100vh-4rem)]">
        <div className="lg:col-span-7 flex flex-col justify-center py-20 lg:py-28 lg:pr-12 lg:border-r lg:border-border">
          <div className="flex items-center gap-3 mb-8 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-8 bg-primary" />
            <span>Est. 1987 · Lima, Perú</span>
          </div>
          <h1 className="font-semibold text-[2.25rem] sm:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-[-0.03em] text-foreground">
            Ingeniería y Metalmecánica de <span className="text-primary">Precisión</span>
            <br />
            para el Sector Minero e Industrial.
          </h1>
          <p className="mt-8 text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Fabricación, maquinado, mantenimiento y venta de equipos repotenciados. 39 años de
            experiencia respaldan nuestra calidad.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate("servicios")}
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium text-sm px-5 py-3 hover:brightness-110 transition"
            >
              Ver Servicios
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate("contacto")}
              className="inline-flex items-center gap-2 border border-border text-foreground font-medium text-sm px-5 py-3 hover:border-foreground transition"
            >
              Contactar 24/7
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { n: "40+", l: "Años" },
              { n: "24/7", l: "Atención" },
              { n: "100%", l: "Garantía" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  {s.l}
                </div>
                <div className="font-semibold text-3xl text-foreground tracking-tight">{s.n}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative border-t lg:border-t-0 border-border">
          <div className="lg:absolute lg:inset-0 h-64 lg:h-auto">
            <img
              src={heroImg}
              alt="Taller de metalmecánica Grupo VMR"
              width={1200}
              height={1600}
              className="w-full h-full object-cover grayscale contrast-110"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/90 backdrop-blur px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-foreground">
              <span className="h-1.5 w-1.5 bg-primary rounded-full" />
              Taller · Lima
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
