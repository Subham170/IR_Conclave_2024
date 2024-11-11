import React, { useState } from 'react';
import ReactPlayer from 'react-player/vimeo';
import { Box, Typography } from '@mui/material';
import { Loader, Loader2 } from 'lucide-react';

const CampusTourSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box
      sx={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: { xs: '1rem', sm: '2rem' },
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          fontFamily: 'Itim',
          fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
          textDecoration: 'underline',
        }}
      >
        Explore Our Campus
      </Typography>

      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-around gap-8 md:gap-20">
        {/* Video */}
        <div className="relative w-full md:w-[27vw] h-[200px] sm:h-[300px] md:h-[45vh]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <div className="loader">Loading...</div> 
              <Loader2 /> {/* Replace with a spinner if preferred */}
            </div>
          )}
          <ReactPlayer
            url="https://vimeo.com/1027003477"
            className="react-player"
            width="100%"
            height="100%"
            controls
            playing
            muted
            onReady={() => setIsLoading(false)}
          />
        </div>

        {/* Description */}
        <div className="w-full md:w-[55vw] h-auto md:h-[300px] text-left">
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontFamily: 'Ubuntu',
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Take a virtual stroll around our campus and experience the vibrant student life, modern facilities, and
            green spaces. Here, you'll find everything from state-of-the-art research labs to our extensive library and
            serene gardens.
          </Typography>

          {/* Key Points */}
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 2, md: 3 },
              fontFamily: 'Itim',
              fontSize: { xs: '1rem', sm: '1.2rem' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {/* Library */}
            <Box
              sx={{
                borderRight: { xs: 'none', sm: '1px solid #ccc' },
                paddingRight: { sm: '20px' },
                mb: { xs: 2, sm: 0 },
              }}
            >
              <Typography variant="h6" sx={{ fontFamily: 'Ubuntu', fontSize: '1.2rem' }}>
                🏫 Library
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Ubuntu', fontSize: '1rem' }}>
                Discover our vast collection of academic resources.
              </Typography>
            </Box>

            {/* Sports Complex */}
            <Box
              sx={{
                borderRight: { xs: 'none', sm: '1px solid #ccc' },
                paddingRight: { sm: '20px' },
                mb: { xs: 2, sm: 0 },
              }}
            >
              <Typography variant="h6" sx={{ fontFamily: 'Ubuntu', fontSize: '1.2rem' }}>
                🏅 Sports Complex
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Ubuntu', fontSize: '1rem' }}>
                Explore our sports facilities for fitness and fun.
              </Typography>
            </Box>

            {/* Hostels */}
            <Box>
              <Typography variant="h6" sx={{ fontFamily: 'Ubuntu', fontSize: '1.2rem' }}>
                🏠 Hostels
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Ubuntu', fontSize: '1rem' }}>
                Comfortable and safe student accommodations.
              </Typography>
            </Box>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default CampusTourSection;
