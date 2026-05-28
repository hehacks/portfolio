type SkillGroup = {
  title: string;
  icon: string;
  caption: string;
  skills: string[];
};

const groups: SkillGroup[] = [
  {
    title: "Product Security & Core",
    icon: "fa-shield",
    caption: "Engineering-grade security across the SDLC",
    skills: [
      "Application & Cloud Security",
      "Mobile & Network Security",
      "AI & Supply Chain Security",
      "Threat Modeling",
      "Red Teaming",
      "Secure Code Review",
      "DevSecOps",
      "API Security",
    ],
  },
  {
    title: "Strategic Security Operations",
    icon: "fa-crosshairs",
    caption: "Offensive & investigative depth at scale",
    skills: [
      "Open-Source Intelligence (OSINT)",
      "Offensive Operations",
      "Cyber Law",
      "DFIR",
      "OT & Healthcare Security",
      "Incident Response",
      "Risk & Compliance",
      "Zero Trust Architecture",
    ],
  },
];

const stack = [
  { label: "AWS", icon: "fa-brands fa-aws" },
  { label: "Azure", icon: "fa-brands fa-microsoft" },
  { label: "GCP", icon: "fa-brands fa-google" },
  { label: "Kubernetes", icon: "fa-light fa-cubes" },
  { label: "Docker", icon: "fa-brands fa-docker" },
  { label: "Linux", icon: "fa-brands fa-linux" },
  { label: "Python", icon: "fa-brands fa-python" },
  { label: "Burp Suite", icon: "fa-light fa-bug" },
  { label: "Nmap", icon: "fa-light fa-network-wired" },
  { label: "Wireshark", icon: "fa-light fa-magnifying-glass" },
  { label: "Splunk", icon: "fa-light fa-chart-line" },
  { label: "Git", icon: "fa-brands fa-git-alt" },
];

export default function Skills() {
  return (
    <section className="cyber-skills-area">
      <div className="container">
        {/* Header */}
        <div className="cyber-skills-head">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">SKILL_MATRIX</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-skills-title">
            Capabilities <span className="grad">Across the Stack</span>
          </h2>
          <p className="cyber-skills-lede">
            From architecture to investigation — a tool-agnostic, principles-first
            approach honed across enterprise engagements.
          </p>
        </div>

        {/* Category cards */}
        <div className="cyber-skills-grid">
          {groups.map((g, i) => (
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
                {g.skills.map((s, j) => (
                  <span className="cyber-skill-chip" key={j}>
                    <span className="bullet">{">"}</span>
                    {s}
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
            <h4>Toolbox & Stack</h4>
          </div>
          <div className="cyber-stack-grid">
            {stack.map((t, i) => (
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
