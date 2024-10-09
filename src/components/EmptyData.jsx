import React from "react";

// Components
import Icon from "../components/Icon";

// Translate
import { useTranslation } from "react-i18next";

// Images
import emptyDataImg from "../assets/images/others/empty-data.svg";

const EmptyData = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Image */}
      <Icon src={emptyDataImg} size={256} className="size-64" />

      {/* Title */}
      <b className="text-lg font-semibold">{t("empty_data")}</b>
    </div>
  );
};

export default EmptyData;
