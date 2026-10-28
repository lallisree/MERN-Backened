import { useContext } from "react"
import Themecontext from "../context/Themecontext"


const Display = () => {
    const { theme, toggleTheme } = useContext(Themecontext);

  return (
    <div
      style={{
        backgroundColor: theme === "Light" ? "black" : "white",
        color: theme === "Light" ? "black" : "white",
        padding: "10px",
      }}
    >
      <h2>{theme}</h2>
      <button onClick = {toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Display
