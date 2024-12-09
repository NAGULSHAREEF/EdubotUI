import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Clock, Weight } from 'lucide-react'

interface Course {
  id: number
  title: string
  image: string
  duration: number
  opportunities: string
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Data engineering',
    image: '/src/assets/feature1.png',
    duration: 8,
    opportunities: '1.08 Lac+'
  },
  {
    id: 2,
    title: 'Salesforce development',
    image: '/src/assets/feature2.png',
    duration: 8,
    opportunities: '1.08 Lac+'
  },
  {
    id: 3,
    title: 'Python full stack',
    image: '/src/assets/feature3.png',
    duration: 8,
    opportunities: '1.08 Lac+'
  }
]

const backgroundColors = {
  1: 'bg-[#E7F8FF]',
  2: 'bg-[#F0FEDC]',
  3: 'bg-[#FFE4FA]',
}

function CourseCard({ course }: { course: Course }) {
  const bgColorClass = backgroundColors[course.id as keyof typeof backgroundColors] || 'bg-gray-50'

  return (
    <div className="bg-white shadow-md overflow-hidden h-[399px] md:h-[402px] rounded-[20px_2px_20px_2px] flex-shrink-0">
      <div className={`relative h-48 w-full ${bgColorClass}`}>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="bg-white border-l border-r border-b border-[#F2B331] rounded-[2px_2px_20px_2px] py-5 px-8 space-y-2">
        <h3 className="text-[18px] md:text-[20px] font-[500]">{course.title}</h3>
        <div className="inline-block bg-[#F2B331] text-white text-[14px] font-[700] px-3 py-1">
          Internship with guaranteed job
        </div>
        <div className="flex flex-col gap-4 text-[#1D1F71] font-[700]">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{course.duration} months</span>
          </div>
          <div className="flex items-center gap-2">
            <Weight className="w-5 h-5" />
            <span>{course.opportunities} opportunities</span>
          </div>
        </div>
        <a
          href="#"
          className="text-[#00A1FF] text-[14px] font-[500] inline-block hover:underline"
        >
          Know more &gt;
        </a>
      </div>
    </div>
  )
}

export default function Courses() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % courses.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length)
  }

  const getVisibleCourses = () => {
    const visibleCourses = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % courses.length
      visibleCourses.push(courses[index])
    }
    return visibleCourses
  }

  return (
    <div className="max-w-[1440px] bg-[#17174F] mx-auto px-5 md:pl-16 md:py-16 py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Text Content */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl md:text-[48px] md:leading-[60px] md:text-left text-center font-bold text-[#F2B331] mb-6">
            Our featured Skill oriented courses
          </h2>
          <p className="md:text-[24px] font-[400] text-[#FFFFFF] md:text-left text-center md:leading-[31px] text-lg">
            Because education must evolve to meet industry needs. Our incubation centers are the
            bridge that ensures students don't just learn theory.
          </p>
        </div>

        {/* Courses Section - Carousel on Desktop, Stack on Mobile */}
        <div className="lg:w-2/3 relative">
          {isMobile ? (
            // Mobile View - Stacked Cards
            <div className="flex flex-col gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            // Desktop View - Carousel
            <>
              <div className="overflow-hidden">
                <div 
                  className="flex gap-6 transition-transform duration-300 ease-in-out"
                >
                  {getVisibleCourses().map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>

              {/* Navigation Buttons - Only on Desktop */}
              <button
                onClick={prevSlide}
                className="absolute left-0 md:-left-3 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg z-10"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg z-10"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
                  
              {/* Gradient Overlay - Only on Desktop */}
              <div className="absolute -right-5 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

