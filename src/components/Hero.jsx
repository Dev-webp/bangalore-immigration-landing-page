import { useEffect, useRef, useState } from "react";

import "../styles/Hero.css";

const countries = ["Australia", "Canada", "Germany", "UK", "USA", "New Zealand", "Other"];
const experiences = ["Fresher (0-1 yrs)", "1-3 years", "3-5 years", "5-10 years", "10+ years"];
const qualifications = ["12th / Diploma", "Bachelor's Degree", "Master's Degree", "PhD", "Other"];

const MAX_SIZE = 5 * 1024 * 1024; // 5MB

// Scroll reveal: adds class "in" when element enters the screen
function useReveal() {
  const ref = useRef(null);
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
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  country: "",
  experience: "",
  qualification: "",
  message: "",
};

export default function Hero() {
  const leftRef = useReveal();
  const formRef = useReveal();

  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success
  const [drag, setDrag] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const pickFile = (f) => {
    if (!f) return;
    if (!/\.(pdf|doc|docx)$/i.test(f.name)) {
      setError("Please upload a PDF, DOC or DOCX file.");
      setFile(null);
      return;
    }
    if (f.size > MAX_SIZE) {
      setError("File is too large. Maximum size is 5MB.");
      setFile(null);
      return;
    }
    setError("");
    setFile(f);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    pickFile(e.dataTransfer.files[0]);
  };

  const onSubmit = (e) => {
  e.preventDefault();
  const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));
    if (file) {
  data.append("resume", file);
}
data.append("branch", "Bangalore");

    // TODO: backend connect cheyali (fetch POST). Ippudu console lo chustundi.
    console.log("Form data:", Object.fromEntries(data.entries()));

    setStatus("success");
    setForm(emptyForm);
    setFile(null);
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section className="hero">
      {/* Background: video/image kavalante ikkada add cheyochu */}
      <div className="hero-dots" />

      <div className="hero-wrap">
        {/* LEFT CONTENT */}
        <div className="hero-left reveal-up" ref={leftRef}>
          <div className="hero-pill" style={{ "--i": 0 }}>
            ⭐ Since 2009 · 17 Years of Trusted Immigration Expertise
          </div>

                              <h1 className="hero-h1" style={{ "--i": 1 }}>
            <span className="h1-line">Trusted Immigration &amp;</span>
            <span className="h1-line">Visa Consultants in</span>
            <span className="h1-line">
              <em>Bangalore</em> – VJC Overseas
            </span>
          </h1>

                   <p className="hero-sub" style={{ "--i": 2 }}>
            Turn your global career and settlement dreams into reality with Bangalore’s
            leading overseas immigration experts in Koramangala. From Permanent Residency
            (PR) to Job Seeker and Work Permits, get transparent, end-to-end visa guidance
            tailored to your profile.
          </p>

          <div className="hero-btns" style={{ "--i": 3 }}>
            <a href="#eligibility" className="btn-main">Book Your Free Profile Assessment →</a>
            <a href="tel:+919160449000" className="btn-ghost">📞 Call Our Bangalore Desk: +91 91604 49000</a>
          </div>

                    <div className="hero-stats" style={{ "--i": 4 }}>
            <div><b>17+</b><span>Years of Experience</span></div>
            <div><b>2009</b><span>Established</span></div>
            <div><b>3</b><span>National Awards</span></div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="hero-form reveal-right" id="eligibility" ref={formRef} onSubmit={onSubmit}>
          <div>
            <h2>Check Your Free Eligibility</h2>
            <p className="form-sub">Get a free assessment from our Bangalore experts</p>
          </div>

          <div className="f-row">
            <div>
              <label htmlFor="name">FULL NAME</label>
              <input id="name" name="name" value={form.name} onChange={onChange} placeholder="John Doe" required />
            </div>
            <div>
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input id="email" type="email" name="email" value={form.email} onChange={onChange} placeholder="john@company.com" required />
            </div>
          </div>

          <div className="f-row">
            <div>
              <label htmlFor="phone">WHATSAPP / PHONE</label>
              <input id="phone" type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+91..." pattern="[0-9+\s-]{10,15}" required />
            </div>
            <div>
              <label htmlFor="country">COUNTRY INTERESTED</label>
              <select id="country" name="country" value={form.country} onChange={onChange} required>
                <option value="">Select</option>
                {countries.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div className="f-row">
            <div>
              <label htmlFor="experience">EXPERIENCE</label>
              <select id="experience" name="experience" value={form.experience} onChange={onChange} required>
                <option value="">Select</option>
                {experiences.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="qualification">QUALIFICATION</label>
              <select id="qualification" name="qualification" value={form.qualification} onChange={onChange} required>
                <option value="">Select</option>
                {qualifications.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message">MESSAGE (OPTIONAL)</label>
            <textarea id="message" name="message" value={form.message} onChange={onChange} placeholder="Tell us about your goals..." rows={3} />
          </div>

          <div>
<label>UPLOAD RESUME (OPTIONAL)</label>
            <label
              className={`upload ${drag ? "drag" : ""} ${file ? "has-file" : ""}`}
              onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
              onDragLeave={() => setDrag(false)}
              onDrop={onDrop}
            >
              <input type="file" accept=".pdf,.doc,.docx" hidden onChange={(e) => pickFile(e.target.files[0])} />
              {file ? (
                <span>✅ {file.name} <small>({(file.size / 1024).toFixed(0)} KB) · click to change</small></span>
              ) : (
<span>⬆ Click to upload resume (Optional)<small>PDF, DOC, or DOCX (Max 5MB)</small></span>              )}
            </label>
            {error && <p className="form-error">{error}</p>}
          </div>

          <button type="submit" className="form-submit">EVALUATE ELIGIBILITY</button>
          {status === "success" && (
            <p className="form-success">✅ Thank you! Our Bangalore team will contact you shortly.</p>
          )}
        </form>
      </div>
    </section>
  );
}