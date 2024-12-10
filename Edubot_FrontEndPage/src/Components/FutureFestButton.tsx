import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Import event images
import Event1Image from "../assets/Event1.png";
import Event2Image from "../assets/Event2.png";
import Event3Image from "../assets/Event3.png";
import Event4Image from "../assets/Event5.png";
import Event5Image from "../assets/Event6.png";
import Event6Image from "../assets/Event5.png";
import Event7Image from "../assets/Event7.png";
import InstagramIcon from "../assets/instagram.svg";
import FacebookIcon from "../assets/Facebook.svg";
import LinkedInIcon from "../assets/Linkedin.svg";
import WhatsappIcon from "../assets/Whatsapp.svg"

interface EventCard {
  title: string;
  date: string;
  location: string;
  image: string;
  color: string;
  angle: number;
  additionalClasses?: string;
}

const eventCards: EventCard[] = [
  { title: "touro spot assessment drive", date: "15 August, 2024", location: "Hyatt Taj Deccan, Banjara Hills, Hyderabad, Telangana - 500034", image: Event1Image, color: "bg-[#FCD8D8]", angle: 10, additionalClasses: "-ml-48 -mt-48 -rotate-90" },
  { title: "Career Counselling Session", date: "20 September, 2024", location: "Online Webinar", image: Event2Image, color: "bg-[#D3FFE9]", angle: 5, additionalClasses: "-ml-48 -mt-48 -rotate-90" },
  { title: "Study Abroad Expo", date: "5 October, 2024", location: "Convention Center, Mumbai", image: Event3Image, color: "bg-[#FFFDD0]", angle: -2.02, additionalClasses: "-ml-48 -mt-64 -rotate-90" },
  { title: "Global Education Fair 2024", date: "15 November, 2024", location: "Delhi University, New Delhi", image: Event4Image, color: "bg-[#FFDFEF]", angle: 0, additionalClasses: "-ml-48 -mt-40 -rotate-90" },
  { title: "Language Seminar", date: "1 December, 2024", location: "Bangalore Institute of Technology", image: Event5Image, color: "bg-[#FFFDD0]", angle: -2.02, additionalClasses: " -mt-16 ml-44 text-nowrap -rotate-90" },
  { title: "Alumni Meet 2024", date: "20 December, 2024", location: "Chennai Trade Centre", image: Event6Image, color: "bg-[#D3FFE9]", angle: -5.83, additionalClasses: " -mt-28 ml-44 text-nowrap -rotate-90" },
  { title: "New Year Educational Summit", date: "5 January, 2025", location: "Kolkata Science City", image: Event7Image, color: "bg-[#FCD8D8]", angle: -10.42, additionalClasses: " -mt-4 ml-48 text-nowrap -rotate-90" },
];

const FutureFestButton: React.FC = () => {
  const [showFutureFest, setShowFutureFest] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % eventCards.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + eventCards.length) % eventCards.length);

  const totalCards = eventCards.length;
  const centerIndex = Math.floor(totalCards / 2);

  const cardPositions = eventCards.map((card, index) => {
    const isCenter = index === centerIndex;
    const offset = index - centerIndex;
    const angle = isCenter ? 0 : offset * 4;
    const translateX = index * (350 / (totalCards - 1));
    const translateY = Math.abs(offset) * 24;
    const zIndex = totalCards - Math.abs(offset);

    return {
      transform: `translateX(${translateX}%) translateY(${translateY}px) rotate(${angle}deg)`,
      zIndex: zIndex,
    };
  });

  return (
    <>
    
     

      {/* Floating buttons */}
      <div className="fixed top-1/2  -translate-y-1/2 right-0  flex flex-col items-end space-y-5 z-50">
        <div className="flex flex-col items-center space-y-5 w-[24px] h-[112px]">
        
          <a
            href="#"
            className="w-6 h-6 flex items-center justify-center transition-transform -ml-6 duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <img src={InstagramIcon} alt="Instagram" className="w-full h-full" />
          </a>
          <a
            href="#"
            className="w-6 h-6 flex items-center justify-center transition-transform -ml-6 duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <img src={FacebookIcon} alt="Facebook" className="w-full h-full" />
          </a>
          <a
            href="#"
            className="w-6 h-6 flex items-center justify-center -ml-6 transition-transform duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <img src={LinkedInIcon} alt="LinkedIn" className="w-full h-full" />
          </a>
          
        </div>
        <button
          onClick={() => setShowFutureFest(true)}
          className="w-[59px] h-[133px] bg-[#1D1D1D] rounded-l-[12px] flex flex-col items-center justify-center shadow-[0px_4px_25px_0px_#31286029] border border-[#1D1D1D] transition-all duration-300 hover:bg-[#1D1D1D]"
          aria-label="What's New"
        >
          <span className="text-white font-helvetica text-base sm:text-lg md:text-xl -rotate-90 whitespace-nowrap">What's New</span>
        </button>
      </div>

      {showFutureFest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#312860] rounded-[30px] w-[90%] md:max-w-[1055px] md:h-[525px] relative overflow-hidden">
            <button onClick={() => setShowFutureFest(false)} className="absolute top-4 right-4 text-white hover:text-gray-300">
              <X size={24} />
            </button>
            <div className="flex flex-col h-full">
              <div className="space-y-6 mb-2 mt-8 md:mt-8">
                <h2 className="font-helvetica text-4xl font-bold leading-[54px] md:-mt-7 text-center text-white">
                  Unforgettable Moments Await!!
                </h2>
                <div className="font-helvetica text-lg font-normal text-wrap leading-[21px] md:-mt-8 text-center text-white">
                  <p>Get ready for an exciting lineup of events!</p> 
                  <p>From inspiring workshops to thrilling adventures, we've got something for everyone.</p>
                </div>
                <p className="font-helvetica text-lg font-bold leading-[18.4px] text-center text-white">
                  Stay in the loop with us to receive all updates the moment they're available.
                </p>
                <form onSubmit={(e) => { e.preventDefault(); console.log('Submitted email:', e.currentTarget.email.value); }} className="flex flex-col md:flex-row md:ml-44 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email id"
                    className="w-[80%] ml-10 md:w-[390px] md:ml-14 md:h-[44px] px-4 !rounded-[30px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-[50%] md:ml-4 ml-24 md:w-[150px] h-[42.31px] bg-[#DF1B7D] text-white font-helvetica text-lg font-normal leading-[23.4px] rounded-full hover:bg-pink-700 transition-colors duration-300"
                  >
                    Subscribe us!
                  </button>
                </form>
              </div>
              {isMobile ? (
                <div className="relative h-full mt-4 flex items-center">
                  <button
                    onClick={handlePrev}
                    className="absolute left-8 -mt-24 z-10 bg-[#EDE9FF] bg-opacity-50 rounded-full p-2"
                  >
                    <ChevronLeft size={15} />
                  </button>
                  <div className="w-[60%] ml-20 h-[400px] overflow-hidden">
                    <div
                      className="flex transition-transform duration-300 ease-in-out"
                      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                      {eventCards.map((card, index) => (
                        <div
                          key={index}
                          className={`min-w-full flex-shrink-1 rounded-[12px] ${card.color} overflow-hidden flex flex-col justify-center items-center`}
                        >
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-[250px] object-cover translate-y-[52px] translate-x-8 rounded-lg mb-4"
                          />
                          <h3 className="font-helvetica text-semibold -translate-x-[84px] text-nowrap -translate-y-32 -rotate-90 text-center text-lg font-bold mb-2">
                            {card.title}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={handleNext}
                    className="absolute right-8 z-10 -mt-24 bg-[#EDE9FF] bg-opacity-50 rounded-full p-2"
                  >
                    <ChevronRight size={15} />
                  </button>
                </div>
              ) : (
                <div className="relative h-[600px] top-8 left-0 right-0 px-5 flex justify-start w-full">
                  <div className="">
                    {eventCards.map((card, index) => (
                      <div
                        key={index}
                        className={`absolute w-[225px] h-[260px] rounded-lg transition-all duration-300 cursor-pointer ${card.color} 
                          ${hoveredCard === index ? 'z-50' : ''}
                        `}
                        style={{
                          ...cardPositions[index],
                          transition: 'all 0.3s ease-in-out',
                          transform: `${cardPositions[index].transform} ${hoveredCard === index ? 'scale(1.25)' : 'scale(1)'}`,
                          transformOrigin: hoveredCard === index ? (index < centerIndex ? 'left center' : 'right center') : 'center',
                        }}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <img src={card.image} alt={card.title} className="w-full object-cover mt-[77px] rounded-t-lg" />
                        <div className="p-4">
                          <h3 className={`font-helvetica text-lg font-semibold mb-2 ${card.additionalClasses}`}>{card.title}</h3>
                        </div>
                        {hoveredCard === index && (
                          <div className={`absolute inset-0 ${card.color} p-4 rounded-lg overflow-hidden`}>
                            <h3 className="font-helvetica text-lg font-bold mb-2">{card.title}</h3>
                            <p className="font-helvetica text-sm mb-2">{card.date}</p>
                            <p className="font-helvetica text-sm">{card.location}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            
            {/* Floating buttons */}
    <div className="fixed top-1/2 md:py-60 md:px-6 py-72 px-4  left-0   flex flex-col items-start space-y-5 z-50">
      <div className="flex flex-col items-start space-y-5 w-[24px] h-[112px]">
        
        <a
          href="#"
          className="w-9 h-9 flex items-center justify-center transition-transform duration-300 hover:scale-110"
          aria-label="Whatsapp"
        >
          <img src={WhatsappIcon} alt="Whatsapp" className="w-full h-full" />
        </a>
      </div>
      </div>
      <div className="fixed top-1/2  -translate-y-1/2 right-0  flex flex-col items-end space-y-5 z-50">
        <div className="flex flex-col items-center space-y-5 w-[24px] h-[112px]">
        
          <a
            href="#"
            className="w-6 h-6 flex items-center justify-center transition-transform -ml-6 duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <img src={InstagramIcon} alt="Instagram" className="w-full h-full" />
          </a>
          <a
            href="#"
            className="w-6 h-6 flex items-center justify-center transition-transform -ml-6 duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <img src={FacebookIcon} alt="Facebook" className="w-full h-full" />
          </a>
          <a
            href="#"
            className="w-6 h-6 flex items-center justify-center -ml-6 transition-transform duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <img src={LinkedInIcon} alt="LinkedIn" className="w-full h-full" />
          </a>
          
        </div>
        <button
          onClick={() => setShowFutureFest(true)}
          className="w-[59px] h-[133px] bg-[#1D1D1D] rounded-l-[12px] flex flex-col items-center justify-center shadow-[0px_4px_25px_0px_#31286029] border border-[#312860] transition-all duration-300 hover:bg-[#3e3277]"
          aria-label="What's New"
        >
          <span className="text-white font-helvetica text-base sm:text-lg md:text-xl -rotate-90 whitespace-nowrap">What's New</span>
        </button>
      </div>
          </div>
        </div>
      )}
    </>

    
  );
};

export default FutureFestButton;