import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Arr from '../pages/Arr';
import primitive from '../pages/Primitive';
import ArrObj from '../pages/ArrObj';
import Toggle from '../pages/Toggle';
import NavBar from '../components/NavBar';
import Primitive from '../pages/Primitive';
import Object from '../pages/Object';

const Approutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/primitive" element={<Primitive />} />
        <Route path="/" element={<Arr />} />
        <Route path="/object" element={<Object />} />
        <Route path="/arrobj" element={<ArrObj />} />
        <Route path="/toggle" element={<Toggle />} />
      </Routes>
    </div>
  );
}

export default Approutes
