"use client";

import Link from "next/link";
import Image from "next/image";

interface AiChaProps {
  image?: string; // Optional image prop when user adds custom photo
}

export default function AiChaCaseStudy({ image }: AiChaProps) {
  return (
    <section id="aicha">
      <div className="container">
        <div className="banner glass">
          {image ? (
            <div className="banner-image">
              <Image
                src={image}
                alt="Ai-Cha Ice Cream & Tea shop branding"
                width={600}
                height={350}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ) : (
            <div className="face aicha-face">Ai-Cha</div>
          )}

          <div className="txt">
            <h3>Made for every business</h3>
            <div style={{ marginBottom: "14px" }}>
              <Image
                src="/images/aicha_logo.png"
                alt="Ai-CHA Ice Cream & Tea"
                width={240}
                height={80}
                style={{
                  width: "auto",
                  height: "auto",
                  maxHeight: "64px",
                  maxWidth: "240px",
                  objectFit: "contain",
                  display: "block",
                  filter: "drop-shadow(0 0 8px rgba(255, 42, 54, 0.5)) drop-shadow(0 0 20px rgba(255, 42, 54, 0.25))",
                }}
              />
            </div>
            <p>
              Received a complete shop branding &amp; interior fit-out: <span className="highlight-features">custom 3D signage, neon lighting, furniture, and branded storefront fixtures</span>.
            </p>
            <a
              className="btn btn-secondary start-btn"
              href="https://wa.me/94779282503?text=Hi%20CS%20Advertising,%20I'd%20like%20to%20start%20a%20shop%20branding%20project%20like%20Ai-Cha."
              target="_blank"
              rel="noopener noreferrer"
            >
              Start your project
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .banner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
          border: 1px solid var(--line);
          border-radius: 14px;
          background: var(--panel);
          overflow: hidden;
          box-shadow: var(--card-shadow);
        }

        .face {
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 900;
          color: #ffffff;
          text-shadow: var(--glow);
          border-right: 1px solid var(--line);
          background: linear-gradient(135deg, rgba(255, 42, 54, 0.1), transparent 70%);
          user-select: none;
        }

        :global([data-theme="light"]) .face {
          color: #0f172a;
          text-shadow: 0 0 12px rgba(225, 29, 46, 0.35);
        }

        .banner-image {
          min-height: 280px;
          border-right: 1px solid var(--line);
          overflow: hidden;
        }

        .txt {
          padding: 36px 36px 36px 0;
        }

        .txt h3 {
          font-size: clamp(26px, 3.4vw, 38px);
          line-height: 1.15;
          font-weight: 900;
          margin: 0 0 14px;
          color: var(--text);
        }

        .txt p {
          color: var(--muted);
          margin: 0 0 24px;
          max-width: 44ch;
          font-size: 16px;
          line-height: 1.6;
        }

        .start-btn {
          border: 2px solid var(--red);
          color: var(--text);
          font-weight: 800;
          padding: 12px 24px;
        }

        .start-btn:hover {
          box-shadow: var(--glow);
          background: rgba(255, 42, 54, 0.08);
        }

        @media (max-width: 820px) {
          .banner {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .face,
          .banner-image {
            border-right: 0;
            border-bottom: 1px solid var(--line);
            min-height: 200px;
          }
          .txt {
            padding: 24px 24px 32px;
          }
        }
      `}</style>
    </section>
  );
}
