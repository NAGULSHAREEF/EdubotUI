import WhatOurPartners from "../../HomePage/WhatOurPartners"
import Courses from "../Courses"
import HeroSection from "../HeroSection"
import MasteringSkill from "../MasteringSkill"
import Questions from "../../HomePage/Questions"

const SkillOrientedCourses = () => {
  return (
    <div>
      <HeroSection/>
      <MasteringSkill/>
      <Courses/>
      <WhatOurPartners h1='Success Stories from Our Participants' p='Echoes of Satisfaction and Confidence in Our Solutions' content={""} author={""} role={""}/>
      <Questions />
    </div>
  )
}

export default SkillOrientedCourses
