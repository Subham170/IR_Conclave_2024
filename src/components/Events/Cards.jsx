import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';

export default function Cards({ src, title, location, time }) {
  return (
    <div className="relative w-[80vw] h-44 rounded-lg overflow-hidden shadow-lg bg-cover bg-center text-white cursor-pointer" style={{ backgroundImage: `url(${src})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Content */}
      <div className="absolute top-4 left-4 right-4">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <div className="flex items-center mt-2 text-xl opacity-80">
          <FaMapMarkerAlt className="mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex items-center mt-1 text-xl opacity-80">
          <MdDateRange className="mr-2" />
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
