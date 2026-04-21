const PHONE = "5515997720076";
const MESSAGE = "Olá Marcos! Vim pelo site da Unitur e quero saber mais informações.";

export const whatsappLink = (custom?: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(custom ?? MESSAGE)}`;

export const phoneDisplay = "+55 (15) 99772-0076";

export const instagramUnitur = "https://www.instagram.com/marcos.unitur/";
export const instagramObyron = "https://www.instagram.com/obyronintelligence/";
