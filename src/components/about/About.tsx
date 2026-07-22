import { Award, Clock, Factory } from "lucide-react";

export default function About() {
  return (
    <section id="nosotros" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-3">01 / Nosotros</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.1] tracking-[-0.02em] max-w-3xl">
              Respaldo técnico, capacidad de fabricación y disponibilidad total.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 border-t border-border">
          {[
            {
              icon: Award,
              title: "Experiencia",
              text: "Más de 30 años sirviendo al sector minero e industrial peruano con soluciones probadas en campo.",
              n: "01",
            },
            {
              icon: Clock,
              title: "Disponibilidad 24/7",
              text: "Atención permanente, incluyendo domingos y feriados. Respondemos cuando la operación no puede esperar.",
              n: "02",
            },
            {
              icon: Factory,
              title: "Capacidad Propia",
              text: "Maestranza propia e importación directa a través de nuestra alianza con CIA HEFERCO INTERNATIONAL (EE.UU.).",
              n: "03",
            },
          ].map((c) => (
            <div key={c.title} className="p-8 lg:p-10 border-b md:border-b-0 md:border-r border-border last:border-r-0 group">
              <div className="flex items-start justify-between mb-10">
                <div className="h-10 w-10 grid place-items-center border border-border text-primary group-hover:border-primary transition-colors">
                  <c.icon size={18} strokeWidth={1.25} />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground tracking-widest">{c.n}</span>
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3 tracking-tight">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

