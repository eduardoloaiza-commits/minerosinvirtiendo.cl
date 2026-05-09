-- Identifica qué web envió el lead (medicosinvirtiendo, otra propiedad
-- futura, etc.). Default a 'MedicosInvirtiendo' para que los registros
-- históricos queden coherentes sin tener que backfillear.

ALTER TABLE leads_entrenamiento
  ADD COLUMN IF NOT EXISTS origen TEXT NOT NULL DEFAULT 'MedicosInvirtiendo';

CREATE INDEX IF NOT EXISTS leads_entrenamiento_origen_idx
  ON leads_entrenamiento (origen);
