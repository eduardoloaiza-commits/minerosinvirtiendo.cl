#!/usr/bin/env node
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

const here = dirname(fileURLToPath(import.meta.url));
const migrationsDir = join(here, "migrations");

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set. Run with `vercel env pull` first or export it.");
  process.exit(1);
}

const pool = new Pool({ connectionString: url });
const files = readdirSync(migrationsDir).filter((f) => f.endsWith(".sql")).sort();

if (files.length === 0) {
  console.log("No migrations found.");
  process.exit(0);
}

try {
  for (const file of files) {
    const path = join(migrationsDir, file);
    const text = readFileSync(path, "utf8");
    console.log(`Running ${file}...`);
    await pool.query(text);
    console.log(`  ok`);
  }
  console.log("All migrations applied.");
} finally {
  await pool.end();
}
