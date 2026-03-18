import { getSecret } from "astro:env/server";
import { reservasTable } from './schema';
import { eq } from 'drizzle-orm'

const db = await async function () {
  
  const local = getSecret("LOCAL") === "true"
  
  if (local) {
    // Este cliente soporta file://
    const { drizzle } = await import('drizzle-orm/libsql')
    
    return drizzle({
      connection: {
        url: getSecret("DB_FILE_NAME")!,
        authToken: getSecret("DB_TOKEN"),
      }
    });
    
  } 
  
  const { drizzle } = await import('drizzle-orm/libsql/web');
  
  return drizzle({
    connection: {
      url: getSecret("DB_FILE_NAME")!,
      authToken: getSecret("DB_TOKEN"),
    }
  });
  
}()


export async function GetReservas() {
  return await db.select().from(reservasTable)
}

export async function RequestReserva(reserva: typeof reservasTable.$inferInsert) {
  return await db.insert(reservasTable).values(reserva).returning({ id: reservasTable.id})
}

export async function GetReservaById(id: string) {
  return await db.select().from(reservasTable).where(eq(reservasTable.id, id))
}

export async function DeleteReserva(id: string) {
  return await db.delete(reservasTable).where(eq(reservasTable.id, id))
}