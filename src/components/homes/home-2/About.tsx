import OdometerComponent from "@/components/common/OdometerComponent";

const focusAreas = [
  {
    icon: "fa-shield",
    title: "Application Security",
    desc: "Web, API & mobile vulnerability assessment with secure code reviews and SAST/DAST integration.",
  },
  {
    icon: "fa-cloud",
    title: "Cloud & Compliance",
    desc: "AWS, Azure, GCP security audits with SOC2, FedRAMP, ISO 27001 expertise.",
  },
  {
    icon: "fa-bug",
    title: "Threat Modeling",
    desc: "STRIDE-based architecture reviews, risk scoring and proactive defense strategy design.",
  },
  {
    icon: "fa-magnifying-glass",
    title: "DFIR & Forensics",
    desc: "Digital forensics, incident response, and cyber crime investigation across enterprises.",
  },
];

const interests = [
  "WebApp | Mobile | API Security",
  "Cloud Security (AWS / Azure / GCP)",
  "Cloud Native Security",
  "Software Supply Chain Security",
  "Threat Modeling",
  "OSINT | Forensics",
];

export default function About() {
  return (
    <section className="cyber-about-area" id="about">
      <div className="container">
        {/* Section header */}
        <div className="cyber-about-head">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">ABOUT_ME</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-about-title">
            Cybersecurity <span className="grad">Leadership</span> &<br />
            Strategic Consulting
          </h2>
          <p className="cyber-about-lede">
            I architect security from code to cloud — leading product security
            initiatives, mentoring teams, and helping enterprises build
            resilient, compliance-ready systems.
          </p>
        </div>

        <div className="cyber-about-grid">
          {/* LEFT — Profile card */}
          <div className="cyber-about-left">
            <div className="cyber-profile-card">
              <div className="cyber-profile-header">
                <span className="cyber-dots">
                  <i /> <i /> <i />
                </span>
                <span className="cyber-file">~/arun/profile.json</span>
              </div>

              <div className="cyber-profile-body">
                <div className="cyber-code">
                  <div className="line">
                    <span className="ln">1</span>
                    <span className="brace">{"{"}</span>
                  </div>
                  <div className="line">
                    <span className="ln">2</span>
                    <span className="key">"name"</span>
                    <span className="punc">:</span>
                    <span className="str">"Arun S"</span>
                    <span className="punc">,</span>
                  </div>
                  <div className="line">
                    <span className="ln">3</span>
                    <span className="key">"role"</span>
                    <span className="punc">:</span>
                    <span className="str">"Principal Security Architect"</span>
                    <span className="punc">,</span>
                  </div>
                  <div className="line">
                    <span className="ln">4</span>
                    <span className="key">"company"</span>
                    <span className="punc">:</span>
                    <span className="str">"IBM India"</span>
                    <span className="punc">,</span>
                  </div>
                  <div className="line">
                    <span className="ln">5</span>
                    <span className="key">"experience"</span>
                    <span className="punc">:</span>
                    <span className="str">"11+ years"</span>
                    <span className="punc">,</span>
                  </div>
                  <div className="line">
                    <span className="ln">6</span>
                    <span className="key">"based_in"</span>
                    <span className="punc">:</span>
                    <span className="str">"Bangalore, IN"</span>
                    <span className="punc">,</span>
                  </div>
                  <div className="line">
                    <span className="ln">7</span>
                    <span className="key">"available"</span>
                    <span className="punc">:</span>
                    <span className="bool">true</span>
                    <span className="punc">,</span>
                  </div>
                  <div className="line">
                    <span className="ln">8</span>
                    <span className="key">"expertise"</span>
                    <span className="punc">:</span>
                    <span className="brace">[</span>
                  </div>
                  <div className="line indent">
                    <span className="ln">9</span>
                    <span className="str">"AppSec"</span>
                    <span className="punc">,</span>
                    <span className="str">"Cloud"</span>
                    <span className="punc">,</span>
                    <span className="str">"DFIR"</span>
                    <span className="punc">,</span>
                  </div>
                  <div className="line indent">
                    <span className="ln">10</span>
                    <span className="str">"Threat Modeling"</span>
                    <span className="punc">,</span>
                    <span className="str">"DevSecOps"</span>
                  </div>
                  <div className="line">
                    <span className="ln">11</span>
                    <span className="brace">]</span>
                    <span className="punc">,</span>
                  </div>
                  <div className="line">
                    <span className="ln">12</span>
                    <span className="key">"leads"</span>
                    <span className="punc">:</span>
                    <span className="brace">[</span>
                    <span className="str">"null Bangalore"</span>
                    <span className="punc">,</span>
                    <span className="str">"OWASP"</span>
                    <span className="brace">]</span>
                  </div>
                  <div className="line">
                    <span className="ln">13</span>
                    <span className="brace">{"}"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat tiles */}
            <div className="cyber-stat-tiles">
              <div className="cyber-tile">
                <h3 className="num">
                  <OdometerComponent max={11} />
                  <span>+</span>
                </h3>
                <p>Years in Cybersecurity</p>
              </div>
              <div className="cyber-tile">
                <h3 className="num">
                  <OdometerComponent max={50} />
                  <span>+</span>
                </h3>
                <p>Enterprise Audits</p>
              </div>
              <div className="cyber-tile">
                <h3 className="num">
                  <OdometerComponent max={20} />
                  <span>+</span>
                </h3>
                <p>CVEs & Disclosures</p>
              </div>
              <div className="cyber-tile">
                <h3 className="num">
                  <OdometerComponent max={2} />
                </h3>
                <p>Communities Led</p>
              </div>
            </div>
          </div>

          {/* RIGHT — focus areas + interests */}
          <div className="cyber-about-right">
            <div className="cyber-focus-grid">
              {focusAreas.map((f, i) => (
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
                <span className="prompt">{">"}</span> Areas of Interest
              </h4>
              <div className="cyber-interests-list">
                {interests.map((interest, i) => (
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
