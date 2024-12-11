const HeroSection = () => {
  return (
    <div className="h-full bg-[url('/src/assets/herosection-bg.png')] bg-cover bg-center">
      <div className="container mx-auto md:px-12 ">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 overflow-hidden md:px-0 px-8  md:overflow-visible items-center">
          {/* Left Column - Text Content */}
          <div className="overflow-hidden md:overflow-visible md:mt-2">
            <p className="text-[#222222] text-[16px] md:text-[24px]">#our service - <span className="md:text-[24px] text-[16px] font-[500] md:font-bold">Internship and Training</span></p>
            <h1 className="text-[32px] leading-[36px] mt-2 md:mt-2 md:text-[48px] md:leading-[60px] lg:text-[48px] md:w-[130%] w-[80%] lg:leading-[66px] font-bold text-[#1D1F71]">
              Find opportunities tailored to your career goals and industry.
            </h1>
            <p className="md:text-[24px] text-[17px] font-[400] mt-2 md:mt-3 md:font-[500]">Let's help you land your dream career</p>
            
            <div className="md:mt-5 mt-2">
              <button className="px-6 py-3 bg-[#F2B331] rounded-[30px] text-[18px] font-500 font-medium">
                Explore Internships and Trannings
              </button>
            </div>
          </div>
          {/* Right Column - Image */}
          <div className="mt-8 md:mt-0">
            <img 
              src="/src/assets/Internshipsimage.png" 
              alt="Students working together" 
              className="w-full md:w-[620px] h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

