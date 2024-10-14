import React from 'react';
import { Check } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const HybridRoles: React.FC = () => {
  return (
    <section className="py-2 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">        
          <div className="text-left space-y-4">
            <p className="text-[#17174D] font-semibold text-lg">#Must know</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              <span className="text-yellow-400">Hybrid roles :</span> <span className="text-[#092133]">The future<br/> of tech careers</span>
            </h1>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="bg-[#FDF6E7] rounded-full p-1">
                  <Check size={16} className="text-[#F2B331]" />
                </div>
                <span className="text-[#333333] font-semibold">Hybrid roles combine technical expertise with industry-specific knowledge to bridge business and tech gaps.</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="bg-[#FDF6E7] rounded-full p-1">
                  <Check size={16} className="text-[#F2B331]" />
                </div>
                <span className="text-[#333333] font-semibold">These roles offer better problem-solving and enhanced innovation by aligning technical solutions with business needs.</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="bg-[#FDF6E7] rounded-full p-1">
                  <Check size={16} className="text-[#F2B331]" />
                </div>
                <span className="text-[#333333] font-semibold">These roles offer better problem-solving and enhanced innovation by aligning technical solutions with business needs.</span>
              </li>
            </ul>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold flex items-center hover:bg-yellow-500">
              Explore 
              <ChevronRight size={16} className="ml-2" />
            </button>
          </div>

        
          <div className="flex justify-center md:justify-end">
            <img
              src="/src/assets/study.svg"
              alt="Hybrid roles"
              className="max-w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridRoles;