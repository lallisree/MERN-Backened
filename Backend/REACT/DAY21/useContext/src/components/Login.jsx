import { useContext } from "react";
import Logincontext from "../context/Logincontext"

const Login = () => {
    const {login, log, logout} = useContext(Logincontext)
  return (
    <div>
        {login.isLoggedIn ? (
            <>
            <h2>Welcome {login.username}</h2>
            <button onClick = {logout}>Logout</button>
            </> ) : (
                <>
                <h2>Please Login</h2>
                <button onClick = {log}>Login</button>
                </>
            )}
    </div>
  );
}

export default Login
