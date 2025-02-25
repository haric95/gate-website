"use client";

import dynamic from "next/dynamic";
import WordRepeat from "../components/WordRepeat";
const MEGATV = dynamic(() => import("../components/MEGATV"), {
  ssr: false,
});
const LetterPositioning = dynamic(
  () => import("../components/LetterPositioning"),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-between p-16"
      style={{ minHeight: "calc(100vh - 144px)" }}
    >
      <div className="fixed w-screen h-screen z-[-1] top-0"></div>
      <h1 className="text-cente r text-[32px] mb-4 title strokeme">
        <WordRepeat>
          <LetterPositioning>About</LetterPositioning>
        </WordRepeat>
      </h1>
      <p></p>
    </main>
  );
}
