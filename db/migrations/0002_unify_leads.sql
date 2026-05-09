-- Unifica el form de /entrenamiento con el de /diagnostico:
-- ambos persisten en la misma tabla con los mismos campos básicos.
-- Idempotente para que correr db:migrate dos veces no rompa nada.

ALTER TABLE leads_entrenamiento ADD COLUMN IF NOT EXISTS apellido       TEXT;
ALTER TABLE leads_entrenamiento ADD COLUMN IF NOT EXISTS tipo_inversion TEXT;
