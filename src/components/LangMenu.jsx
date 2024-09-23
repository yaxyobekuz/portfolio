import React, { Fragment } from "react";

// Headless ui components
import {
  Menu,
  MenuItem,
  MenuItems,
  Transition,
  MenuButton,
} from "@headlessui/react";

// Components
import SolidArrow from "./SolidArrow";

// Translate
import { useTranslation } from "react-i18next";

// Images
import flagUZIcon from "../assets/images/icons/flag-uz.svg";
import flagUKIcon from "../assets/images/icons/flag-uk.svg";
import translateLanguageIcon from "../assets/images/icons/translate-language.svg";

const LangMenu = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="menu-btn px-2 sm:px-4 sm:min-w-[155px]">
        {/* <SolidArrow size={18} /> */}
        <img
          width={24}
          height={24}
          className="size-6"
          src={translateLanguageIcon}
          alt="translate language icon"
          />
          <span className="hidden sm:inline">{t("header_lang_btn")}</span>
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-y-80"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-y-80"
      >
        <MenuItems as="ul" className="menu-items min-w-[155px]">
          <MenuItem as="li">
            <button
              className="menu-item justify-between px-2"
              onClick={() => handleLanguageChange("uz")}
            >
              <img
                width={24}
                height={24}
                src={flagUZIcon}
                className="size-6"
                alt="uzbekistan flag"
              />
              <span>O'zbek</span>
            </button>
          </MenuItem>

          <MenuItem as="li">
            <button
              className="menu-item justify-between px-2"
              onClick={() => handleLanguageChange("en")}
            >
              <img
                width={24}
                height={24}
                src={flagUKIcon}
                className="size-6"
                alt="united kingdom flag"
              />
              <span>English</span>
            </button>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default LangMenu;
