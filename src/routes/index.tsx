import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Award,
  Clock,
  Factory,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Wrench,
  Cog,
  Hammer,
  Building2,
  Plus,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grupo VMR Ingenieros EIRL — Metalmecánica Minera e Industrial" },
      {
        name: "description",
        content:
          "30 años de experiencia en ingeniería, fabricación, maquinado, mantenimiento y venta de equipos para el sector minero e industrial en Perú. Atención 24/7.",
      },
      { property: "og:title", content: "Grupo VMR Ingenieros EIRL" },
      {
        property: "og:description",
        content:
          "Ingeniería y metalmecánica de precisión para el sector minero e industrial. Atención 24/7.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

const SERVICES = [
  {
    icon: Cog,
    title: "Venta de Equipos y Repuestos",
    items: [
      "Winches de arrastre / izaje (Joy, Ingersoll Rand)",
      "Palas Neumáticas y Locomotoras",
      "Chancadoras Cónicas y de Quijadas",
      "Ventiladores industriales",
      "Repuestos Symons, Telsmith, Sandvik",
    ],
  },
  {
    icon: Hammer,
    title: "Fabricación y Maquinado",
    items: [
      "Celdas de flotación, Zarandas, Alimentadores",
      "Molinos de bolas y de barras",
      "Carros mineros y Fajas transportadoras",
      "Ductos y Estructuras metálicas",
    ],
  },
  {
    icon: Wrench,
    title: "Mantenimiento y Reparación",
    items: [
      "Bombas de vacío, agua y relaves",
      "Winches, Reductores, Calderos",
      "Gatas hidráulicas",
      "Alineamiento y nivelación de precisión",
    ],
  },
  {
    icon: Building2,
    title: "Proyectos Integrales",
    items: [
      "Diseño, instalación y puesta en marcha de plantas",
      "Cianuración y plantas de agregados",
      "Ingeniería y asesoramiento técnico",
      "Montaje electromecánico integral",
    ],
  },
];

const PROJECTS = [
  {
    img: project1,
    title: "Carros Mineros V-40",
    client: "Minera Quiruvilca",
    tag: "Fabricación",
    code: "PRJ-001",
  },
  {
    img: project2,
    title: "Reparación Chancadora Symons 4 1/4\"",
    client: "Super Concreto",
    tag: "Reparación",
    code: "PRJ-002",
  },
  {
    img: project3,
    title: "Planta de Cianuración y Bombas SRL",
    client: "Minera Mollehuaca",
    tag: "Montaje",
    code: "PRJ-003",
  },
  {
    img: project4,
    title: "Piñón para Chancadora",
    client: "Municipalidad de Tacna",
    tag: "Maquinado",
    code: "PRJ-004",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("inicio")}
            className="flex items-center gap-3 text-foreground"
          >
            <div className="grid place-items-center h-8 w-8 bg-foreground text-background font-bold text-[13px] tracking-tight">
              V
            </div>
            <div className="leading-tight text-left">
              <div className="font-semibold text-[13px] tracking-tight">Grupo VMR</div>
              <div className="hidden sm:block text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-medium">
                Ingenieros EIRL
              </div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-[13px] font-medium text-foreground/70 hover:text-foreground px-3 py-2 transition-colors"
              >
                {n.label}
              </button>
            ))}
            <div className="w-px h-5 bg-border mx-3" />
            <button
              onClick={() => scrollTo("contacto")}
              className="bg-primary text-primary-foreground font-medium text-[13px] px-4 py-2 hover:brightness-110 transition"
            >
              Cotizar
            </button>
          </nav>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-6 py-2 flex flex-col">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="text-left py-3 text-foreground/80 text-sm border-b border-border last:border-0"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative pt-16 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-12 min-h-[calc(100vh-4rem)]">
          <div className="lg:col-span-7 flex flex-col justify-center py-20 lg:py-28 lg:pr-12 lg:border-r lg:border-border">
            <div className="flex items-center gap-3 mb-8 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" />
              <span>Est. 1994 · Lima, Perú</span>
            </div>
            <h1 className="font-semibold text-[2.25rem] sm:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-[-0.03em] text-foreground">
              Ingeniería y Metalmecánica de{" "}
              <span className="text-primary">Precisión</span>
              <br />
              para el Sector Minero e Industrial.
            </h1>
            <p className="mt-8 text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Fabricación, maquinado, mantenimiento y venta de equipos repotenciados.
              30 años de experiencia respaldan nuestra calidad.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("servicios")}
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium text-sm px-5 py-3 hover:brightness-110 transition"
              >
                Ver Servicios
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("contacto")}
                className="inline-flex items-center gap-2 border border-border text-foreground font-medium text-sm px-5 py-3 hover:border-foreground transition"
              >
                Contactar 24/7
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
              {[
                { n: "30+", l: "Años" },
                { n: "24/7", l: "Atención" },
                { n: "100%", l: "Garantía" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    {s.l}
                  </div>
                  <div className="font-semibold text-3xl text-foreground tracking-tight">
                    {s.n}
                  </div>
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

      {/* NOSOTROS */}
      <section id="nosotros" className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-3">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-3">
                01 / Nosotros
              </div>
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
              <div
                key={c.title}
                className="p-8 lg:p-10 border-b md:border-b-0 md:border-r border-border last:border-r-0 group"
              >
                <div className="flex items-start justify-between mb-10">
                  <div className="h-10 w-10 grid place-items-center border border-border text-primary group-hover:border-primary transition-colors">
                    <c.icon size={18} strokeWidth={1.25} />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground tracking-widest">
                    {c.n}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3 tracking-tight">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="bg-surface border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-3">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-3">
                02 / Servicios
              </div>
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
              {SERVICES.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-3 px-5 py-4 lg:py-5 text-left transition-colors shrink-0 lg:w-full border-b border-border last:border-b-0 ${
                    activeTab === i
                      ? "bg-foreground text-background"
                      : "bg-background text-foreground hover:bg-surface"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono tracking-widest ${
                      activeTab === i ? "text-background/60" : "text-muted-foreground"
                    }`}
                  >
                    0{i + 1}
                  </span>
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
              <h3 className="font-semibold text-2xl lg:text-3xl text-foreground mb-10 tracking-tight">
                {SERVICES[activeTab].title}
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-8">
                {SERVICES[activeTab].items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 border-t border-border py-4 text-sm text-foreground/80"
                  >
                    <Plus size={14} className="text-primary shrink-0 mt-1" strokeWidth={2} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-3">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-3">
                03 / Proyectos
              </div>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.1] tracking-[-0.02em]">
                Casos de éxito.
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="group border-r border-b border-border bg-background"
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-surface">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-background text-foreground text-[10px] font-mono uppercase tracking-[0.14em] px-2 py-1">
                    {p.tag}
                  </div>
                </div>
                <div className="p-5 border-t border-border">
                  <div className="flex items-center justify-between mb-2 text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                    <span>{p.code}</span>
                    <span>{p.client}</span>
                  </div>
                  <h3 className="font-semibold text-[15px] text-foreground leading-snug tracking-tight">
                    {p.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-foreground text-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-3">
              04 / Contacto
            </div>
            <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.02em]">
              Dispuestos a realizar los trabajos que ustedes requieran,
              <span className="text-primary"> en el momento que lo necesiten.</span>
            </h2>
            <p className="mt-6 text-background/60 max-w-lg leading-relaxed text-sm">
              Escríbanos o llámenos. Nuestro equipo técnico responde las 24 horas,
              incluyendo domingos y feriados.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border-t border-background/15">
              {[
                {
                  icon: MapPin,
                  label: "Dirección",
                  value: "Talambo 127, San Miguel — Lima, Perú",
                },
                {
                  icon: Phone,
                  label: "Teléfono",
                  value: "922 286 991",
                  href: "tel:+51922286991",
                },
                {
                  icon: Mail,
                  label: "Correo",
                  value: "grupovmringenieros@gmail.com",
                  href: "mailto:grupovmringenieros@gmail.com",
                },
              ].map((c) => {
                const Tag = c.href ? "a" : "div";
                return (
                  <Tag
                    key={c.label}
                    {...(c.href ? { href: c.href } : {})}
                    className="flex items-center gap-5 py-6 border-b border-background/15 group hover:text-primary transition-colors"
                  >
                    <div className="h-10 w-10 grid place-items-center border border-background/25 shrink-0 group-hover:border-primary transition-colors">
                      <c.icon size={16} strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-background/50 mb-1">
                        {c.label}
                      </div>
                      <div className="font-medium text-base break-words">{c.value}</div>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-background/40 group-hover:text-primary group-hover:translate-x-1 transition-all"
                    />
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

      {/* WhatsApp float */}
      <a
        href="https://wa.me/51922286991"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-12 w-12 grid place-items-center shadow-lg text-white transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle size={22} strokeWidth={2} fill="currentColor" fillOpacity={0.15} />
      </a>
    </div>
  );
}
