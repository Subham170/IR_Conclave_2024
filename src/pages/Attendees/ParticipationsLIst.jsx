import React from "react";
import { motion } from "framer-motion";
import { participants } from "../../../AllDetailsOfIndia";

  

const ParticipationsList = () => {
  return (
   <div>
   <h1 className="text-5xl font-bold text-black text-center" >Participants</h1>
     <div className="w-[90vw] md:w-[80vw] mx-auto px-4 py-8">
      {participants.map((participant, index) => (
        <motion.div
          key={participant.id}
          className="flex items-center gap-6 py-6 border-b border-blue-900"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay:  0.2, duration: 0.6, type: "spring" }}
        >
          {/* Participant Image */}
          <img
            src={participant.image}
            alt={participant.name}
            className="w-20 h-20 rounded-full border border-gray-300"
          />
          {/* Participant Details */}
          <div>
            <h2 className="text-3xl font-bold text-black">{participant.name}</h2>
            <p className="text-blue-900 text-sm">{participant.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
   </div>
  );
};

export default ParticipationsList;
