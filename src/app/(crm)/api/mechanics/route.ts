import { NextResponse } from "next/server";
import { data as cases } from "@/mock/cases.json";

export async function GET(request: Request) {


  return NextResponse.json({
    ready: true,
  });
}
