import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import React, { createContext, useState } from "react";
import { Header } from "./components/Header";
import { LayoutTransition } from "./components/LayoutTransition";
import { DEFAULT_TRANSITION } from "./consts";
import "./globals.css";
import GlobalContextProvider from "./state/GlobalState";

const mono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Gather All The Electronics",
  description: "GATE is a not-for-profit platform for electronic music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mono.className} ${mono.variable}`}>
        <Header />
        <LayoutTransition {...DEFAULT_TRANSITION}>
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </LayoutTransition>
        <footer className="w-full h-16 flex justify-center items-center">
          <p>© GATE {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}
