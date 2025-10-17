// src/app/page.tsx
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import Schedule from "./components/Schedule";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <ServicesGrid />
        <Schedule />
        {/* <CalendlyEmbed /> Uncomment if using Calendly */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
