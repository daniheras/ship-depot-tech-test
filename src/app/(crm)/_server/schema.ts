import { z } from "zod";

export const MechanicSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  name: z.string(),
  description: z.string(),
  image: z.string().url(),
})

export type Mechanic = z.infer<typeof MechanicSchema>;

export const CaseSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  shipModel: z.string(),
  shipImage: z.string().url(),
  mechanicId: z.string().nullable(),
  status: z.enum(["active", "pending", "finished"]),
  closedAt: z.string().nullable(),
  budget: z.string().nullable(),
});

export type Case = z.infer<typeof CaseSchema>;

export const MechanicTotalCasesSchema = z.object({
  totalCases: z.number().default(0),
  pending: z.number().default(0),
  finished: z.number().default(0),
  active: z.number().default(0),
});

export type MechanicTotalCases = z.infer<typeof MechanicTotalCasesSchema>;

export const CasesPerMonthSchema = z.array(
  z.object({
    month: z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, {
      message: "The month must be in the format YYYY-MM",
    }),
    total: z.number().min(0, { message: "Total must be a positive number" }),
  })
);

export type CasesPerMonth = z.infer<typeof CasesPerMonthSchema>;