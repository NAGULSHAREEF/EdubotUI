
import React, { useState, useEffect, useRef } from 'react';

interface CardProps {
  content: string;
  author: string;
  role: string;
}

const Card = ({ content, author, role }: CardProps) => (
  <div className="bg-[#FDF4E0] p-6 rounded-xl mr-4 h-[270px] w-[270px] flex-shrink-0 flex flex-col justify-between md:mt-0 mt-[-10px]">
    <p className="text-sm">{content}</p>
    <div className="flex items-center gap-4">
      <img className="w-12 h-12" src="/src/assets/profilepictype.svg" alt={`${author} avatar`} />
      <div>
        <h5 className="font-bold text-base">{author}</h5>
        <p className="text-xs">{role}</p>
      </div>
    </div>
  </div>
);

interface WhatOurPartnersProps {
  content: string;
  author: string;
  role: string;
  h1?: string;
  p: string;
}

const WhatOurPartners: React.FC<WhatOurPartnersProps> = ({ 
  content, 
  author, 
  role, 
  h1 = "What Our Partners Say", 
  p 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const cards = [
    { content, author, role },
    { content: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt.", author: "Jane Smith", role: "Dolor sit amet" },
    { content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.", author: "John Doe", role: "Consectetur adipiscing" },
    { content: "Duis aute irure dolor in reprehenderit in voluptate velit esse.", author: "Emily Brown", role: "Sed do eiusmod" },
    { content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.", author: "Michael Johnson", role: "Tempor incididunt" },
    { content: "Qui officia deserunt mollit anim id est laborum.", author: "Sarah Williams", role: "Ut labore et dolore" },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scroll = () => {
      if (isHovered) return;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <>
      <div className='text-center mb-14 md:mt-0 -mt-20'>
        <h1 className='text-4xl font-bold'>
          {h1 ? h1.split(' ').map((word, index) => 
            index === 3 ? <span key={index} className='text-[#F2B331]'>{word} </span> : word + ' '
          ) : 'What Our Partners Say'}
        </h1>
        <p className='text-sm mt-4'>{p}</p>
      </div>
      <div 
        className="overflow-hidden" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          ref={sliderRef}
          className="flex overflow-x-hidden"
          style={{ width: `${cards.length * 274}px` }}
        >
          {[...cards, ...cards].map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatOurPartners;

