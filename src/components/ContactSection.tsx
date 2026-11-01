"use client";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          <div>
            <h2>Tell us what you need</h2>
            <p className="intro">
              Pricing depends on your design, size, materials and project requirements. Send us the details and we will prepare a quotation for you.
            </p>
            <div className="quote">
              <p>Call or message us on WhatsApp with a photo of your shop front and the size of the space.</p>
              <a
                className="btn btn-primary quote-btn"
                href="https://wa.me/94779282503?text=Hi%20CS%20Advertising,%20I'd%20like%20a%20quotation%20for%20my%20shop%20front."
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          <dl>
            <div>
              <dt>Phone and WhatsApp</dt>
              <dd>
                <a href="tel:+94779282503">077 928 2503</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:csadvertisingboralasgamuwa@gmail.com">csadvertisingboralasgamuwa@gmail.com</a>
              </dd>
            </div>
            <div>
              <dt>Workshop</dt>
              <dd>
                <a
                  href="https://maps.app.goo.gl/bKx8XBbLHe53FMZT8?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Egodawatta Road, Boralesgamuwa, Sri Lanka
                </a>
              </dd>
            </div>
            <div>
              <dt>Facebook</dt>
              <dd>
                <a
                  href="https://www.facebook.com/profile.php?id=61575611732751"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CS Advertising
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
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
          margin: 0 0 36px;
          font-size: 16.5px;
          line-height: 1.6;
        }

        .quote {
          border: 1px solid rgba(255, 42, 54, 0.35);
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          border-radius: 12px;
          background: var(--panel);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .quote:hover {
          border-color: var(--red);
          box-shadow: 0 0 12px rgba(255, 42, 54, 0.8), 0 0 35px rgba(255, 42, 54, 0.45), 0 0 60px rgba(255, 42, 54, 0.2);
          transform: translateY(-2px);
        }

        :global([data-theme="light"]) .quote {
          border: 1.5px solid var(--red);
          background: #ffffff;
          box-shadow: 0 8px 30px rgba(225, 29, 46, 0.12), 0 2px 10px rgba(0, 0, 0, 0.04);
        }

        :global([data-theme="light"]) .quote:hover {
          border-color: var(--red-deep);
          box-shadow: 0 12px 36px rgba(225, 29, 46, 0.22);
          transform: translateY(-2px);
        }

        .quote p {
          margin: 0 0 22px;
          color: var(--text);
          font-size: 16.5px;
          font-weight: 600;
          line-height: 1.6;
        }

        .quote-btn {
          font-size: 15.5px;
          padding: 13px 26px;
          border-radius: 8px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .quote-btn:hover {
          background: var(--red) !important;
          border-color: var(--red) !important;
          color: #ffffff !important;
          box-shadow: 0 0 10px #ff2a36, 0 0 25px rgba(255, 42, 54, 0.75), 0 0 50px rgba(255, 42, 54, 0.45) !important;
          transform: translateY(-2px);
        }

        :global([data-theme="light"]) .quote-btn:hover {
          background: #b91c1c !important;
          border-color: #991b1b !important;
          box-shadow: 0 6px 22px rgba(225, 29, 46, 0.45) !important;
          transform: translateY(-3px) scale(1.02);
        }

        dl {
          margin: 0;
          display: grid;
          gap: 28px;
        }

        dt {
          color: var(--muted);
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        dd {
          margin: 4px 0 0;
          font-size: 21px;
          font-weight: 700;
          color: var(--text);
          overflow-wrap: anywhere;
        }

        dd a {
          text-decoration: none;
          color: var(--text);
          border-bottom: 1px solid var(--red);
          transition: all 0.2s ease;
        }

        dd a:hover {
          color: #ffffff;
          text-shadow: var(--glow);
        }

        :global([data-theme="light"]) dd a:hover {
          color: var(--red);
        }

        @media (max-width: 820px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
