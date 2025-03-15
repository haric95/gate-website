"use client";

import React from "react";
import TicketWidget from "../components/TicketWidget";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import dynamic from "next/dynamic";
const LetterPositioning = dynamic(
  () => import("../components/LetterPositioning"),
  {
    ssr: false,
  },
);

const WordRepeat = dynamic(() => import("../components/WordRepeat"), {
  ssr: false,
});

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("Stripe Public Key is not defined.");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default () => {
  const amount = 0.5;

  return (
    <main className="flex min-h-[calc(100vh-144px-64px)] flex-col items-center md:p-16 p-4 justify-center">
      <h1 className="text-center text-[32px] mb-4 title textoutline green">
        <WordRepeat>
          <LetterPositioning>Tickets</LetterPositioning>
        </WordRepeat>
      </h1>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: amount * 100,
          currency: "gbp",
        }}
      >
        <TicketWidget amount={amount} />
      </Elements>
    </main>
  );
};
