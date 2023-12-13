import React, { useState } from "react";
import heroImg from "./image/haridwar-banner.jpg";
import Hero from "../../Hero/hero";
import { image } from "./Image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import har from "./image/har-ki-pauri-ghat.jpg";
import bazar from "./image/bara-bazaar.jpg";
import devi from "./image/mansa-devi-temple.jpg";
import kund from "./image/bhimgoda-kund.jpg";
import laxman from "./image/lsxmsn-jhula.jpg";
import advan from "./image/adventure-trials.jpg";
import ghat from "./image/triveni-ghat.jpg";
import ashram from "./image/maharishi-mahesh.jpg";
function Haridwar() {
  const [selected, setSelected] = useState(0);
  const imglength = image.length;
  console.log("length->", imglength);
  return (
    <div className="bg-gray-400">
      <Hero img1={heroImg} title={"Haridwar"} cName={"hero-mid"} />

      <div className=" p-7 bg-gray-400">
        <h1 className=" text-xl font-bold p-3">
          Places To See And Things To Do In Haridwar And Rishikesh
        </h1>

        <p className="text-sm font-medium p-4 leading-tight">
          Beautiful landscapes, serene background, peaceful evenings and traffic
          free environment attract you? Then Haridwar and Rishikesh is the place
          for you. The abundance of holy cities in India is not a hidden fact
          and Haridwar and Rishikeshcome in a close second to Banaras when it
          comes to visiting holy cities in India. Haridwar literally mean the
          ‘Gateway of God’ as Hari translates to God and Dwar to Gate and
          Rishikeshis renowned as a center for studying yoga and meditation. So
          all yoga junkies, this might be the abode in heaven for you!Set in the
          serene backdrops of North Indian state Uttarakhand, visiting these two
          cities would make one fall in love with the mystique and spiritual
          environment this place offers. People of India are known to be warm
          and very hospitable and this does not rule out HaridwarRishikesh as
          any exception. The people in these cities would treat you like you’re
          their own and will definitely leave you awe inspired.
        </p>
      </div>
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

      <div className=" p-5 m-3">
        <h1 className=" font-medium text-2xl font-mono">
          Top Attractions In Haridwar And Rishikesh
        </h1>
        <div className="flex flex-col md:flex-row p-3 gap-3">
          <div className="flex flex-col md:flex-row py-2 px-2  bg-white shadow-lg shadow-slate-400 hover:animate-pulse">
            <img
              src={har}
              alt="har"
              className="py-2 px-2 w-full md:w-56 md:h-56"
            />
            <p className="py-2 px-2 text-sm ">
              <h1 className=" text-xl font-bold text-gray-500 text-start">
                Har Ki Pauri Ghat :
              </h1>
              Har ki Pauri is the largest ghat in Haridwar and is said to have
              been visited by Lord Shiva and Lord Vishnu and footprints of the
              same can be seen on a wall. It is said to be built by King
              Vikramaditya in the 1st century BC. It is the precise spot where
              the Ganges leaves the Himalayas and enters the plains. With a lot
              of temples at the river bank, offerings are made with lighted
              candles and diyas floating across the river. The chanting of
              mantras and prayers creates a tranquil environment around.
            </p>
          </div>
          <div className="flex flex-col md:flex-row  bg-white shadow-lg shadow-slate-400  hover:animate-pulse">
            <img
              src={bazar}
              alt="har"
              className="py-2 px-2 w-full md:w-56 md:h-56"
            />
            <p className="py-2 px-2 text-sm ">
              <h1 className=" text-xl font-bold text-gray-500 text-start">
                Bara Bazar : :
              </h1>
              Located on the railway road, Bara Bazaar is a famous shopping
              hotspot in Haridwar. Since you are in a religious city, you will
              find several pooja items in the market. You can also buy
              handicraft articles as souvenirs. Other things that you can find
              in Bara Bazaar are churan and Rudraksha seeds. You can also buy
              delectable milk sweets at this place. So be ready to load your
              bags with souvenirs for you and your friends and family.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row p-3 gap-3">
          <div className="flex flex-col md:flex-row py-2 px-2  bg-white shadow-lg shadow-slate-400 hover:animate-pulse">
            <img
              src={devi}
              alt="devi"
              className="py-2 px-2 w-full md:w-56 md:h-56"
            />
            <p className="py-2 px-2 text-sm ">
              <h1 className=" text-xl font-bold text-gray-500 text-start">
                Mansa Devi Temple :
              </h1>
              Credited as the most famous attraction in Haridwar, Mansa Devi can
              be visited in a cable car which would provide you with serene and
              breathtaking views on the way. The temple is known for being the
              holy abode of Mansa Devi , a form of Shakti. Mansa is regarded as
              the sister of a serpent named Vasuki. This is walking distance
              away from HarkiPaudi. Be ready to be amazed by numerous number of
              sellers selling flowers and fruits and vendors paddling everything
              from jewellery to music.
            </p>
          </div>
          <div className="flex flex-col md:flex-row  bg-white shadow-lg shadow-slate-400  hover:animate-pulse">
            <img
              src={kund}
              alt="har"
              className="py-2 px-2 w-full md:w-56 md:h-56"
            />
            <p className="py-2 px-2 text-sm ">
              <h1 className=" text-xl font-bold text-gray-500 text-start">
                Bhimgoda Kund :
              </h1>
              Having historical importance, the Bhimgoda Kund is situated about
              1 km from HarkiPauri. Legend has it that while proceeding to the
              Himalaya, the Pandavas stopped by to drink the water here in
              Haridwar, and Bhimgoda Kund is the place where Bhima drew water
              from the rocks by thrusting his knee. It is a major attraction in
              Haridwar and is visited by many people all through the year.
            </p>
          </div>
        </div>
      </div>

      <div className=" p-5 m-3">
        <h1 className=" font-medium text-2xl font-mono">
          Few More Attractions In Haridwar And Rishikesh
        </h1>
        <div className="flex flex-col md:flex-row p-3 gap-3">
          <div className="flex flex-col md:flex-row py-2 px-2  bg-white shadow-lg shadow-slate-400 hover:animate-pulse">
            <img
              src={laxman}
              alt="har"
              className="py-2 px-2 w-full md:w-56 md:h-56"
            />
            <p className="py-2 px-2 text-sm ">
              <h1 className=" text-xl font-bold text-gray-500 text-start">
                Laxman Jhula & Ram Jhula :
              </h1>
              Laxman and Ram Jhula are the 450 feet long iron suspended bridges
              that are a highlight of Rishikesh. Located 4 km from Rishikesh
              railway station, these architectural wonders are significant
              pilgrimage spots and find their name in the best places to visit
              in Rishikesh. Visit these bridges and revel in their beauty and
              then pay a visit to Ram temple, Trayambakeshwar temple, and Laxman
              temple which are situated in close proximity, and are among the
              famous places in Rishikesh.
            </p>
          </div>
          <div className="flex flex-col md:flex-row  bg-white shadow-lg shadow-slate-400  hover:animate-pulse">
            <img
              src={advan}
              alt="har"
              className="py-2 px-2 w-full md:w-56 md:h-56"
            />
            <p className="py-2 px-2 text-sm ">
              <h1 className=" text-xl font-bold text-gray-500 text-start">
                Adventure Trails :
              </h1>
              All the adventure junkies, where you at? Rishikesh offers you with
              tremendous number of activites you can do to let out that child in
              you. From river rafting, camping, bungee jumping, climb fox to hot
              air ballooning, giant swing, trekking, cliff jumping and a lot
              more, it the best place where one could immerse themselves in fun
              and frolic.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row p-3 gap-3">
          <div className="flex flex-col md:flex-row py-2 px-2  bg-white shadow-lg shadow-slate-400 hover:animate-pulse">
            <img
              src={ghat}
              alt="devi"
              className="py-2 px-2 w-full md:w-56 md:h-56"
            />
            <p className="py-2 px-2 text-sm ">
              <h1 className=" text-xl font-bold text-gray-500 text-start">
                Triveni Ghat :
              </h1>
              Situated alongside Ganga, the TriveniGhat is one of the popular
              tourist places in Rishikesh. On visiting the ghat, you will see
              numerous pilgrims bathing in the waters. At this very ghat, the
              confluence of Ganga, Yamuna, and Saraswati takes place.During the
              evening aarti, you feel a spiritual aura all around the place
              which transports you to a different place altogether and the aura
              is such, you wouldn’t want to leave the place at all!
            </p>
          </div>
          <div className="flex flex-col md:flex-row  bg-white shadow-lg shadow-slate-400  hover:animate-pulse">
            <img
              src={ashram}
              alt="har"
              className="py-2 px-2 w-full md:w-56 md:h-56"
            />
            <p className="py-2 px-2 text-sm ">
              <h1 className=" text-xl font-bold text-gray-500 text-start">
                Maharishi Mahesh Yogi Ashram :
              </h1>
              Since the arrival of the famous British band BEATLES here in the
              60’s, this place has garnered a lot of tourist attraction and
              acclaim and is one the best places to visit in Rishikesh. The
              tranquility and serene environment here is loved by the meditation
              lovers and they should definitely pay a visit here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Haridwar;
