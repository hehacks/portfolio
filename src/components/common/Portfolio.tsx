import { portfolioItems } from "@/data/portfolio";
import { useMemo, useState } from "react";

export default function Portofolio({
  hideCategories = false,
}: {
  hideCategories?: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Awards",
    "Security",
    "Speaking",
    "Leadership",
    "Research",
    "Education",
  ];

  const filtered = useMemo(() => {
    return activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) =>
          item.categories.includes(activeCategory)
        );
  }, [activeCategory]);

  return (
    <section
      className="latest-portfolio-area tmp-section-gap"
      id="portfolio"
    >
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Achievements</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Key Achievements & Recognition
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            Awards, speaking engagements, and recognition from industry leaders
            for contributions to cybersecurity research and practice.
          </p>
        </div>

        {/* Category Filter */}
        <div className="latest-portfolio-tabs-area">
          {!hideCategories && (
            <nav>
              <ul className="nav nav-tabs">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      className={`nav-link ${
                        activeCategory === category ? "active" : ""
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Achievement Cards with Images */}
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="row g-4">
                {filtered.map((item) => (
                  <div className="col-lg-6 col-md-6 col-12" key={item.id}>
                    <div
                      className={`tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
                      style={{
                        borderRadius: "16px",
                        background: "var(--background-color-4)",
                        border: "1px solid var(--color-border)",
                        height: "100%",
                        overflow: "hidden",
                        transition: "var(--transition)",
                      }}
                    >
                      {/* Image */}
                      <div
                        style={{
                          width: "100%",
                          aspectRatio: "16 / 9",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={item.imageSrc}
                          alt={item.title}
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            background: "#000",
                            display: "block",
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div style={{ padding: "24px" }}>
                        <h3
                          style={{
                            fontSize: "20px",
                            fontWeight: 700,
                            marginBottom: "12px",
                            lineHeight: 1.3,
                            color: "var(--color-heading)",
                          }}
                        >
                          {item.title}
                        </h3>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                          {item.tags.map((tag, index) => (
                            <span
                              key={index}
                              style={{
                                padding: "4px 12px",
                                borderRadius: "20px",
                                fontSize: "12px",
                                fontWeight: 500,
                                color: "var(--color-primary)",
                                border: "1px solid var(--color-primary)",
                                letterSpacing: "0.5px",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
