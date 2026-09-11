import { PROJECTS } from '../data/portfolio';
import type { AccentColor } from '../types';

const ACCENT_BORDER: Record<AccentColor, string> = {
  purple: 'before:bg-accent-purple hover:border-accent-purple',
  blue: 'before:bg-accent-blue hover:border-accent-blue',
  green: 'before:bg-accent-green hover:border-accent-green',
  amber: 'before:bg-accent-amber hover:border-accent-amber',
};

const ACCENT_TEXT: Record<AccentColor, string> = {
  purple: 'text-accent-purple',
  blue: 'text-accent-blue',
  green: 'text-accent-green',
  amber: 'text-accent-amber',
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-[1080px] px-6">
        <span className="mb-2.5 block font-mono text-[11.5px] uppercase tracking-[0.1em] text-accent-purple">
          // projects
        </span>
        <h2 className="mb-9 text-[28px] font-extrabold sm:text-[30px]">Projects I&apos;ve built</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className={`relative overflow-hidden rounded-[10px] border border-console-border bg-console-panel p-[22px] transition-all before:absolute before:inset-x-0 before:top-0 before:h-[3px] hover:-translate-y-1 ${ACCENT_BORDER[project.accent]}`}
            >
              <div className="mb-3.5 flex items-start justify-between">
                <h4 className="text-base font-bold">{project.name}</h4>
                <span className={`font-mono text-[10px] ${ACCENT_TEXT[project.accent]}`}>{project.status}</span>
              </div>
              <p className="mb-4 text-[13.5px] text-console-dim">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-console-border bg-console-panelAlt px-2.5 py-1 font-mono text-[10.5px] text-console-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
