"use client";

import React from "react";
import TicketWidget from "../components/TicketWidget";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("Stripe Public Key is not defined.");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default () => {
  const amount = 49.99;

  return (
    <main className="flex min-h-[calc(100vh-144px-64px)] flex-col items-center md:p-16 p-4 justify-center">
      <p>You're coming to GATE. Big up yourself.</p>
    </main>
  );
};
