import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center bg-[#F5F0E8] pt-[68px] lg:pt-[84px] py-24 px-6">
        <div className="text-center max-w-[480px]">
          <p className="font-heading font-extrabold text-[80px] text-[#B67A2D] leading-none mb-4">
            404
          </p>
          <h1 className="font-heading font-bold text-[#2B2B2B] text-[26px] mb-4">
            Página no encontrada
          </h1>
          <p className="text-[#4A463E] text-[15px] mb-8">
            La página que buscas no existe o fue movida. Vuelve al inicio para explorar el sitio.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#B67A2D] text-white px-6 py-3.5 rounded-xl font-heading font-bold text-[14px] hover:bg-[#9A6624] transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
