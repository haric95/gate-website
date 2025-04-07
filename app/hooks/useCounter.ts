import { useEffect, useRef, useState } from "react";

export const useCounter = (speedMs: number, max: number | null = null) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  const [isOn, setIsOn] = useState(false);
  const isOnRef = useRef(isOn);
  isOnRef.current = isOn;

  const [tim, setTim] = useState<NodeJS.Timeout | null>(null);
  const timRef = useRef<NodeJS.Timeout | null>(null);
  timRef.current = tim;

  const start = () => {
    const interval = setInterval(() => {
      if (countRef.current === max && timRef.current) {
        clearInterval(timRef.current);
        setTim(null);
      }
      setCount((old) => (max !== null ? Math.min(max, old + 1) : old + 1));
    }, speedMs);
    setTim(interval);
  };

  const stop = () => {
    setIsOn(false);
    if (timRef.current) {
      clearInterval(timRef.current);
      setTim(null);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return { count, start, stop, reset };
};
