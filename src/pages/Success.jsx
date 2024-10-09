import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Success = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-full text-center">
      <h1 className="">{t("success_msg.title")}!</h1>
      <p className="text-lg opacity-70 sm:text-xl">{t("success_msg.description")}.</p>
      <Link to={-1} className="btn-primary min-w-44">
        {t("back")}
      </Link>
    </div>
  );
};

export default Success;
