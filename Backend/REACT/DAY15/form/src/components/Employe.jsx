import React, { useState } from 'react'

const Employe = () => {

    const [employe,setEmploye] = useState({name:"",department:"",salary:""});
    const [empdetails,setEmpDetails] = useState([]);
    const [empEdit,setEmpEdit] = useState(null);

    //handle input changes
    const handleChange = (e) => {

    const { name, value } = e.target;

    setEmploye((p) => ({ ...p, [name]: value }));

    }

    //Add employe
    const handleAdd = () => {

      if (
        employe.name.trim() === "" ||
        employe.department.trim() === "" ||
        employe.salary.trim() === ""
      ) {
        alert("Enter Employe Details");
        return;
      }
    setEmpDetails((p)=>[...p,employe])
   setEmploye({ name: "", department: "", salary: "" });
    };

    //Edit employe
    const handleEdit = (index) => {
      setEmploye({...empdetails[index]});
      setEmpEdit(index);
    }

    //Delete employe
    const handleDelete = (index) => {

      const copy = empdetails.filter((emp, i) => i !== index);

      setEmpDetails(copy);

    }
  return (
    <div>
        <h2>Employee Form</h2>
      <input
        type="text"
        name = "name"
        value={employe.name}
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <br /> <br />
      <input
        type="text"
        name="department"
        value={employe.department}
        placeholder="Enter your department"
        onChange={handleChange}
      />
      <br /> <br />
      <input
        type="text"
        name="salary"
        value={employe.salary}
        placeholder="Enter your salary"
        onChange={handleChange}
      />
      <br /> <br />

      <button onClick = {handleAdd}>Add Employe</button>

      {empdetails.map((emp,i)=>(
        <div key = {i+1}>
          <p>{emp.name}</p>
          <p>{emp.department}</p>
          <p>{emp.salary}</p>

          <button onClick={()=>handleEdit(i)}>Edit</button>

          <button onClick = {()=>handleDelete(i)}>Delete</button>
          <hr/>
          </div>
      ))}
    </div>
  );
}

export default Employe
