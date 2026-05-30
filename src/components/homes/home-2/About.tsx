import { aboutSection } from "@/data/about";

export default function About() {
  const a = aboutSection;

  return (
    <section className="cyber-about-area" id="about">
      <div className="container">
        {/* Section header */}
        <div className="cyber-about-head">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">{a.eyebrowLabel}</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-about-title">
            {a.titleMain}
            <span className="grad">{a.titleHighlight}</span>
            {a.titleEnd}
            <br />
            {a.titleLine2}
          </h2>
          <p className="cyber-about-lede">{a.lede}</p>
        </div>

        <div className="cyber-about-grid">
          {/* LEFT — Photo + bio text */}
          <div className="cyber-about-left">
            <div className="cyber-about-photo-wrap">
              <img
                src={a.photoSrc}
                alt={a.photoAlt}
                className="cyber-about-photo"
                loading="lazy"
                decoding="async"
              />
              {/* Floating badge */}
              <div className="cyber-about-badge">
                <i className={a.badge.icon} />
                <div>
                  <span className="ttl">{a.badge.title}</span>
                  <span className="sub">{a.badge.sub}</span>
                </div>
              </div>
            </div>

            {/* Text bio */}
            <div className="cyber-about-bio">
              {a.bio.map((paragraph, pi) => (
                <p key={pi}>
                  {paragraph.parts.map((part, i) =>
                    part.bold ? <strong key={i}>{part.text}</strong> : <span key={i}>{part.text}</span>
                  )}
                </p>
              ))}
              <div className="cyber-about-meta">
                {a.meta.map((m, i) => (
                  <span key={i}>
                    <i className={m.icon} /> {m.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — focus areas + interests */}
          <div className="cyber-about-right">
            <div className="cyber-focus-grid">
              {a.focusAreas.map((f, i) => (
                <div className="cyber-focus-card" key={i}>
                  <div className="icon">
                    <i className={`fa-light ${f.icon}`} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <span className="cyber-focus-corner" />
                </div>
              ))}
            </div>

            <div className="cyber-interests">
              <h4 className="cyber-interests-title">
                <span className="prompt">{">"}</span> {a.interestsLabel}
              </h4>
              <div className="cyber-interests-list">
                {a.interests.map((interest, i) => (
                  <span key={i} className="cyber-interest-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
