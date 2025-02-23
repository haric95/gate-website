"use client";
import { AnimatePresence, motion } from "framer-motion";
import Markdown from "react-markdown";
import { ARCHIVE_DATA } from "../archiveData";

import dynamic from "next/dynamic";
import { useContext, useState } from "react";
import remarkBreaks from "remark-breaks";
import { Gallery } from "../components/Gallery";
import { PreviewGallery } from "../components/PreviewGallery";
import WordRepeat from "../components/WordRepeat";
import { DEFAULT_TRANSITION } from "../consts";
import { GlobalContext } from "../state/GlobalState";
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});
const LetterPositioning = dynamic(
  () => import("../components/LetterPositioning"),
  {
    ssr: false,
  },
);

enum ArchivePage {
  EVENTS = "Events",
  RADIO = "Radio",
  WORKSHOPS = "Workshops",
}

enum RadioType {
  MIXGATE = "Mixgate",
  THREADS = "Threads",
}

export default function Home() {
  const [activePage, setActivePage] = useState<ArchivePage>(ArchivePage.EVENTS);
  const [activeRadioType, setActiveRadioType] = useState<RadioType>(
    RadioType.MIXGATE,
  );

  const globalData = useContext(GlobalContext);

  return (
    <main className="flex min-h-screen flex-col items-center md:p-16 p-4">
      <Gallery />
      <h1 className="text-center text-[32px] mb-4 title strokeme">
        <WordRepeat>
          <LetterPositioning>Archive</LetterPositioning>
        </WordRepeat>
      </h1>
      <div className="w-full md:px-16">
        <div
          {...DEFAULT_TRANSITION}
          className="w-full flex justify-center items-center mb-8"
        >
          <button
            className={`bluehov ${activePage === ArchivePage.EVENTS && "active"}`}
            onClick={() => setActivePage(ArchivePage.EVENTS)}
          >
            <h1
              className={`text-center text-lg title mr-4 strokeme blue ${activePage === ArchivePage.EVENTS && "active"}`}
            >
              <LetterPositioning>Events</LetterPositioning>
            </h1>
          </button>
          <button
            className={`bluehov ${activePage === ArchivePage.RADIO && "active"}`}
            onClick={() => setActivePage(ArchivePage.RADIO)}
          >
            <h1
              className={`text-center text-lg title mr-4 strokeme blue ${activePage === ArchivePage.RADIO && "active"}`}
            >
              <LetterPositioning>Radio</LetterPositioning>
            </h1>
          </button>
          <button
            className={`bluehov ${activePage === ArchivePage.WORKSHOPS && "active"}`}
            onClick={() => setActivePage(ArchivePage.WORKSHOPS)}
          >
            <h1
              className={`text-center text-lg title strokeme blue ${activePage === ArchivePage.WORKSHOPS && "active"}`}
            >
              <LetterPositioning>Workshops</LetterPositioning>
            </h1>
          </button>
        </div>
        <AnimatePresence mode="wait">
          {activePage === ArchivePage.EVENTS ? (
            <motion.div key={"events"} {...DEFAULT_TRANSITION}>
              {ARCHIVE_DATA.events.map((event) => {
                return (
                  <div
                    className="md:w-full  w-full transition-all duration-500"
                    key={event.title}
                  >
                    <hr className="color-white border-color-white w-full mb-8" />
                    <div className="flex md:flex-row flex-col w-full transition-all justify-between items-between">
                      <div className="md:w-1/2 w-full md:mr-8 mb-4 md:mb-0 flex items-center justify-center">
                        <img
                          className="max-h-[480px]"
                          src={event.coverImageUrl}
                          alt={`${event.title} Poster`}
                        />
                      </div>
                      <div className="md:w-1/2 flex flex-col justify-between">
                        <div>
                          <h1
                            className="text-[36px] title leading-[36px] strokeme"
                            title={event.title}
                          >
                            {event.title}
                          </h1>
                          <h1 className="text-[12px] title">
                            {Array.isArray(event.date)
                              ? event.date
                                  .map((date) =>
                                    date.toLocaleDateString("en-GB"),
                                  )
                                  .join(" - ")
                              : event.date.toLocaleDateString("en-GB")}
                          </h1>
                          <h1 className="text-[16px] title mb-4">
                            {event.location}
                          </h1>
                          <div className="text-lg font-mono mb-4">
                            <Markdown remarkPlugins={[remarkBreaks]}>
                              {event.descriptionMarkup}
                            </Markdown>
                          </div>
                        </div>
                        <div className="w-full h-32">
                          <PreviewGallery imageUrls={event.imageUrls} />
                        </div>
                      </div>
                    </div>

                    <hr className="mt-8" />
                  </div>
                );
              })}
            </motion.div>
          ) : activePage === ArchivePage.RADIO ? (
            // RADIO TAB
            <motion.div
              key={"radio"}
              {...DEFAULT_TRANSITION}
              className="w-full px-16"
            >
              <div
                {...DEFAULT_TRANSITION}
                className="w-full flex justify-center items-center mb-8"
              >
                <button
                  className={`redhov ${activeRadioType == RadioType.MIXGATE && "active"}`}
                  onClick={() => setActiveRadioType(RadioType.MIXGATE)}
                >
                  <h1
                    className={`text-center text-lg title mr-4 strokeme red ${activeRadioType == RadioType.MIXGATE && "active"}`}
                  >
                    MIXGATE
                  </h1>
                </button>
                <button
                  className={`redhov ${activeRadioType == RadioType.THREADS && "active"} `}
                  onClick={() => setActiveRadioType(RadioType.THREADS)}
                >
                  <h1
                    className={`text-center text-lg title mr-4 strokeme red ${activeRadioType == RadioType.THREADS && "active"}`}
                  >
                    Threads
                  </h1>
                </button>
              </div>

              <div>
                <AnimatePresence mode="wait">
                  {activeRadioType === RadioType.MIXGATE ? (
                    <motion.div key={"mixgate"} {...DEFAULT_TRANSITION}>
                      {ARCHIVE_DATA.radio.mixgate.map((radio) => {
                        return (
                          <div
                            className="md:w-full w-[240px] transition-all duration-500"
                            key={radio.title}
                          >
                            <hr className="color-white border-color-white w-full mb-8" />
                            <div className="flex w-full transition-all justify-between items-between">
                              <div className="w-1/2 mr-8 flex items-center justify-center">
                                <img
                                  className="max-h-[480px]"
                                  src={radio.coverUrl}
                                  alt={`${radio.title} Poster`}
                                />
                              </div>
                              <div className="w-1/2 flex flex-col justify-between">
                                <div>
                                  <h1
                                    className="text-[36px] title leading-[36px] strokeme"
                                    title={radio.title}
                                  >
                                    {radio.title}
                                  </h1>
                                  <h1 className="text-[12px] title mb-4">
                                    {radio.releaseDate.toLocaleDateString(
                                      "en-GB",
                                    )}
                                  </h1>
                                  <div className="text-lg font-mono mb-4">
                                    <Markdown remarkPlugins={[remarkBreaks]}>
                                      {radio.description}
                                    </Markdown>
                                  </div>
                                </div>
                                <ReactPlayer
                                  fallback={
                                    <div className="bg-red-500 w-full h-full" />
                                  }
                                  height={160}
                                  width={"100%"}
                                  url={radio.url}
                                  config={{ soundcloud: { options: {} } }}
                                />
                              </div>
                            </div>

                            <hr className="mt-8" />
                          </div>
                        );
                      })}
                    </motion.div>
                  ) : (
                    <motion.div key={"threads"} {...DEFAULT_TRANSITION}>
                      {ARCHIVE_DATA.radio.threads.map((radio) => {
                        return (
                          <div
                            className="md:w-full w-[240px] transition-all duration-500"
                            key={radio.title}
                          >
                            <hr className="color-white border-color-white w-full mb-8" />
                            <div className="flex w-full transition-all justify-between items-between">
                              <div className="w-1/2 mr-8 flex items-center justify-center">
                                <img
                                  className="max-h-[480px]"
                                  src={radio.coverUrl}
                                  alt={`${radio.title} Poster`}
                                />
                              </div>
                              <div className="w-1/2 flex flex-col justify-between">
                                <div>
                                  <h1
                                    className="text-[36px] title leading-[36px] strokeme"
                                    title={radio.title}
                                  >
                                    {radio.title}
                                  </h1>
                                  <h1 className="text-[12px] title mb-4">
                                    {radio.releaseDate.toLocaleDateString(
                                      "en-GB",
                                    )}
                                  </h1>
                                  <div className="text-lg font-mono mb-4">
                                    <Markdown remarkPlugins={[remarkBreaks]}>
                                      {radio.description}
                                    </Markdown>
                                  </div>
                                </div>
                                <ReactPlayer
                                  height={160}
                                  width={"100%"}
                                  url={radio.url}
                                  config={{ soundcloud: { options: {} } }}
                                />
                              </div>
                            </div>

                            <hr className="mt-8" />
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={"workshops"}
              {...DEFAULT_TRANSITION}
              className="w-full px-16"
            >
              {ARCHIVE_DATA.workshops.map((workshop) => {
                return (
                  <div
                    className="md:w-full w-[240px] transition-all duration-500"
                    key={workshop.title}
                  >
                    <hr className="color-white border-color-white w-full mb-8" />
                    <div className="flex w-full transition-all justify-between items-between">
                      <div className="w-1/2 mr-8 flex items-center justify-center">
                        <img
                          className="max-h-[480px]"
                          src={workshop.coverUrl}
                          alt={`${workshop.title} Poster`}
                        />
                      </div>
                      <div className="w-1/2 flex flex-col justify-between">
                        <div>
                          <h1
                            className="text-[36px] title leading-[36px] strokeme"
                            title={workshop.title}
                          >
                            {workshop.title}
                          </h1>
                          <h1 className="text-[12px] title mb-4">
                            {workshop.date.toLocaleDateString("en-GB")}
                          </h1>
                          <div className="text-lg font-mono mb-4">
                            <Markdown remarkPlugins={[remarkBreaks]}>
                              {workshop.description}
                            </Markdown>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr className="mt-8" />
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
