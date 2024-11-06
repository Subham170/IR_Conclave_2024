import React, { useState } from 'react';

export default function DaySelector({ activeDay, setActiveDay }) {
  // const [activeDay, setActiveDay] = useState(1);

  return (
    <div className="flex">
      {/* Day 1 Button */}
      <button
        onClick={() => setActiveDay(1)}
        className={`flex flex-col items-center justify-center w-60 h-24 font-bold ${
          activeDay === 1 ? 'bg-blue-900 text-white hover:bg-blue-950' : 'bg-gray-100 text-black hover:bg-gray-200'
        } relative`}
      >
        <span>Day 1</span>
        <span className="text-sm">12 December 2024</span>
        {activeDay === 1 && (
          <div className="absolute bottom-[-8px] w-6 h-6 bg-blue-900 z-[-1] transform rotate-45"></div>
        )}
      </button>

      {/* Day 2 Button */}
      <button
        onClick={() => setActiveDay(2)}
        className={`flex flex-col items-center justify-center w-60 h-24 font-bold ${
          activeDay === 2 ? 'bg-blue-900 text-white hover:bg-blue-950' : 'bg-gray-100 text-black hover:bg-gray-200'
        } relative`}
      >
        <span>Day 2</span>
        <span className="text-sm">13 December 2024</span>
        {activeDay === 2 && (
          <div className="absolute bottom-[-8px] w-6 h-6 bg-blue-900 z-[-1] transform rotate-45"></div>
        )}
      </button>
    </div>
  );
}
