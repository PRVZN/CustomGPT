import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(
  "sk_test_51MJtP8LKiBr2gm2NF9hZDSPk0W0F9VUPtKYeWZXBDO4f9CxU6FBjKvb3AyK1q6xQ0r5mv02dNxZujxknf275mauv00VWi1lSk2",
);

export async function POST(request: NextRequest) {
  const { type } = await request.json();
  let price = "";

  switch (type) {
    case "1":
      price = "price_1NhX1WLKiBr2gm2Nrk7uDEyG";
      break;
    case "2":
      price = "price_1NhX1WLKiBr2gm2N1Oag9WLy";
      break;

    default:
      break;
  }

  const session = await stripe.checkout.sessions.create({
    success_url: "https://example.com/success",
    line_items: [{ price: price, quantity: 1 }],
    mode: "subscription",
  });

  let json_response = {
    status: "success",
    data: session.url,
  };
  return NextResponse.json(json_response);
}
