import React from 'react';

const GetInTouch: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-yellow-400 rounded-t-3xl md:w-[1200px] "> {/* Increased padding from p-4 to p-6 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-4 md:translate-x-[150px] md:translate-y-[20px] "> {/* Increased spacing between text elements */}
          <h2 className="text-[30px] font-bold text-[#222222]">
            Get in touch with us<br/> in just 3 steps
          </h2>
          <p className="text-sm text-[#17174D] font-semibold text-[24px]">Still have doubts?</p>
          {/* <p className="text-[18px] md:translate-x-[640px] text-[#17174D] font-semibold">
            Our 24/7 support team is available to help with your integration.
          </p> */}
        </div>

        {/* Right Section - Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 md:translate-y-[10px] md:translate-x-[-50px]">
          {/* Button for services */}
          <div className="bg-white text-center rounded-2xl shadow p-4 w-full md:w-auto">
  {/* Adjusted CSS to ensure text fits in a single line */}
  <p className="text-[15px] font-semibold text-[#222222] inline-block whitespace-nowrap">
    For Our Services and Registrations
  </p>
  <p className="text-[#000000] font-semibold">1800-2707-000</p>
</div>

          {/* Button for Slack chat */}
          <div className="bg-white text-center rounded-2xl shadow p-4 w-full md:w-auto">
  {/* Ensure the text fits in a single line */}
  <p className="text-lg font-semibold text-[#222222] whitespace-nowrap">
    For slack chat on text
  </p>
  <p className="text-[#000000] font-semibold">8828000038</p>
</div>
        </div>
        <p className="text-[15px] text-[#17174D] md:translate-x-[600px] md:translate-y-[-10px] font-semibold">
            Our 24/7 support team is available to help with your integration.
          </p>
      </div>
    </div>
  );
};

export default GetInTouch;