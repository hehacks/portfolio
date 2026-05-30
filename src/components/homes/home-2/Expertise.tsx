import { expertiseSection, expertiseItems } from "@/data/expertiseSection";

export default function Expertise() {
  const s = expertiseSection;

  return (
    <section className="cyber-expertise-area" id="expertise">
      <div className="container">
        {/* Header */}
        <div className="cyber-exp-head">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">{s.eyebrowLabel}</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-exp-title">
            {s.titleMain}
            <br />
            <span className="grad">{s.titleHighlight}</span>
          </h2>
          <p className="cyber-exp-lede">{s.lede}</p>
        </div>

        {/* Grid */}
        <div className="cyber-exp-grid">
          {expertiseItems.map((item, i) => (
            <div className="cyber-exp-card" key={i}>
              <div className="cyber-exp-top">
                <span className="cyber-exp-num">{item.code}</span>
                <span className="cyber-exp-icon">
                  <i className={`fa-light ${item.icon}`} />
                </span>
              </div>

              <h3 className="cyber-exp-name">{item.title}</h3>
              <p className="cyber-exp-desc">{item.description}</p>

              <div className="cyber-exp-pillars">
                {item.pillars.map((p, j) => (
                  <span className="cyber-exp-pill" key={j}>
                    {p}
                  </span>
                ))}
              </div>

              <span className="cyber-exp-hover-bar" />
              <span className="cyber-cert-corner cyber-cert-corner-tr" />
              <span className="cyber-cert-corner cyber-cert-corner-bl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
