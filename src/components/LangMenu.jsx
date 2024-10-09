import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

// Translate
import { useTranslation } from "react-i18next";

// Components
import Icon from "./Icon";
import DefaultTransition from "./DefaultTransition";

// Headless ui components
import { Menu, MenuItem, MenuItems, MenuButton } from "@headlessui/react";

// Images
import flagUZIcon from "../assets/images/icons/flag-uz.svg";
import flagUKIcon from "../assets/images/icons/flag-uk.svg";
import translateLanguageIcon from "../assets/images/icons/translate-language.svg";

const LangMenu = () => {
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const pathArr = location.pathname.split("/").filter((i) => i !== "");
  pathArr.shift();

  const languageHref = (lang) => {
    return `/${lang}/${pathArr.join("/")}`;
  };

  // Change language
  useEffect(() => {
    const languages = ["uz", "en"];

    if (languages.includes(lang)) {
      i18n.changeLanguage(lang);

      // save current language to local storage
      localStorage.setItem("language", lang);

      // change language attribute value to current language
      const elDocument = document.getElementsByTagName("html")[0];
      elDocument.lang = lang;
    } else {
      navigate(languageHref("en"));
      console.log("update language");
    }
  }, [location.pathname]);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="menu-btn px-2 sm:px-4 sm:min-w-[155px]">
        <Icon src={translateLanguageIcon} alt="translate language icon" />
        <span className="hidden sm:inline">{t("header_lang_btn")}</span>
      </MenuButton>

      <DefaultTransition>
        <MenuItems as="ul" className="menu-items min-w-[155px]">
          <MenuItem as="li">
            <Link
              to={languageHref("uz")}
              className="menu-item justify-between px-2"
            >
              <Icon src={flagUZIcon} alt="uzbekistan flag" />
              <span>O'zbek</span>
            </Link>
          </MenuItem>

          <MenuItem as="li">
            <Link
              to={languageHref("en")}
              className="menu-item justify-between px-2"
            >
              <Icon src={flagUKIcon} alt="united kingdom flag" />
              <span>English</span>
            </Link>
          </MenuItem>
        </MenuItems>
      </DefaultTransition>
    </Menu>
  );
};

export default LangMenu;
