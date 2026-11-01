"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const featuredSigns = [
  {
    id: "retail-boards",
    title: "Commercial & Retail Boards",
    type: "Outdoor illuminated fascia & storefront signs",
    image: "/images/featured_2.jpg",
  },
  {
    id: "illuminated-showcase",
    title: "LED & 3D Signboards",
    type: "Storefront lightbox, 3D acrylic & retail signs",
    image: "/images/featured_1.jpg",
  },
  {
    id: "neon-signs",
    title: "Custom Neon Signs",
    type: "Handcrafted neon signs & decorative lighting",
    image: "/images/featured_3.png",
  },
];

export default function PortfolioSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [meterWidth, setMeterWidth] = useState(33);
  const [meterLeft, setMeterLeft] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(-1);

  const updateMeter = () => {
    const t = trackRef.current;
    if (!t) return;
    const max = t.scrollWidth - t.clientWidth;
    const w = Math.min(100, (t.clientWidth / t.scrollWidth) * 100);
    setMeterWidth(w);
    setMeterLeft(max > 0 ? (t.scrollLeft / max) * (100 - w) : 0);

    // On mobile screens (<= 820px), auto-hover / highlight the card in the center of the track.
    // On desktop / web, do NOT pre-hover cards — only hover via mouse.
    if (typeof window !== "undefined" && window.innerWidth <= 820) {
      const figures = t.querySelectorAll("figure");
      if (figures.length > 0) {
        const trackCenter = t.scrollLeft + t.clientWidth / 2;
        let closestIdx = 0;
        let minDiff = Infinity;
        figures.forEach((fig, idx) => {
          const figCenter = (fig as HTMLElement).offsetLeft + (fig as HTMLElement).offsetWidth / 2;
          const diff = Math.abs(trackCenter - figCenter);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = idx;
          }
        });
        setActiveCardIndex(closestIdx);
      }
    } else {
      setActiveCardIndex(-1);
    }
  };

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    t.addEventListener("scroll", updateMeter, { passive: true });
    window.addEventListener("resize", updateMeter);
    updateMeter();
    return () => {
      t.removeEventListener("scroll", updateMeter);
      window.removeEventListener("resize", updateMeter);
    };
  }, []);

  return (
    <section id="work">
      <div className="container">
        {/* Header */}
        <div className="head">
          <div>
            <h2>Featured signs</h2>
            <p className="intro">A few of the signs and shops we have lit up.</p>
          </div>
        </div>

        {/* 3 Featured Sign Cards with User's Images */}
        <div className="track" ref={trackRef} tabIndex={0} aria-label="Featured signs">
          {featuredSigns.map((item, idx) => (
            <figure key={item.id} className={activeCardIndex === idx ? "is-active" : ""}>
              <div className="card-media">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={380}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <figcaption>
                <span>
                  <strong>{item.title}</strong>
                  {item.type}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Meter progress bar */}
        <div className="meter" aria-hidden="true">
          <i style={{ width: `${meterWidth}%`, marginLeft: `${meterLeft}%` }} />
        </div>

        {/* Ai-Cha Banner with User's Ai-Cha Image */}
        <div className="banner glass" style={{ marginTop: "56px" }}>
          <div className="banner-visual">
            <Image
              src="/images/aicha_branding.png"
              alt="Ai-Cha Ice Cream & Tea branding"
              width={700}
              height={450}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          <div className="txt">
            <h3>Made for every business</h3>
            <div className="aicha-logo-wrap">
              <Image
                src="/images/aicha_logo.png"
                alt="Ai-CHA Ice Cream & Tea"
                width={240}
                height={80}
                className="aicha-logo-img"
                style={{
                  width: "auto",
                  height: "auto",
                  maxHeight: "64px",
                  maxWidth: "240px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <p>
              Received a complete shop branding &amp; interior fit-out: <span className="highlight-features">custom 3D signage, neon lighting, furniture, and branded storefront fixtures</span>.
            </p>
            <a
              className="btn line"
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
        .head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 32px;
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
          margin: 0;
          font-size: 16.5px;
          line-height: 1.6;
        }

        .track {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(280px, 1fr);
          gap: 18px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding: 24px 10px 24px;
          margin-top: -16px;
          margin-bottom: -16px;
        }

        .track::-webkit-scrollbar {
          display: none;
        }

        figure {
          margin: 0;
          border: 1px solid var(--line);
          background: var(--panel);
          border-radius: 10px;
          overflow: hidden;
          scroll-snap-align: center;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
        }

        figure:hover {
          transform: translateY(-6px) rotate(-0.5deg);
          border-color: var(--red);
          box-shadow: 0 0 16px rgba(255, 42, 54, 0.45), 0 0 32px rgba(255, 42, 54, 0.2);
        }

        :global([data-theme="light"]) figure:hover {
          border-color: var(--red);
          box-shadow: 0 6px 22px rgba(225, 29, 46, 0.28);
          transform: translateY(-4px);
        }

        .card-media {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #000;
        }

        .card-media :global(img) {
          transition: transform 0.3s ease;
        }

        figure:hover .card-media :global(img) {
          transform: scale(1.05);
        }

        figcaption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          border-top: 1px solid var(--line);
          color: var(--muted);
          font-size: 15px;
          background: var(--panel);
        }

        figcaption strong {
          display: block;
          color: var(--text);
          font-size: 17px;
          font-weight: 800;
          transition: color 0.25s ease;
        }

        figure:hover figcaption strong {
          color: var(--red);
          text-shadow: 0 0 10px rgba(255, 42, 54, 0.45);
        }

        :global([data-theme="light"]) figure:hover figcaption strong {
          color: var(--red-deep);
          text-shadow: none;
        }

        .meter {
          height: 3px;
          background: var(--line);
          margin-top: 28px;
          border-radius: 2px;
          overflow: hidden;
        }

        .meter i {
          display: block;
          height: 100%;
          background: var(--red);
          box-shadow: var(--glow);
          transition: all 0.1s linear;
        }

        /* Banner matching Screenshot 2 */
        .banner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
          border: 1px solid rgba(255, 110, 118, 0.4);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .banner:hover {
          border-color: var(--red);
          box-shadow: 0 0 12px rgba(255, 42, 54, 0.6), 0 0 35px rgba(255, 42, 54, 0.3);
          transform: translateY(-2px);
        }

        .banner-visual {
          position: relative;
          min-height: 320px;
          border-right: 1px solid var(--line);
          overflow: hidden;
          background: #000;
        }

        .banner-visual :global(img) {
          transition: transform 0.3s ease;
        }

        .banner:hover .banner-visual :global(img) {
          transform: scale(1.03);
        }

        .txt {
          padding: 32px 32px 32px 0;
        }

        .txt h3 {
          font-size: clamp(28px, 3.6vw, 42px);
          line-height: 1.1;
          font-weight: 900;
          margin: 0 0 16px;
          color: var(--text);
          letter-spacing: -0.01em;
        }

        .txt p {
          color: var(--muted-light);
          margin: 0 0 26px;
          max-width: 44ch;
          font-size: 16.5px;
          line-height: 1.65;
        }

        .aicha-logo-wrap {
          margin-bottom: 14px;
          display: inline-block;
        }

        :global(.aicha-logo-img) {
          filter: drop-shadow(0 0 8px rgba(255, 42, 54, 0.5)) drop-shadow(0 0 20px rgba(255, 42, 54, 0.25));
          transition: filter 0.3s ease, transform 0.3s ease;
        }

        .banner:hover :global(.aicha-logo-img) {
          filter: drop-shadow(0 0 10px #ff2a36) drop-shadow(0 0 26px rgba(255, 42, 54, 0.7));
          transform: translateY(-1px) scale(1.02);
        }

        :global([data-theme="light"]) :global(.aicha-logo-img) {
          filter: drop-shadow(0 2px 8px rgba(225, 29, 46, 0.35)) drop-shadow(0 0 16px rgba(225, 29, 46, 0.15));
        }

        :global([data-theme="light"]) .banner:hover :global(.aicha-logo-img) {
          filter: drop-shadow(0 4px 14px rgba(225, 29, 46, 0.5));
          transform: translateY(-1px) scale(1.02);
        }

        :global(.highlight-brand) {
          color: var(--text);
          font-weight: 800;
          font-size: 18.5px;
          display: block;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }

        :global(.highlight-features) {
          color: var(--text);
          font-weight: 600;
        }

        .btn.line {
          display: inline-block;
          padding: 14px 28px;
          font-weight: 800;
          text-decoration: none;
          border: 2px solid var(--red);
          border-radius: 8px;
          font-size: 16px;
          color: var(--text);
          box-shadow: var(--glow-soft);
          background: transparent;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn.line:hover {
          background: var(--red);
          border-color: var(--red);
          color: #ffffff;
          box-shadow: 0 0 10px #ff2a36, 0 0 25px rgba(255, 42, 54, 0.75), 0 0 50px rgba(255, 42, 54, 0.45);
          transform: translateY(-2px);
        }

        /* Light Mode */
        :global([data-theme="light"]) .btn.line {
          color: var(--text);
          border: 2px solid var(--red);
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(225, 29, 46, 0.12);
        }

        :global([data-theme="light"]) .btn.line:hover {
          background: var(--red-deep) !important;
          border-color: var(--red-deep) !important;
          color: #ffffff !important;
          box-shadow: 0 6px 20px rgba(225, 29, 46, 0.35) !important;
          transform: translateY(-2px);
        }

        @media (max-width: 820px) {
          figure.is-active {
            transform: translateY(-4px);
            border-color: var(--red);
            box-shadow: 0 0 14px rgba(255, 42, 54, 0.45), 0 0 28px rgba(255, 42, 54, 0.2);
          }
          :global([data-theme="light"]) figure.is-active {
            border-color: var(--red);
            box-shadow: 0 6px 20px rgba(225, 29, 46, 0.28);
            transform: translateY(-3px);
          }
          figure.is-active .card-media :global(img) {
            transform: scale(1.04);
          }
          figure.is-active figcaption strong {
            color: var(--red);
            text-shadow: 0 0 10px rgba(255, 42, 54, 0.45);
          }
          :global([data-theme="light"]) figure.is-active figcaption strong {
            color: var(--red-deep);
            text-shadow: none;
          }
          .banner {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .banner-visual {
            border-right: 0;
            border-bottom: 1px solid var(--line);
            min-height: 220px;
          }
          .txt {
            padding: 24px 24px 32px;
          }
        }
      `}</style>
    </section>
  );
}
