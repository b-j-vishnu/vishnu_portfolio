// EDIT EVERYTHING HERE. Placeholders are clearly marked [PLACEHOLDER].
export const profile = {
  name: "Vishnu",
  email: "vishnuj342019@gmail.com",
  github: "https://github.com/b-j-vishnu",
  linkedin: "https://www.linkedin.com/in/vishnuj2019",
  whatsapp: "https://wa.me/917548890905",
  resume: "/resume_vishnu_dev.pdf",
  available: true,
};
export const stats = [
  { label: "Years of Experience", value: "2+" },
  // { label: "Projects Completed", value: "0" },
  { label: "Technologies Used", value: "20+" },
  // { label: "Certifications", value: "0" },
]; // editable
export const skills: Record<string, string[]> = {
  Frontend: [
    "Next.js",
    "React.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],
  "UI & Libraries": [
    "shadcn/ui",
    "Ant Design",
    "Framer Motion",
    "Redux Toolkit",
    "React Hook Form",
    "Zod",
  ],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  "Additional Knowledge": [
    "REST API Integration",
    "Responsive Web Design",
    "Authentication",
    "State Management",
    "Performance Optimization",
  ],
};
export const services = [
  {
    icon: "Globe",
    title: "Website Development",
    desc: "Modern, responsive business and personal websites with SEO-friendly frontend implementation.",
  },
  {
    icon: "Rocket",
    title: "Next.js Development",
    desc: "Next.js apps with server-side rendering, routing, and optimized, scalable architecture.",
  },
  {
    icon: "Layers",
    title: "UI Development",
    desc: "Pixel-perfect, responsive layouts built with modern component-based architecture.",
  },
  {
    icon: "Paintbrush",
    title: "Website Redesign",
    desc: "Modernize existing websites, improve UX, and enhance responsive layouts.",
  },
  {
    icon: "LayoutDashboard",
    title: "Dashboard Development",
    desc: "Admin dashboards, data visualization interfaces, tables, forms, and interactive components.",
  },
  {
    icon: "Plug",
    title: "API Integration",
    desc: "REST API integration, authentication flows, and frontend–backend communication.",
  },
];
export type Project = {
  name: string;
  desc: string;
  cat: "Web Applications" | "Dashboards" | "UI Projects" | "Personal Projects";
  tech: string[];
  features: string[];
  live: string;
  github: string;
};
export const projects: Project[] = [
  {
    name: "[PLACEHOLDER] Project One",
    desc: "Replace with your project description.",
    cat: "Web Applications",
    tech: ["Next.js", "TypeScript"],
    features: ["Feature placeholder"],
    live: "#",
    github: "#",
  },
  {
    name: "[PLACEHOLDER] Project Two",
    desc: "Replace with your project description.",
    cat: "Dashboards",
    tech: ["React", "Tailwind CSS"],
    features: ["Feature placeholder"],
    live: "#",
    github: "#",
  },
  {
    name: "[PLACEHOLDER] Project Three",
    desc: "Replace with your project description.",
    cat: "UI Projects",
    tech: ["Framer Motion"],
    features: ["Feature placeholder"],
    live: "#",
    github: "#",
  },
];
export const experience = [
  {
    company: "Wizinoa",
    title: "MERN stack devloper",
    period: "Oct 15 2024 – Nov 30 2025",
    type: "Full Time",
    points: [
      "Developed responsive and dynamic web applications using MongoDB, Express.js, React.js, and Node.js (MERN stack).",
      "Implemented RESTful APIs and integrated third-party services for enhanced functionality.",
    ],
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    company: "CleverBrain",
    title: "Next.js Frontend Developer",
    period: "Dec 17 2025 – Present",
    type: "Full Time",
    points: [
      "Developed responsive and dynamic web applications using Next.js and React.",
      "Collaborated with backend developers to integrate RESTful APIs and optimize frontend performance.",
    ],
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
  },
];
export const education = [
  {
    title: "Bsc computer science",
    place: "Sourashtra college, Vilachery, Madurai",
    year: "2024",
  },
];
export const process = [
  ["Discovery", "Understand project requirements."],
  ["Planning", "Define scope and technical approach."],
  ["Design & Development", "Build responsive and modern interfaces."],
  ["Testing", "Check responsiveness, functionality, and performance."],
//   ["Delivery", "Deploy and hand over the completed project."],
];
export const testimonials: { name: string; role: string; text: string }[] = []; // empty = section hidden
export const core = {
  role: "Frontend Developer | Next.js Developer | UI Developer",
  intro:
    "I'm a frontend developer passionate about building modern, responsive, and scalable web applications with Next.js and React.",
  skills: [
    "Next.js",
    "React.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Redux Toolkit",
    "React Hook Form",
    "Zod",
    "Ant Design",
    "shadcn/ui",
    "REST API Integration",
    "Git and GitHub",
  ],
  services: [
    [
      "Next.js Website Development",
      "Fast, SEO-friendly sites on the App Router.",
    ],
    ["Responsive UI Development", "Pixel-accurate interfaces on every screen."],
    ["Business Landing Page Development", "Clear, conversion-focused pages."],
    ["Dashboard Development", "Tables, forms, charts and admin tools."],
    ["Website Redesign", "Modernize layout, UX and performance."],
    ["API Integration", "REST APIs, auth flows and state."],
  ],
};
