import { Shield, Clock, Heart, Sparkles } from "lucide-react";

const items = [
  {
    icon: Shield,
    n: "01",
    title: "Segurança em primeiro lugar",
    desc: "Veículo com manutenção em dia, documentação regular e direção defensiva. Sua família pode confiar.",
  },
  {
    icon: Clock,
    n: "02",
    title: "Pontualidade",
    desc: "Horários cumpridos com precisão. Você nunca chega atrasado para a prova ou para a aula.",
  },
  {
    icon: Heart,
    n: "03",
    title: "Atendimento pessoal",
    desc: "Falando direto com Marcos, sem call center. Cada passageiro é tratado como pessoa, não número.",
  },
  {
    icon: Sparkles,
    n: "04",
    title: "Conforto premium",
    desc: "Van climatizada, espaço confortável e ambiente tranquilo para descansar ou estudar no caminho.",
  },
];

export const Differentials = () => {
  return (
    <section id="diferenciais" aria-labelledby="diferenciais-title" className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <div className="text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-4">
              06 — Por que Unitur?
            </div>
            <h2 id="diferenciais-title" className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-balance">
              Quatro razões
              <br />
              <span className="text-primary italic">inegociáveis.</span>
            </h2>
            <p className="text-muted-foreground text-lg">Não é só sobre chegar — é sobre como você chega.</p>
          </div>

          <div className="lg:col-span-8 space-y-px bg-border">
            {items.map((it) => (
              <div key={it.n} className="group bg-background hover:bg-card transition-all duration-500 p-6 md:p-10">
                <div className="flex gap-6 md:gap-10">
                  <div className="font-display text-4xl md:text-5xl font-bold text-border group-hover:text-primary transition-colors duration-500">
                    {it.n}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <it.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      <h3 className="font-display text-xl md:text-2xl font-bold">{it.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
