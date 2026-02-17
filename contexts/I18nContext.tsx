
import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { translations, Language, TranslationKeys } from '../i18n/translations';
import { LocalizedText } from '../types/assessment';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => any;
  tl: (localized: LocalizedText | undefined) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('mindmetrics_lang');
    if (saved && ['pt', 'en', 'es', 'fr', 'de'].includes(saved)) {
      return saved as Language;
    }
    return 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('mindmetrics_lang', lang);
    document.documentElement.lang = lang;
  };

  const getDeepValue = (obj: any, path: string) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  const t = useCallback((key: TranslationKeys): any => {
    const value = getDeepValue((translations as any)[language], key);
    if (value !== undefined) return value;

    // Fallback prioritário para Inglês
    const fallbackEn = getDeepValue((translations as any)['en'], key);
    if (fallbackEn !== undefined) return fallbackEn;

    // Fallback final para a tag
    return key;
  }, [language]);

  const tl = useCallback((localized: LocalizedText | undefined): string => {
    if (!localized) return "";
    return localized[language] || localized['en'] || localized['pt'] || Object.values(localized)[0] || "";
  }, [language]);

  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t,
    tl
  }), [language, t, tl]);

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
};
