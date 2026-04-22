import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const reviews = [
  {
    name: "Anna Ferreira",
    text: "Viagens incríveis! Ótimo veículo, totalmente aconchegante, acesso ao wi-fi, motorista muito gentil!!",
  },
  {
    name: "Maria Dell",
    text: "Muito boa! Motorista dirige bem e é tranquilo. Recomendo demais.",
  },
  {
    name: "Elisabete Luz",
    text: "Van nova bem espaçosa, serviço de ótima qualidade, motorista nota 10.",
  },
  {
    name: "Maria Eduarda Elias",
    text: "A melhor van sem dúvidas. Melhores preços. Conforto.",
  },
  {
    name: "Camily Helena",
    text: "Motorista dirige muito bem e a van é bem confortável.",
  },
  {
    name: "André Gustavo",
    text: "A van e o motorista são incríveis.",
  },
  {
    name: "Gilmar Macedo",
    text: "Chique demais. Super confortável.",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const GoogleG = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

export const Testimonials = () => {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section
      id="avaliacoes"
      className="relative py-24 md:py-40 bg-card/30 border-y border-border overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-6xl mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-4">
              05 — Quem viaja, recomenda
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-balance">
              O que nossos <span className="text-primary italic">passageiros</span> dizem.
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground shrink-0">
            <GoogleG className="w-4 h-4" />
            <span>Avaliações reais de passageiros no Google</span>
          </div>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {reviews.map((r) => (
              <CarouselItem
                key={r.name}
                className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <figure className="group relative h-full bg-background border border-border p-8 hover:border-primary transition-all duration-500 overflow-hidden flex flex-col select-none">
                  <div className="absolute -top-px -left-px h-px w-0 group-hover:w-full bg-primary transition-all duration-500" />
                  <Quote
                    className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/30 transition-colors"
                    strokeWidth={1.5}
                  />

                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  <blockquote className="text-foreground text-base md:text-lg leading-relaxed mb-8 flex-1">
                    "{r.text}"
                  </blockquote>

                  <figcaption className="flex items-center justify-between gap-4 pt-5 border-t border-border">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-xs font-semibold shrink-0">
                        {initials(r.name)}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-sm truncate">{r.name}</div>
                        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                          <GoogleG className="w-3 h-3" />
                          <span>Avaliação no Google</span>
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-center gap-4 mt-10">
            <CarouselPrevious className="static translate-y-0 h-11 w-11 rounded-none border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all" />
            <CarouselNext className="static translate-y-0 h-11 w-11 rounded-none border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
