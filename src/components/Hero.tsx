import { STACK_TAGS, STATS } from "../data/portfolio";
import type { AccentColor } from "../types";
import { ContributionGrid } from "./ContributionGrid";

const STAT_TEXT_COLOR: Record<AccentColor, string> = {
  purple: "text-accent-purple",
  green: "text-accent-green",
  blue: "text-accent-blue",
  amber: "text-accent-amber",
};

export function Hero() {
  return (
    <section id="home" className="pb-16 pt-20">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <span className="mb-4 block font-mono text-[11.5px] uppercase tracking-[0.12em] text-accent-purple">
            // profile
          </span>
          <h1 className="mb-4 text-4xl font-extrabold leading-[1.12] sm:text-5xl">
            I build interfaces.
            <br />I bring <span className="text-accent-purple">order</span> to
            data.
          </h1>
          <p className="mb-6 max-w-[480px] text-[16px] text-console-dim">
            Frontend developer — I build complex admin panels, dashboards, and
            user interfaces with React and TypeScript. Experienced in banking
            and personal projects.
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            {STACK_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-console-border bg-console-panel px-3 py-1.5 font-mono text-[11.5px] text-console-dim"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-accent-purple px-5 py-2.5 font-mono text-[13px] font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-console-border px-5 py-2.5 font-mono text-[13px] font-medium transition-all hover:-translate-y-0.5 hover:border-accent-purple"
            >
              $ contact
            </a>
          </div>
        </div>

        <div className="rounded-[10px] border border-console-border bg-console-panel p-[22px]">
          <div className="mb-[18px] flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.08em] text-console-dim">
            <span>system_overview.json</span>
            <span>live</span>
          </div>

          <div className="mb-5 grid grid-cols-2 gap-3.5">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <b
                  className={`block font-mono text-[22px] font-semibold ${STAT_TEXT_COLOR[stat.color]}`}
                >
                  {stat.value}
                </b>
                <span className="text-[11.5px] text-console-dim">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <ContributionGrid />
          <div className="mt-2.5 font-mono text-[10px] text-console-dim">
            activity over the last 18 weeks
          </div>
        </div>
      </div>
    </section>
  );
}
