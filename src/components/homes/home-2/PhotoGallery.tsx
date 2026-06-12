import { useState, useCallback, useEffect } from "react";

const photos = [
  { src: "/assets/images/photos/1 (1).jpeg", alt: "Gallery photo 1" },
  { src: "/assets/images/photos/1 (2).jpeg", alt: "Gallery photo 2" },
  { src: "/assets/images/photos/1 (3).jpeg", alt: "Gallery photo 3" },
  { src: "/assets/images/photos/1 (4).jpeg", alt: "Gallery photo 4" },
  { src: "/assets/images/photos/1 (5).jpeg", alt: "Gallery photo 5" },
  { src: "/assets/images/photos/1 (6).jpeg", alt: "Gallery photo 6" },
  { src: "/assets/images/photos/1 (7).jpeg", alt: "Gallery photo 7" },
  { src: "/assets/images/photos/1 (8).jpeg", alt: "Gallery photo 8" },
  { src: "/assets/images/photos/1 (9).jpeg", alt: "Gallery photo 9" },
  { src: "/assets/images/photos/1 (10).jpeg", alt: "Gallery photo 10", objectPosition: "top center" },
  { src: "/assets/images/photos/1 (11).jpeg", alt: "Gallery photo 11" },
  { src: "/assets/images/photos/1 (12).jpeg", alt: "Gallery photo 12" },
  { src: "/assets/images/photos/1 (13).jpeg", alt: "Gallery photo 13", objectPosition: "top center" },
];

export default function PhotoGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  return (
    <section className="cyber-gallery-area" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="cyber-gallery-head">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">Gallery</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-gallery-title">
            Moments &amp; <span className="grad">Memories</span>
          </h2>
          <p className="cyber-gallery-lede">
            Snapshots from conferences, community events, and the journey so far
          </p>
        </div>

        {/* Photo Grid */}
        <div className="cyber-gallery-grid">
          {photos.map((photo, index) => (
            <div
              className="cyber-gallery-item"
              key={index}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`Open ${photo.alt} in lightbox`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined} />
              <div className="cyber-gallery-overlay">
                <i className="fa-light fa-expand" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="cyber-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div
            className="cyber-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cyber-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <i className="fa-light fa-xmark" />
            </button>

            <button
              className="cyber-lightbox-nav cyber-lightbox-prev"
              onClick={goPrev}
              aria-label="Previous image"
            >
              <i className="fa-light fa-chevron-left" />
            </button>

            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="cyber-lightbox-img"
            />

            <button
              className="cyber-lightbox-nav cyber-lightbox-next"
              onClick={goNext}
              aria-label="Next image"
            >
              <i className="fa-light fa-chevron-right" />
            </button>

            <div className="cyber-lightbox-counter">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
