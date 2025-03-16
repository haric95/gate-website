import { TICKET_PRICE_POUNDS } from "@/app/consts";
import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";

let hasSecret = true;
if (!process.env.STRIPE_SECRET_KEY) {
  hasSecret = false;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
  typescript: true,
});

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();

    if ((amount / (TICKET_PRICE_POUNDS * 100)) % 1 !== 0) {
      return NextResponse.json(
        { error: `Invalid Payment Amount` },
        { status: 400 },
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "gbp",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: `Internal Server Error ${err}` },
      { status: 500 },
    );
  }
}
