"use client";

import dynamic from "next/dynamic";
import { EmailForm } from "./components/EmailForm";
import WordRepeat from "./components/WordRepeat";
import { useIsMobile } from "./hooks/useIsMobile";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
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
const TicketWidget = dynamic(() => import("./components/TicketWidget"), {
  ssr: false,
});

export default function Home() {
  const { isMobile } = useIsMobile();
  return (
    <main
      className="flex flex-col items-center justify-center p-4 md:p-16"
      style={{ minHeight: "calc(100vh - 144px)" }}
    >
      <div className="flex flex-col items-center w-full">
        {isMobile === null ? null : isMobile ? (
          <div className="w-full">
            <div className="flex flex-col">
              <div className="flex flex-col items-start justify-center w-full">
                <h1 className="text-[20px] mb-4 title textoutline green">
                  <WordRepeat>
                    <LetterPositioning>
                      GATE @ The Distillery N17
                    </LetterPositioning>
                  </WordRepeat>
                </h1>
                <h2 className="text-[20px] mb-4 title textoutline blue">
                  <WordRepeat>
                    <LetterPositioning>18 APR 25</LetterPositioning>
                  </WordRepeat>
                </h2>
                <h2 className="text-[20px] mb-8 title textoutline red">
                  <WordRepeat>
                    <LetterPositioning>4PM - 4AM</LetterPositioning>
                  </WordRepeat>
                </h2>
                <div className="text-[16px] textshadow mb-8">
                  <p className="h-[144px]">
                    <TypeAnimation
                      sequence={[
                        "Recall GATE\ndaughters of the forgotten zones\nflung scattered to the wind\nacross seas and rivers\nto reconvene in\nsha(ttere)red solitude",
                      ]}
                      wrapper="span"
                      speed={60}
                      style={{
                        display: "inline-block",
                        whiteSpace: "pre-line",
                      }}
                    />
                  </p>
                </div>
                <div className="mb-16">
                  <div className="flex items-center mb-4">
                    <Link href="/tickets">
                      <button className="w-full flex items-center justify-center inputoutline text-white p-4 w-64 mr-8 text-sm">
                        BUY TICKETS
                      </button>
                    </Link>
                    <h2 className="text-[24px] title textoutline text-white text-center ml-4">
                      <WordRepeat>
                        <LetterPositioning>£12</LetterPositioning>
                      </WordRepeat>
                    </h2>
                  </div>
                  <p className="text-sm">
                    No one will be turned away for lack of funds!
                  </p>
                  <p className="text-sm w-2/3">
                    Please contact GATE through Instagram or at
                    gatheralltheelectronics@gmail.com and we will sort you out.
                  </p>
                </div>
                <img src="/posters/6.webp" className="mb-16" />
                <h2 className="text-[32px] mb-4 title textoutline green text-center">
                  <WordRepeat>
                    <LetterPositioning>LINEUP</LetterPositioning>
                  </WordRepeat>
                </h2>
                <div>
                  <div className="mb-8 text-xl">
                    <p>LIVE ELECTRONIC MUSIC ///</p>
                    <p>Jena Jang</p>
                    <p>Gus Cantor</p>
                    <p>Jack Dove</p>
                    <p>Mi yá</p>
                    <p>Cold Light</p>
                    <div className="flex">
                      <p>Seshtan</p>
                      <img src="/logo.png" className="inline h-[32px]" />
                    </div>
                    <div className="flex">
                      <p>
                        Internal Object
                        <img src="/logo.png" className="inline h-[32px]" /> +
                        Silkenste
                      </p>
                    </div>
                    <div className="flex">
                      <p>Lissener</p>
                      <img src="/logo.png" className="inline h-[32px]" />
                    </div>
                  </div>
                  <div className="mb-8 text-xl">
                    <p>DJ /////////////////////</p>
                    <p>Proc Fiskal</p>
                    <p>Demetzy</p>
                    <p>Medallion Man</p>
                    <div className="flex">
                      <p>Overneath</p>
                      <img src="/logo.png" className="inline h-[32px]" />
                    </div>
                  </div>
                  <div className="mb-8 text-xl">
                    <p>INSTALLATIONS ////////////</p>
                    <p>Tabitha Weddell</p>
                    <p>Baos</p>
                    <div className="flex">
                      <p>Martha</p>
                      <img src="/logo.png" className="inline h-[32px]" />
                    </div>
                  </div>
                  <div className="mb-8 text-xl">
                    <p>PROJECTIONS //////////////</p>
                    <p>Visuals Ru</p>
                  </div>
                  <p className="text-lg mb-8">
                    Home cooked vegan food will be available from 4-8pm.
                  </p>
                  <p className="text-lg">//////////////////////////</p>
                </div>
              </div>
              <div className="flex items-center mt-8">
                <Link href="/tickets">
                  <button className="w-full flex items-center justify-center inputoutline text-white p-4 w-64 mr-8 text-sm">
                    BUY TICKETS
                  </button>
                </Link>
                <h2 className="text-[24px] title textoutline text-white text-center ml-4">
                  <WordRepeat>
                    <LetterPositioning>£12</LetterPositioning>
                  </WordRepeat>
                </h2>
              </div>
            </div>
          </div>
        ) : (
          /* Desktop */
          <div className="flex w-full">
            <div className="flex flex-col w-1/2 mr-8">
              <div className="flex flex-col items-start justify-center w-full">
                <h1 className="md:text-[32px] text-[24px] mb-4 title textoutline green">
                  <WordRepeat>
                    <LetterPositioning>
                      GATE @ The Distillery N17
                    </LetterPositioning>
                  </WordRepeat>
                </h1>
                <h2 className="text-[32px] mb-4 title textoutline blue">
                  <WordRepeat>
                    <LetterPositioning>18 APR 25</LetterPositioning>
                  </WordRepeat>
                </h2>
                <h2 className="text-[32px] mb-8 title textoutline red">
                  <WordRepeat>
                    <LetterPositioning>4PM - 4AM</LetterPositioning>
                  </WordRepeat>
                </h2>
                <div className="text-[20px] textshadow mb-16">
                  <p className="h-[180px]">
                    <TypeAnimation
                      sequence={[
                        "Recall GATE\ndaughters of the forgotten zones\nflung scattered to the wind\nacross seas and rivers\nto reconvene in\nsha(ttere)red solitude",
                      ]}
                      wrapper="span"
                      speed={60}
                      style={{
                        display: "inline-block",
                        whiteSpace: "pre-line",
                      }}
                    />
                  </p>
                </div>
                <div className="mb-16">
                  <div className="flex items-center mb-4">
                    <Link href="/tickets">
                      <button className="w-full flex items-center justify-center inputoutline text-white p-4 w-64 mr-8">
                        BUY TICKETS
                      </button>
                    </Link>
                    <h2 className="text-[32px] title textoutline text-white text-center ml-4">
                      <WordRepeat>
                        <LetterPositioning>£12</LetterPositioning>
                      </WordRepeat>
                    </h2>
                  </div>
                  <p className="text-sm">
                    No one will be turned away for lack of funds!
                  </p>
                  <p className="text-sm w-2/3">
                    Please contact GATE through Instagram or at
                    gatheralltheelectronics@gmail.com and we will sort you out.
                  </p>
                </div>
                <h2 className="text-[32px] mb-4 title textoutline green text-center">
                  <WordRepeat>
                    <LetterPositioning>LINEUP</LetterPositioning>
                  </WordRepeat>
                </h2>
                <div>
                  <div className="mb-8 text-xl">
                    <p>LIVE ELECTRONIC MUSIC ////////////////</p>
                    <p>Jena Jang</p>
                    <p>Gus Cantor</p>
                    <p>Jack Dove</p>
                    <p>Mi yá</p>
                    <p>Cold Light</p>
                    <div className="flex">
                      <p>Seshtan</p>
                      <img src="/logo.png" className="inline h-[32px]" />
                    </div>
                    <div className="flex">
                      <p>
                        Internal Object
                        <img src="/logo.png" className="inline h-[32px]" /> +
                        Silkenste
                      </p>
                    </div>
                    <div className="flex">
                      <p>Lissener</p>
                      <img src="/logo.png" className="inline h-[32px]" />
                    </div>
                  </div>
                  <div className="mb-8 text-xl">
                    <p>DJ ////////////////////////////////////</p>
                    <p>Proc Fiskal</p>
                    <p>Demetzy</p>
                    <p>Medallion Man</p>
                    <div className="flex">
                      <p>Overneath</p>
                      <img src="/logo.png" className="inline h-[32px]" />
                    </div>
                  </div>
                  <div className="mb-8 text-xl">
                    <p>INSTALLATIONS /////////////////////////</p>
                    <p>Tabitha Weddell</p>
                    <p>Baos</p>
                    <div className="flex">
                      <p>Martha</p>
                      <img src="/logo.png" className="inline h-[32px]" />
                    </div>
                  </div>
                  <div className="mb-8 text-xl">
                    <p>PROJECTIONS ///////////////////////////</p>
                    <p>Visuals Ru</p>
                  </div>
                  <p className="text-lg mb-8">
                    Home cooked vegan food will be available from 4-8pm.
                  </p>
                  <p className="text-xl">
                    //////////////////////////////////////
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <img src="/posters/6.webp" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
