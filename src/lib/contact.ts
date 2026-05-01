const DEFAULT_MESSAGE = "Olá! Vim pelo site da Unitur e quero saber mais informações.";

export type Contact = {
  name: string;
  role: string;
  phone: string; // E.164 digits only, for wa.me/tel
  display: string; // formatted for display
};

export const contacts: Contact[] = [
  {
    name: "Marcos",
    role: "Fundador & motorista",
    phone: "5515997720076",
    display: "+55 (15) 99772-0076",
  },
  {
    name: "Unitur",
    role: "Atendimento",
    phone: "5515998576381",
    display: "+55 (15) 99857-6381",
  },
];

export const whatsappLinkFor = (phone: string, custom?: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(custom ?? DEFAULT_MESSAGE)}`;

// Backwards-compatible: defaults to Marcos's number
export const whatsappLink = (custom?: string) =>
  whatsappLinkFor(contacts[0].phone, custom ?? "Olá Marcos! Vim pelo site da Unitur e quero saber mais informações.");

export const phoneDisplay = contacts[0].display;

export const instagramUnitur = "https://www.instagram.com/marcos.unitur/";
export const instagramObyron = "https://www.instagram.com/obyronintelligence/";
