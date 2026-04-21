import { phoneDisplay } from "@/lib/contact";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-xl">UNITUR<span className="text-primary">.</span></span>
          <span className="text-xs text-muted-foreground">Mobilidade universitária · Itapetininga, SP</span>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Unitur · Marcos · {phoneDisplay}
        </div>
      </div>
    </footer>
  );
};
