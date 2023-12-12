import React from "react";
import Hero from "../../Hero/hero";
import heroImg from "../../../assest/Yamnotri.jpg";
import pic1 from "./images/yamunotri-dham1.jpg";
import pic2 from "./images/yamunotri-temp.jpg";
import pic3 from "./images/yamunotri-temple.jpg";
import pic4 from "./images/yamunotri-temple1.jpg";
import pic5 from "./images/yamunotri-temple2.jpg";
import pic6 from "./images/yamunotri-distance.jpg";
import { MdDirectionsRailway } from "react-icons/md";
import { GiAirplaneDeparture } from "react-icons/gi";
import { BsBusFront } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import map from "./images/map.png";
function Yamnotri() {
  return (
    <div>
      <Hero img1={heroImg} title={"YAMUNOTRI DHAM"} cName={"hero-mid"} />

      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-6 m-4 shadow-lg shadow-violet-50">
        <img
          src={pic1}
          alt="pic1"
          className=" rounded-md shadow-lg shadow-fuchsia-900 hover:scale-110 duration-200"
        />
        <p className=" px-3 hover:text-gray-400">
          On the western side of Garhwal Himalayas, in the Uttarkashi district
          of Uttarakhand, lies the holy place of Yamunotri. About 3,293 metres
          above the sea level, Yamunotri stands proudly with its enormous
          mountain peaks, glaciers and gushing waters of Yamuna. River Yamuna,
          the second most sacred river of India, originates in Yamunotri, making
          it one of the pilgrimage sites in the Chota Char Dham Yatra in
          Uttarakhand. The venerated goddess Yamuna is said to be the daughter
          of Sun and twin sister of Yama (the god of death); in Vedas, Yamuna is
          called Yami (lady of life). A bath in the sanctified waters of Yamuna
          is said to cleanse all sins and protect from untimely or painful
          death. Such strong associations in Hindu mythology place Yamuna Devi
          (goddess) in high ranks of divinity.On the western side of Garhwal
          Himalayas, in the Uttarkashi district of Uttarakhand, lies the holy
          place of Yamunotri. About 3,293 metres above the sea level, Yamunotri
          stands proudly with its enormous mountain peaks, glaciers and gushing
          waters of Yamuna. River Yamuna, the second most sacred river of India,
          originates in Yamunotri, making it one of the pilgrimage sites in the
          Chota Char Dham Yatra in Uttarakhand.
        </p>
      </div>

      <div className="px-4 py-6 bg-purple-300">
        <h1 className=" text-2xl font-bold ">
          ORIGIN OF THE YAMUNA RIVER & ASSOCIATED LEGENDS
        </h1>
        <div className="flex flex-col md:flex-row px-3 py-5 ">
          <p className=" px-3 py-4 font-medium m-4">
            The River Yamuna originates from the Yamunotri glacier, which rises
            up to 6,315 meters above sea level, and lies against a steep slope
            just below the top of the Kalind peak. From here Yamuna comes down
            into Saptarishi Kund and from there gushes southwards in a series of
            waterfalls. To the west of the Kalind Parbat is located
            Banderpoonch, which is a dominant mountain in central Himalayan area
            of Garhwal and divides the watershed of Yamuna from that of the
            Ganges. Coming out from Kalind Parbat, Yamuna is also known as
            Kalindi. As per a legend, Lord Hanuman doused the fire of his tail
            after burning Ravan's Lanka in the chilly waters of Yamuna at
            Banderpooch. That is why the peak is called Bander (monkey) Pooch
            (tail) - monkey's tail. Another legend sees Yamunotri as the
            hermitage of ancient sage Asit Muni. The Muni used to bath both in
            Yamuna and Ganga, but in his old age he couldn't travel to Gangotri.
            Realising his problem, a stream of Ganga started to flow beside that
            of Yamuna.
          </p>
          <img
            src={pic2}
            alt="pic2"
            className=" rounded-md shadow-lg shadow-fuchsia-900 hover:scale-110 duration-200"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-5 m-5 border  shadow-xl shadow-zinc-500 gap-2 hover:bg-gradient-to-b from-slate-600 to-zinc-500 duration-200 hover:text-white rounded-md">
        <img src={pic3} alt="pic3" />
        <div>
          <h3 className=" text-left text-2xl text-yellow-600 font-bold  ">
            YAMUNOTRI TEMPLE
          </h3>
          <p className="text-sm font-light px-3">
            The holy abode of Goddess Yamuna is situated near the foot of Kalind
            Parbat (peak) and on a side of Banderpoonch Parbat. Nestled in the
            intimidating Himalayas, Yamunotri temple is believed to be
            constructed by the king of Tehri, Naresh Sudarshan Shah in 1839. One
            of the Chota Char Dham pilgrimage sites, the stunning setting of the
            temple is enough to fill the hearts of the devotees with wonder.
            Yamuna River jets down from one side of the temple, which houses
            Goddess Yamuna in the form of a black marble idol. Ganga Devi too
            finds her place, in white stone, by the side of Yamuna. The temple
            of Yamuna closes its portals as winter approaches on Yama Dwitiya
            (second day after Diwali or on Bhai Dooj). Devi's winter address is
            Kharsali village where she reaches in a palanquin and will remain
            for the entire period of winters. On Akshaya Tritiya (occurring on
            April/May), the goddess comes back to grace Yamunotri again. Both
            closing and opening ceremonies of the Yamunotri shrine are brought
            about with celebrations, elaborate rituals and vedic chants.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-5 m-5 border  shadow-xl shadow-zinc-500 gap-2 hover:bg-gradient-to-b from-slate-600 to-zinc-500 duration-200 hover:text-white rounded-md">
        <img src={pic4} alt="pic3" />
        <div>
          <h3 className=" text-left text-2xl text-yellow-600 font-bold  ">
            SURYA KUND (THE POND OF THE SUN)
          </h3>
          <p className="text-sm font-light px-3">
            Very near to the Yamuna Devi temple there are many hot water
            springs; the most significant among them is the Surya Kund. It holds
            the boiling-hot water as it emerges from the crevices in the
            mountain. People boil rice and potatoes by tying them in a cloth
            (preferably muslin cloth) and consider them a Prasad (religious
            offering) from Goddess Yamuna.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-5 m-5 border  shadow-xl shadow-zinc-500 gap-2 hover:bg-gradient-to-b from-slate-600 to-zinc-500 duration-200 hover:text-white rounded-md">
        <img src={pic5} alt="pic3" />
        <div>
          <h3 className=" text-left text-2xl text-yellow-600 font-bold  ">
            DIVYA SHILLA (THE DIVINE STONE)
          </h3>
          <p className="text-sm font-light px-3">
            It is a reddish-brown rock near the Surya Kund which needs to be
            worshipped before offering reverence to the main deity, Yamuna maa
            (mother). According to Skanda Purana, with a mere touch of the
            sacred rock one can attain spiritual liberation.
          </p>
        </div>
      </div>

      <div className="px-4 py-6">
        <h1 className="p-2 text-xl font-semibold m-2">
          HOW TO REACH YAMUNOTRI TEMPLE?
        </h1>
        <div className=" flex flex-col md:flex-row gap-2 border shadow-md shadow-orange-200">
          <img src={pic6} alt="pic6" className="px-4 rounded-md py-4" />
          <div className="px-4 py-4">
            <h1 className="text-xl font-medium">ROUTE</h1>
            <p>
              Rishikesh - Narendra Nagar - Chamba - Tehri - Dharasu - Bhramkhal
              - Barkot - Hanuman Chatti - Janki Chatti - Yamnotri
            </p>
            <div className="flex flex-col md:flex-row gap-3 m-2">
              <GiAirplaneDeparture size={50} className=" text-orange-600" />
              <span className=" text-start">
                <h3 className="text-md font-semibold text-gray-500">BY AIR:</h3>
                <p className="px-2">
                  Jolly Grant airport, Rishikesh Road, Dehradun, is the nearest
                  airport to Gangotri. Hire a cab or get a bus from here.
                </p>
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-3 m-2">
              <MdDirectionsRailway size={50} className=" text-orange-600" />
              <span className=" text-start">
                <h3 className="text-md font-semibold text-gray-500">
                  BY TRAIN:
                </h3>
                <p className="px-2">
                  Regular trains to Haridwar and Dehradun are available at all
                  times of the year. Hire a cab or get a bus from here.
                </p>
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-3 m-2">
              <BsBusFront size={120} className=" text-orange-600" />
              <span className=" text-start">
                <h3 className="text-md font-semibold text-gray-500">BY BUS:</h3>
                <p className="px-2">
                  Motorable roads end at Janki Chatti and it is from here that a
                  tough trek measuring up to 6/5 km is initiated till the holy
                  shrine of Yamuna Devi. One can take ponies or palanquins to
                  save oneself the hardships of the journey. Buses and taxis are
                  available from important destinations like Rishikesh,
                  Dehradun, Uttarkashi, Tehri and Barkot.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-6">
        <h1 className="p-2 text-xl font-semibold m-2">BEST TIME TO VISIT</h1>
        <div className=" flex flex-col md:flex-row gap-2 border shadow-md shadow-orange-200">
          <p className="px-5 py-6 m-10">
            The best time to visit the Yamunotri temple is from April/May to
            June and September to October/November. Travelling in monsoons is
            not recommended due to the risk of landslides, floods and other
            rain-related issues. Very low temperature and heavy snow makes
            winter an inappropriate season for pilgrimage in Chota Char Dham.
            <span className=" text-3xl font-semibold text-orange-700 flex items-center justify-center underline">
              Read more <FaArrowRight size={20} />
            </span>
          </p>
          <img src={map} alt="map" />
        </div>
      </div>
    </div>
  );
}

export default Yamnotri;
