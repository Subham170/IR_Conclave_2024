// src/components/InternationalCommunity.js
import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/bg2.jpg";
import  Campus from "../../assets/int_students_1.jpg";
import diwali from "../../assets/int_students_2.jpg";
import Facilities from "../../assets/int_stu_4.jpg";
import dinner from "../../assets/dining-hall2.jpg";
const InternationalCommunity = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen p-6 sg:px-10  md:px-20 relative top-24">
      <div className="container mx-auto space-y-16">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 font-Ubuntu">International Community at ISM</h1>
          <p className="text-lg text-gray-600">A warm and inclusive environment for students from all over the world.</p>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <img src={Campus} alt="Campus" className="w-full md:w-2/5 h- rounded-lg shadow-xl" />
          <div>
            <h2 className="text-2xl font-semibold font-Ubuntu">Diverse and Inclusive Campus</h2>
            <p className="mt-4 text-gray-700 font-MavenPro">
            ISM is indeed a welcoming community for international students, and it takes pride in creating an inclusive, multicultural environment. Currently, the campus hosts 43 international students from diverse backgrounds, which adds to the cultural richness and vibrancy of the university. ISM is committed to ensuring these students feel at home, providing facilities and resources that cater to their academic and personal needs.
            </p>
          </div>
        </motion.div>

        {/* Facilities and Support Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div>
            <h2 className="text-2xl font-semibold font-Ubuntu">Facilities and Support</h2>
            <p className="mt-4 text-gray-700 font-MavenPro">
            ISM provides a range of facilities to make international students’ transition smooth and comfortable. The campus is well-equipped with modern amenities, including state-of-the-art libraries, labs, and recreational spaces that support both study and relaxation. Each international student is assigned a faculty advisor and a peer mentor, who guide them on academic matters and help them settle into campus life. Additionally, ISM’s dedicated international student support office assists with administrative tasks, like visa processing, accommodations, and medical insurance.
            </p>
          </div>
          <img src={Facilities} alt="Facilities" className="w-full md:w-2/5 rounded-lg shadow-xl" />
        </motion.div>

        {/* Celebration of Festivals Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold font-Ubuntu">Celebration of Festivals</h2>
          <p className="mt-4 text-gray-700 font-Ubuntu">
          To foster a sense of belonging, ISM celebrates major festivals from around the world. Diwali, for example, is celebrated on campus with great enthusiasm, creating an opportunity for international students to experience the joy and warmth of Indian culture. The celebration includes traditional lights, rangoli, music, dance, and food, allowing students to experience Diwali authentically. Other international festivals, such as Christmas, Eid, and Chinese New Year, are also celebrated. These events not only make students feel at home but also encourage cultural exchange among the student body, creating a bond of unity and mutual respect.
          </p>
          <img src={diwali} alt="Festival" className="w-full md:w-3/5 mx-auto mt-8 rounded-lg shadow-xl" />
        </motion.div>

        {/* Dining Options Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <img src={dinner} alt="Dining" className="w-full md:w-2/5 rounded-lg shadow-xl" />
          <div>
            <h2 className="text-2xl font-semibold font-Ubuntu">Mess and Dining Options</h2>
            <p className="mt-4 text-gray-700 font-MavenPro">
            Understanding the diverse dietary preferences of international students, ISM’s mess offers multiple food options, including vegetarian, non-vegetarian, and even vegan meals. There are also designated international menus on select days, incorporating popular dishes from various countries, which adds a touch of familiarity for international students. The dining staff is open to feedback and adjustments, making it easier for students to feel at home with food they enjoy and trust.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InternationalCommunity;
