import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, ChevronDown, Clock,  Weight } from 'lucide-react'

interface Course {
  id: number
  title: string
  type: 'internship' | 'training'
  image: string
  duration: number
  opportunities: string
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Data engineering',
    type: 'internship',
    image: '/src/assets/feature1.png',
    duration: 8,
    opportunities: '1.08 Lac+'
  },
  {
    id: 2,
    title: 'Salesforce development',
    type: 'internship',
    image: '/src/assets/feature2.png',
    duration: 8,
    opportunities: '1.08 Lac+'
  },
  {
    id: 3,
    title: 'Python full stack',
    type: 'internship',
    image: '/src/assets/feature3.png',
    duration: 8,
    opportunities: '1.08 Lac+'
  },
  {
    id: 4,
    title: 'Java development',
    type: 'internship',
    image: '/src/assets/feature1.png',
    duration: 9,
    opportunities: '1.5 Lac+'
  },
  {
    id: 5,
    title: 'Cloud computing',
    type: 'training',
    image: '/src/assets/feature2.png',
    duration: 7,
    opportunities: '2.0 Lac+'
  }
]

const backgroundColors = {
  1: 'bg-[#E7F8FF]',  
  2: 'bg-[#F0FEDC]',   
  3: 'bg-[#FFE4FA]',  
  4: 'bg-[#E7F8FF]', 
  5: 'bg-[#F0FEDC]',   
};


function CourseCard({ course }: { course: Course }) {
  const bgColorClass = backgroundColors[course.id] || 'bg-gray-50';
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
  {/* Image Section */}
  <div className={`relative h-48 w-full ${bgColorClass}`}>
    <img
      src={course.image}
      alt={course.title}
      className="w-full h-full object-contain"
    />
  </div>

  {/* Bordered Section */}
  <div
  className="bg-white border-l border-r border-b border-[#F2B331] rounded-[2px_2px_20px_2px] py-5 px-8 space-y-4"
>
  <h3 className="text-[18px] md:text-[24px] font-[500]">{course.title}</h3>
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

export default function Features() {
  const [activeTab, setActiveTab] = useState<'internship' | 'training'>('internship')
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null)
  const [showDurationFilter, setShowDurationFilter] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const filteredCourses = courses.filter(course => {
    if (course.type !== activeTab) return false
    if (selectedDuration && course.duration !== selectedDuration) return false
    return true
  })

  const uniqueDurations = Array.from(new Set(courses.map(course => course.duration))).sort()

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-10 md:px-4 py-12">
      <h1 className="text-[22px] leading-[26px] md:text-[48px] md:leading-[66px] font-bold text-center mb-8">
        Our featured internship and training services
      </h1>

      <div className="flex flex-col md:flex-row justify-between  gap-4 mb-8">
        <div className="bg-gray-100 rounded-[150px]  md:w-[406px] h-[55px] w-full ">
          <div className="flex items-center">
            <button
              onClick={() => setActiveTab('internship')}
              className={`relative px-6 py-2 md:w-[215px] w-[187px] h-[55px] rounded-[150px] transition-colors ${
                activeTab === 'internship' ? 'bg-indigo-900 text-white font-[700] text-[12px] md:text-[18px] ' : 'font-[700] md:text-[18px] text-[12px]  '
              }`}
            >
              {activeTab === 'internship' && (
                <span className="absolute md:left-8 left-7 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F2B331]" />
              )}
              Internships
            </button>
            <button
              onClick={() => setActiveTab('training')}
              className={`relative px-6 py-2 md:w-[215px] w-[187px] h-[55px] rounded-[150px] transition-colors ${
                activeTab === 'training' ? 'bg-indigo-900 text-white md:text-[18px] font-[700] text-[12px] ' : 'md:text-[18px] font-[700] text-[12px]'
              }`}
            >
              {activeTab === 'training' && (
                <span className="absolute md:left-12 left-10 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F2B331]" />
              )}
              Training
            </button>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowDurationFilter(!showDurationFilter)}
            className="flex justify-center items-center rounded-[30px] gap-2 w-[130px] h-[45px] md:w-[151px] md:h-[46px] px-4 py-2 bg-[#F2B331]  md:text-[18px] text-[#15164B] font-[500]"
          >
            Sort by
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

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="grid grid-flow-col auto-cols-[100%] md:auto-cols-[calc(33.333%-1rem)] gap-6 overflow-x-auto md:overflow-x-hidden hover:overflow-x-auto md:scrollbar-thin md:scrollbar-thumb-gray-300 md:scrollbar-track-gray-100"
        >
          {filteredCourses.map(course => (
            <div key={course.id} className="snap-start">
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {filteredCourses.length > 1 && (
          <div className="md:hidden">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

{/* Decorative Stars */}
          {/* <div className="absolute top-16 w-9 h-9 md:w-full md:h-full left-5 md:top-[450px] md:left-20 text-white text-2xl"><img src="/src/assets/diamonds.png"/></div>
            <div className="absolute -top-2 left-20 w-9 h-9 md:w-full md:h-full md:top-20 md:left-32 text-white text-2xl"><img src="/src/assets/diamonds.png"/></div>
            <div className="absolute top-5 right-16 w-9 h-9 md:w-full md:h-full md:top-44 md:left-[500px] text-white text-2xl"><img src="/src/assets/diamonds.png"/></div>
            <div className="absolute top-20 right-2 w-9 h-9 md:w-full md:h-full md:top-[400px] md:left-[530px] text-white text-2xl"><img src="/src/assets/diamonds.png"/></div>
          </div> */}