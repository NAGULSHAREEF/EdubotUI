

export default function FeelingConfused() {
  return (
    <div className=" bg-[#17174F] text-white mb-28 md:mb-6">
      <div className="container mx-auto md:px-8 px-12 md:py-0 ">
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Form Column */}
          <div className="space-y-6">
  <div className="space-y-4">
    <h1 className="md:text-[40px] text-[22px] leading-[25px] md:leading-[52px] md:mt-0 mt-8 md:text-nowrap font-bold">
      <span className="text-[#F5B014]">Feeling Confused?</span>
      <br />
      Let Us Help You Find the Perfect Fit
    </h1>
    <p className="md:text-[24px] text-[14px] leading-[17px] font-[300] md:leading-[27px] italic opacity-90">
      &quot;Take a 2-minute Quiz&quot; to match users with personalized internship or training opportunities based on their career goals, current skill levels, and preferred learning styles.
    </p>
  </div>

  <form className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Career Field */}
      <div className="space-y-1">
        <label htmlFor="career-field" className="md:text-[14px] font-[700] md:leading-[16px] ">Career Field</label>
        <select id="career-field" className="w-full text-[14px] text-[#11116B] leading-[16px] font-[400] text-opacity-50  bg-white p-2 rounded">
          <option value="" >Your Interest Field</option>
          <option value="tech">Technology</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
        </select>
      </div>

      {/* Current Skill Level */}
      <div className="space-y-1">
        <label htmlFor="skill-level" className="md:text-[14px] font-[700] md:leading-[16px]">Current Skill Level</label>
        <select id="skill-level" className="w-full text-[14px] text-[#11116B] leading-[16px] font-[400] text-opacity-50 bg-white  p-2 rounded">
          <option value="">Medium</option>
          <option value="beginner">Beginner</option>
          <option value="medium">Medium</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Duration */}
      <div className="space-y-1">
        <label htmlFor="duration" className="md:text-[14px] font-[700] md:leading-[16px]">Duration</label>
        <select id="duration" className="w-full bg-white text-[14px] text-[#11116B] leading-[16px] font-[400] text-opacity-50 p-2 rounded">
          <option value="">Choose Duration</option>
          <option value="3months">3 Months</option>
          <option value="6months">6 Months</option>
          <option value="1year">1 Year</option>
        </select>
      </div>

      {/* Preferred Learning Styles */}
      <div className="space-y-1">
        <label htmlFor="learning-style" className="md:text-[14px] font-[700] md:leading-[16px]">Preferred Learning Styles</label>
        <select id="learning-style" className="w-full bg-white text-[14px] text-[#11116B] leading-[16px] font-[400] text-opacity-50 p-2 rounded">
          <option value="">Training</option>
          <option value="visual">Visual Learning</option>
          <option value="practical">Practical Training</option>
          <option value="theoretical">Theoretical</option>
        </select>
      </div>
    </div>
    <div className="flex justify-center md:justify-between ">
    <button type="submit" className=" w-[150px]   md:w-[160px] flex flex-row bg-[#F2B331] text-[#17174F] text-[18px] items-center gap-2 justify-center p-2 rounded font-[600] transition duration-300">
      Plan Now
      <img src="/src/assets/diamonds.png"
      className=" w-[18px] h-[18px]"/>
    </button>
    </div>
  </form>
</div>


          {/* Image Column */}
          <div className="relative">
            <img
              src="/src/assets/feelingconfused.png"
              alt="Confused person in orange hoodie"

              className="w-full h-auto rounded-lg"
            />
            {/* Decorative Stars */}
            <div className="absolute  md:top-20 md:left-20 text-white text-2xl"><img src="/src/assets/diamonds.png"/></div>
            <div className="absolute md:top-44 md:right-16 text-white text-2xl"><img src="/src/assets/diamonds.png"/></div>
            <div className="absolute md:bottom-10 md:left-10 text-white text-2xl"><img src="/src/assets/diamonds.png"/></div>
            <div className="absolute md:bottom-40 md:right-0 text-white text-2xl"><img src="/src/assets/diamonds.png"/></div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

