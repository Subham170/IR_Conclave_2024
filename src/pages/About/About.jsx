import React from 'react';
import IIT from '../../assets/IIT.jpg';
import campusTour from "../../assets/video/campus_tour.mp4";

function About() {
  return (
    <div className="relative flex flex-col items-center w-[100vw] h-[100vh] px-4 mt-28">
      <h1 className="text-3xl text-black text-center w-full mb-6 underline">About IIT (ISM) Dhanbad</h1>
      
      {/* Container for image and text */}
      <div className="flex w-full justify-center items-start">
        {/* Left-aligned image */}
        <img src={IIT} alt="IIT (ISM) Dhanbad" className="w-1/3 rounded-[20px] shadow-lg m-2" />

        {/* Right-aligned text */}
        <p className="w-[50vw] ml-4 text-left mt-6">
          Established in 1926, IIT (ISM) Dhanbad stands as a beacon of learning, innovation, and research. 
          As we approach our centenary year in 2026, we celebrate nearly a century of educational excellence, 
          impactful research, and international collaborations. Recognized for our cutting-edge programs in engineering, 
          applied sciences, management, and humanities, IIT (ISM) Dhanbad has nurtured leaders, innovators, and global thinkers. 
          Our strong commitment to fostering an inclusive and dynamic learning environment positions us as one of India’s premier institutions.
        </p>
      </div>

      {/* Video Player in the bottom right corner */}

      <div className="flex max-w-5xl w-full items-start font-Ubuntu">
        <p className="text-left w-2/3 mt-2">
          Our campus provides various clubs, events, and resources tailored to
          the needs of international students. From cultural festivals to
          academic seminars, students have ample opportunities to learn, grow,
          and connect with others. We strive to make the transition to life at
          IIT (ISM) Dhanbad as smooth and enjoyable as possible. Our campus
          provides various clubs, events, and resources tailored to the needs of
          international students. From cultural festivals to academic seminars,
          students have ample opportunities to learn, grow, and connect with
          others.
        </p>

        <div className="absolute bottom-10 right-10 w-[400px] h-[240px]">
        <video 
          autoPlay 
          loop 
          muted 
          controls 
          className="w-full h-full object-cover rounded-lg shadow-lg"
        > 
          <source src={campusTour} type="video/mp4" />
        </video>
      </div>
      </div>
      
    </div>
  );
}

export default About;
