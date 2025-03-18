"use server";

import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";
import { google } from "googleapis";
import { TICKET_PRICE_POUNDS } from "@/app/consts";

let hasSecret = true;
if (!process.env.STRIPE_SECRET_KEY) {
  hasSecret = false;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
  typescript: true,
});

export type SuccessResponse = {
  name: string;
  email: string;
  id: string;
  numTickets: number;
  message?: string;
};

export async function POST(request: NextRequest) {
  try {
    const auth = new google.auth.GoogleAuth({
      projectId: process.env.SHEET_PROJECT_ID,
      credentials: {
        type: "service_account",
        project_id: process.env.SHEET_PROJECT_ID,
        private_key_id: process.env.SHEET_PRIVATE_KEY_ID?.replace(/\\n/g, "\n"),
        private_key: process.env.SHEET_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        client_email: process.env.SHEET_CLIENT_EMAIL,
        universe_domain: process.env.SHEET_UNIVERSE_DOMAIN,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const { intent, name, email } = await request.json();
    const ticketURL = request.headers.get("Referer");

    console.log(
      `Recieved request with following params: Intent-${intent} name-${name} email-${email}`,
    );

    // Sanitize inputs

    if (!intent && !name && !email) {
      console.error("User did not provide name intent and email");
      return NextResponse.json(
        { error: `Internal Server Error` },
        { status: 500 },
      );
    }

    try {
      const data = await sheets.spreadsheets.values.get({
        spreadsheetId: "1SMZGX5w9EtfOyuz44ZGFs-4NIOLmrVaGIHGwQsR35r8",
        range: "Sheet1!A2:D351",
      });

      const stripePayment = await stripe.paymentIntents.retrieve(intent);

      if (!stripePayment) {
        console.error("Stripe PaymentIntent not valid");
        return NextResponse.json({ error: `Invalid Ticket` }, { status: 400 });
      }

      if ((stripePayment.amount / (TICKET_PRICE_POUNDS * 100)) % 1 !== 0) {
        console.error("Payment amount is not valid");
        return NextResponse.json(
          {
            error: `There's been an error with your purchase. Please contact us at gatheralltheelectronics@gmail.com`,
          },
          { status: 400 },
        );
      }

      if (!data.data.values) {
        console.error("", data);
        return NextResponse.json(
          { error: `Internal Server Error` },
          { status: 500 },
        );
      }

      const rowIndex = data.data.values.findIndex((row) => row[1] === intent);

      if (rowIndex === -1) {
        // Add to sheet
        // @ts-ignore
        await sheets.spreadsheets.values.append({
          spreadsheetId: "1SMZGX5w9EtfOyuz44ZGFs-4NIOLmrVaGIHGwQsR35r8",
          range: "Sheet1",
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [
              [
                name,
                intent,
                Math.floor(stripePayment.amount / (TICKET_PRICE_POUNDS * 100)),
                email,
                ticketURL,
              ],
            ],
          },
        });
        console.log(
          `Added ${name} to guestlist with details: id-${intent} email-${email} numtickets-${Math.floor(stripePayment.amount / (TICKET_PRICE_POUNDS * 100))}`,
        );
        return NextResponse.json<SuccessResponse>({
          name,
          email,
          id: intent,
          numTickets: Math.floor(
            stripePayment.amount / (TICKET_PRICE_POUNDS * 100),
          ),
          message: "You've been added to the guestlist.",
        });
      } else {
        console.log(`User looked up their order: ${intent}`);
        // Check details in URL match and return information
        const row = data.data.values[rowIndex];

        if (!(row[0] === name && row[3] === email)) {
          return NextResponse.json(
            { error: "Invalid Order Details" },
            { status: 400 },
          );
        }

        return NextResponse.json<SuccessResponse>({
          name,
          email,
          id: intent,
          numTickets: Math.floor(
            stripePayment.amount / (TICKET_PRICE_POUNDS * 100),
          ),
        });
      }
    } catch (err) {
      {
        console.error(err);
        return NextResponse.json(
          { error: `Internal Server Error ${err}` },
          { status: 500 },
        );
      }
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: `Internal Server Error ${err}` },
      { status: 500 },
    );
  }
}
