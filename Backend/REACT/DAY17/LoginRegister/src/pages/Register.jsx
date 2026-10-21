import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()
    const[registerData,setRegisterData] = useState({name:"",email:"",password:""})

    const handleChange = (e) =>{

        setRegisterData({...registerData,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const getDatas = JSON.parse(localStorage.getItem("registerdatas")) || []

        const obj = { //for we want ID we create as an object function
          id: Date.now(),
          name: registerData.name,
          email: registerData.email,
          password: registerData.password,
        };

        getDatas.push(obj);


        const convert = JSON.stringify(getDatas);

        localStorage.setItem("registerdatas",convert);

        alert("Successfully Register")

        setRegisterData({ name: "", email: "", password: "" });

        navigate("/login")

    }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-10 flex flex-col justify-center items-center w-350 gap-10"
      >
        <input
          className="border p-1 w-100 rounded"
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={handleChange}
          value={registerData.name}
        />

        <input
          className=" border p-1 w-100 rounded"
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
          value={registerData.email}
        />
        <input
          className=" border p-1 w-100 rounded"
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
          value={registerData.password}
        />
        <input type="submit" className="border w-40 bg-black text-white p-1 rounded-2xl" value={"Register"} />
      </form>
    </>
  );
}

export default Register
