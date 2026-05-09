import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";
import { SITE_URL } from "@/lib/constants";
import { ETAPAS } from "@/lib/etapas";
import { FORMATOS } from "@/lib/marketplace";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; frequency: "weekly" | "monthly" | "daily" }[] = [
    { path: "",                                                           priority: 1.0, frequency: "weekly" },
    { path: "/servicios/inversion-departamentos-alta-plusvalia",          priority: 0.9, frequency: "monthly" },
    { path: "/servicios/transformate-en-inversionista",                   priority: 0.8, frequency: "monthly" },
    { path: "/metodo",                                                    priority: 0.7, frequency: "monthly" },
    { path: "/testimonios",                                               priority: 0.75, frequency: "monthly" },
    { path: "/educacion-financiera-para-mineros",                         priority: 0.7, frequency: "weekly" },
    { path: "/quienes-somos",                                             priority: 0.6, frequency: "monthly" },
    { path: "/diagnostico",                                               priority: 0.8, frequency: "monthly" },
    { path: "/entrenamiento",                                             priority: 0.9, frequency: "monthly" },
    { path: "/entrenamiento/vsl",                                         priority: 0.85, frequency: "monthly" },
    { path: "/marketplace",                                               priority: 0.9, frequency: "monthly" },
    { path: "/politicas-de-privacidad",                                   priority: 0.3, frequency: "monthly" },
  ];

  const base: MetadataRoute.Sitemap = routes.map(({ path, priority, frequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: frequency,
    priority,
  }));

  const articles: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${SITE_URL}/educacion-financiera-para-mineros/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const etapas: MetadataRoute.Sitemap = ETAPAS.map((e) => ({
    url: `${SITE_URL}/etapa/${e.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const marketplace: MetadataRoute.Sitemap = FORMATOS.map((f) => ({
    url: `${SITE_URL}/marketplace/${f.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...base, ...articles, ...etapas, ...marketplace];
}
