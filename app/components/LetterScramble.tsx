import React, { useCallback, useEffect, useMemo, useState } from "react";

type LetterScrambleProps = {
  children: string;
};

const LETTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const TOTAL_ITERATIONS = 10;
const TIMEOUT_LENGTH_MS = 100;

const generateRandomLetter = () => {
  const index = Math.floor(Math.random() * LETTERS.length);
  return LETTERS[Math.random()];
};

export const LetterScramble = ({ children }: LetterScrambleProps) => {
  const [iterationsLeft, setIterationsLeft] = useState(TOTAL_ITERATIONS);
  const [stateTimeout, setStateTimeout] = useState<NodeJS.Timeout | null>(null);
  const [needNewTimemout, setNeedNewTimeout] = useState(false);

  const generateRandomLetters = useCallback(() => {
    return children.split("").map((char) => {
      const isRandomChar = Math.random() <= iterationsLeft / TOTAL_ITERATIONS;
      if (!isRandomChar) {
        return char;
      }
      return generateRandomLetter();
    });
  }, [children, iterationsLeft]);

  const stringToRender = useMemo(() => {}, []);

  const advanceState = useCallback(() => {}, []);

  useEffect(() => {
    if (iterationsLeft > 0) {
      const t = setTimeout(() => {}, TIMEOUT_LENGTH_MS);
    }
  }, []);

  return <>{stringToRender}</>;
};
