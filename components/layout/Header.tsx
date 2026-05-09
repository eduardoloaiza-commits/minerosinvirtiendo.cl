"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ENTRENAMIENTO_URL, LEAD_FORM_URL, LOGO_URL, NAV_LINKS, type NavItem } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isNavActive = (item: NavItem) =>
    item.children
      ? item.children.some((c) => isActive(c.href))
      : isActive(item.href);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 h-[68px] lg:h-[84px] flex items-center justify-between gap-4 lg:gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="Mineros Invirtiendo">
          <Image
            src={LOGO_URL}
            alt="Mineros Invirtiendo"
            width={360}
            height={96}
            priority
            style={{ height: "48px", width: "auto", maxHeight: "56px" }}
            className="object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((item) => {
            const active = isNavActive(item);
            if (item.children) {
              const isOpen = openDropdown === item.label;
              return (
                <DropdownItem
                  key={item.label}
                  item={item}
                  active={active}
                  isOpen={isOpen}
                  onToggle={() =>
                    setOpenDropdown(isOpen ? null : item.label)
                  }
                  onClose={() => setOpenDropdown(null)}
                  pathname={pathname}
                />
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap font-body font-semibold text-[14px] px-3 py-2 rounded-lg transition-colors ${
                  active
                    ? "text-[#B67A2D] bg-[#F5E8D0]"
                    : "text-[#4A463E] hover:text-[#B67A2D] hover:bg-[#F5F0E8]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTAs desktop */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href={ENTRENAMIENTO_URL}
            className="inline-flex items-center gap-1.5 whitespace-nowrap font-heading font-bold text-[12px] text-white px-3.5 py-2 rounded-lg active:scale-95 transition-all shadow-sm shadow-[#FF8C00]/30 bg-gradient-to-r from-[#FF8C00] to-[#E07820] hover:from-[#E07820] hover:to-[#FF8C00]"
          >
            <span
              className="material-symbols-outlined text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              rocket_launch
            </span>
            Entrenamiento
          </Link>
          <Link
            href={LEAD_FORM_URL}
            className="inline-flex items-center gap-1.5 whitespace-nowrap font-heading font-bold text-[12px] bg-[#B67A2D] text-white px-3.5 py-2 rounded-lg hover:bg-[#9A6624] active:scale-95 transition-all shadow-sm"
          >
            Agendar Diagnóstico
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-[#2B2B2B] -mr-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined text-[28px]">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white max-h-[calc(100vh-72px)] overflow-y-auto">
          <nav className="max-w-[1280px] mx-auto px-5 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-[#F5F0E8] pb-2 mb-2">
                  <p className="font-heading font-bold text-[11px] tracking-[2px] uppercase text-[#6E6E6E] px-3 py-2">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block font-body font-semibold text-[15px] px-3 py-2.5 rounded-lg ${
                        isActive(child.href)
                          ? "text-[#B67A2D] bg-[#F5E8D0]"
                          : "text-[#4A463E] hover:text-[#B67A2D]"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-body font-semibold text-[15px] px-3 py-3 rounded-lg border-b border-[#F5F0E8] ${
                    isActive(item.href) ? "text-[#B67A2D]" : "text-[#4A463E] hover:text-[#B67A2D]"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href={ENTRENAMIENTO_URL}
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex justify-center items-center gap-2 font-heading font-bold text-[13px] text-white px-5 py-3 rounded-lg shadow-md shadow-[#FF8C00]/30 bg-gradient-to-r from-[#FF8C00] to-[#E07820]"
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                rocket_launch
              </span>
              Entrenamiento Inmobiliario
            </Link>
            <Link
              href={LEAD_FORM_URL}
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex justify-center items-center gap-2 font-heading font-bold text-[13px] bg-[#B67A2D] text-white px-5 py-3 rounded-lg"
            >
              Agendar Diagnóstico
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ── Dropdown item ── */
function DropdownItem({
  item,
  active,
  isOpen,
  onToggle,
  onClose,
  pathname,
}: {
  item: NavItem;
  active: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  pathname: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Cierra al click fuera
  useEffect(() => {
    if (!isOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [isOpen, onClose]);

  // Cierra al cambiar de ruta
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={`whitespace-nowrap font-body font-semibold text-[14px] px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
          active
            ? "text-[#B67A2D] bg-[#F5E8D0]"
            : "text-[#4A463E] hover:text-[#B67A2D] hover:bg-[#F5F0E8]"
        }`}
      >
        {item.label}
        <span
          className={`material-symbols-outlined text-[18px] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>
      {isOpen && item.children && (
        <div
          role="menu"
          className="absolute left-0 top-full mt-2 w-[320px] bg-white rounded-xl shadow-2xl ring-1 ring-black/5 p-2 animate-[fadeInUp_.18s_ease-out]"
        >
          {item.children.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              role="menuitem"
              onClick={onClose}
              className="block rounded-lg px-3 py-2.5 hover:bg-[#F5E8D0] transition-colors"
            >
              <p className="font-heading font-bold text-[14px] text-[#2B2B2B] leading-snug">
                {c.label}
              </p>
              {c.description && (
                <p className="font-body text-[12px] text-[#6E6E6E] mt-0.5 leading-snug">
                  {c.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
