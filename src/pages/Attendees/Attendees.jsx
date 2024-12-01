import React from "react";
import ProfileCard from "../../components/Cards/Card";
import ISM_Director from "../../assets/ISM_Director.png";
import Katja_Lasch from "../../assets/Katja-Lasch.jpg";
import Nitin_Seth from "../../assets/nitin-seth.jpg";
import Praveen_S from "../../assets/Praveen-S.jpg";
import Swadha_Rizvi from "../../assets/Swadha-Rizvi.jpg";
import VC_Srivastava from "../../assets/vc_srivastava.jpg";
import B_chandrashekhar from "../../assets/B_chandrashekhar.jpg";
import Anju_Ranjan from "../../assets/Anju-Ranjan.jpg";
import Tanmoy_Maity from "../../assets/Prof_Tanmoy_Maity.jpg";
import R_M_Bhattacharjee from "../../assets/R M Bhattacharjee.jpg";
import M_Sharma from "../../assets/M Sharma.jpeg";
import { motion } from "framer-motion";
import ParticipationsList from "./ParticipationsLIst";

function Attendees() {
  const Data = [
    {
      id: 1,
      name: "Dr. Sukumar Mishra",
      img: ISM_Director,
      designation: "Director, IIT(ISM) Dhanbad",
    },
    {
      id: 2,
      name: "Prof. R M Bhattacharjee",
      img: R_M_Bhattacharjee,
      designation: "Dean (International Relations & Alumni Affairs) , IIT(ISM) Dhanbad",
    },
    {
      id: 3,
      name: "Prof. Tanmoy Maity",
      img: Tanmoy_Maity,
      designation: "Associate Dean (International Relations & Alumni Affairs), IIT(ISM) Dhanbad",
    },
    {
      id: 4,
      name: "Dr. Katja Lasch",
      img: Katja_Lasch,
      designation: "Director (DAAD)",
    },
    {
      id: 5,
      name: "Mr. B. Chandrashekhar",
      img: B_chandrashekhar,
      designation: "Executive Director, Educational Consultants India Limited",
    },
    {
      id: 6,
      name: "Smt. Anju Ranjan",
      img: Anju_Ranjan,
      designation: "Deputy Director General ICCR (Culture) ",
    },
    {
      id: 7,
      name: "Dr. Nitin Seth ",
      img: Nitin_Seth,
      designation: "Director, CEFIPRA (Indo-French)",
    },
    {
      id: 8,
      name: "Dr. Praveen S ",
      img: Praveen_S,
      designation: "Head International Cooperation (DST)",
    },
    {
      id: 9,
      name: "Ms. Swadha Rizwi",
      img: Swadha_Rizvi,
      designation: "Regional Director, Indian Council for Cultural Relations",
    },
    // {
    //   id: 10,
    //   name: "Dr. Sukumar Mishra",
    //   img: ISM_Director,
    //   designation: "Director, IIT(ISM) Dhanbad",
    // },
    // {
    //   id: 3,
    //   name: "Dr. Sukumar Mishra",
    //   img: ISM_Director,
    //   designation: "Director, IIT(ISM) Dhanbad",
    // },
    // {
    //   id: 3,
    //   name: "Dr. Sukumar Mishra",
    //   img: ISM_Director,
    //   designation: "Director, IIT(ISM) Dhanbad",
    // },
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
              designation={data.designation}
              img={data.img}
            />
          </motion.div>
        ))}
      </motion.div>
      <ParticipationsList />
    </div>
  );
}

export default Attendees;
