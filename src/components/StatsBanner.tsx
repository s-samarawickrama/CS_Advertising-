"use client";

export default function StatsBanner() {
  return (
    <div className="stats">
      <div className="glass">
        <div className="stat">
          <b>8</b>
          <span>services under one roof</span>
        </div>
        <div className="stat">
          <b>3D</b>
          <span>LED, neon and embossed lettering</span>
        </div>
        <div className="stat">
          <b>1 team</b>
          <span>from design to installation</span>
        </div>
      </div>

      <style jsx>{`
        .stats {
          position: relative;
          z-index: 2;
          margin-top: -64px;
          padding: 0 24px;
        }

        .glass {
          max-width: 1112px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          position: relative;
          background: linear-gradient(135deg, rgba(255, 42, 54, 0.16), rgba(255, 255, 255, 0.03) 60%);
          -webkit-backdrop-filter: blur(14px);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 110, 118, 0.4);
          border-radius: 14px;
          box-shadow: inset 0 0 30px rgba(255, 42, 54, 0.1), 0 0 40px rgba(255, 42, 54, 0.12);
        }

        :global([data-theme="light"]) .glass {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(241, 245, 249, 0.85));
          border: 1px solid rgba(225, 29, 46, 0.25);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .glass::before {
          content: "";
          position: absolute;
          inset: 10px -10px -10px 10px;
          border: 1px solid rgba(255, 110, 118, 0.3);
          border-radius: 14px;
          transform: rotate(0.8deg);
          pointer-events: none;
        }

        :global([data-theme="light"]) .glass::before {
          border-color: rgba(225, 29, 46, 0.18);
        }

        .stat {
          padding: 28px 32px;
          text-align: left;
        }

        .stat + .stat {
          border-left: 1px solid rgba(255, 110, 118, 0.25);
        }

        :global([data-theme="light"]) .stat + .stat {
          border-left-color: rgba(225, 29, 46, 0.15);
        }

        .stat b {
          display: block;
          font-size: clamp(34px, 4.4vw, 52px);
          line-height: 1;
          font-weight: 900;
          color: #ffffff;
          text-shadow: var(--glow);
          letter-spacing: -0.02em;
        }

        :global([data-theme="light"]) .stat b {
          color: #0f172a;
          text-shadow: 0 2px 10px rgba(225, 29, 46, 0.25);
        }

        .stat span {
          display: block;
          margin-top: 8px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.4;
        }

        @media (max-width: 820px) {
          .stats {
            margin-top: 24px;
            padding: 0 16px;
          }
          .glass::before {
            display: none;
          }
          .stats .glass {
            grid-template-columns: 1fr;
          }
          .stat {
            padding: 20px 24px;
          }
          .stat + .stat {
            border-left: 0;
            border-top: 1px solid rgba(255, 110, 118, 0.25);
          }
        }
      `}</style>
    </div>
  );
}
