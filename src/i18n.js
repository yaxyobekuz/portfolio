// i18next
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// data
import en from "./locales/en.json";
import uz from "./locales/uz.json";
import userProfile from "./data/userProfile";

const { tags, socialLinks, contactInfo } = userProfile;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    uz: { translation: uz },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.addResources("en", "translation", {
  tags: tags.en,
  socialLinks: socialLinks.en,
  contactInfo: contactInfo.en,
});

i18n.addResources("uz", "translation", {
  tags: tags.uz,
  socialLinks: socialLinks.uz,
  contactInfo: contactInfo.uz,
});

export default i18n;
