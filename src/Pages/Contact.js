import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Hero from "../Component/Hero/hero";
import contact from "../assest/Contact2.avif";
function Contact() {
  return (
    <div>
      <Navbar />
      <Hero img1={contact} title={"Contact"} cName={"hero-mid"} />
    </div>
  );
}

export default Contact;
