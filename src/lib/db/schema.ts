import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { createInsertSchema } from 'drizzle-zod';

export const reservasTable = sqliteTable('reservas', {
  id: integer("id").primaryKey({ autoIncrement: true }).notNull(),
  full_name: text('full_name', {length: 60}).notNull(),
  email: text('email', {length: 60}).notNull().unique()
});

export const reservasInsertSchema = createInsertSchema(reservasTable)
