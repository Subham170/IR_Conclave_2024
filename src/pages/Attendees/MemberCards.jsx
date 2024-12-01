import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import img from "../../assets/ISM_Director.png";
const members = [
  {
    id: 1,
    institute: "IIT Bombay",
    members: [
      {
        name: "Rebecca Jadin",
        designation: "Project Manager",
        email: "30005718@iitb.ac.in",
        officeContact: "9122260000",
        mobile: "9833161200",
        image: img,
      },
      {
        name: "Ms. Sangita Kanjibillya",
        designation: "Executive Officer",
        email: "Kanjibillya.s@iitb.ac",
        officeContact: "9122260000",
        mobile: "8709872120",
        image: img,
      },
    ],
  },
];

const MemberCards = () => {
  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {members.map((institute) =>
        institute.members.map((member, index) => (
          <motion.div
            key={`${institute.id}-${index}`}
            whileHover={{ scale: 1.05 }}
            className="shadow-lg"
          >
            <Card className="bg-blue-100">
              <CardMedia
                component="img"
                height="140"
                image={member.image}
                alt={`${member.name}'s image`}
              />
              <CardContent>
                <Typography variant="h6" className="font-bold">
                  {institute.institute}
                </Typography>
                <Typography variant="subtitle1">
                  {member.name} - {member.designation}
                </Typography>
                <Typography>Email: {member.email}</Typography>
                <Typography>Contact: {member.mobile}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default MemberCards;
