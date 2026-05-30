import { clientsSection, clientCategories } from "@/data/clients";

export default function Clients() {
  const s = clientsSection;
  const totalClients = clientCategories.reduce((sum, c) => sum + c.clients.length, 0);

  return (
    <section className="cyber-clients-area" id="clients">
      <div className="container">
        {/* Header */}
        <div className="cyber-cli-head">
          <div className="cyber-section-eyebrow">
            <span className="dot" />
            <span className="bracket">[</span>
            <span className="label">{s.eyebrowLabel}</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="cyber-cli-title">
            {s.titleMain}<span className="grad">{s.titleHighlight}</span>
          </h2>
          <p className="cyber-cli-lede">{s.lede}</p>

          <div className="cyber-cli-stats">
            <div className="cyber-cli-stat">
              <span className="num">{totalClients}+</span>
              <span className="lbl">{s.statsEngagementsLabel}</span>
            </div>
            <span className="divider" />
            <div className="cyber-cli-stat">
              <span className="num">{clientCategories.length}</span>
              <span className="lbl">{s.statsSectorsLabel}</span>
            </div>
            <span className="divider" />
            <div className="cyber-cli-stat">
              <span className="num">{s.statsYearsValue}</span>
              <span className="lbl">{s.statsYearsLabel}</span>
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
