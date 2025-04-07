import React, { useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import LetterPositioning from "./LetterPositioning";
import AnimateHeight from "react-animate-height";
import { AnimatePresence, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { DEFAULT_TRANSITION } from "../consts";
import { useIsMobile } from "../hooks/useIsMobile";

type ArtistListingProps = {
  name: string;
  bio?: string;
  type: "live" | "dj" | "other";
  isGate?: boolean;
  imageUrl?: string;
  imageCredit?: string;
};

export const ArtistListing = ({
  name,
  bio,
  type,
  isGate = false,
  imageUrl,
  imageCredit,
}: ArtistListingProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { count, start, stop, reset } = useCounter(
    Math.round(750 / name.length),
    name.length,
  );

  const handleOpen = () => {
    setIsOpen(true);
    start();
  };

  const handleClose = () => {
    setIsOpen(false);
    stop();
    reset();
  };

  const isMobile = useIsMobile();

  const isGabby = name === "Internal Object + Silkenste";

  return (
    <AnimateHeight
      id="example-panel"
      duration={400}
      height={isOpen ? "auto" : isGabby ? 72 : 36} // see props documentation below
      className={`w-full`}
    >
      <button
        className={`cursor-pointer text-white flex flex-col ${isOpen ? "" : ""} transition-all`}
        onClick={() => {
          bio && (isOpen ? handleClose() : handleOpen());
        }}
      >
        <div className="flex">
          <p className={`microgramma flex items-center text-left md:text-xl`}>
            {!!bio &&
              (isOpen ? (
                <span style={{ transform: "translate(4px, -2px)" }}>
                  {"- "}
                </span>
              ) : (
                "+ "
              ))}
            {isOpen
              ? name.split("").map((char, index) => {
                  return (
                    <span
                      className={`font-mono ${count >= index ? "textoutline text-[24px]" : "font-mono"} ${type === "live" ? "green" : type === "dj" ? "blue" : "red"} ${index === 0 && "pl-3"} ${isGabby && isMobile && "text-sm"}`}
                    >
                      <LetterPositioning>{char}</LetterPositioning>
                    </span>
                  );
                })
              : name}
          </p>
          {isGate && <img src="/logo.png" className="inline h-[32px]" />}
        </div>
        <AnimatePresence mode="wait">
          {isOpen && bio && (
            <div
              className={`border-l-2 ml-[7px] my-4 ${type === "live" ? "border-[#369d06]" : type === "dj" ? "border-[#078b9d]" : "border-[#d31f08]"}`}
            >
              {imageUrl && (
                <motion.div
                  {...DEFAULT_TRANSITION}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.25, duration: 0.5 },
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.7 } }}
                  className="w-full"
                >
                  <img
                    src={imageUrl}
                    className={`pl-5 md:h-64 md:w-auto h-auto w-full`}
                  />
                  <p className="text-left text-xs text-shadow-none pl-5 mb-2">
                    {imageCredit}
                  </p>
                </motion.div>
              )}
              {}
              <motion.p
                {...DEFAULT_TRANSITION}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.25, duration: 0.5 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.7 } }}
                className={`text-left text-md pl-5 ml-0`}
                style={{ whiteSpace: "break-spaces" }}
              >
                {bio}
              </motion.p>
            </div>
          )}
        </AnimatePresence>
      </button>
    </AnimateHeight>
  );
};
