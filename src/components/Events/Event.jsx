import React, { useState } from 'react';
import Cards from './Cards';
import DaySelector from './DaySelector';
import { eventsOfDay1, eventsOfDay2 } from '../../../AllDetailsOfIndia';

function Event() {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <div className="mt-12 md:mt-16 flex flex-col items-center gap-7 px-4 w-full">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-Ubuntu font-bold text-blue-900">
          Event Schedule
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-Ubuntu font-bold text-black">
          Follow the Event Schedule
        </h1>
      </div>

      {/* Day Selector */}
      <div className="w-full flex justify-center">
        <DaySelector activeDay={selectedDay} setActiveDay={setSelectedDay} />
      </div>

      {/* Event Cards */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 w-full max-w-screen-lg">
        {selectedDay === 1 &&
          eventsOfDay1.map((event) => (
            <Cards
              key={event.id}
              src={event.src}
              title={event.title}
              location={event.location}
              time={event.time}
              rightContent={event?.rightContent}
            />
          ))}
        {selectedDay === 2 &&
          eventsOfDay2.map((event) => (
            <Cards
              key={event.id}
              src={event.src}
              title={event.title}
              location={event.location}
              time={event.time}
              rightContent={event?.rightContent}
            />
          ))}
      </div>
    </div>
  );
}

export default Event;
