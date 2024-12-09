import React from "react";

const LearningSection: React.FC = () => {
  return (
    <section className="text-center py-10 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17174D] mb-4">
        Where Learning Meets Boundless Possibilities.
      </h1>

      {/* Subheading */}
      <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
        Because education must evolve to meet industry needs. Our incubation
        centers are the bridge that ensures students don’t just learn theory—
        they gain practical skills to succeed. <br />
        Here is for you how it work
      </p>
    </section>
  );
};

export default LearningSection;

