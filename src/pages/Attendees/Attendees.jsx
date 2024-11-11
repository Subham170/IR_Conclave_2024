import React from "react";
import ProfileCard from "../../components/Cards/Card";
import img from "../../assets/ISM_Director.png";

function Attendees() {
  const Data = [
    {
      id: 1,
      name: "Dr. Manoj Kumar",
      img: img,
      destination: "Director, IIT(ISM) Dhanbad",
    },
    {
      id: 2,
      name: "Dr. Manoj Kumar",
      img: img,
      destination: "Director, IIT(ISM) Dhanbad",
    },
    {
      id: 3,
      name: "Dr. Manoj Kumar",
      img: img,
      destination: "Director, IIT(ISM) Dhanbad",
    },
  ];

  return (
    <div className="relative top-20 flex flex-col items-center mt-10 gap-16 px-4 w-full h-auto mb-32">
      {/* Header */}
      <div className="text-center">
        <span className="text-xl md:text-2xl text-blue-900 font-Itim font-bold">
          Members
        </span>
        <h1 className="text-3xl md:text-5xl text-black font-Ubuntu font-bold">
          Panel Members
        </h1>
      </div>

      {/* Profile Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-24 justify-items-center w-full px-4">
        {Data.map((data) => (
          <ProfileCard
            key={data.id}
            name={data.name}
            destination={data.destination}
            img={data.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Attendees;
