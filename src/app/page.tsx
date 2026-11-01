import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import BrandStylesSection from "@/components/BrandStylesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <ServicesSection />
        <BrandStylesSection />
        <PortfolioSection />
        <ContactSection />
        <ClosingCta />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
