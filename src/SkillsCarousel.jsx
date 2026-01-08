import React from "react";
import { motion } from "framer-motion";
// --- Skill Icons ---
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFire,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  //   SiVisualstudiocode,
  SiFigma,
  SiPostman,
  SiVite,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
// import { GiGravitacija } from "react-icons/gi"; // Closest to Antigravite
import { MdSecurity } from "react-icons/md"; // For JWT
import { RiListSettingsFill } from "react-icons/ri"; // For REST APIs
import { TbDeviceDesktopAnalytics } from "react-icons/tb"; // For DaisyUI
import { VscVscode } from "react-icons/vsc";

const SKILLS_AND_TOOLS = [
  // Core Technologies
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500", detail: "JS" },
  { name: "React", icon: FaReact, color: "text-blue-400", detail: "UI" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-gray-900 dark:text-white",
    detail: "Framework",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-600",
    detail: "Structure",
  },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600", detail: "Style" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-teal-400",
    detail: "Utility-First",
  },
  {
    name: "daisyUI",
    icon: TbDeviceDesktopAnalytics,
    color: "text-pink-500",
    detail: "Components",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-600",
    detail: "Backend",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-800 dark:text-gray-200",
    detail: "API",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
    detail: "Database",
  },
  {
    name: "REST APIs",
    icon: RiListSettingsFill,
    color: "text-indigo-500",
    detail: "Integrations",
  },
  { name: "Firebase", icon: FaFire, color: "text-amber-500", detail: "BaaS" },
  {
    name: "JWT",
    icon: MdSecurity,
    color: "text-red-500",
    detail: "Authentication",
  },

  // Tools & Platforms
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-700",
    detail: "Version Control",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-gray-900 dark:text-white",
    detail: "Hosting",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    color: "text-blue-500",
    detail: "Editor",
  },
  { name: "Figma", icon: SiFigma, color: "text-purple-500", detail: "Design" },
  {
    name: "Postman",
    icon: SiPostman,
    color: "text-orange-500",
    detail: "Testing",
  },
  { name: "Vite", icon: SiVite, color: "text-purple-600", detail: "Bundler" },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "text-gray-900 dark:text-white",
    detail: "Deployment",
  },
  {
    name: "Netlify",
    icon: SiNetlify,
    color: "text-teal-500",
    detail: "Deployment",
  },
];

const carouselItems = [...SKILLS_AND_TOOLS, ...SKILLS_AND_TOOLS];

const scrollAnimation = {
  x: ["0%", "-100%"],
  transition: {
    x: {
      duration: 10,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const SkillsCarousel = () => {
  return (
    <div className="py-16 bg-white px-5 my-24 mx-auto dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-8 text-center text-red-500 dark:text-red-500">
        🚀 My Tech Stack & Toolkit
      </h2>

      <div className="relative w-full overflow-hidden whitespace-nowrap py-4 border-y-2 border-red-200 dark:border-red-800">
        <motion.div className="flex gap-8" animate={scrollAnimation}>
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-32 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl 
                         shadow-lg hover:shadow-xl transition-shadow duration-300 transform 
                         hover:scale-105 border-b-4 border-transparent hover:border-red-500
                         flex flex-col items-center justify-center text-center group"
            >
              <item.icon
                className={`text-5xl ${item.color} mb-2 group-hover:scale-110 transition-transform`}
              />

              <p className="text-lg font-semibold text-gray-900 dark:text-white whitespace-normal">
                {item.name}
              </p>

              <span className="text-xs text-gray-500 dark:text-gray-400">
                {item.detail}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsCarousel;
