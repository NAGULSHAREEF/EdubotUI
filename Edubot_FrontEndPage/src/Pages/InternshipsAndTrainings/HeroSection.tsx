const HeroSection = () => {
  return (
    <div className="h-full bg-[url('/src/assets/herosection-bg.png')] bg-cover bg-center">
      <div className="container mx-auto md:px-12 md:py-8">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 overflow-hidden md:px-0 px-8 py-8 md:py-5 md:overflow-visible items-center">
          {/* Left Column - Text Content */}
          <div className=" overflow-hidden md:overflow-visible md:mt-2 ">
            <p className="text-[#222222] text-[16px]  md:text-[24px]">#our service - <span className="md:text-[24px] text-[16px] font-[500] md:font-bold">Internship and Training</span></p>
            {/* use w-80% for getting mobile text */}
            <h1 className="text-[32px] leading-[36px] mt-2 md:mt-2 md:text-[48px] md:leading-[60px] lg:text-[48px] md:w-[130%] w-[80%] lg:leading-[66px] font-bold text-[#1D1F71] ">
              Find opportunities tailored to your career goals and industry.
            </h1>
            <p className="md:text-[24px] text-[17px] font-[400] mt-2 md:mt-3 md:font-[500]  ">Let's help you land your dream career</p>
            
            <div className="md:mt-5 mt-2">
              <button className="px-6 py-3 bg-[#F2B331] rounded-[30px] text-[18px] font-500 font-medium ">
                Contact us
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-8  md:mt-0">
  <img 
    src="/src/assets/herosection1.png" 
    alt="Students working together" 
    className="w-full md:w-full h-full rounded-lg object-cover  md:scale-125 scale-150  "
  />
</div>

        </div>
      </div>
    </div>
  )
}

export default HeroSection




// import React from 'react'

// interface BenefitProps {
//   icon: string
//   title: string
//   alt: string
// }

// const benefits: BenefitProps[] = [
//   {
//     icon: "/src/assets/handson.png",
//     title: "Hands-on industry experience",
//     alt: "Hand holding green lightbulb icon"
//   },
//   {
//     icon: "/src/assets/expertmentors.png", 
//     title: "Expert mentors and trainers",
//     alt: "Mentorship figures icon"
//   },
//   {
//     icon: "/src/assets/remote.png",
//     title: "Flexible and remote options",
//     alt: "Clock timer icon"
//   },
//   {
//     icon: "/src/assets/placementsupport.png",
//     title: "Placement support",
//     alt: "Hands holding stars icon"
//   }
// ]

// const BenefitCard: React.FC<BenefitProps> = ({ icon, title, alt }) => {
//   return (
//     // for border shadow transition-shadow hover:shadow-lg md:hover:shadow-xl 
//     <div className="p-6 rounded-[17px] md:rounded-[20px] w-[238px] h-[229px] transition-shadow cursor-pointer md:hover:shadow-[0_6px_20px_rgba(242,179,49,0.8)] md:w-[265px] md:h-[255px] border-[1px] border-[#F2B331] bg-white flex flex-col items-center justify-center text-center">
//   <img 
//     src={icon} 
//     alt={alt}
//     className="w-32 h-32 mb-4 object-contain"
//   />
//   <h3 className="md:text-[24px] text-[21px] leading-[26px] md:leading-[30px] font-[500] text-[#333333]">{title}</h3>
// </div>

//   )
// }

// const BenefitsYouWillGain: React.FC = () => {
//   return (
//     <section className="py-12 px-4 max-w-7xl mx-auto">
//       <h2 className="text-[22px] leading-[26px] md:text-[44px] md:font-[700] md:leading-[52px] font-bold text-center mb-10">
//         Benefits you'll gain
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-0 gap-6 justify-items-center">
//         {benefits.map((benefit, index) => (
//           <BenefitCard
//             key={index}
//             icon={benefit.icon}
//             title={benefit.title}
//             alt={benefit.alt}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

// export default BenefitsYouWillGain



