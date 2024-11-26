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

export const ships = sqliteTable('ships', {
  id: id(),
  createdAt: createdAt(),
  model: text('model').notNull(),
  name: text('name').notNull(),
  image: text('image').notNull(),
});

export const cases = sqliteTable('cases', {
  id: id(),
  createdAt: createdAt(),
  shipId: text('ship_id')
    .notNull()
    .references(() => ships.id),
  mechanicId: text('mechanic_id')
    .references(() => mechanics.id),
  status: text().$type<"pending" | "active" | "repaired">().default("pending"),
  openDate: text('open_date').notNull(),
  closeDate: text('close_date'),
});

export const casesRelations = relations(cases, ({ one }) => ({
  ship: one(ships, {
    fields: [cases.shipId],
    references: [ships.id],
  }),
  mechanic: one(mechanics, {
    fields: [cases.mechanicId],
    references: [mechanics.id],
  }),
}));

export const mechanicsRelations = relations(mechanics, ({ many }) => ({
  cases: many(cases),
}));
