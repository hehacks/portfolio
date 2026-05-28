type Role = {
  title: string;
  location: string;
  description: string;
  icon: string;
  status: string;
};

type Event = {
  event: string;
  location: string;
  icon: string;
  type: string;
};

const communityRoles: Role[] = [
  {
    title: "Chapter Lead — null Security Community",
    location: "Bangalore",
    description:
      "Leading the null security community chapter — organizing meetups, workshops, and knowledge-sharing sessions for security professionals.",
    icon: "fa-users",
    status: "ACTIVE",
  },
  {
    title: "Chapter Lead — null | OWASP",
    location: "Coimbatore",
    description:
      "Co-leading the OWASP Coimbatore chapter — driving application security awareness and community engagement in the region.",
    icon: "fa-shield",
    status: "ACTIVE",
  },
  {
    title: "Active Contributor & Moderator",
    location: "BSides · null · OWASP",
    description:
      "Active contributor, moderator, and member across BSides, null, and OWASP communities. Frequent speaker and trainer at major conferences.",
    icon: "fa-microphone",
    status: "ONGOING",
  },
];

const speakingEvents: Event[] = [
  {
    event: "Diana Initiative",
    location: "Las Vegas, USA",
    icon: "fa-star",
    type: "KEYNOTE",
  },
  {
    event: "Defcon Adversary Village",
    location: "c0c0n · Defcon",
    icon: "fa-skull-crossbones",
    type: "TALK",
  },
  {
    event: "BSides",
    location: "Multiple Cities",
    icon: "fa-code",
    type: "SPEAKER",
  },
  {
    event: "CSI",
    location: "Computer Society of India",
    icon: "fa-building-columns",
    type: "TRAINER",
  },
];

export default function Community() {
  return (
    <section className="cyber-community-area" id="community">
      <div className="container">
        {/* Header */}
        <div className="cyber-comm-head">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">COMMUNITY_NODES</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-comm-title">
            Community <span className="grad">Leadership</span> & Speaking
          </h2>
          <p className="cyber-comm-lede">
            Building and contributing to security communities across India and
            globally — through chapter leadership, moderation, and conference
            speaking.
          </p>
        </div>

        {/* Roles */}
        <div className="cyber-comm-roles">
          {communityRoles.map((r, i) => (
            <article className="cyber-role-card" key={i}>
              <div className="cyber-role-top">
                <span className="cyber-role-icon">
                  <i className={`fa-light ${r.icon}`} />
                </span>
                <div className="cyber-role-meta">
                  <span className="cyber-role-status">
                    <span className="bdg-pulse" />
                    {r.status}
                  </span>
                  <span className="cyber-role-loc">
                    <i className="fa-light fa-location-dot" />
                    {r.location}
                  </span>
                </div>
              </div>
              <h3 className="cyber-role-title">{r.title}</h3>
              <p className="cyber-role-desc">{r.description}</p>
              <span className="cyber-cert-corner cyber-cert-corner-tr" />
              <span className="cyber-cert-corner cyber-cert-corner-bl" />
            </article>
          ))}
        </div>

        {/* Speaking block */}
        <div className="cyber-speak-block">
          <div className="cyber-speak-head">
            <div className="cyber-speak-headline">
              <span className="prompt">{">"}</span>
              <h3>Conference Speaking &amp; Training</h3>
            </div>
            <p>
              Invited speaker and trainer at leading global security
              conferences.
            </p>
          </div>

          <div className="cyber-speak-grid">
            {speakingEvents.map((e, i) => (
              <div className="cyber-speak-card" key={i}>
                <span className="cyber-speak-type">{e.type}</span>
                <span className="cyber-speak-icon">
                  <i className={`fa-light ${e.icon}`} />
                </span>
                <h4 className="cyber-speak-name">{e.event}</h4>
                <p className="cyber-speak-loc">
                  <i className="fa-light fa-location-dot" />
                  {e.location}
                </p>
                <span className="cyber-speak-bar" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
