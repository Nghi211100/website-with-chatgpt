import React from "react";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();
  return (
    <div className="px-6 space-y-6">
      <h1 className="text-4xl font-bold mb-4">{t("about.title")}</h1>
      <p className="text-base mb-4">{t("about.content.content01")}</p>
      <p className="text-base mb-4">{t("about.content.content02")}</p>
      <p className="text-base mb-4">{t("about.content.content03")}</p>
      <p className="text-base">{t("about.content.content04")}</p>
    </div>
  );
}
