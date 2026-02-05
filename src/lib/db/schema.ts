import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { createInsertSchema } from 'drizzle-zod';

export const reservasTable = sqliteTable('reservas', {
  id: integer().primaryKey({ autoIncrement: true }).notNull(),
  full_name: text('full_name').notNull(),
  email: text('email').unique()
});

export const reservasInsertSchema = createInsertSchema(reservasTable)