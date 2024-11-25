import { NextResponse } from "next/server";
import { data as cases } from "@/mock/cases.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10); // Página solicitada
  const itemsPerPage = 10; // Número de elementos por página

  // Calcular los índices de la paginación
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Obtener los elementos de la página actual
  const paginatedCases = cases.slice(startIndex, endIndex);

  return NextResponse.json({
    data: paginatedCases,
    total: cases.length,
    totalPages: Math.ceil(cases.length / itemsPerPage),
    currentPage: page,
  });
}
