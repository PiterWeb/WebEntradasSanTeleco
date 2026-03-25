export const prerender = false;

import type { APIRoute } from "astro";
import { GetReservaByIdAndEmailHash } from "../../../lib/db/db";

export const GET = (async ({ request }) => {
  
  try {
    
    const url = new URL(request.url);
    const query = new URLSearchParams(url.searchParams)
    
    console.log(url, query)
    
    const id = query.get("id")
    const emailHash = query.get("email_hash")
    
    if (!id || !emailHash) throw new Error()
    
    const reserva = await GetReservaByIdAndEmailHash(id, emailHash)
    
    return Response.json(reserva)
  } catch (e) {
    console.error(e)
    return Response.json({error: e})
  }
  
}) satisfies APIRoute;