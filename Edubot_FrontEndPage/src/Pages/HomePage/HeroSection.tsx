import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    navigate('#');
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {/* HeroSection */}
        <div className="min-w-full bg-[url('/src/assets/bg2.png')] bg-cover bg-center bg-no-repeat text-white md:w-full overflow-hidden flex flex-col md:flex-row md:h-[530px] h-[750px] rounded-b-3xl">
          <div className="flex flex-col justify-center items-start w-full md:w-1/2 p-4 md:p-20 gap-8 md:translate-y-[100px]">
            <h3 className="text-sm uppercase tracking-wide font-medium mb-2 translate-y-14 md:translate-y-5">
              #our motive
            </h3>
            <h1 className="font-bold leading-tight whitespace-nowrap">
              <div className="translate-y-7">
                <span className="block md:hidden text-3xl md:text-5xl">Prepare Students</span>
                <span className="block md:hidden text-3xl md:text-5xl">to <span className="text-yellow-400">Thrive</span>,</span>
                <span className="block md:hidden text-3xl md:text-5xl"> Not Just Survive.</span>
              </div>
              <span className="hidden md:block text-3xl md:text-5xl">Prepare Students to <span className="text-yellow-400">Thrive</span>,</span>
              <span className="hidden md:block text-3xl md:text-5xl"> Not Just Survive.</span>
            </h1>
            <p className="md:text-[24px] text-[18px] mb-4 md:-mt-3">
              Strengthen student employability with skill<br className=" hidden md:block " /> training programs and courses from India's best<br className=" hidden md:block "  /> growing platform.
            </p>
            <div className="flex flex-row gap-4 mb-4 md:-mt-0 -mt-8">
              {/* <button className="bg-yellow-400 text-[#312860] font-semibold px-4 py-2 rounded-full hover:bg-yellow-500">
                Contact Us
              </button> */}
               <Link
                to="/contact"
                className="bg-yellow-400 text-[#312860] font-semibold px-4 py-2 rounded-full hover:bg-yellow-500"
              >
                Contact Us
              </Link>
              <button className="bg-transparent border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">
                Know More
              </button>
            </div>
            <div className="justify-center space-x-4 md:translate-x-[10px] md:translate-y-[-10px] hidden md:flex">
              <button
                id="dot1"
                title="facts"
                className={`w-3 h-3 ${currentIndex === 0 ? 'bg-yellow-400' : 'bg-gray-300'} rounded-full hover:bg-yellow-400 transition`}
                onClick={() => handleDotClick(0)}
              />
              <button
                id="dot2"
                title="facts"
                className={`w-3 h-3 ${currentIndex === 1 ? 'bg-yellow-400' : 'bg-gray-300'} rounded-full hover:bg-yellow-400 transition`}
                onClick={() => handleDotClick(1)}
              />
              <button
                id="dot3"
                title="facts"
                className={`w-3 h-3 ${currentIndex === 2 ? 'bg-yellow-400' : 'bg-gray-300'} rounded-full hover:bg-yellow-400 transition`}
                onClick={() => handleDotClick(2)}
              />
            </div>
            <div className="relative w-full h-48 md:translate-x-[630px] md:translate-y-[-430px] translate-x-[220px] translate-y-[-150px]">
              <svg width="163" height="165" viewBox="0 0 163 165" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_795)">
<path d="M148.526 130.864C149.912 130.65 150.962 130.493 152.358 130.278C153.285 128.21 154.389 125.781 155.461 123.338C156.03 122.041 156.841 121.14 158.332 121.845C159.711 122.496 159.606 123.639 159.055 124.872C156.807 129.871 154.592 134.883 152.282 140.083C148.168 136.004 144.184 132.066 140.221 128.1C139.31 127.188 139.287 125.988 140.309 125.356C140.945 124.96 142.367 124.984 142.912 125.443C144.957 127.161 146.782 129.142 148.526 130.864Z" fill="white" fill-opacity="0.6"/>
<path d="M146.698 124.114C146.529 123.259 146.099 122.349 146.26 121.567C146.431 120.731 147.012 119.651 147.705 119.361C148.203 119.15 149.632 119.898 149.844 120.504C150.547 122.483 151.018 124.574 151.29 126.665C151.362 127.237 150.46 128.422 149.929 128.471C149.222 128.534 148.154 127.934 147.763 127.297C147.199 126.383 147.098 125.178 146.797 124.099C146.762 124.101 146.733 124.107 146.698 124.114Z" fill="white" fill-opacity="0.6"/>
<path d="M86.736 41.7436C86.4452 40.0963 87.867 38.8549 89.2927 39.5115C91.1508 40.3683 92.9714 41.3704 94.6417 42.5401C95.1514 42.8984 95.4438 44.1166 95.2446 44.7585C95.0789 45.2864 93.8228 46.0255 93.4296 45.8431C91.2429 44.8472 89.1617 43.611 87.0686 42.4179C86.8509 42.2977 86.7996 41.8842 86.736 41.7436Z" fill="white" fill-opacity="0.6"/>
<path d="M66.8023 30.5687C67.9313 30.8605 68.768 31.0418 69.5791 31.2996C70.9453 31.7332 72.3931 32.0384 73.6049 32.7477C74.1999 33.0993 74.7485 34.3484 74.561 34.9726C74.3835 35.5693 73.1361 36.3526 72.5299 36.2277C70.5327 35.8273 68.5673 35.15 66.6845 34.3491C66.1276 34.1124 65.5816 33.1078 65.5973 32.4666C65.612 31.846 66.3479 31.2356 66.8023 30.5687Z" fill="white" fill-opacity="0.6"/>
<path d="M126.84 76.6473C126.502 76.4336 125.726 76.1484 125.256 75.6035C124.124 74.2914 123.144 72.8471 122.094 71.4625C121.327 70.4458 121.391 69.4325 122.332 68.6487C123.309 67.8374 124.344 68.0662 125.112 69.0319C126.272 70.4864 127.452 71.937 128.469 73.4914C129.347 74.8334 128.715 76.3013 126.84 76.6473Z" fill="white" fill-opacity="0.6"/>
<path d="M83.5989 40.9913C81.1986 39.8438 78.9423 38.8566 76.8011 37.6527C76.4334 37.4448 76.2706 36.1601 76.55 35.6912C76.8747 35.1419 77.9345 34.4928 78.415 34.6528C80.5226 35.353 82.5946 36.2337 84.5565 37.2793C85.03 37.5325 85.3049 38.7133 85.1812 39.3759C85.0822 39.9316 84.2632 40.3542 83.5989 40.9913Z" fill="white" fill-opacity="0.6"/>
<path d="M28.6163 28.5624C26.1141 28.5479 24.1003 28.7072 22.1491 28.4355C21.4565 28.3379 20.4211 27.1802 20.429 26.5253C20.4408 25.89 21.5326 24.8364 22.2618 24.7327C24.0922 24.4719 25.9859 24.5815 27.8472 24.6567C29.0551 24.7031 29.9714 25.4148 29.781 26.6674C29.6709 27.4243 28.9261 28.0926 28.6163 28.5624Z" fill="white" fill-opacity="0.6"/>
<path d="M16.6314 29.0909C14.9592 29.2233 13.2879 29.3861 11.6108 29.4684C10.3223 29.5298 9.38607 28.9753 9.33821 27.5759C9.29214 26.2884 10.1272 25.6635 11.3215 25.5646C12.9918 25.4224 14.6747 25.3951 16.3441 25.2479C17.7622 25.12 18.7093 25.6009 18.7953 27.0898C18.8852 28.5472 17.8807 28.9862 16.6314 29.0909Z" fill="white" fill-opacity="0.6"/>
<path d="M144.994 104.784C144.606 105.295 144.171 106.397 143.579 106.494C142.828 106.617 141.541 106.147 141.185 105.534C140.236 103.884 139.511 102.057 139.019 100.215C138.84 99.5463 139.408 98.1373 139.943 97.9547C140.636 97.7203 142.077 98.1187 142.404 98.6918C143.411 100.452 144.038 102.431 144.994 104.784Z" fill="white" fill-opacity="0.6"/>
<path d="M51.2293 30.8382C48.715 30.4024 46.4968 30.1224 44.3458 29.5635C43.824 29.4271 43.1449 28.2651 43.2595 27.737C43.4048 27.0804 44.3316 26.0952 44.8772 26.1198C47.0878 26.2329 49.3127 26.5729 51.4687 27.0797C51.9827 27.2024 52.6236 28.326 52.5638 28.9249C52.4941 29.6023 51.7013 30.2087 51.2293 30.8382Z" fill="white" fill-opacity="0.6"/>
<path d="M33.0439 24.7949C35.5615 25.0156 37.7427 25.0835 39.8665 25.4793C40.4491 25.5884 41.2343 26.7191 41.2059 27.3475C41.1745 27.9612 40.2367 29.02 39.6686 29.0356C37.5087 29.1013 35.3169 28.9538 33.1901 28.5944C32.6201 28.4981 31.8771 27.3743 31.8566 26.7046C31.8399 26.0545 32.6505 25.3833 33.0439 24.7949Z" fill="white" fill-opacity="0.6"/>
<path d="M142.791 110.259C143.107 109.844 143.543 108.701 144.219 108.537C144.91 108.369 146.297 108.957 146.572 109.571C147.403 111.423 147.988 113.42 148.344 115.422C148.452 116.018 147.586 117.236 146.978 117.382C146.359 117.531 145.116 116.894 144.831 116.282C144.025 114.553 143.568 112.663 142.791 110.259Z" fill="white" fill-opacity="0.6"/>
<path d="M113.929 57.4853C113.669 57.9453 113.463 58.7875 112.939 59.1007C112.409 59.4149 111.35 59.5023 110.902 59.1725C109.211 57.9203 107.581 56.5435 106.145 55.0109C105.744 54.585 105.798 53.2879 106.16 52.721C106.46 52.2532 107.826 51.86 108.196 52.1337C110.079 53.5267 111.798 55.1462 113.559 56.6961C113.688 56.8083 113.721 57.0263 113.929 57.4853Z" fill="white" fill-opacity="0.6"/>
<path d="M140.579 94.1026C140.181 94.692 139.847 95.7637 139.225 95.9688C138.559 96.1875 137.23 95.8384 136.883 95.2947C135.789 93.587 134.88 91.7254 134.21 89.8113C134.002 89.2247 134.605 87.9718 135.196 87.6096C135.674 87.3159 137.071 87.6514 137.399 88.1479C138.542 89.897 139.399 91.8301 140.579 94.1026Z" fill="white" fill-opacity="0.6"/>
<path d="M127.997 79.6505C128.435 78.9816 128.711 78.0797 129.277 77.8244C129.867 77.5594 131.117 77.6383 131.424 78.0523C132.75 79.8263 133.933 81.7305 134.937 83.7062C135.172 84.175 134.709 85.3898 134.207 85.7394C133.705 86.0891 132.344 86.0934 132.055 85.7118C130.629 83.8709 129.433 81.8518 127.997 79.6505Z" fill="white" fill-opacity="0.6"/>
<path d="M103.868 52.1565C102.231 52.5168 96.5762 48.5637 96.5743 47.2675C96.5753 46.6803 96.9053 45.8236 97.364 45.5643C97.9051 45.2579 98.8953 45.1841 99.4139 45.4846C101.074 46.4471 102.673 47.544 104.141 48.7742C104.643 49.1954 104.902 50.1906 104.847 50.8907C104.803 51.4149 104.09 51.8879 103.868 52.1565Z" fill="white" fill-opacity="0.6"/>
<path d="M121.806 66.0229C121.574 66.3445 121.282 67.158 120.733 67.3995C120.174 67.643 119.126 67.5802 118.709 67.1984C117.167 65.7736 115.708 64.2302 114.42 62.5712C114.076 62.1238 114.184 60.8926 114.573 60.4328C114.969 59.9612 116.333 59.5886 116.639 59.87C118.403 61.4857 119.977 63.3023 121.602 65.068C121.712 65.1841 121.688 65.4236 121.806 66.0229Z" fill="white" fill-opacity="0.6"/>
<path d="M62.3972 33.2959C59.8372 32.6037 57.4889 32.0533 55.2274 31.2714C54.8115 31.1292 54.4386 29.9423 54.5857 29.3721C54.7298 28.8126 55.626 27.9816 56.0724 28.0462C58.3856 28.3942 60.68 28.9042 62.9191 29.5732C63.3634 29.7046 63.8287 30.8171 63.7395 31.3963C63.6384 32.0442 62.9213 32.5947 62.3972 33.2959Z" fill="white" fill-opacity="0.6"/>
<path d="M4.24343 29.8977C1.73758 30.3536 0.611701 29.9744 0.366601 28.5835C0.111764 27.1435 1.088 26.5875 3.75004 26.019C6.3198 25.4739 7.33347 26.7023 6.95856 28.0017C6.69121 28.9174 5.43325 29.5445 4.61861 30.2981C4.49028 30.1653 4.36685 30.0315 4.24343 29.8977Z" fill="white" fill-opacity="0.6"/>
</g>
<defs>
<clipPath id="clip0_1_795">
<rect width="140.763" height="137.635" fill="white" transform="translate(135.008) rotate(78.7883)"/>
</clipPath>
</defs>
              </svg>
            </div>
          </div>
          <div className="relative md:translate-x-24 md:translate-y-[-260px] translate-y-[-220px] translate-x-10">
            <img
              src="/src/assets/heroSectionImage.svg"
              alt="Hero Image"
              className="md:w-[580px] md:h-[1000px] md:translate-y-10 rounded-lg relative z-10"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-10 z-0">
              <div
                className="bg-[#FFFFFF66] p-4 shadow-lg text-black w-[250px] md:w-[390px] h-auto md:h-[140px] md:translate-y-[410px] md:translate-x-[-200px] translate-x-[-120px] translate-y-[-130px] rounded-t-3xl border border-blue-500">
                <div className="flex items-center mb-2">
                  <img
                    src="/src/assets/bulb.svg"
                    alt="Icon"
                    className="inline-block mr-2"
                  />
                  <h4 className="text-sm lg:text-base font-medium">Industry-relevant skills</h4>
                </div>
                <p className="text-xs :text-sm">
                  Learning through Edubot has been an<br />
                  incredible experience, allowing me to<br />
                  develop essential industry-relevant skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* HeroSection2 */}
        <div className="min-w-full bg-[url('/src/assets/bg2.png')] bg-cover bg-center bg-no-repeat text-white md:w-full overflow-hidden flex flex-col md:flex-row md:h-[530px] h-[750px] rounded-b-3xl">
          <div className="flex flex-col justify-center items-start w-full md:w-1/2 p-4 md:p-20 gap-8 md:translate-y-[100px] ">
            <h3 className="text-sm uppercase tracking-wide font-medium mb-2 translate-y-14 md:translate-y-5">
              #our motive
            </h3>
            <h1 className="font-bold leading-tight whitespace-nowrap">
              <div className="translate-y-7">
                <span className="block md:hidden text-3xl md:text-5xl">Prepare Students</span>
                <span className="block md:hidden text-3xl md:text-5xl">to <span className="text-yellow-400">Thrive</span>,</span>
                <span className="block md:hidden text-3xl md:text-5xl"> Not Just Survive.</span>
              </div>
              <span className="hidden md:block text-3xl md:text-5xl">
                Deliver quality Education through<br /> engaging,&nbsp;
                <span className="text-yellow-400">advanced programs.</span>
              </span>
            </h1>
            <p className="text-[18px] md:text-[24px] mb-4 md:-mt-3">
              With easy-to-user authoring tools for efficient and effective learning.
            </p>
            <div className="flex flex-row gap-4 mb-4 md:-mt-0 -mt-0">
              <button className="bg-yellow-400 text-[#312860] font-semibold px-4 py-2 rounded-full hover:bg-yellow-500">
                Contact Us
              </button>
              <button className="bg-transparent border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">
                Know More
              </button>
            </div>
            <div className="justify-center space-x-4 md:translate-x-[10px] md:translate-y-[-10px] hidden md:flex">
              <button
                id="dot1"
                className={`w-3 h-3 ${currentIndex === 0 ? 'bg-yellow-400' : 'bg-gray-300'} rounded-full hover:bg-yellow-400 transition`}
                onClick={() => handleDotClick(0)}
              />
              <button
                id="dot2"
                className={`w-3 h-3 ${currentIndex === 1 ? 'bg-yellow-400' : 'bg-gray-300'} rounded-full hover:bg-yellow-400 transition`}
                onClick={() => handleDotClick(1)}
              />
              <button
                id="dot3"
                className={`w-3 h-3 ${currentIndex === 2 ? 'bg-yellow-400' : 'bg-gray-300'} rounded-full hover:bg-yellow-400 transition`}
                onClick={() => handleDotClick(2)}
              />
            </div>
            <div className="relative w-full h-48 md:translate-x-[700px] md:translate-y-[-330px] translate-x-[220px] translate-y-[-150px]">
              <svg width="163" height="165" viewBox="0 0 163 165" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_795)">
<path d="M148.526 130.864C149.912 130.65 150.962 130.493 152.358 130.278C153.285 128.21 154.389 125.781 155.461 123.338C156.03 122.041 156.841 121.14 158.332 121.845C159.711 122.496 159.606 123.639 159.055 124.872C156.807 129.871 154.592 134.883 152.282 140.083C148.168 136.004 144.184 132.066 140.221 128.1C139.31 127.188 139.287 125.988 140.309 125.356C140.945 124.96 142.367 124.984 142.912 125.443C144.957 127.161 146.782 129.142 148.526 130.864Z" fill="white" fill-opacity="0.6"/>
<path d="M146.698 124.114C146.529 123.259 146.099 122.349 146.26 121.567C146.431 120.731 147.012 119.651 147.705 119.361C148.203 119.15 149.632 119.898 149.844 120.504C150.547 122.483 151.018 124.574 151.29 126.665C151.362 127.237 150.46 128.422 149.929 128.471C149.222 128.534 148.154 127.934 147.763 127.297C147.199 126.383 147.098 125.178 146.797 124.099C146.762 124.101 146.733 124.107 146.698 124.114Z" fill="white" fill-opacity="0.6"/>
<path d="M86.736 41.7436C86.4452 40.0963 87.867 38.8549 89.2927 39.5115C91.1508 40.3683 92.9714 41.3704 94.6417 42.5401C95.1514 42.8984 95.4438 44.1166 95.2446 44.7585C95.0789 45.2864 93.8228 46.0255 93.4296 45.8431C91.2429 44.8472 89.1617 43.611 87.0686 42.4179C86.8509 42.2977 86.7996 41.8842 86.736 41.7436Z" fill="white" fill-opacity="0.6"/>
<path d="M66.8023 30.5687C67.9313 30.8605 68.768 31.0418 69.5791 31.2996C70.9453 31.7332 72.3931 32.0384 73.6049 32.7477C74.1999 33.0993 74.7485 34.3484 74.561 34.9726C74.3835 35.5693 73.1361 36.3526 72.5299 36.2277C70.5327 35.8273 68.5673 35.15 66.6845 34.3491C66.1276 34.1124 65.5816 33.1078 65.5973 32.4666C65.612 31.846 66.3479 31.2356 66.8023 30.5687Z" fill="white" fill-opacity="0.6"/>
<path d="M126.84 76.6473C126.502 76.4336 125.726 76.1484 125.256 75.6035C124.124 74.2914 123.144 72.8471 122.094 71.4625C121.327 70.4458 121.391 69.4325 122.332 68.6487C123.309 67.8374 124.344 68.0662 125.112 69.0319C126.272 70.4864 127.452 71.937 128.469 73.4914C129.347 74.8334 128.715 76.3013 126.84 76.6473Z" fill="white" fill-opacity="0.6"/>
<path d="M83.5989 40.9913C81.1986 39.8438 78.9423 38.8566 76.8011 37.6527C76.4334 37.4448 76.2706 36.1601 76.55 35.6912C76.8747 35.1419 77.9345 34.4928 78.415 34.6528C80.5226 35.353 82.5946 36.2337 84.5565 37.2793C85.03 37.5325 85.3049 38.7133 85.1812 39.3759C85.0822 39.9316 84.2632 40.3542 83.5989 40.9913Z" fill="white" fill-opacity="0.6"/>
<path d="M28.6163 28.5624C26.1141 28.5479 24.1003 28.7072 22.1491 28.4355C21.4565 28.3379 20.4211 27.1802 20.429 26.5253C20.4408 25.89 21.5326 24.8364 22.2618 24.7327C24.0922 24.4719 25.9859 24.5815 27.8472 24.6567C29.0551 24.7031 29.9714 25.4148 29.781 26.6674C29.6709 27.4243 28.9261 28.0926 28.6163 28.5624Z" fill="white" fill-opacity="0.6"/>
<path d="M144.994 104.784C144.606 105.295 144.171 106.397 143.579 106.494C142.828 106.617 141.541 106.147 141.185 105.534C140.236 103.884 139.511 102.057 139.019 100.215C138.84 99.5463 139.408 98.1373 139.943 97.9547C140.636 97.7203 142.077 98.1187 142.404 98.6918C143.411 100.452 144.038 102.431 144.994 104.784Z" fill="white" fill-opacity="0.6"/>
<path d="M51.2293 30.8382C48.715 30.4024 46.4968 30.1224 44.3458 29.5635C43.824 29.4271 43.1449 28.2651 43.2595 27.737C43.4048 27.0804 44.3316 26.0952 44.8772 26.1198C47.0878 26.2329 49.3127 26.5729 51.4687 27.0797C51.9827 27.2024 52.6236 28.326 52.5638 28.9249C52.4941 29.6023 51.7013 30.2087 51.2293 30.8382Z" fill="white" fill-opacity="0.6"/>
<path d="M33.0439 24.7949C35.5615 25.0156 37.7427 25.0835 39.8665 25.4793C40.4491 25.5884 41.2343 26.7191 41.2059 27.3475C41.1745 27.9612 40.2367 29.02 39.6686 29.0356C37.5087 29.1013 35.3169 28.9538 33.1901 28.5944C32.6201 28.4981 31.8771 27.3743 31.8566 26.7046C31.8399 26.0545 32.6505 25.3833 33.0439 24.7949Z" fill="white" fill-opacity="0.6"/>
<path d="M142.791 110.259C143.107 109.844 143.543 108.701 144.219 108.537C144.91 108.369 146.297 108.957 146.572 109.571C147.403 111.423 147.988 113.42 148.344 115.422C148.452 116.018 147.586 117.236 146.978 117.382C146.359 117.531 145.116 116.894 144.831 116.282C144.025 114.553 143.568 112.663 142.791 110.259Z" fill="white" fill-opacity="0.6"/>
<path d="M113.929 57.4853C113.669 57.9453 113.463 58.7875 112.939 59.1007C112.409 59.4149 111.35 59.5023 110.902 59.1725C109.211 57.9203 107.581 56.5435 106.145 55.0109C105.744 54.585 105.798 53.2879 106.16 52.721C106.46 52.2532 107.826 51.86 108.196 52.1337C110.079 53.5267 111.798 55.1462 113.559 56.6961C113.688 56.8083 113.721 57.0263 113.929 57.4853Z" fill="white" fill-opacity="0.6"/>
<path d="M140.579 94.1026C140.181 94.692 139.847 95.7637 139.225 95.9688C138.559 96.1875 137.23 95.8384 136.883 95.2947C135.789 93.587 134.88 91.7254 134.21 89.8113C134.002 89.2247 134.605 87.9718 135.196 87.6096C135.674 87.3159 137.071 87.6514 137.399 88.1479C138.542 89.897 139.399 91.8301 140.579 94.1026Z" fill="white" fill-opacity="0.6"/>
<path d="M127.997 79.6505C128.435 78.9816 128.711 78.0797 129.277 77.8244C129.867 77.5594 131.117 77.6383 131.424 78.0523C132.75 79.8263 133.933 81.7305 134.937 83.7062C135.172 84.175 134.709 85.3898 134.207 85.7394C133.705 86.0891 132.344 86.0934 132.055 85.7118C130.629 83.8709 129.433 81.8518 127.997 79.6505Z" fill="white" fill-opacity="0.6"/>
<path d="M103.868 52.1565C102.231 52.5168 96.5762 48.5637 96.5743 47.2675C96.5753 46.6803 96.9053 45.8236 97.364 45.5643C97.9051 45.2579 98.8953 45.1841 99.4139 45.4846C101.074 46.4471 102.673 47.544 104.141 48.7742C104.643 49.1954 104.902 50.1906 104.847 50.8907C104.803 51.4149 104.09 51.8879 103.868 52.1565Z" fill="white" fill-opacity="0.6"/>
<path d="M121.806 66.0229C121.574 66.3445 121.282 67.158 120.733 67.3995C120.174 67.643 119.126 67.5802 118.709 67.1984C117.167 65.7736 115.708 64.2302 114.42 62.5712C114.076 62.1238 114.184 60.8926 114.573 60.4328C114.969 59.9612 116.333 59.5886 116.639 59.87C118.403 61.4857 119.977 63.3023 121.602 65.068C121.712 65.1841 121.688 65.4236 121.806 66.0229Z" fill="white" fill-opacity="0.6"/>
<path d="M62.3972 33.2959C59.8372 32.6037 57.4889 32.0533 55.2274 31.2714C54.8115 31.1292 54.4386 29.9423 54.5857 29.3721C54.7298 28.8126 55.626 27.9816 56.0724 28.0462C58.3856 28.3942 60.68 28.9042 62.9191 29.5732C63.3634 29.7046 63.8287 30.8171 63.7395 31.3963C63.6384 32.0442 62.9213 32.5947 62.3972 33.2959Z" fill="white" fill-opacity="0.6"/>
</g>
<defs>
<clipPath id="clip0_1_795">
<rect width="140.763" height="137.635" fill="white" transform="translate(135.008) rotate(78.7883)"/>
</clipPath>
</defs>
              </svg>
            </div>
          </div>
          <div className="relative md:translate-x-[-10px] md:translate-y-24 translate-y-[-200px] translate-x-50">
            <img
              src="/src/assets/HeroSection2.png"
              alt="Hero Image"
              className="md:w-[700px] w-[550px] h-[350px] md:h-[500px] rounded-lg relative z-10"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-10 z-0">
              {/* Additional content if necessary */}
            </div>
          </div>
        </div>

        {/* HeroSection3 */}
        <div className="min-w-full bg-[url('/src/assets/bg1.png')] bg-cover bg-center bg-no-repeat text-white md:w-full overflow-hidden flex flex-col md:flex-row md:h-[530px] h-[750px] rounded-b-3xl">
          <div className="flex flex-col justify-center items-start w-full md:w-1/2 p-4 md:p-20 gap-8 md:translate-y-[100px]">
            <h3 className="text-sm uppercase tracking-wide font-medium mb-2 translate-y-14 md:translate-y-5">
              #our motive
            </h3>
            <h1 className="font-bold leading-tight whitespace-nowrap">
              <div className="translate-y-7">
                <span className="block md:hidden text-3xl md:text-5xl">Prepare Students</span>
                <span className="block md:hidden text-3xl md:text-5xl">to <span className="text-yellow-400">Thrive</span>,</span>
                <span className="block md:hidden text-3xl md:text-5xl"> Not Just Survive.</span>
              </div>
              <span className="hidden md:block text-3xl md:text-5xl">
                Deliver quality Education through<br /> engaging,&nbsp;
                <span className="text-yellow-400">advanced programs.</span>
              </span>
            </h1>
            <p className="text-[18px] md:text-[24px] mb-4 md:-mt-3 ">
              Strengthen student employability with skill<br className=" hidden md:block "  /> training programs and courses from India's best<br className=" hidden md:block "  /> growing platform.
            </p>
            <div className="flex flex-row gap-4 mb-4 md:-mt-0 -mt-8 ">
              <button className="bg-[#F2B331] text-[#312860] font-semibold px-4 py-2 rounded-full hover:bg-yellow-500">
                Contact Us
              </button>
              <button className="bg-transparent border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">
                Know More
              </button>
            </div>
            <div className="justify-center space-x-4 md:translate-x-[10px] md:translate-y-[-10px] hidden md:flex">
              <button
                id="dot1"
                className={`w-3 h-3 ${currentIndex === 0 ? 'bg-yellow-400' : 'bg-gray-300'} rounded-full hover:bg-yellow-400 transition`}
                onClick={() => handleDotClick(0)}
              />
              <button
                id="dot2"
                className={`w-3 h-3 ${currentIndex === 1 ? 'bg-yellow-400' : 'bg-gray-300'} rounded-full hover:bg-yellow-400 transition`}
                onClick={() => handleDotClick(1)}
              />
              <button
                id="dot3"
                className={`w-3 h-3 ${currentIndex === 2 ? 'bg-yellow-400' : 'bg-gray-300'} rounded-full hover:bg-yellow-400 transition`}
                onClick={() => handleDotClick(2)}
              />
            </div>
            <div className="relative w-full h-48 md:translate-x-[680px] md:translate-y-[-350px] translate-x-[220px] translate-y-[-150px]">
              <svg width="163" height="165" viewBox="0 0 163 165" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_795)">
<path d="M148.526 130.864C149.912 130.65 150.962 130.493 152.358 130.278C153.285 128.21 154.389 125.781 155.461 123.338C156.03 122.041 156.841 121.14 158.332 121.845C159.711 122.496 159.606 123.639 159.055 124.872C156.807 129.871 154.592 134.883 152.282 140.083C148.168 136.004 144.184 132.066 140.221 128.1C139.31 127.188 139.287 125.988 140.309 125.356C140.945 124.96 142.367 124.984 142.912 125.443C144.957 127.161 146.782 129.142 148.526 130.864Z" fill="white" fill-opacity="0.6"/>
<path d="M146.698 124.114C146.529 123.259 146.099 122.349 146.26 121.567C146.431 120.731 147.012 119.651 147.705 119.361C148.203 119.15 149.632 119.898 149.844 120.504C150.547 122.483 151.018 124.574 151.29 126.665C151.362 127.237 150.46 128.422 149.929 128.471C149.222 128.534 148.154 127.934 147.763 127.297C147.199 126.383 147.098 125.178 146.797 124.099C146.762 124.101 146.733 124.107 146.698 124.114Z" fill="white" fill-opacity="0.6"/>
<path d="M86.736 41.7436C86.4452 40.0963 87.867 38.8549 89.2927 39.5115C91.1508 40.3683 92.9714 41.3704 94.6417 42.5401C95.1514 42.8984 95.4438 44.1166 95.2446 44.7585C95.0789 45.2864 93.8228 46.0255 93.4296 45.8431C91.2429 44.8472 89.1617 43.611 87.0686 42.4179C86.8509 42.2977 86.7996 41.8842 86.736 41.7436Z" fill="white" fill-opacity="0.6"/>
<path d="M66.8023 30.5687C67.9313 30.8605 68.768 31.0418 69.5791 31.2996C70.9453 31.7332 72.3931 32.0384 73.6049 32.7477C74.1999 33.0993 74.7485 34.3484 74.561 34.9726C74.3835 35.5693 73.1361 36.3526 72.5299 36.2277C70.5327 35.8273 68.5673 35.15 66.6845 34.3491C66.1276 34.1124 65.5816 33.1078 65.5973 32.4666C65.612 31.846 66.3479 31.2356 66.8023 30.5687Z" fill="white" fill-opacity="0.6"/>
<path d="M126.84 76.6473C126.502 76.4336 125.726 76.1484 125.256 75.6035C124.124 74.2914 123.144 72.8471 122.094 71.4625C121.327 70.4458 121.391 69.4325 122.332 68.6487C123.309 67.8374 124.344 68.0662 125.112 69.0319C126.272 70.4864 127.452 71.937 128.469 73.4914C129.347 74.8334 128.715 76.3013 126.84 76.6473Z" fill="white" fill-opacity="0.6"/>
<path d="M83.5989 40.9913C81.1986 39.8438 78.9423 38.8566 76.8011 37.6527C76.4334 37.4448 76.2706 36.1601 76.55 35.6912C76.8747 35.1419 77.9345 34.4928 78.415 34.6528C80.5226 35.353 82.5946 36.2337 84.5565 37.2793C85.03 37.5325 85.3049 38.7133 85.1812 39.3759C85.0822 39.9316 84.2632 40.3542 83.5989 40.9913Z" fill="white" fill-opacity="0.6"/>
<path d="M144.994 104.784C144.606 105.295 144.171 106.397 143.579 106.494C142.828 106.617 141.541 106.147 141.185 105.534C140.236 103.884 139.511 102.057 139.019 100.215C138.84 99.5463 139.408 98.1373 139.943 97.9547C140.636 97.7203 142.077 98.1187 142.404 98.6918C143.411 100.452 144.038 102.431 144.994 104.784Z" fill="white" fill-opacity="0.6"/>
<path d="M51.2293 30.8382C48.715 30.4024 46.4968 30.1224 44.3458 29.5635C43.824 29.4271 43.1449 28.2651 43.2595 27.737C43.4048 27.0804 44.3316 26.0952 44.8772 26.1198C47.0878 26.2329 49.3127 26.5729 51.4687 27.0797C51.9827 27.2024 52.6236 28.326 52.5638 28.9249C52.4941 29.6023 51.7013 30.2087 51.2293 30.8382Z" fill="white" fill-opacity="0.6"/>
<path d="M33.0439 24.7949C35.5615 25.0156 37.7427 25.0835 39.8665 25.4793C40.4491 25.5884 41.2343 26.7191 41.2059 27.3475C41.1745 27.9612 40.2367 29.02 39.6686 29.0356C37.5087 29.1013 35.3169 28.9538 33.1901 28.5944C32.6201 28.4981 31.8771 27.3743 31.8566 26.7046C31.8399 26.0545 32.6505 25.3833 33.0439 24.7949Z" fill="white" fill-opacity="0.6"/>
<path d="M142.791 110.259C143.107 109.844 143.543 108.701 144.219 108.537C144.91 108.369 146.297 108.957 146.572 109.571C147.403 111.423 147.988 113.42 148.344 115.422C148.452 116.018 147.586 117.236 146.978 117.382C146.359 117.531 145.116 116.894 144.831 116.282C144.025 114.553 143.568 112.663 142.791 110.259Z" fill="white" fill-opacity="0.6"/>
<path d="M113.929 57.4853C113.669 57.9453 113.463 58.7875 112.939 59.1007C112.409 59.4149 111.35 59.5023 110.902 59.1725C109.211 57.9203 107.581 56.5435 106.145 55.0109C105.744 54.585 105.798 53.2879 106.16 52.721C106.46 52.2532 107.826 51.86 108.196 52.1337C110.079 53.5267 111.798 55.1462 113.559 56.6961C113.688 56.8083 113.721 57.0263 113.929 57.4853Z" fill="white" fill-opacity="0.6"/>
<path d="M140.579 94.1026C140.181 94.692 139.847 95.7637 139.225 95.9688C138.559 96.1875 137.23 95.8384 136.883 95.2947C135.789 93.587 134.88 91.7254 134.21 89.8113C134.002 89.2247 134.605 87.9718 135.196 87.6096C135.674 87.3159 137.071 87.6514 137.399 88.1479C138.542 89.897 139.399 91.8301 140.579 94.1026Z" fill="white" fill-opacity="0.6"/>
<path d="M127.997 79.6505C128.435 78.9816 128.711 78.0797 129.277 77.8244C129.867 77.5594 131.117 77.6383 131.424 78.0523C132.75 79.8263 133.933 81.7305 134.937 83.7062C135.172 84.175 134.709 85.3898 134.207 85.7394C133.705 86.0891 132.344 86.0934 132.055 85.7118C130.629 83.8709 129.433 81.8518 127.997 79.6505Z" fill="white" fill-opacity="0.6"/>
<path d="M103.868 52.1565C102.231 52.5168 96.5762 48.5637 96.5743 47.2675C96.5753 46.6803 96.9053 45.8236 97.364 45.5643C97.9051 45.2579 98.8953 45.1841 99.4139 45.4846C101.074 46.4471 102.673 47.544 104.141 48.7742C104.643 49.1954 104.902 50.1906 104.847 50.8907C104.803 51.4149 104.09 51.8879 103.868 52.1565Z" fill="white" fill-opacity="0.6"/>
<path d="M121.806 66.0229C121.574 66.3445 121.282 67.158 120.733 67.3995C120.174 67.643 119.126 67.5802 118.709 67.1984C117.167 65.7736 115.708 64.2302 114.42 62.5712C114.076 62.1238 114.184 60.8926 114.573 60.4328C114.969 59.9612 116.333 59.5886 116.639 59.87C118.403 61.4857 119.977 63.3023 121.602 65.068C121.712 65.1841 121.688 65.4236 121.806 66.0229Z" fill="white" fill-opacity="0.6"/>
<path d="M62.3972 33.2959C59.8372 32.6037 57.4889 32.0533 55.2274 31.2714C54.8115 31.1292 54.4386 29.9423 54.5857 29.3721C54.7298 28.8126 55.626 27.9816 56.0724 28.0462C58.3856 28.3942 60.68 28.9042 62.9191 29.5732C63.3634 29.7046 63.8287 30.8171 63.7395 31.3963C63.6384 32.0442 62.9213 32.5947 62.3972 33.2959Z" fill="white" fill-opacity="0.6"/>
</g>
<defs>
<clipPath id="clip0_1_795">
<rect width="140.763" height="137.635" fill="white" transform="translate(135.008) rotate(78.7883)"/>
</clipPath>
</defs>
              </svg>
            </div>
          </div>
          <div className="relative md:translate-y-[-100px]">
            <div
              className="bg-[url('/src/assets/laptop.svg')] bg-cover bg-center bg-no-repeat w-[300px] md:w-[433px] h-[300px] md:h-[446px] rounded-lg relative z-10 md:translate-x-[250px] md:translate-y-[120px] translate-y-[-190px] translate-x-[150px]"
            >
              <div className="flex items-center justify-center bg-opacity-10 h-full">
                <div
                  className="bg-[#FFFFFF66] p-4 shadow-lg text-black w-[250px] md:w-[300px] h-auto md:h-[140px] md:translate-x-[-300px] md:translate-y-[180px] translate-x-[-170px] translate-y-[100px] rounded-t-3xl border border-blue-500"
                >
                  <div className="flex items-center mb-2">
                    <h4 className="text-sm lg:text-base font-medium">Learning through Edubot</h4>
                  </div>
                  <p className="text-xs md:text-sm">
                    Learning through Edubot has been an<br />
                    incredible experience, allowing me to<br />
                    develop essential industry-relevant skills.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Carousel;