import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountUp(target, { start = false, duration = 1400 } = {}) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!start) return;

    if (reducedMotion) {
      setValue(target);
      return;
    }

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [start, target, duration, reducedMotion]);

  return value;
}
