import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let client: NeonQueryFunction<false, false> | null = null;

/**
 * Cliente Neon HTTP, inicializado de forma perezosa para que `next build`
 * pueda colectar las rutas API sin tener `DATABASE_URL` en el entorno de
 * build (Vercel lo resuelve recién en runtime de la Function).
 */
export function getSql(): NeonQueryFunction<false, false> {
  if (client) return client;
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Configure the Neon Vercel integration or add it to your env.",
    );
  }
  client = neon(url);
  return client;
}
