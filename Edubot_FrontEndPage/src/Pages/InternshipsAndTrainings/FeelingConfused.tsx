'use client'

import { useState } from 'react'

export default function FeelingConfused() {
  const [formData, setFormData] = useState({
    careerField: '',
    skillLevel: '',
    learningStyle: '',
    duration: ''
  })
  
  const [showPlanSummary, setShowPlanSummary] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Only show plan summary if all fields are filled
    if (Object.values(formData).every(value => value !== '')) {
      setShowPlanSummary(true)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const resetForm = () => {
    setFormData({
      careerField: '',
      skillLevel: '',
      learningStyle: '',
      duration: ''
    })
    setShowPlanSummary(false)
  }

  const handleButtonClick = () => {
    if (showPlanSummary) {
      resetForm()
    } else {
      handleSubmit(new Event('submit') as React.FormEvent)
    }
  }

  return (
    <div className="bg-[#17174F]  text-white mb-28 md:mb-6">
      <div className="container mx-auto  md:px-8 px-12 md:py-0">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Form Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="md:text-[40px] text-[22px] leading-[25px] md:leading-[52px] md:mt-0 mt-8 md:text-nowrap font-bold">
                <span className="text-[#F5B014]">Feeling Confused?</span>
                <br />
                Let Us Help You Find the Perfect Fit
              </h1>
              <p className="md:text-[22px] text-[14px] leading-[17px] font-[300] md:leading-[27px] italic opacity-90">
                &quot;Take a 2-minute Quiz&quot; to match users with personalized internship or training opportunities based on their career goals, current skill levels, and preferred learning styles.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                {/* Career Field */}
                <div className="space-y-1">
                  <label htmlFor="careerField" className="md:text-[14px] font-[700] md:leading-[16px]">
                    Career Field
                  </label>
                  <div className="relative">
                    <select 
                      id="careerField" 
                      value={formData.careerField}
                      onChange={handleInputChange}
                      className="w-full text-[14px] h-[40px] text-[#11116B] leading-[16px] font-[400] text-opacity-50 bg-white px-3 py-2 rounded-[8px] appearance-none cursor-pointer"
                    >
                      <option value="">Your Interest Field</option>
                      <option value="tech">Technology</option>
                      <option value="design">Design</option>
                      <option value="marketing">Marketing</option>
                    </select>
                    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-[#F2B331]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Current Skill Level */}
                <div className="space-y-1">
                  <label htmlFor="skillLevel" className="md:text-[14px] font-[700] md:leading-[16px]">
                    Current Skill Level
                  </label>
                  <div className="relative">
                    <select 
                      id="skillLevel"
                      value={formData.skillLevel}
                      onChange={handleInputChange}
                      className="w-full text-[14px] h-[40px] text-[#11116B] leading-[16px] font-[400] text-opacity-50 bg-white px-3 py-2 rounded-[8px] appearance-none cursor-pointer"
                    >
                      <option value="">Medium</option>
                      <option value="beginner">Beginner</option>
                      <option value="medium">Medium</option>
                      <option value="advanced">Advanced</option>
                    </select>
                    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-[#F2B331]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                {/* Preferred Learning Styles */}
                <div className="space-y-1">
                  <label htmlFor="learningStyle" className="md:text-[14px] font-[700] md:leading-[16px]">
                    Preferred Learning Styles
                  </label>
                  <div className="relative">
                    <select 
                      id="learningStyle"
                      value={formData.learningStyle}
                      onChange={handleInputChange}
                      className="w-full bg-white text-[14px] h-[40px] text-[#11116B] leading-[16px] font-[400] text-opacity-50 px-3 py-2 rounded-[8px] appearance-none cursor-pointer"
                    >
                      <option value="">Training</option>
                      <option value="visual">Visual Learning</option>
                      <option value="practical">Practical Training</option>
                      <option value="theoretical">Theoretical</option>
                    </select>
                    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-[#F2B331]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Duration */}
                <div className="space-y-1">
                  <label htmlFor="duration" className="md:text-[14px] font-[700] md:leading-[16px]">Duration</label>
                  <div className="relative">
                    <select 
                      id="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full bg-white text-[14px] text-[#11116B] h-[40px] leading-[16px] font-[400] text-opacity-50 px-3 py-2 rounded-[8px] appearance-none cursor-pointer"
                    >
                      <option value="">Choose Duration</option>
                      <option value="3months">3 Months</option>
                      <option value="6months">6 Months</option>
                      <option value="1year">1 Year</option>
                    </select>
                    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-[#F2B331]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center md:justify-between">
                <button 
                  type="button" 
                  onClick={handleButtonClick}
                  className="w-[150px] md:w-[200px] h-[40px] flex flex-row bg-[#F2B331] text-[#17174F] text-[18px] items-center gap-2 justify-center p-2 rounded-[8px] md:mt-2 font-[600] transition duration-300"
                >
                  {showPlanSummary ? 'Map Out the Next Journey' : 'Plan Now'}
                  <img src="/src/assets/diamonds.png" className="w-[18px] h-[18px]" alt="" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Conditional Rendering */}
          <div className="relative">
            {!showPlanSummary ? (
              <>
                <img
                  src="/src/assets/feelingconfused.png"
                  alt="Confused person in orange hoodie"
                  className="w-full h-auto rounded-lg"
                />
                {/* Decorative Stars */}
                <div className="absolute md:top-20 md:left-20 text-white text-2xl">
                  <img src="/src/assets/diamonds.png" alt="" />
                </div>
                <div className="absolute md:top-44 md:right-16 text-white text-2xl">
                  <img src="/src/assets/diamonds.png" alt="" />
                </div>
                <div className="absolute md:bottom-10 md:left-10 text-white text-2xl">
                  <img src="/src/assets/diamonds.png" alt="" />
                </div>
                <div className="absolute md:bottom-40 md:right-0 text-white text-2xl">
                  <img src="/src/assets/diamonds.png" alt="" />
                </div>
              </>
            ) : (
              <div className="bg-[#1E1E5F] p-6 rounded-lg space-y-6">
                <h2 className="text-[#F5B014] text-2xl font-bold mb-4">
                  Plan Summary for the Next 6 Months
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#F5B014] font-semibold mb-2">First 2 Months:</h3>
                    <p className="text-white opacity-90">
                      Deep dive into data science fundamentals, focusing on areas like Python,
                      SQL, and statistics.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#F5B014] font-semibold mb-2">Months 3-4:</h3>
                    <p className="text-white opacity-90">
                      Specialize in a subfield (e.g., machine learning, data visualization, or AI).
                      Take a course or start working on relevant projects.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#F5B014] font-semibold mb-2">Months 5-6:</h3>
                    <p className="text-white opacity-90">
                      Apply your knowledge in practical projects. Try freelance work, internships,
                      or contribute to open-source projects. Keep improving your skills by staying
                      engaged with industry communities.
                    </p>
                  </div>
                </div>
                {/* Decorative Stars */}
                <div className="absolute top-4 right-4">
                  <img src="/src/assets/diamonds.png" alt="" className="w-[18px] h-[18px]" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <img src="/src/assets/diamonds.png" alt="" className="w-[18px] h-[18px]" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

