import React from 'react';
import CampusMap from '../../assets/campus_map.jpg';

function Reach() {
  return (
    <div className="flex justify-center items-center w-full h-full  mt-12">
      <img src={CampusMap} alt="Campus Map" className="max-w-full max-h-full" />
    </div>
  );
}

export default Reach;
