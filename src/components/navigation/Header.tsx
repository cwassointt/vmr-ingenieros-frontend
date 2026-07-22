import { Menu, X } from "lucide-react";
import type { HeaderProps } from "@/components/shared/types";

export default function Header({ nav, menuOpen, onNavigate, onToggleMenu }: HeaderProps) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 h-16 flex items-center justify-between">
        {/* LOGO PNG Y NOMBRE DE LA EMPRESA */}
        <button
          onClick={() => onNavigate("inicio")}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img
            src="/marquinalogo.png"
            alt="Logo Grupo VMR Ingenieros"
            className="h-9 w-auto object-contain"
          />
          <div className="leading-tight text-left">
            <div className="font-semibold text-[13px] tracking-tight text-foreground">
              Grupo VMR
            </div>
            <div className="hidden sm:block text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-medium">
              Ingenieros EIRL
            </div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => onNavigate(n.id)}
              className="text-[13px] font-medium text-foreground/70 hover:text-foreground px-3 py-2 transition-colors"
            >
              {n.label}
            </button>
          ))}
          <div className="w-px h-5 bg-border mx-3" />
          <button
            onClick={() => onNavigate("contacto")}
            className="bg-primary text-primary-foreground font-medium text-[13px] px-4 py-2 hover:brightness-110 transition"
          >
            Cotizar
          </button>
        </nav>

        <button className="lg:hidden text-foreground" onClick={onToggleMenu} aria-label="Menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-6 py-2 flex flex-col">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => onNavigate(n.id)}
                className="text-left py-3 text-foreground/80 text-sm border-b border-border last:border-0"
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
