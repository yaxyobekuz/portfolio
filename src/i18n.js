// i18next
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// data
import en from "./locales/en.json";
import uz from "./locales/uz.json";
import advantages from "./data/advantages";
import userProfile from "./data/userProfile";
import projectsFilterMenuItems from "./data/projectsFilterMenuItems";

const savedLang = localStorage.getItem("language");
const currentLanguage = savedLang ? savedLang : "en";
const { tags, socialLinks, contactInfo } = userProfile;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    uz: { translation: uz },
  },
  lng: currentLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.addResources("en", "translation", {
  tags: tags.en,
  advantages: advantages.en,
  socialLinks: socialLinks.en,
  contactInfo: contactInfo.en,
  projectsFilterMenuItems: projectsFilterMenuItems.en,
});

i18n.addResources("uz", "translation", {
  tags: tags.uz,
  advantages: advantages.uz,
  socialLinks: socialLinks.uz,
  contactInfo: contactInfo.uz,
  projectsFilterMenuItems: projectsFilterMenuItems.uz,
});

export default i18n;
