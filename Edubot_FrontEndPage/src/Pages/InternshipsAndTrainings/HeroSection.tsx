
const HeroSection = () => {
  return (
    <div className="h-full bg-[url('./src/assets/Herosection1bg.png')] bg-cover bg-center">
      <div className="container mx-auto md:px-12 md:py-8">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 overflow-hidden md:px-0 px-4 py-8 md:overflow-visible items-center">
          {/* Left Column - Text Content */}
          <div className=" overflow-hidden md:overflow-visible space-y-6 md:mt-2 ">
            <p className="text-[#222222] text-[16px]  md:text-[24px]">#our service - <span className="md:text-[24px] text-[16px] font-[500] md:font-bold">Incubation Center</span></p>
            {/* use w-80% for getting mobile text */}
            <h1 className="text-[32px] leading-[36px] md:text-[48px] md:leading-[60px] lg:text-[48px] md:w-[85%] w-[88%] lg:leading-[66px] font-bold text-[#1D1F71] ">
              Bridge Academia and Industry for Future-Ready Graduates.
            </h1>
            <p className="md:text-[24px] text-[17px] font-[400] md:font-[500]  ">Let's help you land your dream career</p>
            
            <div>
              <button className="px-6 py-3 bg-[#F2B331] rounded-[30px] text-[18px] font-500 font-medium ">
                Contact us
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-8  md:mt-0">
  <img 
    src="/src/assets/Herosection1.png" 
    alt="Students working together" 
    className=" w-[510] h-[490px] rounded-lg object-cover  md:scale-125 scale-150  "
  />
</div>

        </div>
      </div>
    </div>
  )
}

export default HeroSection