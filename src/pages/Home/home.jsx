import React from 'react';
import bg1 from "../../assets/bg2.jpg";
import { HomeCarousel } from '../../components/HomeCarousel';
import Event from "../../components/Events/Event";
import CampusTourSection from '../../components/CampusTour';
const Home = () => {
  return (
    <div>
      <div className="relative flex flex-col justify-center items-center">
        <HomeCarousel />
        {/* Background Image */}
        {/* <img
          src={bg1}
          alt="Background Image"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-65 z-[-1]"
        /> */}
      </div>
      <div className="flex md:justify-center mt-28 md:mt-0 items-center w-full h-screen flex-col text-center px-4">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 font-semibold font-Itim text-[#8f1402]">
          Dec 11-12, IIT(ISM) Dhanbad, India
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-MavenPro text-black mb-2">
          All India International Relations Conclave
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-MavenPro text-black mb-2">
          2024
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 font-bold font-Ubuntu">
          Study in India – A Pathway to Excellence
        </p>
      </div>

      <CampusTourSection />
      <Event />
    </div>
  );
};

export default Home;
