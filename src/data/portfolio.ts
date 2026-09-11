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
  { label: "years of experience", value: "3+", color: "purple" },
  { label: "completed projects", value: "6", color: "green" },
  { label: "working languages (uz / ru)", value: "2", color: "blue" },
  { label: "currently learning", value: "∞", color: "amber" },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "#003",
    role: "Frontend Developer",
    company: "Bank (AAB)",
    description:
      "Acquiring admin panel: merchant and terminal management, transaction monitoring",
    period: "2024 — present",
    status: "active",
  },
  {
    id: "#002",
    role: "Frontend Developer",
    company: "",
    description: "Internal web applications and admin panel components",
    period: "2022 — 2024",
    status: "completed",
  },
  {
    id: "#001",
    role: "Junior Frontend Developer",
    company: "",
    description:
      "First projects with React, getting familiar with UI components",
    period: "2021 — 2022",
    status: "completed",
  },
];

export const PROJECTS: ProjectEntry[] = [
  {
    name: "AudioLibrary",
    status: "personal project",
    description:
      "An audiobook platform in Uzbek. Audio player, categories, author profiles, and catalog pages.",
    stack: ["React", "TypeScript", "HTML5 Audio API"],
    accent: "purple",
  },
  {
    name: "Acquiring Admin Panel",
    status: "work project",
    description:
      "Admin panel for payment terminals: managing merchants, terminals, and transactions.",
    stack: ["React", "TanStack Query", "Spring Boot"],
    accent: "blue",
  },
  {
    name: "Autopay Webview",
    status: "work project",
    description:
      "Payment limit management page, with live clock and currency conversion logic.",
    stack: ["React", "TypeScript"],
    accent: "green",
  },
  {
    name: "Loan Sync Dashboard",
    status: "work project",
    description:
      "Monitoring panel for loan synchronization processes: metrics and status cards.",
    stack: ["React", "lucide-react"],
    accent: "amber",
  },
];

export const SKILLS: SkillEntry[] = [
  { name: "React", percent: 95 },
  { name: "TypeScript", percent: 90 },
  { name: "Tailwind CSS", percent: 92 },
  { name: "Ant Design", percent: 85 },
  { name: "TanStack Query", percent: 88 },
  { name: "AngularJS", percent: 35, learning: true },
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
