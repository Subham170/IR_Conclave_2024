import React from 'react';
import IIT from '../../assets/IIT.jpg';
import { motion } from "framer-motion";

function About() {
  return (
    <div className="relative flex flex-col items-center w-[100vw] h-[100vh] px-4 mt-28">
      <h1 className="text-3xl text-black text-center w-full mb-6 underline">About IIT (ISM) Dhanbad</h1>
      
      {/* Container for image and text */}
      <div className="flex w-full justify-center items-start">
        {/* Left-aligned image */}
        <motion.img 
          initial={{ x: -500, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.7 }} 
          src={IIT} 
          alt="IIT (ISM) Dhanbad" 
          className="w-1/3 rounded-[20px] shadow-lg m-2" 
        />

        {/* Right-aligned text */}
        <p className="w-[50vw] ml-4 text-left mt-6">
          Established in 1926, IIT (ISM) Dhanbad stands as a beacon of learning, innovation, and research. 
          As we approach our centenary year in 2026, we celebrate nearly a century of educational excellence, 
          impactful research, and international collaborations. Recognized for our cutting-edge programs in engineering, 
          applied sciences, management, and humanities, IIT (ISM) Dhanbad has nurtured leaders, innovators, and global thinkers. 
          Our strong commitment to fostering an inclusive and dynamic learning environment positions us as one of India’s premier institutions.
        </p>
      </div>
    </div>
  );
}

export default About;
