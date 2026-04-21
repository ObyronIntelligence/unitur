import { Marquee } from "./Marquee";

export const Routes = () => {
  const routes = [
    {
      tag: "Manhã",
      uni: "UNISO",
      city: "Sorocaba",
      depart: "05:30",
      arrive: "06:45",
      back: "12:00",
      days: "Seg — Sex",
    },
    {
      tag: "Noite",
      uni: "UNIP",
      city: "Sorocaba",
      depart: "17:30",
      arrive: "18:45",
      back: "23:00",
      days: "Seg — Sex",
    },
  ];

  return (
    <section id="rotas" className="relative py-24 md:py-40 overflow-hidden">
      <Marquee />

      <div className="container relative">
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-4">
            02 — Rotas diárias
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-balance">
            Sua faculdade, todos os dias, no horário certo.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Operação fixa entre Itapetininga e Sorocaba para estudantes da UNISO e UNIP.
            Saídas e chegadas planejadas para a sua agenda acadêmica.
          </p>
        </div>

        {/* Animated route line */}
        <div className="relative mb-16 hidden md:block">
          <div className="flex items-center justify-between text-sm">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Origem</div>
              <div className="font-display text-2xl font-bold">Itapetininga</div>
            </div>
            <div className="flex-1 mx-8 relative h-px">
              <svg className="absolute inset-0 w-full h-px overflow-visible" preserveAspectRatio="none">
                <line
                  x1="0" y1="0" x2="100%" y2="0"
                  stroke="hsl(var(--border))"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <line
                  x1="0" y1="0" x2="100%" y2="0"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  className="animate-dash"
                />
              </svg>
              {/* Moving van dot */}
              <div className="absolute top-1/2 -translate-y-1/2 animate-drive">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary blur-md" />
                  <div className="relative w-3 h-3 bg-primary rounded-full" />
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Destino</div>
              <div className="font-display text-2xl font-bold">Sorocaba</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {routes.map((r, i) => (
            <div
              key={r.uni}
              className="group relative bg-card border border-border p-8 md:p-10 hover:border-primary transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/0 group-hover:bg-primary/10 blur-3xl transition-all duration-700" />

              <div className="relative">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs uppercase tracking-widest font-semibold mb-4">
                      {r.tag}
                    </div>
                    <div className="font-display text-5xl md:text-6xl font-bold">{r.uni}</div>
                    <div className="text-muted-foreground mt-2">{r.city} · {r.days}</div>
                  </div>
                  <div className="font-display text-6xl text-border font-bold">0{i + 1}</div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Saída</div>
                    <div className="font-display text-xl font-bold">{r.depart}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Chegada</div>
                    <div className="font-display text-xl font-bold text-primary">{r.arrive}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Retorno</div>
                    <div className="font-display text-xl font-bold">{r.back}</div>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground mt-6 italic">
                  * Horários aproximados. Pontos de embarque combinados via WhatsApp.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
