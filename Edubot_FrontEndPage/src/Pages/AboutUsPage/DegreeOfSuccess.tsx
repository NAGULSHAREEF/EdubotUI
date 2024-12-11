import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DegreeOfSuccess = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const stats = [
    { number: 2021, label: 'Founded' },
    { number: 400, label: 'Students', suffix: '+' },
    { number: 80, label: 'Partners' }
  ]

  return (
    <div ref={ref} className="bg-[#1a1b3b] py-16 md:py-12 md:h-[360px] px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-[22px] leading-[26px] md:text-[40px] md:leading-[52px] font-bold md:pb-3 text-[#F2B331] mb-12">
          Degrees of Success: Our Company Stats.
        </h2>
        
        <div className="grid grid-cols-3 gap-6 md:gap-4 relative">
          <AnimatePresence>
            {isVisible && stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[20px] leading-[22px] md:text-[48px] md:leading-[66px] font-bold text-[#FEFEFE] mb-2 block"
                  >
                    <Counter from={0} to={stat.number} duration={2} />
                    {stat.suffix || ''}
                  </motion.span>
                  <span className="text-[20px] text-[#FEFEFE] leading-[22px] font-[300]  md:text-[48px] md:leading-[66px] ">{stat.label}</span>
                </motion.div>
                {index < stats.length - 1 && (
                  <div className=" w-[2px] bg-[#FFFFFF33] rounded-[20px] md:h-[180px] absolute right-0 top-1/2 transform -translate-y-1/2 h-20" />
                )}
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

const Counter = ({ from, to, duration }: { from: number; to: number; duration: number }) => {
  const [count, setCount] = useState(from)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) {
        startTime = currentTime
      }

      const progress = (currentTime - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(from + (to - from) * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(to)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [from, to, duration])

  return <>{count}</>
}

export default DegreeOfSuccess

