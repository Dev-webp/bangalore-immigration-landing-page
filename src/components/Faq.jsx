import { useState } from "react";
import "../styles/Faq.css";

const FAQS = [
  {
    q: "Where is the VJC Overseas office located in Bangalore?",
    a: "Our Bangalore branch is located at 16 & 17, Ground Floor, Raheja Arcade, 5th Block, Koramangala, Bengaluru – 560095. You can walk in for a free consultation or call +91 91604 49000 to book an appointment.",
  },
  {
    q: "Which countries are best for IT professionals from Bangalore seeking PR or Work Visas?",
    a: "Software engineers, data analysts, and IT specialists from Bangalore currently have strong demand in Germany (Opportunity Card & EU Blue Card), Canada (Express Entry STEM draws & PNPs), Australia (Subclass 189/190), and the UK (Skilled Worker Visa).",
  },
  {
    q: "Can I apply for a Germany Opportunity Card from Bangalore without a job offer?",
    a: "Yes. If you hold a recognized degree or vocational qualification and meet the 6-point eligibility criteria (age, experience, English/German proficiency), our Koramangala team can process your Germany Opportunity Card from start to finish.",
  },
  {
    q: "Do you provide online consultations if I live in Whitefield, Electronic City, or North Bangalore?",
    a: "Absolutely. While we welcome in-person visits at our Koramangala office, we offer full video consultations, digital document verification, and WhatsApp case updates for clients across Bangalore and Karnataka.",
  },
  {
    q: "How much do immigration consultants in Bangalore charge for visa processing?",
    a: "Consultation and initial eligibility checks at VJC Overseas are completely free. Service fees depend on the visa category (PR, Job Seeker, Work, or Study) and country, with a transparent agreement provided upfront before you enroll.",
  },
  {
    q: "How can I apply for Canada PR from Bangalore?",
    a: "You can explore Canada PR pathways such as Express Entry and Provincial Nominee Programs (PNP). The process generally involves checking eligibility, assessing language proficiency, evaluating educational credentials, and preparing the required documents.",
  },
  {
    q: "Which countries offer permanent residency options for skilled professionals from Bangalore?",
    a: "Countries such as Canada, Australia, and New Zealand have skilled migration and residence pathways. Eligibility depends on factors such as qualifications, occupation, work experience, language proficiency, and applicable immigration rules.",
  },
  {
    q: "Can I migrate abroad without a job offer?",
    a: "Certain immigration pathways, including some skilled migration and residence categories, may allow applicants to apply without an existing job offer. However, requirements differ by country and visa category.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq() {
  const [open, setOpen] = useState(0); // first one open by default

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <h2 className="faq__title">
          Frequently Asked Questions –{" "}
          <span className="faq__accent">Immigration Consultants in Bangalore</span>
        </h2>
        <span className="faq__line" />

        <div className="faq__list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`faq__item ${isOpen ? "faq__item--open" : ""}`}>
                <h3 className="faq__q-wrap">
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{f.q}</span>
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq__a"
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                >
                  <div className="faq__a-inner">
                    <p className="faq__a-text">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}