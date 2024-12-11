import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <div className="h-full bg-[url('./src/assets/Heresction1bg.png')] bg-cover bg-center">
      <div className="container mx-autos">
        <div className="flex flex-col md:flex-row justify-around gap-6 md:gap-8 items-center">
          <div className="flex flex-col justify-center text-center md:text-left md:mt-2 mt-12 mb-8 md:w-[600px]">
            <p className="text-[#222222] text-[16px] md:text-[24px] font-bold">#our service - <span className="md:text-[24px] text-[16px] font-[500] md:font-bold">Skill oriented courses</span></p>
            <h1 className="text-[32px] leading-[36px] md:text-[48px] md:leading-[60px] lg:leading-[66px] font-bold text-[#1D1F71]">
              Bridge Academia and Industry for Future-Ready Graduates.
            </h1>
            <p className="md:text-[24px] text-[17px] font-[400] md:font-[500] md:mb-8 mb-4 mt-4 ml-2">Let's help you land your dream career</p>
            <div>
              <Link to="/getintouch">
              <button className="px-6 py-3  bg-[#F2B331] rounded-[30px] text-[18px] font-500 font-medium ">
                Contact us
              </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/src/assets/Herosection3.png" 
              alt="Students working together" 
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
