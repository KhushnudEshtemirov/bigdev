export type ExperienceStatus = 'active' | 'completed';

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  description: string;
  period: string;
  status: ExperienceStatus;
}

export type AccentColor = 'purple' | 'blue' | 'green' | 'amber';

export interface ProjectEntry {
  name: string;
  status: string;
  description: string;
  stack: string[];
  accent: AccentColor;
}

export interface SkillEntry {
  name: string;
  percent: number;
  learning?: boolean;
}

export interface LanguageEntry {
  name: string;
  level: string;
}

export interface StatEntry {
  label: string;
  value: string;
  color: AccentColor;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}
