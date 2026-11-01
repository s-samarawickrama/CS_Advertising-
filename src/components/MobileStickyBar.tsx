"use client";

import { useState, useEffect } from "react";

export default function MobileStickyBar() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide during first frame (hero section) so only 2 buttons are visible.
      // Reveal down buttons smoothly when scrolling down past the hero.
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setShowBar(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`mobile-sticky-bar ${showBar ? "is-visible" : ""}`}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: "var(--header-bg)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderTop: "1px solid var(--line)",
        padding: "10px 16px calc(10px + env(safe-area-inset-bottom, 0px))",
        display: "none",
        gap: "10px",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
      }}
    >
      <a
        href="tel:+94779282503"
        className="btn btn-secondary"
        style={{
          flex: 1,
          padding: "11px 12px",
          fontSize: "14px",
          fontWeight: "800",
          justifyContent: "center",
          borderRadius: "8px",
        }}
      >
        Call Now
      </a>

      <a
        href="https://wa.me/94779282503?text=Hi%20CS%20Advertising,%20I'd%20like%20to%20get%20a%20quotation%20for%20a%20signboard."
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
        style={{
          flex: 1.4,
          padding: "11px 12px",
          fontSize: "14px",
          fontWeight: "800",
          justifyContent: "center",
          borderRadius: "8px",
        }}
      >
        Message on WhatsApp
      </a>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-sticky-bar {
            display: flex !important;
            transform: translateY(115%);
            opacity: 0;
            pointer-events: none;
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
          }
          .mobile-sticky-bar.is-visible {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }
        }
      `}</style>
    </div>
  );
}
