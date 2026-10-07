import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Array from '../pages/Array';
import Object from '../pages/Object';
import Toggle from '../pages/Toggle';
import NavBar from '../components/NavBar';

const Approutes = () => {
  
  return (
    <div>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Array />} />
        <Route path="/object" element={<Object/>} />
        <Route path="/toggle" element={<Toggle/>} />
      </Routes>
    </div>
  );
}

export default Approutes
