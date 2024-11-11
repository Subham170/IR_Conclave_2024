import React from 'react';
import { motion } from 'framer-motion';

const AboutDhanbad = () => {
  const content = [
    { id: 1,
      title: "Coal Capital of India",
      description: `Famous as the "Coal Capital of India," Dhanbad is a prominent city in eastern Jharkhand. It is the second largest industrial city in the state, home to India's largest coal mine, with over 100 operational mines and numerous coal washeries.`,
      image: "/path-to-image1.jpg",
    },
    { id: 2,
      title: "Industrial Significance",
      description: `Dhanbad hosts several major companies like Tata Steel, Eastern Coalfields Limited, and Bharat Coking Coal Limited. It's a hub for coal production, processing, and power generation plants that drive its industrial importance.`,
      image: "/path-to-image2.jpg",
    },
    { id: 3,
      title: "Transportation Hub",
      description: `The Dhanbad Rail Division ranks second in revenue generation among Indian Railway divisions, underscoring its importance in transportation. Known for its industrial sector, Dhanbad is one of India’s busiest commercial hubs.`,
      image: "/path-to-image3.jpg",
    },
    { id: 4,
      title: "Academic Excellence",
      description: `Dhanbad is home to the Indian Institute of Technology (IIT) ISM Dhanbad, enhancing its reputation as a center of excellence in mining, engineering, and research.`,
      image: "/path-to-image4.jpg",
    },
    { id: 5,
      title: "Natural Attractions",
      description: `Surrounded by stunning natural attractions like Maithon Dam, Panchet Dam, and Topchanchi Lake, Dhanbad offers serene landscapes, boating, and picnic areas, providing a refreshing escape from city life.`,
      image: "/path-to-image5.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 md:px-12 lg:px-20 relative top-24 mb-32 font-Ubuntu">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">About Dhanbad</h1>
      
      <div className="grid gap-8 md:gap-12 lg:gap-16">
        {content.map((section, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center md:justify-start"
            // initial={{ opacity: 0, y: 200 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // // viewport={{ once: true }} // This ensures it only animates once
            // transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {section.id % 2 !== 0 ? (
              <>
                <motion.img
                  src={section.image}
                  alt={section.title}
                  className="w-full md:w-1/3 h-48 object-cover rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }} // This ensures it only animates once
            transition={{ duration: 0.5, delay: index * 0.2 }}
                />
                
                <motion.div className="md:w-2/3 text-center md:text-left space-y-4" 
                initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }} // This ensures it only animates once
            transition={{ duration: 0.5, delay: index * 0.2 }}>
                  <h2 className="text-xl md:text-2xl font-semibold">{section.title}</h2>
                  <p className="text-sm md:text-base text-gray-700">{section.description}</p>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }} // This ensures it only animates once
            transition={{ duration: 0.5, delay: index * 0.2 }} className="md:w-2/3 text-center md:text-left space-y-4">
                  <h2 className="text-xl md:text-2xl font-semibold">{section.title}</h2>
                  <p className="text-sm md:text-base text-gray-700">{section.description}</p>
                </motion.div>
                <motion.img
                  src={section.image}
                  alt={section.title}
                  className="w-full md:w-1/3 h-48 object-cover rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }} // This ensures it only animates once
            transition={{ duration: 0.5, delay: index * 0.2 }}
                />
              </>
            )}
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="mt-12 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        // viewport={{ once: true }} // This ensures it only animates once
        transition={{ duration: 0.8, delay: content.length * 0.2 }}
      >
        <p className="text-base md:text-lg text-gray-800">
          Dhanbad is a city that seamlessly integrates industrial strength, natural beauty, and academic distinction. Its coal-driven economy, rich cultural heritage, and stunning landscapes create a dynamic environment of resilience, promise, and limitless potential.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutDhanbad;
