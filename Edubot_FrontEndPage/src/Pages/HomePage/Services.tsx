// import React, { useState } from 'react';
// import { ChevronRight } from 'lucide-react';

// const Services: React.FC = () => {
//   const [activeSection, setActiveSection] = useState('internships');
//   const [imageSrc, setImageSrc] = useState('src/assets/services1.png');

//   const handleSectionChange = (section: string, imgSrc: string) => {
//     setActiveSection(section);
//     setImageSrc(imgSrc);
//   };

//   return (
//     <div className="w-full bg-white overflow-y-hidden">
//       {/* Top Section with Title and Tabs */}
//       <div className="text-center py-8">
//         <h2 className="text-2xl md:text-4xl font-bold">
//           We have got you<br /> covered with our <span className="text-yellow-500">services</span>
//         </h2>
//         <div className="mt-6 flex flex-row justify-center items-center space-x-2 md:space-x-4">
//   <button
//     onClick={() => handleSectionChange('internships', 'src/assets/services1.png')}
//     className={`bg-[#1D1F71] text-white px-[4px] py-[4px] md:text-[18px] text-[13px] md:px-6 md:py-2 rounded-full flex items-center font-semibold ${activeSection === 'internships' && 'bg-[#1D1F71]'}`}
//   >
//     <span className="w-2  h-2 bg-[#F2B331] rounded-full mr-2"></span>
//     Join for Internships
//   </button>
//   <button
//     onClick={() => handleSectionChange('courses', 'src/assets/services1.png')}
//     className={`bg-white text-[#333333] px-4 py-2 md:px-6 md:py-2 md:text-[18px] text-[13px] rounded-full shadow-md font-semibold ${activeSection === 'courses'}`}
//   >
//     Skill Oriented Courses (soc)
//   </button>
//   <button
//     onClick={() => handleSectionChange('incubation', 'src/assets/services1.png')}
//     className={`bg-white text-[#333333] px-4 py-2 md:px-6 md:py-2 md:text-[18px] text-[13px] rounded-full shadow-md font-semibold ${activeSection === 'incubation'}`}
//   >
//     Incubation Centre
//   </button>
// </div>
//       </div>

      
//       <div className="container mx-auto px-4 py-12 bg-[#F2B33126] rounded-tl-3xl  md:h-[420px] rounded-br-3xl md:translate-y-[-20px]">
//         <div className="flex flex-col md:flex-row items-center justify-between">
          
//           {activeSection === 'internships' && (
//             <div className="md:w-1/2 space-y-6 text-center md:text-left p-6 rounded-lg text-[#222222]">
//               <h3 className="text-[50px] font-bold">
//                 Internships that Shape Your Path to Success
//               </h3>
//               <p className="text-[#222222]">
//                 Lorem ipsum dolor sit amet consectetur duis amet mauris lorem. ipsum dolor sit amet consectetur duis amet mauris lorem. Lorem ipsum dolor sit amet consectetur duis amet mauris lorem.
//               </p>
//               <button className="bg-yellow-400 text-[#15164B] px-6 py-2 rounded-full font-semibold flex items-center hover:bg-yellow-500">
//                 Know more
//                 <ChevronRight size={16} className="ml-2" />
//               </button>
//             </div>
//           )}

//           {activeSection === 'courses' && (
//             <div className="md:w-1/2 space-y-6 text-center md:text-left p-6 rounded-lg text-[#222222]">
//               <h3 className="text-[30px] font-bold">
//                 Enhance Your Skills with Our Courses
//               </h3>
//               <p className="text-[#222222]">
//                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
//               </p>
//               <button className="bg-yellow-400 text-[#15164B] px-6 py-2 rounded-full font-semibold flex items-center hover:bg-yellow-500">
//                 Know more
//                 <ChevronRight size={16} className="ml-2" />
//               </button>
//             </div>
//           )}

//           {activeSection === 'incubation' && (
//             <div className="md:w-1/2 space-y-6 text-center md:text-left p-6 rounded-lg text-[#222222]">
//               <h3 className="text-[30px] font-bold">
//                 Grow with Our Incubation Centre
//               </h3>
//               <p className="text-[#222222]">
//                 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.
//               </p>
//               <button className="bg-yellow-400 text-[#15164B] px-6 py-2 rounded-full font-semibold flex items-center hover:bg-yellow-500">
//                 Know more
//                 <ChevronRight size={16} className="ml-2" />
//               </button>
//             </div>
//           )}

        
//           <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center translate-y-[-30px]">
//             <img
//               src={imageSrc}
//               alt={activeSection}
//               className="rounded-lg w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;












import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Services: React.FC = () => {
  const [activeSection, setActiveSection] = useState('internships');
  const [imageSrc, setImageSrc] = useState('src/assets/services1.png');

  const handleSectionChange = (section: string, imgSrc: string) => {
    setActiveSection(section);
    setImageSrc(imgSrc);
  };

  return (
    <div className="w-full bg-white overflow-y-hidden">
      {/* Top Section with Title and Tabs */}
      <div className="text-center py-8">
        <h2 className="text-2xl md:text-4xl font-bold">
          We have got you<br /> covered with our <span className="text-yellow-500">services</span>
        </h2>
        <div className="mt-6 flex md:bg-[#fff]  flex-row justify-center items-center  space-x-0 md:space-x-4">
        <button
          onClick={() => handleSectionChange('internships', 'src/assets/services1.png')}
          className={`flex items-center rounded-full  md:h-[57px] font-semibold px-[4px] py-[11px] md:px-6 md:py-2 md:text-[18px] text-[10px] shadow-[0px_10px_18px_0px_#806FAE20] whitespace-nowrap ${activeSection === 'internships' ? 'bg-[#1D1F71] text-white' : 'bg-white text-[#333333]'} ${activeSection !== 'internships' && 'mr-[-1px]'}`}
        >
          {activeSection === 'internships' && <span className="w-2 h-2 bg-[#F2B331] rounded-full mr-2"></span>}
          Join for Internships
        </button>
        <button
          onClick={() => handleSectionChange('courses', 'src/assets/services1.png')}
          className={`flex items-center rounded-full md:h-[57px] font-semibold px-[4px] py-[11px] md:px-6 md:py-2 md:text-[18px] text-[10px] shadow-[0px_10px_18px_0px_#806FAE20] whitespace-nowrap md:whitespace-normal ${activeSection === 'courses' ? 'bg-[#1D1F71] text-white' : 'bg-white text-[#333333]'} ${activeSection !== 'courses' && 'mr-[-1px]'}`}
        >
          {activeSection === 'courses' && <span className="w-2 h-2 bg-[#F2B331] rounded-full mr-2"></span>}
          Skill Oriented Courses (soc)
        </button>
        <button
          onClick={() => handleSectionChange('incubation', 'src/assets/services1.png')}
          className={`flex items-center rounded-full md:h-[57px] font-semibold px-4 py-2 md:px-6 md:py-2 md:text-[18px] shadow-[0px_10px_18px_0px_#806FAE20] text-[10px] ${activeSection === 'incubation' ? 'bg-[#1D1F71] text-white' : 'bg-white text-[#333333]'} whitespace-nowrap md:whitespace-normal ${activeSection !== 'incubation' && 'mr-[-1px]'}`}
        >
          {activeSection === 'incubation' && <span className="w-2 h-2 bg-[#F2B331] rounded-full mr-2"></span>}
          Incubation Centre
        </button>
      </div>
      </div>

      {/* Bottom Section with Growing Card Content */}
      <div className=" bg-white md:px-16 px-5 ">
      <div className="container mx-auto px-4 md:px-20 py-0 md:py-16 bg-[#F2B33126] rounded-tl-[50px] rounded-br-[50px] md:h-auto md:translate-y-[-10px]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {activeSection === 'internships' && (
            <div className=" space-y-6 text-center md:w-[450px] md:text-left p-6 rounded-lg text-[#222222] ">
              <h3 className="md:text-[34px] text-[20px] leading-[22px] text-left font-bold md:leading-[39px] ">
                Internships that Shape Your Path to Success
              </h3>
              <p className="text-[#222222]  md:text-[18px] md:leading-[20px] ">
                Lorem ipsum dolor sit amet consectetur duis amet mauris lorem. ipsum dolor sit amet consectetur duis amet mauris lorem. Lorem ipsum dolor sit amet consectetur duis amet mauris lorem.
              </p>
              <button className="bg-yellow-400 md:h-[45px] text-[#15164B] px-6 py-2 mb-10 rounded-full font-semibold flex items-center hover:bg-yellow-500">
              <Link to="/internshipsandtrainings">
                Know more
                
              </Link>
              <ChevronRight size={16} className="ml-2" />
              </button>
            </div>
          )}

          {activeSection === 'courses' && (
            <div className="md:w-1/2 space-y-6 text-center md:text-left p-6 rounded-lg text-[#222222] ">
              <h3 className="text-[30px] font-bold">
                Enhance Your Skills with Our Courses
              </h3>
              <p className="text-[#222222]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <button className="bg-yellow-400 text-[#15164B] px-6 py-2 mb-10 rounded-full font-semibold flex items-center hover:bg-yellow-500">
              <Link to="/SkillOrientedCourses" >
                Know more
              </Link>
              <ChevronRight size={16} className="ml-2" />
              </button>
              
            </div>
          )}

          {activeSection === 'incubation' && (
            <div className="md:w-1/2 space-y-6 text-center md:text-left p-6 rounded-lg text-[#222222] ">
              <h3 className="text-[30px] font-bold">
                Grow with Our Incubation Centre
              </h3>
              <p className="text-[#222222]">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.
              </p>
              <button className="bg-yellow-400 text-[#15164B] px-6 py-2 mb-10 rounded-full font-semibold flex items-center hover:bg-yellow-500">
              <Link to="/IncubationCenter" >
                Know more
                
              </Link>
              <ChevronRight size={16} className="ml-2" />
              </button>
            </div>
          )}
        
          <div className="mt-8 md:mt-0  flex justify-center md:translate-y-[-30px] translate-y-[-30px] -mb-20">
            <img
              src={imageSrc}
              alt={activeSection}
              className="rounded-lg w-full h-full"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;