import type {
  ContactLink,
  ExperienceEntry,
  LanguageEntry,
  ProjectEntry,
  SkillEntry,
  StatEntry,
} from "../types";

export const NAV_LINKS = [
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export const STACK_TAGS = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Ant Design",
  "TanStack Query",
];

export const STATS: StatEntry[] = [
  { label: "years of experience", value: "5+", color: "purple" },
  { label: "completed projects", value: "10+", color: "green" },
  { label: "working languages (uz / en / ru)", value: "3", color: "blue" },
  { label: "currently learning", value: "AngularJS", color: "amber" },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "#005",
    role: "Frontend Developer",
    company: "Asia Alliance Bank",
    description:
      "Own frontend architecture for new projects and mentor incoming engineers, guiding them from onboarding to production contributions.",
    period: "Oct 2024 — Present",
    status: "active",
  },
  {
    id: "#004",
    role: "Frontend Developer",
    company: "\u201CSingle Integrator \u2013 UZINFOCOM\u201D LLC",
    description:
      "Modernized existing projects with new technologies and re-architected a legacy system for clarity, extensibility, and maintainability.",
    period: "Sep 2023 — Oct 2024",
    status: "completed",
  },
  {
    id: "#003",
    role: "Frontend Developer",
    company: "\u201CNAPA AUTOMOTIVE\u201D LLC",
    description:
      "Reviewed junior developers\u2019 code and built a diaspora platform and a two-sided job marketplace with React, Redux Toolkit, and i18next.",
    period: "Dec 2022 — Sep 2023",
    status: "completed",
  },
  {
    id: "#002",
    role: "Fullstack Developer",
    company: "CyberAREA XK",
    description:
      "Designed and shipped a corporate website for a mining company using HTML, CSS, JavaScript, jQuery, Ajax, PHP, and MySQL.",
    period: "Feb 2022 — May 2022",
    status: "completed",
  },
  {
    id: "#001",
    role: "Frontend Developer & Mentor",
    company: "ITEG IT Academy",
    description:
      "Taught students web development fundamentals: HTML, CSS, JavaScript, and jQuery.",
    period: "Aug 2021 — Feb 2022",
    status: "completed",
  },
];

export const PROJECTS: ProjectEntry[] = [
  {
    name: "Imperial Autoshipping",
    status: "personal project",
    description:
      "Car shipping service website with a quote calculator and contact form.",
    stack: ["React", "TypeScript", "REST API"],
    accent: "purple",
  },
  {
    name: "Muxlisa AI",
    status: "work project",
    description:
      "Speech-to-text and text-to-speech AI system offering real-time transcription, high-quality neural voices, language detection, punctuation restoration, and streaming APIs. Supports Uzbek and English with customization options for voice, speed, and format for integration into web and mobile apps.",
    stack: ["Next.js", "TypeScript"],
    accent: "green",
  },
  {
    name: "Credits Management System",
    status: "work project",
    description:
      "A system for managing credits with three verification steps: soft, hard, and legal checks. Includes dashboard, data visualization, and full CRUD operations.",
    stack: ["React", "TypeScript"],
    accent: "green",
  },
  {
    name: "Autopay System",
    status: "work project",
    description:
      "Payment limit management page, with live clock and currency conversion logic.",
    stack: ["React", "TypeScript"],
    accent: "green",
  },
];

export const SKILLS: SkillEntry[] = [
  { name: "JavaScript", percent: 90 },
  { name: "TypeScript", percent: 85 },
  { name: "ReactJS", percent: 95 },
  { name: "NextJS", percent: 90 },
  { name: "Redux Toolkit", percent: 85 },
  { name: "TanStack Query", percent: 88 },
  { name: "AngularJS", percent: 55 },
];

export const LANGUAGES: LanguageEntry[] = [
  { name: "Uzbek", level: "native" },
  { name: "English", level: "fluent" },
  { name: "Russian", level: "intermediate" },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "email",
    value: "khushnudeshtemirov@gmail.com",
    href: "mailto:khushnudeshtemirov@gmail.com",
  },
  {
    label: "telegram",
    value: "@khushnud_eshtemirov",
    href: "https://t.me/khushnud_eshtemirov",
  },
  {
    label: "github",
    value: "github.com/KhushnudEshtemirov",
    href: "https://github.com/KhushnudEshtemirov",
  },
];
