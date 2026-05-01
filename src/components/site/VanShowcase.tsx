import { whatsappLink } from "@/lib/contact";
import vanPhoto from "@/assets/van-unitur.jpg";
import { Wifi } from "lucide-react";

export const VanShowcase = () => {
  return (
    <section id="van" className="relative py-24 md:py-40 overflow-hidden bg-card/30 border-y border-border">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-4">
              02 — A Van
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-balance">
              Mais que um veículo. <span className="italic text-primary">Seu espaço de confiança.</span>
            </h2>

            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                A frota da Unitur é composta por <span className="text-foreground font-semibold">Mercedes-Benz
                Sprinter</span> — referência mundial em transporte executivo. Silenciosa, espaçosa e equipada para
                transformar cada quilômetro em uma experiência confortável.
              </p>
              <p className="text-foreground">
                Wi-Fi 4G a bordo. Ar-condicionado. Poltronas amplas. Documentação ARTESP e EMTU em dia.
              </p>
              <p>
                Cada detalhe foi pensado para que você possa estudar, descansar ou simplesmente relaxar enquanto a
                gente cuida da estrada. Manutenção rigorosa, limpeza diária e revisões periódicas — porque sua segurança
                não é negociável.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { k: "Modelo", v: "Sprinter 417 CDI" },
                { k: "Conectividade", v: "Wi-Fi 4G grátis" },
                { k: "Conforto", v: "Ar-condicionado" },
                { k: "Regulamentação", v: "ARTESP · EMTU" },
              ].map((item) => (
                <div key={item.k} className="border-l-2 border-border hover:border-primary transition-colors pl-4 py-1">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{item.k}</div>
                  <div className="font-semibold">{item.v}</div>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink("Olá Marcos! Quero saber mais sobre a van da Unitur.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 text-primary font-semibold border-b border-primary pb-1 hover:gap-4 transition-all"
            >
              Conhecer a van de perto →
            </a>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -top-4 -right-4 w-full h-full border border-primary/40" />
            <div className="relative aspect-[4/5] overflow-hidden bg-card">
              <img
                src={vanPhoto}
                alt="Van Mercedes-Benz Sprinter da Unitur — frota oficial"
                className="absolute inset-0 w-full h-full object-cover contrast-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs uppercase tracking-widest text-primary mb-1">Frota oficial</div>
                <div className="font-display text-3xl font-bold">Van Unitur</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 hidden md:block">
              <Wifi className="w-7 h-7 mb-2" strokeWidth={1.5} />
              <div className="text-xs uppercase tracking-widest">4G a bordo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
