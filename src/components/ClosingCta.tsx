"use client";

export default function ClosingCta() {
  return (
    <section className="close">
      <div className="container">
        <div className="close-inner">
          <h2 className="close-title">Your brand should never go dark.</h2>
          <p className="close-desc">
            Send us your shop front and your idea. We will prepare a design and a quotation.
          </p>
          <a
            className="btn btn-primary close-btn"
            href="https://wa.me/94779282503?text=Hi%20CS%20Advertising,%20here%20is%20my%20shop%20front%20and%20idea%20for%20a%20quotation."
            target="_blank"
            rel="noopener noreferrer"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>

      <style jsx>{`
        .close {
          position: relative;
          overflow: hidden;
          text-align: center;
          padding: 110px 0 120px;
          border-bottom: 1px solid var(--line);
        }

        .close::before {
          content: "";
          position: absolute;
          inset: auto -10% -30% -10%;
          height: 120%;
          background: repeating-linear-gradient(
            75deg,
            rgba(255, 42, 54, 0) 0 70px,
            rgba(255, 42, 54, 0.1) 100px,
            rgba(255, 42, 54, 0) 160px
          );
          -webkit-mask-image: linear-gradient(transparent 20%, #000);
          mask-image: linear-gradient(transparent 20%, #000);
          pointer-events: none;
        }

        :global([data-theme="light"]) .close::before {
          background: repeating-linear-gradient(
            75deg,
            rgba(225, 29, 46, 0) 0 70px,
            rgba(225, 29, 46, 0.04) 100px,
            rgba(225, 29, 46, 0) 160px
          );
        }

        .close-inner {
          position: relative;
          z-index: 2;
        }

        .close-title {
          font-size: clamp(34px, 5.4vw, 68px);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #ffffff;
          text-shadow: var(--glow);
          margin: 0 0 16px;
        }

        :global([data-theme="light"]) .close-title {
          color: #0f172a;
          text-shadow: 0 0 14px rgba(225, 29, 46, 0.35);
        }

        .close-desc {
          color: var(--muted);
          max-width: 46ch;
          margin: 0 auto 32px;
          font-size: clamp(16px, 1.8vw, 18px);
          line-height: 1.6;
        }

        .close-btn {
          font-size: 16px;
          padding: 14px 30px;
        }
      `}</style>
    </section>
  );
}
