import { createContext, useContext, useState, ReactNode } from 'react';
import { useApp, Language } from './AppContext';
import { translations, Translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { setUserData } = useApp();
  const [language, setLanguageState] = useState<Language>('en');
  
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setUserData({ language: lang }); // Sync to AppContext
  };
  
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
