import { useEffect } from "react";
import "../styles/ThankYou.css";

export default function ThankYou({ topic = "enquiry" }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="ty-page">
      <div className="ty-card">
        <div className="ty-check">✓</div>
        <h1>Thank You — We'll Be in Touch Soon</h1>
        <p>
          We've received your {topic} details. Our specialists are now
          analysing your profile to help you move forward with confidence.
        </p>

        <div className="ty-call">
          <small>NEED INSTANT HELP? CALL US NOW</small>
          <a href="tel:+919160449000">📞 +91 91604 49000</a>
          <small>AVAILABLE MON - SAT (10 AM - 7 PM)</small>
        </div>

        <div className="ty-or">HAVE QUERIES?</div>
        <div className="ty-btns">
          <a href="/" className="ty-home">← Back to Home</a>
          <a
            href="https://wa.me/919160449000"
            target="_blank"
            rel="noreferrer"
            className="ty-wa"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}