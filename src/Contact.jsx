import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

// Define your contact details here
const CONTACT_DETAILS = [
  {
    icon: FaEnvelope,
    title: "Email Address",
    value: "rhratul003@gmail.com", // Replace with your actual email
    link: "mailto:rhratul003@gmail.com?subject=Contact%20Me&body=Hi,%20I%20want%20to%20talk%20about...",
    color: "text-red-500",
  },
  {
    icon: FaPhone,
    title: "Phone Number",
    value: "+880 1934780212",
    link: "tel:+8801934780212",
    color: "text-indigo-500",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+880 1934780212",
    link: "https://wa.me/8801934780212",
    color: "text-green-500",
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80 },
  },
};

const Contact = () => {
  return (
    <div
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      {/* --- Section Header --- */}
      <motion.h2
        className="text-5xl font-extrabold mb-8 text-center text-red-600 dark:text-red-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        📞 Get In Touch
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mb-16 text-lg text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your visions.
      </motion.p>

      {/* --- Contact Cards Grid (Framer Motion) --- */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {CONTACT_DETAILS.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-xl 
                       shadow-xl transition-all duration-300 transform border-b-4 border-red-500 
                       hover:scale-[1.03] hover:shadow-2xl cursor-pointer group"
            variants={itemVariants}
          >
            {/* Icon */}
            <item.icon
              className={`text-5xl mb-4 ${item.color} group-hover:scale-110 transition-transform`}
            />

            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {item.title}
            </h3>

            {/* Value (Clickable Link) */}
            <p className="text-lg text-gray-600 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              {item.value}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;
