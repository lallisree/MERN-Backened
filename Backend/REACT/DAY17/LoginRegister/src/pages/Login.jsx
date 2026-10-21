import { useState } from "react";
import { useNavigate } from "react-router-dom";

const login = () => {
  const navigate = useNavigate();
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("hi");
    
    e.preventDefault();

    const getDatas = JSON.parse(localStorage.getItem("registerdatas")); 

    if(!getDatas){
      alert("Your not a valid user")
      navigate("/")
      return
    }

    const checkuser = getDatas.find((e) => e.email === loginData.email && e.password === loginData.password);

    console.log("HI",checkuser);

    if (!checkuser){

      alert('your not a valid user please register')
      return
    } 
    
    localStorage.setItem("isActiveuser", JSON.stringify(checkuser))

    setloginData({ email: "", password: "" });

    navigate("/home");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-10 flex flex-col justify-center items-center w-350 gap-10"
      >

        <input
          className=" border p-1 w-100 rounded"
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
          value={loginData.email}
        />
        <input
          className=" border p-1 w-100 rounded"
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
          value={loginData.password}
        />
        <input
          type="submit"
          className="border w-40 bg-black text-white p-1 rounded-2xl"
          value={"login"}
        />
      </form>
    </>
  );
};

export default login;
