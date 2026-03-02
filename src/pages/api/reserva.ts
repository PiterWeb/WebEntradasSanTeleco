export const prerender = false;

import type { APIRoute } from "astro";
import { DeleteReserva, GetReservas, RequestReserva } from "../../lib/db/db";
import { reservasInsertSchema, reservasTable } from "../../lib/db/schema";
import * as z from "zod/mini";
import { sha512 } from "../../lib/utils/hash";
import { verifySolution } from "altcha-lib";
import { hmacKey } from "../../lib/challenge/challenge";
import { Resend } from 'resend';
import { getSecret } from "astro:env/server";
import { toDataURL } from "qrcode"

const resend = new Resend(getSecret("RESEND_API_KEY")!);

export const POST = (async ({ request, redirect }) => {
    
  try {
    
    const formData = await request.formData()
    
    const payload = formData.get("altcha")?.toString()
    
    if (payload === undefined) throw new Error("no payload") 
    if (!hmacKey) throw new Error("cannot get challenge")  
    
    const ok = await verifySolution(payload, hmacKey, true);
    
    if (!ok) throw new Error("verify solution failed")
    
    const reservaMailUnsafe = formData.get("email")?.toString()!
    const reservaMail = z.email().parse(reservaMailUnsafe.trim())
    
    const emailHash = await sha512(reservaMail)
    
    const reservaUnsafe: typeof reservasTable.$inferInsert = {
      full_name: formData.get("full_name")?.toString()!,
      emailHash: emailHash
    }
    
    const reserva = reservasInsertSchema.parse(reservaUnsafe)
    
    const resultReserva = (await RequestReserva(reserva))[0]
    
    try {
  
      // Qr code
      const qrBase64 = await toDataURL(JSON.stringify({
        id: resultReserva.id,
        email_hash: emailHash
      }))
      
      // Send mail
      const { data, error } = await resend.emails.send({
        from: getSecret("EMAIL_ADDRESS"),
        to: reservaMail,
        template: {
          id: 'reservation-confirmation', // Plantilla definida en resend.com
          variables: {
            nombre_completo: reserva.full_name
          },
        },
        attachments: [  
          {
            content: qrBase64.slice("data:image/png;base64,".length),
            filename: "qr.png",
            contentId: "qr"
          }
        ]
      });
      
      if (error) {
        throw error
      }
      
      console.log(data)
    
    } catch(e) {
      
      console.error(e)
      
      if (resultReserva.id) {
        console.log(`Fallo reserva, borrando registro con id ${resultReserva.id} de base de datos`)
        await DeleteReserva(resultReserva.id)
      }
      
      throw e
    }
    
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