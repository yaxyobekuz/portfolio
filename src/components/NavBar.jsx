import React from "react";
import { NavLink } from "react-router-dom";

// Components
import Icon from "./Icon";

// Images
import homeIcon from "../assets/images/icons/home.svg";
import infoIcon from "../assets/images/icons/info.svg";
import appsIcon from "../assets/images/icons/apps.svg";
import contactIcon from "../assets/images/icons/contact.svg";

const NavBar = () => {
  return (
    <nav className="flex items-center fixed bottom-0 inset-x-0 h-14 bg-dark-300 px-3.5 border-t-2 border-dark-200 sm:px-4 lg:hidden">
      <ul className="flex items-center justify-between gap-7 w-full">
        {/* home */}
        <li>
          <NavLink className="navbar-link" aria-label="homepage link" to="/">
            <Icon src={homeIcon} alt="homepage icon" />
          </NavLink>
        </li>

        {/* about */}
        <li>
          <NavLink
            to="/about"
            className="navbar-link"
            aria-label="about page link"
          >
            <Icon src={infoIcon} alt="info icon" />
          </NavLink>
        </li>

        {/* projects */}
        <li>
          <NavLink
            to="/projects"
            className="navbar-link"
            aria-label="projects page link"
          >
            <Icon src={appsIcon} alt="apps icon" />
          </NavLink>
        </li>

        {/* contact */}
        <li>
          <NavLink
            to="/contact"
            className="navbar-link"
            aria-label="contact page link"
          >
            <Icon src={contactIcon} alt="contact icon" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
