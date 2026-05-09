-- Restituye los campos de cualificación (ingresos, ahorros, meta) que
-- existían en el form original de /diagnostico. Ahora ambos forms
-- (entrenamiento y diagnostico) los recolectan y persisten.

ALTER TABLE leads_entrenamiento ADD COLUMN IF NOT EXISTS ingresos TEXT;
ALTER TABLE leads_entrenamiento ADD COLUMN IF NOT EXISTS ahorros  TEXT;
ALTER TABLE leads_entrenamiento ADD COLUMN IF NOT EXISTS meta     TEXT;
