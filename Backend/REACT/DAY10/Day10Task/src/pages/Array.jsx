import { useState } from "react";

function Array() {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  // Add React
  const addReact = () => {
    setSkills([...skills, "React"]);
  };

  // Update JavaScript
  const updateJavaScript = () => {
    setSkills(
      skills.map((skill) =>
        skill === "JavaScript"
          ? "Advanced JavaScript"
          : skill
      )
    );
  };

  return (
    <div className=" bg-blue-200 flex justify-center items-center h-100">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          My Skills
        </h1>

        {/* Display skills using map() */}
        <div className="space-y-3 mb-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">

          <button
            onClick={addReact}
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Add React
          </button>

          <button
            onClick={updateJavaScript}
            className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Update JavaScript
          </button>

        </div>

      </div>
   
  );
}

export default Array;

