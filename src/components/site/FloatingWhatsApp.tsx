import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { WhatsAppPicker } from "./WhatsAppPicker";

export const FloatingWhatsApp = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Falar no WhatsApp"
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-primary animate-pulse-red" />
          <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-red hover:scale-110 transition-transform">
            <MessageCircle className="w-6 h-6" />
          </span>
        </div>
      </button>
      <WhatsAppPicker open={open} onOpenChange={setOpen} />
    </>
  );
};
