import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();

  return (
    <div className="py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
          {t("portfolio.trust")}
        </h2>
        <div className="relative border-l-2 border-blue-500 pl-12">
          <svg
            className="absolute top-0 left-7 h-8 w-8 -translate-x-3 -translate-y-2 transform text-blue-500"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            {t("portfolio.content.content01")}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            {t("portfolio.content.content02")}
          </p>
        </div>
      </div>
    </div>
  );
}
