import React from 'react';
import { HomeCarousel } from '../../components/HomeCarousel';
import Event from "../../components/Events/Event";
import CampusTourSection from '../../components/CampusTour';
import All_IITs from "../../assets/All_IITs.jpg";
import irLogo from "../../assets/ir_logo.jpg";
const Home = () => {
 
  

  return (
    <div className="relative  top-24 flex flex-col items-center mb-4">
      {/* Carousel Section */}
      <div className="w-full">
        <HomeCarousel />
      </div>

      {/* Main Text Section */}
      <div className="flex flex-col items-center justify-center text-center max-w-[1500px] p-4 md:pt-12 relative top-[80px] lg:top-[50px] mb-[40px]">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 font-semibold font-Itim text-[#8f1402]">
          Dec 12 - 13, IIT(ISM) Dhanbad, India
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-MavenPro text-black mb-2">
          All India International Relations Conclave
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-MavenPro text-black mb-2">
          2024
        </h2>
       <img src={irLogo} className='w-24 h-24 rounded-full md:w-40 md:h-40 sm:w-32 sm:h-32' /> 
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 font-bold font-Ubuntu">
          Study in India – A Pathway to Excellence
        </p>
      </div>

      {/* Additional Sections */}
      <div className="w-full px-4">
        <CampusTourSection />
      </div>

      <div className='w-[75vw] px-4 rounded-xl'>
        <img src={All_IITs} alt="" />
      </div>
      <div className="w-full px-4 my-8 mb-24">
        <Event />
      </div>
    </div>
  );
};

export default Home;
