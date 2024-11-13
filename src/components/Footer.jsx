import React from 'react';
import logo from '../assets/iriac.jpg'
import map from '../assets/image.png'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const Footer = () => {
    const footerURLs = [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'International Community', url: '/international-community' },
        { name: 'Reach Us', url: '/reach-us' },
        { name: 'Attendees', url: '/attendees' },
    ]
  return (
    <footer className="bg-[#741304] text-white py-8 px-4 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Organized By */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold mb-4">Organized By</h2>
          <img
            src={logo} 
            alt="IR Conclave 2023"
            className="w-48"
          />
        </div>
        
        {/* Event Details */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">Event Details</h2>
          <p className="text-black font-semibold">12 - 13 December 2024</p>
          <p className='text-black'>IIT (ISM) Dhanbad,<br /> India</p>
        </div>
        
        {/* Useful Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2">
           {footerURLs.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="flex items-center text-black hover:underline">
                <span className="mr-2"><OpenInNewIcon /></span>{link.name} 
              </a>
            </li>

           ))}
          </ul>
        </div>
        
        {/* Direction */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">Direction</h2>
        <a href='https://www.google.com/maps/place/Indian+Institute+of+Technology+(Indian+School+of+Mines),+Dhanbad/@23.8144169,86.4386741,17z/data=!3m1!4b1!4m6!3m5!1s0x39f6bc9fac678481:0x122cb1d133a89995!8m2!3d23.8144169!4d86.441249!16zL20vMDcxYzJ2?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D' 
        target='_blank' rel="noreferrer" 
        > <img src={map} alt="Direction" className="md:w-68" />
          </a>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-8 text-center border-t border-gray-600 bg-red-950 py-4 h-auto">
        <p className="text-sm">
          COPYRIGHT © 2024 IIT(ISM) DHANBAD INTERNATIONAL RELATIONS - DESIGNED & DEVELOPED BY <span className="font-bold">INTERNATIONAL RELATIONS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
