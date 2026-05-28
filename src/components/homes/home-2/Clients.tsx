type Category = {
  category: string;
  icon: string;
  accent: string;
  clients: string[];
};

const clientCategories: Category[] = [
  {
    category: "Banking & Finance",
    icon: "fa-building-columns",
    accent: "BFSI",
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
    icon: "fa-heart-pulse",
    accent: "HLS",
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
    icon: "fa-shield",
    accent: "PRD",
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
    category: "Social & Media",
    icon: "fa-users",
    accent: "SOC",
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
    category: "Research & Data",
    icon: "fa-flask",
    accent: "RND",
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
    category: "FMCG & Enterprise",
    icon: "fa-boxes-stacked",
    accent: "ENT",
    clients: ["Spectrum Brands", "MuleSoft"],
  },
];

export default function Clients() {
  const totalClients = clientCategories.reduce(
    (sum, c) => sum + c.clients.length,
    0
  );

  return (
    <section className="cyber-clients-area" id="clients">
      <div className="container">
        {/* Header */}
        <div className="cyber-cli-head">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">CLIENT_REGISTRY</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-cli-title">
            Trusted by <span className="grad">Industry Leaders</span>
          </h2>
          <p className="cyber-cli-lede">
            Security consulting and assessments delivered across banking,
            healthcare, product, and enterprise technology sectors.
          </p>

          <div className="cyber-cli-stats">
            <div className="cyber-cli-stat">
              <span className="num">{totalClients}+</span>
              <span className="lbl">Engagements</span>
            </div>
            <span className="divider" />
            <div className="cyber-cli-stat">
              <span className="num">{clientCategories.length}</span>
              <span className="lbl">Sectors</span>
            </div>
            <span className="divider" />
            <div className="cyber-cli-stat">
              <span className="num">11+</span>
              <span className="lbl">Years</span>
            </div>
          </div>
        </div>

        {/* Category cards */}
        <div className="cyber-cli-grid">
          {clientCategories.map((cat, i) => (
            <div className="cyber-cli-card" key={i}>
              <div className="cyber-cli-card-head">
                <div className="cyber-cli-icon-wrap">
                  <span className="cyber-cli-icon">
                    <i className={`fa-light ${cat.icon}`} />
                  </span>
                  <span className="cyber-cli-accent">{cat.accent}</span>
                </div>
                <div className="cyber-cli-meta">
                  <h3>{cat.category}</h3>
                  <span>
                    {cat.clients.length}{" "}
                    {cat.clients.length === 1 ? "client" : "clients"}
                  </span>
                </div>
              </div>

              <div className="cyber-cli-list">
                {cat.clients.map((client, j) => (
                  <span className="cyber-cli-chip" key={j}>
                    {client}
                  </span>
                ))}
              </div>

              <span className="cyber-cert-corner cyber-cert-corner-tr" />
              <span className="cyber-cert-corner cyber-cert-corner-bl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
