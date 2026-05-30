import { skillsSection, skillGroups, techStack } from "@/data/skillsSection";

export default function Skills() {
  const s = skillsSection;

  return (
    <section className="cyber-skills-area">
      <div className="container">
        {/* Header */}
        <div className="cyber-skills-head">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">{s.eyebrowLabel}</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-skills-title">
            {s.titleMain}<span className="grad">{s.titleHighlight}</span>
          </h2>
          <p className="cyber-skills-lede">{s.lede}</p>
        </div>

        {/* Category cards */}
        <div className="cyber-skills-grid">
          {skillGroups.map((g, i) => (
            <div className="cyber-skills-card" key={i}>
              <div className="cyber-skills-card-head">
                <span className="cyber-col-icon">
                  <i className={`fa-light ${g.icon}`} />
                </span>
                <div>
                  <h3>{g.title}</h3>
                  <span>{g.caption}</span>
                </div>
              </div>
              <div className="cyber-skills-list">
                {g.skills.map((skill, j) => (
                  <span className="cyber-skill-chip" key={j}>
                    <span className="bullet">{">"}</span>
                    {skill}
                  </span>
                ))}
              </div>
              <span className="cyber-cert-corner cyber-cert-corner-tr" />
              <span className="cyber-cert-corner cyber-cert-corner-bl" />
            </div>
          ))}
        </div>

        {/* Tools / stack */}
        <div className="cyber-stack-block">
          <div className="cyber-stack-head">
            <span className="prompt">{">"}</span>
            <h4>{s.toolboxLabel}</h4>
          </div>
          <div className="cyber-stack-grid">
            {techStack.map((t, i) => (
              <div className="cyber-stack-item" key={i}>
                <i className={t.icon} />
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
