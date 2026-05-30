import { blogData3 } from "@/data/content";
import { blogsSection } from "@/data/content";
import { Link } from "react-router-dom";

export default function Blogs2({
  parentClass = "blog-and-news-are tmp-section-gap",
  isLight = false,
}) {
  const s = blogsSection;

  if (!blogData3 || blogData3.length === 0) return null;

  return (
    <section className={parentClass} id="blog">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">{s.subtitle}</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            {s.title} <br />
            {s.titleLine2}
          </h2>
        </div>
        <div className="row">
          {blogData3.map((blog) => {
            const href = blog.externalUrl
              ? blog.externalUrl
              : `/blog/${blog.slug}`;
            const isExternal = !!blog.externalUrl;

            return (
              <div key={blog.id} className="col-lg-4 col-md-6 col-12">
                <div
                  className={`blog-card-style-two tmponhover image-box-hover tmp-scroll-trigger tmp-fade-in ${blog.animationOrder}`}
                >
                  <div className="blog-card-img">
                    <div className="img-box">
                      {isExternal ? (
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          <img loading="lazy" className="w-100" alt={blog.altText} src={blog.imageSrc} width={410} height={294} />
                        </a>
                      ) : (
                        <Link to={href}>
                          <img loading="lazy" className="w-100" alt={blog.altText} src={blog.imageSrc} width={410} height={294} />
                        </Link>
                      )}
                    </div>
                    <span>{blog.date}</span>
                  </div>
                  <div className="blog-content-wrap">
                    <div className="blog-tags">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-user" />
                            {blog.author}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-comments" />
                            {blog.comments}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog-title">
                      {isExternal ? (
                        <a href={href} target="_blank" rel="noopener noreferrer">{blog.title}</a>
                      ) : (
                        <Link to={href}>{blog.title}</Link>
                      )}
                    </h3>
                    <div className="read-more-btn">
                      {isExternal ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tmp-btn hover-icon-reverse radius-round btn-border btn-md"
                        >
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">Read More</span>
                            <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                            <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                          </span>
                        </a>
                      ) : (
                        <Link
                          className="tmp-btn hover-icon-reverse radius-round btn-border btn-md"
                          to={href}
                        >
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">Read More</span>
                            <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                            <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right" /></span>
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
