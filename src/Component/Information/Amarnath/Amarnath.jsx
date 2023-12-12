import React, { useState } from "react";
import { image } from "./image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Hero from "../../Hero/hero";
import heroImg from "./assest/d-1.jpg";
import info1 from "./assest/info-1.jpg";
import info2 from "./assest/info-2.jpg";
import info3 from "./assest/info3.jpg";
import map from "./assest/map-1.jpg";
function Amarnath() {
  const [selected, setSelected] = useState(0);
  const imglength = image.length;
  console.log("length->", imglength);
  return (
    <div>
      <Hero img1={heroImg} title={"Amarnath"} cName={"hero-mid"} />
      <div className="w-full ">
        <h1 className="text-3xl font-semibold text-red-500 capitalize font-mono">
          gallery
        </h1>
        {/* image part -------------------- */}
        <div className="flex items-center justify-center">
          <img
            src={image[selected].img1}
            alt={`Image ${selected + 1}`}
            style={{ height: "70vh", width: "60%" }}
            className=" rounded-md sm:w-full shadow-lg
             shadow-slate-600"
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

      {/* information box ------------- */}
      <div className="flex justify-center items-center gap-2 md:flex-row flex-col m-3">
        <div
          className="flex flex-col items-center justify-center md:w-1/3 w-full p-3 shadow-md shadow-slate-950 hover:bg-orange-700 duration-200  hover:scale-105 hover:text-gray-400
"
        >
          <img src={info1} className="px-3 py-4 rounded-md hover:scale-110" />
          <p className="px-3 py-4 rounded-md  text-lg font-normal ">
            Amarnath is one of the most famous pilgrimage destinations of India
            and is organized every year by the government of Jammu and Kashmir
            online train tickets. The shrine has an important part to play in
            Hindu culture and is considered to be one of the holiest shrines.
            The main cave is situated at a height of 12,756 ft from the sea
            level and remains covered with snow most of the year except for a
            short period of time in summer. Every year 'Amarnath Yatra' is
            marked by 'Pratham Pujan' which is said to summon the blessings of
            Baba Amarnath and attracts a large number of devotees from all over
            the world.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center md:w-1/3 w-full p-3 shadow-md shadow-slate-950 hover:bg-orange-700 duration-200  hover:scale-105 hover:text-gray-400">
          <img src={info2} className="px-3 py-4 rounded-md hover:scale-110  " />
          <p className="px-3 py-4 rounded-md  text-lg font-normal ">
            <span className=" font-semibold">
              The Legend and the Belief of Amarnath Yatra:-
            </span>
            As per the beliefs, the Amarnath Cave is where God Shiva was
            narrating Amar Katha to Goddess Parvati and wanted to keep it a
            secret. Therefore, he left all his companions behind. His riding
            friend - Nandi, the bull - was left at Pahalgam, the moon atop his
            head at Chandanwari, the snake around his neck at Lake Sheshnag, the
            5 basic essentials of life that he carried at Panchtarini and even
            his son- Lord Ganesha himself- at Mahaguna top. When he finished the
            narration, he realized that Goddess Parvati has actually fallen
            asleep and a parrot was listening all this while. This infuriated
            the Lord and he threw his Trishul to kill the parrot. To save
            himself, the parrot entered the womb of the saint’s wife. The baby
            was later born to become a famous sage.
            <span className="flex text-sm font-bold text-gray-500">
              Number of devotees allowed per day:
              <p>1500 (7500 each on two decided routes)</p>
            </span>
            <span className="flex text-sm font-bold text-gray-500 m-3">
              Age limit:<p>14 to 74 years</p>
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/3 w-full p-3 shadow-md shadow-slate-950 hover:bg-orange-700 duration-200  hover:scale-105 hover:text-gray-400">
          <img src={info3} className="px-3 py-4 rounded-md hover:scale-110  " />
          <p className="px-3 py-4 rounded-md  text-lg font-normal ">
            <span className=" font-semibold">
              Safety guidelines for Amarnath Yatra-2020:-
            </span>
            Physical fitness is essential for completing Amarnath Yatra with
            ease. We advise you to take morning or evening walks for at least
            4-5 km regularly for a month prior to Amarnath Yatra. As Amarnath
            Cave Temple is situated at a high altitude you need to increase the
            oxygen efficiency of your body. Practice deep breathing exercises
            and yoga, particularly pranayama. Amarnath Yatra will take you
            through cold weather at high altitudes where cold winds will be
            blowing constantly. You must carry woollen clothing, small umbrella
            with a strap around the chin to cover your head, raincoat,
            waterproof trekking shoes, torch, walking stick, woollen cap,
            jacket, and socks. The climate at the yatra route changes abruptly
            and hence all the above mentioned items are essential.
          </p>
        </div>
      </div>

      {/* map of cave */}
      <div className="px-4 py-6   flex  flex-col justify-center items-center">
        <div className="w-[95%] shadow-xl shadow-slate-700 p-3">
          <h1 className="text-xl font-bold">How to Reach Amarnath</h1>
          <img src={map} alt="map to enter in cave" />
          <p className="text-sm font-medium p-1">
            There are two Amarnath Yatra routes that pilgrims can take to travel
            Amarnath Cave and both these routes are well connected from all the
            major cities for easy connectivity. To start from Srinagar or
            Pahalgam, one will have to trek to a height of more than 14,000
            feet. Hence, being physically fit and mentally prepared for the
            journey is a must. The two routes to Amarnath Yatra are:
          </p>
          <h3 className="text-xl font-semibold text-gray-600 text-start px-1 py-2">
            Yatra from Baltal to Amarnath Cave:
          </h3>
          <p className="text-sm font-medium p-1">
            It is the most popular and shortest route to reach the cave. The
            region of Baltal is 14 km from the Cave and allows people to only
            walk. Ponies are not allowed. However, one can be carried on
            'Dandies'. The trek via Baltal usually takes 1-2 days to complete.
            This route is advised to be taken by the people who are young,
            healthy and looking for some adventure amidst the religious trip.
          </p>

          <h3 className="text-xl font-semibold text-gray-600 text-start px-1 py-2">
            Yatra from Pahalgam to Amarnath Cave:
          </h3>
          <p className="text-sm font-medium p-1">
            This is the most preferable route and is around 47 km from the main
            Amarnath Cave Site. The first step of Yatra starts at{" "}
            <span className=" text-gray-700 font-bold">Chandanwari</span>
            which is 16 km from the Pahalgam base camp and is at 9,500 feet.
            Then there is{" "}
            <span className=" text-gray-700 font-bold">Pissu</span>
            top, which is 3 km away and located at 11,000 ft,{" "}
            <span className=" text-gray-700 font-bold">Shesnag</span>- 9 km from
            Pissu top at 11,730 ft, followed by the{" "}
            <span className=" text-gray-700 font-bold"> Panjtarni</span>
            -12 km ahead and located at 12,000 feet. Pilgrims who cannot walk
            this far can opt for Helicopter services easily available for it.
            The trek usually takes 3-5 days one way to complete.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Amarnath;
