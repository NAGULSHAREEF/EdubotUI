import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import FutureFestButton from './Components/FutureFestButton'
import HeroSection from './Pages/HomePage/HeroSection'
import Vision from './Pages/HomePage/Vision'
import Services from './Pages/HomePage/Services'
import HybridRoles from './Pages/HomePage/HybridRoles'
import Facts from './Pages/HomePage/facts'
import Testimonials from './Pages/HomePage/Testimonials'
import Journey from './Pages/HomePage/Journey'
import WhatOurPartners from './Pages/HomePage/WhatOurPartners'
import OurRoadMap from './Pages/HomePage/OurRoadMap'
import Questions from './Pages/HomePage/Questions'
import GetInTouch from './Pages/HomePage/GetInTouch'
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Vision />
      <Services />
      <Facts />
      <HybridRoles />
      <Testimonials />
      <Journey />
      <WhatOurPartners />
      <OurRoadMap />
      <Questions />
      <GetInTouch />
      <Footer />
      <FutureFestButton />
    </>
  )
}

export default App
