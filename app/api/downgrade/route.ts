import { NextRequest, NextResponse } from "next/server";

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_CREDENTIAL);

export async function POST(request: NextRequest) {
  const { subscription_id } = await request.json();

  const deleted = await stripe.subscriptions.cancel(subscription_id);

  let json_response = {
    status: "success",
    data: deleted,
  };
  return NextResponse.json(json_response);
}
