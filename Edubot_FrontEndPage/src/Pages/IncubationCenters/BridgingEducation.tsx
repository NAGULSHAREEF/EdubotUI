interface BenefitSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  isImageRight?: boolean;
}

const BenefitSection = ({
  title,
  description,
  imageUrl,
  imageAlt,
  isImageRight = true,
}: BenefitSectionProps) => {
  return (
    <div className="w-full mx-auto mb-16">
      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {isImageRight ? (
          <>
            <div className="pr-12">
              <h2 className="text-[#1E1B4B] text-3xl lg:text-5xl font-bold mb-6">{title}</h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">{description}</p>
            </div>
            <div className="flex justify-end">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full max-w-[600px] h-[300px] object-cover rounded-lg shadow-lg"
              />
            </div>
          
          </>
        ) : (
          <>
            <div className="flex justify-start">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full max-w-[600px] h-[350px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="pl-12 mb-40 ">
              <h2 className="text-[#1E1B4B] text-3xl lg:text-5xl font-bold mb-4 ">{title}</h2>
              <p className="text-gray-600 text-base lg:text-lg  leading-relaxed">{description}</p>
            </div>
          </>
        )}
      </div>

      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden px-4 max-w-2xl mx-auto">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-[300px] object-cover rounded-lg shadow-lg mb-6"
        />
        <div className="space-y-4">
          <h2 className="text-[#1E1B4B] text-2xl font-bold">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function EducationBenefits() {
  const benefits = [
    {
      title: "Bridging Education and Industry for Future-Ready Leaders",
      description:
        "Bridging academia and industry equips graduates with practical skills and real-world experience, preparing them to excel in job market. By integrating education with industry needs, we create future-ready professionals. This collaboration turns academic knowledge into career success.",
      imageUrl: "./src/assets/Vision1.png",
      imageAlt: "Business meeting with Vision banner",
      isImageRight: true,
    },
    {
      title: "Benefits to students",
      description:
        "Bridging academia and industry equips graduates with practical skills and real-world experience. By integrating them into today's job market, we prepare future-ready professionals. This collaboration turns academic knowledge into career success.",
      imageUrl: "./src/assets/benefits2.png",
      imageAlt: "Happy students on campus",
      isImageRight: false,
    },
    {
      title: "Benefits to College",
      description:
        "Bridging academia and industry equips graduates with practical skills and real-world experience. By integrating education with industry needs, we create future-ready professionals. This collaboration turns academic knowledge into career success.",
      imageUrl: "./src/assets/ClgBenefits3.png",
      imageAlt: "Aerial view of college campus",
      isImageRight: true,
    },
  ];

  return (
    <div className="py-12 bg-white">
      {benefits.map((benefit, index) => (
        <BenefitSection
          key={index}
          title={benefit.title}
          description={benefit.description}
          imageUrl={benefit.imageUrl}
          imageAlt={benefit.imageAlt}
          isImageRight={benefit.isImageRight}
        />
      ))}
    </div>
  );
}