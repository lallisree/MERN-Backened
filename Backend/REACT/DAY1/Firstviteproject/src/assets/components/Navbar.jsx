import { Component } from "react";

class Navbar extends Component{

    render() {
            const navbarStyle = {
      display: "flex",
      gap:"12px",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 32px",
      backgroundColor: "#75bfe7",
      color: "black",
      textDecoration:"none",
      padding:4,
    };

        return <>
        <nav style={navbarStyle}>
          <div>
            <h1>react multiple components</h1>
          </div>
          <div>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Contact</a>
          </div>
          </nav>
        
        </>
    }
}

export default Navbar