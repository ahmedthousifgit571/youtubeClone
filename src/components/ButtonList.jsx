import React from 'react';
import Button from './Button';
const ButtonList = () => {
  const categories = [
    "All",
    "Music",
    "Gaming",
    "Live",
    "Computer Programming",
    "Podcasts",
    "Comedy",
    "News",
    "Cooking",
    "Recently uploaded",
    "Watched",
    "New to you"
  ];

  return (
    <div className="w-full bg-white border-b border-gray-200">
    {/* Fixed container */}
    <div className="relative overflow-hidden">
      {/* Scrollable content inside fixed container */}
      <div className="flex py-3 px-4 w-[1000px] overflow-x-scroll hide-scrollbar">
        {categories.map((category, index) => (
          <div key={index} className="flex-shrink-0 mr-3">
            <Button text={category} active={index === 0} />
          </div>
        ))}
      </div>
      
      {/* Gradient fade effect on the right side */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </div>
    
    <style jsx>{`
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `}</style>
  </div>
  );
};

export default ButtonList;