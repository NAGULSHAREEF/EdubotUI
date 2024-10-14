import React from 'react';

const features = [
  { title: 'Engaging Curriculum',  icon: '/src/assets/Engaging.svg' },
  { title: 'Practical Problem Solving',  icon: '/src/assets/ProblemSolving.svg' },
  { title: 'Continuous Feedback',  icon: '/src/assets/Feedback.svg' },
  { title: 'Career Preparation',  icon: '/src/assets/career.svg' },
];

const facts: React.FC = () => {
  return (
    <div className=" bg-[url('/src/assets/factsimage.png')] bg-cover bg-center bg-no-repeat container mx-auto px-4 py-8 text-center mb-[50px]">
      <h2 className="text-2xl md:text-4xl font-bold text-black">
         <span className="text-yellow-500">Dive into intriguing facts</span> and <br /> discover why we’re your best choice
      </h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center md:h-[284px] md:w-[284px] h-[180px] w-[180px] bg-[#F2B33133] rounded-full shadow-lg mb-4 p-4 text-center border border-[#F2B33180]">
            <img src={features[0].icon} alt={features[0].title} className="h-[140px] w-[152px] mb-2" />
            <h3 className="md:text-[18px] md:mt-2 -mt-4 text-[15px] md:w-20 md:text-balance   font-bold text-[#17174d]">{features[0].title}</h3>
            <p className="text-[20px] ">{features[0].description}</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:translate-y-[100px]">
          <div className="flex flex-col items-center justify-center md:h-[284px] md:w-[284px] h-[150px] w-[150px] bg-white rounded-full shadow-lg mb-4 p-4 text-center border border-[#17174D33]">
            <img src={features[1].icon} alt={features[1].title} className="md:h-20 md:w-20 h-12 w-12 mb-2" />
            <h3 className="text-[18px] md:w-52 md:text-balance  font-bold text-[#17174d]">{features[1].title}</h3>
            <p className="text-xs text-gray-500">{features[1].description}</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center md:h-[284px] md:w-[284px] h-[150px] w-[150px] bg-white rounded-full shadow-lg mb-4 p-4 text-center border border-[#17174D33]">
            <img src={features[2].icon} alt={features[2].title} className="md:h-20 md:w-20  w-14 mb-2" />
            <h3 className="text-[18px]  md:w-24 md:text-wrap   font-bold text-[#17174d]">{features[2].title}</h3>
            <p className="text-xs text-gray-500">{features[2].description}</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center md:h-[284px] md:w-[284px] h-30 w-30 bg-[#F2B33133] rounded-full shadow-lg mb-4 p-4 text-center border border-[#F2B33180]">
            <img src={features[3].icon} alt={features[3].title} className="h-20 w-20 mb-2" />
            <h3 className="text-[18px]  md:w-24 md:text-wrap  font-bold text-[#17174d]">{features[3].title}</h3>
            <p className="text-xs text-gray-500">{features[3].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default facts;