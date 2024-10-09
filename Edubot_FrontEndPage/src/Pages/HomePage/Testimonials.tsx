'use client'

import { useState } from 'react'
import Image from '/src/assets/testipage1.svg'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    quote: "We Aim To Skill Up To 10,000 Students Through Our SOP Programs",
    author: "Sasanka Paladugu"
  },
  {
    quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    author: "Malcolm X"
  },
  {
    quote: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
    author: "Brian Herbert"
  }
]

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
      <div className="relative flex flex-col md:flex-row w-full justify-center bg-[#17174D] text-white z-0 mt-10">
        <div className="flex flex-1 flex-col w-full md:w-[60%] justify-between sm:pt-4 sm:pb-4 pt-10 pb-10 rounded-r-3xl bg-[#FDF0D6] z-10 relative">
          <div className="sm:mb-2 mb-4 flex flex-row justify-center sm:gap-20 gap-5 sm:ml-[-40px] order-2 sm:order-1 sm:p-10 p-2">
            {[
              { percentage: '50-70%', description: 'Drop in placements of many Collages' },
              { percentage: '85-90%', description: 'Students are not skilled enough for industries' },
              { percentage: '80000+', description: 'Startups launched in India, with new oppertunities' },
            ].map((stat, index) => (
              <div key={index} className="flex sm:w-[150px] sm:h-[150px] w-[500px] flex-col items-center rounded-full border-[0.55px] border-[#F2B331] bg-white sm:p-4 p-4 text-center">
                <span className="sm:text-2xl text-xl font-bold text-indigo-900">{stat.percentage}</span>
                <span className="sm:text-sm text-xs text-indigo-700">{stat.description}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto sm:ml-20 ml-0 order-1 sm:order-2">
            <h1 className="sm:mb-2 mb-2 text-4xl font-bold text-indigo-900">Need of hour</h1>
            <p className="sm:mb-4 mb-2 sm:w-[500px] w-[380px] sm:text-lg text-md  text-indigo-800">
              A significant number of students today lack the essential skills required to meet the demands of modern industries.
            </p>
            
          </div> 
          <div className='order-3 sm:order-3 sm:ml-20 sm:mb-10 mb-4'>
          <button className="rounded-full flex flex-row bg-yellow-500 px-6 py-3 font-semibold text-indigo-900 hover:bg-yellow-400 transition-colors duration-200">
              Read blogs to know more <span><ChevronRight className="ml-2 mt-[5px] h-4 w-4 text-[20px]" /></span>
            </button>
          </div>
        </div>
        
        <div className='flex flex-col justify-center z-50 ml-[-20px] w-full md:w-[40%] mt-10 sm:mt-0'>
            <button 
              onClick={nextSlide}
              className="rounded-full p-2 focus:outline-none bg-yellow-500 w-[40px] h-[40px]"
              aria-label="Next slide"
            >
              <ChevronLeft className="h-4 w-4 text-[30px] text-black" />
            </button>
          <div className='w-full'>
            <div className="sm:ml-20 ml-0 grid grid-cols-7 justify-center items-center relative" style={{ height: '200px', width: '400px' }}>
              <img
                src={Image} 
                alt="Person 1"
                width={currentSlide === 0 ? 180 : 90} // Increase size if current
                height={currentSlide === 0 ? 180 : 90} // Increase size if current
                className={`absolute col-start-2 col-span-2 rounded-full border-2 border-white transition-transform duration-300 ${currentSlide === 0 ? 'transform scale-110' : ''}`}
                style={{
                  transform: `translate(${Math.cos((0 * Math.PI) / 4 - Math.PI / 2) * 100}px, ${Math.sin((0 * Math.PI) / 4 - Math.PI / 2) * 100}px)`,
                  marginLeft: `30px`, // Adjusted margin for consistent alignment
                  marginTop: `0px`, // Adjusted margin for consistent alignment
                }}
              />
              <img
                src={Image} 

                alt="Person 2"
                width={currentSlide === 1 ? 180 : 90} // Increase size if current
                height={currentSlide === 1 ? 180 : 90} // Increase size if current
                className={`absolute rounded-full col-start-4 col-span-2 border-2 border-white transition-transform duration-300 ${currentSlide === 1 ? 'transform scale-110' : ''}`}
                style={{
                  transform: `translate(${Math.cos((1 * Math.PI) / 4 - Math.PI / 2) * 100}px, ${Math.sin((1 * Math.PI) / 4 - Math.PI / 2) * 100}px)`,
                  marginLeft: `-30px`, // Adjusted margin for consistent alignment
                  marginTop: `-30px`, // Adjusted margin for consistent alignment
                }}
              />
              <img
                src={Image} 
                alt="Person 3"
                width={currentSlide === 2 ? 180 : 90} // Increase size if current
                height={currentSlide === 2 ? 180 : 90} // Increase size if current
                className={`absolute rounded-full col-start-6 col-span-2 border-2 border-white transition-transform duration-300 ${currentSlide === 2 ? 'transform scale-110' : ''}`}
                style={{
                  transform: `translate(${Math.cos((2 * Math.PI) / 4 - Math.PI / 2) * 100}px, ${Math.sin((2 * Math.PI) / 4 - Math.PI / 2) * 100}px)`,
                  marginLeft: `-60px`, // Adjusted margin for consistent alignment
                  marginTop: `-10px`, // Adjusted margin for consistent alignment
                }}
              />
            </div>
            <div className='flex ml-10 flex-row gap-10'>
              <div className='mt-[-60px]'>
                <blockquote className="w-[300px] text-xl text-[#ffffff] ">
                  "{slides[currentSlide].quote}"
                </blockquote>
                <cite className="text-2xl font-bold">{slides[currentSlide].author}</cite>
              </div>
              <div className='ml-[-20px]'>
                <img src="/src/assets/quote.png" alt="Person 1" />
              </div>
            </div>
            <div className="absolute ml-10 bottom-8 right-8 flex space-x-2">
              <button 
                onClick={prevSlide}
                className="rounded-full p-2 focus:outline-none focus:ring-2  bg-yellow-500  focus:ring-yellow-500 transition-colors duration-200"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-4 w-4 text-white" />
              </button>
              <div className="left-8 flex space-x-2">
                {slides.map((_, index) => (
                  <div 
                    key={index}
                    className={`mt-3 h-2 w-2 rounded-full ${index === currentSlide ? 'bg-yellow-500' : 'bg-white opacity-50'}`}
                  ></div>
                ))}
              </div>
              <button 
                onClick={nextSlide}
                className="rounded-full p-2 focus:outline-none bg-yellow-500 focus:ring-2 focus:ring-yellow-500 transition-colors duration-200"
                aria-label="Next slide"
              >
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}