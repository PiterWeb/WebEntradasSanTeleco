import { getSecret } from "astro:env/server";

export const hmacKey = getSecret("HMAC_KEY")