// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import nlTranslation from "./nl.json";
import enTranslation from "./en.json";

i18n.use(initReactI18next).init({
  resources: {
    nl: { translation: nlTranslation },
    en: { translation: enTranslation },
  },
  lng: "nl", // Default language
  fallbackLng: "en", // Fallback language in case a translation is missing
  interpolation: {
    escapeValue: false, // Not needed for React
  },
});

export default i18n;
