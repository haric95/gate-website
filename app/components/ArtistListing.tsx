import React, { useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import LetterPositioning from "./LetterPositioning";
import AnimateHeight from "react-animate-height";
import { AnimatePresence, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { DEFAULT_TRANSITION } from "../consts";

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

  return (
    <AnimateHeight
      id="example-panel"
      duration={400}
      height={isOpen ? "auto" : 36} // see props documentation below
      className={`w-full`}
    >
      <button
        className={`cursor-pointer text-white flex flex-col ${isOpen ? "" : ""} transition-all`}
        onClick={() => {
          bio && (isOpen ? handleClose() : handleOpen());
        }}
      >
        <div className="flex">
          <p className="microgramma flex items-center h-[32px]">
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
                      className={`font-mono ${count >= index ? "textoutline text-[24px]" : "font-mono"} ${type === "live" ? "green" : type === "dj" ? "blue" : "red"} ${index === 0 && "pl-3"}`}
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
                >
                  <img src={imageUrl} className={`ml-5 h-64 w-auto"}`} />
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
