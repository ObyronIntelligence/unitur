import heroVan from "@/assets/hero-van.jpg";
import { whatsappLink } from "@/lib/contact";
import { MessageCircle, ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroVan}
          alt="Mercedes-Benz Sprinter 2025 prata da Unitur"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Red glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Live indicator */}
      <div className="absolute top-24 md:top-28 left-6 md:left-12 z-10 flex items-center gap-3 animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
          Operação ativa · Itapetininga ↔ Sorocaba
        </span>
      </div>

      <div className="container relative z-10 pt-24">
        <div className="max-w-4xl">
          <div
            className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary font-semibold mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            — Mobilidade universitária premium
          </div>

          <h1
            className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter mb-8 text-balance animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Pontualidade
            <br />
            <span className="text-primary red-text-glow">é nossa rota.</span>
          </h1>

          <p
            className="text-base md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            Transporte universitário diário, seguro e operado pessoalmente por Marcos.
            Levamos você de Itapetininga a Sorocaba com a confiança que sua rotina exige.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 font-semibold text-base transition-all hover:shadow-red hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
            <a
              href="#rotas"
              className="inline-flex items-center justify-center gap-3 border border-border hover:border-primary text-foreground px-8 py-4 font-semibold text-base transition-all"
            >
              Ver rotas e horários
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-16 md:mt-24 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            {[
              { n: "5★", l: "Avaliação" },
              { n: "5x", l: "Por semana" },
              { n: "100%", l: "Pontualidade" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-primary pl-4">
                <div className="font-display text-3xl md:text-4xl font-bold">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#rotas"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs uppercase tracking-[0.3em]">CONHEÇA </span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
