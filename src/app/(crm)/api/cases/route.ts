import { NextResponse } from "next/server";
import { data as cases } from "@/mock/cases.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const itemsPerPage = 10;
  const mechanicId = searchParams.get("mechanic_id");

  // Filter by mechanicId
  const filteredCases = mechanicId
    ? cases.filter((c) => c.mechanic_id?.toString() === mechanicId)
    : cases;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedCases = filteredCases.slice(startIndex, endIndex);

  return NextResponse.json({
    data: paginatedCases,
    total: filteredCases.length,
    totalPages: Math.ceil(filteredCases.length / itemsPerPage),
    currentPage: page,
  });
}
