import React from "react";
import { FaLaptopCode, FaPalette, FaRocket, FaRunning } from "react-icons/fa";

const About = () => {
  return (
    <div id="about">
      <h1 className="text-5xl font-bold my-24 text-red-500 text-center">
        About Me
      </h1>
      <div className="max-w-7xl mx-auto px-5 md:px-0  space-y-16">
        {/* 1. Introduction & Programming Journey */}
        <section className="bg-white  dark:bg-gray-800 p-8 rounded-xl shadow-2xl border-t-4 border-red-500">
          <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            <FaLaptopCode className="mr-3 text-red-500" /> My Programming
            Journey
          </h2>
          <p className="mb-4 leading-relaxed text-lg">
            Hi! I’m Ratul, a web developer passionate about building sleek,
            responsive, and user-friendly websites. My programming journey
            started with curiosity and experimenting with HTML and CSS, and over
            time I’ve dived deep into JavaScript, React, and full-stack
            development. I love turning ideas into interactive web experiences
            that are both visually appealing and functional.
          </p>
          <p className="leading-relaxed text-lg italic text-gray-600 dark:text-gray-400">
            "The best code is not just functional, but a joy to read."
          </p>
        </section>

        {/* 2. Type of Work I Enjoy */}
        <section className="p-8">
          <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            <FaRocket className="mr-3 text-red-500" /> Where I Thrive
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Enjoyment Card 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02]">
              <h3 className="text-2xl font-semibold mb-3 text-red-600 dark:text-red-400">
                Front-End Architecture
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                I enjoy working on projects where I can bring design and
                functionality together—whether it’s a portfolio website, a
                dynamic web app, or a smooth user interface. I’m always eager to
                learn new technologies and improve my coding skills to create
                better, more efficient web solutions.
              </p>
            </div>

            {/* Enjoyment Card 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02]">
              <h3 className="text-2xl font-semibold mb-3 text-red-600 dark:text-red-400">
                API Design & Integration
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Working with Node.js and Express to build robust, secure, and
                well-documented RESTful APIs. I enjoy ensuring the data flow
                between client and server is efficient and error-free.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Hobbies and Interests */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl border-b-4 border-red-500">
          <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            <FaPalette className="mr-3 text-red-500" /> Beyond the Code
          </h2>

          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <FaRunning className="mt-1 mr-3 text-red-500 flex-shrink-0" />
              Outside of coding, I like exploring creative hobbies and staying
              active. These interests help me approach problems with fresh
              perspectives and keep my creativity flowing. I’m persistent,
              curious, and love challenges—qualities I bring to every project I
              work on
            </li>
            <li className="flex items-start">
              <FaPalette className="mt-1 mr-3 text-red-500 flex-shrink-0" />
              "I'm the developer who brings both the **meticulous detail of a
              chess player** and the **enthusiasm of a golden retriever** to the
              team. I believe in honest feedback, coffee, and celebrating small
              victories."
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
