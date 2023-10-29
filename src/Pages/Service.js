import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Hero from "../Component/Hero/hero";
import serviceImg from "../assest/service.avif";
function Service() {
  return (
    <div>
      <Navbar />
      <Hero img1={serviceImg} cName={"hero-mid"} title={"Service"} />
    </div>
  );
}

export default Service;
