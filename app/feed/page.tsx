"use client";

import dynamic from "next/dynamic";
import { useContext } from "react";
import WordRepeat from "../components/WordRepeat";
import { GlobalContext } from "../state/GlobalState";
const MEGATV = dynamic(() => import("../components/MEGATV"), {
  ssr: false,
});
const LetterPositioning = dynamic(
  () => import("../components/LetterPositioning"),
  {
    ssr: false,
  },
);
const ShaderBackground = dynamic(
  () => import("../components/ShaderBackground"),
  {},
);

export default function Home() {
  const { setShaderHighlightedElement } = useContext(GlobalContext);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      {/* <ShaderBackground /> */}

      <div className="fixed w-screen h-screen z-[-1] top-0"></div>
      <h1 className="text-center text-[32px] mb-4 title textoutline green">
        <WordRepeat>
          <LetterPositioning>Feed</LetterPositioning>
        </WordRepeat>
      </h1>
      <MEGATV />
    </main>
  );
}
