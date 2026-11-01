"use client";

import Image from "next/image";

export default function BrandStylesSection() {
  return (
    <section id="light">
      <div className="container center">
        <h2>Pick how your brand glows</h2>
        <p className="intro">
          Four signature styles, each made to order for your shop front.
        </p>

        <div className="stack">
          {/* Card 1: LED */}
          <div className="tile glass">
            <div className="face">
              <Image
                src="/images/style_led.png"
                alt="LED sign board"
                width={220}
                height={130}
                className="face-img"
                style={{
                  width: "auto",
                  maxWidth: "92%",
                  height: "auto",
                  maxHeight: "135px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div>
              <h3>LED boards</h3>
              <p>Bright, even light that reads from across the road.</p>
            </div>
          </div>

          {/* Card 2: Neon */}
          <div className="tile glass">
            <div className="face">
              <Image
                src="/images/style_neon.png"
                alt="Custom neon sign"
                width={220}
                height={140}
                className="face-img"
                style={{
                  width: "auto",
                  maxWidth: "92%",
                  height: "auto",
                  maxHeight: "135px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div>
              <h3>Neon signs</h3>
              <p>Custom shapes and logos in glowing tube light.</p>
            </div>
          </div>

          {/* Card 3: 3D */}
          <div className="tile glass">
            <div className="face">
              <Image
                src="/images/style_3d.png"
                alt="3D letter signage"
                width={220}
                height={140}
                className="face-img"
                style={{
                  width: "auto",
                  maxWidth: "92%",
                  height: "auto",
                  maxHeight: "135px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div>
              <h3>3D letters</h3>
              <p>Solid dimensional lettering with real depth.</p>
            </div>
          </div>

          {/* Card 4: Embossed Letters */}
          <div className="tile glass">
            <div className="face">
              <Image
                src="/images/style_embossed.png"
                alt="Embossed letters signage"
                width={240}
                height={140}
                className="face-img"
                style={{
                  width: "auto",
                  maxWidth: "96%",
                  height: "auto",
                  maxHeight: "135px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div>
              <h3>Embossed letters</h3>
              <p>Custom raised lettering for standout shops and offices.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .center {
          text-align: center;
        }

        h2 {
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: -0.01em;
          margin: 0 0 14px;
          color: var(--text);
        }

        .intro {
          color: var(--muted);
          max-width: 56ch;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 44px;
          font-size: 17px;
          line-height: 1.6;
        }

        .stack {
          display: flex;
          justify-content: center;
          padding: 24px 0 12px;
          position: relative;
        }

        .tile {
          width: min(270px, 23vw);
          min-height: 345px;
          margin: 0 -14px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          text-align: center;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
          border-radius: 14px;
          cursor: pointer;
          background: linear-gradient(135deg, rgba(255, 42, 54, 0.16), rgba(255, 255, 255, 0.03) 60%), #080808;
          -webkit-backdrop-filter: blur(14px);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 110, 118, 0.4);
          box-shadow: inset 0 0 30px rgba(255, 42, 54, 0.1), 0 0 40px rgba(255, 42, 54, 0.12);
        }

        :global([data-theme="light"]) .tile {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(241, 245, 249, 0.9) 60%), #ffffff;
          border: 1px solid rgba(225, 29, 46, 0.25);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        }

        .tile:nth-child(1) {
          transform: rotate(-9deg) translateY(16px);
          z-index: 1;
        }

        .tile:nth-child(2) {
          transform: rotate(-3deg) translateY(-8px);
          z-index: 2;
        }

        .tile:nth-child(3) {
          transform: rotate(3deg) translateY(-8px);
          z-index: 2;
        }

        .tile:nth-child(4) {
          transform: rotate(9deg) translateY(16px);
          z-index: 1;
        }

        .tile:hover {
          transform: rotate(0) translateY(-22px) scale(1.02) !important;
          z-index: 10 !important;
          box-shadow: inset 0 0 30px rgba(255, 42, 54, 0.25), 0 0 50px rgba(255, 42, 54, 0.45);
        }

        :global([data-theme="light"]) .tile:hover {
          box-shadow: 0 16px 40px rgba(225, 29, 46, 0.22);
        }

        .tile .face {
          min-height: 155px;
          padding: 8px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          user-select: none;
        }

        :global(.face-img) {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease;
          filter: drop-shadow(0 4px 14px rgba(0, 0, 0, 0.45));
        }

        .tile:hover :global(.face-img) {
          transform: scale(1.08) translateY(-4px);
          filter: drop-shadow(0 8px 25px rgba(255, 42, 54, 0.5));
        }

        :global([data-theme="light"]) :global(.face-img) {
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
        }

        :global([data-theme="light"]) .tile:hover :global(.face-img) {
          filter: drop-shadow(0 8px 22px rgba(225, 29, 46, 0.35));
        }

        .tile h3 {
          margin: 0 0 6px;
          font-size: 22px;
          font-weight: 800;
          color: var(--text);
        }

        .tile p {
          margin: 0;
          color: var(--muted);
          font-size: 15.5px;
          line-height: 1.5;
        }

        @media (max-width: 820px) {
          .stack {
            flex-direction: column;
            align-items: center;
            gap: 18px;
          }
          .tile {
            width: 100%;
            max-width: 340px;
            margin: 0;
            min-height: 280px;
          }
          .tile:nth-child(n) {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
