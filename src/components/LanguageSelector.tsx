import React from 'react';
import { useApp, Language } from '../context/AppContext';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
  { code: 'or', name: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
];

export default function LanguageSelector() {
  const { userData, setUserData } = useApp();

  return (
    <div className="fixed top-4 right-4 z-50">
      <select
        value={userData.language}
        onChange={(e) => setUserData({ language: e.target.value as Language })}
        className="bg-white border-2 border-green-600 rounded-lg px-3 py-2 text-sm font-medium text-gray-800 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
