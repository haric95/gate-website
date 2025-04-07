"use client";
import { useMemo } from "react";

type LetterPositioningProps = {
  children: string | null | undefined;
};

const staticPos = new Array(100).fill(null).map((_) => {
  return [Math.random() * 0.06, Math.random() * 0.06];
});

export default ({ children }: LetterPositioningProps) => {
  const pos = useMemo(() => {
    return new Array(100).fill(null).map((_) => {
      return [Math.random() * 0.06, Math.random() * 0.06, Math.random() * 0.06];
    });
  }, []);

  return pos ? (
    <>
      {children?.split("").map((char, index) => (
        <span
          className="inline-block whitespace-break-spaces"
          key={index}
          style={{
            transform: `translate(${pos[index][0]}em, ${pos[index][1]}em) rotate(${pos[index][2]}deg)`,
          }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </>
  ) : null;
};
