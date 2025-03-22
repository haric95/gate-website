"use client";

import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../state/GlobalState";

export const LoadingScreen = () => {
  const { loaded, setLoaded } = useContext(GlobalContext);

  useEffect(() => {
    if (!loaded && setLoaded) {
      console.log("setting timeout");
      window.setTimeout(() => {
        console.log("here");
        setLoaded(true);
      }, 2000);
    }
  }, [loaded, setLoaded]);

  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 bg-black flex justify-center items-center pointer-events-none transition-opacity duration-500 ${loaded ? "opacity-0" : "opacity-100"}`}
      style={{ zIndex: 1000 }}
    >
      <div
        className="animate-pulse w-fit h-fit md:w-1/4 w-1/2"
        style={{ filter: "invert()" }}
      >
        <img src="/logo.webp" className="blur loader w-full h-full" />
      </div>
    </div>
  );
};
