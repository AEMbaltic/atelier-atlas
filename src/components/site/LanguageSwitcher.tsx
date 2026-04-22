import { useLang } from "@/i18n/LangContext";
import { LANGS, LANG_LABELS } from "@/i18n/dictionary";

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase">
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(l)}
            className={`transition-colors duration-200 ${
              lang === l ? "text-ink" : "text-walnut hover:text-ink"
            }`}
            aria-current={lang === l ? "true" : undefined}
          >
            {LANG_LABELS[l]}
          </button>
          {i < LANGS.length - 1 && <span className="text-linen">·</span>}
        </span>
      ))}
    </div>
  );
}
