import { Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-linen/50 bg-bone">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link to="/" className="font-serif text-[20px] tracking-[0.22em] uppercase text-ink">
            SEL RA ART
          </Link>
          <p className="mt-4 max-w-sm text-walnut italic font-serif text-[18px] leading-snug">
            {t.footer.crafted}
          </p>
        </div>
        <div className="space-y-2 text-[13px] text-walnut">
          <div className="label-eyebrow mb-3">{t.contact.studio}</div>
          <div>{t.contact.address}</div>
          <div>{t.contact.phone}</div>
          <a href={`mailto:${t.contact.email}`} className="block hover:text-ink transition-colors">
            {t.contact.email}
          </a>
        </div>
        <div className="space-y-4">
          <div className="label-eyebrow">{t.common.selectLanguage}</div>
          <LanguageSwitcher />
        </div>
      </div>
      <div className="border-t border-linen/40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-[11px] tracking-[0.14em] uppercase text-walnut">
          <div>© {year} SEL RA ART. {t.footer.rights}</div>
          <div>Aptiekas iela 13-35, Rīga · LV</div>
        </div>
      </div>
    </footer>
  );
}
