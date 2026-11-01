"use client";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "36px 0",
        color: "var(--muted)",
        fontSize: "14.5px",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div>© 2026 CS Advertising. Your visibility is your success.</div>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <a
            href="https://maps.app.goo.gl/bKx8XBbLHe53FMZT8?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--muted)", textDecoration: "none" }}
          >
            Boralesgamuwa, Sri Lanka
          </a>
          <span>•</span>
          <a
            href="https://wa.me/94779282503"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--red)", textDecoration: "none", fontWeight: "700" }}
          >
            077 928 2503
          </a>
        </div>
      </div>
    </footer>
  );
}
