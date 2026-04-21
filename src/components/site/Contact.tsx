import { whatsappLink, phoneDisplay } from "@/lib/contact";
import { MessageCircle, MapPin, Clock, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-6">
            06 — Embarque agora
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-balance leading-[0.95]">
            Pronto para <br />
            <span className="text-primary red-text-glow italic">subir na van?</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Fale direto com Marcos pelo WhatsApp. Resposta rápida, atendimento pessoal,
            sem burocracia.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block bg-primary hover:bg-primary-glow text-primary-foreground p-8 md:p-12 transition-all hover:shadow-red overflow-hidden"
          >
            <div className="absolute inset-0 bg-noise opacity-20" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-foreground/10 border border-primary-foreground/30 flex items-center justify-center animate-pulse-red">
                  <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-widest opacity-70 mb-1">WhatsApp · Marcos</div>
                  <div className="font-display text-2xl md:text-4xl font-bold">{phoneDisplay}</div>
                </div>
              </div>
              <div className="font-semibold text-sm uppercase tracking-widest opacity-90 group-hover:translate-x-2 transition-transform">
                Iniciar conversa →
              </div>
            </div>
          </a>

          <div className="grid md:grid-cols-3 gap-px mt-px bg-border">
            <div className="bg-card p-6 flex items-center gap-4">
              <MapPin className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Base</div>
                <div className="font-semibold text-sm">Itapetininga, SP</div>
              </div>
            </div>
            <div className="bg-card p-6 flex items-center gap-4">
              <Clock className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Resposta</div>
                <div className="font-semibold text-sm">Em até 30 minutos</div>
              </div>
            </div>
            <a
              href={`tel:+5515997720076`}
              className="bg-card p-6 flex items-center gap-4 hover:bg-secondary transition-colors"
            >
              <Phone className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Ligar</div>
                <div className="font-semibold text-sm">{phoneDisplay}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
