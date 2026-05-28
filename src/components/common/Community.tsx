export default function Community() {
  const communityRoles = [
    {
      title: "Chapter Lead – Null Security Community",
      location: "Bangalore",
      description:
        "Leading the null security community chapter in Bangalore, organizing meetups, workshops, and knowledge-sharing sessions for security professionals.",
      icon: "fa-solid fa-users",
    },
    {
      title: "Chapter Lead – Null | OWASP",
      location: "Coimbatore",
      description:
        "Co-leading the OWASP Coimbatore chapter, driving application security awareness and community engagement in the region.",
      icon: "fa-solid fa-shield-halved",
    },
    {
      title: "Active Contributor & Moderator",
      location: "BSides, Null, OWASP",
      description:
        "Active contributor, moderator, and member across BSides, Null, and OWASP communities. Frequent speaker and trainer at major security conferences.",
      icon: "fa-solid fa-microphone",
    },
  ];

  const speakingEvents = [
    {
      event: "Diana Initiative",
      location: "Las Vegas",
      icon: "fa-solid fa-star",
    },
    {
      event: "Defcon Adversary Village",
      location: "c0c0n",
      icon: "fa-solid fa-skull-crossbones",
    },
    {
      event: "BSides",
      location: "Multiple Cities",
      icon: "fa-solid fa-code",
    },
    {
      event: "CSI – Computer Society of India",
      location: "India",
      icon: "fa-solid fa-building-columns",
    },
  ];

  return (
    <section className="tmp-section-gapTop" id="community">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Community & Speaking</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Security Community Leadership
          </h2>
        </div>

        {/* Community Roles - Timeline Style */}
        <div className="row g-5 mb--60">
          {communityRoles.map((role, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div
                className={`tmp-scroll-trigger tmp-fade-in animation-order-${index + 1}`}
                style={{
                  position: "relative",
                  padding: "35px 30px",
                  borderRadius: "16px",
                  background: "var(--background-color-4)",
                  border: "1px solid var(--color-border)",
                  height: "100%",
                  transition: "var(--transition)",
                  overflow: "hidden",
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "30px",
                    right: "30px",
                    height: "3px",
                    background: "var(--color-primary)",
                    borderRadius: "0 0 3px 3px",
                  }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, var(--color-primary), #1D4ED8)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i className={role.icon} style={{ fontSize: "20px", color: "#fff" }} />
                  </div>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "var(--color-primary)",
                    }}
                  >
                    {role.location}
                  </span>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", lineHeight: 1.3 }}>
                  {role.title}
                </h3>
                <p style={{ fontSize: "15px", color: "var(--color-body)", lineHeight: 1.7, margin: 0 }}>
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Speaking Events - Horizontal Cards */}
        <div
          className="tmp-scroll-trigger tmp-fade-in animation-order-1"
          style={{
            padding: "50px 40px",
            borderRadius: "20px",
            background: "var(--background-color-4)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h3 style={{ fontSize: "26px", fontWeight: 700, marginBottom: "8px" }}>
              Conference Speaking & Training
            </h3>
            <p style={{ color: "var(--color-body)", fontSize: "15px", margin: 0 }}>
              Invited speaker and trainer at leading global security conferences
            </p>
          </div>
          <div className="row g-4">
            {speakingEvents.map((event, index) => (
              <div className="col-lg-3 col-md-6 col-6" key={index}>
                <div
                  className={`tmp-scroll-trigger tmp-fade-in animation-order-${index + 1}`}
                  style={{
                    textAlign: "center",
                    padding: "30px 20px",
                    borderRadius: "14px",
                    background: "var(--background-color-2)",
                    border: "1px solid var(--color-border)",
                    transition: "var(--transition)",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--color-primary), #1D4ED8)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <i className={event.icon} style={{ fontSize: "22px", color: "#fff" }} />
                  </div>
                  <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "6px", lineHeight: 1.3 }}>
                    {event.event}
                  </h4>
                  <p style={{ fontSize: "13px", color: "var(--color-body)", margin: 0 }}>
                    {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
