import { NextRequest, NextResponse } from "next/server";

import { createData, getData } from "./user";
export async function GET(request: NextRequest) {
  // const data = await User.find({});

  // return data;
  let json_response = {
    status: "success",
  };
  return NextResponse.json(json_response);
}

export async function POST(request: NextRequest) {
  await createData({
    userId: "asdfadf",
    query: 1,
  });
  return NextResponse.json({ as: "asdf" });
}
