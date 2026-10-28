import { useState } from "react"
import Themecontext from "../context/Themecontext";


const Themeprovider = ({children}) => {

    const [theme, setTheme] = useState("Light")

    const toggleTheme = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
    }
  return (
    <div>
      <Themecontext.Provider value={{ theme, toggleTheme }}>
        {children}
      </Themecontext.Provider>
    </div>
  );
}

export default Themeprovider
