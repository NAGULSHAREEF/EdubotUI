import { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
};
  return (
    <nav className="bg-white text-black p-4">
        <div className="container mx-auto flex justify-between items-center relative">
          <div className="md:hidden flex order-1">
            <button className="text-xl" onClick={handleMenuToggle}>
              &#9776;
            </button>
          </div>
          <div className="md:hidden flex justify-center w-full order-2">
            <img src="/src/assets/logo.svg" alt="EduBot" className="h-8" />
          </div>
          <div className="hidden md:flex items-center space-x-4 order-1">
            <img src="/src/assets/logo.svg" alt="EduBot" className="h-8 pl-3" />
          </div>
          <div className="hidden md:flex space-x-6 lg:translate-x-80 order-2 md:order-1">
            <a href="#about" className="hover:text-gray-300">About Us</a>
            <a href="#services" className="hover:text-gray-300">Our Services</a>
            <a href="#updates" className="hover:text-gray-300">Latest updates</a>
          </div>
          <div className="order-3 md:order-2">
            <button className="bg-white text-yellow-600 py-2 px-6 rounded-full border-2 border-yellow-600 lg:translate-x-[-30px]">
              Login
            </button>
          </div>
          <div className={`absolute top-16 left-0 w-full md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white w-full p-4 shadow-lg flex flex-col items-start space-y-4 z-10">
              <a href="#about" className="hover:text-gray-300 w-full">About Us</a>
              <a href="#services" className="hover:text-gray-300 w-full">Our Services</a>
              <a href="#updates" className="hover:text-gray-300 w-full">Latest updates</a>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
