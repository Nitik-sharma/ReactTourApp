// KadernathInfo.js
import React, { useState } from "react";
import { img } from "../Kadernath/imageData";
import { Link } from "react-router-dom";
import img1 from "../Kadernath/images/kedarnath-desktop-1.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { IoLocation } from "react-icons/io5";
import { FaRoad } from "react-icons/fa";

function KadernathInfo() {
  const [selected, setSelected] = useState(0);
  const imglength = img.length;

  // Check if the img array is empty
  if (img.length === 0) {
    return null; // or you can render a loading spinner or message
  }

  return (
    <div>
      <h1 className="font-bold text-3xl text-orange-900 px-4 py-6 hover:scale-105 duration-200 hover:text-yellow-600">
        Kadetnath Dam
      </h1>
      <div className="w-full  ">
        <h1 className="text-3xl font-semibold text-red-500 capitalize font-mono">
          gallery
        </h1>
        {/* image part -------------------- */}
        <div className="flex items-center justify-center">
          <img
            src={img[selected].img1}
            alt={`Image ${selected + 1}`}
            style={{ height: "70vh", width: "60%" }}
            className=" rounded-md sm:w-full"
          />
        </div>

        {/* <img
          src={img[selected].img1}
          alt={`Image ${selected + 1}`}
          style={{ height: "100vh", width: "100%" }}
        /> */}
        {/* Arrow ---------------------- */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <span
            onClick={() =>
              setSelected(selected === 0 ? imglength - 1 : selected - 1)
            }
          >
            <FaArrowLeft size={30} />
          </span>
          <span
            onClick={() =>
              setSelected(selected === imglength - 1 ? 0 : selected + 1)
            }
          >
            <FaArrowRight size={30} />
          </span>
        </div>
      </div>
      <div className="fect flex flex-col justify-between items-center px-3 py-6 md:flex-row gap-2 ">
        <div className="p-3  border  md:w-1/3 shadow-md shadow-slate-600">
          <img src={img1} alt="" />
        </div>
        <div className="p-3  border  md:w-1/3 w-full  shadow-md  shadow-slate-600">
          <p className="px-3 py-4 text-center text-xl font-medium">
            Kedarnath temple is one of the sacred pilgrimage centre in Northern
            India, located on the bank of Mandakini river at an altitude of 3584
            meters above sea level. The historical name of this region is "Kedar
            Khand". Kedarnath temple is a part of Char Dhams and Panch Kedar in
            Uttarakhand and one of the 12 Jyotirlingas of Lord Shiva in India.
          </p>
          <hr className=" w-full h-1  bg-slate-500" />
          {/* map routes and weather icons */}
          <div className="flex justify-between items-center px-3 py-4">
            <div className="weather flex flex-col items-center ">
              <TiWeatherCloudy size={30} className="text-red-900" />
              <Link to="https://www.accuweather.com/en/in/kedarnath/196565/weather-forecast/196565">
                <span className="text-red-600 font-bold underline cursor-pointer">
                  Weather
                </span>
              </Link>
            </div>
            <div className="map flex flex-col items-center ">
              <IoLocation size={30} className="text-red-900" />
              <Link
                to={
                  "https://www.google.com/maps/place/Kedarnath+Temple/@30.7352308,79.066895,17z/data=!3m1!4b1!4m6!3m5!1s0x39083ee08aa6b0b5:0xdbbdae8b9602ee02!8m2!3d30.7352308!4d79.066895!16s%2Fm%2F026jlcg?entry=ttu"
                }
              >
                <span className="text-red-600 font-bold underline cursor-pointer">
                  Gogle map
                </span>
              </Link>
            </div>
            <div className="road flex flex-col items-center ">
              <FaRoad size={30} className="text-red-900" />
              <span className="text-red-600 font-bold underline cursor-pointer">
                Routes
              </span>
            </div>
          </div>
        </div>
        <div className="p-3  border  md:w-1/3 shadow-md shadow-slate-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quidem
          mollitia ex animi sunt beatae debitis excepturi iste illo dolorum
          adipisci tempora, tenetur, ducimus, pariatur a! Aliquid ipsum placeat
          alias.
        </div>
      </div>
    </div>
  );
}

export default KadernathInfo;
