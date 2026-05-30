import { Link } from "react-router-dom";
import OdometerComponent from "./OdometerComponent";
import { aboutSection } from "@/data/about";

export default function About({ parentClass = "about-us-area" }) {
  const a = aboutSection;

  return (
    <section className={parentClass} id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-left-content-wrap bg-vactor-one">
              <div className="years-of-experience-card tmp-scroll-trigger tmp-fade-in animation-order-1">
                <h2 className="counter card-title">
                  <OdometerComponent max={a.yearsOfExperience} /> +
                </h2>
                <p className="card-para">{a.yearsLabel}</p>
              </div>
              <div className="design-card tmp-scroll-trigger tmp-fade-in animation-order-2">
                <div className="design-card-img">
                  <div className="icon">
                    <i className={a.designCard.icon} />
                  </div>
                </div>
                <div className="card-info">
                  <h3 className="card-title">{a.designCard.title}</h3>
                  <p className="card-para">{a.designCard.sub}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-right-content-wrap">
              <div className="section-head text-align-left mb--50">
                <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <span className="subtitle">{a.subtitle}</span>
                </div>
                <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                  {a.titleAlt}
                </h2>
                <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                  {a.descriptionAlt}
                </p>
              </div>
              <div className="about-us-section-card row g-5">
                {a.cards.map((card, i) => (
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                    <div
                      className={`about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${i + 4}`}
                    >
                      <div className="card-head">
                        <div className="logo-img">
                          <img
                            alt="logo"
                            loading="lazy"
                            src={card.logo}
                            width={24}
                            height={24}
                          />
                        </div>
                        <h3 className="card-title">{card.title}</h3>
                      </div>
                      <p className="card-para">{card.para}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="about-btn mt--40 tmp-scroll-trigger tmp-fade-in animation-order-6">
                <Link className="tmp-btn hover-icon-reverse radius-round" to="/about">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">{a.readMoreLabel}</span>
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
                <h3 style={{ fontSize: "18px", marginBottom: "15px" }}>{a.interestsLabel}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {a.interests.map((interest, i) => (
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
