'use server'

import { db } from "@/db/db";
import { z } from "zod";
import { MechanicSchema } from "./schema";

export const getMechanics = async () => {
  const rawData = await db.query.mechanics.findMany();
  const parsedData = z.array(MechanicSchema).parse(rawData);
  return await parsedData;
}