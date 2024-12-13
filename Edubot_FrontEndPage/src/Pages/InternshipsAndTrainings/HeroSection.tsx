import React from 'react'

const HeroSection = () => {
  return (
    <section className="bg-[#1a1147]  w-full flex items-center">
      <div className="container mx-auto px-4 md:px-12 py-8 md:py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className=" md:w-[850px] md:px-0 px-2 space-y-6">
            <h1 className="text-white text-[32px] leading-[36px] md:text-[48px] font-bold md:leading-[55px]  ">
              Internship and training services with{' '}
              <span className="text-[#ffa500]">Guaranteed Placement</span>
            </h1>
            
            <p className="text-white text-[16px] leading-[18px] md:text-[24px] md:leading-[30px] ">
              Over 200+ students are pursuing it.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className=" border-[1px] rounded-[10px]  border-[#FFFFFF] text-white px-4 py-2 md:text-[18px] text-[16px]  ">
                Over all reviews - <span className='md:text-[18px] text-[#F2B331]'>4.3</span>
              </div>
              <div className=" border-[1px] rounded-[10px] border-[#FFFFFF] md:text-[18px] text-white px-4 py-2  text-[16px]">
                Introducing Corporate on campus
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div >
            <img 
              src="/src/assets/gurantedplacement.png" 
              alt="Student working at desk with analytics"
              className="w-full h-auto max-w-[500px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

