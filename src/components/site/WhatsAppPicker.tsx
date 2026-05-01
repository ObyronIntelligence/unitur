import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { contacts, whatsappLinkFor } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

interface WhatsAppPickerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message?: string;
}

export const WhatsAppPicker = ({ open, onOpenChange, message }: WhatsAppPickerProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background border-border max-w-md">
        <DialogHeader>
          <div className="text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-2">
            WhatsApp
          </div>
          <DialogTitle className="font-display text-3xl font-bold tracking-tighter">
            Com quem você quer falar?
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Escolha um contato e seja redirecionado direto para a conversa.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 mt-2">
          {contacts.map((c) => {
            const personalized = message
              ? message
              : `Olá ${c.name}! Vim pelo site da Unitur e quero saber mais informações.`;
            return (
              <a
                key={c.phone}
                href={whatsappLinkFor(c.phone, personalized)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onOpenChange(false)}
                className="group flex items-center gap-4 bg-card border border-border hover:border-primary p-4 transition-all hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.role}
                  </div>
                  <div className="font-display text-lg font-bold leading-tight">{c.name}</div>
                  <div className="text-sm text-muted-foreground truncate">{c.display}</div>
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                  →
                </span>
              </a>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};
