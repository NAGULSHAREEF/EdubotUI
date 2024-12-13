import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Clock, Weight, Search } from 'lucide-react'
import courseimage1 from '/src/assets/feature1.png'
import courseimage2 from '/src/assets/feature2.png'
import courseimage3 from '/src/assets/feature3.png'

interface Course {
  id: number
  title: string
  image: string
  duration: number
  opportunities: string
  bgColor: string
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Data Engineering',
    image: courseimage1,
    duration: 8,
    opportunities: '1.08 Lac+',
    bgColor: 'bg-[#E7F8FF]'
  },
  {
    id: 2,
    title: 'Salesforce Development',
    image: courseimage2,
    duration: 6,
    opportunities: '1.2 Lac+',
    bgColor: 'bg-[#F0FEDC]'
  },
  {
    id: 3,
    title: 'Python Full Stack',
    image: courseimage3,
    duration: 9,
    opportunities: '1.5 Lac+',
    bgColor: 'bg-[#FFE4FA]'
  },
  {
    id: 4,
    title: 'Machine Learning',
    image: courseimage1,
    duration: 12,
    opportunities: '2.0 Lac+',
    bgColor: 'bg-[#FFF4E5]'
  },
  {
    id: 5,
    title: 'Cloud Computing',
    image: courseimage2,
    duration: 7,
    opportunities: '1.3 Lac+',
    bgColor: 'bg-[#E5F8FF]'
  },
  {
    id: 6,
    title: 'DevOps Engineering',
    image: courseimage3,
    duration: 10,
    opportunities: '1.8 Lac+',
    bgColor: 'bg-[#F0FFF4]'
  },
  {
    id: 7,
    title: 'UI/UX Design',
    image: courseimage1,
    duration: 6,
    opportunities: '1.0 Lac+',
    bgColor: 'bg-[#FFF0F0]'
  },
  {
    id: 8,
    title: 'Blockchain Development',
    image: courseimage2,
    duration: 11,
    opportunities: '2.2 Lac+',
    bgColor: 'bg-[#F5E6FF]'
  },
  {
    id: 9,
    title: 'Digital Marketing',
    image: courseimage3,
    duration: 5,
    opportunities: '0.9 Lac+',
    bgColor: 'bg-[#E6FFFA]'
  },
  {
    id: 10,
    title: 'Cybersecurity',
    image: courseimage1,
    duration: 9,
    opportunities: '1.7 Lac+',
    bgColor: 'bg-[#EDF2FF]'
  },
  {
    id: 11,
    title: 'Mobile App Development',
    image: courseimage1,
    duration: 8,
    opportunities: '1.4 Lac+',
    bgColor: 'bg-[#FFEDD5]'
  },
  {
    id: 12,
    title: 'Data Science',
    image: courseimage3,
    duration: 10,
    opportunities: '1.9 Lac+',
    bgColor: 'bg-[#F0F5FF]'
  },
  {
    id: 13,
    title: 'Network Administration',
    image: courseimage2,
    duration: 7,
    opportunities: '1.1 Lac+',
    bgColor: 'bg-[#FFF5F5]'
  },
  {
    id: 14,
    title: 'Artificial Intelligence',
    image: courseimage2,
    duration: 12,
    opportunities: '2.3 Lac+',
    bgColor: 'bg-[#F0FFF4]'
  },
  {
    id: 15,
    title: 'Game Development',
    image: courseimage3,
    duration: 9,
    opportunities: '1.6 Lac+',
    bgColor: 'bg-[#FFF0F5]'
  },
  {
    id: 16,
    title: 'Big Data Analytics',
    image: courseimage1,
    duration: 11,
    opportunities: '2.1 Lac+',
    bgColor: 'bg-[#F5F5FF]'
  },
  {
    id: 17,
    title: 'IoT Development',
    image: courseimage3,
    duration: 8,
    opportunities: '1.5 Lac+',
    bgColor: 'bg-[#FFFAF0]'
  },
  {
    id: 18,
    title: 'Business Intelligence',
    image: courseimage2,
    duration: 10,
    opportunities: '1.8 Lac+',
    bgColor: 'bg-[#F0FFFF]'
  }
]

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white w-full max-w-[380px] rounded-[20px_2px_20px_2px] shadow-md overflow-hidden border border-[#F2B331]">
      <div className={`relative h-48 w-full ${course.bgColor}`}>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-contain border-b border-[#F2B331]"
        />
      </div>

      <div className="bg-white py-5 px-8 space-y-4">
        <h3 className="text-[18px] md:text-[24px] font-[500]">{course.title}</h3>
        <div className="inline-block bg-[#F2B331] text-white text-[14px] font-[700] px-3 py-1">
          Full learning advance course
        </div>
        <div className="flex flex-col gap-4 text-[#1D1F71] font-[700]">
          <div className="flex items-center gap-1">
            <Clock className="w-5 h-5" />
            <span>{course.duration} months</span>
          </div>
          <div className="flex items-center gap-1">
            <Weight className="w-5 h-5" />
            <span>{course.opportunities} opportunities</span>
          </div>
        </div>
        <a
          href="#"
          className="text-[#00A1FF] text-[14px] font-[500] leading-[23px] inline-block hover:underline"
        >
          Know more &gt;
        </a>
      </div>
    </div>
  )
}

export default function ViewAllCourses() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [coursesPerPage, setCoursesPerPage] = useState(typeof window !== 'undefined' && window.innerWidth < 768 ? 5 : 9)
  useEffect(() => {
    const handleResize = () => {
      setCoursesPerPage(window.innerWidth < 768 ? 5 : 9)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Filter courses based on search query
  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Calculate pagination
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage)
  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse)

  // Generate page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-12">
      <h1 className="text-[24px] leading-[30px] md:text-[44px] md:leading-[30px] text-[#000000] font-bold text-center md:mb-2 mb-2">
        Find your learning program
      </h1>
      <p className='text-center md:mb-3 mb-2 md:text-[24px] text-[#4E4E4E] text-[16px] leading-[30px] font-[500] '>Amet minim mollit non deserunt ullamco</p>

      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder=" Front end develeopment course "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-12 pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#1D1F71]"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#F2B331] text-white px-6 py-2 rounded-full text-sm font-medium">
          Search
        </button>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {currentCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between md:px-48 items-center">
          <div className="text-sm md:text-[20px] md:leading-[24px] font-[600] text-[#444343] ">
            Page <span className="font-[600] md:pl-2">{currentPage}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full text-[#1D1F71] disabled:opacity-50"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1">
              {pageNumbers.map((number, index) => {
                if (
                  number === 1 ||
                  number === totalPages ||
                  (number >= currentPage - 1 && number <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={number}
                      onClick={() => setCurrentPage(number)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm md:text-[20px] md:leading-[24px] font-[600]  ${
                        currentPage === number
                          ? 'text-[#1D1F71] font-bold'
                          : 'text-[#333333] font-[400] hover:bg-gray-100'
                      }`}
                    >
                      {number}
                    </button>
                  )
                } else if (
                  (index === 1 && currentPage > 3) ||
                  (index === pageNumbers.length - 2 && currentPage < totalPages - 2)
                ) {
                  return (
                    <span
                      key={`ellipsis-${index}`}
                      className="px-1 text-gray-400"
                    >
                      ...
                    </span>
                  )
                }
                return null
              })}
            </div>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full text-[#1D1F71] disabled:opacity-50"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

