"use client";

import { createContext, useContext, useState } from "react";

const LangContext = createContext({ lang: "en", setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

/** Pick the active-language string out of a { en, vi } pair. */
export function useT(dict) {
  const { lang } = useLang();
  return (key) => dict[lang]?.[key] ?? dict.en[key];
}
