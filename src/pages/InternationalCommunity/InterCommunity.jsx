import React from "react";
import intStudents1 from "../../assets/int_students_1.jpg";
import intStudents2 from "../../assets/int_students_2.jpg";

import { motion } from "framer-motion";

function InterCommunity() {
  return (
    <div className="flex flex-col items-center w-[100vw] px-4 mt-12">
      <h1 className="text-3xl text-black text-center w-full mt-16 mb-10 font-Itim">
        A Welcoming Community for International Students
      </h1>

      {/* First Section: Left Image and Text */}
      <div className="flex max-w-5xl w-full mb-8 font-Ubuntu">
        <motion.img
          initial={{ x: -460, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          src={intStudents1}
          alt="International students"
          className="w-1/3 mr-4 rounded-[20px] shadow-lg m-2"
        />

        <p className="text-left w-2/3 mt-2">
          IIT (ISM) Dhanbad is home to a vibrant and diverse international
          student community. With students from various countries enriching our
          academic landscape, we offer an inclusive campus culture that
          encourages intercultural dialogue and cooperation. Our support
          services for international students include comprehensive orientation
          programs, academic guidance, language support, and cultural immersion
          activities, ensuring that students feel welcomed and well-integrated.
        </p>
      </div>

      {/* Second Section: Right Image and New Text */}
      <div className="flex max-w-5xl w-full items-start font-Ubuntu">
        <p className="text-left w-2/3 mt-2">
          Our campus provides various clubs, events, and resources tailored to
          the needs of international students. From cultural festivals to
          academic seminars, students have ample opportunities to learn, grow,
          and connect with others. We strive to make the transition to life at
          IIT (ISM) Dhanbad as smooth and enjoyable as possible. Our campus
          provides various clubs, events, and resources tailored to the needs of
          international students. From cultural festivals to academic seminars,
          students have ample opportunities to learn, grow, and connect with
          others.
        </p>

        <motion.img
          initial={{ x: +460, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          src={intStudents2}
          alt="International students"
          className="w-1/3 mr-4 rounded-[20px] shadow-lg m-2"
        />
      </div>
{/* 
      <div className="flex max-w-5xl w-full mb-8">
        <motion.img
          initial={{ x: +1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1 }}
          src={intStudents1}
          alt="International students"
          className="w-1/3 mr-4 rounded-[20px] shadow-lg m-2"
        />

        <p className="text-left w-2/3 mt-2 ">
          IIT (ISM) Dhanbad is home to a vibrant and diverse international
          student community. With students from various countries enriching our
          academic landscape, we offer an inclusive campus culture that
          encourages intercultural dialogue and cooperation. Our support
          services for international students include comprehensive orientation
          programs, academic guidance, language support, and cultural immersion
          activities, ensuring that students feel welcomed and well-integrated.
        </p>
      </div>

      <div className="flex max-w-5xl w-full items-start">
        <p className="text-left w-2/3 mt-2">
          Our campus provides various clubs, events, and resources tailored to
          the needs of international students. From cultural festivals to
          academic seminars, students have ample opportunities to learn, grow,
          and connect with others. We strive to make the transition to life at
          IIT (ISM) Dhanbad as smooth and enjoyable as possible. Our campus
          provides various clubs, events, and resources tailored to the needs of
          international students. From cultural festivals to academic seminars,
          students have ample opportunities to learn, grow, and connect with
          others.
        </p>

        <img
          src={intStudents2}
          alt="International students"
          className="w-1/3 ml-4 rounded-[20px] shadow-lg m-2"
        />
      </div>

      <div className="flex max-w-5xl w-full mb-8">
        <motion.img
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, x: 0 }}
          onViewportLeave={() => console.log("left")}
          src={intStudents1}
          alt="International students"
          className="w-1/3 mr-4 rounded-[20px] shadow-lg m-2"
        />

        <p className="text-left w-2/3 mt-2">
          IIT (ISM) Dhanbad is home to a vibrant and diverse international
          student community. With students from various countries enriching our
          academic landscape, we offer an inclusive campus culture that
          encourages intercultural dialogue and cooperation. Our support
          services for international students include comprehensive orientation
          programs, academic guidance, language support, and cultural immersion
          activities, ensuring that students feel welcomed and well-integrated.
        </p>
      </div>

      <div className="flex max-w-5xl w-full items-start">
        <p className="text-left w-2/3 mt-2">
          Our campus provides various clubs, events, and resources tailored to
          the needs of international students. From cultural festivals to
          academic seminars, students have ample opportunities to learn, grow,
          and connect with others. We strive to make the transition to life at
          IIT (ISM) Dhanbad as smooth and enjoyable as possible. Our campus
          provides various clubs, events, and resources tailored to the needs of
          international students. From cultural festivals to academic seminars,
          students have ample opportunities to learn, grow, and connect with
          others.
        </p>

        <img
          src={intStudents2}
          alt="International students"
          className="w-1/3 ml-4 rounded-[20px] shadow-lg m-2"
        /> */}
      {/* </div> */}
    </div>
  );
}

export default InterCommunity;
