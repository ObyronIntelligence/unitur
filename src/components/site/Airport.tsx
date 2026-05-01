import { whatsappLink } from "@/lib/contact";
import airportPhoto from "@/assets/airport.jpg";
import { Plane } from "lucide-react";

export const Airport = () => {
  return (
    <section id="aeroporto" className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-1">
            <div className="text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-4">
              03 — Aeroporto
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-balance">
              Voos com hora marcada, <span className="italic text-primary">traslado sem stress.</span>
            </h2>

            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                A Unitur leva você até os principais aeroportos de São Paulo —{" "}
                <span className="text-foreground font-semibold">Guarulhos, Congonhas e Viracopos</span> — com a mesma
                pontualidade que define cada viagem nossa. Sem app, sem trânsito imprevisto, sem ansiedade na hora do
                check-in.
              </p>
              <p className="text-foreground">Saída direto da sua porta. Bagagem segura. Horário planejado.</p>
              <p>
                Ideal para quem viaja a trabalho, sai de férias em família ou precisa pegar um voo de madrugada.
                Acompanhamento pessoal do Marcos do início ao fim — você embarca tranquilo sabendo que cada minuto foi
                pensado.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { k: "Destinos", v: "GRU · CGH · VCP" },
                { k: "Atendimento", v: "24h sob agendamento" },
                { k: "Bagagem", v: "Espaço amplo" },
                { k: "Modalidade", v: "Privativo ou compartilhado" },
              ].map((item) => (
                <div key={item.k} className="border-l-2 border-border hover:border-primary transition-colors pl-4 py-1">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{item.k}</div>
                  <div className="font-semibold">{item.v}</div>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink("Olá Marcos! Quero saber mais sobre o traslado para o aeroporto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 text-primary font-semibold border-b border-primary pb-1 hover:gap-4 transition-all"
            >
              Agendar traslado →
            </a>
          </div>

          {/* Image */}
          <div className="relative order-2">
            <div className="absolute -top-4 -right-4 w-full h-full border border-primary/40" />
            <div className="relative aspect-[4/5] overflow-hidden bg-card">
              <img
                src={airportPhoto}
                alt="Avião decolando ao pôr do sol — traslado aeroporto Unitur"
                className="absolute inset-0 w-full h-full object-cover contrast-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs uppercase tracking-widest text-primary mb-1">Traslado premium</div>
                <div className="font-display text-3xl font-bold">GRU · CGH · VCP</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 hidden md:block">
              <Plane className="w-8 h-8 mb-2" strokeWidth={1.5} />
              <div className="text-xs uppercase tracking-widest">Pontualidade garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
