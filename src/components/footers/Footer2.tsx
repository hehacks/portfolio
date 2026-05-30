import { Link } from "react-router-dom";
import ScrollTop from "../common/ScrollTop";
import Sidebar from "../headers/Sidebar";
import MobileMenu from "../headers/MobileMenu";
import MobileMenuOnepage from "../headers/MobileMenuOnepage";
import { footerLinks, footerLinksWhite } from "@/data/footerLinks";
import { siteIdentity, socialLinks, footerConfig } from "@/data/siteConfig";

export default function Footer2() {
  return (
    <>
      <footer className="footer-area footer-style-two-wrapper bg-color-footer bg_images tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-two">
            <div className="row g-5">
              {/* Brand column */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo">
                    <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
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
                        {siteIdentity.initials}
                      </span>
                      <span
                        style={{
                          color: "var(--color-heading)",
                          fontWeight: 700,
                          fontSize: "22px",
                        }}
                      >
                        {siteIdentity.name}
                      </span>
                    </Link>
                  </div>
                  <p className="description">{siteIdentity.description}</p>
                  <div className="social-link footer">
                    {socialLinks.map((s, i) => (
                      <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                        <i className={s.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick links column */}
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="quick-link-wrap">
                  <h5 className="ft-title">{footerConfig.quickLinksTitle}</h5>
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

              {/* Contact column */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h5 className="ft-title">{footerConfig.contactTitle}</h5>
                  <ul className="ft-link tmp-scroll-trigger animation-order-1 tmp-link-animation">
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      {siteIdentity.location}
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Topmate CTA column */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="newslatter tmp-scroll-trigger animation-order-1">
                  <h3 className="title">Book a Session</h3>
                  <p className="para">Available for security consulting, career guidance, and 1:1 advisory sessions.</p>
                  <a
                    href={siteIdentity.topmateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "12px 24px",
                      borderRadius: "999px",
                      background: "var(--color-primary)",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "15px",
                      textDecoration: "none",
                      marginTop: "8px",
                    }}
                  >
                    <i className="fa-light fa-calendar-check" />
                    Book a Session on Topmate
                    <i className="fa-sharp fa-regular fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollTop />
      <Sidebar />
      <MobileMenu />
      <MobileMenuOnepage />
    </>
  );
}
