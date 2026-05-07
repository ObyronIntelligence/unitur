import { useEffect, useState } from "react";
import { WhatsAppPicker } from "./WhatsAppPicker";
import { onOpenWhatsAppPicker } from "@/lib/whatsappPicker";

export const GlobalWhatsAppPicker = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string | undefined>(undefined);

  useEffect(() => {
    return onOpenWhatsAppPicker((msg) => {
      setMessage(msg);
      setOpen(true);
    });
  }, []);

  return <WhatsAppPicker open={open} onOpenChange={setOpen} message={message} />;
};
