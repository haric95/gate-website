"use client";

import { SuccessResponse } from "@/app/api/next-css-sync/route";
import SuccessPage from "@/app/components/SuccessPage";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Spinner from "react-spinners/PropagateLoader";
import Stripe from "stripe";

const LetterPositioning = dynamic(
  () => import("../../components/LetterPositioning"),
  {
    ssr: false,
  },
);

const WordRepeat = dynamic(() => import("../../components/WordRepeat"), {
  ssr: false,
});

function isSuccessResponse(input: any): input is SuccessResponse {
  return (
    "name" in input &&
    "email" in input &&
    "id" in input &&
    "numTickets" in input
  );
}

// const DUMMY_DATA = {
//   name: "Hari Chauhan",
//   email: "hari-c@hotmail.co.uk",
//   id: "pi_3R33tgFxIM6UbQgh1wriwf8I",
//   numTickets: 4,
// };

export default () => {
  return (
    <main className="flex min-h-[calc(100vh-144px-64px)] flex-col items-center md:p-16 p-4 justify-center">
      <Suspense>{<SuccessPage />}</Suspense>
    </main>
  );
};
