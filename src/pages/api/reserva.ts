export const prerender = false;

import type { APIRoute } from "astro";
import { GetReservas, RequestReserva } from "../../lib/db/db";
import { reservasInsertSchema, reservasTable } from "../../lib/db/schema";
import * as z from "zod/mini";
import { sha512 } from "../../lib/utils/hash";
import { verifySolution } from "altcha-lib";
import { hmacKey } from "../../lib/challenge/challenge";

export const POST = (async ({ request, redirect }) => {
    
  try {
    
    const formData = await request.formData()
    
    const payload = formData.get("altcha")?.toString()
    
    if (payload === undefined) throw new Error("no payload") 
    if (!hmacKey) throw new Error("cannot get challenge")  
    
    const ok = await verifySolution(payload, hmacKey, true);
    
    if (!ok) throw new Error("verify solution failed")
    
    const reservaMailUnsafe = formData.get("email")?.toString()!
    const reservaMail = z.email().parse(reservaMailUnsafe)
    
    const reservaUnsafe: typeof reservasTable.$inferInsert = {
      full_name: formData.get("full_name")?.toString()!,
      emailHash: await sha512(reservaMail)
    }
    
    const reserva = reservasInsertSchema.parse(reservaUnsafe)
    
    await RequestReserva(reserva)
    
    // Send mail
    // 
    // End send mail
    
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