-- Tabla de leads del flujo de entrenamiento (/entrenamiento → /entrenamiento/vsl).
-- Se ejecuta manualmente contra la base Postgres (Vercel Postgres / Neon):
--   psql "$DATABASE_URL" -f db/migrations/0001_leads_entrenamiento.sql

CREATE TABLE IF NOT EXISTS leads_entrenamiento (
  id           BIGSERIAL PRIMARY KEY,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  nombre       TEXT NOT NULL,
  email        TEXT NOT NULL,
  telefono     TEXT NOT NULL,
  etapa        TEXT NOT NULL,
  source       TEXT NOT NULL DEFAULT 'entrenamiento_form',
  user_agent   TEXT,
  referrer     TEXT,
  utm          JSONB
);

CREATE INDEX IF NOT EXISTS leads_entrenamiento_email_idx
  ON leads_entrenamiento (email);

CREATE INDEX IF NOT EXISTS leads_entrenamiento_created_at_idx
  ON leads_entrenamiento (created_at DESC);
