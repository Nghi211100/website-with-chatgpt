import { useTranslation } from "react-i18next";
import people from "@/component/aboutus/dataTeam.json";

export default function Team() {
  const { t, i18n } = useTranslation();
  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-y-10 gap-x-8 px-6 py-16 xl:grid-cols-5">
      <div className="max-w-2xl xl:col-span-2">
        <div className="sticky top-20">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
            {t("team.about")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            {t("team.description")}
          </p>
        </div>
      </div>
      <ul role="list" className="divide-y divide-gray-200 xl:col-span-3">
        {people.map((person, index) => (
          <li
            key={index}
            className="flex flex-col gap-10 py-6 sm:flex-row first:pt-0 last:pb-0"
          >
            <img
              className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
              src={person.imageUrl}
              alt=""
            />
            <div className="max-w-xl flex-auto my-auto">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-50">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                {person.role}
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
                {i18n.language === "en" ? person.bioEn : person.bioVi}
              </p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a
                    href={person.twitterUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.facebookUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      fill="currentColor"
                      className="h-5 w-5"
                      aria-hidden="true"
                      viewBox="0 0 310 310"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="XMLID_834_">
                          {" "}
                          <path
                            id="XMLID_835_"
                            d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
