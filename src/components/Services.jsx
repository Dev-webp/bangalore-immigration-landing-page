import { useEffect, useRef, useState } from "react";
import "../styles/Services.css";

const services = [
  { icon: "🌐", title: "PR Visa", link: "#pr-visa" },
  { icon: "🎓", title: "Student Visa", link: "#student-visa" },
  { icon: "🤝", title: "Jobseeker Visa", link: "#jobseeker-visa" },
  { icon: "📍", title: "Visit / Dependent Visa", link: "#visit-visa" },
  { icon: "🎧", title: "Coaching", link: "#coaching" },
  { icon: "🏦", title: "Investor Visa", link: "#investor-visa" },
  { icon: "📄", title: "Resume Marketing", link: "#resume-marketing" },
  { icon: "✈️", title: "Air Ticketing", link: "#air-ticketing" },
];

// Angle of each service on the orbit. Starts from top, goes clockwise.
const position = (i) => {
  const angle = (i / services.length) * Math.PI * 2 - Math.PI / 2;
  return { "--cos": Math.cos(angle), "--sin": Math.sin(angle) };
};

const details = [
  {
    goal: "I want to settle abroad permanently",
    icon: "🌐",
    title: "Permanent Residency (PR) Visas (Canada & Australia)",
    body: "Secure long-term settlement for yourself and your family. Our Bangalore PR specialists guide you through Express Entry, Provincial Nominee Programs (PNP), Australia Subclass 189/190/491, ECA credential assessments, and EOI filing to maximize your CRS or SkillSelect points.",
  },
  {
    goal: "I want to go and search for a job",
    icon: "🤝",
    title: "Job Seeker Visas (Germany Opportunity Card, Austria & Sweden)",
    body: (
      <>
        Move abroad legally to search for full-time employment without an
        upfront job offer. We specialize in the{" "}
        <strong>Germany Chancenkarte (Opportunity Card)</strong>, Austria
        Red-White-Red Card, and Sweden Job Seeker Visa—handling point
        calculations, blocked account guidance, and embassy appointment prep.
      </>
    ),
  },
  {
    goal: "I already have a job offer",
    icon: "💼",
    title: "Work Permits & Skilled Worker Visas (UK, Germany, Canada & Europe)",
    body: "Have a valid job offer or employer sponsorship? Our legal documentation team ensures error-free visa stamping for UK Skilled Worker Visas, EU Blue Cards, Canadian LMIA work permits, and Luxembourg/Malta work visas.",
  },
  {
    goal: "I want to study abroad",
    icon: "🎓",
    title: "Study Abroad & Post-Study Work Pathways",
    body: "Planning a Master's or Bachelor's degree in the UK, USA, Canada, Australia, Germany, or Ireland? Our counselors help Bangalore students shortlist high-ROI universities, secure scholarships, and transition smoothly from student visas to post-study work permits.",
  },
  {
    goal: "I'm visiting, joining family or investing",
    icon: "✈️",
    title: "Visit, Dependent & Investor Visas",
    body: "Whether you are applying for a Schengen Tourist Visa, US B1/B2, spouse/dependent sponsorship, or Golden/Investor Visa programs, we manage every detail from financial proof verification to cover letter drafting.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  // Pop-in animation when section enters the screen
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
<section className="services" id="services">
          <div className="services-head">
       
        <h2>
          Comprehensive Visa &amp; Immigration <span>Services</span> Offered in{" "}
          <span>Bangalore</span>
        </h2>
      </div>

      <div className="orbit" ref={ref}>
        <div className="orbit-ring ring-1" />
        <div className="orbit-ring ring-2" />

        <div className="orbit-center">
          <em>🛫</em>
          <b>
            Your Journey
            <br />
            Starts Here
          </b>
          <span>VJC OVERSEAS · BANGALORE</span>
          <a href="#eligibility">Free Assessment</a>
        </div>

        {services.map((s, i) => (
          <a
            key={s.title}
            href={s.link}
            className="orbit-node"
            style={{ ...position(i), "--i": i }}
          >
            <i>{s.icon}</i>
            <b>{s.title}</b>
          </a>
               ))}
      </div>

      <div className="sv-info">
        <p className="sv-info-label">WHAT DESCRIBES YOU?</p>
        <div className="sv-info-grid">
          <div className="sv-goals">
            {details.map((d, i) => (
              <button
                type="button"
                key={d.goal}
                className={`sv-goal ${active === i ? "on" : ""}`}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              >
                <span className="sv-goal-ico">{d.icon}</span>
                {d.goal}
              </button>
            ))}
          </div>

          <div className="sv-panels">
            {details.map((d, i) => (
              <article className="sv-panel" key={d.title} hidden={active !== i}>
                <span className="sv-badge">WE RECOMMEND</span>
                <h3>
                  <span className="sv-ico-box">{d.icon}</span>
                  {d.title}
                </h3>
                <p>{d.body}</p>
                <div className="sv-actions">
                  <a href="#eligibility" className="sv-btn sv-btn-primary">
                    Free assessment
                  </a>
                  <a
                    href="https://wa.me/919160449000"
                    target="_blank"
                    rel="noreferrer"
                    className="sv-btn sv-btn-wa"
                  >
                    WhatsApp us
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}