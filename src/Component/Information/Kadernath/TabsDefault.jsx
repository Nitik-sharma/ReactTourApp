import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

function TabsDefault() {
  const data = [
    {
      label: "OverView",
      value: "overview",
      desc: `There are more than 200 shrines dedicated to Lord Shiva in Chamoli district of Uttarakhand itself, the most important one is Kedarnath. According to legend, the Pandavas after having won over the Kauravas in the Kurukshetra war, felt guilty of having killed their own Kith and Kin and sought blessings of Lord Shiva for redemption. He eluded them repeatedly and while fleeing took refuge at Kedarnath in the form of a bafellow.

On being followed, the Lord dived into the ground, leaving his hump on the surface at Kedarnath. The remaining portions of Lord Shiva appeared at four other places and are worshipped there as his manifestations. The arms of the Lord appeared at Tungnath, the face at Rudranath, the belly at Madmaheshwar and his locks (hair) with head at Kalpeshwar. The Kedarnath and four above mentioned shrines are treated as Panch Kedar (Panch means Five in Sanskrit).

The Temple at Kedarnath presents an imposing sight, standing in middle of a wide plateau surrounded by lofty snow covered peaks. The temple was originally built in 8th century A.D. by Jagad Guru Adi Shankaracharya and stands adjacent to site of an even earlier temple built by the Pandavas. The inner walls of the assembly hall are decorated with figures of various deities and scenes from mythology. Outside the temple door a large statue of the Nandi Bafellow stands as guard.

Dedicated to Lord Shiva, the Kedarnath temple has exquisite architecture Built of extremely large, heavy and evenly cut grey slabs of stones, it evokes wonder as to how these heavy slabs were moved and handled in the earlier centuries. The temple has a Garbha Griha for worship and a Mandap, apt for assemblies of pilgrims and visitors. A conical rock formation inside the temple is worshipped as Lord Shiva in his Sadashiva form.`,
    },
    {
      label: "History",
      value: "history",
      desc: `In Hindu tradition, it is believed that Lord Shiva manifested in form of Jyotirlingam or the cosmic light. There are 12 such Jyotirlingas and Kedarnath is highest among them. This magnificent temple is ancient and constructed over a thousand years ago by Jagad Guru Adi Shankaracharya. It is located in the Rudra Himalaya range of Uttarakhand State. It is situated at an altitude of 3,581 mt & it is a 16 km trek from the nearest place of Gaurikund.

The Kedarnath temple is built of massive stone slabs over a large rectangular platform. The temple is ascended through large grey Steps which leads to the Holy Sanctums. We can find inscriptions in Pali language on the steps. The inner walls of the temple sanctum are adorned with figures of various deities and scenes from mythology.

The origin of Kedarnath temple can be traced to the great epic - Mahabharata. According to legends, after winning the battle of Mahabharata against the Gauravas, the Pandavas sought blessings of Lord Shiva to atone their sins of Killing men during the war. Lord Shiva eluded them repeatedly and while fleeing from them took refuge at Kedarnath in form of a bafellow. On being followed by the Pandavas, he dived into ground at the exact place where the Holy Sanctum is now present, leaving behind his hump on the floor surface, which is now visible. This Hump inside the temple is in the form of a conical rock formation and is worshipped as Lord Shiva manifested in his Sadashiva form. The Pujas and Archanas are performed on this manifestation by priests and piligrims. There is also a Holy Statue of Lod Shiva inside the temple, which is the portable manifestation (Utsavar) of the Lord.

Outside the temple door, a large statue of Nandi bafellow stands as guard. The temple, has been continually renovated over the centuries.

Kedarnath experiences very heavy Snowfall in Winter (upto several metres) and the temple itself is blanketed with snow from Novemner to April. So, at the onset of Winter every year, which is normally in the First week of November and on an auspicious date which is announced in advance by the holy symbolic statue of Lord Shiva is carried down from Kedarnath temple to a place called Ukhimath, where it is worshipped as Lord Shiva. The pujas and archanas are done at Ukhimath from November till May of next year. In the first week of May and on an auspicious date which is announced in advance by BKTC the symbolic statue of Lord Shiva is carried back from Ukhimath to Kedarnath and reinstated in the original place. It is at this time, that the doors of the temple are thrown open to pilgrims, who flock from all parts of India, for a holy pilgrimage. The shrine generally closes on the first day of Kartik (Oct-Nov) and reopens in Vaishakh (Apr-May) every year.`,
    },
    {
      label: "Weather/Climate",
      value: "weather/climate",
      desc: `Winter (October to April)
Winters has chilly days. Minimum can touch sub zero levels and snowfall is very common. These months are not the perfect time for travelling.


Summer (May to June)
Summer (May to June) are very pleasant with moderately cold climate. Summers is ideal for all sight seeing and the holy Kedarnath pilgrimage.


Monsoon (July to mid-September)
Monsoon (July to mid-September) are accompanied with regular rains and also temperature drops down. The region is prone to occasional landslides and travelling can be difficult.


The holy city of Kedarnath is open for public views from May to October/November but the temple remains closed during the monsoon months as landslides are common.

The region experiences pleasant and cool summer while winters are very chilly and snowfall is a regular occurrence.`,
    },
    {
      label: "How to Reach?",
      value: "How to Reach?",
      desc: `By Flight: Jolly Grant Airport (35 kms from Dehradun) is the nearest Airport to Kedarnath situated at a distance of 235kms. Jolly Grant Airport is well connected to Delhi with daily flights. Gaurikund is well connected by motorable roads with Jolly Grant Airport. Taxis are available from Jolly Grant Airport to Gaurikund.

By Train: The nearest railway station to Gaurikund is Rishikesh. Rishikesh railway station is situated 243kms before Gaurikund on NH58. Rishikesh is well connected by railway networks with major destinations of India. Trains to Rishikesh are frequent. Gaurikund is well connected by motorable roads with Rishikesh. Taxis and buses are available from Rishikesh, Srinagar, Rudraprayag, Tehri and many other destinations to Gaurikund.

By Road: Gaurikund is well connected by motorable roads with major destinations of Uttarakhand state. Buses to Haridwar, Rishikesh and Srinagar are available from ISBT Kashmiri Gate New Delhi. Buses and Taxis to Gaurikund are easily available from major destinations of Uttarakhand state like Dehradun, Haridwar, Rishikesh, Pauri, Rudraprayag, Tehri etc. Gaurikund is connected with Ghaziabad by National Highway 58.`,
    },
    {
      label: "Donations",
      value: "Donations",
      desc: `You Can Make Donation For:-
Renovation of the Main Temples,
Renovation of the Attached Temples,
Sandalwood,
Saffron,
Bhog of the Lord,
Building Dharamshalas,
Other
`,
    },
    {
      label: "Available Facilities",
      value: "Available Facilities",
      desc: ` HDFC ATM near temple`,
    },

    {
      label: "Nobility",
      value: "Nobility",
      desc: `According to the Skanda Puran, Lord Shankar himself said to Mata Parvati about the importance and antiquity of the Kedar region that this area is as old as himself. At this place, Lord Shankar obtained the divine form of Brahma for creation of The Universe and started creating The Universe, since then this place has become a favorite place for Lord Shankar. This Kedarkhand, being his favorite abode, is like heaven in the earth.
In the Dwadas Jyotirlinga of India, in the middle of the snowy mountain ranges situated in the northern part of Rudraprayag , the frontier district of Uttarakhand, Jyotirlinga is known as Sri Kedar Ekadash and being situated in the Himalayas this is paramount among all Jyotirlingas.
It is believed that this temple has been constructed by the Pandavas after the Mahabharata period. It is undisputed truth that this huge temple about 80 feet high has a beautiful display of architecture. The stones used in the temple are local which are carved and the shape of the temple is quadrangular. Lord Shiva's self-proclaimed Jyotirlinga exists in the form of a large rock in the Garva Grah of the temple. Outside the Garv Grah there is a stone statue of Maa Parvati ji. There are idols of Panch Pandava, Shri Krishna and mother Kunti ji in the Sabhamandap (hall). The main gate has stone sculptures of Ganesha ji and Shri Nandi. There is Amrit Kund in Parikrama Path. In the east part of this path there is a stone idol of Bhairavnath ji.`,
    },
  ];

  return (
    <Tabs
      value="overview"
      className="w-[98%] px-4 py-4 p-5 shadow-lg shadow-slate-600"
    >
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className=" text-xl text-red-600 bg-gray-300 px-4 hover:bg-orange-500 gap-1 "
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className=" text-lg font-medium">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default TabsDefault;
