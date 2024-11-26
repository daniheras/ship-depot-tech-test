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