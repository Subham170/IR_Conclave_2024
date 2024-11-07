import React, { useState } from 'react';
import ReactPlayer from 'react-player/vimeo'; // or use <video> tag for custom videos
import { Box, Typography } from '@mui/material';

const CampusTourSection = () => {

  const [isLoading, setIsLoading] = useState(true);
return (
  <Box sx={{textAlign: 'center', maxWidth: '800px', margin: '0 auto' , display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:"60px"}}>
    {/* Section Title */}
    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold',fontFamily: "Itim", fontSize: '3.5rem',textDecoration: 'underline' }}>
      Explore Our Campus
    </Typography>
    <div className='flex justify-around flex-row-reverse gap-20'>
   <div className="w-[27vw] h-[45vh]">
   {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="loader">Loading...</div> {/* Replace with a spinner if preferred */}
        </div>
      )}
    <ReactPlayer
      url="https://vimeo.com/1027003477"
      className="react-player"
      width="100%"
      height="110%"
      controls
      playing
      muted
      onReady={() => setIsLoading(false)}
    />
  </div>
    {/* Description */}
   <div className="w-[55vw] h-[300px]">
   <Typography variant="body1" sx={{ mt: 2 ,fontFamily:"Ubantu", fontSize: '1.5rem'}}>
      Take a virtual stroll around our campus and experience the vibrant student life, modern facilities, and green spaces.
      Here, you'll find everything from state-of-the-art research labs to our extensive library and serene gardens.
    </Typography>
    
    {/* Key Points */}
    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 3, fontFamily:"Itim",fontSize: '1.5rem'  }}>
      <Box sx={{borderRight: '1px solid #ccc', paddingRight: '20px'}}>
        <Typography sx={{
          fontFamily: "Ubantu",
          fontSize: '1.2rem'
        }} variant="h6">🏫 Library</Typography>
        <Typography variant="body2" sx={{
          fontFamily: "Ubantu",
          fontSize: '1rem'
        }}>Discover our vast collection of academic resources.</Typography>
      </Box>
      <Box sx={{borderRight: '1px solid #ccc', paddingRight: '20px'}}>
        <Typography sx={{
          fontFamily: "Ubantu",
          fontSize: '1.2rem'
        }} variant="h6">🏅 Sports Complex</Typography>
        <Typography  sx={{
          fontFamily: "Ubantu",
          fontSize: '1rem'
        }}
        variant="body2">Explore our sports facilities for fitness and fun.</Typography>
      </Box>
      <Box>
        <Typography sx={{
          fontFamily: "Ubantu",
          fontSize: '1.2rem'
        }} variant="h6">🏠 Hostels</Typography>
        <Typography sx={{
          fontFamily: "Ubantu",
          fontSize: '1rem'
        }}variant="body2">Comfortable and safe student accommodations.</Typography>
      </Box>
    </Box>
   </div>
    </div>
  </Box>
)
};

export default CampusTourSection;
