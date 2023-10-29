import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Hero from "../Component/Hero/hero";
import AboutImg from "../assest/about.avif";
function About() {
  return (
    <div>
      <Navbar />
      <Hero img1={AboutImg} cName={"hero-mid"} title={"About"} />
    </div>
  );
}

export default About;
