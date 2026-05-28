import { Link } from "react-router-dom";
import ScrollTop from "../common/ScrollTop";
import Sidebar from "../headers/Sidebar";
import MobileMenu from "../headers/MobileMenu";
import MobileMenuOnepage from "../headers/MobileMenuOnepage";
import { footerLinks, footerLinksWhite } from "@/data/footerLinks";
export default function Footer2() {
  return (
    <>
      <footer className="footer-area footer-style-two-wrapper bg-color-footer bg_images tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-two">
            <div className="row g-5">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-wrapper border-right mr--20">
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
                        }}
                      >
                        AS
                      </span>
                      <span
                        style={{
                          color: "var(--color-heading)",
                          fontWeight: 700,
                          fontSize: "22px",
                        }}
                      >
                        Arun S
                      </span>
                    </Link>
                  </div>
                  <p className="description">
                    Principal Security Architect at IBM India. Cybersecurity
                    leader with 11+ years of experience.
                  </p>
                  <div className="social-link footer">
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
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="quick-link-wrap">
                  <h5 className="ft-title">Quick Link</h5>
                  <ul className="ft-link tmp-scroll-trigger dark-content animation-order-1 tmp-link-animation">
                    {footerLinks.map((item, index) => (
                      <li key={index}>
                        <Link to={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="ft-link tmp-scroll-trigger light-content2 animation-order-1 tmp-link-animation">
                    {footerLinksWhite.map((item, index) => (
                      <li key={index}>
                        <Link to={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h5 className="ft-title">Contact</h5>
                  <ul className="ft-link tmp-scroll-trigger animation-order-1 tmp-link-animation">
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-globe" />
                      </span>
                      <a href="https://www.hehacks.com" target="_blank" rel="noopener noreferrer">hehacks.com</a>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      India
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <a href="mailto:contact@hehacks.com">contact@hehacks.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="newslatter tmp-scroll-trigger animation-order-1">
                  <h3 className="title">Get In Touch</h3>
                  <p className="para">
                    I am available for freelance work. Connect with me on
                    Topmate for consulting engagements.
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="newsletter-form-1"
                  >
                    <input type="email" placeholder="Your e-mail" />
                    <span>
                      <a href="#" className="form-icon">
                        <i className="fa-solid fa-arrow-right" />
                      </a>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>{" "}
      <ScrollTop />
      <Sidebar />
      <MobileMenu />
      <MobileMenuOnepage />
    </>
  );
}
