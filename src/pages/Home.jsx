import React from "react";
import { Link } from "react-router-dom";

// Translate
import { useTranslation } from "react-i18next";

// Components
import MainArrow from "../components/MainArrow";
import MarkdownRenderer from "../components/MarkdownRenderer";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start justify-end min-h-full pt-12 pb-20 sm:py-12 sm:items-center sm:justify-center">
      <div className="flex flex-col items-start gap-6 max-w-96 sm:items-center sm:max-w-xl md:max-w-2xl">
        {/* Title */}
        <h1 className="markdown strong-primary text-3xl font-semibold leading-normal sm:text-center md:text-4xl">
          <MarkdownRenderer text={t("homepage_title")} />
        </h1>

        {/* Description */}
        <p className="text-white/70 sm:text-center md:text-lg">
          {t("homepage_description")}
        </p>

        {/* Projects link */}
        <Link to="/projects" className="btn-primary group px-9">
          <span>{t("homepage_main_btn")}</span>
          <MainArrow
            direction="right"
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
