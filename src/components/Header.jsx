import React from "react";
import { Link, NavLink } from "react-router-dom";

// Components
import LangMenu from "./LangMenu";

// Data
import userProfile from "../data/userProfile";

// Translate
import { useTranslation } from "react-i18next";

// Images
import githubLogo from "../assets/images/icons/github-logo.svg";
import hamburgerMenuIcon from "../assets/images/icons/hamburger-menu.svg";

const Header = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isEn = currentLanguage === "en";
  const navLinks = t("header_navlinks", { returnObjects: true });

  return (
    <header className="flex items-center justify-between h-14 bg-dark-300 px-3.5 border-b-2 border-dark-200 sm:px-4">
      {/* Logo & Hamburger menu btn wrapper */}
      <div className="flex items-center gap-3.5 sm:gap-5">
        {/* hamburger menu btn */}
        <button
          title={isEn ? "Menu" : "Menyu"}
          aria-label={isEn ? "Menu" : "Menyu"}
          className="flex items-center justify-center size-11 rounded"
        >
          <img
            width={24}
            height={24}
            className="size-7"
            src={hamburgerMenuIcon}
            alt="hamburger menu icon"
          />
        </button>

        {/* Logo */}
        <Link
          to="/"
          title="Logo"
          aria-label="Logo"
          className="text-xl font-medium"
        >
          <span>YAXYOBEK.</span>
          <span className="text-primary">UZ</span>
        </Link>
      </div>

      {/* Navbar & Actions wrapper */}
      <div className="flex items-center gap-12">  
        {/* Navbar */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.href} className="header_navlink">
                  {t(`header_navlinks.${index}.name`)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3.5 sm:gap-5">
          {/* lang menu btn */}
          <LangMenu />

          {/* github */}
          <a
            target="_blank"
            className="p-2 rounded"
            rel="noopener noreferrer"
            href={userProfile.socialLinks.github}
            aria-label={`${userProfile.firstName} github profile`}
          >
            <img
              width={24}
              height={24}
              src={githubLogo}
              className="size-7"
              alt="github logo svg"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
