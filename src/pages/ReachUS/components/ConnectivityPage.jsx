import React, { useState } from "react";
import ModalComponent from "../../../components/ModalComponents";
import roadway from "../../../assets/roadway.jpg";
import railway from "../../../assets/railway.jpg";
import airway from "../../../assets/airways.webp";
import { motion } from "framer-motion"; // Import motion from framer-motion

const ConnectivityPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const handleOpen = (title, content) => {
    setModalContent({ title, content });
    setOpenModal(true);
  };

  const handleClose = () => setOpenModal(false);

  return (
    <div className="p-8 text-gray-700">
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-5">
          How to Reach IIT Dhanbad
        </h2>
        <p className="text-lg text-center mb-8 text-gray-700">
          Dhanbad, being one of the largest cities of the East Indian state of
          Jharkhand, is well connected with the rest of the state and the rest
          of the country through Air, Rail, and Roads.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Animated Button for Airways */}
          <motion.button
            className="relative p-4 rounded-lg shadow-lg bg-cover bg-center flex items-center justify-center text-white font-semibold text-lg hover:opacity-90"
            style={{
              backgroundImage: `url(${airway})`,
              height: "200px",
            }}
            onClick={() =>
              handleOpen(
                "Airways",
                <ul className="list-disc ml-6">
                  <li>
                    <strong>Main Airport</strong>: Kazi Nazrul Islam Domestic
                    Airport in Andal, Durgapur, West Bengal, is the nearest
                    airport to Dhanbad (97 km away).
                  </li>
                  <li>
                    <strong>Other Options</strong>: Birsa Munda Airport in
                    Ranchi (140 km away) and Netaji Subhash Chandra Bose
                    International Airport in Kolkata (269 km away) also serve
                    Dhanbad.
                  </li>
                  <li>
                    <strong>From Ranchi</strong>: Travelers can take a train or
                    bus from Birsa Munda Airport to Dhanbad, with a travel time
                    of 4-5 hours.
                  </li>
                  <li>
                    <strong>From Kolkata</strong>: From Netaji Subhash Chandra
                    Bose Airport, take a shuttle to Howrah Railway Station (16.5
                    km away) and a train to Dhanbad, which also takes around 4-5
                    hours.
                  </li>
                </ul>
              )
            }
            initial={{ opacity: 0, scale: 0.8 }} // Initial state (invisible and smaller)
            whileInView={{ opacity: 1, scale: 1 }}   // Animate to visible and normal size
            transition={{ duration: 0.5 }}       // Transition duration
          >
            <div className="inset-0 bg-white w-[50%] h-[50%] bg-opacity-75 rounded-lg"></div>
            <span className="absolute z-1000 text-black">Airways</span>
          </motion.button>

          {/* Animated Button for Railways */}
          <motion.button
            className="relative p-4 rounded-lg shadow-lg bg-cover bg-center flex items-center justify-center text-white font-semibold text-lg hover:opacity-90"
            style={{
              backgroundImage: `url(${railway})`,
              height: "200px",
            }}
            onClick={() =>
              handleOpen(
                "Railways",
                <ul className="list-disc ml-6">
                  <li>
                    <strong>Proximity</strong>: Dhanbad Junction Railway Station
                    is located just 2.8 km from the IIT (ISM) Campus, making it
                    the nearest railway station.
                  </li>
                  <li>
                    <strong>Importance</strong>: It is the largest railway
                    station in the state, with a wide network of local and
                    long-distance trains connecting Dhanbad to other parts of
                    the country.
                  </li>
                  <li>
                    <strong>Transportation Options</strong>: Taxis are available
                    24/7 at the station, and visitors can also use online cab
                    services like Ola to reach the campus conveniently.
                  </li>
                  <li>
                    <strong>Travel Tip</strong>: Unacquainted visitors are
                    advised to book railway tickets well in advance, as soon as
                    they become available, to secure confirmed reservations.
                  </li>
                </ul>
              )
            }
            initial={{ opacity: 0, scale: 0.8 }} // Initial state (invisible and smaller)
            whileInView={{ opacity: 1, scale: 1 }}   // Animate to visible and normal size
            transition={{ duration: 0.5 }}       // Transition duration
          >
            <div className="inset-0 bg-white w-[50%] h-[50%] bg-opacity-75 rounded-lg"></div>
            <span className="absolute z-1000 text-black">Railways</span>
          </motion.button>

          {/* Animated Button for Roadways */}
          <motion.button
            className="relative p-4 rounded-lg shadow-lg bg-cover bg-center flex items-center justify-center text-white font-semibold text-lg hover:opacity-90"
            style={{
              backgroundImage: `url(${roadway})`,
              height: "200px",
            }}
            onClick={() =>
              handleOpen(
                "Roadways",
                <ul className="list-disc ml-6">
                  <li>
                    <strong>Road Network</strong>: Dhanbad, centrally located in
                    Jharkhand’s coal belt, has a strong road network connecting
                    it to major cities.
                  </li>
                  <li>
                    <strong>Main Highways</strong>: National Highway 18 and
                    National Highway 19 run through Dhanbad, linking it to
                    cities like Ranchi, Kolkata, Jamshedpur, and Bokaro.
                  </li>
                  <li>
                    <strong>Bus Services</strong>: Frequent buses are available
                    on these routes, with booking options on platforms like
                    redBus for convenient travel to and from Dhanbad.
                  </li>
                </ul>
              )
            }
            initial={{ opacity: 0, scale: 0.8 }} // Initial state (invisible and smaller)
            whileInView={{ opacity: 1, scale: 1 }}   // Animate to visible and normal size
            transition={{ duration: 0.5 }}       // Transition duration
          >
            <div className="inset-0 bg-white w-[50%] h-[50%] bg-opacity-75 rounded-lg"></div>
            <span className="absolute z-1000 text-black">Roadways</span>
          </motion.button>
        </div>
      </section>

      {/* Modal with animation */}
      <ModalComponent
        open={openModal}
        handleClose={handleClose}
        title={modalContent.title}
        content={modalContent.content}
        initial={{ opacity: 0,y:-100 }} // Start with modal invisible
        whileInView={{ opacity: 1,y:0 }} // Fade in when modal opens
        transition={{ duration: 0.5 }} // Duration of fade-in animation
      />
    </div>
  );
};

export default ConnectivityPage;
