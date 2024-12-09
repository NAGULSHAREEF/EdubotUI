'use client'

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone } from 'react-icons/fa'

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundImage: `url('/src/assets/Getintouchbg.png')` }}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-3xl lg:text-4xl font-bold text-[#17174D] mb-8">Get in touch</h1>

        <div className="overflow-hidden border-4  rounded-lg">
          {/* Header Section */}
          <div className="bg-[#17174D] text-white p-6 lg:grid lg:grid-cols-3 lg:gap-8 relative">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-xl font-semibold mb-2 text-yellow-400">Contact information</h2>
              <p className="text-sm text-gray-300">Fill up the form and our team will get in touch with you within 24 hours.</p>
            </div>
            <div className="mb-6 lg:mb-0">
              <h2 className="text-xl font-semibold mb-2 text-yellow-400">Email ID:</h2>
              <p className="text-sm text-gray-300">edubottechnologies@gmail.com</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2 text-yellow-400">Scan to Connect</h2>
              <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
                <img 
                  src="./src/assets/scanner.png" 
                  alt="WhatsApp QR Code"
                  className="mx-auto w-24 h-24"
                />
              </a>
            </div>
            <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
              <a href="tel:+1234567890" className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                <FaPhone className="text-[#17174D]" />
              </a>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="p-8 bg-white  border-[#F2B331] ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-12">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full md:w-[50%] pb-1  md:ml-0 border-0 border-b  focus:border-blue-500 focus:border-b-2 focus:ring-0 bg-transparent outline-none transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="w-full  md:w-[50%] pb-1 md:ml-[-12] border-0 border-b  focus:border-blue-500 focus:border-b-2 focus:ring-0 bg-transparent outline-none transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="designation"
                  placeholder="Designation"
                  className="w-full md:w-[50%] pb-1 border-0 border-b  focus:border-blue-500 focus:border-b-2 focus:ring-0 bg-transparent outline-none transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="collegeName"
                  placeholder="College Name"
                  className="w-full  md:w-[50%] pb-1 border-0 border-b  focus:border-blue-500 focus:border-b-2 focus:ring-0 bg-transparent outline-none transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="services"
                  placeholder="Services"
                  className="w-full md:w-[50%] pb-1 border-0 border-b  focus:border-blue-500 focus:border-b-2 focus:ring-0 bg-transparent outline-none transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="location"
                  placeholder="Select location"
                  className="w-full  md:w-[50%] pb-1 border-0 border-b  focus:border-blue-500 focus:border-b-2 focus:ring-0 bg-transparent outline-none transition-colors duration-200"
                  required
                />
              </div>

              <div className="col-span-full">
                <textarea
                  name="comments"
                  placeholder="Comments"
                  className="w-full  pb-1 border-0 border-b  focus:border-blue-500 focus:border-b-2 focus:ring-0 bg-transparent outline-none transition-colors duration-200 min-h-[100px] resize-none"
                ></textarea>
              </div>

              <div className="col-span-full flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  Yes, I consent to receive occasional marketing communications including emails, messages or calls with updates on services, market trends, events and other information from Edubot.
                </label>
              </div>

              <div className="col-span-full">
                <button
                  type="submit"
                  className="w-full lg:w-auto bg-yellow-400 hover:bg-yellow-500 text-black text-sm px-4 py-2 rounded"
                >
                  Get in touch
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Vertical Social Media Icons */}
      <div className="hidden lg:flex flex-col items-center right-0  left-20 top-12 transform translate-y-20 mr-4">
        <div className="w-px h-54 w-54 bg-blue-500 mb-4"></div>
        <a href="tel:+1234567890" className="mb-4 text-blue-500 hover:text-blue-600">
          <FaPhone size={24} />
        </a>
        <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="mb-4 text-#1877F2 hover:text-blue-600">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.facebook.com/your-facebook" target="_blank" rel="noopener noreferrer" className="mb-4 text-blue-500 hover:text-blue-600">
          <FaFacebookF size={24} />
        </a>
        <a href="https://www.linkedin.com/your-linkedin" target="_blank" rel="noopener noreferrer" className="mb-4 text-blue-500 hover:text-blue-600">
          <FaLinkedinIn size={24} />
        </a>
        <div className="w-px h-32 bg-blue-500 mt-4"></div>
      </div>
    </div>
  )
}

