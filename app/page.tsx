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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <h1 className="text-cente r text-[32px] mb-4 title strokeme">
        <WordRepeat>
          <LetterPositioning>Feed</LetterPositioning>
        </WordRepeat>
      </h1>
      <MEGATV />
    </main>
  );
}
