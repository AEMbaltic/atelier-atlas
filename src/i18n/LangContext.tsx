import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { DICT, LANGS, type Lang } from "./dictionary";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof DICT)[Lang];
};

const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "selraart_lang";

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "lv";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored && LANGS.includes(stored)) return stored;
  const nav = window.navigator.language?.slice(0, 2).toLowerCase();
  if (nav && (LANGS as string[]).includes(nav)) return nav as Lang;
  return "lv";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("lv");

  useEffect(() => {
    setLangState(detectInitialLang());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
    }
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, t: DICT[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
