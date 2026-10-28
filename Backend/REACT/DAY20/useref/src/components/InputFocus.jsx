import { useRef, useState } from "react";

const InputFocus = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const clearForm = () => {
    setName("");
    setEmail("");
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert("Name: " + name + "\nEmail: " + email);
  };

  return (
    <form onSubmit={submitForm}>
      <input
        ref={nameRef}
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />

      <input
        ref={emailRef}
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />

      <button type="button" onClick={() => nameRef.current.focus()}>
        Focus Name
      </button>

      <button type="button" onClick={() => emailRef.current.focus()}>
        Focus Email
      </button>

      <button type="button" onClick={clearForm}>
        Clear
      </button>

      <button type="submit">Submit</button>
    </form>
  );
};

export default InputFocus;

// import { useRef, useState } from "react"

// const InputFocus = () => {

//    const textRef = useRef("")
//    const [data,setData] = useState("")

//    return (
//      <div>
//        <input
//          type="text"
//          name="name"
//          placeholder="Enter your name"
//          value={data}
//          onChange={() => setData(e.target.value)}
//        />
//        <br/><br/>
//        <input
//          type="text"
//          name="email"
//          placeholder="Enter your email"
//          value={data}
//          onChange={() => setData(e.target.value)}
//        />
//      </div>
//    );
// }

// export default InputFocus
