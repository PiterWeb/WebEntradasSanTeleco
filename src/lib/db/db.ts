import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql/web';
import { reservasTable } from './schema';

const db = drizzle({
  connection: {
    url: process.env.DB_FILE_NAME!,
    authToken: process.env.DB_TOKEN
  }
});

export async function GetReservas() {
  return await db.select().from(reservasTable)
}

export async function RequestReserva(reserva: typeof reservasTable.$inferInsert) {
  return await db.insert(reservasTable).values(reserva)
}