import { Plane, Users, GraduationCap } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

const services = [
  {
    icon: Plane,
    title: "Transfer aeroporto",
    desc: "Embarques pontuais para Guarulhos, Viracopos e Congonhas. Conforto e tranquilidade até o portão.",
    cta: "Olá Marcos! Quero um orçamento de transfer aeroporto.",
  },
  {
    icon: Users,
    title: "Fretamento de grupo",
    desc: "Excursões, eventos corporativos, viagens de família. Vans equipadas para grupos pequenos e médios.",
    cta: "Olá Marcos! Quero contratar um fretamento.",
  },
  {
    icon: GraduationCap,
    title: "Viagens sob demanda",
    desc: "Roteiros personalizados em todo o estado de São Paulo. Você define o destino, nós cuidamos do trajeto.",
    cta: "Olá Marcos! Quero uma viagem personalizada.",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="relative py-24 md:py-40 bg-card/30 border-y border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-4">
              03 — Além do dia a dia
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-balance">
              Mobilidade para <span className="text-primary">cada destino.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Mais que transporte universitário — soluções completas para quem precisa
            chegar com segurança, em qualquer lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-background p-8 md:p-10 hover:bg-card transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-primary transition-all duration-500" />

              <s.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />

              <h3 className="font-display text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 min-h-[5rem]">{s.desc}</p>

              <a
                href={whatsappLink(s.cta)}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors"
              >
                Solicitar orçamento
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
