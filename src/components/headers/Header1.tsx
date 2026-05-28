import Nav1 from "./Nav1";

import { Link } from "react-router-dom";

import { useModalUI } from "@/context/ModalUIContext";
import { useEffect, useState } from "react";

export default function Header1() {
  const { openModal } = useModalUI();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 150);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`tmp-header-area-start header-one header--sticky header--transparent ${
        isSticky ? "sticky" : ""
      } `}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-content">
              <div className="logo">
                <Link to={`/`} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
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
                    AS
                  </span>
                  <span
                    style={{
                      color: "var(--color-heading)",
                      fontWeight: 700,
                      fontSize: "22px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Arun S
                  </span>
                </Link>
              </div>
              <nav className="tmp-mainmenu-nav d-none d-xl-block">
                <Nav1 />
              </nav>
              <div className="tmp-header-right">
                <div className="social-share-wrapper d-none d-md-block">
                  <div className="social-link">
                    <a href="https://www.linkedin.com/in/-aruns/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="https://twitter.com/he_hacks" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="https://github.com/hehacks" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-github" />
                    </a>
                    <a href="https://www.instagram.com/h3hacks" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="actions-area">
                  <div className="tmp-side-collups-area d-none d-xl-block">
                    <button
                      className="tmp-menu-bars tmp_button_active"
                      onClick={() => openModal("sidebar")}
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                  <div className="tmp-side-collups-area d-block d-xl-none">
                    <button
                      className="tmp-menu-bars humberger_menu_active"
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
