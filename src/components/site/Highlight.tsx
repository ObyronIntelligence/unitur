import { whatsappLink } from "@/lib/contact";
import aparecidaPhoto from "@/assets/aparecida.jpg";
import { Sparkles, MapPin, Calendar } from "lucide-react";

export const Highlight = () => {
  return (
    <section id="destaque" className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="container relative">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-5 h-5 text-primary" strokeWidth={1.5} />
          <div className="text-xs uppercase tracking-[0.4em] text-primary font-semibold">
            Destaque da temporada
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-1 lg:order-1">
            <div className="absolute -top-4 -left-4 w-full h-full border border-primary/40" />
            <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden bg-card">
              <img
                src={aparecidaPhoto}
                alt="Santuário Nacional de Aparecida do Norte — viagem em destaque Unitur"
                className="absolute inset-0 w-full h-full object-cover contrast-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-2">
                  <MapPin className="w-3 h-3" />
                  Aparecida do Norte · SP
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold leading-tight">
                  Santuário Nacional
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 hidden md:block">
              <Calendar className="w-7 h-7 mb-2" strokeWidth={1.5} />
              <div className="font-display text-xl font-bold leading-none">Datas abertas</div>
              <div className="text-[10px] uppercase tracking-widest mt-1">reserve já</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-balance">
              Uma viagem que <span className="italic text-primary red-text-glow">toca a alma.</span>
            </h2>

            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p className="text-foreground text-xl md:text-2xl font-medium">
                Aparecida do Norte te espera — e nós te levamos até lá.
              </p>
              <p>
                Imagine acordar cedo, subir na van ao lado de pessoas queridas e seguir tranquilo por uma estrada
                cuidadosamente planejada até <span className="text-foreground font-semibold">a maior basílica
                mariana do mundo</span>. Sem dor de cabeça com rota, estacionamento ou cansaço ao volante.
              </p>
              <p>
                Excursão em grupo ou fretamento exclusivo para sua família, paróquia ou amigos. Saída de
                Itapetininga e região, com paradas estratégicas, conforto premium e a tranquilidade de viajar com
                quem entende de estrada.
              </p>
              <p className="text-primary font-semibold italic">
                Fé, paisagem e memórias — em uma viagem só.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink("Olá Marcos! Quero saber mais sobre a viagem para Aparecida do Norte.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 font-semibold transition-all hover:shadow-red hover:-translate-y-0.5"
              >
                Reservar minha vaga
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
              <a
                href={whatsappLink("Olá Marcos! Quero fretar uma van para Aparecida do Norte.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-border hover:border-primary text-foreground px-8 py-4 font-semibold transition-all"
              >
                Fretar para meu grupo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
