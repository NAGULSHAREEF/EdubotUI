import { courses } from "../../OurFeatures"
import BeginnerToPro from "../BeginnerToPro"
import GetIntouchDetails from "../GetIntouchDetails"
import HeroSection from "../HeroSection"
import IntrenshipCertificate from "../IntrenshipCertificate"
import TopCarrier from "../TopCarrier"
import TopCompanies from "../TopCompanies"
import { useParams } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  duration: number;
}

const IntrenshipsDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((course: Course) => course.id.toString() === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <HeroSection title={course.title}/>
      <GetIntouchDetails  duration={course.duration}/>
      <TopCompanies/>
      <BeginnerToPro/>
      <TopCarrier/>
      <IntrenshipCertificate/>
    </div>
  )
}

export default IntrenshipsDetailsPage
