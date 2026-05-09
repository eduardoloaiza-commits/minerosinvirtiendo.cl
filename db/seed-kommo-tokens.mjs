#!/usr/bin/env node
/**
 * One-off: seedea la tabla kommo_tokens con el resultado del OAuth exchange.
 * Lee los tokens desde el archivo pasado como primer argumento.
 *
 * Uso: DATABASE_URL=... node db/seed-kommo-tokens.mjs <ruta-al-json>
 */
import { readFileSync, unlinkSync } from "node:fs";
import { neon } from "@neondatabase/serverless";

const path = process.argv[2];
if (!path) {
  console.error("Uso: node db/seed-kommo-tokens.mjs <ruta-al-json>");
  process.exit(1);
}

const tokens = JSON.parse(readFileSync(path, "utf8"));
const expiresAt = new Date(Date.now() + (tokens.expires_in - 60) * 1000).toISOString();
const sql = neon(process.env.DATABASE_URL);

await sql`
  INSERT INTO kommo_tokens (id, access_token, refresh_token, expires_at, updated_at)
  VALUES (1, ${tokens.access_token}, ${tokens.refresh_token}, ${expiresAt}, now())
  ON CONFLICT (id) DO UPDATE
    SET access_token = EXCLUDED.access_token,
        refresh_token = EXCLUDED.refresh_token,
        expires_at = EXCLUDED.expires_at,
        updated_at = now()
`;

const rows = await sql`
  SELECT id, expires_at, updated_at,
         length(access_token) AS access_len,
         length(refresh_token) AS refresh_len
  FROM kommo_tokens WHERE id = 1
`;
console.log("seeded:", rows[0]);

unlinkSync(path);
console.log("temp tokens file removed");
