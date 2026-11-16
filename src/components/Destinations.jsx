import { useEffect, useRef } from "react";
import "../styles/Destinations.css";

const countries = [
  {
    id: "canada",
    name: "Canada",
    tagline: "PR, study and work permits",
    visas: ["Express Entry", "PNP"],
    image: "/images/countries/canada.jpg",
    aliases: ["canada"],
    popular: true,
  },
  {
    id: "australia",
    name: "Australia",
    tagline: "Skilled migration, study visas",
    visas: ["Subclass 189", "190"],
    image: "/images/countries/australia.jpg",
    aliases: ["australia"],
  },
  {
    id: "usa",
    name: "USA",
    tagline: "Study, work and investor routes",
    visas: ["F1", "H1B", "EB-5"],
    image: "/images/countries/usa.jpg",
    aliases: ["usa", "us", "united states"],
  },
  {
    id: "germany",
    name: "Germany",
    tagline: "Opportunity Card and Blue Card",
    visas: ["Jobseeker", "Blue Card"],
    image: "/images/countries/germany.jpg",
    aliases: ["germany"],
  },
  {
    id: "uk",
    name: "United Kingdom",
    tagline: "Study, skilled worker and visit",
    visas: ["Skilled Worker", "Student"],
    image: "/images/countries/uk.jpg",
    aliases: ["uk", "united kingdom"],
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    tagline: "Residence and work visas",
    visas: ["Skilled Migrant", "AEWV"],
    image: "/images/countries/new-zealand.jpg",
    aliases: ["new zealand", "newzealand"],
  },
];

function selectCountryInForm(form, aliases) {
  const selects = form.querySelectorAll("select");
  for (const select of selects) {
    const match = Array.from(select.options).find((opt) => {
      const text = opt.text.trim().toLowerCase();
      const value = String(opt.value).trim().toLowerCase();
      return aliases.some(
        (a) =>
          text === a ||
          value === a ||
          (a.length > 3 && (text.includes(a) || value.includes(a)))
      );
    });
    if (match) {
      const setter = Object.getOwnPropertyDescriptor(
        HTMLSelectElement.prototype,
        "value"
      ).set;
      setter.call(select, match.value);
      select.dispatchEvent(new Event("change", { bubbles: true }));
      return;
    }
  }
}

export default function Destinations() {
  const sectionRef = useRef(null);

    useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".reveal");
    if (!items) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleAssessment = (country) => {
    const form = document.getElementById("eligibility");
    if (!form) return;

    selectCountryInForm(form, country.aliases);

    form.scrollIntoView({ behavior: "smooth", block: "start" });

    form.classList.remove("form-flash");
    void form.offsetWidth;
    form.classList.add("form-flash");
    setTimeout(() => form.classList.remove("form-flash"), 1800);

    setTimeout(() => {
      const firstInput = form.querySelector("input");
      if (firstInput) firstInput.focus({ preventScroll: true });
    }, 700);
  };

  return (
<section className="dest" id="destinations" ref={sectionRef}>
          <div className="dest__inner">
<div className="dest__head reveal">
          <span className="dest__eyebrow">Study, work and settle abroad</span>
          <h2 className="dest__title">
            Turn Dreams Into <span>Destinations</span>
          </h2>
          <p className="dest__sub">
            Pick your country and get a free assessment from our Bangalore
            experts
          </p>
        </div>

        <div className="dest__grid">
{countries.map((c, i) => (
  <article
    className="dest-card reveal"
    key={c.id}
        style={{ "--i": i % 3 }}
  >
              <div
                className="dest-card__img"
                style={{ backgroundImage: `url(${c.image})` }}
                role="img"
                aria-label={`${c.name} visa and immigration`}
              >
                {c.popular && (
                  <span className="dest-card__badge">Most popular</span>
                )}
              </div>

              <div className="dest-card__body">
                <h3 className="dest-card__name">{c.name}</h3>
                <p className="dest-card__tag">{c.tagline}</p>

                <div className="dest-card__chips">
                  {c.visas.map((v) => (
                    <span key={v}>{v}</span>
                  ))}
                </div>

                <button
                  type="button"
                  className="dest-card__btn"
                  onClick={() => handleAssessment(c)}
                >
                  Free Assessment <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}