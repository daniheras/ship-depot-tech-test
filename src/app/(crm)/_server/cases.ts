'use server'

import { db } from "@/db/db";
import { z } from "zod";
import { CaseSchema } from "./schema";

export const getCases = async () => {
  const rawData = await db.query.cases.findMany({
    limit: 30,
    with: {
      mechanic: true
    }
  });
  const parsedData = z.array(CaseSchema).parse(rawData);
  return await parsedData;
}