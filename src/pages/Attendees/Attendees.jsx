import React from "react";
import ProfileCard from "../../components/Cards/Card";
import img from "../../assets/ISM_Director.png";
import { motion } from "framer-motion";

function Attendees() {
  const Data = [
    {
      id: 1,
      name: "Dr. Sukumar Mishra",
      img: img,
      destination: "Director, IIT(ISM) Dhanbad",
    },
    {
      id: 2,
      name: "Dr. Sukumar Mishra",
      img: img,
      destination: "Director, IIT(ISM) Dhanbad",
    },
    {
      id: 3,
      name: "Dr. Sukumar Mishra",
      img: img,
      destination: "Director, IIT(ISM) Dhanbad",
    },
  ];

  return (
    <div className="relative top-20 flex flex-col items-center mt-10 gap-16 px-4 w-full h-auto mb-32">
      {/* Header */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-xl md:text-2xl text-blue-900 font-Itim font-bold">
          Members
        </span>
        <h1 className="text-3xl md:text-5xl text-black font-Ubuntu font-bold">
          Panel Members
        </h1>
      </motion.div>

      {/* Profile Cards */}
      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-24 justify-items-center w-full px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {Data.map((data) => (
          <motion.div
            key={data.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ProfileCard
              name={data.name}
              destination={data.destination}
              img={data.img}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Attendees;
