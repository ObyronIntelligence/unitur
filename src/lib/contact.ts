const PHONE = "5515997720076";
const MESSAGE = "Olá Marcos! Vim pelo site da Unitur e quero saber mais informações.";

export const whatsappLink = (custom?: string) =>
  custom
    ? `https://wa.me/${PHONE}?text=${encodeURIComponent(custom)}`
    : `https://wa.me/${PHONE}?text=Ol%C3%A1%20Marcos%21%20Vim%20pelo%20site%20da%20Unitur%20e%20quero%20saber%20mais%20informa%C3%A7%C3%B5es.`;

export const phoneDisplay = "+55 (15) 99772-0076";

export const instagramUnitur = "https://www.instagram.com/marcos.unitur/";
export const instagramObyron = "https://www.instagram.com/obyronintelligence/";
