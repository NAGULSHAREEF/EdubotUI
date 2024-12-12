import BoundlessPossibilities from "../BoundlessPossibilities"
import WhatOurPartners from "../../HomePage/WhatOurPartners"

import BridgingEducation from "../BridgingEducation"
import HeroSection from "../HeroSection"
import Questions from "../../HomePage/Questions"

const IncubationCenterRoute = () => {
    return (
      <div>
        <HeroSection/>
        <BoundlessPossibilities/>
        <BridgingEducation/>
        <WhatOurPartners h1='Success Stories from Our Participants' p='Echoes of Satisfaction and Confidence in Our Solutions' content={""} author={""} role={""}/>
        <Questions />
      </div>
    )
  }
  
  export default IncubationCenterRoute
  