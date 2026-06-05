import { lazy, Suspense } from "react";
import MetaComponent from "@/components/common/Metacomponent";
import { pageMetadata, siteIdentity } from "@/data/siteConfig";

// Above-the-fold — loaded eagerly (visible immediately)
import Header1  from "@/components/headers/Header2";
import Hero     from "@/components/homes/home-2/Hero";

// Below-the-fold — lazy loaded (parsed only when needed)
const About       = lazy(() => import("@/components/homes/home-2/About"));
const Experience  = lazy(() => import("@/components/homes/home-2/Experience"));
const Skills      = lazy(() => import("@/components/homes/home-2/Skills"));
const Portofolio  = lazy(() => import("@/components/homes/home-2/Portfolio"));
const Experiences2 = lazy(() => import("@/components/homes/home-2/Expertise"));
const Community   = lazy(() => import("@/components/homes/home-2/Community"));
const Clients     = lazy(() => import("@/components/homes/home-2/Clients"));

const Contact     = lazy(() => import("@/components/homes/home-2/Contact"));
const Blogs       = lazy(() => import("@/components/common/Blogs2"));
const Footer2     = lazy(() => import("@/components/footers/Footer2"));
const Copyright   = lazy(() => import("@/components/footers/Copyright"));

export default function HomePage2() {
  return (
    <>
      <MetaComponent meta={pageMetadata} />

      {/* Full-page background image */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url('${siteIdentity.backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background: "rgba(0, 0, 0, 0.55)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Eager — above the fold */}
        <Header1 />
        <Hero />

        {/* Lazy — below the fold, null fallback keeps layout stable */}
        <Suspense fallback={null}>
          <About />
          <Experience />
          <Skills />
          <Portofolio />
          <Experiences2 />
          <Community />
          <Clients />

          <Contact />
          <Blogs />
          <Footer2 />
          <Copyright />
        </Suspense>
      </div>
    </>
  );
}
