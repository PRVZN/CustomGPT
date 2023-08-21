import { NextRequest, NextResponse } from "next/server";

import { updateData, getData } from "../user";

export async function POST(request: NextRequest) {
  const { userId, query } = await request.json();

  await updateData({
    userId: String(userId),
    query: Number(query),
  });
  let json_response = {
    status: "success",
  };
  return NextResponse.json(json_response);
}
