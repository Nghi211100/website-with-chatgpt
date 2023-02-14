import Image from "next/image";

export default function Feature({
  features,
  title,
  left,
}: {
  features: any;
  title: string;
  left?: boolean;
}) {
  return (
    <div className="overflow-hidden max-w-7xl py-16 mx-auto">
      <div className="mx-auto px-6">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
          <div className={`lg:max-w-lg my-auto ${left && "ml-auto"}`}>
            <p className="pb-6 font-bold tracking-tight text-gray-900 text-4xl">
              {title}
            </p>
            <dl className="max-w-xl space-y-1 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature: any) => (
                <div key={feature.name} className="relative">
                  <dt className="inline font-semibold text-gray-900">
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div
            className={`relative overflow-x-clip lg:pl-2 ${left && "row-[1]"}`}
          >
            <Image
              src="/images/website-design.jpg"
              alt="Product screenshot"
              className="h-full lg:w-[800px] w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}