"use client";

export default function MobileStickyBar() {
  return (
    <div
      className="mobile-sticky-bar"
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
          }
        }
      `}</style>
    </div>
  );
}
