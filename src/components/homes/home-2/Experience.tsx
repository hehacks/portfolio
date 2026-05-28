type TimelineItem = {
  duration: string;
  title: string;
  institute: string;
  location?: string;
  highlights?: string[];
  description?: string;
  current?: boolean;
};

const experiences: TimelineItem[] = [
  {
    duration: "2024 — Present",
    title: "Principal Security Architect",
    institute: "IBM India Pvt. Ltd.",
    location: "Bangalore, IN",
    current: true,
  },
  {
    duration: "2019 — 2024",
    title: "Senior Security Team Lead",
    institute: "IBM India Pvt. Ltd.",
    location: "Bangalore, IN",
  },
  {
    duration: "2018 — 2019",
    title: "Senior Security Consultant",
    institute: "IBM India Pvt. Ltd.",
    location: "Bangalore, IN",
  },
  {
    duration: "2016 — 2017",
    title: "Information Security Consultant",
    institute: "IBM India Pvt. Ltd.",
    location: "Bangalore, IN",
  },
  {
    duration: "2014 — 2016",
    title: "Cyber Security Analyst",
    institute: "Capgemini India Pvt. Ltd.",
    location: "Chennai, IN",
  },
  {
    duration: "2014",
    title: "Security Researcher",
    institute: "Independent",
  },
];

const education: TimelineItem[] = [
  {
    duration: "2024",
    title: "MBA — Master of Business Administration",
    institute: "Deakin Business School",
    location: "Melbourne, Australia",
  },
  {
    duration: "2022",
    title: "PG in Project Management",
    institute: "IMT Ghaziabad",
    location: "Delhi, IN",
  },
  {
    duration: "2014",
    title: "B.Tech — Information Technology",
    institute: "KGISL Institute of Technology",
    location: "Coimbatore, IN",
  },
];

const certifications = [
  {
    badge: "OffSec",
    title: "OSCP",
    full: "Offensive Security Certified Professional",
    link: "https://www.offensive-security.com/information-security-certifications/oscp-offensive-security-certified-professional/",
  },
  {
    badge: "ISACA",
    title: "CISM",
    full: "Certified Information Security Manager",
    link: "https://www.credly.com/badges/86c431b6-21d4-4517-a4b3-3923d788ccec/linked_in_profile",
  },
  {
    badge: "AWS",
    title: "AWS Security",
    full: "Certified Security — Specialty",
    link: "https://www.credly.com/badges/8e614864-2463-48a3-b7a0-68689825be04/linked_in_profile",
  },
  {
    badge: "INE",
    title: "eWPTXv2",
    full: "Web Application Penetration Tester eXtreme",
    link: "https://certs.ine.com/2b95a880-ec33-4b1c-8006-215f7672d5b8",
  },
  {
    badge: "INE",
    title: "eWPTv3",
    full: "Web Application Penetration Tester",
    link: "https://certs.ine.com/3867bb2e-d955-4808-a34e-83f352cdbc03",
  },
  {
    badge: "Microsoft",
    title: "Azure Fundamentals",
    full: "Microsoft Certified: Azure Fundamentals",
    link: "https://learn.microsoft.com/api/credentials/share/en-gb/ArunS-9939/3075056FA1CFE813?sharingId",
  },
];

function TimelineList({ items }: { items: TimelineItem[] }) {
  return (
    <div className="cyber-timeline-mini">
      <div className="cyber-timeline-spine" />
      {items.map((item, i) => (
        <div className="cyber-timeline-row" key={i}>
          <div className="cyber-timeline-marker">
            <span className="cyber-marker-dot" />
            {item.current && <span className="cyber-marker-pulse" />}
          </div>
          <div className="cyber-timeline-card">
            <div className="cyber-tl-head">
              <span className="cyber-tl-time">{item.duration}</span>
              {item.current && (
                <span className="cyber-tl-badge">
                  <span className="bdg-pulse" />
                  Current
                </span>
              )}
            </div>
            <h4 className="cyber-tl-title">{item.title}</h4>
            <div className="cyber-tl-meta">
              <span>
                <i className="fa-light fa-building" />
                {item.institute}
              </span>
              {item.location && (
                <span>
                  <i className="fa-light fa-location-dot" />
                  {item.location}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section className="cyber-resume-area" id="resume-section">
      <div className="container">
        {/* Header */}
        <div className="cyber-resume-head">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">CAREER_LOG</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-resume-title">
            Journey Through <span className="grad">Cybersecurity</span>
          </h2>
          <p className="cyber-resume-lede">
            A decade-plus of building, breaking and defending — from analyst to
            principal architect.
          </p>
        </div>

        {/* Two-column: Experience + Education */}
        <div className="cyber-resume-grid">
          <div className="cyber-resume-col">
            <div className="cyber-col-header">
              <div className="cyber-col-icon">
                <i className="fa-light fa-briefcase" />
              </div>
              <div>
                <h3>Experience</h3>
                <span>{experiences.length} roles · 11+ years</span>
              </div>
            </div>
            <TimelineList items={experiences} />
          </div>

          <div className="cyber-resume-col">
            <div className="cyber-col-header">
              <div className="cyber-col-icon">
                <i className="fa-light fa-graduation-cap" />
              </div>
              <div>
                <h3>Education</h3>
                <span>{education.length} degrees</span>
              </div>
            </div>
            <TimelineList items={education} />
          </div>
        </div>

        {/* Certifications row */}
        <div className="cyber-cert-block">
          <div className="cyber-cert-header">
            <div className="cyber-col-icon">
              <i className="fa-light fa-certificate" />
            </div>
            <div>
              <h3>Certifications</h3>
              <span>
                {certifications.length} active credentials in security & cloud
              </span>
            </div>
          </div>

          <div className="cyber-cert-grid">
            {certifications.map((c, i) => (
              <a
                className="cyber-cert-card"
                key={i}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cyber-cert-badge">{c.badge}</span>
                <h4 className="cyber-cert-title">{c.title}</h4>
                <p className="cyber-cert-sub">{c.full}</p>
                <span className="cyber-cert-verify">
                  <i className="fa-light fa-arrow-up-right-from-square" />
                  Verify
                </span>
                <span className="cyber-cert-corner cyber-cert-corner-tr" />
                <span className="cyber-cert-corner cyber-cert-corner-bl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
