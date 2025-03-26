import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import React from "react";
import { Header } from "./components/Header";
import { LayoutTransition } from "./components/LayoutTransition";
import { DEFAULT_TRANSITION } from "./consts";
import "./globals.css";
import GlobalContextProvider from "./state/GlobalState";
import dynamic from "next/dynamic";
import { LoadingScreen } from "./components/LoadingScreen";
import Head from "next/head";

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
      <Head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="0d3a65ce-c81e-4e88-b5a6-27b6d2bfda75"
        ></script>
      </Head>
      <body className={`${mono.className} ${mono.variable}`}>
        <Header />

        <LayoutTransition {...DEFAULT_TRANSITION}>
          <GlobalContextProvider>{children}</GlobalContextProvider>{" "}
        </LayoutTransition>
        <footer className="w-full h-16 flex justify-center items-center">
          <p>© GATE {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}
