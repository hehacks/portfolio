import { useState } from "react";
import { testimonials2 } from "@/data/testimonials";
import { testimonialsSection } from "@/data/testimonialsSection";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonials2.length;
  const s = testimonialsSection;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);
  const getIndex = (offset: number) => (active + offset + total) % total;

  return (
    <section className="cyber-testi-area" id="testimonials">
      <div className="container">
        {/* Header */}
        <div className="cyber-testi-head">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">{s.eyebrowLabel}</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-testi-title">
            {s.titleMain}<span className="grad">{s.titleHighlight}</span>
          </h2>
          <p className="cyber-testi-lede">{s.lede}</p>
        </div>

        {/* Cards */}
        <div className="cyber-testi-stage">
          {/* Prev */}
          <div className="cyber-testi-card is-prev" onClick={prev} role="button" aria-label="Previous testimonial">
            <p className="cyber-testi-quote">{testimonials2[getIndex(-1)].text}</p>
            <div className="cyber-testi-author">
              <div className="cyber-testi-avatar">{testimonials2[getIndex(-1)].name.charAt(0)}</div>
              <div>
                <h4>{testimonials2[getIndex(-1)].name}</h4>
                <span>{testimonials2[getIndex(-1)].role}</span>
              </div>
            </div>
          </div>

          {/* Active */}
          <div className="cyber-testi-card is-active">
            <div className="cyber-testi-qmark">"</div>
            <p className="cyber-testi-quote">{testimonials2[active].text}</p>
            <div className="cyber-testi-stars">
              {[...Array(testimonials2[active].stars)].map((_, i) => (
                <i key={i} className="fa-solid fa-star" />
              ))}
            </div>
            <div className="cyber-testi-author">
              <div className="cyber-testi-avatar">{testimonials2[active].name.charAt(0)}</div>
              <div>
                <h4>{testimonials2[active].name}</h4>
                <span>{testimonials2[active].role}</span>
              </div>
            </div>
            <span className="cyber-cert-corner cyber-cert-corner-tr" />
            <span className="cyber-cert-corner cyber-cert-corner-bl" />
          </div>

          {/* Next */}
          <div className="cyber-testi-card is-next" onClick={next} role="button" aria-label="Next testimonial">
            <p className="cyber-testi-quote">{testimonials2[getIndex(1)].text}</p>
            <div className="cyber-testi-author">
              <div className="cyber-testi-avatar">{testimonials2[getIndex(1)].name.charAt(0)}</div>
              <div>
                <h4>{testimonials2[getIndex(1)].name}</h4>
                <span>{testimonials2[getIndex(1)].role}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="cyber-testi-controls">
          <button className="cyber-testi-btn" onClick={prev} aria-label="Previous">
            <i className="fa-light fa-arrow-left" />
          </button>
          <div className="cyber-testi-dots">
            {testimonials2.map((_, i) => (
              <button
                key={i}
                className={`cyber-testi-dot ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button className="cyber-testi-btn" onClick={next} aria-label="Next">
            <i className="fa-light fa-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
