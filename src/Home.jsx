import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import MySkills from "./MySkills";
import SkillsCarousel from "./SkillsCarousel";
import Education from "./Education";
import ProjectsList from "./ProjectList";
import Contact from "./Contact";
import Footer from "./footer";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <Banner />
      <About />
      <SkillsCarousel />
      <MySkills />
      <Education />
      <ProjectsList />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
