import { useCallback, useEffect, useState } from "react";

const BREAKPOINT = 768;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const callback = useCallback(() => {
    if (window.innerWidth <= BREAKPOINT) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", callback);
    callback();
  }, []);

  return { isMobile };
};
