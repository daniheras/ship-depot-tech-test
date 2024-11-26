import { z } from "zod";

export const MechanicSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  name: z.string(),
  description: z.string(),
  image: z.string().url(),
})

export type Mechanic = z.infer<typeof MechanicSchema>;