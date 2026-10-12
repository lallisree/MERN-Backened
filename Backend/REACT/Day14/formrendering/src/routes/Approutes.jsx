import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Student from '../pages.jsx/Student'
import Course from '../pages.jsx/Course';
import Numbers from '../pages.jsx/Numbers';
import Fruit from '../pages.jsx/Fruit';
import Employe from '../pages.jsx/Employe'
import NavBar from '../components/NavBar';

const Approutes = () => {
  return (
    <div>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/course" element={<Course />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/fruit" element={<Fruit />} />
        <Route path="/employe" element={<Employe />} />
      </Routes>
    </div>
  );
}

export default Approutes
