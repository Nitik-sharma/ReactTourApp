import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

function BadrinathTabs() {
  const data = [
    {
      label: "OverView",
      value: "overview",
      desc: `The main entrance gate of Badarinath temple is colourful and imposing popularly known as Singhdwar. The temple is approximately 50 feet tall with a small cupola on top, covered with a gold gilt roof. The Badarinath temple is divided into three parts (a) The Garbha Griha or the sanctum sanctorum (b) The Darshan Mandap where rituals are conducted and (c) The Sabha Mandap where pilgrims assemble.

At the Badarinath Mandir Gate, directly opposite the main Idol of Lord himself, is seated idol of Bird Garud, vehicle / carrier of Lord Badarinarayan. Garud os seen is sitting position and in prayer with his hands folded. The walls and pillars of the mandapa are covered with intricate carvings.

The Garbha Griha portion has its canopy covered with a sheet of gold and houses Lord Badari Narayan, Kuber (God of wealth), Narad rishi, Udhava, Nar and Narayan. The complex has 15 idols. Especially attractive is the one-metre high image of lord Badarinath, finely sculpted in black stone. According to legend Shankara discovered a black stone image of Lord Badarinarayan made of Saligram stone in the Alaknanda River. He originally enshrined it in a cave near the Tapt Kund hot springs. In the sixteenth century, the King of Garhwal moved the murti to the present loction of the temple. It represents Lord Vishnu seated in a meditative pose called Padmasan.

Darshan Mandap: Lord Badari Narayan is armed with Conch and Chakra in two arms in a lifted posture and two arms rested in Yogic Pose. Badarinarayan is seen under the Badari tree, flanked by Kuber and Garuda, Narad, Narayan and Nar. As you look, standing to the right side of Badarinarayana is Uddhava. To the far right side are Nara and Narayana. Narada Muni is kneeling in front on the right side and is difficult to see. On the left side are Kubera-the god of wealth, and a silver Ganesh. Garuda is kneeling in front, to the left of Badarinarayana.

Sabha Mandap: It is a place in the Temple complex where pilgrims and pilgrims assemble.`,
    },
    {
      label: "History",
      value: "history",
      desc: `According to Hindu Tradition, Badarinath often called as Badari Vishal, was re-established by Adi Shri Shankaracharaya to revieve the lost prestige of Hinduism and to unite nation in one bond. It was built in the ages when Buddhism was spreading in the Himalayan range and there was worry that Hinduism was losing it's importance and glory. So the Adi Sankaracharya took it upon himself to bring back the glory of Hinduism and built temples in the Himalayas for the Hindu Gods of Shiva and Vishnu. The Badarinath temple is one such shrine and is richly infused with sacred accounts from numerous ancient Hindu scriptures. Be it the puranic story of the Pandav brothers, along with Draupadi, going past on their last pilgrimage by ascending the slopes of a peak near Badarinath called Swargarohini or the 'Ascent to Heaven' or the visit by Lord Krishna and other great sages, these are just some of the many tales which we associate with this holy tirtha.

The famed Skanda Purana describes more about the place as "There are several sacred shrines in heaven, on earth, and in hell; but there is no shrine like Badarinath."

According to Vamana Purana, the sages Nara and Narayana 'fifth avatar of Lord Vishnu' performed Penances here.

Great sages of yore like Kapila Muni, Gautam, Kashyap have performed penance here, Bhakta Narada attained salvation and Lord Krishna loved this region, medieval religious scholars like Adi Shankaracharya, Ramanujacharya, Sri Madhavacharya, Sri Nityananda have come here for learning and quiet contemplation and so many still continue to do even today.`,
    },
    {
      label: "Weather/Climate",
      value: "weather/climate",
      desc: `Winter (October to April)
Winter (October to April) has chilly days. Minimum can touch sub zero levels and snowfall is very common. These months are not the perfect time for traveling.


Summer (May to June)
Summer (May to June) are very pleasant with moderately cold climate. Summers is ideal for all sight seeing and the holy Badarinath pilgrimage.


Monsoon (July to mid-September)
Monsoon (July to mid-September) are accompanied with regular rains and also temperature drops down. So before start your journey, kindly ensure the condition of route between Rishikesh to Badarinath.


The holy city of Badarinath is open for public views from April/May to November.

The region experiences pleasant and cool summer while winters are very chilly and snowfall is a regular occurrence.

`,
    },
    {
      label: "How to Reach?",
      value: "How to Reach?",
      desc: `By Flight: Jolly Grant Airport (35 kms from Dehradun) is the nearest Airport to Badarinath situated at a distance of 314kms. Jolly Grant Airport is well connected to Delhi with daily flights. Badarinath is well connected by motorable roads with Jolly Grant Airport. Taxis are available from Jolly Grant Airport to Badarinath.

By Train: The nearest railway station to Badarinath is Rishikesh. Rishikesh railway station is situated 295kms before Badarinath on NH58. Rishikesh is well connected by railway networks with major destinations of India. Trains to Rishikesh are frequent. Badarinath is well connected by motorable roads with Rishikesh. Taxis and buses are available from Rishikesh, Srinagar, Rudraprayag, Chamoli, Joshimath and many other destinations to Badarinath.

By Road: Badarinath is well connected by motorable roads with major destinations of Uttarakhand state. Buses to Haridwar, Rishikesh and Srinagar are available from ISBT Kashmiri Gate New Delhi. Buses and Taxis to Badarinath are easily available from major destinations of Uttarakhand state like Dehradun, Haridwar, Rishikesh, Pauri, Rudraprayag, Karnaprayag, Ukhimath, Srinagar, Chamoli etc. Badarinath is connected with Ghaziabad by National Highway 58.`,
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
      desc: ` SBI ATM near temple,

   Petrol Pump is near Bus Stand,

   Various Food Joints are near temple`,
    },

    {
      label: "Nobility",
      value: "Nobility",
      desc: `Shri BadrinathDham of Uttarakhand State of Chamoli district, is situated in the northern part between the snow-capped mountain ranges. The description of this Dham has come in many religious texts like Skanda Purana, Kedarkhand, Shrimad Bhagwat etc. According to mythology, by hearing sage prayers when the atrocities of Mahabali demon Sahasrakavacha increased then Lord Vishnu, as a son of Dharma, incarnated as a Nar-Narayan from the womb of Mata Murti (daughter of Daksha Prajapati) and did austerities at this place for Jagat Kalyana. The temple of Lord Badrinath is situated on the right bank of Alaknanda River where the self-styled statue of Shaligram stone of Lord Badrinath ji is worshiped. This statue of Narayana is engraved in the quadrilateral Ardhpadmasana Dhyanmagna posture. It is said that Lord Vishnu did penance here in the form of Narayana at the time of Satyuga. This idol is from time immemorial and is very grand and attractive. The biggest feature of this idol is that the person who saw it got many visions of the presiding deity in it. Even today, followers of all sections of Hindu, Buddhist, Jain, Sikh etc. come here and offer prayers with reverence.
There is also a mythological story of why this Dham got its name Badrinath.When Lord Vishnu was in the childhood of Nar-Narayana, committed for the destruction of the demon Sahasrakavacha. So Goddess Lakshmi also appeared as a plum tree in defense of her husband and to protect God from cold, rain, storm, snow, the plum tree covered Narayana from all around.The plum tree is also called Badri. That is why this place called Badrinath. In the Satyuga, this region became famous as Muktiprada, Tretayuga as Yoga Siddhida, Dwaparyuga asVishala and Kaliyuga as Badrikashram.There is a legend in the Puranas that when Lord Vishnu started leaving this area in Dwaparyug, then other Gods urged him to stay here than Lord Vishnu indicated on the insistence ofthe other Gods that the time of Kalyug is coming and it would not be possible for him to reside here in the Kaliyuga, but he has a divine idol in the Alaknanda river under Naradashila, whoever will see that idol, he will get the fruits of my real vision.
After that other gods duly removed this divine idol from Naradkund and established it in the center of Bhairavi Chakra. The Gods also arranged for the regular worship of the Lord and NaradJi was appointed as worshiper. Even today, in the summer, Lord Vishnu is worshiped by humans for six months and during the six months in winter when heavy snow falls in this area, Lord Vishnu is worshiped by Lord NaradJi himself. It is believed that even when the Kapat of temple are closed in winter, the AkhandJyoti keeps on burning and Naradji arranges for worship and bhog. That is why even today this area is called Narad region.After six months, when the Kapat of temple are opened, AkhandJyoti burns inside the temple, for which the devotees from the country and abroad are engaged on the day of opening of the kapat.
The holy place Dharmashila, Matamurti Temple, NaranarayanParvat and two ponds namedSheshnetra, are still present today at Shri Badrinath which are associated with the story of demon sahasrakavacha's destruction. The creation of Bhairavi Chakra is also associated with the same story.This sacred area was known as Gandhamadan, Naranarayan Ashram. Manibhadrapur (present-day Mana village), NaraNarayana and Kuber mountains are worshiped as daily routine rules and rituals. The chief priests of the Shri Badrinath temple are the pure Namboodri Brahmins of the highest order among the descendants of AdiShankaracharya of Malawar region of South India. This prominent priest is known as Rawal Ji.`,
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

export default BadrinathTabs;
