import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import KadernathInfo from "./Component/Information/Kadernath/KadernathInfo";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kadernath" element={<KadernathInfo />} />
        <Route path="/singup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
