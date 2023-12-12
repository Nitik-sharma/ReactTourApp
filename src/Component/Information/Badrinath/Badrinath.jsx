import React, { useState } from "react";
import { image } from "./image";
import Hero from "../../Hero/hero";
import heroImg from "./assest/d-4.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { IoLocation } from "react-icons/io5";
import { FaRoad } from "react-icons/fa";
import route from "../Kadernath/images/route-img.jpg";
import { IoCloseOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDirectionsRailway } from "react-icons/md";
import { GiAirplaneDeparture } from "react-icons/gi";
import { TbSpeakerphone } from "react-icons/tb";
import pic from "./assest/pic.jpg";
import BadrinathTabs from "./BadrinathTabs";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
function Badrinath() {
  const [selected, setSelected] = useState(0);
  const imglength = image.length;
  console.log("length->", imglength);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <Hero img1={heroImg} title={"श्री केदारनाथ धाम"} cName={"hero-mid"} />
      <div className="w-full  ">
        <h1 className="text-3xl font-semibold text-red-500 capitalize font-mono">
          gallery
        </h1>
        {/* image part -------------------- */}
        <div className="flex items-center justify-center">
          <img
            src={image[selected].img1}
            alt={`Image ${selected + 1}`}
            style={{ height: "70vh", width: "60%" }}
            className=" rounded-md sm:w-full"
          />
        </div>

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
      {/* information */}
      <div className="fect flex flex-col justify-between items-center px-3 py-6 md:flex-row gap-2 ">
        <div className="p-3  border  md:w-1/3 shadow-md shadow-slate-600">
          <img src={pic} alt="" />
        </div>
        <div className="p-3  border  md:w-1/3 w-full  shadow-md  shadow-slate-600">
          <p className="px-3 py-4 text-center text-xl font-medium">
            Badarinath is one of the holy shrines for Vaishnavites among the 108
            divya desams incarnation of Lord Vishnu. Badrinath town is also the
            part of Panch Badri temples including Yog Dhyan Badri, Bhavishya
            Badri, Adi Badri and Vriddha Badri, along with Badrinath temple.
          </p>
          <hr className=" w-full h-1  bg-slate-500" />
          {/* map routes and weather icons */}
          <div className="flex justify-between items-center px-3 py-4">
            <div className="weather flex flex-col items-center ">
              <TiWeatherCloudy size={30} className="text-red-900" />
              <Link to="https://www.accuweather.com/en/in/badrinathpuri/3001096/weather-forecast/3001096">
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
              {/* <span className="text-red-600 font-bold underline cursor-pointer">
                Routes
              </span> */}
              <span
                onClick={handleOpen}
                variant="gradient"
                className="text-red-600 font-bold underline cursor-pointer"
              >
                Routes
              </span>
              <Dialog
                open={open}
                handler={handleOpen}
                className="flex flex-col items-center justify-center gap-1"
              >
                <DialogHeader className=" text-2xl font-semibold text-red-600 uppercase">
                  Route Map
                </DialogHeader>
                <hr className="w-full h-0 bg-slate-500" />
                <img src={route} alt="route-of-kadernath" className=" w-96" />
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>
                      <IoCloseOutline size={50} />
                    </span>
                  </Button>
                </DialogFooter>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="p-3  border  md:w-1/3 shadow-md shadow-slate-600">
          <h1>Overview</h1>
          <hr className="w-full h-0 bg-slate-500" />
          {/* Visit time box----- */}
          <div className="visit flex flex-col justify-start  gap-2 px-3 py-4">
            <div className="flex justify-start items-center gap-2 text-red-700">
              <FaCalendarAlt />
              <p className=" font-semibold ">Best time to visit Kedarnath</p>
            </div>
            <div className="flex justify-start items-center">
              <p className=" font-semibold ">
                May, Jun, Jul, Aug, Sep, Oct, Nov
              </p>
            </div>
          </div>
          {/* Location------------ */}
          <div className="visit flex flex-col justify-start  gap-2 px-3 ">
            <div className="flex justify-start items-center gap-2 text-red-700">
              <IoLocation />
              <p className=" font-semibold ">Located in</p>
            </div>
            <div className="flex justify-start items-center">
              <p className=" font-semibold ">Chamoli, Garhwal</p>
            </div>
          </div>
          {/* Recmended stay------------ */}
          <div className="visit flex flex-col justify-start  gap-2 px-3 ">
            <div className="flex justify-start items-center gap-2 text-red-700">
              <p className=" font-semibold ">Recommended stay</p>
            </div>
            <div className="flex justify-start items-center">
              <p className=" font-semibold ">1 Days</p>
            </div>
          </div>
          {/* nearest railwaystation */}
          <div className="visit flex flex-col justify-start  gap-2 px-3 ">
            <div className="flex justify-start items-center gap-2 text-red-700">
              <MdDirectionsRailway />
              <p className=" font-semibold ">Nearest Railway Station</p>
            </div>
            <div className="flex justify-start items-center">
              <p className=" font-semibold ">Rishikesh, 295 kms</p>
            </div>
          </div>
          {/* Aitport  */}
          <div className="visit flex flex-col justify-start  gap-2 px-3 ">
            <div className="flex justify-start items-center gap-2 text-red-700">
              <GiAirplaneDeparture />
              <p className=" font-semibold ">Nearest Airport</p>
            </div>
            <div className="flex justify-start items-center">
              <p className=" font-semibold ">Jolly Grant Airport, 314 kms</p>
            </div>
          </div>
          {/* Foamus For */}
          <div className="visit flex flex-col justify-start  gap-2 px-3 ">
            <div className="flex justify-start items-center gap-2 text-red-700">
              <TbSpeakerphone />
              <p className=" font-semibold ">Famous for</p>
            </div>
            <div className="flex justify-start items-center">
              <p className=" font-semibold ">
                Badrinath Temple, Char Dham Yatra, Pilgrimage, Temple
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center mb-2">
        <BadrinathTabs />
      </div>
    </div>
  );
}

export default Badrinath;
