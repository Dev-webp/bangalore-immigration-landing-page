import { useState } from "react";
import ThankYou from "../components/ThankYou";
import "../styles/Contact.css";

const API_URL = "http://localhost:5000/api/contact"; // TODO: ne backend endpoint ikkada pettu
const DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Raheja+Arcade+Koramangala+5th+Block+Bengaluru+560095";
const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.695142720451!2d77.6166214150411!3d12.935175190879746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c3ad0cc183%3A0x65c2d7b95c7a8e13!2sRaheja%20Arcade%2C%20Koramangala%205th%20Block%2C%20Bengaluru%2C%20Karnataka%20560095!5e0!3m2!1sen!2sin!4v1609591965873!5m2!1sen!2sin";

const faqs = [
  { q: "Is the first consultation free?", a: "Yes. Your eligibility check and first counselling session are free." },
  { q: "How soon will you reply?", a: "Our Bangalore team replies within 24 hours." },
  { q: "Can I visit without an appointment?", a: "Walk-ins are welcome Mon–Sat, 10AM–7PM. Booking a slot saves your waiting time." },
  { q: "Which documents should I bring?", a: "Your updated resume, passport, and education and experience certificates." },
];

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/vjc_overseas_bangalore/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/vjc-overseas/" },
  { name: "YouTube", url: "https://www.youtube.com/@Vjcoverseas" },
  { name: "Facebook", url: "https://www.facebook.com/VJCOVERSEAS/" },
];

const empty = {
  name: "", email: "", phone: "", country: "",
  experience: "", qualification: "", message: "",
};

function isOpenNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata", weekday: "short", hour: "numeric", hour12: false,
  }).formatToParts(new Date());
  const day = parts.find((p) => p.type === "weekday").value;
  const hour = parseInt(parts.find((p) => p.type === "hour").value, 10) % 24;
  return day !== "Sun" && hour >= 10 && hour < 19;
}

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState("");
    const [faqOpen, setFaqOpen] = useState(null);
  const [done, setDone] = useState(null);
  const open = isOpenNow();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    if (!resume) {
      setStatus("Please upload your resume.");
      return;
    }
    setStatus("Sending…");
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      fd.append("resume", resume);
      const res = await fetch(API_URL, { method: "POST", body: fd });
      if (!res.ok) throw new Error("failed");
      setDone(form.country || "enquiry");      setForm(empty);
      setResume(null);
      formEl.reset();
    } catch {
      setStatus("Something went wrong. Please call +91 9160449000.");
    }
  };

    if (done) return <ThankYou topic={done} />;

  return (
    <main className="ct-page">
      <section
        className="ct-hero"
        style={{ backgroundImage: "url('/contact-hero.jpg')" }}
      >
        <span className="ct-pill">VJC OVERSEAS · BANGALORE</span>
        <h1>Get in touch</h1>
        <p>
          We'd love to hear from you. Whether you have a question, feedback, or
          need assistance — reach out anytime.
        </p>
        <div className="ct-hero-btns">
          <a href="#ct-form" className="ct-btn">Free assessment</a>
          <a href="tel:+919160449000" className="ct-btn ct-btn-ghost">
            Call +91 9160449000
          </a>
        </div>
      </section>

      <section className="ct-wrap ct-grid">
        <aside className="ct-info">
          <div className="ct-card">
            <span className="ct-ico">📞</span>
            <div>
              <b>Talk to expert</b>
              <small>for free eligibility check</small>
              <a href="tel:+919160449000">+91 9160449000</a>
            </div>
          </div>

          <div className="ct-card">
            <span className="ct-ico">💬</span>
            <div>
              <b>Chat with us</b>
              <small>for free assessment report</small>
              <a href="https://wa.me/919160449000" target="_blank" rel="noreferrer">
                Contact support
              </a>
            </div>
          </div>

          <h3>Our Bangalore office</h3>
          <p>📍 16 &amp; 17, Ground Floor, Raheja Arcade, 5th Block, Koramangala, Bangalore, India, 560095</p>
          <p>✉ info@vjcoverseas.com</p>
          <p>📞 +91 9160449000</p>

          <div className="ct-open">
            <span className={`ct-dot ${open ? "on" : "off"}`} />
            <div>
              <b>{open ? "Open now" : "Closed now"}</b>
              <small>Mon – Sat · 10AM – 7PM</small>
            </div>
          </div>
        </aside>

        <form id="ct-form" className="ct-form" onSubmit={onSubmit}>
          <h2>Sign up &amp; get free assessment</h2>
          <div className="ct-bar" />

          <div className="ct-fields">
            <input name="name" placeholder="Full name" value={form.name} onChange={onChange} required />
            <input name="email" type="email" placeholder="Email address" value={form.email} onChange={onChange} required />
            <input name="phone" type="tel" placeholder="WhatsApp / phone" value={form.phone} onChange={onChange} required />

            <select name="country" value={form.country} onChange={onChange} required>
              <option value="">Country interested</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Germany</option>
              <option>United Kingdom</option>
              <option>USA</option>
              <option>New Zealand</option>
              <option>UAE</option>
              <option>Other</option>
            </select>

            <select name="experience" value={form.experience} onChange={onChange} required>
              <option value="">Select experience</option>
              <option>1-2 years</option>
              <option>3-5 years</option>
              <option>5-7 years</option>
              <option>7+ years</option>
            </select>

            <select name="qualification" value={form.qualification} onChange={onChange} required>
              <option value="">Select your qualification</option>
              <option>High School</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>Ph.D.</option>
              <option>Diploma</option>
            </select>
          </div>

          <textarea
            name="message"
            rows="3"
            placeholder="Tell us about your goals…"
            value={form.message}
            onChange={onChange}
          />

          <label className="ct-upload">
            ⬆ {resume ? resume.name : "Click to upload resume (required)"}
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResume(e.target.files[0] || null)}
              hidden
            />
          </label>

          <button type="submit" className="ct-submit">Submit for free assessment</button>
          {status && <p className="ct-status">{status}</p>}
        </form>
      </section>

      <section className="ct-wrap ct-tiles">
        <div><span>⚡</span><b>Quick response</b><small>Reply within 24 hours</small></div>
        <div><span>👥</span><b>Expert team</b><small>Professional and helpful</small></div>
        <div><span>📅</span><b>Working days</b><small>Mon – Sat available</small></div>
      </section>

      <section className="ct-wrap">
        <div className="ct-map-head">
          <h2>Find us in Koramangala</h2>
          <a href={DIRECTIONS} target="_blank" rel="noreferrer" className="ct-btn">
            Get directions
          </a>
        </div>
        <iframe
          className="ct-map"
          title="VJC Overseas Bangalore location"
          src={MAP_SRC}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>

      <section className="ct-wrap ct-bottom">
        <div>
          <h2>Quick answers</h2>
          {faqs.map((f, i) => (
            <div className="ct-faq" key={f.q}>
              <button type="button" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                {f.q} <span>{faqOpen === i ? "−" : "+"}</span>
              </button>
              {faqOpen === i && <p>{f.a}</p>}
            </div>
          ))}
        </div>

        <div>
          <h2>Certified and trusted</h2>
          <div className="ct-badges">
            <span>🏅 British Council certified</span>
            <span>✔ ISO 9001:2015</span>
          </div>
          <h2>Follow us</h2>
          <div className="ct-social">
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
            ))}
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/919160449000"
        target="_blank"
        rel="noreferrer"
        className="ct-wa"
        aria-label="Chat on WhatsApp"
      >
        💬 Chat on WhatsApp
      </a>
    </main>
  );
}