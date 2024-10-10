import React from "react";
import { Link } from "react-router-dom";

// Components
import Icon from "../components/Icon";

// Translate
import { useTranslation } from "react-i18next";

// Images
import fileImg from "../assets/images/icons/file-corrupted.svg";

const NotFound = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <div className="flex flex-col items-center justify-center gap-4 size-full sm:gap-8 sm:flex-row">
      <Icon src={fileImg} className="size-36 xs:size-40 md:size-48" />

      <div className="flex flex-col items-center gap-6 sm:gap-5 sm:items-start">
        <h1 className="">{t("page_not_found")}</h1>

        <Link to={`/${currentLanguage}`} className="btn-primary w-40">
          {t("back")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
