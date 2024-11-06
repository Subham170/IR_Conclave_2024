import React from 'react';
import CampusMap from '../../assets/campus_map.jpg';
import IITMap from '../../assets/all_IITs_map.jpg';

import { motion } from 'framer-motion';

function Reach() {
  return (
    <div className="flex justify-center items-center w-full h-full mt-28 flex-col">
      <h1 className="text-3xl text-black text-center w-full mb-10 underline">Reach Us</h1>
      <a href="https://www.google.com/maps/place/Indian+Institute+of+Technology+(Indian+School+of+Mines),+Dhanbad/@23.8144044,86.4358199,16.84z/data=!4m14!1m7!3m6!1s0x39f6bc9fac678481:0x122cb1d133a89995!2sIndian+Institute+of+Technology+(Indian+School+of+Mines),+Dhanbad!8m2!3d23.8144169!4d86.441249!16zL20vMDcxYzJ2!3m5!1s0x39f6bc9fac678481:0x122cb1d133a89995!8m2!3d23.8144169!4d86.441249!16zL20vMDcxYzJ2?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D" 
         target="_blank" 
         rel="noopener noreferrer">
        <motion.img whileHover={{ scale: 1.2 }} src={IITMap} alt="IIT Map" className="mt-4 max-w-full max-h-full" />
      </a>
      <h1 className="text-3xl text-black text-center w-full mt-20 mb-2">Our Campus Map</h1>
      <motion.img whileHover={{ scale: 1.1 }} src={CampusMap} alt="Campus Map" className="w-3/4 max-w-xxl max-h-xl" />
    </div>
  );
}

export default Reach;
