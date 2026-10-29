import {lazy, Suspense, useState } from "react";

import Home from "./components/Home";
const About = lazy(() => import("./components/About"));

const StudentDetails = lazy(() => import("./components/StudentDetails"))

const App = () => {

   const [datas, setDatas] = useState(false);

     const [show, setShow] = useState(false);

  return (
    <div>
      <div className="bg-amber-200 text-center p-15 h-50">
        <Home />
        <button className="border rounded" onClick={() => setDatas(!datas)}>
          Show About
        </button>

        {datas && (
          <Suspense fallback={<h3>Loading...</h3>}>
            <About />
          </Suspense>
        )}
      </div>
      

      <div className="bg-purple-300 text-center p-20 h-70">
        <button className = "border rounded" onClick={() => setShow(true)}>View Student</button>

        {show && (
          <Suspense fallback={<h3>Loading Student Details...</h3>}>
            <StudentDetails />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default App;
