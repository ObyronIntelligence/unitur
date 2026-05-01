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

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
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
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
