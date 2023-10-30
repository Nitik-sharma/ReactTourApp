import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Hero from "../Component/Hero/hero";
import AboutImg from "../assest/about.avif";
import Footer from "../Component/Footer/Footer";
import AboutUs from "../Component/About/AboutUs";
function About() {
  return (
    <div>
      <Navbar />
      <Hero img1={AboutImg} cName={"hero-mid"} title={"About"} />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
