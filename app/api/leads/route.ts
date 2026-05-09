import { getSql } from "@/lib/db";
import { pushLead as pushLeadToKommo } from "@/lib/kommo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  nombre?: unknown;
  apellido?: unknown;
  email?: unknown;
  telefono?: unknown;
  etapa?: unknown;
  ingresos?: unknown;
  ahorros?: unknown;
  meta?: unknown;
  tipo_inversion?: unknown;
  source?: unknown;
  utm?: unknown;
};

const isStr = (v: unknown): v is string => typeof v === "string";
const trim = (v: unknown) => (isStr(v) ? v.trim() : "");
const nullableTrim = (v: unknown) => {
  const t = trim(v);
  return t.length === 0 ? null : t;
};

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function isValidPhone(s: string) {
  return s.replace(/\D/g, "").length >= 8;
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const nombre = trim(body.nombre);
  const apellido = trim(body.apellido);
  const email = trim(body.email).toLowerCase();
  const telefono = trim(body.telefono);
  const etapa = trim(body.etapa);
  const ingresos = nullableTrim(body.ingresos);
  const ahorros = nullableTrim(body.ahorros);
  const meta = nullableTrim(body.meta);
  const tipoInversion = nullableTrim(body.tipo_inversion);
  const source = trim(body.source) || "entrenamiento_form";
  // Origen identifica la web emisora del lead. Configurable por env para
  // que el día que conectemos otra propiedad solo cambie la variable.
  const origen = (process.env.LEAD_ORIGIN || "MedicosInvirtiendo").trim();

  if (nombre.length < 2) {
    return Response.json({ ok: false, error: "invalid_nombre" }, { status: 400 });
  }
  if (apellido.length < 2) {
    return Response.json({ ok: false, error: "invalid_apellido" }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }
  if (!isValidPhone(telefono)) {
    return Response.json({ ok: false, error: "invalid_telefono" }, { status: 400 });
  }
  if (!etapa) {
    return Response.json({ ok: false, error: "invalid_etapa" }, { status: 400 });
  }

  const utm =
    body.utm && typeof body.utm === "object" && !Array.isArray(body.utm)
      ? (body.utm as Record<string, unknown>)
      : null;

  const headers = request.headers;
  const userAgent = headers.get("user-agent") ?? null;
  const referrer = headers.get("referer") ?? null;

  try {
    const sql = getSql();
    const rows = await sql`
      INSERT INTO leads_entrenamiento
        (nombre, apellido, email, telefono, etapa, ingresos, ahorros, meta,
         tipo_inversion, source, origen, user_agent, referrer, utm)
      VALUES
        (${nombre}, ${apellido}, ${email}, ${telefono}, ${etapa},
         ${ingresos}, ${ahorros}, ${meta}, ${tipoInversion}, ${source},
         ${origen}, ${userAgent}, ${referrer},
         ${utm ? JSON.stringify(utm) : null}::jsonb)
      RETURNING id, created_at
    `;
    const row = rows[0] as { id: string | number; created_at: string };

    // Best-effort push a Kommo. Si falla, el lead queda en Neon y el form
    // sigue dando éxito al usuario — la integración es non-blocking.
    try {
      const kommoResult = await pushLeadToKommo({
        nombre,
        apellido,
        email,
        telefono,
        etapa,
        source,
        tipoInversion,
        ingresos,
        ahorros,
        meta,
      });
      if ("error" in kommoResult) {
        console.error("[api/leads] kommo push failed", kommoResult.error);
      } else if ("skipped" in kommoResult) {
        console.warn("[api/leads] kommo push skipped:", kommoResult.reason);
      }
    } catch (err) {
      console.error("[api/leads] kommo push threw", err);
    }

    return Response.json({ ok: true, id: row.id });
  } catch (err) {
    console.error("[api/leads] insert failed", err);
    return Response.json(
      { ok: false, error: "insert_failed" },
      { status: 500 },
    );
  }
}
