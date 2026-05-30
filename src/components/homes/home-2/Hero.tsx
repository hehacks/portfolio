import React from "react";
import TyperComponent from "@/components/common/TyperComponent";
import { heroContent } from "@/data/hero";
import { socialLinks } from "@/data/siteConfig";

export default function Hero() {
  const h = heroContent;

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
              <span className="cyber-cmd">{h.terminalCommand}</span>
              <span className="cyber-cursor">_</span>
            </div>

            <h1 className="cyber-hero-title">
              <span className="cyber-hero-greet">{h.greeting}</span>
              <span className="cyber-hero-name">{h.name}</span>
              <span className="cyber-hero-role">
                <span className="cd-headline clip is-full-width">
                  <TyperComponent strings={h.typedStrings} />
                </span>
              </span>
            </h1>

            <p className="cyber-hero-disc">
              {h.bioParts.prefix}
              <span className="hl">{h.bioParts.company}</span>
              {h.bioParts.middle}
              <span className="hl">{h.bioParts.years}</span>
              {h.bioParts.suffix}
              <span className="hl">{h.bioParts.lastWord}</span>
              {h.bioParts.end}
            </p>

            <div className="cyber-hero-chips">
              {h.chips.map((chip, i) => (
                <span className="cyber-chip" key={i}>
                  <i className={chip.icon} />
                  {chip.label}
                </span>
              ))}
            </div>

            <div className="cyber-hero-actions">
              <a className="tmp-btn hover-icon-reverse radius-round" href={h.primaryBtn.href}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">{h.primaryBtn.label}</span>
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
                href={h.secondaryBtn.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={h.secondaryBtn.icon} />
                <span>{h.secondaryBtn.label}</span>
              </a>
            </div>

            <div className="cyber-hero-stats">
              {h.stats.map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="cyber-stat-divider" />}
                  <div className="cyber-stat">
                    <span className="cyber-stat-num">{stat.num}</span>
                    <span className="cyber-stat-label">{stat.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <div className="cyber-hero-social">
              <span className="cyber-social-label">{h.socialLabel}</span>
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <i className={s.icon} />
                </a>
              ))}
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
                  alt={h.portraitAlt}
                  src={h.portraitSrc}
                  width={800}
                  height={1024}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>

              {h.floatingCards.map((card, i) => (
                <div className={`cyber-floating-card ${card.position}`} key={i}>
                  <i className={card.icon} />
                  <div>
                    <span className="ttl">{card.title}</span>
                    <span className="sub">{card.sub}</span>
                  </div>
                </div>
              ))}

              {h.decorativeTags.map((tag, i) => (
                <span key={i} className={`cyber-tag-${i + 1}`}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
