import React from 'react';

const OurRoadMap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-[44px] font-bold">
          Our roadmap <span className="text-yellow-500">under development</span>
        </h2>
        <p className="text-[#333333] mt-4 text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
    
        <div className="text-center">
          <img
            src="src/assets/studentportal.svg"
            alt="Advanced Student Portal"
            className="mx-auto mb-4 w-24"
          />
          <h3 className="text-xl font-semibold">Advanced<br/> Student Portal</h3>
          <div className="relative w-[250px] h-2 flex items-center md:translate-x-[260px] md:translate-y-[-50px]">
            <div className="hidden md:block w-full border-t-2 border-dashed border-yellow-500"></div>
            <div className="hidden md:block absolute left-0 h-4 w-4 bg-yellow-500 rounded-full"></div>
            <div className="hidden md:block absolute right-0 h-4 w-4 bg-yellow-500 rounded-full"></div>
          </div>
          <div className="relative w-2 h-[150px] flex flex-col items-center md:translate-x-[-120px] md:translate-y-[-70px] translate-x-[180px]">
  <div className="h-full border-l-2 border-dashed border-yellow-500 md:hidden"></div>
  <div className="absolute top-0 h-4 w-4 bg-yellow-500 rounded-full md:hidden"></div>
  <div className="absolute bottom-0 h-4 w-4 bg-yellow-500 rounded-full md:hidden"></div>
</div>
</div>
        
        <div className="text-center">
          <img
            src="/src/assets/LMS.svg"
            alt="Advanced Learning Management System"
            className="mx-auto mb-4 w-[130px]"
          />
          <h3 className="text-xl font-semibold">Advanced Learning<br/> Management Systems (LMS)</h3>
        </div>

        
        <div className="text-center md:translate-x-[-10px] md:translate-y-[10px] translate-y-[150px]">
          <img
            src="src/assets/dashboard.svg"
            alt="Analytic TPO Dashboard"
            className="mx-auto mb-4 w-[120px]"
          />
          <h3 className="text-xl font-semibold">Analytic TPO<br/> Dashboard</h3>
          <div className="relative w-[250px] h-2 flex items-center md:translate-x-[-120px] md:translate-y-[-70px]">
  <div className="w-full border-t-2 border-dashed border-yellow-500 md:block hidden"></div>
  <div className="absolute left-0 h-4 w-4 bg-yellow-500 rounded-full md:block hidden"></div>
  <div className="absolute right-0 h-4 w-4 bg-yellow-500 rounded-full md:block hidden"></div>
</div>
        </div>
      </div>
      <div className="relative w-2 h-[150px] flex flex-col items-center md:translate-x-[-120px] md:translate-y-[-70px] translate-y-[-200px] translate-x-[180px] md:hidden">
  <div className="h-full border-l-2 border-dashed border-yellow-500"></div>
  <div className="absolute top-0 h-4 w-4 bg-yellow-500 rounded-full"></div>
  <div className="absolute bottom-0 h-4 w-4 bg-yellow-500 rounded-full"></div>
</div>
    </div>
    
  );
};

export default OurRoadMap;
