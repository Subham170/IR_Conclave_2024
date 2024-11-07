import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import L from 'leaflet';
import IIT_map from '../../assets/all_IITs_map.jpg';
import ism_map from '../../assets/campus_map.jpg';
// Custom marker icon
const markerIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const ReachUs = () => {
  // Coordinates for all IITs
  const iitLocations = [
    { name: 'IIT Dhanbad', position: [23.8144, 86.4412], website: 'https://www.iitism.ac.in/' },
    { name: 'IIT Delhi', position: [28.5450, 77.1926], website: 'https://home.iitd.ac.in/' },
    { name: 'IIT Bombay', position: [19.1334, 72.9133], website: 'https://www.iitb.ac.in/' },
    { name: 'IIT Kanpur', position: [26.5123, 80.2329], website: 'https://www.iitk.ac.in/' },
    { name: 'IIT Kharagpur', position: [22.3149, 87.3105], website: 'https://www.iitkgp.ac.in/' },
    { name: 'IIT Madras', position: [12.9916, 80.2336], website: 'https://www.iitm.ac.in/' },
    { name: 'IIT Roorkee', position: [29.8644, 77.8964], website: 'https://www.iitr.ac.in/' },
    { name: 'IIT Guwahati', position: [26.1878, 91.6916], website: 'https://www.iitg.ac.in/' },
    { name: 'IIT Ropar', position: [30.9685, 76.5231], website: 'https://www.iitrpr.ac.in/' },
    { name: 'IIT Bhubaneswar', position: [20.1470, 85.6718], website: 'https://www.iitbbs.ac.in/' },
    { name: 'IIT Gandhinagar', position: [23.2187, 72.6835], website: 'https://www.iitgn.ac.in/' },
    { name: 'IIT Hyderabad', position: [17.5973, 78.1235], website: 'https://www.iith.ac.in/' },
    { name: 'IIT Jodhpur', position: [26.3572, 73.1115], website: 'https://www.iitj.ac.in/' },
    { name: 'IIT Patna', position: [25.5370, 84.8514], website: 'https://www.iitp.ac.in/' },
    { name: 'IIT Indore', position: [22.5217, 75.9216], website: 'https://www.iiti.ac.in/' },
    { name: 'IIT Mandi', position: [31.7754, 76.9861], website: 'https://www.iitmandi.ac.in/' },
    { name: 'IIT Tirupati', position: [13.6288, 79.4192], website: 'https://www.iittp.ac.in/' },
    { name: 'IIT Palakkad', position: [10.8505, 76.6585], website: 'https://www.iitpkd.ac.in/' },
    { name: 'IIT Bhilai', position: [21.1947, 81.3004], website: 'https://www.iitbhilai.ac.in/' },
    { name: 'IIT Goa', position: [15.4363, 73.8795], website: 'https://www.iitgoa.ac.in/' },
    { name: 'IIT Jammu', position: [32.7332, 74.8643], website: 'https://www.iitjammu.ac.in/' },
    { name: 'IIT Dharwad', position: [15.4915, 74.9643], website: 'https://www.iitdh.ac.in/' },
  ];

  // Center coordinates for India
  const indiaCenterCoordinates = [20.5937, 78.9629];

  return (
    // <IITMap />
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
        <p className="text-center mb-6">
          Hover over a marker to see the IIT location, click to get more info.
        </p>
        
        {/* Leaflet Map for all IITs in India */}
        <MapContainer center={indiaCenterCoordinates} zoom={5} className="w-full h-96 rounded shadow-lg">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Markers for each IIT */}
          {iitLocations.map((iit, index) => (
            <Marker key={index} position={iit.position} icon={markerIcon}>
              <Popup>
                <strong>{iit.name}</strong><br />
                <a href={iit.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
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
          <ReactTooltip id="campusMapTooltip" place="top" effect="solid" className="rounded shadow-lg">
            <p>Hover over the map areas to view locations.</p>
            <ul className="list-disc list-inside text-sm">
              <li><strong>SAC</strong>: Student Activity Center</li>
              <li><strong>NLHC</strong>: New Lecture Hall Complex</li>
              <li><strong>Sports Complex</strong>: Outdoor and indoor sports facilities</li>
              <li><strong>Admin Block</strong>: Administrative offices</li>
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
            <strong>By Train:</strong> Dhanbad Junction (DHN) is the nearest railway station,
            located approximately 3 km from the IIT campus.
          </p>
          <p>
            <strong>By Air:</strong> The nearest airport is Birsa Munda Airport, Ranchi,
            about 150 km from Dhanbad. Taxis and buses are available from Ranchi to Dhanbad.
          </p>
          <p>
            <strong>By Road:</strong> Dhanbad is well-connected by road to major cities.
            Interstate buses and private vehicles are a convenient way to reach the campus.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReachUs;
