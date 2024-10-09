import React from "react";

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
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
    localStorage.setItem("language", value);
    const elDocument = document.getElementsByTagName("html")[0];
    elDocument.lang = value;
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="menu-btn px-2 sm:px-4 sm:min-w-[155px]">
        <Icon src={translateLanguageIcon} alt="translate language icon" />
        <span className="hidden sm:inline">{t("header_lang_btn")}</span>
      </MenuButton>

      <DefaultTransition>
        <MenuItems as="ul" className="menu-items min-w-[155px]">
          <MenuItem as="li">
            <button
              className="menu-item justify-between px-2"
              onClick={() => handleLanguageChange("uz")}
            >
              <Icon src={flagUZIcon} alt="uzbekistan flag" />
              <span>O'zbek</span>
            </button>
          </MenuItem>

          <MenuItem as="li">
            <button
              className="menu-item justify-between px-2"
              onClick={() => handleLanguageChange("en")}
            >
              <Icon src={flagUKIcon} alt="united kingdom flag" />
              <span>English</span>
            </button>
          </MenuItem>
        </MenuItems>
      </DefaultTransition>
    </Menu>
  );
};

export default LangMenu;
