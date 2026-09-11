import { EXPERIENCE } from '../data/portfolio';
import { StatusBadge } from './StatusBadge';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-[1080px] px-6">
        <span className="mb-2.5 block font-mono text-[11.5px] uppercase tracking-[0.1em] text-accent-purple">
          // experience
        </span>
        <h2 className="mb-9 text-[28px] font-extrabold sm:text-[30px]">Work history</h2>

        <div className="overflow-hidden rounded-[10px] border border-console-border bg-console-panel">
          <div className="hidden grid-cols-[90px_1fr_140px_120px] gap-4 bg-console-panelAlt px-[22px] py-[18px] font-mono text-[10.5px] uppercase tracking-[0.07em] text-console-dim sm:grid">
            <div>ID</div>
            <div>Company / role</div>
            <div>Period</div>
            <div>Status</div>
          </div>

          {EXPERIENCE.map((entry) => (
            <div
              key={entry.id}
              className="grid grid-cols-1 gap-2 border-b border-console-border px-[22px] py-4 last:border-b-0 sm:grid-cols-[90px_1fr_140px_120px] sm:items-center sm:gap-4 sm:py-[18px]"
            >
              <div className="font-mono text-xs text-console-dim">{entry.id}</div>
              <div>
                <h4 className="mb-1 text-[15px] font-semibold">
                  {entry.role}
                  {entry.company && ` — ${entry.company}`}
                </h4>
                <p className="text-[13px] text-console-dim">{entry.description}</p>
              </div>
              <div className="order-first font-mono text-xs text-console-dim sm:order-none">{entry.period}</div>
              <div>
                <StatusBadge status={entry.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
