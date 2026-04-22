export const Marquee = () => {
  const items = ["Itapetininga", "→", "Sorocaba", "·", "UNISO", "·", "UNIP", "·", "Aeroportos", "·", "Fretamento", "·"];
  return (
    <div className="relative py-6 border-y border-border bg-card/30 overflow-hidden mb-16 md:mb-24">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className={`font-display text-2xl md:text-4xl font-bold tracking-tight ${
              it === "→" || it === "·" ? "text-primary" : "text-foreground/40"
            }`}
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
};
