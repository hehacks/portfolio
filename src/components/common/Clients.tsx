export default function Clients() {
  const clientCategories = [
    {
      category: "Banking & Finance",
      clients: [
        "Adyen",
        "Freetrade",
        "Credit Karma",
        "TradeWeb Markets LLC",
        "Solaris Bank",
        "PointsBet",
        "Arvest Bank Inc.",
        "Easy Financial Services Inc.",
        "Maza Financial",
        "BFS Capital",
        "Insurity Inc.",
        "Lumatax",
      ],
    },
    {
      category: "Healthcare",
      clients: [
        "10xGenomics",
        "Carium",
        "Vida Health Inc.",
        "Virgin Pulse",
        "Carrot",
        "Stork Club",
        "Invitae",
        "Progyny",
        "EveryLife Technologies",
      ],
    },
    {
      category: "Product Security",
      clients: [
        "DialPad",
        "Vonage",
        "SecureAuth",
        "Pendo.io",
        "Legion Technologies",
        "Builder.ai",
        "Garden.io",
        "ezCater",
        "Nutanix",
        "Sixt RIDE",
        "Rhumbix",
        "VivaStream",
      ],
    },
    {
      category: "Social Media",
      clients: [
        "Business Insider",
        "Stova",
        "lovoo",
        "HubSpot",
        "Curalate",
        "Community.com",
        "Pollen",
        "On24",
      ],
    },
    {
      category: "Research",
      clients: [
        "CBRE",
        "BenchPrep",
        "Tactic",
        "Medallia Inc.",
        "Preqin",
        "PayScale",
        "Cengage",
      ],
    },
    {
      category: "FMCG",
      clients: [
        "Spectrum Brands",
        "MuleSoft",
      ],
    },
  ];

  return (
    <section className="tmp-section-gapTop" id="clients">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Clients</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Trusted by Industry Leaders
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            Security consulting and assessments delivered across banking,
            healthcare, product security, and enterprise technology sectors.
          </p>
        </div>

        <div className="row g-5">
          {clientCategories.map((cat, index) => (
            <div className="col-lg-6 col-md-6 col-12" key={index}>
              <div
                className={`tpm-custom-box-bg tmp-scroll-trigger tmp-fade-in animation-order-${
                  index + 1
                }`}
                style={{ padding: "30px", borderRadius: "20px", height: "100%" }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    marginBottom: "20px",
                    color: "var(--color-primary)",
                  }}
                >
                  {cat.category}
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  {cat.clients.map((client, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "6px 14px",
                        borderRadius: "20px",
                        border: "1px solid var(--color-border)",
                        fontSize: "14px",
                        color: "var(--color-body)",
                        background: "var(--background-color-1)",
                      }}
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
