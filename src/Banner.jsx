import React from "react";
import Avatar from "./assets/my-profile-pic (1).png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Banner = () => {
  return (
    <section className="px-10 mt-16 grid grid-cols-1 md:grid-cols-2 items-center">
      {/* Left Side */}
      <div>
        <p className="text-2xl">
          Hello<span className="text-red-500">.</span>
        </p>
        <h2 className="text-4xl mt-2">I'm Md Robiul Hasan Ratul</h2>
        <h3 className="text-5xl mt-4 font-bold">MERN Stack Developer</h3>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="bg-red-500 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-600">
            Got a project?
          </button>
          <button className="border px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
            My resume
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center mt-12 md:mt-0 ">
        <div className="relative">
          {/* Glowing Background */}
          <div className="absolute -inset-6 w-90 h-90 bg-red-500/30 blur-3xl rounded-full"></div>

          {/* Ring Border */}
          <div className="absolute inset-0 w-82 h-72 rounded-full border-4 border-red-500 opacity-60"></div>

          {/* Left Arrow Shape */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-red-500 text-5xl opacity-70">
            &#60;
          </div>

          {/* Right Arrow Shape */}
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-red-500 text-5xl opacity-70">
            &#62;
          </div>

          {/* Avatar Image */}
          <img
            src={Avatar}
            alt="Profile"
            className="relative z-10 rounded-xl w-72 md:w-96 shadow-lg"
          />
        </div>
      </div>

      <div className="flex gap-5 mt-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
               hover:bg-blue-600 hover:border-blue-400 hover:scale-110 transition 
               shadow-lg hover:shadow-blue-500/40"
        >
          <FaLinkedin className="text-2xl" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
               hover:bg-gray-800 hover:border-gray-500 hover:scale-110 transition 
               shadow-lg hover:shadow-gray-500/40"
        >
          <FaGithub className="text-2xl" />
        </a>
      </div>
    </section>
  );
};

export default Banner;
