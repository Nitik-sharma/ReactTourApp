import React from "react";
import "./TripStyle.css";
import mhakal from "../../assest/mhakal.avif";
import TripData from "./TripData";
import tirupati from "../../assest/trupati1.webp";
import AkserDam from "../../assest/akshardham1.jpg";
import Davrka from "../../assest/Dvarka.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You Can Discover unique destination using goggle map</p>
      <div className="trip-card">
        <TripData
          img={mhakal}
          heading={"श्री महाकालेश्वर मंदिर"}
          text={
            "महाकाल मंदिर सबसे पहले कब अस्तित्व में आया, यह बताना मुश्किल है। हालाँकि, इस घटना को प्रागैतिहासिक काल का बताया जा सकता है। पुराण बताते हैं कि इसकी स्थापना सबसे पहले प्रजापिता ब्रह्मा ने की थी। छठी शताब्दी में राजा चंदा प्रद्योत द्वारा राजकुमार कुमारसेन की नियुक्ति का उल्लेख मिलता है। "
          }
        />
        <TripData
          img={tirupati}
          heading={"Tirupati Balaj"}
          text={
            "The story of Tirupati Balaji is primarily associated with the Hindu epic, the Mahabharata. According to legend, Lord Venkateswara is believed to be an incarnation of Lord Vishnu. It is said that he appeared on Earth in response to a plea by the sage Narada, who was concerned about the trials and tribulations faced by humanity. "
          }
        />
        <TripData
          img={AkserDam}
          heading={"Swaminarayan Akshardham"}
          text={
            "Swaminarayan Akshardham is a Hindu temple, and spiritual-cultural campus in Delhi, India. The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture. "
          }
        />
        <TripData
          img={Davrka}
          heading={"Dwarka"}
          text={
            "Dwarka is considered as the first capital of Gujarat.[2] The city's name literally means gateway.[5] Dwarka has also been referred to throughout its history as Mokshapuri, Dwarkamati, and Dwarkavati.[6] It is mentioned in the ancient epic period of the Mahabharata."
          }
        />
      </div>
    </div>
  );
}

export default Trip;
