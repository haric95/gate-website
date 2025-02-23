"use client";
import { Props } from "next/script";
import React, { PropsWithChildren, useMemo, useState } from "react";

type LetterPositioningProps = {
  children: string | null | undefined;
};

export default ({ children }: LetterPositioningProps) => {
  const pos = useMemo(() => {
    if (children) {
      return children
        .split("")
        .map(() => [Math.random() * 0.06, Math.random() * 0.06]);
    }
    return null;
  }, [children]);
  return pos ? (
    <>
      {children?.split("").map((char, index) => (
        <span
          className="inline-block"
          key={index}
          style={{
            transform: `translate(${pos[index][0]}em, ${pos[index][1]}em) rotate(${Math.random() * 2}deg)`,
          }}
        >
          {char}
        </span>
      ))}
    </>
  ) : null;
};
