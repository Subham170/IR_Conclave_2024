import React from "react";
import { motion } from "framer-motion";
import img from "../../../assets/IIT.jpg";
const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center"
    style={{ backgroundImage: `url(${img})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg max-w-3xl"
      >
        <h1 className="text-4xl font-bold mb-4">About IIT (ISM) Dhanbad</h1>
        <p className="text-lg">
          Discover the unique spirit and culture of IIT (ISM) Dhanbad - a blend
          of resilience, innovation, and tradition.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
