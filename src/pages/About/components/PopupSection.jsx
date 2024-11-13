import React, { useState } from "react";
import { Modal, Button } from "@mui/material";
import { motion } from "framer-motion";

const PopupSection = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", text: "" });

  const handleOpen = (title, text) => {
    setModalContent({ title, text });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const popupData = [
    {
      title: "Learn about ISM's Jugaad Culture",
      text: "The spirit of Jugaad teaches students to find creative solutions...",
    },
    {
      title: "Explore ISM's Cultural Festivals",
      text: "Srijan and Concetto, ISM’s most vibrant festivals, showcase...",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">More about IIT (ISM)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {popupData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-200 rounded-lg p-6 shadow-lg"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpen(item.title, item.text)}
            >
              {item.title}
            </Button>
          </motion.div>
        ))}
      </div>

      <Modal open={open} onClose={handleClose}>
        <div className="p-8 bg-white rounded-lg shadow-lg max-w-lg mx-auto mt-16">
          <h3 className="text-2xl font-bold mb-4">{modalContent.title}</h3>
          <p>{modalContent.text}</p>
          <Button onClick={handleClose} className="mt-4">
            Close
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default PopupSection;
