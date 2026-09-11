import { useEffect, useState } from 'react';

export function useClock(timeZone = 'Asia/Tashkent'): string {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false, timeZone }));
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}
