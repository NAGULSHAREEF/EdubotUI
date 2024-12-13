import  { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Clock, Users } from 'lucide-react'
import {Link} from 'react-router-dom'
interface Course {
  id: number
  title: string
  image: string
  modules: number
  opportunities: string
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Data Science',
    image: '/src/assets/feature1.png',
    modules: 8,
    opportunities: '1.08 Lac+'
  },
  {
    id: 2,
    title: 'Java full stack',
    image: '/src/assets/feature2.png',
    modules: 8,
    opportunities: '1.08 Lac+'
  },
  {
    id: 3,
    title: 'Python full stack',
    image: '/src/assets/feature3.png',
    modules: 8,
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
    <div className="bg-white shadow-lg border-l border-r border-b border-[#F2B331] overflow-hidden h-[400px]  rounded-[20px_2px_20px_2px] flex-shrink-0 w-[300px] md:w-[350px] transform transition-all duration-500 ease-in-out hover:shadow-xl">
      <div className={`relative h-44 w-full ${bgColorClass} p-6`}>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="bg-white  rounded-[2px_2px_20px_2px] p-6 space-y-3">
        <h3 className="text-[20px] font-[600] text-[#17174F]">{course.title}</h3>
        <div className="inline-block bg-[#F2B331] text-white text-[12px] font-[600] px-3 py-1 rounded-sm">
          Full learning advance course
        </div>
        <div className="flex flex-col gap-3 text-[#17174F] font-[500] text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{course.modules} Modules</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{course.opportunities} opportunities</span>
          </div>
        </div>
        <a
      href="#"
      className="text-[#00A1FF] text-[14px] font-[500] items-center inline-block hover:underline"
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
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % courses.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <div className="w-full bg-[#17174F]">
      <div className="max-w-[1440px] mx-auto px-0 pl-8 md:px-0 md:pl-20 py-10 md:py-16  mb-32 md:mb-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="lg:w-[345px] space-y-6">
            <h1 className="text-[22px] text-center  px-8 md:px-0 md:text-left leading-[26px] md:text-[48px] font-bold text-[#F2B331] md:leading-[66px]  ">
              {isMobile ? (
                "Where Learning Meets Boundless Possibilities."
              ) : (
                "Our featured Skill oriented courses"
              )}
            </h1>
            <p className=" text-center  px-5 md:px-0 md:text-left md:text-[24px] font-[500] text-[14px] text-white leading-[17px] md:leading-[31px] opacity-90">
              {isMobile ? (
                "Bridging academia and industry equips graduates with practical skills and real-world experience, preparing them for today's job market. By integrating education with industry needs, we create future-ready professionals."
              ) : (
                "Because education must evolve to meet industry needs. Our incubation centers are the bridge that ensures students don't just learn theory."
              )}
            </p>
          </div>

          {/* Courses Section */}
          <div className="lg:w-2/3 relative">
            <div className="overflow-hidden">
              <div 
                className="flex gap-6 transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 320}px)`,
                }}
              >
                {[...courses, ...courses].map((course, index) => (
                  <CourseCard key={`${course.id}-${index}`} course={course} />
                ))}
              </div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute right-0 top-0 h-full w-[80px] md:w-[150px] bg-gradient-to-l from-[#17174F] via-[#17174F]/80 to-transparent pointer-events-none" />

            {/* Navigation Controls */}
            <div className="flex items-center w-full md:w-[700px] justify-center gap-20 md:gap-0 md:justify-between mt-8">
              <div className="flex gap-4">
                <button
                  onClick={prevSlide}
                  disabled={isAnimating}
                  className="w-10 h-10 rounded-full  transition-all duration-300 flex items-center justify-center border-[2px] border-[#F2B331]"
                >
                  <ChevronLeft className="w-5 h-5 text-[#F2B331]" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={isAnimating}
                  className="w-10 h-10 rounded-full transition-all duration-300 flex items-center justify-center border-[2px] border-[#F2B331]"
                >
                  <ChevronRight className="w-5 h-5 text-[#F2B331]" />
                </button>
              </div>
              <Link to="/viewallcourses">
              <button className="w-[110px] rounded-[30px] h-10 text-[#F2B331] border-[2px] border-[#F2B331] hover:text-[#F2B331] transition-colors duration-300 text-[18px] font-medium">
                View all
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

