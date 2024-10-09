import React from "react";
import { NavLink } from "react-router-dom";

// Components
import Icon from "./Icon";

// Translate
import { useTranslation } from "react-i18next";

// Images
import homeIcon from "../assets/images/icons/home.svg";
import infoIcon from "../assets/images/icons/info.svg";
import appsIcon from "../assets/images/icons/apps.svg";
import contactIcon from "../assets/images/icons/contact.svg";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const navLinks = t("header_navlinks", { returnObjects: true });
  const pathArr = location.pathname.split("/").filter((i) => i !== "");

  return (
    <nav className="flex items-center fixed bottom-0 inset-x-0 h-14 bg-dark-300 px-3.5 border-t-2 border-dark-200 sm:px-4 lg:hidden">
      <ul className="flex items-center justify-between gap-7 w-full">
        {/* home */}
        <li>
          <NavLink
            to=""
            className={() =>
              pathArr.length === 1 && pathArr[0] === currentLanguage
                ? "navbar-link active"
                : "navbar-link"
            }
            aria-label="homepage link"
          >
            <Icon src={homeIcon} alt="homepage icon" />
            <h3 className="text-xs">{navLinks[0].name}</h3>
          </NavLink>
        </li>

        {/* about */}
        <li>
          <NavLink
            to="about"
            className="navbar-link"
            aria-label="about page link"
          >
            <Icon src={infoIcon} alt="info icon" />
            <h3 className="text-xs">{navLinks[1].name}</h3>
          </NavLink>
        </li>

        {/* projects */}
        <li>
          <NavLink
            to="projects"
            className="navbar-link"
            aria-label="projects page link"
          >
            <Icon src={appsIcon} alt="apps icon" />
            <h3 className="text-xs">{navLinks[2].name}</h3>
          </NavLink>
        </li>

        {/* contact */}
        <li>
          <NavLink
            to="contact"
            className="navbar-link"
            aria-label="contact page link"
          >
            <Icon src={contactIcon} alt="contact icon" />
            <h3 className="text-xs">{navLinks[3].name}</h3>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
