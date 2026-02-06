import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema } from 'drizzle-zod';

export const reservasTable = sqliteTable('reservas', {
  id: text("id").$defaultFn(() => crypto.randomUUID()).notNull().unique().primaryKey(),
  full_name: text('full_name', { length: 60 }).notNull(),
  verified: integer('verified', {mode: 'boolean'}).default(false),
  emailHash: text('email').notNull().unique()
});

export const reservasInsertSchema = createInsertSchema(reservasTable)
