import { NextRequest, NextResponse } from "next/server";

import { createData, getData } from "./user";
export async function GET() {
  const data = await getData();

  let json_response = {
    data: data,
    status: "success",
  };
  return NextResponse.json(json_response);
}

export async function POST(request: NextRequest) {
  const { userId, query } = await request.json();

  await createData({
    userId: String(userId),
    query: Number(query),
  });
  let json_response = {
    status: "success",
  };
  return NextResponse.json(json_response);
}
