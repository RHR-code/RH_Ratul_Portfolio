import React, { useState } from "react";
import { motion } from "framer-motion";

import ProjectCard from "./projectCard";
import { PROJECT_DATA } from "./ProjectData";
import ProjectDetails from "./ProjectDetails";

// Container for staggered entrance
const listContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ProjectsList = () => {
  // State to handle which project details to show (null means show list)
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    // Renders the detailed page/modal when a project is selected
    return (
      <ProjectDetails
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  // Renders the main project list view
  return (
    <div
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      <motion.h2
        className="text-5xl font-extrabold mb-16 text-center text-red-600 dark:text-red-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        🛠️ Featured Projects
      </motion.h2>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8"
        variants={listContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {PROJECT_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={setSelectedProject} // Set the state to show details
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsList;
