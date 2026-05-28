type Item = {
  icon: string;
  code: string;
  title: string;
  description: string;
  pillars: string[];
};

const items: Item[] = [
  {
    icon: "fa-shield",
    code: "01",
    title: "Cybersecurity Leadership & Consulting",
    description:
      "Robust cybersecurity strategy and program leadership across enterprise products and organizations.",
    pillars: ["Strategy", "Governance", "Program Mgmt"],
  },
  {
    icon: "fa-bug",
    code: "02",
    title: "Application Security",
    description:
      "Mitigating vulnerabilities in Web, API & Mobile applications with secure code reviews and SDLC integration.",
    pillars: ["Web", "API", "Mobile", "SAST/DAST"],
  },
  {
    icon: "fa-network-wired",
    code: "03",
    title: "Infrastructure & Network Security",
    description:
      "Security assessments for networks, firewalls, and servers — safeguarding critical enterprise environments.",
    pillars: ["Network", "Firewall", "Servers"],
  },
  {
    icon: "fa-cloud",
    code: "04",
    title: "Cloud Security & Compliance",
    description:
      "AWS, Azure, GCP, Docker & Kubernetes security audits with SOC2 and FedRAMP compliance expertise.",
    pillars: ["AWS", "Azure", "GCP", "K8s"],
  },
  {
    icon: "fa-microchip",
    code: "05",
    title: "IoT & Firmware Security",
    description:
      "IoT ecosystem testing and firmware audits — led device testing for Pelco, Axis, Bosch, Sony and more.",
    pillars: ["IoT", "Firmware", "Hardware"],
  },
  {
    icon: "fa-magnifying-glass",
    code: "06",
    title: "Cyber Forensics & Investigations",
    description:
      "OSINT, forensic analysis, digital evidence collection. Cyber crime investigation and incident response.",
    pillars: ["DFIR", "OSINT", "IR"],
  },
];

export default function Expertise() {
  return (
    <section className="cyber-expertise-area" id="expertise">
      <div className="container">
        {/* Header */}
        <div className="cyber-exp-head">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">EXPERTISE_MATRIX</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-exp-title">
            Core Security Expertise &<br />
            <span className="grad">Specializations</span>
          </h2>
          <p className="cyber-exp-lede">
            Comprehensive security delivery across application, cloud,
            infrastructure, and IoT domains with proven results at enterprise
            scale.
          </p>
        </div>

        {/* Grid */}
        <div className="cyber-exp-grid">
          {items.map((item, i) => (
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
