"use client";

import dynamic from "next/dynamic";
import WordRepeat from "./components/WordRepeat";
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
  return (
    <main
      className="flex flex-col items-center justify-center p-16"
      style={{ minHeight: "calc(100vh - 144px)" }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-[32px] mb-4 title strokeme green">
          <WordRepeat>
            <LetterPositioning>GATE @ The Distillery N17</LetterPositioning>
          </WordRepeat>
        </h1>
        <h2 className="text-[32px] mb-4 title strokeme blue">
          <WordRepeat>
            <LetterPositioning>18 - 04 - 25</LetterPositioning>
          </WordRepeat>
        </h2>
        <h2 className="text-[32px] mb-4 title strokeme red">
          <WordRepeat>
            <LetterPositioning>Info Coming Soon</LetterPositioning>
          </WordRepeat>
        </h2>
      </div>
    </main>
  );
}
