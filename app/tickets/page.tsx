"use client";

import React, { useState } from "react";
import TicketWidget from "../components/TicketWidget";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import dynamic from "next/dynamic";
import { TICKET_PRICE_POUNDS } from "../consts";
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
  const [numTickets, setNumTickets] = useState(1);

  const handleClick = (dir: number) => {
    if (dir < 0) {
      setNumTickets((old) => Math.max(1, old - 1));
    } else {
      setNumTickets((old) => Math.min(10, old + 1));
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-144px-64px)] flex-col md:p-16 p-4 justify-center w-full">
      <div className="md:flex">
        <div className="md:w-[30%] mr-4">
          <h1 className="text-[32px] mb-4 title textoutline green">
            <WordRepeat>
              <LetterPositioning>Tickets</LetterPositioning>
            </WordRepeat>
          </h1>
          <h1 className="text-[32px] mb-4 title textoutline blue">
            <WordRepeat>
              <LetterPositioning>£12</LetterPositioning>
            </WordRepeat>
          </h1>
          <div className="flex">
            <button
              className="mr-4 cursor-pointer"
              onClick={() => handleClick(-1)}
            >
              <h1 className="text-[32px] mb-4 title textoutline red redhov clickable">
                -
              </h1>
            </button>
            <h1 className="text-[32px] mb-4 title textoutline red pl-2">
              <WordRepeat>
                <LetterPositioning>{String(numTickets)}</LetterPositioning>
              </WordRepeat>
            </h1>
            <button
              className="ml-4 cursor-pointer"
              onClick={() => handleClick(1)}
            >
              <h1 className="text-[32px] mb-4 title textoutline red redhov clickable">
                +
              </h1>
            </button>
          </div>
          <p>Tickets are available exclusively through our website.</p>
          <p>This means more money directly to artists.</p>
        </div>
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: numTickets * TICKET_PRICE_POUNDS * 100,
            currency: "gbp",

            appearance: {
              variables: {
                fontFamily: "mono",
                colorBackground: "#080808",
                colorText: "white",
              },
            },
          }}
        >
          <div className="md:w-[70%] mt-8 md:mt-0">
            <TicketWidget
              amount={numTickets * TICKET_PRICE_POUNDS}
              numTickets={numTickets}
              setNumTickets={setNumTickets}
            />
          </div>
        </Elements>
      </div>
    </main>
  );
};
