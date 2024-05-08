import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInFra from '../locales/fr/translation.json';

type TranslationResources = {
  translation: Record<string, string>;
};

const resources: { fr: TranslationResources } = {
  fr: {
    translation: translationsInFra
  },
};

// Initialiser i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    ns: "translation",
    defaultNS: "translation",
  });

export default i18n;
