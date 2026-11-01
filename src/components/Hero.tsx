"use client";

import { useState } from "react";

export default function Hero() {
  const [sparking, setSparking] = useState(false);

  const triggerSpark = () => {
    setSparking(true);
    setTimeout(() => setSparking(false), 900);
  };

  return (
    <div id="top" className="hero light-shafts">
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-grid">
          {/* Left Column: Heading, Lede & CTAs */}
          <div className="hero-text-col">
            <h1>Signs your customers see from the street.</h1>
            <p className="lede">
              We design, make and install LED boards, neon signs, 3D letters and full shop branding, from first sketch to the night we switch it on.
            </p>

            <div className="btns">
              <a
                href="https://wa.me/94779282503?text=Hi%20CS%20Advertising,%20I'd%20like%20to%20get%20a%20quotation%20for%20a%20signboard."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get a quotation
              </a>
              <a href="#work" className="btn btn-secondary">
                See our work
              </a>
            </div>
          </div>

          {/* Right Column: Clean Neon Sign (Only CS ADVERTISING) */}
          <div className="hero-sign-col">
            <div
              className={`sign ${sparking ? "sparking" : ""}`}
              onClick={triggerSpark}
              title="Click to spark neon sign"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") triggerSpark();
              }}
              aria-label="CS Advertising Neon Sign"
            >
              <p className="tube big">CS</p>
              <p className="tube small">ADVERTISING</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          overflow: hidden;
          padding: 72px 0 128px;
          border-bottom: 1px solid var(--line);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: center;
        }

        h1 {
          font-size: clamp(40px, 6vw, 76px);
          line-height: 1.02;
          font-weight: 900;
          letter-spacing: -0.02em;
          margin: 0 0 24px;
          color: var(--text);
        }

        .lede {
          color: var(--muted);
          max-width: 46ch;
          margin: 0 0 32px;
          font-size: clamp(16.5px, 1.8vw, 18.5px);
          line-height: 1.6;
        }

        .btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn-primary {
          padding: 14px 28px;
          font-size: 16px;
        }

        .btn-secondary {
          padding: 14px 28px;
          font-size: 16px;
        }

        /* Floating neon letters - No card panel or dark box */
        .sign {
          position: relative;
          background: transparent;
          border: none;
          box-shadow: none;
          padding: 24px 0;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
          transition: transform 0.25s ease;
        }

        .sign:hover {
          transform: scale(1.02);
        }

        /* Neon Tube Outlines - Hollow Interior with Crisp Red Neon Glow in Dark Mode */
        .tube {
          margin: 0;
          font-weight: 900;
          color: transparent;
          -webkit-text-fill-color: transparent;
          user-select: none;
        }

        .tube.big {
          font-size: clamp(110px, 18vw, 200px);
          line-height: 0.9;
          font-style: italic;
          letter-spacing: -0.02em;
          -webkit-text-stroke: 2.5px #ff2a36;
          filter: drop-shadow(0 0 4px #ff2a36) drop-shadow(0 0 16px rgba(255, 42, 54, 0.75));
          animation: glitchCS 4.2s infinite ease-in-out;
        }

        .tube.small {
          font-size: clamp(20px, 3vw, 32px);
          letter-spacing: 0.36em;
          font-weight: 800;
          -webkit-text-stroke: 1.2px #ff2a36;
          margin-top: 14px;
          filter: drop-shadow(0 0 3px #ff2a36) drop-shadow(0 0 12px rgba(255, 42, 54, 0.7));
          animation: glitchAdv 5.1s infinite ease-in-out;
        }

        /* Light Mode - Filled Solid Red Letters as Originally Configured */
        :global([data-theme="light"]) .tube {
          color: #e11d2e;
          -webkit-text-fill-color: #e11d2e;
          -webkit-text-stroke: 1.5px #b91c1c;
          filter: drop-shadow(0 2px 8px rgba(225, 29, 46, 0.35));
        }

        :global([data-theme="light"]) .tube.big {
          animation: glitchCSLight 4.2s infinite ease-in-out;
        }

        :global([data-theme="light"]) .tube.small {
          -webkit-text-stroke: 0.8px #b91c1c;
          animation: glitchAdvLight 5.1s infinite ease-in-out;
        }

        /* Sparking State on Click / Tap */
        .sparking .tube {
          animation: sparkGlitch 0.9s steps(1, end) !important;
        }

        /* Realistic Continuous Neon Glitch: CS */
        @keyframes glitchCS {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 4px #ff2a36) drop-shadow(0 0 16px rgba(255, 42, 54, 0.75));
            transform: translate(0, 0);
          }
          14% {
            opacity: 1;
            transform: translate(0, 0);
          }
          15% {
            opacity: 0.25;
            filter: drop-shadow(0 0 1px #ff2a36);
            transform: translate(-1.5px, 0.5px);
          }
          16% {
            opacity: 1;
            filter: drop-shadow(0 0 6px #ff2a36) drop-shadow(0 0 20px rgba(255, 42, 54, 0.9));
            transform: translate(1px, -0.5px);
          }
          17% {
            opacity: 0.1;
            filter: none;
            transform: translate(0, 0);
          }
          18% {
            opacity: 0.95;
            filter: drop-shadow(0 0 4px #ff2a36) drop-shadow(0 0 16px rgba(255, 42, 54, 0.75));
            transform: translate(-0.5px, 0);
          }
          19% {
            opacity: 1;
            transform: translate(0, 0);
          }
          48% {
            opacity: 1;
          }
          49% {
            opacity: 0.5;
            transform: translate(1px, 0);
          }
          50% {
            opacity: 1;
            transform: translate(0, 0);
          }
          74% {
            opacity: 1;
          }
          75% {
            opacity: 0.2;
            filter: drop-shadow(0 0 1px #ff2a36);
            transform: translate(-1px, 0);
          }
          76% {
            opacity: 1;
            filter: drop-shadow(0 0 6px #ff2a36) drop-shadow(0 0 20px rgba(255, 42, 54, 0.9));
            transform: translate(0, 0);
          }
          77% {
            opacity: 0.1;
            filter: none;
          }
          78% {
            opacity: 0.85;
            filter: drop-shadow(0 0 2px #ff2a36);
          }
          79% {
            opacity: 1;
            filter: drop-shadow(0 0 4px #ff2a36) drop-shadow(0 0 16px rgba(255, 42, 54, 0.75));
          }
        }

        /* Realistic Continuous Neon Glitch: ADVERTISING */
        @keyframes glitchAdv {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 3px #ff2a36) drop-shadow(0 0 12px rgba(255, 42, 54, 0.7));
            transform: translate(0, 0);
          }
          28% {
            opacity: 1;
          }
          29% {
            opacity: 0.2;
            filter: none;
            transform: translate(1px, 0);
          }
          30% {
            opacity: 0.95;
            filter: drop-shadow(0 0 4px #ff2a36) drop-shadow(0 0 14px #ff2a36);
            transform: translate(0, 0);
          }
          31% {
            opacity: 1;
          }
          62% {
            opacity: 1;
          }
          63% {
            opacity: 0.35;
            transform: translate(-1px, 0);
          }
          64% {
            opacity: 1;
            transform: translate(0, 0);
          }
          85% {
            opacity: 1;
          }
          86% {
            opacity: 0.1;
            filter: none;
          }
          87% {
            opacity: 0.9;
          }
          88% {
            opacity: 0.3;
          }
          89% {
            opacity: 1;
            filter: drop-shadow(0 0 3px #ff2a36) drop-shadow(0 0 12px rgba(255, 42, 54, 0.7));
          }
        }

        /* Interactive Spark Glitch */
        @keyframes sparkGlitch {
          0% {
            opacity: 0.2;
            transform: translate(-2px, 1px);
            filter: drop-shadow(0 0 1px #ff2a36);
          }
          12% {
            opacity: 1;
            transform: translate(1.5px, -1px);
            filter: drop-shadow(0 0 8px #ff2a36) drop-shadow(0 0 25px #ff2a36);
          }
          28% {
            opacity: 0.08;
            transform: translate(-1px, 1px);
            filter: none;
          }
          45% {
            opacity: 0.95;
            transform: translate(1px, 0);
          }
          60% {
            opacity: 0.2;
            filter: drop-shadow(0 0 2px #ff2a36);
          }
          75% {
            opacity: 1;
            transform: translate(-1px, -1px);
            filter: drop-shadow(0 0 7px #ff2a36) drop-shadow(0 0 20px #ff2a36);
          }
          88% {
            opacity: 0.35;
          }
          100% {
            opacity: 1;
            transform: translate(0, 0);
          }
        }

        /* Light Mode Glitch Animations */
        @keyframes glitchCSLight {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 2px 8px rgba(225, 29, 46, 0.35));
            transform: translate(0, 0);
          }
          14% { opacity: 1; transform: translate(0, 0); }
          15% { opacity: 0.25; filter: none; transform: translate(-1.5px, 0.5px); }
          16% { opacity: 1; filter: drop-shadow(0 3px 14px rgba(225, 29, 46, 0.55)); transform: translate(1px, -0.5px); }
          17% { opacity: 0.1; filter: none; transform: translate(0, 0); }
          18% { opacity: 0.95; filter: drop-shadow(0 2px 8px rgba(225, 29, 46, 0.35)); transform: translate(-0.5px, 0); }
          19% { opacity: 1; transform: translate(0, 0); }
          48% { opacity: 1; }
          49% { opacity: 0.5; transform: translate(1px, 0); }
          50% { opacity: 1; transform: translate(0, 0); }
          74% { opacity: 1; }
          75% { opacity: 0.2; filter: none; transform: translate(-1px, 0); }
          76% { opacity: 1; filter: drop-shadow(0 3px 14px rgba(225, 29, 46, 0.55)); transform: translate(0, 0); }
          77% { opacity: 0.1; filter: none; }
          78% { opacity: 0.85; }
          79% { opacity: 1; filter: drop-shadow(0 2px 8px rgba(225, 29, 46, 0.35)); }
        }

        @keyframes glitchAdvLight {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 2px 6px rgba(225, 29, 46, 0.3));
            transform: translate(0, 0);
          }
          28% { opacity: 1; }
          29% { opacity: 0.2; filter: none; transform: translate(1px, 0); }
          30% { opacity: 0.95; filter: drop-shadow(0 3px 10px rgba(225, 29, 46, 0.5)); transform: translate(0, 0); }
          31% { opacity: 1; }
          62% { opacity: 1; }
          63% { opacity: 0.35; transform: translate(-1px, 0); }
          64% { opacity: 1; transform: translate(0, 0); }
          85% { opacity: 1; }
          86% { opacity: 0.1; filter: none; }
          87% { opacity: 0.9; }
          88% { opacity: 0.3; }
          89% { opacity: 1; filter: drop-shadow(0 2px 6px rgba(225, 29, 46, 0.3)); }
        }

        @media (max-width: 820px) {
          .hero-grid {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          .hero-sign-col {
            order: -1;
            display: flex;
            justify-content: center;
            width: 100%;
          }
          .sign {
            padding: 8px 0 16px;
          }
          .hero {
            padding: 32px 0 40px;
          }
          .tube.big {
            font-size: clamp(80px, 22vw, 125px);
          }
          .tube.small {
            font-size: clamp(15px, 4.2vw, 22px);
            letter-spacing: 0.28em;
            margin-top: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tube.big,
          .tube.small {
            animation: pulseGlow 4s infinite ease-in-out;
          }
        }
      `}</style>
    </div>
  );
}
