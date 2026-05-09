import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, LEAD_FORM_URL, LOGO_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-slate-100 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="inline-block mb-4" aria-label="Mineros Invirtiendo">
            <Image
              src={LOGO_URL}
              alt="Mineros Invirtiendo"
              width={260}
              height={64}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="text-[#6E6E6E] text-[14px] leading-relaxed mb-5">
            Expertos en inversión inmobiliaria al servicio del profesional de la minería chileno. Estrategia, estructura tributaria eficiente y cero comisiones para ti.
          </p>
          <Link
            href={LEAD_FORM_URL}
            className="inline-flex items-center gap-2 font-heading font-bold text-[12px] tracking-[1.5px] uppercase bg-[#B67A2D] text-white px-5 py-2.5 rounded-lg hover:bg-[#9A6624] transition-colors"
          >
            Agendar diagnóstico
          </Link>
        </div>

        {FOOTER_LINKS.map((col) => (
          <div key={col.title}>
            <h4 className="font-heading font-bold text-[13px] text-[#2B2B2B] mb-5 uppercase tracking-wide">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#6E6E6E] hover:text-[#B67A2D] text-[14px] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-6 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-[#6E6E6E] text-[12px]">
          © {new Date().getFullYear()} Mineros Invirtiendo · minerosinvirtiendo.cl
        </p>
        <p className="text-[#C4BCA9] text-[11px]">
          Inversión inmobiliaria y optimización tributaria para mineros en Chile
        </p>
      </div>
    </footer>
  );
}
