import Skills from "@/components/homes/home-2/Skills";
import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header2";
import About from "@/components/homes/home-2/About";
import Blogs from "@/components/common/Blogs2";
import Contact from "@/components/homes/home-2/Contact";
import Experience from "@/components/homes/home-2/Experience";
import Experiences2 from "@/components/homes/home-2/Expertise";
import Hero from "@/components/homes/home-2/Hero";
import Portofolio from "@/components/homes/home-2/Portfolio";
import Testimonials from "@/components/homes/home-2/Testimonials";
import TextAnim from "@/components/common/TextAnim";
import Community from "@/components/homes/home-2/Community";
import Clients from "@/components/homes/home-2/Clients";
import HackerBackground from "@/components/common/HackerBackground";

import MetaComponent from "@/components/common/Metacomponent";

const metadata = {
  title:
    "Arun S | Principal Security Architect | Cybersecurity Expert",
  description:
    "Arun S - Principal Security Architect at IBM India. 11+ years in cybersecurity, application security, cloud security, and cyber forensics.",
};
export default function HomePage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <HackerBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header1 />
        <Hero />
        <TextAnim />
        <About />
        <Experience />
        <Skills />
        <Portofolio />
        <Experiences2 />
        <Community />
        <Clients />
        <Testimonials />
        <Contact />
        <Blogs />
        <Footer2 />
        <Copyright />
      </div>
    </>
  );
}
