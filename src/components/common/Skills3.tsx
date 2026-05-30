import { useState } from "react";
import { certifications, certificationsSection } from "@/data/certifications";

export default function Skills3() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const s = certificationsSection;

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

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains("cert-lightbox-backdrop")) {
      closeLightbox();
    }
  };

  return (
    <>
      <section
        className="my-skill-area-style-two plr--120 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15 mt--70"
        id="certificates"
      >
        <div className="tpm-custom-box-bg">
          <div className="container">
            {/* Section Header */}
            <div className="section-head text-align-left mb--50">
              <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span className="subtitle">{s.subtitle}</span>
              </div>
              <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                {s.titleAlt}
              </h2>
              <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                {s.descriptionAlt}
              </p>
            </div>

            {/* Certificate Grid */}
            <div className="row g-4">
              {certifications.map((cert, index) => (
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6" key={cert.id}>
                  <div
                    className={`cert-thumb-card tmp-scroll-trigger tmp-fade-in animation-order-${(index % 5) + 1}`}
                    onClick={() => openLightbox(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${cert.alt}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") openLightbox(index);
                    }}
                    style={{
                      cursor: "pointer",
                      borderRadius: "10px",
                      overflow: "hidden",
                      position: "relative",
                      border: "1px solid rgba(255,255,255,0.08)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }}
                  >
                    <img
                      loading="lazy"
                      src={cert.img}
                      alt={cert.alt}
                      width={300}
                      height={300}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                    <div
                      className="cert-thumb-overlay"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <i className="fa-solid fa-magnifying-glass-plus" style={{ fontSize: "1.6rem", color: "#fff" }} />
                    </div>
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
          className="cert-lightbox-backdrop"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate viewer"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close"
            style={{
              position: "absolute", top: "20px", right: "24px",
              background: "none", border: "none", color: "#fff",
              fontSize: "2rem", cursor: "pointer", lineHeight: 1, zIndex: 10000,
            }}
          >
            <i className="fa-solid fa-xmark" />
          </button>

          <button
            onClick={goPrev}
            aria-label="Previous"
            style={{
              position: "absolute", left: "16px",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%", width: "52px", height: "52px",
              color: "#fff", fontSize: "1.1rem", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10000,
            }}
          >
            <i className="fa-solid fa-chevron-left" />
          </button>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
            <img
              src={certifications[lightboxIndex].img}
              alt={certifications[lightboxIndex].alt}
              style={{
                maxWidth: "min(600px, 90vw)", maxHeight: "80vh",
                borderRadius: "12px", boxShadow: "0 24px 64px rgba(0,0,0,0.7)", objectFit: "contain",
              }}
            />
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem" }}>
              {lightboxIndex + 1} / {certifications.length}
            </p>
          </div>

          <button
            onClick={goNext}
            aria-label="Next"
            style={{
              position: "absolute", right: "16px",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%", width: "52px", height: "52px",
              color: "#fff", fontSize: "1.1rem", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10000,
            }}
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      )}

      <style>{`
        .cert-thumb-card:hover .cert-thumb-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
}
