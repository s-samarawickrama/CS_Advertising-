"use client";

import { Sparkles, Camera, PenTool, Wrench, Zap } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      icon: <Camera size={24} color="var(--red)" />,
      title: "Consultation & Site Photos",
      desc: "Send us a photo of your shopfront on WhatsApp with approximate wall measurements, or our team visits your location in Colombo & suburbs.",
    },
    {
      step: "02",
      icon: <PenTool size={24} color="var(--red)" />,
      title: "3D Design & Proposal",
      desc: "Our branding team creates scale digital mockups showing your sign illuminated at night and in daylight, along with material specifications.",
    },
    {
      step: "03",
      icon: <Wrench size={24} color="var(--red)" />,
      title: "Factory Precision Fabrication",
      desc: "Crafted at our Boralesgamuwa workshop using computerized laser/CNC routing, acrylic bending, silicone neon shaping, and IP67 LED potting.",
    },
    {
      step: "04",
      icon: <Zap size={24} color="var(--red)" />,
      title: "Safe Installation & Switch-On",
      desc: "Our experienced installation crew securely anchors the sign, connects weather-sealed power drivers, and switches it on for your grand opening.",
    },
  ];

  return (
    <section id="process" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-tag" style={{ margin: "0 auto 12px" }}>
            <Sparkles size={13} />
            <span>FROM FIRST SKETCH TO THE SWITCH-ON</span>
          </div>
          <h2 className="section-title">How We Make Your Brand Shine</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            A disciplined 4-step execution workflow that ensures precision, safety, and breathtaking curb appeal.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {steps.map((st, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--panel)",
                borderRadius: "14px",
                border: "1px solid var(--line)",
                padding: "32px 24px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.25s ease",
              }}
              className="process-card"
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "var(--red-subtle)",
                      display: "grid",
                      placeItems: "center",
                      border: "1px solid rgba(255, 42, 54, 0.2)",
                    }}
                  >
                    {st.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: "900",
                      color: "var(--line)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {st.step}
                  </span>
                </div>

                <h3 style={{ fontSize: "19px", fontWeight: "800", marginBottom: "10px", color: "var(--text)" }}>
                  {st.title}
                </h3>

                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.6" }}>
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .process-card:hover {
          transform: translateY(-6px);
          border-color: var(--red);
          box-shadow: var(--glow-soft);
        }
      `}</style>
    </section>
  );
}
