import React from 'react';
import { Check } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
const Vision: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 overflow-hidden md:max-h-[600px] ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 md:translate-y-[-100px]">
          <h3 className="text-md font-bold text-[#17174D] uppercase">#our vision</h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            We are <span className="text-yellow-500">partner</span> in your learning journey
          </h1>
          <p className="text-[#333333]">
            Strengthen student employability with skill training programs and courses from India's best growing platform.
          </p>
          <ul className="space-y-2 text-[#333333]">
  <li className="flex items-center">
    <span className="bg-[#FEF7EA] rounded-full p-1 mr-2">
      <Check className="text-[#F2B331]" size={24} />
    </span>
    Help students to build independent reading skills
  </li>
  <li className="flex items-center">
    <span className="bg-[#FEF7EA] rounded-full p-1 mr-2">
      <Check className="text-[#F2B331]" size={24} />
    </span>
    Auto analysis for feedback and corrections
  </li>
  <li className="flex items-center">
    <span className="bg-[#FEF7EA] rounded-full p-1 mr-2">
      <Check className="text-[#F2B331]" size={24} />
    </span>
    Language customizations for practical learning
  </li>
</ul>
          <button className="bg-yellow-500 flex text-black font-semibold  py-2 px-4 rounded-3xl hover:bg-yellow-600">
            Become partner with us
            <ChevronRight size={15} className="ml-2 mt-1.5" />
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="relative flex justify-center md:translate-y-[-80px] translate-x-[-10px]  translate-y-[-80px] ">
          <img
            src="/src/assets/student.svg"
            alt="Learning Platform"
            className="md:max-w-[1000px] w-auto md:max-h-[800px] max-h-[500px]"
          />
        </div>


      </div>
    </div>
  );
};

export default Vision;