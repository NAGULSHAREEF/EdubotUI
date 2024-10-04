import React from 'react';
import { Check } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
const Journey: React.FC = () => {
  return (
    <section className="py-8 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto md:h-[450px] md:translate-y-[-100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-left space-y-4 md:translate-x-20">
            <h1 className="text-2xl md:text-3xl  font-bold">
              <span className="">Enrich Your Learning Journey With</span> <span className="text-yellow-400 "> Edubot's AI-Driven Power</span>
            </h1>
            <p className="text-[#344857] text-[20px]"> Premium features that inspires students and faculties</p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="bg-[#FDF6E7] rounded-full p-1">
                  <Check size={16} className="text-[#F2B331]" />
                </div>
                <span className="text-[#333333] font-semibold">Help student to build independent reading skill</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="bg-[#FDF6E7] rounded-full p-1">
                  <Check size={16} className="text-[#F2B331]" />
                </div>
                <span className="text-[#333333] font-semibold">Auto analysis for feedback and corrections</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="bg-[#FDF6E7] rounded-full p-1">
                  <Check size={16} className="text-[#F2B331]" />
                </div>
                <span className="text-[#333333] font-semibold">language custmizations for practical Learning </span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="bg-[#FDF6E7] rounded-full p-1">
                  <Check size={16} className="text-[#F2B331]" />
                </div>
                <span className="text-[#333333] font-semibold">New era and modern AI Support  </span>
              </li>
            </ul>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold flex items-center hover:bg-yellow-500">
              Explore 
              <ChevronRight size={16} className="ml-2" />
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end md:translate-y-[10px] translate-y-[-100px]">
             <img src="src/assets/journey.svg" alt="Hybrid roles"
              className="max-w-full h-auto rounded-3xl " /> 
             </div> 
        </div>
      </div>
    </section>
  );
};

export default Journey;