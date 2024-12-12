'use client'

import { useState } from 'react'
import image1 from '../../assets/image3624.png';
import image2 from '../../assets/instagram.png';
import image3 from '../../assets/Facebook.png';
import image4 from '../../assets/Layer 2.png';
import image5 from '../../assets/image 3623.png';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    lastName: '',
    designation: '',
    collegeName: '',
    services: '',
    location: '',
    comments: '',
    consent: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <h1 className="text-3xl font-bold text-center text-[#1D1F71] py-6">Get in touch</h1>
      <div className="max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl">
        
        {/* Header Section */}
        <div className="bg-[#17174D] text-white p-6 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
  <div className="md:border-r md:border-[#F2B331] pr-6">
    <h2 className="text-[#FFA726] font-bold font-DM Sans mb-2">Contact information</h2>
    <p className="text-sm">Fill up the form and our team will get in touch with you within 24 hours.</p>
  </div>
  
  <div className="md:border-r md:border-[#F2B331] pr-6">
    <h2 className="text-[#FFA726] mt-3 mb-2 font-bold font-DM Sans">Email ID:</h2>
    <p className="text-sm">edubottechnologies@gmail.com</p>
  </div>
  
  <div>
    <h2 className="text-[#FFA726] mb-2 font-bold font-DM Sans">Scan to Connect</h2>
    <div className="bg-white w-24 h-24 rounded-lg flex items-center justify-center">
      <img 
        src={image5} 
        alt="Image 5" 
        className="w-20 h-20"
      />
    </div>
  </div>

          {/* Fixed image at the right edge of the header */}
          <a href="#" className="absolute md:top-32 top-[340px] md:right-[40px] lg:right-[85px] right-3 transform translate-x-0 z-10">
            <img 
              src={image1} 
              alt="Image 1" 
              className="w-32 h-20 rounded-full hover:scale-110 transition-transform object-cover"
            />
          </a>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6 rounded-b-2xl border border-b-[#F2B331] border-l-[#F2B331] border-r-[#F2B331]">
          {/* Form Section */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="lg:w-[320px] md:w-[250px] border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500"
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="lg:w-[320px] md:w-[250px] border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500"
                onChange={handleChange}
              />
              <input
                type="text"
                name="designation"
                placeholder="Designation"
                className="lg:w-[320px] md:w-[250px] border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500"
                onChange={handleChange}
              />
              <input
                type="text"
                name="collegeName"
                placeholder="College Name"
                className="lg:w-[320px] md:w-[250px] border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500"
                onChange={handleChange}
              />
              <input
                type="text"
                name="services"
                placeholder="Services"
                className="lg:w-[320px] md:w-[250px] border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500"
                onChange={handleChange}
              />
              <select
                name="location"
                className="lg:w-[320px] md:w-[250px] border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                defaultValue=""
              >
                <option value="" disabled>Select location</option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
              </select>
              <div className="md:col-span-2">
                <input
                  name="comments"
                  placeholder="Comments"
                 
                    className="lg:w-[320px] md:w-[250px] border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="md:col-span-2 flex items-start gap-2">
                <input
                  type="checkbox"
                  name="consent"
                  className="mt-1"
                  onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))} 
                />
                <p className="text-sm text-gray-600">
                  Yes, I consent to receive occasional marketing communications including
                  emails, messages or calls with updates on services, market trends, events and
                  other information from Edubot.
                </p>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full lg:w-auto bg-yellow-400 hover:bg-yellow-500 text-black text-sm px-6 py-2 rounded-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="relative flex md:flex-col sm:flex-row justify-center items-center gap-4 md:col-span-1 md:-mt-4 mt-0">
            <div className="w-[2px] h-10 bg-gray-500 hidden md:block"></div>
            <a href="#">
              <img 
                src={image2} 
                alt="Image 2" 
                className="w-12 h-12 rounded-full hover:scale-110 transition-transform object-cover"
              />
            </a>
            <a href="#">
              <img 
                src={image3} 
                alt="Image 3"
                className="w-12 h-12 rounded-full hover:scale-110 transition-transform object-cover"
              />
            </a>
            <a href="#">
              <img 
                src={image4}
                alt="Image 4" 
                className="w-12 h-12 rounded-full hover:scale-110 transition-transform object-cover"
              />
            </a>
            <div className="w-[2px] h-10 bg-gray-500 hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
