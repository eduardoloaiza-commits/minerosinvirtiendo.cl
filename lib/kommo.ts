/**
 * Cliente para la integración Kommo. Lee credenciales OAuth desde env vars
 * y rota access_token usando refresh_token persistido en `kommo_tokens`.
 *
 * Si la integración no está completamente configurada, `pushLead` se
 * convierte en no-op y devuelve { skipped: true } para no romper
 * /api/leads — el lead siempre queda en Neon, Kommo es best-effort.
 */
import { getSql } from "@/lib/db";

const SUBDOMAIN = process.env.KOMMO_SUBDOMAIN;
const CLIENT_ID = process.env.KOMMO_CLIENT_ID;
const CLIENT_SECRET = process.env.KOMMO_CLIENT_SECRET;
const REDIRECT_URI = process.env.KOMMO_REDIRECT_URI;
const PIPELINE_ID = process.env.KOMMO_PIPELINE_ID;
const STATUS_ID = process.env.KOMMO_STATUS_ID;

const isPending = (s: string | undefined) => !s || s === "pending";

function isConfigured(): boolean {
  return (
    !isPending(SUBDOMAIN) &&
    !isPending(CLIENT_ID) &&
    !isPending(CLIENT_SECRET) &&
    !isPending(REDIRECT_URI) &&
    !isPending(PIPELINE_ID) &&
    !isPending(STATUS_ID)
  );
}

const apiBase = () => `https://${SUBDOMAIN}.kommo.com`;

type TokenRow = {
  access_token: string;
  refresh_token: string;
  expires_at: string;
};

async function readTokens(): Promise<TokenRow | null> {
  const sql = getSql();
  const rows = await sql`
    SELECT access_token, refresh_token, expires_at::text AS expires_at
    FROM kommo_tokens WHERE id = 1
  `;
  if (rows.length === 0) return null;
  return rows[0] as TokenRow;
}

type TokenResponse = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
};

async function saveTokens(tokens: TokenResponse) {
  const sql = getSql();
  // 60 segundos de margen para evitar usar un token a punto de expirar.
  const expiresAt = new Date(
    Date.now() + (tokens.expires_in - 60) * 1000,
  ).toISOString();
  await sql`
    INSERT INTO kommo_tokens (id, access_token, refresh_token, expires_at, updated_at)
    VALUES (1, ${tokens.access_token}, ${tokens.refresh_token}, ${expiresAt}, now())
    ON CONFLICT (id) DO UPDATE
      SET access_token = EXCLUDED.access_token,
          refresh_token = EXCLUDED.refresh_token,
          expires_at = EXCLUDED.expires_at,
          updated_at = now()
  `;
}

async function refreshAccessToken(refreshToken: string): Promise<TokenResponse> {
  const res = await fetch(`${apiBase()}/oauth2/access_token`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      redirect_uri: REDIRECT_URI,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`kommo_refresh_failed: ${res.status} ${text}`);
  }
  return (await res.json()) as TokenResponse;
}

async function getValidAccessToken(): Promise<string> {
  const row = await readTokens();
  if (!row) throw new Error("kommo_not_seeded");
  const isExpired = new Date(row.expires_at).getTime() <= Date.now();
  if (!isExpired) return row.access_token;
  const refreshed = await refreshAccessToken(row.refresh_token);
  await saveTokens(refreshed);
  return refreshed.access_token;
}

export type KommoLead = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  etapa: string;
  source: string;
  tipoInversion?: string | null;
  ingresos?: string | null;
  ahorros?: string | null;
  meta?: string | null;
};

const META_LABELS: Record<string, string> = {
  primera: "Realizar mi primera inversión inmobiliaria",
  diversificar: "Diversificar mi patrimonio existente",
  credito: "Aprovechar mi capacidad crediticia actual",
  todo: "Todo lo anterior, quiero el panorama completo",
};

type PushResult =
  | { ok: true; leadId: number | string }
  | { ok: false; skipped: true; reason: string }
  | { ok: false; error: string };

export async function pushLead(lead: KommoLead): Promise<PushResult> {
  if (!isConfigured()) {
    return { ok: false, skipped: true, reason: "not_configured" };
  }

  const fullName = `${lead.nombre} ${lead.apellido}`.trim();
  // Tag de origen para distinguir la web emisora cuando conectemos más sitios.
  const originTag = (process.env.KOMMO_ORIGIN_TAG || "MI").trim();
  const tags = [
    originTag,
    lead.source,
    `etapa:${lead.etapa}`,
    lead.tipoInversion ? `formato:${lead.tipoInversion}` : null,
    lead.ingresos ? `ingresos:${lead.ingresos}` : null,
    lead.ahorros ? `ahorros:${lead.ahorros}` : null,
    lead.meta ? `meta:${META_LABELS[lead.meta] ?? lead.meta}` : null,
  ].filter(Boolean) as string[];

  const body = [
    {
      name: `${fullName} — ${lead.etapa}`,
      pipeline_id: Number(PIPELINE_ID),
      status_id: Number(STATUS_ID),
      _embedded: {
        contacts: [
          {
            first_name: lead.nombre,
            last_name: lead.apellido,
            custom_fields_values: [
              {
                field_code: "EMAIL",
                values: [{ value: lead.email, enum_code: "WORK" }],
              },
              {
                field_code: "PHONE",
                values: [{ value: lead.telefono, enum_code: "WORK" }],
              },
            ],
          },
        ],
        tags: tags.map((name) => ({ name })),
      },
    },
  ];

  // Reintentamos una vez si Kommo devuelve 401 — puede pasar si dos
  // requests concurrentes refrescaron el token al mismo tiempo y nuestro
  // cache local quedó atrás respecto a la DB.
  let token = await getValidAccessToken();
  let res = await fetch(`${apiBase()}/api/v4/leads/complex`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (res.status === 401) {
    const row = await readTokens();
    if (row) {
      const refreshed = await refreshAccessToken(row.refresh_token);
      await saveTokens(refreshed);
      token = refreshed.access_token;
      res = await fetch(`${apiBase()}/api/v4/leads/complex`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
    }
  }
  if (!res.ok) {
    const text = await res.text();
    return { ok: false, error: `kommo_create_failed:${res.status}:${text.slice(0, 200)}` };
  }
  const data = (await res.json()) as Array<{ id?: number | string }>;
  const created = Array.isArray(data) ? data[0] : null;
  return { ok: true, leadId: created?.id ?? "unknown" };
}
