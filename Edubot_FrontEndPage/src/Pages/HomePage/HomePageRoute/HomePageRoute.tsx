import Facts from "../facts"
import HeroSection from "../HeroSection"
import HybridRoles from "../HybridRoles"
import Testimonials from "../Testimonials"
import Services from "../Services"
import Vision from "../Vision"
import Journey from "../Journey"
import WhatOurPartners from "../WhatOurPartners"
import OurRoadMap from "../OurRoadMap"
import Questions from "../Questions"
import GetInTouch from "../GetInTouch"

const HomePageRoute = () => {
  return (
    <div>
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
    </div>
  )
}

export default HomePageRoute
