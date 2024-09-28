import React from "react";
import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";
import SolidArrow from "./SolidArrow";

// Data
import userProfile from "../data/userProfile";

// Translate
import { useTranslation } from "react-i18next";

// Images
import reloadIcon from "../assets/images/icons/reload.svg";
import profileImage from "../assets/images/others/profile-image.jpg";

const Sidebar = ({ isOpen = false, onClose }) => {
  const { t } = useTranslation();
  const { socialLinks, tags } = userProfile;
  const handlePageReload = () => window.location.reload();
  return (
    <>
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full xl:!translate-x-0"
        } absolute inset-y-0 left-0 z-2 w-full xs:w-[340px] h-full shrink-0 bg-dark-300 border-r-2 border-dark-200 transition-transform duration-200 xl:static`}
      >
        {/* Mobile header */}
        <div className="h-14 border-b-2 border-dark-200 xl:hidden"></div>

        {/* Actions (Top) */}
        <div className="flex items-center gap-6 h-14 px-4 border-b-2 border-dark-200">
          {/* prev */}
          <Link
            to={-1}
            title={t("sidebar_actions.prev")}
            aria-label={t("sidebar_actions.prev")}
            className="flex items-center justify-center size-9 bg--200 rounded"
          >
            <SolidArrow direction="left" />
          </Link>

          {/* next */}
          <Link
            to={+1}
            title={t("sidebar_actions.next")}
            aria-label={t("sidebar_actions.next")}
            className="flex items-center justify-center size-9 bg--200 rounded"
          >
            <SolidArrow direction="right" />
          </Link>

          {/* Reload page */}
          <button
            onClick={handlePageReload}
            title={t("sidebar_actions.reload")}
            aria-label={t("sidebar_actions.reload")}
            className="flex items-center justify-center size-9 bg--200 rounded"
          >
            <Icon src={reloadIcon} />
          </button>
        </div>

        {/* Content body  */}
        <div className="pt-6 pb-5 h-[calc(100%-112px)] overflow-y-auto scroll-primary xl:h-[calc(100%-56px)]">
          {/* Profile wrapper */}
          <div className="space-y-5 pt-0 p-5 border-b-2 border-dark-200">
            {/* image */}
            <img
              width={298}
              height={298}
              src={profileImage}
              alt={userProfile.fullName()}
              className="w-full h-auto aspect-square bg-dark-200/50 rounded-lg"
            />

            {/* name */}
            <h1 className="text-lg font-medium">{userProfile.fullName()}</h1>

            {/* tags */}
            <ul className="flex flex-wrap gap-3.5">
              {tags.en.map((_, index) => (
                <li key={index} className="bg-dark-200 px-3 py-1 rounded">
                  <span className="text-sm">{t(`tags.${index}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <ul className="space-y-5 pb-0 p-5">
            {socialLinks.en.map((link, index) => {
              return (
                <li key={index} className="">
                  <a
                    target="_blank"
                    href={link.value}
                    className="flex items-center gap-4"
                  >
                    {/* iIcon */}
                    <div
                      style={{ background: link.icon.fill }}
                      className="flex items-center justify-center size-12 shrink-0 rounded-lg"
                    >
                      <Icon
                        src={link.icon.url}
                        alt={link.name + " logo icon"}
                      />
                    </div>

                    {/* details */}
                    <div className="max-w-[calc(100%-68px)] space-y-1">
                      <h3 className="font-medium">{link.name}</h3>
                      <span className="line-clamp-1 text-sm text-white/70">
                        {link.value}
                      </span>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed inset-0 z-1 size-full bg-dark-300/70 backdrop-blur transition-transform duration-200 xl:hidden`}
        onClick={onClose}
      ></div>
    </>
  );
};

export default Sidebar;
