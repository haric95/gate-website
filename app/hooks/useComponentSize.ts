import { useCallback, useEffect, useRef, useState } from "react";

export const useComponentSize = (
  element: React.RefObject<HTMLElement> | null,
) => {
  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const callback = useCallback(() => {
    if (element?.current) {
      const { width, height } = element.current.getBoundingClientRect();
      setWidth(width);
      setHeight(height);
    }
  }, [element]);

  useEffect(() => {
    window.addEventListener("resize", callback);

    return () => {
      window.removeEventListener("resize", callback);
    };
  }, [callback]);

  useEffect(() => {
    callback();
  }, [callback]);

  return { width: width ?? 0, height: height ?? 0 };
};
