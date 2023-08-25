import { NextRequest, NextResponse } from "next/server";

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_CREDENTIAL);

export async function POST(request: NextRequest) {
  const { type } = await request.json();
  let price;

  switch (type) {
    case "1":
      price = process.env.STRIPE_PRICE_1;
      break;
    case "2":
      price = process.env.STRIPE_PRICE_2;
      break;

    default:
      break;
  }

  const session = await stripe.checkout.sessions.create({
    success_url: process.env.STRIPE_SUCCESS_URL,
    cancel_url: process.env.STRIPE_CANCEL_URL,
    line_items: [{ price: price, quantity: 1 }],
    mode: "subscription",
  });

  let json_response = {
    status: "success",
    data: session.url,
  };
  return NextResponse.json(json_response);
}
