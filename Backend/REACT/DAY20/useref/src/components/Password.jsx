import { useRef } from "react";

const Password = () => {
  const passwordRef = useRef(null);

  const showPassword = () => {
    passwordRef.current.type = "text";
  };

  const hidePassword = () => {
    passwordRef.current.type = "password";
  };

  return (
    <div>
      <input ref={passwordRef} type="password" placeholder="Enter Password" />
<br/><br/>
      <button onClick={showPassword}>Show</button>
      <button onClick={hidePassword}>Hide</button>
    </div>
  );
};

export default Password;
