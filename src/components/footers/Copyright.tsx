import { Link } from "react-router-dom";
import { siteIdentity, copyrightConfig } from "@/data/siteConfig";

export default function Copyright() {
  return (
    <div className="copyright-area-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-wrapper">
              <p className="copy-right-para tmp-link-animation">
                © {siteIdentity.name} {new Date().getFullYear()} | All Rights Reserved
              </p>
              <ul className="tmp-link-animation dark-content">
                <li>
                  <a href={copyrightConfig.termsHref}>{copyrightConfig.termsLabel}</a>
                </li>
                <li>
                  <a href={copyrightConfig.privacyHref}>{copyrightConfig.privacyLabel}</a>
                </li>
                <li>
                  <Link to="/contact">{copyrightConfig.contactLabel}</Link>
                </li>
              </ul>
              <ul className="tmp-link-animation light-content">
                <li>
                  <a href={copyrightConfig.termsHref}>{copyrightConfig.termsLabel}</a>
                </li>
                <li>
                  <a href={copyrightConfig.privacyHref}>{copyrightConfig.privacyLabel}</a>
                </li>
                <li>
                  <Link to="/contact-white">{copyrightConfig.contactLabel}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
