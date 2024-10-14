import AboutMe from "@/components/aboutMe/AboutMe";
import ProjectsSection from "@/components/Projects";
import Resume from "@/components/resume";
import React from "react";

const Home = () => {
  return (
    <div>
      <AboutMe />
      <Resume />
      <ProjectsSection />
    </div>
  );
};

export default Home;
