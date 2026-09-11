import { LANGUAGES, SKILLS } from '../data/portfolio';

export function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="mx-auto max-w-[1080px] px-6">
        <span className="mb-2.5 block font-mono text-[11.5px] uppercase tracking-[0.1em] text-accent-purple">
          // skills
        </span>
        <h2 className="mb-9 text-[28px] font-extrabold sm:text-[30px]">Technical skills</h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            {SKILLS.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="mb-1.5 flex justify-between font-mono text-[13px]">
                  <span>{skill.name}</span>
                  <span className={skill.learning ? 'text-accent-amber' : 'text-console-dim'}>
                    {skill.learning ? 'learning' : `${skill.percent}%`}
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-console-panelAlt">
                  <div
                    className={`h-full rounded-full ${skill.learning ? 'bg-accent-amber' : 'bg-accent-purple'}`}
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[10px] border border-console-border bg-console-panel p-[22px]">
            <h5 className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-console-dim">languages</h5>
            {LANGUAGES.map((language) => (
              <div
                key={language.name}
                className="flex justify-between border-b border-console-border py-2.5 text-[13.5px] last:border-b-0"
              >
                <span>{language.name}</span>
                <span className="font-mono text-accent-green">{language.level}</span>
              </div>
            ))}

            <div className="mt-[18px] border-t border-dashed border-console-border pt-[18px]">
              <h5 className="mb-2 font-mono text-[11px] uppercase tracking-[0.08em] text-console-dim">
                offline_activity
              </h5>
              <p className="text-[12.5px] text-console-dim">
                Table tennis and fitness training — for keeping reaction time and focus sharp outside of code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
