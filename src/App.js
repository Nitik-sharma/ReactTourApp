
import './App.css';
import React from 'react';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import About from './Pages/About';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
      
         </Routes>
    </div>
  );
}

export default App;
