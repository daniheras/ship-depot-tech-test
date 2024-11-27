import { db } from "@/db/db";
import { cases } from "@/db/schema";
import { sql } from "drizzle-orm";
import { CasesPerMonth, CasesPerMonthSchema, MechanicTotalCases, MechanicTotalCasesSchema } from "./schema";

export const getMechanicTotalCases = async (
  mechanicId: string
): Promise<MechanicTotalCases> => {
  const totalCasesQuery = db
    .select({
      count: sql<number>`COUNT(*)`,
    })
    .from(cases)
    .where(sql`mechanic_id = ${mechanicId}`);

  const totalCasesResult = await totalCasesQuery;

  const casesByStatusQuery = db
    .select({
      status: cases.status,
      count: sql<number>`COUNT(*)`,
    })
    .from(cases)
    .where(sql`mechanic_id = ${mechanicId}`)
    .groupBy(cases.status);

  const casesByStatusResult = await casesByStatusQuery;

  const casesByStatus = casesByStatusResult.reduce((acc, row) => {
    acc[row.status] = row.count;
    return acc;
  }, {} as Record<string, number>);

  const parsedData = MechanicTotalCasesSchema.parse({
    totalCases: totalCasesResult[0]?.count,
    pending: casesByStatus["pending"],
    finished: casesByStatus["finished"],
    active: casesByStatus["active"],
  });

  return parsedData;
};

export const getMechanicCasesPerMonth = async (mechanicId: string): Promise<CasesPerMonth> => {
  const allMonths = Array.from({ length: 12 }, (_, i) => {
    const month = (i + 1).toString().padStart(2, "0");
    return `2024-${month}`;
  });

  const casesPerMonthQuery = db
    .select({
      month: sql<string>`strftime('%Y-%m', ${cases.closedAt})`,
      count: sql<number>`COUNT(*)`,
    })
    .from(cases)
    .where(
      sql`mechanic_id = ${mechanicId} AND closed_at IS NOT NULL AND strftime('%Y', ${cases.closedAt}) = '2024'`
    )
    .groupBy(sql`strftime('%Y-%m', ${cases.closedAt})`)
    .orderBy(sql`strftime('%Y-%m', ${cases.closedAt})`);

  const casesPerMonthResult = await casesPerMonthQuery;

  const casesMap = casesPerMonthResult.reduce((acc, row) => {
    acc[row.month] = row.count;
    return acc;
  }, {} as Record<string, number>);

  const parsedData = CasesPerMonthSchema.parse(allMonths.map((month) => ({
    month,
    total: casesMap[month] ?? 0,
  })))

  return parsedData;
};
