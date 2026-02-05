import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { reservasTable } from './schema';

const db = drizzle(process.env.DB_FILE_NAME!);

export async function GetReservas() {
  return await db.select().from(reservasTable)
}

export async function RequestReserva(reserva: typeof reservasTable.$inferInsert) {
  return await db.insert(reservasTable).values(reserva)
}