import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationFR from './locales/fr.json';
import translationEN from './locales/en.json';
import translationDE from './locales/de.json';

const resources = {
  fr: {
    translation: translationFR
  },
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de', // Standardsprache (während der Überarbeitung); DE ist am vollständigsten
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
