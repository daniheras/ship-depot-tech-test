import 'dotenv/config'
import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import * as schema from './schema'

const client = createClient({
  url: "libsql://ship-depot-tech-daniheras.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJleHAiOjE3Mzc4MDk4NDYsImlhdCI6MTczMjYyNTg0NiwiaWQiOiI0ZTFlMWEwMC1mM2ExLTQ3YzItODIxYy1mYWE0ZWMyY2UyYTgifQ.ksbTSnMlaqPccQ8mpsDZF6IdUvBZsYHM_Deo95QdDCa_Vu7bHeGrfRQDCQLbr1mYapLIKLRxEgv54IsI41bWBQ",
})

export const db = drizzle(client, { schema })