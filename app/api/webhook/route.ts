import { NextRequest, NextResponse } from "next/server";
import User from "../userschema";
const stripe = require("stripe")(
  "sk_test_51MJtP8LKiBr2gm2NF9hZDSPk0W0F9VUPtKYeWZXBDO4f9CxU6FBjKvb3AyK1q6xQ0r5mv02dNxZujxknf275mauv00VWi1lSk2",
);

export async function POST(request: NextRequest) {
  const data = await request.json();

  switch (data.type) {
    case "invoice.payment_succeeded":
      const amount = data.data.object.amount_paid;
      const customer_email = data.data.object.customer_email;
      let query;
      if (amount === 500) {
        query = 300;
      } else {
        query = 500;
      }
      await User.update(
        { email: customer_email },
        {
          query: query,
        },
      );
      break;

    default:
      break;
  }

  return NextResponse.json({ status: 200 });
}
