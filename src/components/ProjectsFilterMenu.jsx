import React, { useState } from "react";

// Translate
import { useTranslation } from "react-i18next";

// Components
import Icon from "./Icon";
import DefaultTransition from "./DefaultTransition";

// Headless ui components
import { Menu, MenuItem, MenuItems, MenuButton } from "@headlessui/react";

// Images
import dotGridIcon from "../assets/images/icons/dot-grid.svg";

const ProjectsFilterMenu = ({ onChange }) => {
  const { t } = useTranslation();
  const [item, setItem] = useState({ value: null, index: null });
  const menuItems = t("projectsFilterMenuItems", { returnObjects: true });
  const currentItem = menuItems[item?.index];

  const handleItemChange = (value, index) => {
    onChange(value);
    setItem({ value, index });
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* menu button */}
      <MenuButton className="menu-btn justify-center size-12 bg-dark-300 p-0 sm:justify-between sm:w-auto sm:px-4 sm:min-w-[165px]">
        {/* btn icon */}
        <Icon
          size={currentItem ? 24 : 20}
          className={currentItem ? "size-6" : "size-5"}
          src={currentItem ? currentItem.icon : dotGridIcon}
          alt={currentItem ? currentItem.label : "dot grid icon"}
        />

        {/* btn text */}
        <span className="hidden sm:inline">
          {t("projects_page_filter_menu_btn")}
        </span>
      </MenuButton>

      {/* menu items */}
      <DefaultTransition>
        <MenuItems as="ul" className="menu-items min-w-[165px]">
          {menuItems.map((item, index) => (
            <MenuItem key={index} as="li">
              <button
                className="menu-item justify-between px-2"
                onClick={() => handleItemChange(item.value, index)}
              >
                <Icon src={item.icon} alt={item.label} />
                <span>{item.label}</span>
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </DefaultTransition>
    </Menu>
  );
};

export default ProjectsFilterMenu;
