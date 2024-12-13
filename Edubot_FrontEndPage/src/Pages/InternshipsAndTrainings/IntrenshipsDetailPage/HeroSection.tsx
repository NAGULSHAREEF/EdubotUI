import Courseherosectionimage from '../../../assets/DetailHeroSectionImage.png'

interface HeroSectionProps {
  title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title }) => { 
  return (
    <section className="bg-[#1a1147] w-full flex items-center">
      <div className="container mx-auto px-4 md:px-12 py-8 md:py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="md:w-[850px] md:px-0 px-2 space-y-6">
            <h1 className="text-white text-[32px] leading-[36px] md:text-[48px] font-bold md:leading-[55px]">
              {title}
            </h1>
            <p className="text-white text-[16px] leading-[18px] md:text-[24px] md:leading-[30px]">
              520 already enrolled * Gain Course I internship completion certificate*
            </p>
            <div className="">
              <div className="bg-[#4548E3] border-[1px] rounded-[10px] md:text-[18px] text-white px-4 py-2 text-[16px]">
                Enrolment starts from Dec 15
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img 
              src={Courseherosectionimage} 
              alt="Student working at desk with analytics"
              className="w-full h-auto max-w-[500px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;