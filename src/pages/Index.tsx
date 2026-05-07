import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { VanShowcase } from "@/components/site/VanShowcase";
import { Airport } from "@/components/site/Airport";
import { Routes } from "@/components/site/Routes";
import { Services } from "@/components/site/Services";
import { Differentials } from "@/components/site/Differentials";
import { Highlight } from "@/components/site/Highlight";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { GlobalWhatsAppPicker } from "@/components/site/GlobalWhatsAppPicker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main id="conteudo-principal">
        <Hero />
        <About />
        <VanShowcase />
        <Airport />
        <Routes />
        <Services />
        <Differentials />
        <Highlight />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <GlobalWhatsAppPicker />
    </div>
  );
};

export default Index;
