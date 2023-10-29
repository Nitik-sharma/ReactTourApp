import React from "react";
import kadernath from "../../assest/kedarnath-temple.webp";
import Kadernath1 from "../../assest/kedarnath-temple-1.webp";
import Badri1 from "../../assest/vishnu-1.jpg";
import Badri2 from "../../assest/vishnu-temple-badrinath-himalayas-alaknanda.jpg";
import Amar1 from "../../assest/amarnath1.jpg";
import Amar2 from "../../assest/amarnath2.jpg";
import Yam1 from "../../assest/yamunotri2.jpg";
import Yam2 from "../../assest/Yamnotri.jpg";
import Hari1 from "../../assest/Haridwar.avif";
import Hari2 from "../../assest/Hridwar2.avif";
import Vrinda from "../../assest/indian-temple.jpg";
import Vrinda1 from "../../assest/vrindavanimg.jpg";
import Katra from "../../assest/katra.jpeg";
import Katra1 from "../../assest/katra1.jpeg";
import "./Destination.css";
import DestinationData from "./DestinationData";
function Destination() {
  return (
    <div className="destination">
      <h1>Indian Holy Places</h1>
      <p>
        India is a land steeped in spirituality and religious diversity, with a
        rich tapestry of holy places that hold profound significance for various
        faiths. These holy sites are not only a testament to the country's
        religious heritage but also showcase its architectural and cultural
        splendor.Besides its religious importance, Kedarnath is renowned for its
        breathtaking natural beauty. It is nestled in the Garhwal Himalayas,
        surrounded by majestic peaks and lush meadows. The Mandakini River flows
        nearby, adding to the serene atmosphere.{" "}
      </p>
      <DestinationData
        cName={"first-dest"}
        title={"Kedarnath Temple"}
        heading={
          "The heart of Kedarnath is the ancient Kedarnath Temple, an impressivestone structure that dates back over a thousand years. The temple isdedicated to Lord Kedarnath, an incarnation of Lord Shiva. It is oneof the twelve Jyotirlingas, which are the holiest shrines of LordShiva in India. The temple is renowned for its architectural beautyand spiritual significance. Besides its religious importance, Kedarnath is renowned for its breathtaking natural beauty. It isnestled in the Garhwal Himalayas, surrounded by majestic peaks andlush meadows. The Mandakini River flows nearby, adding to the sereneatmosphere."
        }
        img1={kadernath}
        img2={Kadernath1}
      />
      <DestinationData
        cName={"flex-revers"}
        title={"Badrinath"}
        heading={
          "Badrinath was re-established as a major pilgrimage site by Adi Shankara in the 8th century.[7] In earlier days, pilgrims used to walk hundreds of miles to visit the Badrinath templeThe Badrinath temple is the main attraction in the town. According to legend, Adi Shankaracharya discovered a black stone image of Lord Badrinarayan made of Shaligram stone in the Alaknanda River. He originally enshrined it in a cave near the Tapt Kund hot springs.In the sixteenth century, the King of Garhwal moved the murti to the present temple. The temple is approximately 50 ft (15 m) tall with a small cupola on top, covered with a gold gilt roof. The facade is built of stone, with arched windows. A broad stairway leads up to a tall arched gateway, which is the main entrance. The architecture resembles a Buddhist vihara (temple), with the brightly painted facade also more typical of Buddhist temples.[13] Just inside is the mandapa, a large pillared hall that leads to the garbha grha, or main shrine area. The walls and pillars of the mandapa are covered with intricate carving."
        }
        img1={Badri1}
        img2={Badri2}
      />
      <DestinationData
        cName={"first-dest"}
        title={"Amarnath Temple"}
        heading={
          "The Amarnath Temple is a Hindu shrine located in the Pahalgam tehsil of the Anantnag district of Jammu and Kashmir, India. A cave situated at an altitude of 3,888 m (12,756 ft),about 168 km from Anantnag city, the district headquarters, 141 km (88 mi) from Srinagar, the summer capital of Jammu and Kashmir, reached through either Sonamarg or Pahalgam. It is an important shrine in HinduismThe cave, located in Sind Valley, is surrounded by glaciers, snowy mountains and is covered with snow most of the year, except for a short period in the summer, when it is open to pilgrims. In 1989, pilgrims numbered between 12,000 and 30,000. In 2011, the numbers reached a peak, crossing 6.3 lakh (630,000) pilgrims. In 2018 pilgrims numbered 2.85 lakh (285,000). The annual pilgrimage varies between 20 and 60 days."
        }
        img1={Amar1}
        img2={Amar2}
      />
      <DestinationData
        cName={"flex-revers"}
        title={"Yamunotri Temple"}
        heading={
          "Yamunotri Temple is situated in the western region of Garhwal Himalayas at an altitude of 3,291 metres (10,797 ft) in Uttarkashi district, Uttarakhand.It's just 129 km from Uttarkashi, the main district headquarters. The temple is dedicated to Goddess Yamuna, and has a black marble idol of the goddess.The Yamunotri temple is a full day's journey from Uttarakhand's main towns — Uttarkashi, Rishikesh, Haridwar or Dehradun. The actual temple is only accessible by a 13 kilometres (8.1 mi) trek from the town of Hanuman Chatti and a 6 kilometres (3.7 mi) walk from Janki Chatti; horses or palanquins are available for rent. The hike from Hanuman Chatti to Yamunotri takes in views of a number of waterfalls. There are two trekking routes from Hanuman Chatti to Yamunotri; the one along the right bank proceeds via the Markandeya Tirth, where the sage Markandeya wrote the Markandeya Purana. The other route–which lies on the left bank of the river–goes via Kharsali, from where Yamunotri is a five or six hours climb."
        }
        img1={Yam1}
        img2={Yam2}
      />
      <DestinationData
        cName={"first-dest"}
        title={"Haridwar"}
        heading={
          "One of the holiest pilgrimages in India, Haridwar, or the ‘gateway to gods’, is located where Ganga, the sacredest of all Indian rivers, enters the Indo-Gangetic plains. Located at the foothills of the Himalayas, Haridwar is a city of temples and ashrams and its pious ambience envelops everyone. Haridwar is one of the four holy Indian cities that host the Kumbh Mela, a pious gathering of millions of Hindu devotees every 12 years. The Ardh Kumbh is organised here every six years. It also hosts the Kanwar mela every year during the rainy season. The ‘Panch Tirth’ or the five pilgrimages located within the periphery of Haridwar, are Gangadwara (Har Ki Pauri), Kushwart (Ghat), Kankhal, Bilwa Tirtha (Mansa Devi Temple) and Neel Parvat (Chandi Devi). Haridwar serves as the gateway to the Char Dham of Uttarakhand as well. An ancient city, Haridwar's roots are steeped deep in culture and traditions of the ancient Vedic times, and there are several institutions here imparting traditional knowledge of wellness. If you want to know more and experience the ancient methods of healing, there are many certified Ayurvedic clinics in Haridwar that you can visit. Ashrams also offer sessions in Ayurveda, meditation and yoga. Every morning and evening, the ghats (stepped banks of a river) of River Ganga witnesses the blissful Ganga aarti, which attracts devotees and tourists. The evening ritual being more popular, it makes for a mesmeric sight to see the river being venerated with loud and rhythmic chants and tall lamps, their lights lightening up the darkening waters. It is a spectacular sight as thousands of small diyas (earthen lamps) are set afloat on the river. "
        }
        img1={Hari1}
        img2={Hari2}
      />
      <DestinationData
        cName={"flex-revers"}
        title={"Vrindavan"}
        heading={
          "Vrindavan is a historic town located in the northern Indian state of Uttar Pradesh. It holds immense significance in Hinduism as it is believed to be the place where Lord Krishna spent his early years and performed various divine activities. Vrindavan is a major pilgrimage destination for Hindus and is known for its numerous temples, ghats (steps leading to the Yamuna River), and vibrant religious culture. The town is a center of devotion and spirituality, drawing thousands of devotees and tourists who come to experience its religious and cultural heritage. Vrindavan is particularly famous for its colorful festivals, including Holi, which is celebrated with great enthusiasm."
        }
        img1={Vrinda}
        img2={Vrinda1}
      />
      <DestinationData
        cName={"first-dest"}
        title={"Vaishno Devi"}
        heading={
          "Vaishno Devi, also known as Mata Vaishno Devi, is a highly revered Hindu goddess and a pilgrimage destination in the Indian state of Jammu and Kashmir. The shrine of Vaishno Devi is located in the Trikuta Mountains, and it is one of the most visited religious sites in India.Devotees undertake a challenging and spiritually significant journey to reach the Vaishno Devi shrine, often on foot, covering a distance of approximately 14 kilometers from the base camp in Katra. The goddess is believed to fulfill the wishes and prayers of her devotees, and people from all over India and beyond come to seek her blessings. The temple is dedicated to the goddess Mahalakshmi, Mahakali, and Mahasaraswati, who are believed to represent the three divine forms of Shakti (power)The pilgrimage to Vaishno Devi is a deeply spiritual and cultural experience, with devotees participating in austerities, prayers, and rituals along the way. The shrine is particularly busy during the Navaratri festival when thousands of pilgrims make the journey to seek the goddess's blessings."
        }
        img1={Katra}
        img2={Katra1}
      />
    </div>
  );
}

export default Destination;
