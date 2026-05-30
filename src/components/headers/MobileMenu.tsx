import { useEffect, useRef } from "react";
import { useModalUI } from "@/context/ModalUIContext";
import { navLinks, socialLinks, siteIdentity } from "@/data/siteConfig";
import { useNavigate, useLocation } from "react-router-dom";

function scrollTo(href: string) {
  if (href === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function MobileMenu() {
  const { openModals, closeModal } = useModalUI();
  const menuRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node;
      if (
        menuRef.current?.contains(target) &&
        !innerRef.current?.contains(target)
      ) {
        closeModal("mobileMenu1");
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [closeModal]);

  const handleNav = (href: string) => {
    closeModal("mobileMenu1");
    if (isHome) {
      setTimeout(() => scrollTo(href), 300);
    } else {
      if (href === "#") { navigate("/"); return; }
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  };

  return (
    <div className="d-block d-xl-none">
      <div
        ref={menuRef}
        className={`cyber-mobile-menu ${openModals.mobileMenu1 ? "active" : ""}`}
      >
        {/* Backdrop */}
        <div className="cyber-mobile-backdrop" onClick={() => closeModal("mobileMenu1")} />

        <div ref={innerRef} className="cyber-mobile-inner">
          {/* Header */}
          <div className="cyber-mobile-header">
            <button className="cyber-mobile-logo" onClick={() => handleNav("#")}>
              <span className="cyber-mobile-logo-icon">{siteIdentity.initials}</span>
              <span className="cyber-mobile-logo-name">{siteIdentity.name}</span>
            </button>
            <button
              className="cyber-mobile-close"
              onClick={() => closeModal("mobileMenu1")}
              aria-label="Close menu"
            >
              <i className="fa-light fa-xmark" />
            </button>
          </div>

          {/* Terminal line */}
          <div className="cyber-mobile-terminal">
            <span className="prompt">$</span>
            <span className="cmd">navigate</span>
            <span className="cursor">_</span>
          </div>

          {/* Nav links */}
          <nav className="cyber-mobile-nav">
            {navLinks.map((item, i) => (
              <button
                key={i}
                className="cyber-mobile-link"
                onClick={() => handleNav(item.href)}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span className="cyber-mobile-link-icon">
                  <i className={`fa-light ${item.icon}`} />
                </span>
                <span className="cyber-mobile-link-label">{item.label}</span>
                <i className="fa-light fa-arrow-right cyber-mobile-link-arrow" />
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="cyber-mobile-divider" />

          {/* Topmate CTA */}
          <a
            href={siteIdentity.topmateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-mobile-cta"
            onClick={() => closeModal("mobileMenu1")}
          >
            <i className="fa-light fa-calendar-check" />
            <span>{siteIdentity.topmateLabel}</span>
            <i className="fa-light fa-arrow-up-right-from-square" />
          </a>

          {/* Socials */}
          <div className="cyber-mobile-socials">
            <span className="cyber-mobile-socials-label">
              <span className="prompt">{">"}</span> Connect
            </span>
            <div className="cyber-mobile-social-row">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="cyber-mobile-social"
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="cyber-mobile-footer">
            <span className="cyber-mobile-footer-text">{siteIdentity.tagline}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
