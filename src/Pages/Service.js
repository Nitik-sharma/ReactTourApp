import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Hero from "../Component/Hero/hero";
import serviceImg from "../assest/service.avif";
import Footer from "../Component/Footer/Footer";
import Trip from "../Component/Trip/Trip";
function Service() {
  return (
    <div>
      <Navbar />
      <Hero img1={serviceImg} cName={"hero-mid"} title={"Service"} />
      <Trip />
      <Footer />
    </div>
  );
}

export default Service;
