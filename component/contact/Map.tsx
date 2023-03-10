import React from "react";
import { useTranslation } from "react-i18next";

export default function Map() {
  const { t } = useTranslation();
  return (
    <div className="max-w-[1200px] mx-auto py-16 px-6">
      <p className="text-4xl font-bold dark:text-white">
        {t("contact.location")}
      </p>
      <div className="mx-auto w-full h-80 md:h-[700px] p-6 mt-6 shadow-lg dark:bg-[#005eff]/20 dark:shadow-[inset_0px_-1px_1px_#132f4c] rounded-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2865708020836!2d106.69788995088277!3d10.789349661866394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b555c872a7%3A0xd4c90543ff33dc01!2zNTYgTmd1eeG7hW4gxJDDrG5oIENoaeG7g3UsIMSQYSBLYW8sIFF14bqtbiAxLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1676015715105!5m2!1svi!2s"
          className="border dark:border-[#1e4976] w-full h-full"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
