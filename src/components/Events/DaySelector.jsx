import React from 'react';

export default function DaySelector({ activeDay, setActiveDay }) {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Day 1 Button */}
      <button
        onClick={() => setActiveDay(1)}
        className={`flex flex-col items-center justify-center w-32 h-20 md:w-60 md:h-24 font-bold rounded-lg transition-colors duration-300 ${
          activeDay === 1
            ? 'bg-blue-900 text-white hover:bg-blue-950'
            : 'bg-gray-100 text-black hover:bg-gray-200'
        } relative`}
      >
        <span className="text-base md:text-lg">Day 1</span>
        <span className="text-xs md:text-sm">12 December 2024</span>
        {activeDay === 1 && (
          <div className="absolute bottom-[-6px] w-4 h-4 md:w-6 md:h-6 bg-blue-900 z-[-1] transform rotate-45"></div>
        )}
      </button>

      {/* Day 2 Button */}
      <button
        onClick={() => setActiveDay(2)}
        className={`flex flex-col items-center justify-center w-32 h-20 md:w-60 md:h-24 font-bold rounded-lg transition-colors duration-300 ${
          activeDay === 2
            ? 'bg-blue-900 text-white hover:bg-blue-950'
            : 'bg-gray-100 text-black hover:bg-gray-200'
        } relative`}
      >
        <span className="text-base md:text-lg">Day 2</span>
        <span className="text-xs md:text-sm">13 December 2024</span>
        {activeDay === 2 && (
          <div className="absolute bottom-[-6px] w-4 h-4 md:w-6 md:h-6 bg-blue-900 z-[-1] transform rotate-45"></div>
        )}
      </button>
    </div>
  );
}
