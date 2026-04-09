import { useState, useEffect, useRef } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

export function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const diff = value - display;
    if (Math.abs(diff) < 1) { setDisplay(value); return; }
    const timeout = setTimeout(() => setDisplay(Math.round(display + diff * 0.15)), 16);
    return () => clearTimeout(timeout);
  }, [value, display]);

  return <>{display.toLocaleString("ru-RU")}</>;
}
