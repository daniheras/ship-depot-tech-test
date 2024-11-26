import { db } from "@/db/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await db.query.mechanics.findMany()

  return NextResponse.json({
    ready: true,
    data,
  });
}
