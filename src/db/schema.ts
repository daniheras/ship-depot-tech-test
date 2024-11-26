import { randomUUID } from "crypto";
import { relations, sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

const id = () =>
  text("id")
    .primaryKey()
    .$default(() => randomUUID());

const createdAt = () =>
  text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull();


export const users = sqliteTable('users', {
  id: id(),
  createdAt: createdAt(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  image: text('image').notNull(),
});

export const mechanics = sqliteTable('mechanics', {
  id: id(),
  createdAt: createdAt(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  image: text('image').notNull(),
});

export const cases = sqliteTable("cases", {
  id: text("id").primaryKey(),
  createdAt: text("created_at").notNull().default("CURRENT_TIMESTAMP"),
  shipModel: text("ship_model").notNull(),
  shipImage: text("ship_image").notNull(),
  mechanicId: text("mechanic_id").references(() => mechanics.id),
  status: text("status", {
    enum: ["active", "pending", "finished"],
  }).notNull(),
  closedAt: text("closed_at"),
});

export const mechanicsRelations = relations(mechanics, ({ many }) => ({
  cases: many(cases),
}));

export const casesRelations = relations(cases, ({ one }) => ({
  mechanic: one(mechanics, {
    fields: [cases.mechanicId],
    references: [mechanics.id],
  }),
}));