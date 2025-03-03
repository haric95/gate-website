"use client";

import dynamic from "next/dynamic";
import WordRepeat from "./components/WordRepeat";
import { useIsMobile } from "./hooks/useIsMobile";
const MEGATV = dynamic(() => import("./components/MEGATV"), {
  ssr: false,
});
const LetterPositioning = dynamic(
  () => import("./components/LetterPositioning"),
  {
    ssr: false,
  },
);
const ShaderBackground = dynamic(
  () => import("./components/ShaderBackground"),
  {},
);

export default function Home() {
  const { isMobile } = useIsMobile();
  return (
    <main
      className="flex flex-col items-center justify-center p-16"
      style={{ minHeight: "calc(100vh - 144px)" }}
    >
      <div className="flex flex-col items-center">
        {/* Desktop */}
        {isMobile ? (
          <>
            <h1 className="text-[20px] title textoutline green text-center">
              <WordRepeat>
                <LetterPositioning>GATE</LetterPositioning>
              </WordRepeat>
            </h1>
            <h1 className="text-[20px] title textoutline green text-center">
              <WordRepeat>
                <LetterPositioning>@</LetterPositioning>
              </WordRepeat>
            </h1>
            <h1 className="text-[20px] mb-4 title textoutline green text-center">
              <WordRepeat>
                <LetterPositioning>The Distillery N17</LetterPositioning>
              </WordRepeat>
            </h1>
            <h2 className="text-[16px] mb-4 title textoutline blue text-center">
              <WordRepeat>
                <LetterPositioning>18 - 04 - 25</LetterPositioning>
              </WordRepeat>
            </h2>
            <h2 className="text-[16px] mb-4 title textoutline red text-center">
              <WordRepeat>
                <LetterPositioning>Info Coming Soon</LetterPositioning>
              </WordRepeat>
            </h2>
          </>
        ) : (
          <>
            <h1 className="md:text-[32px] text-[24px] mb-4 title textoutline green text-center">
              <WordRepeat>
                <LetterPositioning>GATE @ The Distillery N17</LetterPositioning>
              </WordRepeat>
            </h1>
            <h2 className="text-[32px] mb-4 title textoutline blue text-center">
              <WordRepeat>
                <LetterPositioning>18 - 04 - 25</LetterPositioning>
              </WordRepeat>
            </h2>
            <h2 className="text-[32px] mb-4 title textoutline red text-center">
              <WordRepeat>
                <LetterPositioning>Info Coming Soon</LetterPositioning>
              </WordRepeat>
            </h2>
          </>
        )}
      </div>
    </main>
  );
}
