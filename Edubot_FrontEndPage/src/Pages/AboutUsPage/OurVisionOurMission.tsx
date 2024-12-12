import Ourmission from "../../assets/missionimage.png"
import target from "../../assets/targetimage.png"

interface CardProps {
  title: string
  description: string
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="bg-[#FDF4E0] rounded-3xl w-full max-w-[290px] h-[320px] md:max-w-[420px] md:h-[460px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-100 hover:scale-105 p-8 flex flex-col justify-between">
      <div className="flex justify-center mb-6">
        <img
          src={title === "Our vision" ? target : Ourmission}
          alt={title}
          className="w-[107px] h-[115px] md:w-[160px] md:h-[180px] object-contain -md:mt-4 -md:mb-12"
        />
      </div>
      <div className="text-center md:p-4">
        <h2 className="text-[28px] md:text-[48px] md:leading-[66px] font-bold text-[#222222] md:mb-1">{title}</h2>
        <p className="text-[#222222] text-[12px] md:text-[20px] md:leading-[23px]">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function OurVisionOurMisson() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-12">
        <Card
          title="Our vision"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis amet mauris lorem, ipsum dolor sit amet consectetur adipiscing elit duis amet mauris lorem."
        />
        <Card
          title="Our mission"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis amet mauris lorem, ipsum dolor sit amet consectetur adipiscing elit duis amet mauris lorem."
        />
      </div>
    </div>
  )
}

