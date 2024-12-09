import { type ReactNode } from "react";

interface ProcessStep {
  number: number;
  title: string;
  imageUrl: string;
  bgColor: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: "Student Selection",
    imageUrl: "./src/assets/student selection.png",
    bgColor: "bg-[#FFF7ED]",
  },
  {
    number: 2,
    title:  "Training ",
    imageUrl: "./src/assets/trainig.png",
    bgColor: "bg-[#FFFFFF]",
  },
  {
    number: 3,
    title: "Real Projects",
    imageUrl: "/src/assets/image3619.png",
    bgColor: "bg-[#FFFFFF]",
  },
  {
    number: 4,
    title: "Enhancement",
    imageUrl: "./src/assets/enhancement.png",
    bgColor: "bg-[#FFF7ED]",
  },
];

function ProcessStep({ step }: { step: ProcessStep }) {
  const borderColor =
    step.number === 1 || step.number === 4 ? "#F2B33180" : "#17174D33";

  return (
    <div
      className={`relative ${step.bgColor}  rounded-full p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center aspect-square border-2 transition-transform hover:scale-105`}
      style={{ borderColor }}
    >
      <div className="absolute top-12 left-[20px] -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-black  flex items-center justify-center text-xs sm:text-lg font-bold">
        {step.number}
      </div>
      <img
        src={step.imageUrl}
        alt={step.title}
        width={160}
        height={160}
        className="w-20 h-20 sm:w-12 sm:h-12 lg:w-32 lg:h-32 mb-2 lg:mb-0 lg:-mt-5  object-contain"

      />
      <h3 className="text-center text-xs text-[#17174D]  -lg:-mt-2 sm:text-sm lg:text-[20px] font-bold">
        {step.title}
      </h3>
    </div>
  );
}

function ConnectingLine() {
  return (
    <div
      className="flex-grow border-t-2 border-dashed border-[#000000]"
      aria-hidden="true"
    />
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="text-center -mt-3 max-w-6xl mx-auto px-4 ">

      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#17174D]">
        Where Learning Meets Boundless Possibilities
      </h2>
      <p className="text-sm sm:text-base lg:text-2xl mt-11 text-gray-600">
        {children}
      </p>
    </div>
  );
}

export default function ProcessTimeline() {
  return (
    <section className="py-16 px-4 sm:px-6  lg:mb-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>
          Because education must evolve to meet industry needs. Our incubation
          centers are the bridge that<br />
          ensures students don't just learn theory—they gain practical skills to
          succeed.<br />
          Here is for you how it works
        </SectionTitle>

        {/* Desktop Layout - Adjusted Horizontal with offset circles */}
        <div className="hidden lg:flex  items-center justify-between relative max-w-7xl">
        <div className="absolute w-72 rotate-12 left-10  top-1/2 -translate-y-1/2 flex items-center justify-between ">
            {steps.slice(0, steps.length - 1).map((_, index) => (
              <ConnectingLine key={index} />
            ))}
          </div>
          <div className="absolute w-72 rotate-12 
            right-32 top-36  -translate-y-1/2 flex items-center justify-between ">
            {steps.slice(0, steps.length - 1).map((_, index) => (
              <ConnectingLine key={index} />
            ))}
          </div>
          <div className="absolute w-72 -rotate-12 left-96 right-0 top-2/3 -translate-y-1/2 flex items-center justify-between ">
            {steps.slice(0, steps.length - 1).map((_, index) => (
              <ConnectingLine key={index} />
            ))}
          </div>
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex-shrink-0 w-60 relative ${
                index % 2 === 1 ? "mt-20" : ""
              }`}
            >
              <ProcessStep step={step} />
            </div>
          ))}
      
         
        </div>

      
        <div className="lg:hidden  space-y-4  mt-12  max-w-40    mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <ProcessStep step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
