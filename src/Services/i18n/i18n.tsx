import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import TranslateAr from "./ar.json";
import TranslateEn from "./en.json";

const resources = {
  ar: {
    translation: TranslateAr,
  },
  en: {
    translation: TranslateEn,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("lng") || "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;