"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DICTS, LANGS } from "@/content/i18n";

const LangContext = createContext({ lang: "vi", setLang: () => {}, t: DICTS.vi });

export function LangProvider({ children }) {
  const [lang, setLangState] = useState("vi");

  // Restore the previous choice after hydration, so server and client agree
  // on the first render.
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved && LANGS.includes(saved)) setLangState(saved);
    } catch {
      // private mode — fall back to the default
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next) => {
    if (!LANGS.includes(next)) return;
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      // the choice just won't persist
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: DICTS[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

/** Shorthand: const t = useT(); then t.home.heroTitle */
export const useT = () => useContext(LangContext).t;
