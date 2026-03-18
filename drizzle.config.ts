import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/lib/db/schema.ts',
  dialect: process.env.LOCAL === "true" ? 'sqlite' : 'turso', // cambiar a sqlite para usar en local
  dbCredentials: {
    url: process.env.DB_FILE_NAME!,
    [process.env.LOCAL === "true" ? "token" : "authToken"]: process.env.DB_TOKEN!, // eliminar para usar en local o usar token
  },
});
