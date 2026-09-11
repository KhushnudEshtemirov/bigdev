import { useMemo } from 'react';

const LEVELS = [
  'bg-console-panelAlt',
  'bg-accent-purple/20',
  'bg-accent-purple/45',
  'bg-accent-purple/75',
  'bg-accent-purple',
];

interface ContributionGridProps {
  cells?: number;
}

export function ContributionGrid({ cells = 126 }: ContributionGridProps) {
  // Demo data — swap for real activity data (e.g. commit counts) when available.
  const grid = useMemo(
    () => Array.from({ length: cells }, () => LEVELS[Math.floor(Math.random() * LEVELS.length)]),
    [cells],
  );

  return (
    <div className="grid grid-cols-[repeat(18,minmax(0,1fr))] gap-[3px]">
      {grid.map((level, i) => (
        <div key={i} className={`aspect-square rounded-sm ${level}`} />
      ))}
    </div>
  );
}
