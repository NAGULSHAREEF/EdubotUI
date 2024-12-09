const HeroSection = () => {
  return (
    <div className="h-full bg-[url('./src/assets/Heresction1bg.png')] bg-cover bg-center  ">
      <div className="container mx-auto  justify-center">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 overflow-hidden md:px-16 px-4  md:overflow-visible items-center">
          <div className=" overflow-hidden md:overflow-visible justify-center md:mt-2 mt-12 mb-8 ">
            <p className="text-[#222222] text-[16px]  md:text-[24px] font-bold">#our service - <span className="md:text-[24px] text-[16px] font-[500] md:font-bold">Incubation centers</span></p>
            <h1 className="text-[32px] leading-[36px] md:text-[48px] md:leading-[60px] lg:text-[48px] md:w-[110%] w-[80%] lg:leading-[66px] font-bold text-[#1D1F71] ">
              Bridge Academia and Industry for Future-Ready Graduates.
            </h1>
            <p className="md:text-[24px] text-[17px] font-[400] md:font-[500] md:mb-8 mb-3 mt-3 ml-2  ">Let's help you land your dream career</p>
            
            <div>
              <button className="px-6 py-3  bg-[#F2B331] rounded-[30px] text-[18px] -mt-4 font-500 font-medium ">
                Contact us
              </button>
            </div>
          </div>
          <div className="relative">
  <img
    src="/src/assets/Herosection1.png" 
    alt="Students working together" 
    className=" w-[500px] h-[490px] rounded-lg md:ml-28"
  />
</div>

        </div>
      </div>
    </div>
  )
}

export default HeroSection
