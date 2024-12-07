import React from 'react'

interface BenefitProps {
  icon: string
  title: string
  alt: string
}

const benefits: BenefitProps[] = [
  {
    icon: "/src/assets/handson.png",
    title: "Hands-on industry experience",
    alt: "Hand holding green lightbulb icon"
  },
  {
    icon: "/src/assets/expertmentors.png", 
    title: "Expert mentors and trainers",
    alt: "Mentorship figures icon"
  },
  {
    icon: "/src/assets/remote.png",
    title: "Flexible and remote options",
    alt: "Clock timer icon"
  },
  {
    icon: "/src/assets/placementsupport.png",
    title: "Placement support",
    alt: "Hands holding stars icon"
  }
]

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, alt }) => {
  return (
    // for border shadow transition-shadow hover:shadow-lg md:hover:shadow-xl 
    <div className="p-6 rounded-[17px] md:rounded-[20px] w-[238px] h-[229px] transition-shadow cursor-pointer md:hover:shadow-[0_6px_20px_rgba(242,179,49,0.8)] md:w-[265px] md:h-[255px] border-[1px] border-[#F2B331] bg-white flex flex-col items-center justify-center text-center">
  <img 
    src={icon} 
    alt={alt}
    className="w-32 h-32 mb-4 object-contain"
  />
  <h3 className="md:text-[24px] text-[21px] leading-[26px] md:leading-[30px] font-[500] text-[#333333]">{title}</h3>
</div>

  )
}

const BenefitsYouWillGain: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-[22px] leading-[26px] md:text-[44px] md:font-[700] md:leading-[52px] font-bold text-center mb-10">
        Benefits you'll gain
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-0 gap-6 justify-items-center">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            alt={benefit.alt}
          />
        ))}
      </div>
    </section>
  )
}

export default BenefitsYouWillGain

