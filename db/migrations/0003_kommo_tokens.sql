-- Tabla single-row para guardar los tokens OAuth de Kommo.
-- Kommo rota el refresh_token cada vez que se usa, por eso necesitamos
-- persistencia transaccional en lugar de env vars estáticas.

CREATE TABLE IF NOT EXISTS kommo_tokens (
  id            INT PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  access_token  TEXT NOT NULL,
  refresh_token TEXT NOT NULL,
  expires_at    TIMESTAMPTZ NOT NULL,
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
