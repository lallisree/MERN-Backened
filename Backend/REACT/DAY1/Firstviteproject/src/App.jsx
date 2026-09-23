import { Component } from "react";
import Navbar from './assets/components/Navbar.jsx';
import Banner from "./assets/components/Banner.jsx";
import About from "./assets/components/About.jsx";

class App extends Component{

  render(){
    return <>
    <div>

       <Navbar/>
       <Banner/>
       <About/>

    </div>
    
    </>
  }
}

export default App