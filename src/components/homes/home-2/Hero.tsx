import TyperComponent from "@/components/common/TyperComponent";

export default function Hero() {
  return (
    <div className="cyber-hero-area">
      {/* Decorative scan line + corners */}
      <div className="cyber-hero-scanline" aria-hidden="true" />

      <div className="container">
        <div className="cyber-hero-grid">
          {/* LEFT — INTRO */}
          <div className="cyber-hero-left">
            <div className="cyber-terminal-line">
              <span className="cyber-prompt">$</span>
              <span className="cyber-cmd">whoami</span>
              <span className="cyber-cursor">_</span>
            </div>

            <h1 className="cyber-hero-title">
              <span className="cyber-hero-greet">I am</span>
              <span className="cyber-hero-name">Arun S</span>
              <span className="cyber-hero-role">
                <span className="cd-headline clip is-full-width">
                  <TyperComponent
                    strings={[
                      "Product Security Expert.",
                      "Security Architect.",
                      "Cyber Strategist.",
                      "Cyber Crime Investigator.",
                      "National Security Scholar.",
                    ]}
                  />
                </span>
              </span>
            </h1>

            <p className="cyber-hero-disc">
              Principal Security Architect at{" "}
              <span className="hl">IBM India</span> with{" "}
              <span className="hl">11+ years</span> across cybersecurity
              leadership, application security, cloud security and{" "}
              <span className="hl">cyber forensics</span>.
            </p>

            <div className="cyber-hero-chips">
              <span className="cyber-chip">
                <i className="fa-light fa-shield" />
                AppSec
              </span>
              <span className="cyber-chip">
                <i className="fa-light fa-cloud" />
                Cloud Security
              </span>
              <span className="cyber-chip">
                <i className="fa-light fa-magnifying-glass" />
                Forensics
              </span>
              <span className="cyber-chip">
                <i className="fa-light fa-bug" />
                Threat Modeling
              </span>
            </div>

            <div className="cyber-hero-actions">
              <a
                className="tmp-btn hover-icon-reverse radius-round"
                href="#about"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">More About Me</span>
                  <span className="btn-icon">
                    <i className="fa-sharp fa-regular fa-arrow-right" />
                  </span>
                  <span className="btn-icon">
                    <i className="fa-sharp fa-regular fa-arrow-right" />
                  </span>
                </span>
              </a>

              <a
                className="cyber-ghost-btn"
                href="https://topmate.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-light fa-calendar-check" />
                <span>Book a Session</span>
              </a>
            </div>

            <div className="cyber-hero-stats">
              <div className="cyber-stat">
                <span className="cyber-stat-num">11+</span>
                <span className="cyber-stat-label">Years in Cyber</span>
              </div>
              <div className="cyber-stat-divider" />
              <div className="cyber-stat">
                <span className="cyber-stat-num">50+</span>
                <span className="cyber-stat-label">Enterprise Audits</span>
              </div>
              <div className="cyber-stat-divider" />
              <div className="cyber-stat">
                <span className="cyber-stat-num">IBM</span>
                <span className="cyber-stat-label">Principal Architect</span>
              </div>
            </div>

            <div className="cyber-hero-social">
              <span className="cyber-social-label">Connect</span>
              <a
                href="https://www.linkedin.com/in/-aruns/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a
                href="https://twitter.com/he_hacks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-twitter" />
              </a>
              <a
                href="https://github.com/hehacks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                href="https://www.instagram.com/h3hacks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
          </div>

          {/* RIGHT — VISUAL */}
          <div className="cyber-hero-right">
            <div className="cyber-orbit">
              <div className="cyber-orbit-ring ring-1" />
              <div className="cyber-orbit-ring ring-2" />
              <div className="cyber-orbit-ring ring-3" />
              <div className="cyber-orbit-glow" />

              <div className="cyber-portrait">
                <img
                  alt="Arun S — Principal Security Architect"
                  src="/assets/images/arun/banner-01.webp"
                  width={800}
                  height={1024}
                />
              </div>

              <div className="cyber-floating-card card-top">
                <i className="fa-light fa-lock" />
                <div>
                  <span className="ttl">Zero Trust</span>
                  <span className="sub">Architect</span>
                </div>
              </div>

              <div className="cyber-floating-card card-right">
                <i className="fa-light fa-fingerprint" />
                <div>
                  <span className="ttl">Forensics</span>
                  <span className="sub">DFIR Expert</span>
                </div>
              </div>

              <div className="cyber-floating-card card-bottom">
                <i className="fa-light fa-shield-keyhole" />
                <div>
                  <span className="ttl">AppSec</span>
                  <span className="sub">SDLC + DevSecOps</span>
                </div>
              </div>

              <span className="cyber-tag-1">[ SECURE ]</span>
              <span className="cyber-tag-2">{"<encrypted/>"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
