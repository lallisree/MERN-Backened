import { useState } from "react";

const Localstorage = () => {

  const [name, setName] = useState("")

   const [students, setStudents] = useState(() => {
     const saved = localStorage.getItem("students");
     return saved ? JSON.parse(saved) : [];
   });

   //Add 
 const addStudent = () => {

    if (name.trim() === "") return;

   const updatedStudents = [...students, {name}];

   setStudents(updatedStudents);

   localStorage.setItem("students", JSON.stringify(updatedStudents));

   setName("");
 };

 //Delete
  const handleDelete = (index) => {

    const updatedStudents = students.filter((_, i) => i !== index);

    console.log(index, students);

    setStudents(updatedStudents);

    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> <br/><br/>

      <button onClick={addStudent}>Add Student</button>

      {students.map((student, i) => (
        <div key={i}>
          <p>{student.name}</p>
          <button onClick={() => handleDelete(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Localstorage 
