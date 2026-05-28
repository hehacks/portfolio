import { Link } from "react-router-dom";
import OdometerComponent from "./OdometerComponent";
export default function About({ parentClass = "about-us-area" }) {
  return (
    <section className={parentClass} id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-left-content-wrap bg-vactor-one">
              <div className="years-of-experience-card tmp-scroll-trigger tmp-fade-in animation-order-1">
                <h2 className="counter card-title">
                  <OdometerComponent max={11} /> +
                </h2>
                <p className="card-para">years of experience</p>
              </div>
              <div className="design-card tmp-scroll-trigger tmp-fade-in animation-order-2">
                <div className="design-card-img">
                  <div className="icon">
                    <i className="fa-sharp fa-thin fa-shield-halved" />
                  </div>
                </div>
                <div className="card-info">
                  <h3 className="card-title">Product Security</h3>
                  <p className="card-para">IBM India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-right-content-wrap">
              <div className="section-head text-align-left mb--50">
                <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <span className="subtitle">About Me</span>
                </div>
                <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                  Cybersecurity Leadership <br />
                  & Strategic Consulting
                </h2>
                <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                  Developing robust cybersecurity strategies and leading security
                  initiatives across enterprise products. Chapter Lead for Null
                  Security Community (Bangalore) and OWASP Coimbatore. Expertise
                  spans e-commerce, healthcare, and banking sectors.
                </p>
              </div>
              <div className="about-us-section-card row g-5">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4">
                    <div className="card-head">
                      <div className="logo-img">
                        <img
                          alt="logo"
                          loading="lazy"
                          src="/assets/images/about/logo-1.svg"
                          width={24}
                          height={24}
                        />
                      </div>
                      <h3 className="card-title">Application Security</h3>
                    </div>
                    <p className="card-para">
                      Identifying and mitigating vulnerabilities in Web, API &
                      Mobile applications with secure code reviews
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-5">
                    <div className="card-head">
                      <div className="logo-img">
                        <img
                          loading="lazy"
                          alt="logo"
                          src="/assets/images/about/logo-2.svg"
                          width={24}
                          height={24}
                        />
                      </div>
                      <h3 className="card-title">Cloud & Compliance</h3>
                    </div>
                    <p className="card-para">
                      AWS, Azure, GCP security audits with SOC2 and FedRAMP
                      compliance expertise
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-btn mt--40 tmp-scroll-trigger tmp-fade-in animation-order-6">
                <Link
                  className="tmp-btn hover-icon-reverse radius-round"
                  to={`/about`}
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Read More About Me</span>
                    <span className="btn-icon">
                      <i className="fa-sharp fa-regular fa-arrow-right" />
                    </span>
                    <span className="btn-icon">
                      <i className="fa-sharp fa-regular fa-arrow-right" />
                    </span>
                  </span>
                </Link>
              </div>
              <div className="mt--40 tmp-scroll-trigger tmp-fade-in animation-order-7">
                <h3 style={{ fontSize: "18px", marginBottom: "15px" }}>Areas of Interest</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {[
                    "WebApp | Mobile | API Security",
                    "Cloud Security (AWS / Azure / GCP)",
                    "Cloud Native Security",
                    "Software Supply Chain Security",
                    "Threat Modeling",
                    "OSINT | Forensics",
                  ].map((interest, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "6px 14px",
                        borderRadius: "20px",
                        border: "1px solid var(--color-primary)",
                        fontSize: "14px",
                        color: "var(--color-primary)",
                      }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
