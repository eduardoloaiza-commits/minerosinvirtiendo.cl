import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SchemaOrg from "@/components/SchemaOrg";
import DeferredWidgets from "@/components/ui/DeferredWidgets";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://minerosinvirtiendo.cl"),
  title: {
    default: "Inversión Inmobiliaria para Mineros en Chile | Construye tu patrimonio",
    template: "%s | Mineros Invirtiendo",
  },
  description:
    "Construye tu libertad financiera. Asesoría experta en inversión inmobiliaria y gestión patrimonial para profesionales de la minería en Chile. Sin comisiones al cliente.",
  keywords: [
    "inversión inmobiliaria mineros",
    "invertir en departamentos",
    "crédito hipotecario mineros",
    "plusvalía inmobiliaria",
    "patrimonio neto mineros",
    "asesoría financiera minería Chile",
    "entrenamiento inversión minería",
  ],
  authors: [{ name: "Mineros Invirtiendo" }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://minerosinvirtiendo.cl",
    siteName: "Mineros Invirtiendo",
    title: "Inversión Inmobiliaria para Mineros en Chile | Construye tu patrimonio",
    description:
      "Profesionales de la minería y especialistas inmobiliarios con experiencia. Más que asesores, somos tus amigos financieros: te ayudamos a invertir sin comisiones para el cliente.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mineros Invirtiendo · Construye tu patrimonio",
    description:
      "Expertos en inversión inmobiliaria al servicio de la industria minera. Estructura tributaria, gestión patrimonial y cero comisiones.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={poppins.variable}
    >
      <head>
        {/* Material Symbols: subset por icon_names para servir solo los
            íconos usados en el sitio. Si agregas un ícono nuevo en algún
            componente, también debes incluirlo en el query string. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=account_balance,account_circle,analytics,apartment,architecture,arrow_forward,auto_fix_high,autorenew,balance,bookmark,calendar_month,calendar_today,chat,check,check_circle,close,credit_score,event,expand_more,fact_check,family_restroom,flag,group,handshake,help,hourglass_empty,info,insights,local_hospital,local_offer,location_city,lock,mark_email_read,medical_services,paid,person,play_arrow,play_circle,priority_high,receipt,receipt_long,rocket_launch,schedule,security,shield,shield_lock,stacked_bar_chart,switch_access_shortcut,timeline,trending_down,trending_up,verified,visibility,volume_off,volume_up,vpn_key,warning&display=block"
        />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />

        <SchemaOrg />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
        <DeferredWidgets />
      </body>
    </html>
  );
}
