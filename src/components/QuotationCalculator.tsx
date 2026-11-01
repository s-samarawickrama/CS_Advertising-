"use client";

import { useState } from "react";
import { Calculator, MessageSquare, Sparkles, Send, CheckCircle2, Info } from "lucide-react";

const signTypes = [
  { id: "led", name: "LED Sign Board", basePerSqFt: 2800, maxBase: 3800, badge: "Most Popular" },
  { id: "3d", name: "Embossed 3D Letters", basePerSqFt: 3200, maxBase: 4400, badge: "Architectural" },
  { id: "neon", name: "Custom Neon Sign", basePerSqFt: 3500, maxBase: 5000, badge: "Aesthetic" },
  { id: "uv", name: "UV Printed Board", basePerSqFt: 1800, maxBase: 2500, badge: "High-Res Print" },
  { id: "shop", name: "Shop Facade & Branding", basePerSqFt: 4000, maxBase: 6500, badge: "Turnkey" },
];

export default function QuotationCalculator() {
  const [selectedType, setSelectedType] = useState("led");
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(3);
  const [placement, setPlacement] = useState<"outdoor" | "indoor">("outdoor");
  const [illumination, setIllumination] = useState<"front" | "halo" | "neon" | "none">("front");

  const currentType = signTypes.find((t) => t.id === selectedType) || signTypes[0];
  const sqFt = width * height;

  // Multipliers
  const placementMult = placement === "outdoor" ? 1.15 : 1.0;
  const illumMult = illumination === "halo" ? 1.2 : illumination === "neon" ? 1.25 : illumination === "none" ? 0.8 : 1.0;

  const minEstimatedPrice = Math.round(sqFt * currentType.basePerSqFt * placementMult * illumMult);
  const maxEstimatedPrice = Math.round(sqFt * currentType.maxBase * placementMult * illumMult);

  const formatLKR = (num: number) => {
    return new Intl.NumberFormat("en-LK", {
      style: "currency",
      currency: "LKR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello CS Advertising! I configured a signboard quotation on your website:\n\n` +
      `• Type: ${currentType.name}\n` +
      `• Dimensions: ${width} ft (W) × ${height} ft (H) = ${sqFt} sq.ft\n` +
      `• Placement: ${placement === "outdoor" ? "Outdoor Weatherproof" : "Indoor Decorative"}\n` +
      `• Illumination: ${illumination.toUpperCase()}\n` +
      `• Estimated Budget Range: ${formatLKR(minEstimatedPrice)} - ${formatLKR(maxEstimatedPrice)}\n\n` +
      `Could you please review this specification and prepare an exact proposal with design mockup?`
  );

  return (
    <section id="calculator">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-tag" style={{ margin: "0 auto 12px" }}>
            <Calculator size={13} />
            <span>INTERACTIVE ESTIMATOR</span>
          </div>
          <h2 className="section-title">Instant Quotation Calculator</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Select your signage type, customize your storefront dimensions, and get an immediate ballpark estimate. Send the spec directly to our workshop on WhatsApp in one click.
          </p>
        </div>

        {/* Calculator Body */}
        <div
          className="glass-panel calc-grid"
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "36px",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Controls Column */}
          <div>
            {/* Step 1: Sign Type */}
            <label style={labelStyle}>1. Select Signage / Service Type</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "8px", marginBottom: "24px" }}>
              {signTypes.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedType(t.id)}
                  style={{
                    padding: "10px 8px",
                    borderRadius: "8px",
                    border: selectedType === t.id ? "2px solid var(--red)" : "1px solid var(--line)",
                    background: selectedType === t.id ? "var(--red-subtle)" : "var(--panel)",
                    color: selectedType === t.id ? "var(--red)" : "var(--text)",
                    fontSize: "12.5px",
                    fontWeight: "700",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "all 0.15s ease",
                  }}
                >
                  <div>{t.name}</div>
                  <span style={{ fontSize: "10px", color: "var(--muted)", display: "block", marginTop: "2px" }}>
                    {t.badge}
                  </span>
                </button>
              ))}
            </div>

            {/* Step 2: Dimensions */}
            <label style={labelStyle}>
              2. Dimensions: {width} ft (Width) × {height} ft (Height) ={" "}
              <span style={{ color: "var(--red)" }}>{sqFt} sq.ft</span>
            </label>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "6px" }}>
                  <span>Width (Horizontal)</span>
                  <strong>{width} feet</strong>
                </div>
                <input
                  type="range"
                  min="2"
                  max="35"
                  step="1"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  style={sliderStyle}
                  aria-label="Signboard width in feet"
                />
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "6px" }}>
                  <span>Height (Vertical)</span>
                  <strong>{height} feet</strong>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="0.5"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  style={sliderStyle}
                  aria-label="Signboard height in feet"
                />
              </div>
            </div>

            {/* Step 3: Placement & Lighting */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={labelStyle}>3. Placement</label>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    type="button"
                    onClick={() => setPlacement("outdoor")}
                    style={pillStyle(placement === "outdoor")}
                  >
                    Outdoor Weatherproof
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlacement("indoor")}
                    style={pillStyle(placement === "indoor")}
                  >
                    Indoor Wall
                  </button>
                </div>
              </div>

              <div>
                <label style={labelStyle}>4. Illumination</label>
                <select
                  value={illumination}
                  onChange={(e) => setIllumination(e.target.value as any)}
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    borderRadius: "8px",
                    border: "1px solid var(--line)",
                    background: "var(--panel)",
                    color: "var(--text)",
                    fontSize: "13px",
                    fontWeight: "600",
                    outline: "none",
                  }}
                  aria-label="Select illumination style"
                >
                  <option value="front">Front-Lit Bright LED</option>
                  <option value="halo">Halo Back-Lit Glow</option>
                  <option value="neon">Silicone Neon Flex</option>
                  <option value="none">Non-Illuminated 3D</option>
                </select>
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div
            style={{
              background: "var(--panel)",
              borderRadius: "14px",
              border: "1px solid var(--line)",
              padding: "30px 24px",
              boxShadow: "var(--card-shadow)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <div>
              <span style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--red)", fontWeight: "800" }}>
                SPECIFICATION SUMMARY
              </span>
              <h3 style={{ fontSize: "22px", fontWeight: "900", margin: "6px 0 16px", color: "var(--text)" }}>
                {currentType.name}
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13.5px", marginBottom: "20px" }}>
                <div style={specRowStyle}>
                  <span style={{ color: "var(--muted)" }}>Dimensions:</span>
                  <strong>{width} ft × {height} ft ({sqFt} sq.ft)</strong>
                </div>
                <div style={specRowStyle}>
                  <span style={{ color: "var(--muted)" }}>Environment:</span>
                  <strong>{placement === "outdoor" ? "IP67 Outdoor Sealed" : "Indoor Ambient"}</strong>
                </div>
                <div style={specRowStyle}>
                  <span style={{ color: "var(--muted)" }}>Illumination:</span>
                  <strong style={{ textTransform: "capitalize" }}>{illumination} Lit</strong>
                </div>
                <div style={specRowStyle}>
                  <span style={{ color: "var(--muted)" }}>Included:</span>
                  <span style={{ color: "var(--text)", fontWeight: "600" }}>Power Driver &amp; Wiring</span>
                </div>
              </div>

              {/* Price Estimate Box */}
              <div
                style={{
                  background: "var(--bg)",
                  borderRadius: "10px",
                  padding: "18px",
                  border: "1px solid var(--line)",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--muted)", textTransform: "uppercase", fontWeight: "700" }}>
                  Estimated Guide Range (LKR)
                </span>
                <div
                  style={{
                    fontSize: "clamp(24px, 3.2vw, 32px)",
                    fontWeight: "900",
                    color: "var(--red)",
                    margin: "4px 0",
                    textShadow: "var(--glow-sm)",
                  }}
                >
                  {formatLKR(minEstimatedPrice)} - {formatLKR(maxEstimatedPrice)}
                </div>
                <span style={{ fontSize: "11px", color: "var(--muted)" }}>
                  Final cost depends on exact materials, installation height &amp; site location.
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <a
              href={`https://wa.me/94779282503?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "13px" }}
            >
              <Send size={16} />
              <span>Send Spec to WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .calc-grid {
            grid-template-columns: 1fr !important;
            padding: 24px 18px !important;
          }
        }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13.5px",
  fontWeight: "800",
  marginBottom: "10px",
  color: "var(--text)",
};

const sliderStyle: React.CSSProperties = {
  width: "100%",
  accentColor: "var(--red)",
  cursor: "pointer",
};

const pillStyle = (active: boolean): React.CSSProperties => ({
  flex: 1,
  padding: "8px 10px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: "700",
  cursor: "pointer",
  border: active ? "1.5px solid var(--red)" : "1px solid var(--line)",
  background: active ? "var(--red-subtle)" : "var(--panel)",
  color: active ? "var(--red)" : "var(--muted)",
  transition: "all 0.15s ease",
});

const specRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "6px",
  borderBottom: "1px dashed var(--line)",
};
