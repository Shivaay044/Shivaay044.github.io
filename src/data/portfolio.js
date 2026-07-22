export const profile = {
  name: "Shivendra Singh",
  role: "Senior MERN Stack Engineer",
  location: "Surat, Gujarat",
  phone: "+91 8303333971",
  email: "imsinghshivendra@gmail.com",
  github: "https://github.com/shivaay044",
  githubUser: "Shivaay044",
  linkedin: "https://www.linkedin.com/in/shivendra-singh044/",
  instagram: "https://www.instagram.com/im_acrobat/",
  resumeView: "/resume/Shivendra_Singh_Resume.pdf",
  resumeDownload: "/resume/Shivendra_Singh_Resume.pdf",
  available: true,
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  status: "Currently building at Geek Web Solution",
  headingLead: "Hi, I'm",
  name: profile.name,
  subheading:
    "I'm a Senior MERN Stack Engineer building scalable, real-time web applications — from casino and marketplace platforms to e-commerce and inventory systems.",
  boldPhrase: "scalable, real-time web applications",
  rotatingRoles: [
    "Senior MERN Stack Engineer",
    "Real-Time Systems Builder",
    "Full Stack Mentor",
    "AI & ML Enthusiast",
  ],
};

export const stats = [
  { value: 3, suffix: "+", caption: "Years of experience" },
  { value: 5, suffix: "", caption: "Roles across companies" },
  { value: 100, suffix: "+", caption: "Students mentored" },
  { value: 300, suffix: "+", caption: "Git commits" },
];

export const about = {
  lead: `I'm ${profile.name}, a Senior MERN Stack Engineer based in Surat, Gujarat, building scalable, real-time web applications across casino, marketplace and e-commerce platforms.`,
  paragraphs: [
    "Over 3+ years I've worked across the full stack — real-time features with Socket.io and WebSocket, third-party game and payment integrations, backend architecture and database design, and an AI-powered mock interview platform for a coding bootcamp I mentored at.",
    "Originally from Gorakhpur, Uttar Pradesh. Outside of code: eSports, travelling, exploring new places, and reading adventure stories.",
  ],
};

export const skillGroups = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Redux", "Bootstrap", "Material UI"],
  },
  {
    label: "Backend & Data",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Strapi"],
  },
  {
    label: "Realtime & Testing",
    skills: ["Socket.io", "WebSocket", "Jest", "Cypress"],
  },
  {
    label: "Soft Skills",
    skills: ["Time Management", "Problem Solving", "Teamwork", "Creativity"],
  },
];

export const projects = [
  {
    title: "Xperiokids.com",
    description:
      "Educational institute site built around hands-on experimentation over theory-based learning, prioritizing practical, science-first content for kids.",
    tech: ["React", "HTML", "JavaScript", "Node.js", "Express", "MongoDB"],
    live: "https://xperiokids.com/",
    code: "https://github.com/Shivaay044/Xperiokids",
    metrics: [
      { value: "Live", caption: "Production client site" },
      { value: "6", caption: "Tech integrations" },
    ],
  },
  {
    title: "Myntra Replica",
    description:
      "Clone of the Myntra e-commerce experience — browsing, product detail, and cart flows across a wide catalog of clothing, footwear and accessories.",
    tech: ["React", "HTML", "JavaScript", "Node.js", "Express", "MongoDB"],
    live: "https://frontend-phi-five-95.vercel.app/",
    code: "https://github.com/Shivaay044/glossy-paper-5488",
    metrics: [
      { value: "Solo", caption: "Built independently" },
      { value: "6", caption: "Tech stack size" },
    ],
  },
  {
    title: "Apple Replica",
    description:
      "Clone of Apple's product marketing site — smartphones, tablets and PCs presented with the same clean, content-first layout.",
    tech: ["React", "HTML", "JavaScript", "Node.js", "Express", "MongoDB"],
    live: "https://bolt-beryl.vercel.app/",
    code: "https://github.com/Shivaay044/teal-fuel-7913",
    metrics: [
      { value: "Solo", caption: "Built independently" },
      { value: "6", caption: "Tech stack size" },
    ],
  },
  {
    title: "Sephora Clone",
    description:
      "E-commerce site for cosmetics with separate admin and user sides, alphabetical product sorting, and JSON-backed product data.",
    tech: ["HTML", "CSS", "JavaScript"],
    metrics: [
      { value: "5", caption: "Team members" },
      { value: "4d", caption: "Build time" },
    ],
  },
  {
    title: "Bass Pro Shop Clone",
    description:
      "E-commerce site for outdoor accessories with multi-filter search and sorting across a wide product range.",
    tech: ["JavaScript", "React", "Chakra UI"],
    metrics: [
      { value: "Solo", caption: "Built independently" },
      { value: "5d", caption: "Build time" },
    ],
  },
  {
    title: "Flappy Bird Game",
    description:
      "Arcade-style browser game — navigate the bird through randomly-placed pipe gaps as it moves persistently to the right.",
    tech: ["React", "HTML", "JavaScript"],
    live: "https://flappy-bird-inky-delta.vercel.app/",
    code: "https://github.com/Shivaay044/Flappy_Bird",
    metrics: [
      { value: "Solo", caption: "Built independently" },
      { value: "3", caption: "Tech stack size" },
    ],
  },
];

export const process = {
  nodes: [
    { label: "Requirements", detail: "Translate business needs into a technical spec" },
    { label: "Data & API", detail: "Model data, wire up REST integrations" },
    { label: "Build UI", detail: "Component-driven React interfaces" },
    { label: "Realtime Layer", detail: "Live features with Socket.io / WebSocket" },
    { label: "Test", detail: "Automated coverage with Jest & Cypress" },
    { label: "Deploy", detail: "Ship to production hosting" },
  ],
  notes: [
    { label: "Real-time systems", detail: "Socket.io / WebSocket for live user interactions and chat" },
    { label: "Third-party integrations", detail: "Game providers and payment systems wired into production" },
    { label: "AI-powered tooling", detail: "Built an AI mock-interview platform for bootcamp students" },
  ],
};

export const timeline = [
  {
    group: "Experience",
    period: "Nov 2025 — Present",
    role: "Senior Software Engineer",
    org: "Geek Web Solution, Surat, Gujarat",
    description:
      "Full-stack work across casino, marketplace and e-commerce platforms — real-time features with Socket.io, third-party game/payment integrations, and a remote desktop management system.",
  },
  {
    period: "Apr 2025 — Nov 2025",
    role: "MERN Stack Developer",
    org: "Geek Web Solution, Surat, Gujarat",
    description:
      "Built and scaled full-stack applications, contributing to backend architecture, API development and database design.",
  },
  {
    period: "Jun 2024 — May 2025",
    role: "Full Stack Developer",
    org: "Diamond Atelier, Surat, Gujarat",
    description:
      "Led a custom inventory management system replacing manual Excel workflows, with gemstone search/filtering, real-time WebSocket chat, and live manufacturing tracking.",
  },
  {
    period: "Dec 2023 — Jun 2024",
    role: "Fullstack Developer / Trainer",
    org: "Red And White Multimedia Education, Navsari, Gujarat",
    description:
      "Mentored 100+ students in full-stack development; built an AI-powered mock interview platform and automated assignment evaluation with Jest and Cypress.",
  },
  {
    period: "Aug 2023 — Nov 2023",
    role: "MERN Stack Developer",
    org: "Applore Technologies, Noida, Uttar Pradesh",
    description: "Full-stack development on the MERN stack.",
  },
  {
    group: "Education",
    period: "— Apr 2023",
    role: "BCA, Computer Science",
    org: "Uttaranchal University",
    description: "Bachelor's degree in Computer Science.",
  },
  {
    period: "Aug 2022 — Apr 2023",
    role: "Full Stack Web Development",
    org: "Masai School, Bengaluru",
    description:
      "Intensive full-stack program covering JavaScript, React, Node.js and MongoDB, with collaborative, deadline-driven project delivery.",
  },
  {
    period: "2020 — 2022",
    role: "Higher Secondary Education, Mathematics",
    org: "Mahatma Gandhi Inter College, Gorakhpur, Uttar Pradesh",
    description: "Higher secondary schooling, mathematics stream.",
  },
];

const languageColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  Markdown: "#928f85",
};

export const repos = [
  {
    name: "ChatBox",
    description: "Chat interface project.",
    language: "TypeScript",
    stars: 0,
  },
  {
    name: "DSA-MASTERY",
    description: "Personal roadmap for mastering Data Structures and Algorithms.",
    language: "Markdown",
    stars: 0,
  },
  {
    name: "toolkit",
    description: "Collection of small dev utilities and scripts.",
    language: "JavaScript",
    stars: 0,
  },
  {
    name: "footscale",
    description: "Created with CodeSandbox.",
    language: "TypeScript",
    stars: 1,
  },
  {
    name: "interview-with-ai",
    description: "Practicing technical interviews with an AI interviewer.",
    language: "JavaScript",
    stars: 1,
  },
].map((repo) => ({
  ...repo,
  languageColor: languageColors[repo.language] || "var(--muted)",
  url: `${profile.github}/${repo.name}`,
}));

// Placeholder — no live blog exists yet; swap these for real posts.
export const posts = [
  {
    date: "2026-03",
    title: "Notes on shipping a MERN e-commerce clone",
    readTime: "6 min",
  },
  {
    date: "2026-01",
    title: "Debugging JSON/API integration gotchas",
    readTime: "4 min",
  },
  {
    date: "2025-11",
    title: "Why I moved off CRA defaults to a custom design system",
    readTime: "5 min",
  },
];

export const contact = {
  headline: "Let's build something.",
  subline: "Always up for interesting projects, collaborations, or a good tech conversation.",
};
