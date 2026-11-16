import { useCallback, useEffect, useState } from "react";
import "../styles/Reviews.css";

const REVIEWS = [
  { name: "Arjun R.", role: "Software Engineer, Whitefield", tag: "Canada PR", tone: "blue",
    text: "Clear process from day one. No hidden charges at any stage." },
  { name: "Priya S.", role: "Data Analyst, Electronic City", tag: "Germany Opportunity Card", tone: "orange",
    text: "My case officer was available at the Koramangala office and on WhatsApp whenever I had a doubt." },
  { name: "Meera K.", role: "Healthcare Professional, HSR Layout", tag: "Australia 189", tone: "green",
    text: "They suggested the right pathway instead of pushing one option." },
  { name: "Rahul M.", role: "Finance Professional, Indiranagar", tag: "Canada Express Entry", tone: "blue",
    text: "Documentation was handled stage by stage and I always knew where my file stood." },
  { name: "Sneha N.", role: "IT Specialist, Marathahalli", tag: "UK Skilled Worker", tone: "orange",
    text: "Online consultations saved me a lot of time. Everything was verified digitally." },
  { name: "Karthik V.", role: "Graduate, Jayanagar", tag: "Germany Opportunity Card", tone: "green",
    text: "Honest advice on my points score. No false promises, only realistic options." },
  { name: "Divya P.", role: "Nurse, Koramangala", tag: "Australia 190", tone: "blue",
    text: "The team guided me from eligibility check to final submission without any confusion." },
  { name: "Vikram S.", role: "Engineer, Bellandur", tag: "New Zealand Residence", tone: "orange",
    text: "Post-landing resume support helped me find a job soon after reaching abroad." },
  { name: "Ananya B.", role: "Analyst, North Bangalore", tag: "Canada PNP", tone: "green",
    text: "Transparent agreement upfront. Fees were exactly as discussed." },
];

const N = REVIEWS.length;

const initials = (name) =>
  name.split(" ").map((w) => w[0]).join("").replace(".", "").slice(0, 2);

export default function Reviews() {
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const onResize = () => setPerView(window.innerWidth <= 768 ? 1 : 3);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => setIndex(0), [perView]);

  // cloned cards at the end for a seamless loop
  const items = [...REVIEWS, ...REVIEWS.slice(0, perView)];
  const centerOffset = perView === 3 ? 1 : 0;
  const active = (index + centerOffset) % N;

  const next = useCallback(() => setIndex((i) => i + 1), []);

  const prev = () => {
    if (index <= 0) {
      setAnim(false);
      setIndex(N);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnim(true);
          setIndex(N - 1);
        })
      );
    } else {
      setIndex((i) => i - 1);
    }
  };

  // auto scroll: one card at a time, slow
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [paused, next]);

  // after reaching the cloned cards, jump back to the start without animation
  const onTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (index >= N) {
      setAnim(false);
      setIndex(index - N);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)));
    }
  };

  return (
    <section className="rv" id="reviews">
      <div className="rv__inner">
        <h2 className="rv__title">
          What Our Clients Say About <span className="rv__accent">VJC Overseas</span>
        </h2>
        <span className="rv__line" />

        <div
          className="rv__viewport"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="rv__track"
            style={{
              transform: `translateX(-${index * (100 / perView)}%)`,
              transition: anim ? undefined : "none",
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {items.map((r, i) => {
              const isMid = i === index + centerOffset;
              return (
                <div
                  className="rv__cell"
                  key={`${r.name}-${i}`}
                  style={{ flexBasis: `${100 / perView}%` }}
                >
                  <article className={`rv__card ${isMid ? "rv__card--mid" : ""}`}>
                    <svg className="rv__quote" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                      <path d="M9.4 5C5.8 6.2 3 9.6 3 14v5h7v-6H6.3c.1-2.4 1.5-4.2 3.8-5.2zM20.4 5c-3.6 1.2-6.4 4.6-6.4 9v5h7v-6h-3.7c.1-2.4 1.5-4.2 3.8-5.2z" />
                    </svg>
                    <div className="rv__stars" aria-label="5 out of 5 stars">★★★★★</div>
                    <p className="rv__text">{r.text}</p>
                    <div className="rv__who">
                      <div className={`rv__avatar rv__avatar--${r.tone}`}>{initials(r.name)}</div>
                      <div className="rv__meta">
                        <div className="rv__name">{r.name}</div>
                        <div className="rv__role">{r.role}</div>
                        <div className="rv__tag">{r.tag}</div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rv__controls">
          <button type="button" className="rv__arrow" onClick={prev} aria-label="Previous review">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 6-6 6 6 6" /></svg>
          </button>
          <div className="rv__dots">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`rv__dot ${i === active ? "rv__dot--on" : ""}`}
                onClick={() => setIndex((i - centerOffset + N) % N)}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
          <button type="button" className="rv__arrow rv__arrow--dark" onClick={next} aria-label="Next review">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}