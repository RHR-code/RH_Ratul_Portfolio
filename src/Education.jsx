import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaUniversity,
  FaCheckCircle,
} from "react-icons/fa";

// Framer Motion Variants for Staggered Entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Increased stagger time for a clearer sequence
      delayChildren: 0.2, // Small delay before the first item starts
    },
  },
};

const itemVariants = {
  hidden: { x: -70, opacity: 0 }, // Starts further left
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80, // Slightly softer spring for a gentle stop
      duration: 0.7,
    },
  },
};

const Education = () => {
  const educationTimeline = [
    {
      title: "Complete Web Development Course",
      institution: "Programming Hero",
      date: "2025",
      description:
        "Intensive training covering MERN stack, including React, Node.js, Express.js, and MongoDB.",
      icon: FaCode,
      color: "text-red-500",
      complete: true,
    },
    {
      title: "Bachelor of Business Administration (BBA)",
      institution: "Management",
      date: "2022 - 2023 (Ongoing)",
      description: "Developing strategic management and business knowledge.",
      icon: FaUniversity,
      color: "text-indigo-500",
      complete: false,
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "business Group",
      date: "2022",
      description:
        "Completed secondary education focusing on business subjects.",
      icon: FaGraduationCap,
      color: "text-teal-500",
      complete: true,
    },
  ];

  return (
    <div
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-5 md:px-0"
    >
      {/* --- Section Header --- */}
      <motion.h1
        className="text-5xl font-extrabold mb-16 text-center text-red-600 dark:text-red-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        📚 My Education
      </motion.h1>

      <motion.ul
        className="timeline timeline-vertical timeline-alternate max-w-4xl mx-auto space-y-12 md:space-y-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {educationTimeline.map((item, index) => (
          <motion.li key={index} variants={itemVariants}>
            <div
              className={`timeline-${
                index % 2 === 0 ? "start" : "end"
              } timeline-box 
                         bg-white dark:bg-gray-800 shadow-xl p-6 rounded-lg 
                         border-t-4 border-red-500 w-full md:w-auto`}
            >
              <h3 className="md:text-xl font-bold mb-1 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className={`text-sm font-semibold mb-2 ${item.color}`}>
                {item.institution}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>

            <div className="timeline-middle md:mx-5">
              <item.icon
                className={`h-8 w-8 p-1 rounded-full ${item.color} bg-${
                  item.color.split("-")[1]
                }-100 dark:bg-gray-700`}
              />
            </div>

            <div
              className={`timeline-${
                index % 2 === 0 ? "end" : "start"
              } text-lg font-medium py-1 
                         text-gray-700 dark:text-gray-300 w-full md:w-auto`}
            >
              {item.date}
              {item.complete && (
                <FaCheckCircle className="inline ml-2 text-green-500" />
              )}
            </div>

            {/* Horizontal Line Connector */}
            {index < educationTimeline.length - 1 && <hr />}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Education;
