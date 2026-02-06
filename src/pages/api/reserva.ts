export const prerender = false;

import type { APIRoute } from "astro";
import { GetReservas, RequestReserva } from "../../lib/db/db";
import { reservasInsertSchema, reservasTable } from "../../lib/db/schema";
import * as z from "zod/mini";
import { sha512 } from "../../lib/utils/hash";

export const POST = (async ({ request, redirect }) => {
    
  try {
    
    const formData = await request.formData()
    
    const reservaMailUnsafe = formData.get("email")?.toString()!
    const reservaMail = z.email().parse(reservaMailUnsafe)
    
    const reservaUnsafe: typeof reservasTable.$inferInsert = {
      full_name: formData.get("full_name")?.toString()!,
      emailHash: await sha512(reservaMail)
    }
    
    const reserva = reservasInsertSchema.parse(reservaUnsafe)
    
    await RequestReserva(reserva)
    
    // Send mail
    
    return redirect(`/reservado`)
    
  } catch(e) {
    
    console.error(e)
    
    return redirect("/fallo-reserva")
    
  }
  
}) satisfies APIRoute;

// export const GET = (async () => {
  
//   const reservas = await GetReservas()
  
//   return new Response(
//     JSON.stringify(reservas)
//   )
// }) satisfies APIRoute;