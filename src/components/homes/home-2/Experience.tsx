import { useState, useEffect, useRef } from "react";
import { experiences, experienceSection } from "@/data/experienceSection";
import { certifications, certificationsSection } from "@/data/certifications";

function ExperienceScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    triggerRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const s = experienceSection;

  return (
    <div className="exp-scroll-wrap">
      <div className="exp-scroll-triggers">

        {/* STICKY HEADER — pinned at top */}
        <div className="exp-sticky-header">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">{s.eyebrowLabel}</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-resume-title">
            {s.titleMain}<span className="grad">{s.titleHighlight}</span>
          </h2>
          <p className="cyber-resume-lede">{s.lede}</p>
        </div>

        {/* STICKY CARD — changes as you scroll */}
        <div className="exp-sticky-panel">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`exp-display-card ${i === activeIndex ? "active" : ""}`}
              aria-hidden={i !== activeIndex}
              data-index={i}
            >
              <div className="exp-display-inner">
                <div className="exp-display-content">
                  <div className="exp-display-top">
                    <span className="exp-display-duration">{exp.duration}</span>
                    {exp.current && (
                      <span className="exp-current-badge">
                        <span className="bdg-dot" />
                        Current
                      </span>
                    )}
                    {exp.isEducation && (
                      <span className="exp-edu-badge">
                        <i className="fa-light fa-graduation-cap" />
                        Education
                      </span>
                    )}
                  </div>
                  <h3 className="exp-display-title">{exp.title}</h3>
                  <div className="exp-display-meta">
                    <span>
                      <i className="fa-light fa-building" />
                      {exp.institute}
                    </span>
                    {exp.location && (
                      <span>
                        <i className="fa-light fa-location-dot" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                  {exp.description && (
                    <p className="exp-display-description">{exp.description}</p>
                  )}
                  <div className="exp-display-index">
                    {String(i + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}
                  </div>
                </div>
                <div className="exp-display-logo">
                  {exp.logo ? (
                    <img src={exp.logo} alt={exp.logoAlt} className="person-img" loading="lazy" decoding="async" />
                  ) : (
                    <div className="exp-logo-placeholder">
                      <i className="fa-light fa-user-shield" />
                    </div>
                  )}
                  {exp.companyLogo && (
                    <img src={exp.companyLogo} alt={exp.institute} className="company-logo-img" loading="lazy" decoding="async" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* One invisible trigger per card — drives the scroll */}
        {experiences.map((_, i) => (
          <div
            key={i}
            className="exp-scroll-trigger"
            ref={(el) => { triggerRefs.current[i] = el; }}
          />
        ))}

      </div>
    </div>
  );
}

export default function Experience() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const cs = certificationsSection;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + certifications.length) % certifications.length);
  };
  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % certifications.length);
  };

  return (
    <>
      <section className="cyber-resume-area" id="resume-section">
        {/* Scroll-driven experience — header + cards inside */}
        <ExperienceScroll />

        {/* Certifications — normal flow after scroll section */}
        <div className="container">
          <div className="cyber-cert-block">
            <div className="cyber-resume-head" style={{ marginTop: "100px" }}>
              <div className="cyber-section-eyebrow">
                <span className="dot" />
                <span className="bracket">[</span>
                <span className="label">{cs.eyebrowLabel}</span>
                <span className="bracket">]</span>
              </div>
              <h2 className="cyber-resume-title">
                {cs.titleMain}<span className="grad">{cs.titleHighlight}</span>
              </h2>
              <p className="cyber-resume-lede">{cs.lede}</p>
            </div>
            <div className="cert-badge-grid">
              {certifications.map((c, i) => (
                <div
                  className="cert-badge-card"
                  key={c.id}
                  onClick={() => openLightbox(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${c.alt}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") openLightbox(i);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="cert-badge-img-wrap">
                    <img src={c.img} alt={c.alt} className="cert-badge-img" width={300} height={300} loading="lazy" decoding="async" />
                  </div>
                  <div className="cert-badge-hover">
                    <i className="fa-solid fa-magnifying-glass-plus" />
                    <span>View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains("cert-lb-backdrop")) closeLightbox();
          }}
          className="cert-lb-backdrop"
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.55)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <div style={{
            background: "#ffffff", borderRadius: "16px", padding: "32px 24px 24px",
            boxShadow: "0 32px 80px rgba(0,0,0,0.25)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "16px",
            position: "relative", maxWidth: "min(560px, 92vw)", width: "100%",
          }}>
            <button onClick={closeLightbox} aria-label="Close" style={{
              position: "absolute", top: 12, right: 14,
              background: "#f3f4f6", border: "none", borderRadius: "50%",
              width: 36, height: 36, color: "#374151", fontSize: "1rem", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10000,
            }}>
              <i className="fa-solid fa-xmark" />
            </button>
            <img
              src={certifications[lightboxIndex].img}
              alt={certifications[lightboxIndex].alt}
              style={{ maxWidth: "100%", maxHeight: "65vh", borderRadius: "10px", objectFit: "contain", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <button onClick={goPrev} aria-label="Previous" style={{
                background: "#f3f4f6", border: "1px solid #e5e7eb", borderRadius: "50%",
                width: 44, height: 44, color: "#374151", fontSize: "1rem", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <i className="fa-solid fa-chevron-left" />
              </button>
              <span style={{ color: "#6b7280", fontSize: "0.9rem", fontWeight: 500, minWidth: "60px", textAlign: "center" }}>
                {lightboxIndex + 1} / {certifications.length}
              </span>
              <button onClick={goNext} aria-label="Next" style={{
                background: "#f3f4f6", border: "1px solid #e5e7eb", borderRadius: "50%",
                width: 44, height: 44, color: "#374151", fontSize: "1rem", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
