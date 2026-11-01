import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
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
        <StatsBanner />
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
