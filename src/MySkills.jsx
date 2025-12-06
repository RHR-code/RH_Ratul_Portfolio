import React from "react";
import { motion } from "framer-motion";
// Import specific icons for each skill
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5, // HTML Icon
  FaCss3Alt, // CSS Icon
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

// Animation variants for the container (staggering children)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the appearance of each skill card
    },
  },
};

// Animation variants for individual skill cards
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const MySkills = () => {
  // Define your skills with icons, names, and a description if needed
  const skills = [
    // --- NEWLY ADDED SKILLS ---
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    // -------------------------
    {
      name: "JavaScript",
      icon: FaJs,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      name: "React",
      icon: FaReact,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "text-white",
      bgColor: "bg-gray-50",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      name: "Tailwind CSS",
      icon: FaCss3Alt,
      color: "text-teal-500",
      bgColor: "bg-teal-50",
    },
  ];

  return (
    <div
      id="skills"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8 sm:p-12"
    >
      <motion.h1
        className="text-5xl font-bold my-10 text-center text-red-500 dark:text-red-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h1>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8" // Adjusted grid for better flow with 8 items
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-lg
                        ${skill.bgColor} dark:bg-gray-800 border-b-4 border-red-500
                        transition duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer`}
            whileHover={{ scale: 1.05 }} // Slight pop on hover
          >
            <skill.icon className={`text-6xl mb-4 ${skill.color}`} />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MySkills;
