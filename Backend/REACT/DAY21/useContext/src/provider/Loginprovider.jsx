import { useState } from "react"
import Logincontext from "../context/Logincontext"


const Loginprovider = ({children}) => {

    const [login,setLogin] = useState({isLoggedIn:false, username:"Lalli"});

    const log = () => {
        setLogin({...login, isLoggedIn: true});
    };

    const logout = () => {
        setLogin({...login, isLoggedIn: false});
    };
  
  return (
    <div>
        <Logincontext.Provider value = {{login, log, logout}}>
            {children}
        </Logincontext.Provider>
      
    </div>
  )
}

export default Loginprovider
