import React from "react";
import Hero from "./../../Hero/hero";
import heroImg from "./assests/v-1.avif";
import monkey from "./assests/indian-temple-4782284_640.jpg";
function Vrindavan() {
  return (
    <div>
      <Hero img1={heroImg} title={"Vrindavan"} cName={"hero-mid"} />

      <div className=" p-10 bg-black text-gray-200">
        <h1 className=" text-md md:text-5xl font-extrabold p-2">
          Places to visit in Mathura and Vrindavan for a perfect weekend
        </h1>
        <p className=" text-sm font-bold p-3">
          Temples, treks and tasty treats in the twin sacred cities
        </p>
      </div>
      <p className=" px-7 py-9 text-md font-medium ">
        Brajbhoomi, the land where Lord Krishna was born and raised, straddles
        the River Yamuna in Uttar Pradesh. At its centre lie the cities of
        Mathura and Vrindavan, where his name continues to resonate and, many
        say, his flute still resounds in every bylane and fallen leaf. For the
        pious, the devout ambience of the riverbank cities is reason enough, but
        Mathura and Vrindavan have a lot to offer for any traveller, with
        delicious food, pastoral beauty and ancient legends. Here is our quick
        guide for 48 hours in these twin sacred cities.
      </p>

      <h1 className=" text-md md:text-6xl font-extrabold p-2">
        Places to visit in Mathura and Vrindavan for a perfect weekend
      </h1>
      <h2 className=" text-md md:text-5xl font-extrabold p-2 text-start m-3">
        Getting there
      </h2>
      <p className=" px-7 py-9 text-md font-medium ">
        A 60km drive from Agra airport, Mathura lies four hours by road from
        Delhi, and a half-hour drive from Vrindavan. Those arriving by train can
        disembark at Mathura Junction.
      </p>

      <div className=" flex flex-col items-center justify-center px-3 py-5 ">
        <div className=" w-[80%] shadow-md shadow-slate-500 hover:bg-gradient-to-b from-red-400 to-blue-500">
          <h1 className=" text-3xl font-extrabold p-2">When to go</h1>
          <img
            src={monkey}
            alt=""
            className="  items-center px-5 py-6 w-full rounded-3xl"
          />
          <p className=" text-xl font-thin text-orange-500 py-3 px-3">
            The best season to visit is in early winter, when the temperature is
            ideal for a soak in the river as well as a trek up the hill. This
            year, Janmashtami falls on 6 and 7 September. During the
            festivities, the streets are filled with dance and processions, and
            temples across Braj are lit up and decorated. You can also time your
            visit around Hindu festivals such as Holi, when the streets of
            Mathura come alive with colour and cheer. In the twin towns of
            Barsana and Nandgaon nearby, Holi is a week-long celebration. Women
            dress up as gopis (milkmaids) and playfully drive off men with
            sticks, in a recreation of the way Radha and the other gopis drove
            off Krishna and his friends when they came to Barsana to play the
            festival of colour.
          </p>
        </div>
      </div>

      <div>
        <h1>Where to stay in Mathura and Vrindavan</h1>
        <p>
          While Mathura offers a range of hotels such as The Lalita Grand
          (doubles from Rs4,950; website), many chose to use Vrindavan as their
          base. Nidhivan Sarovar Portico, Vrindavan, (Doubles from Rs6,200;
          website) features an in-house spa and has a team of guides for day
          tours of the town. The Mayapur Vrindavan Trust (MVT) Guesthouse and
          Restaurant (Doubles from Rs4,600; website) is just 100m from the
          International Society for Krishna Consciousness (ISKCON) Temple. It
          also has a steady WiFi connection for workations. For real quiet, head
          to the sandstone gazebo that sits in the middle of an elevated grass
          lawn. Thanks to a no-phone policy, a dense silence pervades this
          space, so you can retreat from the bustle of the day for a meditative
          evening.
        </p>
      </div>
    </div>
  );
}

export default Vrindavan;
