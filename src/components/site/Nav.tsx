import { phoneDisplay, instagramUnitur } from "@/lib/contact";
import { MessageCircle, Menu, X, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { WhatsAppPicker } from "./WhatsAppPicker";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#van", label: "A Van" },
    { href: "#aeroporto", label: "Aeroporto" },
    { href: "#rotas", label: "Rotas" },
    { href: "#destaque", label: "Destaque" },
    { href: "#servicos", label: "Serviços" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <a
          href="#top"
          className="flex items-center shrink-0"
          aria-label="Unitur - Fretamento e Turismo"
        >
          <span className="font-display font-bold tracking-tight text-foreground text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap">
            UNITUR <span className="text-primary">·</span> FRETAMENTO E TURISMO
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={instagramUnitur}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Unitur"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <button
            type="button"
            onClick={() => setPickerOpen(true)}
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-glow text-primary-foreground px-5 py-2.5 text-sm font-semibold transition-all hover:shadow-red"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground py-2 border-b border-border"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setPickerOpen(true);
              }}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 font-semibold mt-2"
            >
              <MessageCircle className="w-5 h-5" />
              {phoneDisplay}
            </button>
            <a
              href={instagramUnitur}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-5 py-3 font-semibold"
            >
              <Instagram className="w-5 h-5" />
              @marcos.unitur
            </a>
          </div>
        </div>
      )}
      <WhatsAppPicker open={pickerOpen} onOpenChange={setPickerOpen} />
    </header>
  );
};
