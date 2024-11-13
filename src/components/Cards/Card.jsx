import React from 'react';
import img from "../../assets/ISM_Director.png";
const ProfileCard = ({name,destination,img}) => {
  return (
    <div className="flex cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-xl rounded-3xl">
      <div className="bg-blue-200 rounded-3xl shadow-md py-6 max-w-xs text-center w-[350px] h-[250px] border-gray-100 border-2 mx-auto ">
        <div className='relative bottom-24'>
        <div className="overflow-hidden rounded-[10%] w-[200px] h-[200px] mx-auto my-4 shadow-xl">
          <img
            src={img}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-500 text-lg">{destination}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
