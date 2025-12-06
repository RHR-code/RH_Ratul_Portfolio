import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

// Animation for card entrance
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50 },
  },
};

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden 
                 flex flex-col transform transition-all duration-500 cursor-pointer"
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(248, 113, 113, 0.4)",
      }} // Red glow on hover
      initial="hidden"
      animate="visible"
    >
      {/* Project Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-red-600 dark:text-red-400">
          {project.name}
        </h3>

        {/* Stack Preview */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-white bg-gray-500 dark:bg-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 rounded-full border border-gray-400">
              +{project.stack.length - 3} More
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex justify-between gap-4">
          <button
            onClick={() => onViewDetails(project)}
            className="flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg 
                       hover:bg-red-700 transition duration-300"
          >
            View Details
          </button>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-red-600 text-red-600 font-semibold rounded-lg 
                       hover:bg-red-50 dark:hover:bg-gray-700 transition duration-300 flex items-center justify-center"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
