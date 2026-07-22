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
  ChevronRight,
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
  },
  {
    img: project2,
    title: "Reparación Chancadora Symons 4 1/4\"",
    client: "Super Concreto",
    tag: "Reparación",
  },
  {
    img: project3,
    title: "Planta de Cianuración y Bombas SRL",
    client: "Minera Mollehuaca",
    tag: "Montaje",
  },
  {
    img: project4,
    title: "Piñón para Chancadora",
    client: "Municipalidad de Tacna",
    tag: "Maquinado",
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
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50 bg-primary/95 backdrop-blur border-b border-primary/40">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => scrollTo("inicio")}
            className="flex items-center gap-3 text-primary-foreground"
          >
            <div className="grid place-items-center h-10 w-10 bg-accent text-accent-foreground font-display font-bold text-lg">
              VMR
            </div>
            <div className="hidden sm:block leading-tight text-left">
              <div className="font-display font-bold text-base tracking-wide">GRUPO VMR</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">
                Ingenieros EIRL
              </div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm uppercase tracking-wider font-medium text-primary-foreground/80 hover:text-accent transition-colors"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contacto")}
              className="bg-accent text-accent-foreground font-semibold text-sm uppercase tracking-wider px-5 py-2.5 hover:brightness-110 transition"
            >
              Cotizar
            </button>
          </nav>

          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="text-left py-3 text-primary-foreground/90 uppercase text-sm tracking-wider border-b border-primary-foreground/10"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Taller de metalmecánica Grupo VMR"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 text-primary-foreground">
            <div className="inline-flex items-center gap-2 border-l-2 border-accent pl-3 mb-8">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                30 años · Perú
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
              Ingeniería y Metalmecánica de{" "}
              <span className="text-accent">Precisión</span> para el Sector Minero e Industrial.
            </h1>
            <p className="mt-8 text-base sm:text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
              Fabricación, maquinado, mantenimiento y venta de equipos repotenciados.
              30 años de experiencia respaldan nuestra calidad.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("servicios")}
                className="group inline-flex items-center gap-3 bg-accent text-accent-foreground font-semibold uppercase tracking-wider text-sm px-7 py-4 hover:brightness-110 transition"
              >
                Ver Servicios
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("contacto")}
                className="inline-flex items-center gap-3 border-2 border-primary-foreground/40 text-primary-foreground font-semibold uppercase tracking-wider text-sm px-7 py-4 hover:bg-primary-foreground hover:text-primary transition"
              >
                Contactar 24/7
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { n: "30+", l: "Años" },
                { n: "24/7", l: "Atención" },
                { n: "100%", l: "Garantía" },
              ].map((s) => (
                <div key={s.l} className="border-t border-primary-foreground/20 pt-4">
                  <div className="font-display font-bold text-3xl text-accent">{s.n}</div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/60 mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">
              ¿Por qué elegirnos?
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
              Respaldo técnico, capacidad de fabricación y disponibilidad total.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                icon: Award,
                title: "Experiencia",
                text: "Más de 30 años sirviendo al sector minero e industrial peruano con soluciones probadas en campo.",
              },
              {
                icon: Clock,
                title: "Disponibilidad 24/7",
                text: "Atención permanente, incluyendo domingos y feriados. Respondemos cuando la operación no puede esperar.",
              },
              {
                icon: Factory,
                title: "Capacidad Propia",
                text: "Maestranza propia e importación directa a través de nuestra alianza con CIA HEFERCO INTERNATIONAL (EE.UU.).",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-background p-10 group hover:bg-secondary transition-colors"
              >
                <div className="h-14 w-14 grid place-items-center bg-primary text-primary-foreground mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <c.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-xl text-primary mb-3">
                  {c.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">
              Nuestros Servicios
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
              Cuatro líneas de servicio, una sola exigencia: precisión.
            </h2>
          </div>

          {/* Tabs */}
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 flex lg:flex-col gap-px bg-border overflow-x-auto lg:overflow-visible">
              {SERVICES.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-4 px-5 py-5 text-left bg-background transition-colors shrink-0 lg:w-full ${
                    activeTab === i
                      ? "border-l-4 border-accent"
                      : "border-l-4 border-transparent hover:bg-secondary"
                  }`}
                >
                  <s.icon
                    size={22}
                    className={activeTab === i ? "text-accent" : "text-primary"}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`font-display font-semibold text-sm sm:text-base ${
                      activeTab === i ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 bg-background p-8 lg:p-12">
              <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-4">
                0{activeTab + 1} / 04
              </div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-primary mb-8">
                {SERVICES[activeTab].title}
              </h3>
              <ul className="space-y-4">
                {SERVICES[activeTab].items.map((it) => (
                  <li key={it} className="flex items-start gap-3 border-b border-border pb-4">
                    <ChevronRight size={18} className="text-accent shrink-0 mt-1" />
                    <span className="text-foreground/80">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">
                Casos de Éxito
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
                Proyectos destacados.
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((p) => (
              <article key={p.title} className="group">
                <div className="relative overflow-hidden aspect-[4/5] bg-secondary">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] uppercase tracking-widest font-bold px-2.5 py-1">
                    {p.tag}
                  </div>
                </div>
                <div className="pt-5">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {p.client}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-primary leading-snug">
                    {p.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">
              Contacto
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Dispuestos a realizar los trabajos que ustedes requieran,
              <span className="text-accent"> en el momento que lo necesiten.</span>
            </h2>
            <p className="mt-6 text-primary-foreground/70 max-w-lg leading-relaxed">
              Escríbanos o llámenos. Nuestro equipo técnico responde las 24 horas,
              incluyendo domingos y feriados.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-px bg-primary-foreground/10">
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
                    className="flex items-start gap-5 bg-primary p-6 hover:bg-primary/60 transition-colors"
                  >
                    <div className="h-12 w-12 grid place-items-center bg-accent text-accent-foreground shrink-0">
                      <c.icon size={20} strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60 mb-1">
                        {c.label}
                      </div>
                      <div className="font-display font-semibold text-lg break-words">
                        {c.value}
                      </div>
                    </div>
                  </Tag>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10">
          <div className="mx-auto max-w-7xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-widest text-primary-foreground/50">
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
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full grid place-items-center shadow-xl text-white transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle size={26} strokeWidth={2} fill="currentColor" fillOpacity={0.15} />
      </a>
    </div>
  );
}
