import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LangContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { to: string; label: string }[] = [
    { to: "/", label: t.nav.home },
    { to: "/work", label: t.nav.work },
    { to: "/atelier", label: t.nav.atelier },
    { to: "/collaborations", label: t.nav.collaborations },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bone/95 backdrop-blur-sm border-b border-linen/40" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Link to="/" className="font-serif text-[20px] tracking-[0.22em] uppercase text-ink">
          SEL RA ART
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[12px] tracking-[0.16em] uppercase text-ink hover:text-walnut transition-colors duration-200"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-walnut" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="md:hidden text-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <span className="text-[11px] tracking-[0.18em] uppercase">{open ? "Close" : "Menu"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-linen/40 bg-bone">
          <nav className="px-6 py-8 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-serif text-[28px] text-ink"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-linen/40">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
