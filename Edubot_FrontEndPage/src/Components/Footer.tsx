import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChevronUp } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <footer className="bg-[#0D084D] text-white border-b border-gray-500">
      <div className="max-w-7xl mx-auto px-4 py-6 md:flex md:items-center md:justify-between flex-col md:flex-row">
  {/* Left Side: Logo and Tagline */}
  <div className="flex items-center space-x-2 mb-4 md:mb-0 lg:translate-x-24 lg:translate-y-10 translate-y-20 md:flex-shrink-0">
    <img
      src="/src/assets/logo1.svg"
      alt="Edubot Logo"
      className="h-28 w-28 md:h-36 md:w-36"
    />
  </div>

  {/* Right Side: Social Media Icons */}
  <div className="flex space-x-2 md:space-x-4 items-center lg:translate-x-[-50px] translate-x-[200px] lg:translate-y-10 md:ml-auto">
    <a href="#" className="text-blue-950 bg-white rounded-full p-2 md:p-3 h-7 w-7 md:h-10 md:w-10 flex items-center justify-center">
      <FontAwesomeIcon icon={faFacebookF} />
    </a>
    <a href="#" className="text-blue-950 bg-white rounded-full p-2 md:p-3 h-7 w-7 md:h-10 md:w-10 flex items-center justify-center">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href="#" className="text-blue-950 bg-white rounded-full p-2 md:p-3 h-7 w-7 md:h-10 md:w-10 flex items-center justify-center">
      <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
    <a href="#" className="text-blue-950 bg-white rounded-full p-2 md:p-3 h-7 w-7 md:h-10 md:w-10 flex items-center justify-center">
      <FontAwesomeIcon icon={faYoutube} />
    </a>
    <a href="#" className="text-blue-950 bg-white rounded-full p-2 md:p-3 h-7 w-7 md:h-10 md:w-10 flex items-center justify-center">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  </div>
</div>
    </footer>
      <footer className="bg-[#0b0b48] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:translate-x-[-15px] translate-x-[-15px] translate-y-[-55px] lg:h-[100px] lg:translate-y-2">
      <div className="space-y-2 lg:border-l md:order-last lg:order-last lg:translate-y-[2px]">
  <div className="mt-4">
    <button className="mt-2 bg-[#f9b233] text-[#0b0b48] font-bold lg:py-2 lg:px-[83px] px-[115px] flex items-center justify-between lg:mt-[-65px] whitespace-nowrap">
      <span className="flex lg:translate-x-[-50px] translate-x-[-100px]">
        Try Edubot for Free
        <ArrowRight className="lg:ml-36 ml-56 bg-[#FFFFFF] text-[#f9b233] rounded-full flex items-center justify-center h-8 w-8" />
      </span>
    </button>
    <h4 className="font-semibold lg:translate-y-10 translate-y-[20px] lg:translate-x-10">Partner with us</h4>
  </div>
</div>

  <div className="space-y-2 md:col-span-2 lg:col-span-1 lg:order-first">
  <details className="lg:hidden">
  <summary className="font-semibold flex justify-between items-center">
    Company
    <ChevronUp className="h-5 w-5" />
  </summary>
  <ul className="space-y-1 text-gray-300 text-sm mt-3">
    <li><a href="#" className="ml-8">About</a></li>
    <li><a href="#" className="ml-8">Blogs</a></li>
    <li><a href="#" className="ml-8">Events</a></li>
    <li><a href="#" className="ml-8">Contact us</a></li>
  </ul>
</details>
    <div className="hidden lg:block space-y-2 lg:translate-x-20 lg:translate-y-[-20px]">
      <h4 className="font-semibold">Company</h4>
      <ul className="space-y-1 text-gray-300 text-sm">
        <li><a href="#">About</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
    </div>
  </div>

  <div className="space-y-2 md:col-span-2 lg:col-span-1 lg:order-first">
  <details className="lg:hidden">
          <summary className="font-semibold flex justify-between items-center">
            Services
            <ChevronUp className="h-5 w-5" />
          </summary>
          <ul className="space-y-1 text-gray-300 text-sm mt-3">
            <li><a href="#" className="ml-8">Skill Oriented Courses (SOC)</a></li>
            <li><a href="#" className="ml-8">Internships</a></li>
            <li><a href="#" className="ml-8">Incubation Centre</a></li>
          </ul>
        </details>
    <div className="hidden lg:block space-y-2 lg:translate-y-[-20px]">
      <h4 className="font-semibold">Services</h4>
      <ul className="space-y-1 text-gray-300 text-sm">
        <li><a href="#">Skill Oriented Courses (SOC)</a></li>
        <li><a href="#">Internships</a></li>
        <li><a href="#">Incubation Centre</a></li>
      </ul>
    </div>
  </div>

  <div className="space-y-2 md:col-span-2 lg:col-span-1 lg:order-first">
  <details className="lg:hidden">
          <summary className="font-semibold flex justify-between items-center mt-3">
            Say Hello
            <ChevronUp className="h-5 w-5" />
          </summary>
          <a href="mailto:edubot@technologies.com" className="text-gray-300 text-sm ml-8">edubot@technologies.com</a>
        </details>
    <div className="hidden lg:block space-y-2 lg:translate-y-[-20px]">
      <h4 className="font-semibold">Say Hello</h4>
      <a href="mailto:edubot@technologies.com" className="text-gray-300 text-sm">edubot@technologies.com</a>
    </div>
  </div>
</div>

<div className="mt-8 border-t border-gray-500 pt-4 text-gray-400 text-sm lg:translate-y-3">
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 lg:translate-x-16">
    <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap space-y-2 md:space-y-0 md:space-x-2">
      <div className="flex justify-center sm:justify-start space-x-2">
        <a href="#" className="hover:text-white w-full sm:w-auto flex justify-center sm:justify-start items-center">
          Privacy Policy
          <span className="mx-2 sm:mx-6">|</span>
        </a>
        <a href="#" className="hover:text-white w-full sm:w-auto flex justify-center sm:justify-start items-center whitespace-nowrap">
          Terms and Conditions
        </a>
      </div>
      <div className="flex justify-center sm:justify-start space-x-2">
        <a href="#" className="hover:text-white w-full sm:w-auto flex justify-center sm:justify-start items-center">
          Cookie Policy
          <span className="mx-2 sm:mx-6">|</span>
        </a>
        <a href="#" className="hover:text-white w-full sm:w-auto flex justify-center sm:justify-start items-center whitespace-nowrap">
          Acceptable Use Policy
        </a>
      </div>
    </div>
    <p className="lg:translate-x-[-150px]">© 2022 Edubot. All rights reserved.</p>
  </div>
</div>

      </footer>
    </div>
  );
};

export default Footer;