import React from 'react';
import { Fade, Tooltip, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import ism_map from "../../../assets/campus_map.jpg";

const CampusMapSection = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ism_map;
    link.download = 'IIT_Dhanbad_Campus_Map.jpg';
    link.click();
  };

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-center mb-4 text-blue-900">IIT Dhanbad Campus Map</h2>
      {/* <p className="text-center mb-6 text-gray-700">Hover over campus areas for more details.</p> */}
      <div className="relative flex flex-col items-center justify-center gap-4">
        {/* Wrap the img and download button with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}  // Initial position (hidden and below)
          animate={{ opacity: 1, y: 0 }}   // End position (fully visible and at normal position)
          exit={{ opacity: 0, y: 50 }}     // Exit position (hidden and below)
          transition={{ duration: 1 }}     // Transition duration
          className="relative"
        >
          <img
            src={ism_map}
            alt="IIT Dhanbad Campus Map"
            className="w-full max-w-xs md:max-w-2xl rounded-lg shadow-lg"
          />
          {/* Download Button */}
          <div className="absolute top-5 right-0 bg-black rounded-[10px]">
            <Tooltip title="Download Campus Map" arrow>
              <IconButton onClick={handleDownload} color="primary" className="bg-white shadow-md">
                <DownloadIcon fontSize="large" className="text-white" />
              </IconButton>
            </Tooltip>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusMapSection;
