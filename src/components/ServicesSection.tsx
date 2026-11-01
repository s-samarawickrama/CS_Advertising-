"use client";

const services = [
  {
    title: "LED sign boards",
    desc: "Wall-mounted, hanging and 3D LED boards that stay bright day and night.",
  },
  {
    title: "Embossed plastic letters",
    desc: "Custom 3D lettering for shops and offices.",
  },
  {
    title: "UV printed boards",
    desc: "Full-colour indoor and outdoor boards.",
  },
  {
    title: "Neon signs",
    desc: "Custom shapes, logos and decorative neon lighting.",
  },
  {
    title: "Shop branding",
    desc: "Exterior and interior branding, and a complete visual identity.",
  },
  {
    title: "Exhibition stalls",
    desc: "Modular stalls, custom booths and promotional setups.",
  },
  {
    title: "Leaflet printing",
    desc: "Flyers, brochures, pamphlets and promotional materials.",
  },
  {
    title: "Interior works",
    desc: "Office interiors, shop fit-outs, wall cladding, partitions and ceilings.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="container">
        <h2>What we build</h2>
        <p className="intro">
          Modern materials, careful finishing, and one team handling design, production and installation.
        </p>

        <div className="grid">
          {services.map((s, idx) => (
            <div key={idx} className="card">
              <span className="saber" aria-hidden="true" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        h2 {
          font-size: clamp(30px, 4.4vw, 48px);
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: -0.01em;
          margin: 0 0 14px;
          color: var(--text);
        }

        .intro {
          color: var(--muted);
          max-width: 56ch;
          margin: 0 0 44px;
          font-size: 17px;
          line-height: 1.6;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
        }

        .card {
          position: relative;
          background: var(--bg);
          padding: 30px 24px 28px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          overflow: hidden;
        }

        /* Teeny tiny lightsaber red light beam in upper 1/8th of card length */
        .saber {
          position: absolute;
          top: 0;
          left: 24px;
          width: 36px; /* ~1/8th of card length */
          height: 2.5px;
          background: #ff2a36;
          border-radius: 99px;
          box-shadow: 0 0 6px #ff2a36, 0 0 14px rgba(255, 42, 54, 0.75);
          transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1), left 0.35s ease, box-shadow 0.35s ease;
          pointer-events: none;
        }

        .card:hover {
          background: var(--panel-hover);
          box-shadow: inset 0 0 0 1px var(--red), 0 0 24px rgba(255, 42, 54, 0.3);
          position: relative;
          z-index: 2;
          transform: translateY(-2px);
        }

        .card:hover .saber {
          left: 0;
          width: 100%;
          border-radius: 0;
          height: 3px;
          background: #ff2a36;
          box-shadow: 0 0 10px #ff2a36, 0 0 25px rgba(255, 42, 54, 0.85), 0 0 45px rgba(255, 42, 54, 0.5);
        }

        .card h3 {
          margin: 0 0 8px;
          font-size: 20px;
          font-weight: 800;
          color: var(--text);
          letter-spacing: -0.01em;
          transition: color 0.2s ease;
        }

        .card:hover h3 {
          color: #ffffff;
        }

        :global([data-theme="light"]) .card {
          background: #ffffff;
        }

        /* Light Mode - Refined, subtle accent without blurry halo or harsh red borders */
        :global([data-theme="light"]) .saber {
          background: var(--red);
          box-shadow: 0 1px 4px rgba(225, 29, 46, 0.35);
        }

        :global([data-theme="light"]) .card:hover {
          background: #ffffff;
          transform: translateY(-4px);
          box-shadow: 0 16px 34px -4px rgba(15, 23, 42, 0.1), 0 4px 12px rgba(225, 29, 46, 0.08), inset 0 0 0 1px rgba(225, 29, 46, 0.25);
          z-index: 5;
        }

        :global([data-theme="light"]) .card:hover .saber {
          left: 0;
          width: 100%;
          border-radius: 0;
          height: 3px;
          background: var(--red);
          box-shadow: 0 2px 10px rgba(225, 29, 46, 0.35);
        }

        :global([data-theme="light"]) .card:hover h3 {
          color: var(--text);
        }

        :global([data-theme="light"]) .card:hover p {
          color: #475569;
        }

        .card p {
          margin: 0;
          color: var(--muted);
          font-size: 15.5px;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
