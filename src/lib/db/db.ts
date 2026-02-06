import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql/web';
import { reservasTable } from './schema';
import { eq } from 'drizzle-orm'

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

export async function GetReservaById(id: string) {
  return await db.select().from(reservasTable).where(eq(reservasTable.id, id))
}