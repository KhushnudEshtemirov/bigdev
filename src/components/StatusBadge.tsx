import type { ExperienceStatus } from '../types';

const STYLES: Record<ExperienceStatus, string> = {
  active: 'text-accent-green bg-accent-green/10',
  completed: 'text-console-dim bg-console-dim/10',
};

const LABELS: Record<ExperienceStatus, string> = {
  active: 'active',
  completed: 'completed',
};

export function StatusBadge({ status }: { status: ExperienceStatus }) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] ${STYLES[status]}`}
    >
      <i className="h-1.5 w-1.5 rounded-full bg-current" />
      {LABELS[status]}
    </span>
  );
}
