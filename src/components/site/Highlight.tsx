import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/contact";
import aparecidaPhoto from "@/assets/aparecida.jpg";
import aparecida2 from "@/assets/aparecida-2.jpg";
import aparecida3 from "@/assets/aparecida-3.jpg";
import aparecida4 from "@/assets/aparecida-4.jpg";
import aparecida5 from "@/assets/aparecida-5.jpg";
import { Sparkles, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const slides = [
  { src: aparecidaPhoto, alt: "Santuário Nacional de Aparecida do Norte — viagem em destaque Unitur" },
  { src: aparecida2, alt: "Fachada do Santuário Nacional de Aparecida" },
  { src: aparecida3, alt: "Vista lateral da Basílica de Aparecida" },
  { src: aparecida4, alt: "Interior da Basílica de Aparecida com altar-mor" },
  { src: aparecida5, alt: "Entrada do Santuário Nacional ao entardecer" },
];

export const Highlight = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

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
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-full h-full border border-primary/40" />
            <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden bg-card group">
              <Carousel
                setApi={setApi}
                opts={{ loop: true, align: "start" }}
                plugins={[Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]}
                className="absolute inset-0 h-full w-full"
              >
                <CarouselContent className="ml-0 h-full">
                  {slides.map((s, i) => (
                    <CarouselItem key={i} className="pl-0 basis-full h-full">
                      <div className="relative w-full h-full aspect-[4/5] lg:aspect-[5/6]">
                        <img
                          src={s.src}
                          alt={s.alt}
                          className="absolute inset-0 w-full h-full object-cover contrast-110 transition-transform duration-[6000ms] ease-out scale-105"
                          loading="lazy"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              <div className="pointer-events-none absolute bottom-6 left-6 right-6 hidden sm:block">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-2">
                  <MapPin className="w-3 h-3" />
                  Aparecida do Norte · SP
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold leading-tight">
                  Santuário Nacional
                </div>
              </div>

              {/* Arrows */}
              <button
                type="button"
                aria-label="Foto anterior"
                onClick={() => api?.scrollPrev()}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 hidden md:inline-flex items-center justify-center w-10 h-10 bg-background/70 hover:bg-primary hover:text-primary-foreground text-foreground backdrop-blur-sm border border-border transition-all opacity-80 hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Próxima foto"
                onClick={() => api?.scrollNext()}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 hidden md:inline-flex items-center justify-center w-10 h-10 bg-background/70 hover:bg-primary hover:text-primary-foreground text-foreground backdrop-blur-sm border border-border transition-all opacity-80 hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ir para foto ${i + 1}`}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-1.5 transition-all ${
                      i === current ? "w-6 bg-primary" : "w-3 bg-background/60 hover:bg-background"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 hidden md:block z-20">
              <Calendar className="w-7 h-7 mb-2" strokeWidth={1.5} />
              <div className="font-display text-xl font-bold leading-none">Datas abertas</div>
              <div className="text-[10px] uppercase tracking-widest mt-1">reserve já</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
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
