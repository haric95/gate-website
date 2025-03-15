"use client";

import { SuccessResponse } from "@/app/api/next-css-sync/route";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const [details, setDetails] = useState<SuccessResponse | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const params = useSearchParams();

  useEffect(() => {
    if (params) {
      const name = params.get("name");
      const email = params.get("email");
      const intent = params.get("payment_intent");
      const getPaymentInfo = async () => {
        try {
          fetch("/api/next-css-sync", {
            method: "POST",
            body: JSON.stringify({
              intent,
              name,
              email,
            }),
          })
            .then(async (data) => {
              if (data.status !== 200) {
                throw new Error(
                  "There was an error processing your ticket. Please get in touch with GATE at gatheralltheelectronics@gmail.com",
                );
              }
              return data.json();
            })
            .then((data: SuccessResponse) => {
              if (isSuccessResponse(data)) {
                setDetails(data);
                setIsLoading(false);
              }
            });
        } catch (err) {
          console.error(err);
          setError(JSON.stringify(err));
        }
      };
      getPaymentInfo();
    }
  }, [params]);

  return (
    <main className="flex min-h-[calc(100vh-144px-64px)] flex-col items-center md:p-16 p-4 justify-center">
      {isLoading ? (
        <>
          <p className="mb-4">
            We are processing your ticket details. Please don't refresh. It will
            take a moment.
          </p>
          <Spinner color="#369d06" />
        </>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : details ? (
        <div>
          <p className="mb-8 text-lg">
            You're on the list! Give us your name at the door.
          </p>
          <div className="relative border-[1px] border-white p-8">
            <div className="flex justify-center w-full">
              <h3 className="text-center text-[24px] mb-4 title textoutline blue absolute">
                <WordRepeat>
                  <LetterPositioning>Details</LetterPositioning>
                </WordRepeat>
              </h3>
            </div>
            <p className="text-white mb-4 text-lg">Name: {details.name}</p>
            <p className="text-white mb-4 text-lg">
              Admits: x{details.numTickets}
            </p>
            <p className="text-white mb-4 text-lg">
              Email Address: {details.email}
            </p>
            <p className="text-white mb-4 text-lg">
              Ticket ID: {details.id.slice(3)}
            </p>
          </div>
        </div>
      ) : null}
      <p></p>
    </main>
  );
};
