import { portfolioItems } from "@/data/portfolio";

const iconForCategory: Record<string, string> = {
  Awards: "fa-trophy",
  Speaking: "fa-microphone",
  Leadership: "fa-crown",
  Research: "fa-flask",
  Education: "fa-graduation-cap",
  Security: "fa-shield",
};

export default function Portfolio() {
  return (
    <section className="cyber-achievements-area" id="portfolio">
      <div className="container">
        {/* Header */}
        <div className="cyber-ach-head">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">RECOGNITION_LOG</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-ach-title">
            Key Achievements & <span className="grad">Recognition</span>
          </h2>
          <p className="cyber-ach-lede">
            Awards, speaking engagements, and recognition from industry leaders
            for contributions to cybersecurity research and practice.
          </p>
        </div>

        {/* Cards */}
        <div className="cyber-ach-grid">
          {portfolioItems.map((item) => {
            const primary = item.categories?.[0] ?? "Featured";
            const icon = iconForCategory[primary] ?? "fa-star";
            return (
              <article className="cyber-ach-card" key={item.id}>
                <div className="cyber-ach-media">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    loading="lazy"
                  />
                  <span className="cyber-ach-cat">
                    <i className={`fa-light ${icon}`} />
                    {primary}
                  </span>
                  <span className="cyber-ach-corner cyber-ach-corner-tr" />
                  <span className="cyber-ach-corner cyber-ach-corner-bl" />
                </div>

                <div className="cyber-ach-body">
                  <h3 className="cyber-ach-name">{item.title}</h3>
                  <div className="cyber-ach-tags">
                    {item.tags.map((tag, i) => (
                      <span className="cyber-ach-tag" key={i}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
