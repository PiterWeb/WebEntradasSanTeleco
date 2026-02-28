import type { APIRoute } from "astro";
import { hmacKey } from "../../lib/challenge/challenge";
import { createChallenge } from "altcha-lib";

export const GET = (async () => {
  
  try {
    
    if (!hmacKey) throw new Error("cannot get challenge")
    
    const challenge = await createChallenge({
      hmacKey,
      // expires: new Date(Date.now() + 1000 * 60 * 5) // Expiración 5 minutos
    });
    
    return Response.json(challenge)
  
  } catch(e) {
    
    console.error(e)
    
    return new Response("error", {
      status: 500
    })
    
  }
  
  
}) satisfies APIRoute;