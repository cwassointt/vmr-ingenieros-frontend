import type { ServicesProps } from "@/components/shared/types";
import { Plus } from "lucide-react";

export default function Services({ services, activeTab, setActiveTab }: ServicesProps) {
  return (
    <section id="servicios" className="bg-surface border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-3">02 / Servicios</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.1] tracking-[-0.02em] max-w-3xl">
              Cuatro líneas de servicio,
              <br />
              una sola exigencia: precisión.
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 border border-border bg-background">
          <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-visible lg:border-r border-border">
            {services.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-3 px-5 py-4 lg:py-5 text-left transition-colors shrink-0 lg:w-full border-b border-border last:border-b-0 ${
                  activeTab === i ? "bg-foreground text-background" : "bg-background text-foreground hover:bg-surface"
                }`}
              >
                <span className={`text-[10px] font-mono tracking-widest ${activeTab === i ? "text-background/60" : "text-muted-foreground"}`}>0{i + 1}</span>
                <s.icon size={16} strokeWidth={1.5} />
                <span className="font-medium text-sm">{s.title}</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 p-8 lg:p-12">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-6">
              <span>0{activeTab + 1} / 04</span>
              <span className="h-px w-8 bg-primary" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl text-foreground mb-10 tracking-tight">{services[activeTab].title}</h3>
            <ul className="grid sm:grid-cols-2 gap-x-8">
              {services[activeTab].items.map((it) => (
                <li key={it} className="flex items-start gap-3 border-t border-border py-4 text-sm text-foreground/80">
                  <Plus size={14} className="text-primary shrink-0 mt-1" strokeWidth={2} />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

