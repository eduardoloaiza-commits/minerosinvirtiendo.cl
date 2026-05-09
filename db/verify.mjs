#!/usr/bin/env node
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}

const pool = new Pool({ connectionString: url });
try {
  const tbl = await pool.query(
    `SELECT column_name, data_type, is_nullable, column_default
     FROM information_schema.columns
     WHERE table_name = 'leads_entrenamiento'
     ORDER BY ordinal_position`
  );
  console.log("Columns in leads_entrenamiento:");
  console.table(tbl.rows);

  const idx = await pool.query(
    `SELECT indexname, indexdef
     FROM pg_indexes
     WHERE tablename = 'leads_entrenamiento'
     ORDER BY indexname`
  );
  console.log("Indexes:");
  console.table(idx.rows);
} finally {
  await pool.end();
}
