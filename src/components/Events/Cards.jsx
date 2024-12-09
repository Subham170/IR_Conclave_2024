import React, { useState } from 'react';
import { FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { Dialog } from '@mui/material';

export default function Cards({ src, title, location, time, rightContent }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  return (
    <div
      className="relative w-[90vw] sm:w-[80vw] h-40 sm:h-44 md:h-52 rounded-[20px] overflow-hidden shadow-lg bg-cover bg-center text-white cursor-pointer hover:opacity-95 hover:scale-105 transition-all duration-300 hover:shadow-[0_3px_8px_rgba(0,0,0,0.8)]"
      style={{ backgroundImage: `url(${src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="absolute top-4 left-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{title}</h1>
        <div className="flex items-center mt-2 text-sm sm:text-lg md:text-xl opacity-80">
          <FaMapMarkerAlt className="mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex items-center mt-1 text-sm sm:text-lg md:text-xl opacity-80">
          <MdDateRange className="mr-2" />
          <span>{time}</span>
        </div>
      </div>

      {/* Right Content (Desktop) */}
      {rightContent && (
        <div className="hidden md:block absolute top-4 right-4 w-1/2 text-right">
          <h2 className="text-lg sm:text-xl font-medium">Chairperson:</h2>
          <p className="text-sm sm:text-md">
            {rightContent.chairperson.name} - {rightContent.chairperson.designation}
          </p>
          <h3 className="mt-2 text-lg sm:text-xl font-medium">Speakers:</h3>
          <ul className="text-sm sm:text-md opacity-80">
            {rightContent.speakers.map((speaker, index) => (
              <li key={index} className="mt-1">
                {speaker.name} - {speaker.designation}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Info Icon (Mobile) */}
      {rightContent && (
        <div className="md:hidden absolute bottom-4 right-4 text-white text-xl cursor-pointer">
          <FaInfoCircle onClick={handleDialogOpen} />
        </div>
      )}

      {/* Dialog Popup */}
      {rightContent && (
        <Dialog open={isDialogOpen} onClose={handleDialogClose} fullWidth>
          <div className="p-4 bg-white text-black rounded-lg">
            <h2 className="text-lg font-medium">Chairperson:</h2>
            <p className="text-sm">
              {rightContent.chairperson.name} - {rightContent.chairperson.designation}
            </p>
            <h3 className="mt-2 text-lg font-medium">Speakers:</h3>
            <ul className="text-sm">
              {rightContent.speakers.map((speaker, index) => (
                <li key={index} className="mt-1">
                  {speaker.name} - {speaker.designation}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleDialogClose}
            >
              Close
            </button>
          </div>
        </Dialog>
      )}
    </div>
  );
}
