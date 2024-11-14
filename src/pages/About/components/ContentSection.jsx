import React from "react";
import { motion } from "framer-motion";
import img from "../../../assets/bg2.jpg";
import resilience from "../../../assets/resilience.jpg";
import mentorship from "../../../assets/mentorship.png";
import festival from "../../../assets/festive.jpg";
import alumni from "../../../assets/alumni-connect.jpeg";
const contentData = [
  {
    title: "Spirit of Resilience and Adaptability",
    text: "IIT (ISM) Dhanbad has a spirit and culture that truly sets it apart. While the institute is known for its mining heritage and engineering rigor, life at ISM is defined by much more than academic pursuits. The journey here is as much about personal evolution as it is about intellectual growth.One of the core aspects that shape ISM students is the need to adapt, innovate, and make the most of what’s available. Unlike some other IITs that have resources readily accessible, ISM students often encounter limited resources. This reality encourages a unique resourcefulness among students, pushing them to think creatively, whether it’s about finding solutions to technical problems or organizing an event on campus. This makes ISM students well-versed in 'jugaad,' the Indian art of finding a quick and efficient fix with what’s available. It’s not about shortcuts, but about developing an attitude that says, “I’ll find a way, no matter what.”",
    imageUrl: resilience,
  },
  {
    title: "Sense of Community and Mentorship",
    text: "The sense of community at ISM is also strong, fostered by its relatively isolated location in Dhanbad, where students build deep connections within and across batches. Living together in the campus's cozy hostels, with limited distractions, encourages ISMites to form bonds that often last a lifetime. Here, seniors are known to be mentors to juniors in a true sense. The “ISM Culture” is a special value; seniors offer guidance on everything from navigating academics to preparing for internships and placements. This kind of close-knit environment builds a support system that isn’t easily replicated elsewhere.",
    imageUrl: mentorship,
  },
  {
    title: "Celebration of Traditions",
    text: "One unique cultural aspect at ISM is the pride in traditions. Annual festivals like Srijan and Concetto are vibrant expressions of talent and creativity. These events, organized entirely by students, bring the campus to life and are a reminder of the joy and unity that characterizes ISM. The sheer variety of clubs and societies—from technical societies like RoboISM to cultural ones like Art Freaks (fine arts) and ADC (the dramatics club)—reflects the depth and diversity of interests that thrive here.",
    imageUrl: festival,
  },
  {
    title: "Historical Legacy and Alumni Network",
    text: "ISM also has a rich history. Established in 1926, it has a heritage that dates back nearly a century. The alumni network is vast and influential, stretching across sectors like mining, IT, consulting, finance, and more. The alumni often come back to guide and mentor current students, adding another layer of support. The legacy of resilience and hard work, especially due to ISM's roots in mining engineering, has led many students to develop a strong work ethic and determination. ",
    imageUrl: alumni,
  },
];

const ContentSection = () => {
  return (
    <section className="py-10 px-6 max-w-5xl mx-auto">
      {contentData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col md:flex-row items-center"
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full md:w-1/4 rounded-lg shadow-lg mb-6 md:mb-0"
          />
          <div className="md:ml-8 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className=" text-left">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default ContentSection;
