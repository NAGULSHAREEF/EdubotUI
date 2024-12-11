import React, { useState } from 'react';

interface VideoSectionProps {
  youtubeUrl: string;
}

const HeroSection: React.FC<VideoSectionProps> = ({ youtubeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleGlimpseClick = () => {
    window.open(youtubeUrl, '_blank');
  };

  return (
    <div className="w-full min-h-screen bg-[url('./src/assets/aboutusbg.png')] bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12 px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#17174D]">
            Where Learning Meets Boundless Possibilities.
          </h1>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl w-full max-w-2xl mb-8">
          <video 
            className="w-full aspect-video object-cover rounded-2xl"
            poster="https://i.imgur.com/7VcFLtQ.jpg"
            controls={isPlaying}
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {!isPlaying && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-2xl">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
              >
                <svg 
                  className="w-8 h-8 text-[#17174D] ml-1" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          )}
        </div>

        <div className="text-center w-full">
          <button
            onClick={handleGlimpseClick}
            className="group relative inline-flex items-center px-6 py-2.5 bg-[#F2B331] hover:bg-[#F2B331]/90 text-black text-sm font-medium rounded-full transition-all duration-300 hover:scale-105"
          >
            <span>Catch a glimpse of the impact we've made!</span>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {youtubeUrl}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

 