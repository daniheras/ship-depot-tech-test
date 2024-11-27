'use server';

import { db } from "@/db/db";
import { sql, eq } from "drizzle-orm";
import { z } from "zod";
import { CaseSchema } from "./schema";
import { cases } from "@/db/schema";

export const getCases = async ({ page = 1, limit = 10, mechanicId }: { page: number, limit: number, mechanicId?: number }) => {
  const offset = (page - 1) * limit;

  const query = db
    .select()
    .from(cases)
    .limit(limit)
    .offset(offset);

  if (mechanicId !== undefined) {
    query.where(eq(cases.mechanicId, mechanicId.toString()));
  }

  const rawData = await query;
  const parsedData = z.array(CaseSchema).parse(rawData);
  return parsedData;
};

export const getTotalCases = async (mechanicId?: number) => {
  const query = db
    .select({ count: sql<number>`COUNT(*)` })
    .from(cases);

  if (mechanicId !== undefined) {
    query.where(eq(cases.mechanicId, mechanicId.toString()));
  }

  const result = await query;
  return result[0]?.count ?? 0;
};
