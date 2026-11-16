import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";

import "../styles/VisaProcess.css";

const PHOTO = "/images/visa-process.jpg";

const steps = [
  {
    title: "Free Eligibility & Points",
    text: "Walk into our Koramangala branch or connect online for an honest profile evaluation.",
  },
  {
    title: "Country & Visa Strategy",
    text: "Receive a customized roadmap comparing timelines, costs, and PR prospects across eligible countries.",
  },
  {
    title: "Document Verification & Filing",
    text: "Our compliance team audits every educational, employment, and financial document to prevent rejections.",
  },
  {
    title: "Embassy Submission & Interview Prep",
    text: "Complete application submission along with mock visa interview sessions.",
  },
  {
    title: "Visa Approval & Pre-Departure Briefing",
    text: "Receive your stamped visa along with relocation, accommodation, and job-market orientation.",
  },
];

// Replays every time: adds "in" when visible, removes when it leaves the screen
function useReplay(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => el.classList.toggle("in", entry.isIntersecting),
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}

function Illustration() {
  return (
    <svg
      className="vp-svg"
      viewBox="0 0 300 430"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="vpDots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#22336b" />
        </pattern>
      </defs>
      <rect width="300" height="430" fill="url(#vpDots)" />
      <circle cx="230" cy="70" r="46" fill="#f97316" opacity="0.9" />
      <path
        d="M20 330 C80 250 150 300 215 190 S270 110 285 90"
        fill="none"
        stroke="#f97316"
        strokeWidth="2"
        strokeDasharray="6 6"
        opacity="0.8"
      />
      <g transform="translate(150 215) rotate(-8)">
        <rect x="-80" y="-120" width="160" height="230" rx="12" fill="#16275a" stroke="#f97316" strokeWidth="2.5" />
        <rect x="-70" y="-110" width="140" height="210" rx="8" fill="none" stroke="#2c3d78" strokeWidth="1" />
        <circle cx="0" cy="-45" r="34" fill="none" stroke="#f97316" strokeWidth="2.5" />
        <circle cx="0" cy="-45" r="22" fill="none" stroke="#ffb27a" strokeWidth="1.5" />
        <path
          d="M-34 -45h68M0 -79v68M-24 -69c14 10 34 10 48 0M-24 -21c14 -10 34 -10 48 0"
          stroke="#ffb27a"
          strokeWidth="1.2"
          fill="none"
        />
        <text x="0" y="22" textAnchor="middle" fontSize="15" fontWeight="500" fill="#ffb27a" letterSpacing="3">
          PASSPORT
        </text>
        <text x="0" y="42" textAnchor="middle" fontSize="9" fill="#8fa0d4" letterSpacing="2">
          VJC OVERSEAS
        </text>
        <rect x="-18" y="62" width="36" height="22" rx="3" fill="none" stroke="#f97316" strokeWidth="1.5" />
        <circle cx="0" cy="73" r="5" fill="#f97316" />
      </g>
      <g transform="translate(215 335) rotate(-14)">
        <circle r="46" fill="#0f1b3d" stroke="#22c55e" strokeWidth="3" />
        <circle r="39" fill="none" stroke="#22c55e" strokeWidth="1.2" />
        <text y="-8" textAnchor="middle" fontSize="10" fill="#22c55e" letterSpacing="2">VISA</text>
        <text y="9" textAnchor="middle" fontSize="13" fontWeight="500" fill="#22c55e">APPROVED</text>
        <text y="25" textAnchor="middle" fontSize="8" fill="#22c55e" letterSpacing="1.5">BANGALORE</text>
      </g>
      <g transform="translate(70 80) rotate(40)">
        <path
          d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"
          fill="#fff"
          transform="scale(1.6)"
        />
      </g>
    </svg>
  );
}

export default function VisaProcess() {
  const headRef = useReplay(0.3);
  const listRef = useReplay(0.15);
  const visualRef = useReplay(0.2);
  const [hasPhoto, setHasPhoto] = useState(false);

  // Real photo undi ante use chestundi, lekapote illustration
  useEffect(() => {
    const img = new Image();
    img.onload = () => setHasPhoto(true);
    img.src = PHOTO;
  }, []);

  return (
    <section className="vp" id="process">
      <div className="vp__inner">
        <div className="vp__head" ref={headRef}>
          <span className="vp__eyebrow">Our Process</span>
          <h2 className="vp__title">
            How Our <span>5-Step Visa Process</span> Works at VJC Overseas{" "}
            <span>Bangalore</span>
          </h2>
        </div>

        <div className="vp__grid">
          <div className="vp__list" ref={listRef}>
            {steps.map((s, i) => (
              <div
                className={`vp-item ${i === steps.length - 1 ? "is-final" : ""}`}
                key={s.title}
                style={{ "--i": i }}
              >
                <div className="vp-item__num">{i + 1}</div>
                <div className="vp-item__card">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="vp__visual" ref={visualRef}>
            <div className="vp__imgbox">
              {hasPhoto ? (
                <>
                  <img
                    className="vp__photo"
                    src={PHOTO}
                    alt="VJC Overseas Bangalore visa process"
                    loading="lazy"
                  />
                                    <div className="vp__sign">
                    <img src={logo} alt="VJC Overseas Immigration & Visa Consultants" />
                  </div>
                  <div className="vp__badge">
                    <span>VISA</span> APPROVED · BANGALORE
                  </div>
                </>
              ) : (
                <Illustration />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}