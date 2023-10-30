import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Hero from "../Component/Hero/hero";
import contact from "../assest/contactPage1.avif";
import Footer from "../Component/Footer/Footer";
import ContactUs from "../Component/Contact/ContactUs";
function Contact() {
  return (
    <div>
      <Navbar />
      <Hero img1={contact} title={"Contact"} cName={"hero-mid"} />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Contact;
