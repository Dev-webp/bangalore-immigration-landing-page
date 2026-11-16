import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/AboutUs.css";

/* TODO: replace these with your real numbers before going live */
const STATS = [
  { value: "00+", label: "Years of experience" },
  { value: "0000+", label: "Happy clients" },
  { value: "00+", label: "Countries covered" },
  { value: "00%", label: "Visa success rate" },
];

/* TODO: replace with real team (photo files go in public/images) */
const TEAM = [
  { name: "Team Member 1", role: "Senior Immigration Advisor", photo: "/images/team-1.jpg" },
  { name: "Team Member 2", role: "Senior Immigration Advisor", photo: "/images/team-2.jpg" },
  { name: "Team Member 3", role: "Documentation Specialist", photo: "/images/team-3.jpg" },
  { name: "Team Member 4", role: "Case Officer", photo: "/images/team-4.jpg" },
];

const initials = (name) =>
  name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

const Check = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
    strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us | VJC Overseas – Immigration Consultants in Bangalore";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Learn about VJC Overseas, trusted immigration and visa consultants in Koramangala, Bangalore. Meet our team and see how we guide your global migration."
      );
    }
  }, []);

  return (
    <main className="ab">
      {/* ---------- Hero ---------- */}
      <section className="ab-hero">
        <div className="ab__inner ab-hero__grid">
          <div>
            <nav className="ab-crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span aria-current="page">About Us</span>
            </nav>
            <h1 className="ab-hero__title">
              About <span className="ab__accent">VJC Overseas</span> – Trusted Immigration
              Consultants in Bangalore
            </h1>
            <p className="ab-hero__text">
              From our Koramangala office, we help IT engineers, healthcare specialists,
              finance professionals, and graduates move abroad with clear advice, honest
              timelines, and transparent fees.
            </p>
            <span className="ab__line" />
          </div>
          <div className="ab-hero__visual">
            <img
              src="/images/vjc-hero-global.png"
              alt="Global migration destinations"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        </div>
      </section>

      {/* ---------- Our story ---------- */}
      <section className="ab-sec">
        <div className="ab__inner ab-story">
          <div className="ab-story__media">
            <img
              src="/images/about-office.jpg"
              alt="VJC Overseas office in Koramangala, Bangalore"
              loading="lazy"
              onError={(e) => (e.currentTarget.parentElement.style.display = "none")}
            />
          </div>
          <div>
            <h2 className="ab__h2">Our <span className="ab__accent">Story</span></h2>
            <span className="ab__line" />
            <p className="ab__p">
              VJC Overseas was built for professionals who want a clear, honest path to
              living and working abroad. Bangalore's workforce is ambitious and skilled,
              but the visa process can feel confusing and risky without the right guidance.
            </p>
            <p className="ab__p">
              Unlike generic agencies that push one-size-fits-all solutions, our senior
              immigration advisors evaluate your exact points score, occupation demand
              list, and country-specific eligibility before recommending a pathway.
            </p>
            <ul className="ab-list">
              <li><Check /> Free consultation and initial eligibility check</li>
              <li><Check /> Transparent service agreement before you enroll</li>
              <li><Check /> In-person at Koramangala and online across Karnataka</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Mission and vision ---------- */}
      <section className="ab-sec ab-sec--tint">
        <div className="ab__inner">
          <h2 className="ab__h2 ab__center">Our Mission <span className="ab__accent">and Vision</span></h2>
          <span className="ab__line ab__line--c" />
          <div className="ab-mv">
            <article className="ab-mv__card ab-mv__card--blue">
              <div className="ab-mv__icon">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" />
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To give every client honest, personalised immigration guidance with
                crystal-clear documentation and no hidden charges, from the first
                consultation to settling abroad.
              </p>
            </article>
            <article className="ab-mv__card ab-mv__card--orange">
              <div className="ab-mv__icon">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted immigration consultants in Bangalore, known for
                real results, ethical practice, and long-term support for every family
                we help move abroad.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- Numbers ---------- */}
      <section className="ab-stats">
        <div className="ab__inner ab-stats__grid">
          {STATS.map((s) => (
            <div key={s.label} className="ab-stat">
              <div className="ab-stat__v">{s.value}</div>
              <div className="ab-stat__l">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className="ab-sec">
        <div className="ab__inner">
          <h2 className="ab__h2 ab__center">Meet Our <span className="ab__accent">Team</span></h2>
          <span className="ab__line ab__line--c" />
          <p className="ab__p ab__center ab__narrow">
            Senior advisors and dedicated case officers, available in person at our
            Koramangala office and online.
          </p>
          <div className="ab-team">
            {TEAM.map((m) => (
              <article key={m.name} className="ab-member">
                <div className="ab-member__photo">
                  <span className="ab-member__ini">{initials(m.name)}</span>
                  <img
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <h3 className="ab-member__name">{m.name}</h3>
                <p className="ab-member__role">{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Office and contact ---------- */}
      <section className="ab-sec ab-sec--tint">
        <div className="ab__inner">
          <h2 className="ab__h2 ab__center">Visit Our <span className="ab__accent">Bangalore Office</span></h2>
          <span className="ab__line ab__line--c" />
          <div className="ab-office">
            <div className="ab-office__info">
              <div className="ab-office__row">
                <strong>Address</strong>
                <span>16 &amp; 17, Ground Floor, Raheja Arcade, 5th Block, Koramangala, Bengaluru – 560095</span>
              </div>
              <div className="ab-office__row">
                <strong>Phone</strong>
                <a href="tel:+919160449000">+91 91604 49000</a>
              </div>
              <div className="ab-office__row">
                <strong>WhatsApp</strong>
                <a href="https://wa.me/919160449000" target="_blank" rel="noopener noreferrer">Chat with us</a>
              </div>
            </div>
            <div className="ab-office__map">
              <iframe
                title="VJC Overseas, Koramangala, Bangalore"
                src="https://www.google.com/maps?q=Raheja+Arcade+5th+Block+Koramangala+Bengaluru+560095&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="ab-cta">
        <div className="ab__inner ab-cta__box">
          <div>
            <h2 className="ab-cta__title">Ready to plan your move abroad?</h2>
            <p className="ab-cta__text">Book a free consultation with our senior immigration advisors.</p>
          </div>
          <div className="ab-cta__btns">
            <a className="ab-btn ab-btn--primary" href="tel:+919160449000">Call +91 91604 49000</a>
            <a className="ab-btn ab-btn--ghost" href="https://wa.me/919160449000" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          </div>
        </div>
      </section>
    </main>
  );
}