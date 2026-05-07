// Global WhatsApp picker bus — dispatches a custom message and lets the
// single mounted <WhatsAppPicker /> open with the corresponding text.

const EVENT_NAME = "unitur:open-whatsapp-picker";

export const openWhatsAppPicker = (message?: string) => {
  window.dispatchEvent(new CustomEvent<string | undefined>(EVENT_NAME, { detail: message }));
};

export const onOpenWhatsAppPicker = (handler: (message?: string) => void) => {
  const listener = (e: Event) => handler((e as CustomEvent<string | undefined>).detail);
  window.addEventListener(EVENT_NAME, listener);
  return () => window.removeEventListener(EVENT_NAME, listener);
};
