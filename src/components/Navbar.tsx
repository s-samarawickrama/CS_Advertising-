"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageSquare, Menu, X, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: scrolled ? "var(--header-bg)" : "var(--header-bg)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--line)",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div className="container" style={{ height: "74px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              window.scrollTo({ top: 0, behavior: "smooth" });
              if (window.location.hash) {
                try {
                  history.pushState(null, "", "/");
                } catch {}
              }
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              cursor: "pointer",
            }}
            aria-label="CS Advertising Home"
          >
            <div
              style={{
                background: "var(--red)",
                color: "#ffffff",
                padding: "3px 10px",
                fontSize: "22px",
                fontWeight: "900",
                fontStyle: "italic",
                borderRadius: "4px",
                boxShadow: "var(--glow-sm)",
                letterSpacing: "-0.02em",
                display: "inline-block",
              }}
            >
              CS
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: "800",
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                  lineHeight: "1.1",
                }}
              >
                Advertising
              </span>
              <span
                style={{
                  fontSize: "10.5px",
                  letterSpacing: "0.16em",
                  color: "var(--red)",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                Sri Lanka
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              fontSize: "14.5px",
              fontWeight: "600",
            }}
            className="desktop-nav"
          >
            <a href="#services" className="nav-link">Services</a>
            <a href="#work" className="nav-link">Our work</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Action CTAs */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <ThemeToggle />

            <a
              href="tel:+94779282503"
              className="desktop-phone-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "13.5px",
                fontWeight: "700",
                color: "var(--text)",
                padding: "8px 14px",
                borderRadius: "8px",
                border: "1px solid var(--line)",
                background: "var(--panel)",
                textDecoration: "none",
                transition: "border-color 0.2s ease",
              }}
            >
              077 928 2503
            </a>

            <a
              href="https://wa.me/94779282503?text=Hi%20CS%20Advertising,%20I'd%20like%20to%20get%20a%20quotation%20for%20a%20signboard."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary nav-quote-btn"
              style={{
                padding: "8px 18px",
                fontSize: "13.5px",
                height: "40px",
              }}
            >
              Get Quote
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle navigation menu"
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "var(--panel)",
                border: "1px solid var(--line)",
                color: "var(--text)",
                cursor: "pointer",
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: "74px",
            zIndex: 49,
            background: "var(--bg)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderBottom: "2px solid var(--red)",
            overflowY: "auto",
          }}
          className="mobile-drawer"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <span style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--red)", fontWeight: "800" }}>
              Navigation Menu
            </span>
            <a href="#services" onClick={closeMenu} style={mobileNavLinkStyle}>
              Services
            </a>
            <a href="#work" onClick={closeMenu} style={mobileNavLinkStyle}>
              Our work
            </a>
            <a href="#contact" onClick={closeMenu} style={mobileNavLinkStyle}>
              Contact
            </a>
          </div>

          <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "12px", borderTop: "1px solid var(--line)", paddingTop: "24px" }}>
            <a
              href="https://wa.me/94779282503?text=Hi%20CS%20Advertising,%20I%20am%20contacting%20you%20from%20your%20website%20for%20a%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "14px" }}
              onClick={closeMenu}
            >
              Message on WhatsApp
            </a>
            <a
              href="tel:+94779282503"
              className="btn btn-secondary"
              style={{ width: "100%", justifyContent: "center", padding: "14px" }}
              onClick={closeMenu}
            >
              Call 077 928 2503
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-link {
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
        }
        .nav-link:hover {
          color: var(--text);
        }
        .desktop-phone-btn:hover {
          border-color: var(--red);
          box-shadow: var(--glow-soft);
        }
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-phone-btn {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
        @media (max-width: 520px) {
          .nav-quote-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

const mobileNavLinkStyle: React.CSSProperties = {
  fontSize: "19px",
  fontWeight: "700",
  color: "var(--text)",
  textDecoration: "none",
  padding: "10px 0",
  borderBottom: "1px solid var(--line-subtle)",
};
