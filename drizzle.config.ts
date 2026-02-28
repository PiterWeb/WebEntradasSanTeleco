import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/lib/db/schema.ts',
  dialect: 'turso', // cambiar a sqlite para usar en local
  dbCredentials: {
    url: process.env.DB_FILE_NAME!,
    authToken: process.env.DB_TOKEN!, // eliminar para usar en local o usar token
  },
});
