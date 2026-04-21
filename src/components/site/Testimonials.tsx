import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Faço UNISO há dois anos com o Marcos. Nunca atrasei uma aula. Confiança total.",
    name: "Larissa M.",
    role: "Estudante UNISO",
  },
  {
    quote: "Como mãe, o que mais me importa é segurança. A Unitur me deu tranquilidade desde o primeiro dia.",
    name: "Patrícia S.",
    role: "Mãe de aluno",
  },
  {
    quote: "Profissionalismo do começo ao fim. Van impecável, motorista atencioso. Recomendo demais.",
    name: "Rafael C.",
    role: "Estudante UNIP",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-24 md:py-40 bg-card/30 border-y border-border overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-4">
            05 — Quem viaja com a gente
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-balance">
            Confiança que <span className="text-primary">se ouve</span> de quem já viajou.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="relative bg-background border border-border p-8 hover:border-primary transition-all duration-500 group"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-6 group-hover:text-primary transition-colors" strokeWidth={1.5} />
              <blockquote className="text-foreground text-lg leading-relaxed mb-8">
                "{t.quote}"
              </blockquote>
              <figcaption className="border-t border-border pt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
