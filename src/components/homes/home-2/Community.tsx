import { communitySection, communityRoles, speakingEvents } from "@/data/community";

export default function Community() {
  const s = communitySection;

  return (
    <section className="cyber-community-area" id="community">
      <div className="container">
        {/* Header */}
        <div className="cyber-comm-head">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">{s.eyebrowLabel}</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-comm-title">
            {s.titleMain}<span className="grad">{s.titleHighlight}</span>{s.titleEnd}
          </h2>
          <p className="cyber-comm-lede">{s.lede}</p>
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
                  <span className="cyber-role-status" data-status={r.status}>
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
              <h3>{s.speakingBlockTitle}</h3>
            </div>
            <p>{s.speakingBlockSub}</p>
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
