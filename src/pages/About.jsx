import React from "react";
import { Link } from "react-router-dom";

// Data
import tools from "../data/tools";

// Translate
import { useTranslation } from "react-i18next";

// Components
import Icon from "../components/Icon";
import MainArrow from "../components/MainArrow";
import MarkdownRenderer from "../components/MarkdownRenderer";

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const advantages = t("advantages", { returnObjects: true });

  return (
    <div className="py-8 space-y-12 xl:py-10">
      {/* Page main content */}
      <div className="space-y-9">
        {/* page title */}
        <h1 className="title-rectangle">{t("about_page_title")}</h1>

        {/* page description */}
        <div className="space-y-5 opacity-70 sm:text-lg">
          {<MarkdownRenderer text={t("about_page_description")} />}
        </div>

        {/* projects link */}
        <Link to={`/${currentLanguage}/projects`} className="btn-primary group max-w-max px-9">
          <span>{t("about_page_projects_btn")}</span>
          <MainArrow
            direction="right"
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </Link>
      </div>

      {/* Technologies section */}
      <section className="space-y-9">
        {/* section title */}
        <h2 className="title-rectangle">{t("technologies_section_title")}</h2>

        {/* section list */}
        <ul className="grid grid-cols-1 gap-5 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {tools.map((tool, i) => (
            <li
              key={i}
              title={tool.name}
              aria-label={tool.name}
              className="group flex items-center justify-center relative h-28 bg-dark-300 rounded-xl border-2 border-dark-200 xs:h-32"
            >
              <Icon
                size={64}
                src={tool.icon}
                alt={`${tool.name} logo icon`}
                className="size-14 group-hover:hidden sm:size-16"
              />

              <h3 className="hidden absolute text-lg group-hover:block sm:text-xl">
                {tool.name}
              </h3>
            </li>
          ))}
        </ul>
      </section>

      {/* Advantages section */}
      <section className="space-y-9">
        {/* section title */}
        <h2 className="title-rectangle">{t("advantages_section_title")}</h2>

        {/* section list */}
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {advantages.map((item, i) => (
            <li
              key={i}
              title={item.name}
              aria-label={item.name}
              className="flex items-start gap-4 h-32 bg-dark-300 p-4 rounded-xl border-2 border-dark-200 xs:p-5 xs:gap-5"
            >
              {/* icon */}
              <div
                style={{ background: item.icon.fill }}
                className="flex items-center justify-center size-14 shrink-0 rounded-lg sm:size-16"
              >
                <Icon
                  size={64}
                  src={item.icon.url}
                  className="size-7 sm:size-10"
                />
              </div>

              {/* details */}
              <div className="space-y-1.5 overflow-hidden">
                <h3 className="truncate font-semibold sm:text-lg">
                  {item.title}
                </h3>

                {/* description */}
                <p className="opacity-70 text-sm sm:line-clamp-2 sm:text-base">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
