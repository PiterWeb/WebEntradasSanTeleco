// @ts-check
import 'dotenv/config';
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()] },

  adapter: process.env.VERCEL === "TRUE" ? vercel() : node({
    mode: "standalone"
  }),
});