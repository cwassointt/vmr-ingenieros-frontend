import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import Header from "@/components/navigation/Header";
import Hero from "@/components/home/Hero";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

import { NAV, SERVICES, PROJECTS, CONTACTS } from "@/components/shared/data";

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

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const onNavigate = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header
        nav={NAV}
        menuOpen={menuOpen}
        onNavigate={onNavigate}
        onToggleMenu={() => setMenuOpen((v) => !v)}
      />

      <Hero onNavigate={onNavigate} />

      <About />

      <Services services={SERVICES} activeTab={activeTab} setActiveTab={setActiveTab} />

      <Projects projects={PROJECTS} />

      <Contact contacts={CONTACTS} />

      <WhatsAppFloat />
    </div>
  );
}
