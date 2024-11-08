import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import L from "leaflet";
import IIT_map from "../../assets/all_IITs_map.jpg";
import ism_map from "../../assets/campus_map.jpg";
// import IITs from './components/23IITs';
import { iitLocations } from "../../../AllDetailsOfIndia";
// Custom marker icon
const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const ReachUs = () => {
  // Coordinates for all IITs
  
  // Center coordinates for India
  const indiaCenterCoordinates = [20.5937, 78.9629];

  return (
    // <IITs />
    <div className="container mx-auto p-8 mt-20">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-center mb-8">
        Reach Us - IIT Dhanbad
      </h1>

      {/* Section 1: All IITs Map with Interactive Map */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-4">
          All IITs in India
        </h2>
      
        {/* Leaflet Map for all IITs in India */}

        <div className="w-full h-96 flex gap-10">
        <div className="w-3/4 px-12 py-4 font-Ubuntu">
        The Indian Institutes of Technology (IITs) are a network of engineering and technology institutions in India. Established in 1950, they are under the purview of the Ministry of Education of the Indian Government and are governed by the Institutes of Technology Act, 1961. The Act refers to them as Institutes of National Importance and lays down their powers, duties, and framework for governance as the country's premier institutions in the field of technology.23 IITs currently fall under the tenor of this act. Each IIT operates autonomously and is linked to others through a common council called the IIT Council, which oversees their administration. The Minister of Education of India is the ex officio chairperson of the IIT Council. According to data obtained thuough Right to Information (RTI) applications, approximately 38% of Indian Institute of Technology (IIT) graduates from the class of 2024 have not secured job placements. This is the highest percentage in the past three years, with a steady increase from 19% in 2021 and 21% in 2022.
        </div>
       <div>
       <MapContainer
          center={indiaCenterCoordinates}
          zoom={4}
          className="w-[30vw] h-96 relative -z-10"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Markers for each IIT */}
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
                    <p className="font-Ubuntu">{iit.description}</p>
                  </div>
                  <div>
                    <img
                      src={iit.logo}
                      alt={`${iit.name} logo`}
                      style={{ width: "100px", height: "100px", borderRadius: "20px" }}
                    />
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        <p className="text-center mb-6 text-sm">
          *Hover over a marker to see the IIT location, click to get more info.
        </p>
       </div>
        </div>
      </section>

      {/* Section 2: IIT Dhanbad Campus Map with Tooltip */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-4">
          IIT Dhanbad Campus Map
        </h2>
        <p className="text-center mb-6">
          Hover over campus areas for more details.
        </p>
        <div className="relative flex justify-center">
          <img
            src={ism_map}
            alt="IIT Dhanbad Campus Map"
            className="w-full max-w-2xl rounded shadow-lg"
            data-tip
            data-for="campusMapTooltip"
          />

          {/* Tooltip for specific campus locations */}
          <ReactTooltip
            id="campusMapTooltip"
            place="top"
            effect="solid"
            className="rounded shadow-lg"
          >
            <p>Hover over the map areas to view locations.</p>
            <ul className="list-disc list-inside text-sm">
              <li>
                <strong>SAC</strong>: Student Activity Center
              </li>
              <li>
                <strong>NLHC</strong>: New Lecture Hall Complex
              </li>
              <li>
                <strong>Sports Complex</strong>: Outdoor and indoor sports
                facilities
              </li>
              <li>
                <strong>Admin Block</strong>: Administrative offices
              </li>
            </ul>
          </ReactTooltip>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-4">
          How to Reach IIT Dhanbad
        </h2>
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <p>
            <strong>By Train:</strong> Dhanbad Junction (DHN) is the nearest
            railway station, located approximately 3 km from the IIT campus.
          </p>
          <p>
            <strong>By Air:</strong> The nearest airport is Birsa Munda Airport,
            Ranchi, about 150 km from Dhanbad. Taxis and buses are available
            from Ranchi to Dhanbad.
          </p>
          <p>
            <strong>By Road:</strong> Dhanbad is well-connected by road to major
            cities. Interstate buses and private vehicles are a convenient way
            to reach the campus.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReachUs;
