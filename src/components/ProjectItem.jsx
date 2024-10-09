import React from "react";

// Components
import Icon from "./Icon";

// Translate
import { useTranslation } from "react-i18next";

// Helpers
import { firstLetterToUpperCase } from "../helpers";

// Redux
import { useDispatch } from "react-redux";
import { openModal, updateModalData } from "../store/slices/modalsSlice";

// Images
import eyeIcon from "../assets/images/icons/eye.svg";
import linkIcon from "../assets/images/icons/link.svg";
import githubLogoIcon from "../assets/images/icons/github-logo.svg";

const ProjectItem = ({ data }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Helpers
  const renderProjectLvl = (lvl) => {
    const item = (name, color) => (
      <div className="flex items-center gap-3.5 shrink-0">
        <span className="font-normal text-sm">{t(name)}</span>
        <span className={`${color} size-2.5 rounded-full`}></span>
      </div>
    );

    if (lvl === "high") {
      return item("high", "bg-red-500");
    } else if (lvl === "medium") {
      return item("medium", "bg-yellow-500");
    } else {
      return item("low", "bg-primary");
    }
  };

  const renderLink = (link, type) => {
    const isGithub = type.toLowerCase() === "github";
    const typeText = `${isGithub ? "Github" : t("project")} ${t("link")}`;
    return (
      <a
        href={link}
        target="_blank"
        title={typeText}
        aria-label={typeText}
        className="bg-dark-300 p-2 rounded-md border-2 border-dark-200 transition-colors hover:bg-[#262626]"
      >
        <Icon
          size={28}
          className="size-6 sm:size-7"
          src={isGithub ? githubLogoIcon : linkIcon}
          alt={(isGithub ? "github" : "link") + "icon"}
        />
      </a>
    );
  };

  const handleOpenProjectModal = () => {
    dispatch(openModal("project"));
    dispatch(updateModalData({ modal: "project", data }));
  };

  return (
    <li className="space-y-4">
      <div className="relative">
        {/* image */}
        <img
          width={610}
          height={288}
          src={data.image}
          alt={data.title}
          style={{ objectFit: "contain" }}
          className="w-full h-64 bg-dark-300 border-2 border-dark-200 rounded-lg xs:h-72"
        />

        {/* actions */}
        <div className="flex items-center justify-between gap-3.5 w-full absolute inset-x-0 top-4 px-4 sm:top-5 sm:px-5">
          {/* view */}
          <button
            title={t("view")}
            aria-label={t("view")}
            onClick={handleOpenProjectModal}
            className="bg-dark-300 p-2 rounded-md border-2 border-dark-200 transition-colors hover:bg-[#262626]"
          >
            <Icon
              size={28}
              src={eyeIcon}
              alt="eye icon"
              className="size-6 sm:size-7"
            />
          </button>

          <div className="flex gap-4">
            {/* Link */}
            {data.type !== "design" &&
              renderLink(data.link.value, data.link.type)}

            {/* Github */}
            {!["design", "figma"].includes(data.type) &&
              renderLink(data.githubLink, "github")}
          </div>
        </div>
      </div>

      {/* title wrapper */}
      <div className="flex items-center justify-between gap-3.5">
        <h3 className="sm:text-xl sm:font-medium">
          {firstLetterToUpperCase(data.title[currentLanguage])}
        </h3>
        {renderProjectLvl(data.level)}
      </div>

      {/* tags */}
      <ul className="flex flex-wrap gap-y-1.5 gap-x-3.5">
        {data.tags.map((tag, index) => (
          <li key={index} className="text-primary font-medium text-sm xs:text-base">
            #{tag}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ProjectItem;
