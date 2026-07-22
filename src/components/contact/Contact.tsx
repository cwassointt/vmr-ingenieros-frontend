import type { ContactProps } from "@/components/shared/types";
import { ArrowRight } from "lucide-react";

export default function Contact({ contacts }: ContactProps) {
  return (
    <section id="contacto" className="bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-3">04 / Contacto</div>
          <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.02em]">
            Dispuestos a realizar los trabajos que ustedes requieran,
            <span className="text-primary"> en el momento que lo necesiten.</span>
          </h2>
          <p className="mt-6 text-background/60 max-w-lg leading-relaxed text-sm">Escríbanos o llámenos. Nuestro equipo técnico responde las 24 horas, incluyendo domingos y feriados.</p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="border-t border-background/15">
            {contacts.map((c) => {
              const Tag: any = c.href ? "a" : "div";
              return (
                <Tag key={c.label} {...(c.href ? { href: c.href } : {})} className="flex items-center gap-5 py-6 border-b border-background/15 group hover:text-primary transition-colors">
                  <div className="h-10 w-10 grid place-items-center border border-background/25 shrink-0 group-hover:border-primary transition-colors">
                    <c.icon size={16} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-background/50 mb-1">{c.label}</div>
                    <div className="font-medium text-base break-words">{c.value}</div>
                  </div>
                  <ArrowRight size={16} className="text-background/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Tag>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto max-w-[1400px] px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-background/50">
          <div>© {new Date().getFullYear()} Grupo VMR Ingenieros EIRL</div>
          <div>Lima · Perú</div>
        </div>
      </div>
    </section>
  );
}

