import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import MySkills from "./MySkills";
import SkillsCarousel from "./SkillsCarousel";
import Education from "./Education";
import ProjectsList from "./ProjectList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <SkillsCarousel />
      <MySkills />
      <Education />
      <ProjectsList />
    </div>
  );
};

export default Home;
