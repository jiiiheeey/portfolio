import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { i18n_kr } from "./i18n_kr";
import { i18n_en } from "./i18n_en";

const resources = {
  en: { translation: i18n_en },
  ko: { translation: i18n_kr }
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language || navigator.userLanguage, //"ko",
  fallbackLng: "ko",
  keySeparator: false, // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;
