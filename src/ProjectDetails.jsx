import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCodeBranch,
  FaBug,
  FaWrench,
} from "react-icons/fa";

const detailsVariants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 10 },
  },
  exit: { y: -50, opacity: 0 },
};

const ProjectDetails = ({ project, onBack }) => {
  // Project object is destructured from props
  const {
    name,
    stack,
    description,
    liveLink,
    githubClient,
    challenges,
    improvements,
  } = project;

  return (
    <motion.div
      className="p-8 sm:p-12 bg-white dark:bg-gray-900 min-h-screen"
      variants={detailsVariants}
      initial="initial"
      animate="animate"
      exit="exit" // Useful if you integrate with AnimatePresence
    >
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-red-600 dark:text-red-400 font-semibold mb-10 
                               transition hover:translate-x-[-4px]"
        >
          <FaArrowLeft className="mr-2" /> Back to Projects
        </button>

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-gray-900 dark:text-white">
          {name}
        </h1>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            <FaExternalLinkAlt /> Live Project
          </a>
          <a
            href={githubClient}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-400 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <FaGithub /> GitHub (Client)
          </a>
        </div>

        {/* --- 1. Main Description --- */}
        <section className="mb-10 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-inner">
          <h2 className="text-2xl font-bold mb-3 text-red-600 dark:text-red-400">
            Overview
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </section>

        {/* --- 2. Technology Stack --- */}
        <section className="mb-10">
          <h2 className="flex items-center text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            <FaCodeBranch className="mr-3 text-red-500" /> Key Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {stack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 text-lg font-medium text-white bg-gray-700 dark:bg-gray-600 rounded-full shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* --- 3. Challenges & Lessons --- */}
        <section className="mb-10">
          <h2 className="flex items-center text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            <FaBug className="mr-3 text-red-500" /> Challenges Faced
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
            {challenges.map((challenge, index) => (
              <li key={index} className="text-lg">
                {challenge}
              </li>
            ))}
          </ul>
        </section>

        {/* --- 4. Future Plans --- */}
        <section className="mb-10">
          <h2 className="flex items-center text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            <FaWrench className="mr-3 text-red-500" /> Potential Improvements
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
            {improvements.map((plan, index) => (
              <li key={index} className="text-lg">
                {plan}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
