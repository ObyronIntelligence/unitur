const PHONE = "5515997720076";
const MESSAGE = "Olá Marcos! Vim pelo site da Unitur e gostaria de mais informações.";

export const whatsappLink = (custom?: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(custom ?? MESSAGE)}`;

export const phoneDisplay = "+55 (15) 99772-0076";
