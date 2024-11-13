import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import L from "leaflet";
import IIT_map from "../../assets/all_IITs_map.jpg";
import { iitLocations } from "../../../AllDetailsOfIndia";
import ConnectivityPage from "./components/ConnectivityPage";
import CampusMapSection from "./components/CampusMap";

const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const ReachUs = () => {
  const indiaCenterCoordinates = [20.5937, 78.9629];
  const text = "The Indian Institutes of Technology (IITs) are a network of engineering and technology institutions in India. Established in 1950, they are under the purview of the Ministry of Education of the Indian Government and are governed by the Institutes of Technology Act, 1961. The Act refers to them as Institutes of National Importance and lays down their powers, duties, and framework for governance as the country's premier institutions in the field of technology. 23 IITs currently fall under the tenor of this act. Each IIT operates autonomously and is linked to others through a common council called the IIT Council, which oversees their administration. The Minister of Education of India is the ex officio chairperson of the IIT Council. According to data obtained through Right to Information (RTI) applications, approximately 38% of Indian Institute of Technology (IIT) graduates from the class of 2024 have not secured job placements. This is the highest percentage in the past three years, with a steady increase from 19% in 2021 and 21% in 2022.";

  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index > text.length-2) {
        clearInterval(interval);
      }
    }, 5); // Adjust the speed (in ms) here
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts.
  

  return (
    <motion.div
      className="container mx-auto p-4 md:p-8 relative top-24 mb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Page Header */}
      <motion.h1
        className="text-2xl md:text-3xl font-bold text-center font-Ubuntu mb-8"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Reach Us - IIT Dhanbad
      </motion.h1>

      {/* Section 1: All IITs Map with Interactive Map */}
      <section className="mb-16">
        <motion.h2
          className="text-xl md:text-2xl font-semibold text-center mb-4"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          All IITs in India
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-6 items-center md:items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.div
            className="w-full md:w-2/3 px-4 md:px-12 py-4 font-Ubuntu text-sm md:text-base"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {displayedText}
          </motion.div>

          <motion.div
            className="w-full md:w-1/3 h-72 md:h-96 relative z-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <MapContainer
              center={indiaCenterCoordinates}
              zoom={4}
              className="w-full h-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {iitLocations.map((iit, index) => (
                <Marker key={index} position={iit.position} icon={markerIcon}>
                  <Popup>
                    <div className="flex items-center gap-4 justify-center">
                      <div className="w-2/3">
                        <strong className="font-bold">{iit.name}</strong>
                        <br />
                        <a
                          href={iit.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Website
                        </a>
                        <p className="font-Ubuntu text-sm">{iit.description}</p>
                      </div>
                      <div>
                        <img
                          src={iit.logo}
                          alt={`${iit.name} logo`}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-lg"
                        />
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
            <p className="text-center text-xs md:text-sm mt-2">
              *Hover over a marker to see the IIT location, click to get more info.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <CampusMapSection />
      <ConnectivityPage />
    </motion.div>
  );
};

export default ReachUs;
