import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import MySkills from "./MySkills";
import SkillsCarousel from "./SkillsCarousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <SkillsCarousel />
      <MySkills />
    </div>
  );
};

export default Home;
