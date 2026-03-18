// @ts-check
import 'dotenv/config';
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const adapter = async function() {
  if (process.env.LOCAL === "true") {
    const nodejs = (await import("@astrojs/node")).default
    
    return nodejs({
      mode: "standalone"
    })
  }
  
  const vercel = (await import("@astrojs/vercel")).default
  
  return vercel()
}()

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  adapter: await adapter,
  base: "/st/",
});