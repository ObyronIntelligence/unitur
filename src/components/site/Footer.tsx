import { phoneDisplay, whatsappLink, instagramUnitur, instagramObyron } from "@/lib/contact";
import { Instagram, MessageCircle } from "lucide-react";

const obyronInstagram = "https://www.instagram.com/obyronintelligence/";
const obyronWhatsapp = "https://wa.me/5500000000000?text=Ol%C3%A1%20Obyron%21%20Tenho%20interesse%20em%20um%20site%20para%20minha%20empresa.";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-display font-bold text-2xl">
              UNITUR<span className="text-primary">.</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Mobilidade universitária premium entre Itapetininga e Sorocaba.
              Operada pessoalmente por Marcos.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">
              Contato
            </div>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-sm font-medium">{phoneDisplay}</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span>
            </a>
            <a
              href={instagramUnitur}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-sm font-medium">Siga a Unitur no Instagram</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span>
            </a>
          </div>

          {/* Routes / Base */}
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">
              Operação
            </div>
            <div className="text-sm text-muted-foreground">Itapetininga ↔ Sorocaba</div>
            <div className="text-sm text-muted-foreground">UNISO · UNIP · Seg — Sex</div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Unitur · Marcos · Todos os direitos reservados
          </div>

          {/* Obyron signature */}
          <div className="flex flex-col md:items-end gap-3">
            <p className="text-muted-foreground max-w-xs md:text-right leading-relaxed text-sm font-bold font-sans mx-0 px-0 py-0">
              Deseja um site para sua empresa?<br />
              Entre em contato. Uma criação de{" "}
              <span className="text-foreground/80 font-semibold">Obyron</span>.
            </p>
            <div className="flex items-center gap-3 md:justify-end">
              <a
                href={obyronWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Obyron"
                className="group inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>WhatsApp</span>
              </a>
              <span className="h-3 w-px bg-border" />
              <a
                href={obyronInstagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Obyron Intelligence"
                className="group inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
