import { whatsappLink } from "@/lib/contact";
import { User } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre" className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-full h-full border border-primary/40" />
            <div className="relative aspect-[4/5] overflow-hidden bg-card flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
              <User className="w-40 h-40 text-primary/60" strokeWidth={1} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs uppercase tracking-widest text-primary mb-1">Fundador & motorista</div>
                <div className="font-display text-3xl font-bold">Marcos</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 hidden md:block">
              <div className="font-display text-4xl font-bold leading-none">10+</div>
              <div className="text-xs uppercase tracking-widest mt-1">anos de estrada</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-4">
              01 — Sobre
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-balance">
              A pessoa <span className="italic text-primary">por trás</span> do volante.
            </h2>

            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Marcos não é apenas um motorista — é o profissional que sua família espera quando
                você sobe na van todos os dias. Há mais de uma década percorrendo as estradas entre
                Itapetininga e Sorocaba, ele construiu a Unitur sobre três valores inegociáveis.
              </p>
              <p className="text-foreground">
                Pontualidade. Segurança. Respeito.
              </p>
              <p>
                Cada viagem é planejada com atenção: veículo revisado, rota estudada, horário
                cumprido. Estudantes chegam tranquilos para a aula. Pais dormem em paz.
                Essa é a diferença que se sente em cada quilômetro.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { k: "CNH", v: "Profissional" },
                { k: "Veículo", v: "Revisado mensal" },
                { k: "Documentação", v: "100% regular" },
                { k: "Atendimento", v: "Pessoal" },
              ].map((item) => (
                <div key={item.k} className="border-l-2 border-border hover:border-primary transition-colors pl-4 py-1">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{item.k}</div>
                  <div className="font-semibold">{item.v}</div>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink("Olá Marcos! Gostaria de conversar sobre o transporte da Unitur.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 mt-10 text-primary font-semibold border-b border-primary pb-1 hover:gap-4 transition-all"
            >
              Conversar com Marcos →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
