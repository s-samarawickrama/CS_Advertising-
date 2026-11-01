"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [sparking, setSparking] = useState(false);
  const [autoGlitch, setAutoGlitch] = useState(false);
  const [glitchPhase, setGlitchPhase] = useState(1);

  const triggerSpark = () => {
    setSparking(true);
    setTimeout(() => setSparking(false), 900);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    // Automatic periodic neon glitch loop (runs continuously on all mobile & desktop browsers)
    const runGlitch = () => {
      setGlitchPhase((prev) => (prev % 3) + 1);
      setAutoGlitch(true);

      // Realistic neon buzz duration: 280ms
      timeoutId = setTimeout(() => {
        setAutoGlitch(false);
      }, 280);
    };

    // First glitch triggers 700ms after load
    const initialTimer = setTimeout(runGlitch, 700);

    // Then continuously every 2.6 seconds
    intervalId = setInterval(runGlitch, 2600);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

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
              className={`sign ${sparking ? "sparking" : ""} ${autoGlitch ? `auto-glitch phase-${glitchPhase}` : ""}`}
              onClick={triggerSpark}
              onTouchStart={triggerSpark}
              title="Click or tap to spark neon sign"
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
          padding: 72px 0 80px;
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
          padding: 20px 0;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
          overflow: visible;
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
          overflow: visible;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, opacity, filter;
        }

        .tube.big {
          font-size: clamp(110px, 18vw, 200px);
          line-height: 1.15;
          font-style: italic;
          letter-spacing: -0.02em;
          padding: 12px 20px 4px;
          overflow: visible;
          -webkit-text-stroke: 2.5px #ff2a36;
          filter: drop-shadow(0 0 4px #ff2a36) drop-shadow(0 0 14px rgba(255, 42, 54, 0.8)) drop-shadow(0 0 28px rgba(255, 42, 54, 0.45));
          animation: glitchAndShineCS 3.4s infinite ease-in-out;
        }

        .tube.small {
          font-size: clamp(20px, 3vw, 32px);
          letter-spacing: 0.36em;
          font-weight: 800;
          padding: 4px 10px;
          overflow: visible;
          -webkit-text-stroke: 1.2px #ff2a36;
          margin-top: 10px;
          filter: drop-shadow(0 0 3px #ff2a36) drop-shadow(0 0 12px rgba(255, 42, 54, 0.7));
          animation: glitchAndShineAdv 4.1s infinite ease-in-out;
        }

        /* Light Mode - Filled Solid Red Letters with No Cutting & Clean Red Glow */
        :global([data-theme="light"]) .tube {
          color: #e11d2e;
          -webkit-text-fill-color: #e11d2e;
          -webkit-text-stroke: 1.5px #b91c1c;
          filter: drop-shadow(0 2px 10px rgba(225, 29, 46, 0.4)) drop-shadow(0 0 20px rgba(225, 29, 46, 0.2));
        }

        :global([data-theme="light"]) .tube.big {
          animation: glitchAndShineCSLight 3.4s infinite ease-in-out;
        }

        :global([data-theme="light"]) .tube.small {
          -webkit-text-stroke: 0.8px #b91c1c;
          animation: glitchAndShineAdvLight 4.1s infinite ease-in-out;
        }

        /* Sparking State on Click / Tap */
        .sparking .tube {
          animation: sparkGlitch 0.9s steps(1, end) !important;
        }

        /* Active Automatic Glitch States (Triggered in JS loop on all devices) */
        .auto-glitch.phase-1 .tube.big {
          animation: jsGlitch1 0.28s steps(1, end) !important;
        }
        .auto-glitch.phase-2 .tube.big {
          animation: jsGlitch2 0.3s steps(1, end) !important;
        }
        .auto-glitch.phase-3 .tube.big {
          animation: jsGlitch3 0.26s steps(1, end) !important;
        }
        .auto-glitch .tube.small {
          animation: jsGlitchSmall 0.28s steps(1, end) !important;
        }

        :global([data-theme="light"]) .auto-glitch.phase-1 .tube.big,
        :global([data-theme="light"]) .auto-glitch.phase-2 .tube.big,
        :global([data-theme="light"]) .auto-glitch.phase-3 .tube.big {
          animation: jsGlitchLight 0.28s steps(1, end) !important;
        }

        @keyframes jsGlitch1 {
          0% {
            opacity: 0.15;
            transform: translate3d(-2px, 1px, 0) skewX(-1.5deg);
            filter: drop-shadow(0 0 1px #ff2a36);
          }
          18% {
            opacity: 1;
            transform: translate3d(2px, -1px, 0);
            filter: drop-shadow(0 0 10px #ff2a36) drop-shadow(0 0 28px rgba(255, 42, 54, 0.95)) drop-shadow(0 0 55px rgba(255, 42, 54, 0.6));
          }
          36% {
            opacity: 0.1;
            transform: translate3d(0, 0, 0);
            filter: none;
          }
          54% {
            opacity: 0.95;
            transform: translate3d(-1px, 0.5px, 0);
            filter: drop-shadow(0 0 6px #ff2a36) drop-shadow(0 0 18px rgba(255, 42, 54, 0.85));
          }
          72% {
            opacity: 0.25;
            filter: drop-shadow(0 0 1.5px #ff2a36);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: drop-shadow(0 0 4px #ff2a36) drop-shadow(0 0 14px rgba(255, 42, 54, 0.8)) drop-shadow(0 0 28px rgba(255, 42, 54, 0.45));
          }
        }

        @keyframes jsGlitch2 {
          0% {
            opacity: 0.95;
            transform: translate3d(1.5px, -1px, 0);
            filter: drop-shadow(0 0 8px #ff2a36) drop-shadow(0 0 22px #ff2a36);
          }
          20% {
            opacity: 0.1;
            transform: translate3d(-1.5px, 0, 0);
            filter: none;
          }
          40% {
            opacity: 1;
            transform: translate3d(1.5px, 1px, 0);
            filter: drop-shadow(0 0 10px #ff2a36) drop-shadow(0 0 32px rgba(255, 42, 54, 0.95));
          }
          65% {
            opacity: 0.2;
            filter: drop-shadow(0 0 1.5px #ff2a36);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: drop-shadow(0 0 4px #ff2a36) drop-shadow(0 0 14px rgba(255, 42, 54, 0.8)) drop-shadow(0 0 28px rgba(255, 42, 54, 0.45));
          }
        }

        @keyframes jsGlitch3 {
          0% {
            opacity: 0.1;
            filter: none;
          }
          25% {
            opacity: 1;
            transform: translate3d(-1.5px, -0.5px, 0);
            filter: drop-shadow(0 0 8px #ff2a36) drop-shadow(0 0 25px rgba(255, 42, 54, 0.9));
          }
          50% {
            opacity: 0.3;
            transform: translate3d(1px, 0, 0);
          }
          75% {
            opacity: 1;
            filter: drop-shadow(0 0 6px #ff2a36) drop-shadow(0 0 18px rgba(255, 42, 54, 0.85));
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: drop-shadow(0 0 4px #ff2a36) drop-shadow(0 0 14px rgba(255, 42, 54, 0.8)) drop-shadow(0 0 28px rgba(255, 42, 54, 0.45));
          }
        }

        @keyframes jsGlitchSmall {
          0% { opacity: 0.2; transform: translate3d(1px, 0, 0); filter: none; }
          30% { opacity: 1; filter: drop-shadow(0 0 6px #ff2a36) drop-shadow(0 0 18px #ff2a36); }
          60% { opacity: 0.2; filter: none; }
          100% { opacity: 1; transform: translate3d(0, 0, 0); filter: drop-shadow(0 0 3px #ff2a36) drop-shadow(0 0 12px rgba(255, 42, 54, 0.7)); }
        }

        @keyframes jsGlitchLight {
          0% {
            opacity: 0.2;
            transform: translate3d(-1.5px, 0.5px, 0);
            filter: none;
          }
          25% {
            opacity: 1;
            transform: translate3d(1.5px, -0.5px, 0);
            filter: drop-shadow(0 3px 18px rgba(225, 29, 46, 0.75)) drop-shadow(0 0 30px rgba(225, 29, 46, 0.45));
          }
          50% {
            opacity: 0.15;
            filter: none;
          }
          75% {
            opacity: 1;
            filter: drop-shadow(0 2px 12px rgba(225, 29, 46, 0.5));
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: drop-shadow(0 2px 10px rgba(225, 29, 46, 0.4)) drop-shadow(0 0 20px rgba(225, 29, 46, 0.2));
          }
        }

        /* Continuous Living Neon Glitch + Shine: CS */
        @keyframes glitchAndShineCS {
          0% {
            opacity: 1;
            filter: drop-shadow(0 0 4px #ff2a36) drop-shadow(0 0 14px rgba(255, 42, 54, 0.8)) drop-shadow(0 0 28px rgba(255, 42, 54, 0.45));
            transform: translate3d(0, 0, 0);
          }
          12% {
            opacity: 0.94;
            filter: drop-shadow(0 0 3px #ff2a36) drop-shadow(0 0 10px rgba(255, 42, 54, 0.7));
          }
          18% {
            opacity: 0.25;
            filter: drop-shadow(0 0 1px #ff2a36);
            transform: translate3d(-1.5px, 0.5px, 0);
          }
          19% {
            opacity: 1;
            filter: drop-shadow(0 0 8px #ff2a36) drop-shadow(0 0 24px rgba(255, 42, 54, 0.95)) drop-shadow(0 0 45px rgba(255, 42, 54, 0.6));
            transform: translate3d(1.5px, -0.5px, 0);
          }
          20% {
            opacity: 0.12;
            filter: none;
            transform: translate3d(0, 0, 0);
          }
          21% {
            opacity: 0.95;
            filter: drop-shadow(0 0 5px #ff2a36) drop-shadow(0 0 16px rgba(255, 42, 54, 0.85));
            transform: translate3d(-0.5px, 0, 0);
          }
          22% {
            opacity: 1;
            filter: drop-shadow(0 0 4px #ff2a36) drop-shadow(0 0 14px rgba(255, 42, 54, 0.8));
            transform: translate3d(0, 0, 0);
          }
          45% {
            opacity: 1;
            filter: drop-shadow(0 0 6px #ff2a36) drop-shadow(0 0 20px rgba(255, 42, 54, 0.9)) drop-shadow(0 0 40px rgba(255, 42, 54, 0.55));
            transform: translate3d(0, 0, 0);
          }
          55% {
            opacity: 0.92;
            filter: drop-shadow(0 0 3.5px #ff2a36) drop-shadow(0 0 12px rgba(255, 42, 54, 0.75));
          }
          68% {
            opacity: 0.3;
            filter: drop-shadow(0 0 1.5px #ff2a36);
            transform: translate3d(1px, 0, 0);
          }
          69% {
            opacity: 1;
            filter: drop-shadow(0 0 7px #ff2a36) drop-shadow(0 0 24px rgba(255, 42, 54, 0.95));
            transform: translate3d(0, 0, 0);
          }
          70% {
            opacity: 0.2;
            filter: none;
          }
          71% {
            opacity: 1;
            filter: drop-shadow(0 0 4px #ff2a36) drop-shadow(0 0 14px rgba(255, 42, 54, 0.8));
          }
          88% {
            opacity: 1;
            filter: drop-shadow(0 0 5px #ff2a36) drop-shadow(0 0 18px rgba(255, 42, 54, 0.85));
          }
          100% {
            opacity: 1;
            filter: drop-shadow(0 0 4px #ff2a36) drop-shadow(0 0 14px rgba(255, 42, 54, 0.8)) drop-shadow(0 0 28px rgba(255, 42, 54, 0.45));
            transform: translate3d(0, 0, 0);
          }
        }

        /* Continuous Living Neon Glitch + Shine: ADVERTISING */
        @keyframes glitchAndShineAdv {
          0% {
            opacity: 1;
            filter: drop-shadow(0 0 3px #ff2a36) drop-shadow(0 0 12px rgba(255, 42, 54, 0.7));
            transform: translate3d(0, 0, 0);
          }
          28% {
            opacity: 1;
            filter: drop-shadow(0 0 4px #ff2a36) drop-shadow(0 0 15px rgba(255, 42, 54, 0.85));
          }
          29% {
            opacity: 0.2;
            filter: none;
            transform: translate3d(1px, 0, 0);
          }
          30% {
            opacity: 0.95;
            filter: drop-shadow(0 0 5px #ff2a36) drop-shadow(0 0 18px #ff2a36);
            transform: translate3d(0, 0, 0);
          }
          31% {
            opacity: 1;
            filter: drop-shadow(0 0 3px #ff2a36) drop-shadow(0 0 12px rgba(255, 42, 54, 0.7));
          }
          62% {
            opacity: 0.94;
          }
          63% {
            opacity: 0.35;
            filter: drop-shadow(0 0 1px #ff2a36);
            transform: translate3d(-1px, 0, 0);
          }
          64% {
            opacity: 1;
            filter: drop-shadow(0 0 4px #ff2a36) drop-shadow(0 0 14px #ff2a36);
            transform: translate3d(0, 0, 0);
          }
          85% {
            opacity: 1;
            filter: drop-shadow(0 0 5px #ff2a36) drop-shadow(0 0 16px rgba(255, 42, 54, 0.8));
          }
          86% {
            opacity: 0.15;
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
          100% {
            opacity: 1;
            filter: drop-shadow(0 0 3px #ff2a36) drop-shadow(0 0 12px rgba(255, 42, 54, 0.7));
            transform: translate3d(0, 0, 0);
          }
        }

        /* Interactive Spark Glitch */
        @keyframes sparkGlitch {
          0% {
            opacity: 0.2;
            transform: translate3d(-2px, 1px, 0);
            filter: drop-shadow(0 0 1px #ff2a36);
          }
          12% {
            opacity: 1;
            transform: translate3d(1.5px, -1px, 0);
            filter: drop-shadow(0 0 8px #ff2a36) drop-shadow(0 0 25px #ff2a36);
          }
          28% {
            opacity: 0.08;
            transform: translate3d(-1px, 1px, 0);
            filter: none;
          }
          45% {
            opacity: 0.95;
            transform: translate3d(1px, 0, 0);
          }
          60% {
            opacity: 0.2;
            filter: drop-shadow(0 0 2px #ff2a36);
          }
          75% {
            opacity: 1;
            transform: translate3d(-1px, -1px, 0);
            filter: drop-shadow(0 0 7px #ff2a36) drop-shadow(0 0 20px #ff2a36);
          }
          88% {
            opacity: 0.35;
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        /* Light Mode Continuous Glitch & Shine Animations */
        @keyframes glitchAndShineCSLight {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 2px 8px rgba(225, 29, 46, 0.35)) drop-shadow(0 0 14px rgba(225, 29, 46, 0.25));
            transform: translate3d(0, 0, 0);
          }
          18% {
            opacity: 0.3;
            filter: none;
            transform: translate3d(-1px, 0.5px, 0);
          }
          19% {
            opacity: 1;
            filter: drop-shadow(0 3px 18px rgba(225, 29, 46, 0.75)) drop-shadow(0 0 30px rgba(225, 29, 46, 0.45));
            transform: translate3d(1px, -0.5px, 0);
          }
          20% {
            opacity: 0.2;
            filter: none;
          }
          21% {
            opacity: 1;
            filter: drop-shadow(0 2px 10px rgba(225, 29, 46, 0.45));
          }
          48% {
            opacity: 1;
            filter: drop-shadow(0 3px 16px rgba(225, 29, 46, 0.6)) drop-shadow(0 0 24px rgba(225, 29, 46, 0.35));
          }
          68% {
            opacity: 0.35;
            filter: none;
          }
          69% {
            opacity: 1;
            filter: drop-shadow(0 3px 18px rgba(225, 29, 46, 0.75));
          }
          70% {
            opacity: 0.85;
          }
          85% {
            opacity: 1;
            filter: drop-shadow(0 2px 10px rgba(225, 29, 46, 0.45));
          }
        }

        @keyframes glitchAndShineAdvLight {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 2px 6px rgba(225, 29, 46, 0.3));
            transform: translate3d(0, 0, 0);
          }
          28% {
            opacity: 1;
            filter: drop-shadow(0 2px 10px rgba(225, 29, 46, 0.5));
          }
          29% {
            opacity: 0.2;
            filter: none;
            transform: translate3d(1px, 0, 0);
          }
          30% {
            opacity: 0.95;
            filter: drop-shadow(0 3px 12px rgba(225, 29, 46, 0.6));
            transform: translate3d(0, 0, 0);
          }
          31% { opacity: 1; }
          62% { opacity: 1; }
          63% { opacity: 0.35; transform: translate3d(-1px, 0, 0); }
          64% { opacity: 1; transform: translate3d(0, 0, 0); }
          85% { opacity: 1; }
          86% { opacity: 0.1; filter: none; }
          87% { opacity: 0.9; }
          88% { opacity: 0.3; }
          89% { opacity: 1; filter: drop-shadow(0 2px 6px rgba(225, 29, 46, 0.3)); }
        }

        /* Fallback for Low Power & Reduced Motion */
        @keyframes pulseGlow {
          0%, 100% {
            filter: drop-shadow(0 0 3px #ff2a36) drop-shadow(0 0 10px rgba(255, 42, 54, 0.7));
          }
          50% {
            filter: drop-shadow(0 0 6px #ff2a36) drop-shadow(0 0 20px rgba(255, 42, 54, 0.95)) drop-shadow(0 0 35px rgba(255, 42, 54, 0.5));
          }
        }

        @media (max-width: 820px) {
          .hero-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .hero-sign-col {
            order: -1;
            display: flex;
            justify-content: center;
            width: 100%;
            overflow: visible;
          }
          .sign {
            padding: 8px 0 12px;
            overflow: visible;
          }
          .hero {
            padding: 28px 0 36px;
          }
          .tube.big {
            font-size: clamp(75px, 20vw, 115px);
            line-height: 1.15;
            padding: 10px 16px 4px;
            overflow: visible;
          }
          .tube.small {
            font-size: clamp(14px, 4vw, 20px);
            letter-spacing: 0.28em;
            margin-top: 8px;
            overflow: visible;
          }
        }
      `}</style>
    </div>
  );
}
