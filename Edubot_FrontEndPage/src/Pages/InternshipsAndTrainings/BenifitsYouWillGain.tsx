interface BenefitSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  isImageRight?: boolean;
  imageWidth: string;
  imageHeight: string;
}

const BenefitSection = ({
  title,
  description,
  imageUrl,
  imageAlt,
  isImageRight = true,
  imageWidth,
  imageHeight,
}: BenefitSectionProps) => {
  return (
    <div className="w-full mx-auto mb-16 justify-center">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-12 gap-8">
        {isImageRight ? (
          <>
            {/* Text on left */}
            <div className="col-span-6 flex flex-col justify-center px-28">
              <h2 className="text-[#1E1B4B] text-4xl w-[95%] font-bold mb-4">{title}</h2>
              <p className="text-gray-600 text-xl leading-relaxed">{description}</p>
            </div>
            {/* Image on right */}
            <div className="col-span-6">
              <img
                src={imageUrl}
                alt={imageAlt}
                style={{ width: imageWidth, height: imageHeight }}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </>
        ) : (
          <>
            {/* Image on left */}
            <div className="col-span-6  pl-28  ">
              <img
                src={imageUrl}
                alt={imageAlt}
                style={{ width: imageWidth, height: imageHeight }}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Text on right */}
            <div className="col-span-6 flex flex-col justify-center pl-20">
              <h2 className="text-[#1E1B4B] text-4xl  font-bold mb-16">{title}</h2>
              <p className="text-gray-600 text-xl  w-[70%]   leading-relaxed">{description}</p>
            </div>
          </>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-6">
        <div className="w-full">
          <img
            src={imageUrl}
            alt={imageAlt}
            style={{ width: imageWidth, height: imageHeight }}
            className="object-cover rounded-lg shadow-lg mb-6"
          />
          <div className="px-4">
            <h2 className="text-[#1E1B4B] text-2xl font-bold mb-3">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function EducationBenefits() {
  const benefits: BenefitSectionProps[] = [
    {
      title: "Bridging Education and Industry for Future-Ready Leaders",
      description:
        "Bridging academia and industry equips graduates with practical skills and real-world experience, preparing them to excel in job market. By integrating education with industry needs, we create future-ready professionals. This collaboration turns academic knowledge into career success.",
      imageUrl: "./src/assets/Vision1.png",
      imageAlt: "Business meeting with Vision banner",
      isImageRight: true,
      imageWidth: "560px",
      imageHeight: "400px",
    },
    {
      title: "Benefits to students",
      description:
        "Bridging academia and industry equips graduates with practical skills and real-world experience. By integrating them into today's job market, we prepare future-ready professionals. This collaboration turns academic knowledge into career success.",
      imageUrl: "./src/assets/benefits2.png",
      imageAlt: "Happy students on campus",
      isImageRight: false,
      imageWidth: "620px",
      imageHeight: "360px",
    },
    {
      title: "Benefits to College",
      description:
        "Bridging academia and industry equips graduates with practical skills and real-world experience. By integrating education with industry needs, we create future-ready professionals. This collaboration turns academic knowledge into career success.",
      imageUrl: "./src/assets/ClgBenefits3.png",
      imageAlt: "Aerial view of college campus",
      isImageRight: true,
      imageWidth: "560px",
      imageHeight: "354px",
    },
  ];

  return (
    <div className="py-12 px-4 bg-white">
      {benefits.map((benefit, index) => (
        <BenefitSection
          key={index}
          title={benefit.title}
          description={benefit.description}
          imageUrl={benefit.imageUrl}
          imageAlt={benefit.imageAlt}
          isImageRight={benefit.isImageRight}
          imageWidth={benefit.imageWidth}
          imageHeight={benefit.imageHeight}
        />
      ))}
    </div>
  );
}
