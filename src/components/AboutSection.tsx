"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, MapPin, User, Sparkles, Hammer } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      title: "End-to-End Execution",
      desc: "One dedicated team handling conceptual 3D design, municipal permits, precision fabrication, and night on-site installation.",
    },
    {
      title: "Weatherproof Tropical Grade",
      desc: "Engineered specifically for Sri Lanka's intense sunlight, rain, and coastal humidity with sealed acrylics and IP67/IP68 power drivers.",
    },
    {
      title: "In-House Boralesgamuwa Workshop",
      desc: "Direct manufacturer pricing with no middlemen markups, equipped with CNC routers, laser cutters, and expert channel letter fabricators.",
    },
    {
      title: "High-Efficiency LED Modules",
      desc: "Ultra-bright lumen output with up to 70% lower electricity consumption and 50,000+ hour operational lifespan.",
    },
  ];

  return (
    <section id="about">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.05fr",
            gap: "54px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left Column: Workshop image & Specialist Card */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid var(--line)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <Image
                src="/images/workshop.jpg"
                alt="CS Advertising workshop in Boralesgamuwa assembling 3D channel letters"
                width={800}
                height={500}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  right: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  color: "#ffffff",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--red)", fontWeight: "800", textTransform: "uppercase" }}>
                    <MapPin size={13} />
                    <span>Boralesgamuwa Facility</span>
                  </div>
                  <strong style={{ fontSize: "16px", display: "block", marginTop: "2px" }}>
                    CS In-House Sign Manufacturing Hub
                  </strong>
                </div>
                <span
                  style={{
                    fontSize: "11.5px",
                    background: "rgba(255, 42, 54, 0.9)",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontWeight: "800",
                  }}
                >
                  Direct Factory
                </span>
              </div>
            </div>

            {/* Specialist Badge Floating Card */}
            <div
              className="glass-panel"
              style={{
                marginTop: "-28px",
                marginLeft: "24px",
                marginRight: "24px",
                position: "relative",
                zIndex: 2,
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "var(--red)",
                  color: "#ffffff",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                  boxShadow: "var(--glow-sm)",
                }}
              >
                <User size={22} />
              </div>
              <div>
                <span style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--red)", fontWeight: "800" }}>
                  Agency Leadership
                </span>
                <strong style={{ display: "block", fontSize: "15px", color: "var(--text)" }}>
                  W.H.V.D.C. Hewage
                </strong>
                <span style={{ fontSize: "12.5px", color: "var(--muted)" }}>
                  Advertising & Branding Specialist • CS Advertising
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: About details from Business Proposal */}
          <div>
            <div className="section-tag">
              <Sparkles size={13} />
              <span>ABOUT CS ADVERTISING</span>
            </div>

            <h2 className="section-title">
              We don&apos;t just create signboards — we create{" "}
              <span style={{ color: "var(--red)" }}>impactful experiences.</span>
            </h2>

            <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: "1.7", marginBottom: "16px" }}>
              <strong>CS Advertising</strong> is a dynamic and results-driven advertising agency specializing in high-quality signage and branding solutions. We partner with businesses across Sri Lanka to elevate their brand presence through innovative design, advanced production techniques, and strategic visual communication.
            </p>

            <p style={{ color: "var(--muted)", fontSize: "15.5px", lineHeight: "1.7", marginBottom: "28px" }}>
              By combining modern acrylics, aluminium composite panels (ACM), high-grade LED chips, and precision neon craftsmanship, we transform your commercial storefront into a landmark that draws foot traffic day and night.
            </p>

            {/* Pillars Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "18px",
              }}
              className="about-pillars"
            >
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "var(--panel)",
                    padding: "16px 18px",
                    borderRadius: "10px",
                    border: "1px solid var(--line)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <CheckCircle2 size={16} color="var(--red)" />
                    <strong style={{ fontSize: "14.5px", color: "var(--text)" }}>{item.title}</strong>
                  </div>
                  <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.5" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "32px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/94779282503?text=Hi%20CS%20Advertising,%20I'd%20like%20to%20discuss%20a%20branding%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Connect With Specialist
              </a>
              <a href="#services" className="btn btn-secondary">
                Explore All 8 Services
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-pillars {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
