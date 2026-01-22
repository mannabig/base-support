import { useState } from "react";
import "./App.css";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import FAQSection from "./components/faq-section";
import TestimonialsPopup from "./components/testimonials-pop";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-white text-foreground flex flex-col">
      <HeroSection />
      <AboutSection />
      <FAQSection />
      <TestimonialsPopup />
      <Footer />
    </main>
  );
}

export default App;
