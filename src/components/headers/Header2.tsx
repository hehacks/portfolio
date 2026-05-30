import { useEffect, useState } from "react";
import { useModalUI } from "@/context/ModalUIContext";
import { navLinks, socialLinks, siteIdentity } from "@/data/siteConfig";
import { useNavigate, useLocation } from "react-router-dom";

function scrollTo(href: string) {
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Header2() {
  const { openModal } = useModalUI();
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("#");
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 150);
          const sectionIds = navLinks.map((l) => l.href).filter((h) => h !== "#");
          let current = "#";
          for (const id of sectionIds) {
            const el = document.querySelector(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 120) current = id;
            }
          }
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (isHome) {
      scrollTo(href);
    } else {
      // Navigate to home then scroll after a short delay
      if (href === "#") {
        navigate("/");
      } else {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 400);
      }
    }
  };

  // Only show the first 3 social links in the header
  const headerSocials = socialLinks.slice(0, 3);

  return (
    <header
      className={`tmp-header-area-start header-one header--sticky header--transparent ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-content">
              {/* Logo */}
              <div className="logo">
                <button
                  onClick={() => isHome ? scrollTo("#") : navigate("/")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <span
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "linear-gradient(135deg, var(--color-primary), #1D4ED8)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "18px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {siteIdentity.initials}
                  </span>
                  <span
                    style={{
                      color: "var(--color-heading)",
                      fontWeight: 700,
                      fontSize: "22px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {siteIdentity.name}
                  </span>
                </button>
              </div>

              {/* Desktop nav */}
              <nav className="tmp-mainmenu-nav d-none d-xl-block">
                <ul className="tmp-mainmenu dark-content">
                  {navLinks.map((item) => (
                    <li key={item.href}>
                      <a
                        href={isHome ? item.href : `/${item.href}`}
                        className={isHome && activeSection === item.href ? "active" : ""}
                        onClick={(e) => handleNavClick(e, item.href)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Right — socials + mobile menu */}
              <div className="tmp-header-right">
                <div className="social-share-wrapper d-none d-md-block">
                  <div className="social-link">
                    {headerSocials.map((s, i) => (
                      <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                        <i className={s.icon} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile hamburger */}
                <div className="actions-area">
                  <div className="tmp-side-collups-area d-block d-xl-none">
                    <button
                      className="tmp-menu-bars"
                      onClick={() => openModal("mobileMenu1")}
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
