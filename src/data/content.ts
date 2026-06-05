// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║              MASTER CONTENT FILE — EDIT EVERYTHING HERE                    ║
// ║  This is the single source of truth for the entire portfolio site.         ║
// ║  Change any value below and it will instantly reflect on the site.         ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

// ─────────────────────────────────────────────────────────────────────────────
// 1. SITE IDENTITY & CONFIG
// ─────────────────────────────────────────────────────────────────────────────
export const siteIdentity = {
  initials: "AS",
  name: "Arun S",
  tagline: "Principal Security Architect · IBM India",
  description: "Principal Security Architect at IBM India. Cybersecurity leader with 12+ years of experience.",
  location: "India",
  website: "hehacks.com",
  websiteUrl: "https://www.hehacks.com",
  email: "arun@hehacks.com",
  topmateUrl: "https://topmate.io/hehacks",
  topmateLabel: "Book a Session on Topmate",
  backgroundImage: "/assets/images/arun/NETWORK.webp",
};

export const pageMetadata = {
  title: "Arun S | Principal Security Architect | Cybersecurity Expert",
  description: "Arun S - Principal Security Architect at IBM India. 12+ years in cybersecurity, application security, cloud security, and cyber forensics.",
};

export const socialLinks = [
  { icon: "fa-brands fa-linkedin-in", href: "https://www.linkedin.com/in/-aruns/", label: "LinkedIn", value: "linkedin.com/in/-aruns" },
  { icon: "fa-brands fa-github",      href: "https://github.com/hehacks",          label: "GitHub",   value: "github.com/hehacks" },
  { icon: "fa-brands fa-twitter",     href: "https://twitter.com/he_hacks",        label: "Twitter",  value: "@he_hacks" },
  { icon: "fa-brands fa-instagram",   href: "https://www.instagram.com/h3hacks",   label: "Instagram",value: "instagram.com/h3hacks" },
];

export const navLinks = [
  { label: "Home",         href: "#",              icon: "fa-house" },
  { label: "About",        href: "#about",         icon: "fa-user" },
  { label: "Experience",   href: "#resume-section",icon: "fa-briefcase" },
  { label: "Skills",       href: "#expertise",     icon: "fa-shield" },
  { label: "Achievements", href: "#portfolio",     icon: "fa-trophy" },
  { label: "Community",    href: "#community",     icon: "fa-users" },
  { label: "Contact",      href: "#contacts",      icon: "fa-paper-plane" },
];

export const copyrightConfig = {
  ownerName: "Arun S",
  termsLabel: "Terms & Conditions",
  termsHref: "#",
  privacyLabel: "Privacy Policy",
  privacyHref: "#",
  contactLabel: "Contact Us",
};

export const footerConfig = {
  quickLinksTitle: "Quick Link",
  contactTitle: "Contact",
  newsletterTitle: "Get In Touch",
  newsletterPara: "I am available for freelance work. Connect with me on Topmate for consulting engagements.",
  newsletterPlaceholder: "Your e-mail",
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. HERO SECTION
// ─────────────────────────────────────────────────────────────────────────────
export const heroContent = {
  terminalCommand: "whoami",
  greeting: "I am",
  name: "Arun S",
  typedStrings: [
    "Product Security Expert.",
    "Security Architect.",
    "Cyber Strategist.",
    "Cyber Crime Investigator.",
    "National Security Scholar.",
  ],
  bioParts: {
    prefix: "Principal Security Architect at ",
    company: "IBM India",
    middle: " with ",
    years: "12+ years",
    suffix: " across cybersecurity leadership, application security, cloud security and ",
    lastWord: "cyber forensics",
    end: ".",
  },
  chips: [
    { icon: "fa-light fa-shield",           label: "AppSec" },
    { icon: "fa-light fa-cloud",            label: "Cloud Security" },
    { icon: "fa-light fa-magnifying-glass", label: "Forensics" },
    { icon: "fa-light fa-bug",              label: "Threat Modeling" },
  ],
  primaryBtn:   { label: "More About Me",  href: "#about" },
  secondaryBtn: { label: "Book a Session", href: "https://topmate.io/hehacks", icon: "fa-light fa-calendar-check" },
  stats: [
    { num: "12+", label: "Years in Cyber Security" },
    { num: "100+", label: "Clients" },
    { num: "IBM", label: "Principal Security Architect" },
  ],
  socialLabel: "Connect",
  portraitSrc: "/assets/images/arun/ARUN.png",
  portraitAlt: "Arun S — Principal Security Architect",
  floatingCards: [
    { icon: "fa-light fa-lock",           title: "GRC", sub: "Architect",       position: "card-top" },
    { icon: "fa-light fa-fingerprint",    title: "Forensics",  sub: "DFIR Expert",     position: "card-right" },
    { icon: "fa-light fa-shield-keyhole", title: "AppSec",     sub: "Pentesting + Red Teaming",position: "card-bottom" },
  ],
  decorativeTags: ["[ SECURE ]", "<encrypted/>"],
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. ABOUT SECTION
// ─────────────────────────────────────────────────────────────────────────────
export const aboutSection = {
  eyebrowLabel: "ABOUT_ME",
  titleMain: "Cybersecurity ",
  titleHighlight: "Leadership",
  titleEnd: " &",
  titleLine2: "Strategic Consulting",
  lede: "I architect security from code to cloud — leading product security initiatives, mentoring teams, and helping enterprises build resilient, compliance-ready systems.",
  photoSrc: "/assets/images/arun/HERO2.jpg",
  photoAlt: "Arun S — Principal Security Architect",
  badge: { icon: "fa-light fa-shield-keyhole", title: "IBM India", sub: "Principal Security Architect" },
  bio: [
    { parts: [
      { text: "Arun S is a ", bold: false },
      { text: "Principal Security Architect at IBM India", bold: true },
      { text: " with over 12 years of hands-on experience across product security, application security, cloud security, and cyber forensics.", bold: false },
    ]},
    { parts: [
      { text: "He has led security programs for large-scale enterprise products, conducted 100+ security audits. His expertise spans web, mobile, API, cloud-native, and supply chain security.", bold: false },
    ]},
    { parts: [
      { text: "Arun is the ", bold: false },
      { text: "Chapter Lead for null Security Community (Bangalore)", bold: true },
      { text: " and ", bold: false },
      { text: "OWASP Coimbatore", bold: true },
      { text: ", and a frequent speaker at Defcon, Diana Initiative, BSides, and c0c0n.", bold: false },
    ]},
  ],
  meta: [
    { icon: "fa-light fa-location-dot",  text: "Bangalore, India" },
    { icon: "fa-light fa-building",      text: "IBM India" },
    { icon: "fa-light fa-circle-check",  text: "Available for consulting" },
  ],
  focusAreas: [
    { icon: "fa-shield",           title: "Application Security", desc: "Web, API & mobile vulnerability assessment with secure code reviews and SAST/DAST integration." },
    { icon: "fa-cloud",            title: "Cloud & Compliance",   desc: "AWS, Azure, GCP security audits with SOC2, FedRAMP, ISO 27001 expertise." },
    { icon: "fa-bug",              title: "Threat Modeling",      desc: "STRIDE-based architecture reviews, risk scoring and proactive defense strategy design." },
    { icon: "fa-magnifying-glass", title: "DFIR & Forensics",     desc: "Digital forensics, incident response, and cyber crime investigation across enterprises." },
  ],
  interestsLabel: "Areas of Interest",
  interests: [
    "WebApp | Mobile | API Security",
    "Cloud Security (AWS / Azure / GCP)",
    "Cloud Native Security",
    "Software Supply Chain Security",
    "Threat Modeling",
    "OSINT | Forensics",
    "International Speaker",
    "Conferences: Defcon | Diana Initiative | BSides | c0c0n",
    "Communities: Null | OWASP | ISAC",
  ],
  yearsOfExperience: 12,
  yearsLabel: "years of experience",
  designCard: { icon: "fa-sharp fa-thin fa-shield-halved", title: "Product Security", sub: "IBM India" },
  subtitle: "About Me",
  titleAlt: "Cybersecurity Leadership & Strategic Consulting",
  descriptionAlt: "Developing robust cybersecurity strategies and leading security initiatives across enterprise products. Chapter Lead for Null Security Community (Bangalore) and OWASP Coimbatore. Expertise spans e-commerce, healthcare, and banking sectors.",
  cards: [
    { logo: "/assets/images/about/logo-1.svg", title: "Application Security", para: "Identifying and mitigating vulnerabilities in Web, API & Mobile applications with secure code reviews" },
    { logo: "/assets/images/about/logo-2.svg", title: "Cloud & Compliance",   para: "AWS, Azure, GCP security audits with SOC2 and FedRAMP compliance expertise" },
  ],
  readMoreLabel: "Read More About Me",
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. EXPERIENCE & EDUCATION SLIDES
//    Add / remove objects to add / remove slides. Order = display order.
// ─────────────────────────────────────────────────────────────────────────────
export const experienceSection = {
  eyebrowLabel: "CAREER_LOG",
  titleMain: "Journey Through ",
  titleHighlight: "Cybersecurity",
  lede: "A decade-plus of building, breaking and defending — from analyst to principal security architect.",
};

export type ExperienceItem = {
  duration: string; title: string; institute: string;
  location?: string; current?: boolean;
  description?: string;
  logo: string; logoAlt: string; companyLogo?: string; isEducation?: boolean;
};

export const experiences: ExperienceItem[] = [
  { duration: "2024 — Present", title: "Principal Security Architect",   institute: "IBM India Pvt. Ltd.",          location: "Bangalore, IN",      current: true, description: "Leading enterprise-wide product security strategy and architecture across IBM's global portfolio. Driving zero-trust adoption, threat modeling programs, and DevSecOps integration for large-scale cloud-native products.", logo: "/assets/images/experience/1.png", logoAlt: "IBM",      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { duration: "2019 — 2024",    title: "Senior Security Team Lead",       institute: "IBM India Pvt. Ltd.",          location: "Bangalore, IN",                     description: "Led a cross-functional security team delivering application security assessments, cloud & cloud native security (WebApp + API + Mobile App + Network), and SAST/DAST pipeline integration across 200+ IBM Software Group product lines. Mentored junior security engineers and coordinated with global stakeholders.", logo: "/assets/images/experience/2.png", logoAlt: "IBM",      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { duration: "2018 — 2019",    title: "Senior Security Consultant",      institute: "IBM India Pvt. Ltd.",          location: "Bangalore, IN",                     description: "Conducted in-depth security assessments for IBM enterprise clients across banking, healthcare, and SaaS sectors. Specialized in API security, cloud configuration reviews, and compliance gap analysis for SOC2 and FedRAMP frameworks.", logo: "/assets/images/experience/3.png", logoAlt: "IBM",      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { duration: "2016 — 2017",    title: "Information Security Consultant", institute: "IBM India Pvt. Ltd.",          location: "Bangalore, IN",                     description: "Delivered web application and network security assessments for IBM's managed security services clients. Identified and disclosed critical vulnerabilities, authored detailed remediation reports, and supported client security awareness programs.", logo: "/assets/images/experience/4.png", logoAlt: "IBM",      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { duration: "2014 — 2016",    title: "Cyber Security Analyst",          institute: "Capgemini India Pvt. Ltd.",    location: "Chennai, IN",                       description: "Performed vulnerability assessments and penetration testing for enterprise clients in the BFSI and telecom sectors. Worked on SIEM monitoring, incident response, and security hardening of Windows and Linux environments.", logo: "/assets/images/experience/5.png", logoAlt: "Capgemini",companyLogo: "/Capgemini.svg" },
  { duration: "2014",           title: "Security Researcher",             institute: "Independent",                                                                 description: "Independent security research focused on web application vulnerabilities. Independent bug bounty hunter, earning recognition from major technology vendors.", logo: "/assets/images/experience/6.png", logoAlt: "Independent" },
  // ── Education ──
  { duration: "2024",           title: "MBA — Master of Business Administration", institute: "Deakin Business School",       location: "Melbourne, Australia", isEducation: true, description: "Global MBA with a focus on strategic management, technology leadership, and international business. Strengthened executive communication, organizational strategy, and cross-cultural leadership skills.", logo: "/assets/images/experience/9.png", logoAlt: "Deakin Business School",       companyLogo: "/deakin-university_.png" },
  { duration: "2022",           title: "PG in Project Management",               institute: "IMT Ghaziabad",                location: "Delhi, IN",            isEducation: true, description: "Postgraduate program covering project planning, risk management, agile methodologies, and stakeholder management. Applied learnings to security program delivery and cross-team coordination at IBM.", logo: "/assets/images/experience/8.png", logoAlt: "IMT Ghaziabad",                companyLogo: "/IMT-Logo-Web.png" },
  { duration: "2014",           title: "B.Tech — Information Technology",        institute: "KGISL Institute of Technology",location: "Coimbatore, IN",       isEducation: true, description: "Bachelor's degree in Information Technology with a strong foundation in networking, operating systems, software engineering, and database management. Graduated with distinction and active participation in technical events.", logo: "/assets/images/experience/7.png", logoAlt: "KGISL Institute of Technology",companyLogo: "/KGiSL-EDU-logo-01.webp" },
];

// ─────────────────────────────────────────────────────────────────────────────
// 5. CERTIFICATIONS
//    Change certificateCount to add/remove certs (images: /assets/images/CERTIFICATES/1.png …)
// ─────────────────────────────────────────────────────────────────────────────
export const certificationsSection = {
  eyebrowLabel: "CERTIFICATIONS",
  titleMain: "Verified ",
  titleHighlight: "Expertise",
  lede: "Industry-recognized certifications validating technical proficiency and security knowledge.",
  subtitle: "Certifications",
  titleAlt: "Certifications & Professional Credentials",
  descriptionAlt: "Industry-recognized certifications validating expertise in security auditing, penetration testing, cloud security, and enterprise security management.",
};

export const certificateCount = 28; // ← change this number to show more/fewer certificates

export const certifications = Array.from({ length: certificateCount }, (_, i) => ({
  id: i + 1,
  img: `/assets/images/CERTIFICATES/${i + 1}.png`,
  alt: `Certificate ${i + 1}`,
}));

// ─────────────────────────────────────────────────────────────────────────────
// 6. SKILLS
// ─────────────────────────────────────────────────────────────────────────────
export const skillsSection = {
  eyebrowLabel: "SKILL_MATRIX",
  titleMain: "Capabilities ",
  titleHighlight: "Across the Stack",
  lede: "From architecture to investigation — a tool-agnostic, principles-first approach honed across enterprise engagements.",
  toolboxLabel: "Toolbox & Stack",
};

export const skillGroups = [
  {
    title: "Product Security & Core",
    icon: "fa-shield",
    caption: "Engineering-grade security across the SDLC",
    skills: ["Application & Cloud Security","Mobile & Network Security","AI & Supply Chain Security","Threat Modeling","Red Teaming","Secure Code Review","DevSecOps","API Security"],
  },
  {
    title: "Strategic Security Operations",
    icon: "fa-crosshairs",
    caption: "Offensive & investigative depth at scale",
    skills: ["Open-Source Intelligence (OSINT)","Offensive Operations","Cyber Law","DFIR","OT & Healthcare Security","Incident Response","Risk & Compliance","Zero Trust Architecture"],
  },
];

export const techStack = [
  { label: "AWS",       icon: "fa-brands fa-aws" },
  { label: "Azure",     icon: "fa-brands fa-microsoft" },
  { label: "GCP",       icon: "fa-brands fa-google" },
  { label: "Kubernetes",icon: "fa-light fa-cubes" },
  { label: "Docker",    icon: "fa-brands fa-docker" },
  { label: "Linux",     icon: "fa-brands fa-linux" },
  { label: "Python",    icon: "fa-brands fa-python" },
  { label: "Burp Suite",icon: "fa-light fa-bug" },
  { label: "Nmap",      icon: "fa-light fa-network-wired" },
  { label: "Wireshark", icon: "fa-light fa-magnifying-glass" },
  { label: "Splunk",    icon: "fa-light fa-chart-line" },
  { label: "Git",       icon: "fa-brands fa-git-alt" },
];

// ─────────────────────────────────────────────────────────────────────────────
// 7. EXPERTISE CARDS
// ─────────────────────────────────────────────────────────────────────────────
export const expertiseSection = {
  eyebrowLabel: "EXPERTISE_MATRIX",
  titleMain: "Core Security Expertise &",
  titleHighlight: "Specializations",
  lede: "Comprehensive security delivery across application, cloud, infrastructure, and IoT domains with proven results at enterprise scale.",
};

export const expertiseItems = [
  { icon: "fa-shield",           code: "01", title: "Cybersecurity Leadership & Consulting", description: "Robust cybersecurity strategy and program leadership across enterprise products and organizations.",                                                    pillars: ["Strategy","Governance","Program Mgmt"] },
  { icon: "fa-bug",              code: "02", title: "Application Security",                  description: "Mitigating vulnerabilities in Web, API & Mobile applications with secure code reviews and SDLC integration.",                                          pillars: ["Web","API","Mobile","SAST/DAST"] },
  { icon: "fa-network-wired",    code: "03", title: "Infrastructure & Network Security",     description: "Security assessments for networks, firewalls, and servers — safeguarding critical enterprise environments.",                                           pillars: ["Network","Firewall","Servers"] },
  { icon: "fa-cloud",            code: "04", title: "Cloud Security & Compliance",           description: "AWS, Azure, GCP, Docker & Kubernetes security audits with SOC2 and FedRAMP compliance expertise.",                                                     pillars: ["AWS","Azure","GCP","K8s"] },
  { icon: "fa-microchip",        code: "05", title: "IoT & Firmware Security",               description: "IoT ecosystem testing and firmware audits — led device testing for Pelco, Axis, Bosch, Sony and more.",                                               pillars: ["IoT","Firmware","Hardware"] },
  { icon: "fa-magnifying-glass", code: "06", title: "Cyber Forensics & Investigations",      description: "OSINT, forensic analysis, digital evidence collection. Cyber crime investigation and incident response.",                                              pillars: ["DFIR","OSINT","IR"] },
];

// ─────────────────────────────────────────────────────────────────────────────
// 8. ACHIEVEMENTS / PORTFOLIO
//    Add a new object here → new card appears on the Achievements grid.
//    categories controls which filter tab it appears under.
//    Valid categories: "Awards" | "Security" | "Speaking" | "Leadership" | "Research" | "Education"
// ─────────────────────────────────────────────────────────────────────────────
export const portfolioSection = {
  eyebrowLabel: "RECOGNITION_LOG",
  titleMain: "Key Achievements & ",
  titleHighlight: "Recognition",
  lede: "Awards, speaking engagements, and recognition from industry leaders for contributions to cybersecurity research and practice.",
  subtitle: "Achievements",
  titleAlt: "Key Achievements & Recognition",
  descriptionAlt: "Awards, speaking engagements, and recognition from industry leaders for contributions to cybersecurity research and practice.",
  categories: ["All","Awards","Security","Speaking","Leadership","Research","Education"],
};

export const portfolioItems = [
  { id: 1, animationOrder: 1, imageSrc: "/assets/images/arun/portfolio-01.webp", width: 600, height: 400, title: "Awarded Best Performer at IBM Security Annual Excellence Awards",                                                                                  tags: ["IBM","Security"],              categories: ["Awards","Security","Leadership"],  slug: "ibm-excellence-award" },
  { id: 2, animationOrder: 2, imageSrc: "/assets/images/arun/portfolio-02.webp", width: 600, height: 400, title: "Global MBA from Deakin Business School, Melbourne, Australia",                                                                                    tags: ["MBA","Melbourne"],             categories: ["Education","Leadership"],          slug: "global-mba-deakin" },
  { id: 3, animationOrder: 3, imageSrc: "/assets/images/arun/portfolio-03.webp", width: 600, height: 400, title: "Speaker: Purple Teaming with MITRE – Ransomware Adversary Simulation",                                                                            tags: ["Defcon","MITRE","Purple Teaming"], categories: ["Speaking","Security","Research"],slug: "defcon-adversary-village-talk" },
  { id: 4, animationOrder: 4, imageSrc: "/assets/images/arun/portfolio-04.webp", width: 600, height: 400, title: "National Cyber Security Scholar Program organized by the ISAC with CERT-In & Karnataka Digital Economy Mission (KDEM)",                           tags: ["CERT-In","KDEM","ISAC"],       categories: ["Awards","Research","Leadership"],  slug: "national-cyber-security-scholar" },
  { id: 5, animationOrder: 5, imageSrc: "/assets/images/arun/portfolio-05.webp", width: 600, height: 400, title: "Honored at the School of Innovation, KGiSL Institute of Technology (KiTE)",                                                                      tags: ["KGiSL","KiTE","Innovation"],   categories: ["Awards","Education"],              slug: "kite-school-of-innovation-launch" },
  { id: 6, animationOrder: 6, imageSrc: "/assets/images/arun/portfolio-06.webp", width: 600, height: 400, title: "Delivered a talk on 'IoT Security - Myth vs Reality' at the Computer Society of India",                                                          tags: ["IoT","CSI","Speaking"],        categories: ["Speaking","Security","Research"],  slug: "iot-security-myth-vs-reality-csi" },
];

// ─────────────────────────────────────────────────────────────────────────────
// 9. COMMUNITY & SPEAKING
// ─────────────────────────────────────────────────────────────────────────────
export const communitySection = {
  eyebrowLabel: "COMMUNITY_NODES",
  titleMain: "Community ",
  titleHighlight: "Leadership",
  titleEnd: " & Speaking",
  lede: "Building and contributing to security communities across India and globally — through chapter leadership, moderation, and conference speaking.",
  speakingBlockTitle: "Conference Speaking & Training",
  speakingBlockSub: "Invited speaker and trainer at leading global security conferences.",
};

export const communityRoles = [
  // ── Active ──
  { title: "Chapter Lead — BSides Coimbatore",       location: "Coimbatore",            description: "Leading the BSides Coimbatore chapter — organizing security conferences, workshops, and community-driven knowledge-sharing events for security professionals.", icon: "fa-code",           status: "ACTIVE" },
  { title: "Chapter Lead — Null Coimbatore",         location: "Coimbatore",            description: "Leading the Null Coimbatore chapter — driving application security awareness, meetups, and community engagement across the region.",                          icon: "fa-shield",         status: "ACTIVE" },
  { title: "Member — ISAC",                          location: "India",                 description: "Active member of the Information Sharing and Analysis Center, contributing to threat intelligence sharing and national cyber security initiatives.",            icon: "fa-network-wired",  status: "ACTIVE" },
  { title: "Member — ISACA",                         location: "Global",                description: "Member of ISACA, engaging with the global community of IT audit, risk, and security professionals. Holder of CISM and CISA certifications.",                  icon: "fa-id-badge",       status: "ACTIVE" },
  // ── Past ──
  { title: "Chapter Lead — BSides Bangalore",        location: "Bangalore",             description: "Led the BSides Bangalore chapter — organized security conferences and community events for security professionals across the city.",                           icon: "fa-code",           status: "PAST" },
  { title: "Chapter Lead — Null | OWASP Bangalore",  location: "Bangalore",             description: "Led the Null Security Community chapter in Bangalore — organized meetups, workshops, and knowledge-sharing sessions for security professionals.",              icon: "fa-users",          status: "PAST" },
  { title: "Chapter Lead — OWASP Coimbatore",        location: "Coimbatore",            description: "Co-led the OWASP Coimbatore chapter — drove application security awareness and community engagement in the region.",                                          icon: "fa-shield",         status: "PAST" },
  { title: "Active Contributor & Moderator",         location: "BSides · null · OWASP", description: "Active contributor, moderator, and member across BSides, null, and OWASP communities. Frequent speaker and trainer at major security conferences.",           icon: "fa-microphone",     status: "PAST" },
];

export const speakingEvents = [
  { event: "Diana Initiative",        location: "Las Vegas, USA",           icon: "fa-star",             type: "KEYNOTE" },
  { event: "Defcon Adversary Village",location: "c0c0n · Defcon",           icon: "fa-skull-crossbones", type: "TALK" },
  { event: "BSides Kerala",           location: "Kerala, India",            icon: "fa-code",             type: "SPEAKER" },
  { event: "BSides Delhi",            location: "Delhi, India",             icon: "fa-code",             type: "SPEAKER" },
  { event: "CSI",                     location: "Computer Society of India",icon: "fa-building-columns", type: "TRAINER" },
  { event: "AICTE ATAL",              location: "India",                    icon: "fa-chalkboard-user",  type: "TRAINING" },
];

// ─────────────────────────────────────────────────────────────────────────────
// 10. CLIENTS
//     Add a client name to any array → it appears in that category card.
//     Add a new object to clientCategories → new category card appears.
// ─────────────────────────────────────────────────────────────────────────────
export const clientsSection = {
  eyebrowLabel: "CLIENT_REGISTRY",
  titleMain: "Trusted by ",
  titleHighlight: "Industry Leaders",
  lede: "Security consulting and assessments delivered across banking, healthcare, product, and enterprise technology sectors.",
  statsYearsLabel: "Years",
  statsYearsValue: "12+",
  statsSectorsLabel: "Sectors",
  statsEngagementsLabel: "Engagements",
};

export const clientCategories = [
  { category: "Banking & Finance", icon: "fa-building-columns", accent: "BFSI", clients: ["Adyen","Freetrade","Credit Karma","TradeWeb Markets LLC","Solaris Bank","PointsBet","Arvest Bank Inc.","Easy Financial Services Inc.","Maza Financial","BFS Capital","Insurity Inc.","Lumatax"] },
  { category: "Healthcare",        icon: "fa-heart-pulse",      accent: "HLS",  clients: ["10xGenomics","Carium","Vida Health Inc.","Virgin Pulse","Carrot","Stork Club","Invitae","Progyny","EveryLife Technologies"] },
  { category: "Product Security",  icon: "fa-shield",           accent: "PRD",  clients: ["DialPad","Vonage","SecureAuth","Pendo.io","Legion Technologies","Builder.ai","Garden.io","ezCater","Nutanix","Sixt RIDE","Rhumbix","VivaStream"] },
  { category: "Social & Media",    icon: "fa-users",            accent: "SOC",  clients: ["Business Insider","Stova","lovoo","HubSpot","Curalate","Community.com","Pollen","On24"] },
  { category: "Research & Data",   icon: "fa-flask",            accent: "RND",  clients: ["CBRE","BenchPrep","Tactic","Medallia Inc.","Preqin","PayScale","Cengage"] },
  { category: "FMCG & Enterprise", icon: "fa-boxes-stacked",    accent: "ENT",  clients: ["Spectrum Brands","MuleSoft"] },
];

// ─────────────────────────────────────────────────────────────────────────────
// 11. TESTIMONIALS
//     Add an object here → new testimonial appears in the carousel.
// ─────────────────────────────────────────────────────────────────────────────
export const testimonialsSection = {
  eyebrowLabel: "PEER_REVIEW",
  titleMain: "What Colleagues & ",
  titleHighlight: "Clients Say",
  lede: "Feedback from security leaders, architects, and development managers across IBM and enterprise clients.",
};

export const testimonials2 = [
  { name: "Steven Riley",          role: "Global Security Technology Leader, IBM · June 2024",    image: "/assets/images/testimonial/client-img-1.jpg", text: "Arun delivered well-structured engagements with high-standard reporting. His expertise in security testing for IBM Corporate Security devices was exceptional and consistently exceeded expectations.", stars: 5 },
  { name: "Gayathri Sureshkumar", role: "Senior Software Dev Manager, IBM · May 2020",            image: "/assets/images/testimonial/client-img-1.jpg", text: "Arun's leadership and efficient guidance on the Alert Notification Mobile project was outstanding. He brings clarity and direction to every engagement he leads.", stars: 5 },
  { name: "Stephen Kawaguchi",    role: "Senior UI Architect, IBM · Jan 2021",                    image: "/assets/images/testimonial/client-img-1.jpg", text: "Arun's cross-team collaboration and innovative security solutions for Cognos Analytics were instrumental in strengthening our product security posture across the board.", stars: 5 },
  { name: "Gaurav Sharma",        role: "Vice President, IBM · Jan 2018",                         image: "/assets/images/testimonial/client-img-1.jpg", text: "Arun delivered an exceptional Engineering Insights demo for a high-profile Arvind Krishna meeting. His ability to communicate complex security concepts clearly is remarkable.", stars: 5 },
  { name: "Robert Thoss",         role: "Software Dev & Architecture, IBM · June 2020",           image: "/assets/images/testimonial/client-img-1.jpg", text: "Arun resolved a critical iOS security issue and delivered a timely final report for IoT – Maximo Worker Insights. His responsiveness and thoroughness are commendable.", stars: 5 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 12. CONTACT SECTION
// ─────────────────────────────────────────────────────────────────────────────
export const contactSection = {
  eyebrowLabel: "INITIATE_CONTACT",
  titleMain: "Let's ",
  titleHighlight: "Connect",
  lede: "Available for freelance security consulting and 1:1 advisory sessions. Reach out via the form or any channel below.",
  cta: {
    icon: "fa-light fa-calendar-check",
    title: "Book a 1:1 Session",
    description: "Security consulting, career guidance, or code review",
    buttonLabel: "Topmate",
    href: "https://topmate.io/hehacks",
  },
  findMeLabel: "Find me on",
  formPrompt: "send_message",
  fields: {
    name:    { label: "Name",    placeholder: "Your full name" },
    email:   { label: "Email",   placeholder: "your@email.com" },
    phone:   { label: "Phone",   placeholder: "+91 ..." },
    subject: { label: "Subject", placeholder: "Security consulting / Advisory" },
    message: { label: "Message", placeholder: "Describe your project or question..." },
  },
  submitLabel: "Send Message",
  sendingLabel: "Sending...",

  // Google reCAPTCHA v2 site key
  // Test key (always passes): 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
  // Replace with your real site key from https://www.google.com/recaptcha/admin
  recaptchaSiteKey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
};

// ─────────────────────────────────────────────────────────────────────────────
// 13. BLOG SECTION HEADER
// ─────────────────────────────────────────────────────────────────────────────
export const blogsSection = {
  subtitle: "Latest Blog",
  title: "Insights & Knowledge Sharing",
  titleLine2: "from the Field",
};

// ─────────────────────────────────────────────────────────────────────────────
// 14. TESTIMONIALS (all variants — used by other home pages too)
// ─────────────────────────────────────────────────────────────────────────────
export const testimonials = [
  { id: 1, quote: "Arun delivered well-structured engagements with high-standard reporting. His expertise in security testing for corporate security devices was exceptional.",                                                                                    name: "Steven Riley",          role: "Global Security Technology Leader, IBM · June 2024",    bgImage: "/assets/images/testimonial/bg-image-1png.png", width: 630, height: 720, animationClass: "animation-order-1" },
  { id: 2, quote: "Arun's leadership and efficient guidance on the Alert Notification Mobile project was outstanding. He consistently delivered beyond expectations.",                                                                                           name: "Gayathri Sureshkumar", role: "Senior Software Development Manager, IBM · May 2020",   bgImage: "/assets/images/testimonial/bg-image-2.png",    width: 444, height: 484, animationClass: "animation-order-2" },
  { id: 3, quote: "Arun's cross-team collaboration and innovative security solutions for Cognos Analytics were instrumental in strengthening our product security posture.",                                                                                    name: "Stephen Kawaguchi",    role: "Senior UI Architect, IBM · Jan 2021",                   bgImage: "/assets/images/testimonial/bg-image-1png.png", width: 630, height: 720, animationClass: "animation-order-3" },
  { id: 4, quote: "Arun delivered an exceptional Engineering Insights demo for a high-profile Arvind Krishna meeting. His ability to communicate complex security concepts clearly is remarkable.",                                                              name: "Gaurav Sharma",        role: "Vice President, IBM · Jan 2018",                        bgImage: "/assets/images/testimonial/bg-image-2.png",    width: 444, height: 484, animationClass: "animation-order-1" },
  { id: 5, quote: "Arun resolved a critical iOS security issue and delivered a timely final report for IoT – Maximo Worker Insights. His responsiveness and thoroughness are commendable.",                                                                     name: "Robert Thoss",         role: "Software Dev & Architecture Security Focal, IBM · June 2020", bgImage: "/assets/images/testimonial/bg-image-1png.png", width: 630, height: 720, animationClass: "animation-order-2" },
];

export const testimonials3 = [
  { name: "Steven Riley",          role: "Global Security Technology Leader, IBM", text: "Arun delivered well-structured engagements with high-standard reporting. His expertise in security testing for IBM Corporate Security devices was exceptional.",                                animationOrder: "1" },
  { name: "Gayathri Sureshkumar", role: "Senior Software Dev Manager, IBM",        text: "Arun's leadership and efficient guidance on the Alert Notification Mobile project was outstanding. He brings clarity and direction to every engagement.",                                      animationOrder: "2" },
  { name: "Stephen Kawaguchi",    role: "Senior UI Architect, IBM",                text: "Arun's cross-team collaboration and innovative security solutions for Cognos Analytics were instrumental in strengthening our product security posture.",                                       animationOrder: "1" },
  { name: "Gaurav Sharma",        role: "Vice President, IBM",                     text: "Arun delivered an exceptional Engineering Insights demo for a high-profile leadership meeting. His communication of complex security concepts is remarkable.",                                  animationOrder: "2" },
];

// ─────────────────────────────────────────────────────────────────────────────
// 15. BLOG POSTS
//     Set externalUrl to the full URL of the article (Medium, LinkedIn, etc.)
//     Leave externalUrl as "" to disable the link.
//     The Read More button opens externalUrl in a new tab.
// ─────────────────────────────────────────────────────────────────────────────
export const blogData3 = [];
