import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';
import { Language } from '../i18n/translations';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10"
      >
        <Globe size={16} className="text-sage" />
        <span className="text-[10px] font-black uppercase tracking-widest">{currentLang.code}</span>
        <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100] animate-fade-in">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-6 py-4 hover:bg-offwhite transition-all text-left ${language === lang.code ? 'bg-sage/10 text-petroleum font-bold' : 'text-gray-500'}`}
            >
              <div className="flex items-center gap-3">
                <span>{lang.flag}</span>
                <span className="text-xs uppercase tracking-widest">{lang.label}</span>
              </div>
              {language === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-sage"></div>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;