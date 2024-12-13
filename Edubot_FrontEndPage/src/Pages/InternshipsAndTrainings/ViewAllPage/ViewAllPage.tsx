import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ChevronDown, Clock, Weight, Search } from 'lucide-react'

interface Course {
  id: number
  title: string
  type: 'internship' | 'training'
  image: string
  duration: number
  opportunities: string
  bgColor: string
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Data Engineering',
    type: 'internship',
    image: '/placeholder.svg?height=200&width=300',
    duration: 8,
    opportunities: '1.08 Lac+',
    bgColor: 'bg-[#E7F8FF]'
  },
  {
    id: 2,
    title: 'Salesforce Development',
    type: 'training',
    image: '/placeholder.svg?height=200&width=300',
    duration: 6,
    opportunities: '1.2 Lac+',
    bgColor: 'bg-[#F0FEDC]'
  },
  {
    id: 3,
    title: 'Python Full Stack',
    type: 'internship',
    image: '/placeholder.svg?height=200&width=300',
    duration: 9,
    opportunities: '1.5 Lac+',
    bgColor: 'bg-[#FFE4FA]'
  },
  {
    id: 4,
    title: 'Machine Learning',
    type: 'training',
    image: '/placeholder.svg?height=200&width=300',
    duration: 12,
    opportunities: '2.0 Lac+',
    bgColor: 'bg-[#FFF4E5]'
  },
  {
    id: 5,
    title: 'Cloud Computing',
    type: 'internship',
    image: '/placeholder.svg?height=200&width=300',
    duration: 7,
    opportunities: '1.3 Lac+',
    bgColor: 'bg-[#E5F8FF]'
  },
  {
    id: 6,
    title: 'DevOps Engineering',
    type: 'training',
    image: '/placeholder.svg?height=200&width=300',
    duration: 10,
    opportunities: '1.8 Lac+',
    bgColor: 'bg-[#F0FFF4]'
  },
  {
    id: 7,
    title: 'UI/UX Design',
    type: 'internship',
    image: '/placeholder.svg?height=200&width=300',
    duration: 6,
    opportunities: '1.0 Lac+',
    bgColor: 'bg-[#FFF0F0]'
  },
  {
    id: 8,
    title: 'Blockchain Development',
    type: 'training',
    image: '/placeholder.svg?height=200&width=300',
    duration: 11,
    opportunities: '2.2 Lac+',
    bgColor: 'bg-[#F5E6FF]'
  },
  {
    id: 9,
    title: 'Digital Marketing',
    type: 'internship',
    image: '/placeholder.svg?height=200&width=300',
    duration: 5,
    opportunities: '0.9 Lac+',
    bgColor: 'bg-[#E6FFFA]'
  },
  {
    id: 10,
    title: 'Cybersecurity',
    type: 'training',
    image: '/placeholder.svg?height=200&width=300',
    duration: 9,
    opportunities: '1.7 Lac+',
    bgColor: 'bg-[#EDF2FF]'
  },
  {
    id: 11,
    title: 'Mobile App Development',
    type: 'internship',
    image: '/placeholder.svg?height=200&width=300',
    duration: 8,
    opportunities: '1.4 Lac+',
    bgColor: 'bg-[#FFEDD5]'
  },
  {
    id: 12,
    title: 'Data Science',
    type: 'training',
    image: '/placeholder.svg?height=200&width=300',
    duration: 10,
    opportunities: '1.9 Lac+',
    bgColor: 'bg-[#F0F5FF]'
  },
  {
    id: 13,
    title: 'Network Administration',
    type: 'internship',
    image: '/placeholder.svg?height=200&width=300',
    duration: 7,
    opportunities: '1.1 Lac+',
    bgColor: 'bg-[#FFF5F5]'
  },
  {
    id: 14,
    title: 'Artificial Intelligence',
    type: 'training',
    image: '/placeholder.svg?height=200&width=300',
    duration: 12,
    opportunities: '2.3 Lac+',
    bgColor: 'bg-[#F0FFF4]'
  },
  {
    id: 15,
    title: 'Game Development',
    type: 'internship',
    image: '/placeholder.svg?height=200&width=300',
    duration: 9,
    opportunities: '1.6 Lac+',
    bgColor: 'bg-[#FFF0F5]'
  },
  {
    id: 16,
    title: 'Big Data Analytics',
    type: 'training',
    image: '/placeholder.svg?height=200&width=300',
    duration: 11,
    opportunities: '2.1 Lac+',
    bgColor: 'bg-[#F5F5FF]'
  },
  {
    id: 17,
    title: 'IoT Development',
    type: 'internship',
    image: '/placeholder.svg?height=200&width=300',
    duration: 8,
    opportunities: '1.5 Lac+',
    bgColor: 'bg-[#FFFAF0]'
  },
  {
    id: 18,
    title: 'Business Intelligence',
    type: 'training',
    image: '/placeholder.svg?height=200&width=300',
    duration: 10,
    opportunities: '1.8 Lac+',
    bgColor: 'bg-[#F0FFFF]'
  },
  {
    id: 10,
    title: 'Cybersecurity',
    type: 'training',
    image: '/placeholder.svg?height=200&width=300',
    duration: 9,
    opportunities: '1.7 Lac+',
    bgColor: 'bg-[#EDF2FF]'
  },
  {
    id: 11,
    title: 'Mobile App Development',
    type: 'internship',
    image: '/placeholder.svg?height=200&width=300',
    duration: 8,
    opportunities: '1.4 Lac+',
    bgColor: 'bg-[#FFEDD5]'
  },
  {
    id: 12,
    title: 'Data Science',
    type: 'training',
    image: '/placeholder.svg?height=200&width=300',
    duration: 10,
    opportunities: '1.9 Lac+',
    bgColor: 'bg-[#F0F5FF]'
  },
  {
    id: 13,
    title: 'Network Administration',
    type: 'internship',
    image: '/placeholder.svg?height=200&width=300',
    duration: 7,
    opportunities: '1.1 Lac+',
    bgColor: 'bg-[#FFF5F5]'
  },
  {
    id: 14,
    title: 'Artificial Intelligence',
    type: 'training',
    image: '/placeholder.svg?height=200&width=300',
    duration: 12,
    opportunities: '2.3 Lac+',
    bgColor: 'bg-[#F0FFF4]'
  },
  {
    id: 15,
    title: 'Game Development',
    type: 'internship',
    image: '/placeholder.svg?height=200&width=300',
    duration: 9,
    opportunities: '1.6 Lac+',
    bgColor: 'bg-[#FFF0F5]'
  },
  {
    id: 16,
    title: 'Big Data Analytics',
    type: 'training',
    image: '/placeholder.svg?height=200&width=300',
    duration: 11,
    opportunities: '2.1 Lac+',
    bgColor: 'bg-[#F5F5FF]'
  },
  {
    id: 17,
    title: 'IoT Development',
    type: 'internship',
    image: '/placeholder.svg?height=200&width=300',
    duration: 8,
    opportunities: '1.5 Lac+',
    bgColor: 'bg-[#FFFAF0]'
  },
  {
    id: 18,
    title: 'Business Intelligence',
    type: 'training',
    image: '/placeholder.svg?height=200&width=300',
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
          {course.type === 'internship' ? 'Internship' : 'Training'} with guaranteed job
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

export default function ViewAllPage() {
  const [activeTab, setActiveTab] = useState<'internship' | 'training'>('internship')
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null)
  const [showDurationFilter, setShowDurationFilter] = useState(false)
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

  // Filter courses based on type, duration and search query
  const filteredCourses = courses.filter(course => {
    const matchesType = course.type === activeTab
    const matchesDuration = selectedDuration ? course.duration === selectedDuration : true
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesDuration && matchesSearch
  })

  // Get unique durations for filter
  const uniqueDurations = Array.from(new Set(courses.map(course => course.duration))).sort((a, b) => a - b)

  // Calculate pagination
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage)
  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse)

  // Generate page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-12">
      <h1 className="text-[22px] leading-[26px] md:text-[32px] md:leading-[44px] font-bold text-center mb-8">
        Find your training and Internship program
      </h1>

      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search courses, trainings, internships..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-12 pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#1D1F71]"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#F2B331] text-white px-6 py-2 rounded-full text-sm font-medium">
          Search
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        {/* Tab Buttons */}
        <div className="bg-white rounded-[150px] md:w-[406px] w-full h-[55px] shadow-[0px_10px_18px_0px_#806FAE20]">
          <div className="flex items-center h-full">
            <button
              onClick={() => setActiveTab('internship')}
              className={`relative flex-1 h-full rounded-[150px] transition-colors ${
                activeTab === 'internship'
                  ? 'bg-[#1D1F71] text-white'
                  : 'text-[#333333] hover:bg-gray-100'
              }`}
            >
              <span className="relative z-10 font-bold text-[12px] md:text-[18px]">
                {activeTab === 'internship' && (
                  <span className="absolute right-20 md:right-28 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F2B331]" />
                )}
                Internships
              </span>
            </button>
            <button
              onClick={() => setActiveTab('training')}
              className={`relative flex-1 h-full rounded-[150px] transition-colors ${
                activeTab === 'training'
                  ? 'bg-[#1D1F71] text-white'
                  : 'text-[#333333] hover:bg-gray-100'
              }`}
            >
              <span className="relative z-10 font-bold text-[12px] md:text-[18px]">
                {activeTab === 'training' && (
                  <span className="absolute right-16 md:right-20 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F2B331]" />
                )}
                Training
              </span>
            </button>
          </div>
        </div>

        {/* Sort Button */}
        <div className="relative">
          <button
            onClick={() => setShowDurationFilter(!showDurationFilter)}
            className="flex justify-center items-center rounded-[30px] gap-2 w-[130px] h-[45px] md:w-[151px] md:h-[46px] px-4 py-2 bg-[#F2B331] md:text-[18px] text-[#15164B] font-[500]"
          >
            Short by
            <ChevronDown className="w-5 h-5" />
          </button>
          {showDurationFilter && (
            <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 z-10">
              <button
                onClick={() => {
                  setSelectedDuration(null)
                  setShowDurationFilter(false)
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                All Durations
              </button>
              {uniqueDurations.map(duration => (
                <button
                  key={duration}
                  onClick={() => {
                    setSelectedDuration(duration)
                    setShowDurationFilter(false)
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  {duration} months
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {currentCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Updated Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Page <span className="font-medium">{currentPage}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1">
              {pageNumbers.map((number, index) => {
                // Show first page, current page, last page, and pages around current page
                if (
                  number === 1 ||
                  number === totalPages ||
                  (number >= currentPage - 1 && number <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={number}
                      onClick={() => setCurrentPage(number)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentPage === number
                          ? 'text-[#1D1F71] font-bold'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {number}
                    </button>
                  )
                } else if (
                  (index === 1 && currentPage > 3) ||
                  (index === pageNumbers.length - 2 && currentPage < totalPages - 2)
                ) {
                  // Add ellipsis
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
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
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

