import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Hero from "../Component/Hero/hero";
import img1 from "../assest/photo-1472214103451-9374bd1c798e.avif";
import Destination from "../Component/Destination/Destination";
import Trip from "../Component/Trip/Trip";
import Footer from "../Component/Footer/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        cName={"hero"}
        img1={img1}
        title={"आपकी यात्रा , आपकी कहानी"}
        text={"Choose Your Favourite Destination"}
        buttonText={"Travel a Plan"}
        url={"/"}
        heroBtn={"hero-btn"}
      />
      <Destination />
      <Trip />
      <Footer />
    </div>
  );
}

export default Home;
