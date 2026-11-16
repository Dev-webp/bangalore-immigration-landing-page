
import { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const services = [
  { icon: "🌐", title: "PR Visa", desc: "Australia, Canada, NZ", link: "#services" },
  { icon: "🎓", title: "Student Visa", desc: "Study abroad guidance", link: "#services" },
  { icon: "🤝", title: "Jobseeker Visa", desc: "3-step job search", link: "#services" },
  { icon: "📍", title: "Visit / Dependent Visa", desc: "Fast processing", link: "#services" },
  { icon: "🏦", title: "Investor Visa", desc: "Top European nations", link: "#services" },
  { icon: "📄", title: "Resume Marketing", desc: "Global reach", link: "#services" },
  { icon: "🎧", title: "Coaching", desc: "IELTS / PTE / English", link: "#services" },
  { icon: "✈️", title: "Air Ticketing", desc: "Tickets & passport", link: "#services" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(null);

  const close = () => {
    setOpen(null);
    setMobileOpen(false);
  };

  return (
    <header className="header">
      <div className="topbar">
        <span>
          📍 Koramangala, <b>Bangalore</b> – 560095
        </span>
        <span className="topbar-right">
          ✉ info@vjcoverseas.com <i>|</i> Mon–Sat 10AM–7PM
        </span>
      </div>

      <nav className="nav">
        <a href="/" className="nav-logo">
          <img src={logo} alt="VJC Overseas Bangalore" />
        </a>

        <ul className={`menu ${mobileOpen ? "show" : ""}`}>
          <li>
            <a href="/" className="active" onClick={close}>Home</a>
          </li>

          <li
            className={`has-mega ${open === "services" ? "open" : ""}`}
            onMouseEnter={() => setOpen("services")}
            onMouseLeave={() => setOpen(null)}
          >
            <a href="#services" className="menu-btn" onClick={close}>
              Services <span className="arrow">▾</span>
            </a>

            <div className="mega">
              {services.map((s) => (
                <a
                  href={s.link}
                  className="mega-item"
                  key={s.title}
                  onClick={close}
                >
                  <span className="mega-icon">{s.icon}</span>
                  <span>
                    <b>{s.title}</b>
                    <small>{s.desc}</small>
                  </span>
                </a>
              ))}
            </div>
          </li>

         <li className="nav-nowrap">
  <a href="https://www.vjcoverseas.com/migrate" onClick={close}>
    Migrate To
  </a>
</li>

          <li className="nav-nowrap">
  <a href="https://www.vjcoverseas.com/study-abroad" onClick={close}>
    Study Abroad
  </a>
</li>
<li className="nav-nowrap">
  <a href="https://www.vjcoverseas.com/pr-visas" onClick={close}>
    PR Visas
  </a>
</li>

          <li className="nav-nowrap">
  <a href="https://www.vjcoverseas.com/work-abroad" onClick={close}>
    Work Abroad
  </a>
</li>

          <li>
            <a href="#about" onClick={close}>About</a>
          </li>

         <li>
  <a href="https://www.vjcoverseas.com/blog" onClick={close}>Blog</a>
</li>

          <li>
            <a href="/contact" onClick={close}>Contact</a>
                      </li>
        </ul>

        <a href="tel:+919160449000" className="nav-cta">
          📞 +91 91604 49000 <span>→</span>
        </a>

        <button
          className="burger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>
    </header>
  );
}
