import Layout from "@/component/layout/Layout";
import Content from "@/component/services/Content";
import HeroSection from "@/component/HeroSection";
import Feature from "@/component/services/Feature";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useEffect } from "react";

export default function index() {
  const { t, i18n } = useTranslation();
  const language =
    (typeof window !== "undefined" && localStorage.getItem("language")) || "en";
  useEffect(() => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }, [language, i18n]);
  const webFeatures = [
    {
      name: t("feature.webFeatures.feat01.name"),
      description: t("feature.webFeatures.feat01.description"),
    },
    {
      name: t("feature.webFeatures.feat02.name"),
      description: t("feature.webFeatures.feat02.description"),
    },
    {
      name: t("feature.webFeatures.feat03.name"),
      description: t("feature.webFeatures.feat03.description"),
    },
    {
      name: t("feature.webFeatures.feat04.name"),
      description: t("feature.webFeatures.feat04.description"),
    },
  ];
  const MobileFeatures = [
    {
      name: t("feature.mobileFeatures.feat01.name"),
      description: t("feature.mobileFeatures.feat01.description"),
    },
    {
      name: t("feature.mobileFeatures.feat02.name"),
      description: t("feature.mobileFeatures.feat02.description"),
    },
    {
      name: t("feature.mobileFeatures.feat03.name"),
      description: t("feature.mobileFeatures.feat03.description"),
    },
    {
      name: t("feature.mobileFeatures.feat04.name"),
      description: t("feature.mobileFeatures.feat04.description"),
    },
  ];
  const solutionFeatures = [
    {
      name: t("feature.solutionFeatures.feat01.name"),
      description: t("feature.solutionFeatures.feat01.description"),
    },
    {
      name: t("feature.solutionFeatures.feat02.name"),
      description: t("feature.solutionFeatures.feat02.description"),
    },
    {
      name: t("feature.solutionFeatures.feat03.name"),
      description: t("feature.solutionFeatures.feat03.description"),
    },
    {
      name: t("feature.solutionFeatures.feat04.name"),
      description: t("feature.solutionFeatures.feat04.description"),
    },
  ];
  return (
    <>
      <Layout title="OmniStack - Services Page">
        <HeroSection
          title={t("services.title")}
          description={t("services.description")}
          imgLink={"/images/servicehero.jpg"}
          button={
            <div className="w-max bg-blue-500 px-4 py-3 text-white rounded-xl mb-16 hover:bg-blue-600">
              <Link href={"/contact"}>{t("contact.contactNow")}</Link>
            </div>
          }
        />

        <div className="bg-[#f3f6f9] dark:bg-[#0a1929]">
          <Feature
            features={webFeatures}
            title={t("services.service01.name")}
            imgLink={"/images/website-design.jpg"}
          />
        </div>
        <div className="bg-white dark:bg-[#001e3c]">
          <Feature
            features={MobileFeatures}
            title={t("services.service02.name")}
            left={true}
            imgLink={"/images/mobile-design.jpeg"}
          />
        </div>
        <div className="bg-[#f3f6f9] dark:bg-[#0a1929]">
          <Feature
            features={solutionFeatures}
            title={t("services.service03.name")}
            imgLink={"/images/solutionandservice.jpg"}
          />
        </div>
        <div className="bg-white dark:bg-[#001e3c]">
          <Content />
        </div>
      </Layout>
    </>
  );
}
