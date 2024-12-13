import WhatOurPartners from "../../HomePage/WhatOurPartners"
import BenifitsYouWillGain from "../BenifitsYouWillGain"
import FeelingConfused from "../FeelingConfused"
import HeroSection from "../HeroSection"
import OurFeatures from "../OurFeatures"



const InternshipsAndTrainingRoute = () => {
  return (
    <div>
      <HeroSection/>
      <BenifitsYouWillGain/>
      <OurFeatures/>
      <FeelingConfused/>
      <WhatOurPartners h1='Success Stories from Our Participants' p='Echoes of Satisfaction and Confidence in Our Solutions' content={""} author={""} role={""}/>
    </div>
  )
}

export default InternshipsAndTrainingRoute
