import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import KadernathInfo from "./Component/Information/Kadernath/KadernathInfo";
import Badrinath from "./Component/Information/Badrinath/Badrinath";
import Amarnath from "./Component/Information/Amarnath/Amarnath";
import Yamnotri from "./Component/Information/Yamnotri/Yamnotri";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kadernath" element={<KadernathInfo />} />
        <Route path="/badrinath" element={<Badrinath />} />
        <Route path="/amarnath" element={<Amarnath />} />
        <Route path="/singup" element={<SignUp />} />
        <Route path="/yamnotri" element={<Yamnotri />} />
      </Routes>
    </div>
  );
}

export default App;
