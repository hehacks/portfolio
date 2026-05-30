import { useParams } from "react-router-dom";
import { blogData3 } from "@/data/content";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Copyright from "@/components/footers/Copyright";
import { siteIdentity, socialLinks } from "@/data/siteConfig";
import MetaComponent from "@/components/common/Metacomponent";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogData3.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <>
        <div style={{ position: "fixed", inset: 0, zIndex: 0, backgroundImage: `url('${siteIdentity.backgroundImage}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", pointerEvents: "none" }} />
        <div style={{ position: "fixed", inset: 0, zIndex: 0, background: "rgba(0,0,0,0.55)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Header2 />
          <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h2 style={{ color: "var(--color-heading)" }}>Blog post not found.</h2>
          </div>
          <Footer2 />
          <Copyright />
        </div>
      </>
    );
  }

  return (
    <>
      <MetaComponent meta={{ title: `${blog.title} | ${siteIdentity.name}`, description: blog.description }} />

      {/* Same fixed background as home page */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, backgroundImage: `url('${siteIdentity.backgroundImage}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", pointerEvents: "none" }} />
      <div style={{ position: "fixed", inset: 0, zIndex: 0, background: "rgba(0,0,0,0.55)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Header2 />

      <main className="blog-detail-page tmp-section-gap" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <div style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(12px)", borderRadius: "20px", padding: "48px 40px", border: "1px solid rgba(255,255,255,0.08)" }}>
              {/* Hero image */}
              <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "40px" }}>
                <img
                  src={blog.imageSrc}
                  alt={blog.altText}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              {/* Meta row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "24px", color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
                <span><i className="fa-regular fa-user" style={{ marginRight: "6px" }} />{blog.author}</span>
                <span><i className="fa-regular fa-calendar" style={{ marginRight: "6px" }} />{blog.date}</span>
                <span><i className="fa-regular fa-folder" style={{ marginRight: "6px" }} />{blog.comments}</span>
              </div>

              {/* Title */}
              <h1 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px", color: "#ffffff" }}>
                {blog.title}
              </h1>

              {/* Description / body */}
              <div style={{ fontSize: "17px", lineHeight: 1.85, color: "rgba(255,255,255,0.85)" }}>
                {blog.body ? (
                  blog.body.map((para: string, i: number) => (
                    <p key={i} style={{ marginBottom: "20px" }}>{para}</p>
                  ))
                ) : (
                  <p>{blog.description}</p>
                )}
              </div>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "40px" }}>
                  {blog.tags.map((tag: string, i: number) => (
                    <span key={i} style={{
                      padding: "5px 14px", borderRadius: "999px",
                      border: "1px solid var(--color-primary)",
                      color: "#fff", fontSize: "13px",
                      background: "rgba(var(--color-primary-rgb, 59,130,246),0.15)",
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Share row */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>Share:</span>
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
                    <i className={s.icon} />
                  </a>
                ))}
              </div>{/* share row */}

            </div>{/* card */}
            </div>{/* col */}
          </div>
        </div>
      </main>

      <Footer2 />
      <Copyright />
      </div>
    </>
  );
}
