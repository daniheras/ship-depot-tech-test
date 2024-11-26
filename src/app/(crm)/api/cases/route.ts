import { NextResponse } from "next/server";
import { data as cases } from "@/mock/cases.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10); // Página solicitada
  const itemsPerPage = 10; // Número de elementos por página
  const mechanicId = searchParams.get("mechanic_id"); // ID del mecánico seleccionado

  // Filtrar los casos por mechanic_id si está presente
  const filteredCases = mechanicId
    ? cases.filter((c) => c.mechanic_id?.toString() === mechanicId)
    : cases;

  // Calcular los índices de la paginación
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Obtener los elementos de la página actual
  const paginatedCases = filteredCases.slice(startIndex, endIndex);

  return NextResponse.json({
    data: paginatedCases,
    total: filteredCases.length,
    totalPages: Math.ceil(filteredCases.length / itemsPerPage),
    currentPage: page,
  });
}
