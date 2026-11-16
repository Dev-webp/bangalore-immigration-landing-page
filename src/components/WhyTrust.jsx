import { useEffect, useRef, useState } from "react";
import "../styles/WhyTrust.css";

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const POINTS = [
  {
    tone: "blue",
    title: "100% Transparent Documentation",
    text: "Zero hidden charges and crystal-clear stage-by-stage milestone tracking.",
    icon: (
      <Icon>
        <path d="M12 2.5 20 5.5v6c0 5-3.4 9.2-8 10.8-4.6-1.6-8-5.8-8-10.8v-6l8-3z" />
        <path d="m8.6 12 2.4 2.4 4.4-4.8" />
      </Icon>
    ),
  },
  {
    tone: "orange",
    title: "High Visa Approval Track Record",
    text: "Proven success across complex PR, skilled worker, and family sponsorship applications.",
    icon: (
      <Icon>
        <path d="M6 3h8.5L19 7.5V21H6z" />
        <path d="M14 3v5h5M9 12h6M9 15.5h3" />
        <circle cx="17" cy="18" r="3.2" />
        <path d="m15.7 18 1 1 1.6-1.8" />
      </Icon>
    ),
  },
  {
    tone: "green",
    title: "Personalized Case Officers",
    text: "Dedicated documentation specialists accessible both in-person at our Koramangala office and online.",
    icon: (
      <Icon>
        <circle cx="10" cy="7.5" r="3.5" />
        <path d="M3.5 21v-2.5A5.5 5.5 0 0 1 9 13h2a5.5 5.5 0 0 1 5.5 5.5V21z" />
        <path d="m18.5 11 .9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L15.6 13.1l2-.3z" />
      </Icon>
    ),
  },
  {
    tone: "red",
    title: "Post-Landing & Resume Marketing Support",
    text: "International ATS-compliant resume building and job search assistance to help you settle smoothly abroad.",
    icon: (
      <Icon>
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.8 5.8 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8" />
      </Icon>
    ),
  },
];

export default function WhyTrust() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
<section ref={ref} className={`wt ${show ? "wt--in" : ""}`} id="about">
          <div className="wt__inner">
        <div className="wt__hero">
          <div className="wt__copy">
            <span className="wt__badge">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
              </svg>
              Why Choose VJC Overseas
            </span>

            <h2 className="wt__title">
              Why Professionals in Bangalore Trust{" "}
              <span className="wt__accent">VJC Overseas</span> for Global Migration
            </h2>

            <p className="wt__text">
              Bangalore is India's hub for IT engineers, healthcare specialists, finance
              professionals, and ambitious graduates seeking international exposure. At VJC
              Overseas (Koramangala 5th Block), we understand the unique career trajectories
              of Bangalore's workforce. Unlike generic agencies that push one-size-fits-all
              solutions, our senior immigration advisors evaluate your exact points score,
              occupation demand list, and country-specific eligibility before recommending a
              pathway.
            </p>
            <span className="wt__line" />
          </div>

          <div className="wt__visual">
            <img
              src="/images/vjc-hero-global.png"
              alt="Global migration destinations"
              loading="lazy"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        </div>

        <div className="wt__grid">
          {POINTS.map((p) => (
            <article key={p.title} className={`wt__card wt__card--${p.tone}`}>
              <div className="wt__icon">{p.icon}</div>
              <h3 className="wt__card-title">{p.title}</h3>
              <span className="wt__card-line" />
              <p className="wt__card-text">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}